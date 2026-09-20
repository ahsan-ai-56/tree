import { useState, useRef } from 'react';
import Link from 'next/link';

// Compress image before sending
function compressImage(file, maxSizeMB = 3, maxWidthPx = 1280) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      URL.revokeObjectURL(url);
      let { width, height } = img;
      if (width > maxWidthPx) {
        height = Math.round((height * maxWidthPx) / width);
        width = maxWidthPx;
      }
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      canvas.getContext('2d').drawImage(img, 0, 0, width, height);
      let quality = 0.85;
      const tryCompress = () => {
        canvas.toBlob((blob) => {
          if (!blob) return reject(new Error('Compression failed'));
          if (blob.size / (1024 * 1024) <= maxSizeMB || quality <= 0.3) {
            resolve(new File([blob], file.name, { type: 'image/jpeg' }));
          } else {
            quality -= 0.1;
            tryCompress();
          }
        }, 'image/jpeg', quality);
      };
      tryCompress();
    };
    img.onerror = () => reject(new Error('Could not load image'));
    img.src = url;
  });
}

export default function UploadTool({ mode = 'tree' }) {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [drag, setDrag] = useState(false);
  const [compressing, setCompressing] = useState(false);
  const fileRef = useRef();

  // Each mode gets its own endpoint
  const getEndpoint = () => {
    if (mode === 'leaf') return '/api/leaf-identify';
    if (mode === 'wood') return '/api/wood-identify';
    if (mode === 'plant') return '/api/plant-identify';
    return '/api/identify';
  };

  const getLabel = () => {
    if (mode === 'leaf') return 'Leaf';
    if (mode === 'wood') return 'Wood';
    if (mode === 'plant') return 'Plant';
    return 'Tree';
  };

  const getIcon = () => {
    if (mode === 'leaf') return '🍃';
    if (mode === 'wood') return '🪵';
    if (mode === 'plant') return '🌿';
    return '🌳';
  };

  const handleFile = async (file) => {
    if (!file || !file.type.startsWith('image/')) {
      setError('Please upload a valid image file (JPG, PNG, WEBP).');
      return;
    }
    if (file.size > 20 * 1024 * 1024) {
      setError('Image must be under 20MB.');
      return;
    }
    setError('');
    setResult(null);

    let finalFile = file;
    if (file.size > 3 * 1024 * 1024) {
      setCompressing(true);
      try {
        finalFile = await compressImage(file);
      } catch {
        setError('Could not process image. Please try a different photo.');
        setCompressing(false);
        return;
      }
      setCompressing(false);
    }

    setImage(finalFile);
    const reader = new FileReader();
    reader.onload = (e) => setPreview(e.target.result);
    reader.readAsDataURL(finalFile);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDrag(false);
    handleFile(e.dataTransfer.files[0]);
  };

  const handleIdentify = async () => {
    if (!image) return;
    setLoading(true);
    setError('');
    setResult(null);

    try {
      const base64 = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => resolve(e.target.result.split(',')[1]);
        reader.onerror = () => reject(new Error('Failed to read image file'));
        reader.readAsDataURL(image);
      });

      const res = await fetch(getEndpoint(), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ image: base64, mimeType: image.type }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Identification failed. Please try again.');
      setResult(data);
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setImage(null);
    setPreview(null);
    setResult(null);
    setError('');
  };

  // Wood result display
  const renderWoodResult = () => (
    <div className="result-box">
      {preview && <img src={preview} alt="Identified wood" className="img-preview" style={{ marginBottom: '1.5rem', marginTop: 0 }} />}
      <h2>✅ {result.woodName || 'Wood Identified!'}</h2>
      <div className="result-grid">
        {result.scientificName && <div className="result-item"><label>Scientific Name</label><p><em>{result.scientificName}</em></p></div>}
        {result.woodType && <div className="result-item"><label>Wood Type</label><p>{result.woodType}</p></div>}
        {result.family && <div className="result-item"><label>Family</label><p>{result.family}</p></div>}
        {result.nativeRegion && <div className="result-item"><label>Native Region</label><p>{result.nativeRegion}</p></div>}
        {result.jankaHardness && <div className="result-item"><label>Janka Hardness</label><p>{result.jankaHardness}</p></div>}
        {result.color && <div className="result-item"><label>Color</label><p>{result.color}</p></div>}
        {result.grainPattern && <div className="result-item"><label>Grain Pattern</label><p>{result.grainPattern}</p></div>}
        {result.texture && <div className="result-item"><label>Texture</label><p>{result.texture}</p></div>}
        {result.workability && <div className="result-item"><label>Workability</label><p>{result.workability}</p></div>}
        {result.durability && <div className="result-item"><label>Durability</label><p>{result.durability}</p></div>}
        {result.confidence && <div className="result-item"><label>Confidence</label><p>{result.confidence}%</p></div>}
      </div>
      {result.confidence && (
        <div className="confidence-bar-wrap">
          <label><span>AI Confidence Score</span><span>{result.confidence}%</span></label>
          <div className="confidence-bar"><div className="confidence-fill" style={{ width: `${result.confidence}%` }}></div></div>
        </div>
      )}
      {result.description && (
        <div className="result-description">
          <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 600, color: 'var(--bright-green)', marginBottom: '0.6rem' }}>About this Wood</h3>
          <p>{result.description}</p>
        </div>
      )}
      {result.bestUses && (
        <div className="result-description" style={{ marginTop: '1rem', background: 'rgba(64,192,116,0.05)', padding: '1rem', borderRadius: '10px', border: '1px solid var(--card-border)' }}>
          <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 600, color: 'var(--bright-green)', marginBottom: '0.6rem' }}>🪚 Best Uses</h3>
          <p>{result.bestUses}</p>
        </div>
      )}
      {result.finishingTips && (
        <div className="result-description" style={{ marginTop: '1rem', background: 'rgba(64,192,116,0.05)', padding: '1rem', borderRadius: '10px', border: '1px solid var(--card-border)' }}>
          <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 600, color: 'var(--bright-green)', marginBottom: '0.6rem' }}>✨ Finishing Tips</h3>
          <p>{result.finishingTips}</p>
        </div>
      )}
      <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
        <button className="btn-primary" onClick={reset}>🔄 Identify Another</button>
        <Link href="/tree-identifier" className="btn-outline">🌳 Try Tree Identifier</Link>
      </div>
    </div>
  );

  // Plant result display
  const renderPlantResult = () => (
    <div className="result-box">
      {preview && <img src={preview} alt="Identified plant" className="img-preview" style={{ marginBottom: '1.5rem', marginTop: 0 }} />}
      <h2>✅ {result.commonName || 'Plant Identified!'}</h2>
      <div className="result-grid">
        {result.scientificName && <div className="result-item"><label>Scientific Name</label><p><em>{result.scientificName}</em></p></div>}
        {result.family && <div className="result-item"><label>Family</label><p>{result.family}</p></div>}
        {result.nativeRegion && <div className="result-item"><label>Native Region</label><p>{result.nativeRegion}</p></div>}
        {result.plantType && <div className="result-item"><label>Plant Type</label><p>{result.plantType}</p></div>}
        {result.height && <div className="result-item"><label>Typical Height</label><p>{result.height}</p></div>}
        {result.flowerColor && <div className="result-item"><label>Flower Color</label><p>{result.flowerColor}</p></div>}
        {result.bloomSeason && <div className="result-item"><label>Bloom Season</label><p>{result.bloomSeason}</p></div>}
        {result.sunRequirement && <div className="result-item"><label>Sun Requirement</label><p>{result.sunRequirement}</p></div>}
        {result.waterRequirement && <div className="result-item"><label>Water Requirement</label><p>{result.waterRequirement}</p></div>}
        {result.soilType && <div className="result-item"><label>Soil Type</label><p>{result.soilType}</p></div>}
        {result.toxicity && <div className="result-item"><label>Toxicity</label><p>{result.toxicity}</p></div>}
        {result.confidence && <div className="result-item"><label>Confidence</label><p>{result.confidence}%</p></div>}
      </div>
      {result.confidence && (
        <div className="confidence-bar-wrap">
          <label><span>AI Confidence Score</span><span>{result.confidence}%</span></label>
          <div className="confidence-bar"><div className="confidence-fill" style={{ width: `${result.confidence}%` }}></div></div>
        </div>
      )}
      {result.description && (
        <div className="result-description">
          <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 600, color: 'var(--bright-green)', marginBottom: '0.6rem' }}>About this Plant</h3>
          <p>{result.description}</p>
        </div>
      )}
      {result.careTips && (
        <div className="result-description" style={{ marginTop: '1rem', background: 'rgba(64,192,116,0.05)', padding: '1rem', borderRadius: '10px', border: '1px solid var(--card-border)' }}>
          <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 600, color: 'var(--bright-green)', marginBottom: '0.6rem' }}>🌱 Care Tips</h3>
          <p>{result.careTips}</p>
        </div>
      )}
      {result.uses && (
        <div className="result-description" style={{ marginTop: '1rem', background: 'rgba(64,192,116,0.05)', padding: '1rem', borderRadius: '10px', border: '1px solid var(--card-border)' }}>
          <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 600, color: 'var(--bright-green)', marginBottom: '0.6rem' }}>💡 Uses</h3>
          <p>{result.uses}</p>
        </div>
      )}
      <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
        <button className="btn-primary" onClick={reset}>🔄 Identify Another</button>
        <Link href="/tree-identifier" className="btn-outline">🌳 Try Tree Identifier</Link>
      </div>
    </div>
  );

  // Tree/Leaf result display
  const renderTreeResult = () => (
    <div className="result-box">
      {preview && <img src={preview} alt="Identified" className="img-preview" style={{ marginBottom: '1.5rem', marginTop: 0 }} />}
      <h2>✅ {result.commonName || 'Identified!'}</h2>
      <div className="result-grid">
        {result.scientificName && <div className="result-item"><label>Scientific Name</label><p><em>{result.scientificName}</em></p></div>}
        {result.family && <div className="result-item"><label>Family</label><p>{result.family}</p></div>}
        {result.nativeRegion && <div className="result-item"><label>Native Region</label><p>{result.nativeRegion}</p></div>}
        {result.treeType && <div className="result-item"><label>Tree Type</label><p>{result.treeType}</p></div>}
        {result.height && <div className="result-item"><label>Typical Height</label><p>{result.height}</p></div>}
        {result.leafType && <div className="result-item"><label>Leaf Type</label><p>{result.leafType}</p></div>}
        {result.leafShape && <div className="result-item"><label>Leaf Shape</label><p>{result.leafShape}</p></div>}
        {result.leafMargin && <div className="result-item"><label>Leaf Margin</label><p>{result.leafMargin}</p></div>}
        {result.venation && <div className="result-item"><label>Venation</label><p>{result.venation}</p></div>}
        {result.conservationStatus && <div className="result-item"><label>Conservation Status</label><p>{result.conservationStatus}</p></div>}
        {result.confidence && <div className="result-item"><label>Confidence</label><p>{result.confidence}%</p></div>}
      </div>
      {result.confidence && (
        <div className="confidence-bar-wrap">
          <label><span>AI Confidence Score</span><span>{result.confidence}%</span></label>
          <div className="confidence-bar"><div className="confidence-fill" style={{ width: `${result.confidence}%` }}></div></div>
        </div>
      )}
      {result.description && (
        <div className="result-description">
          <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 600, color: 'var(--bright-green)', marginBottom: '0.6rem' }}>About this Tree</h3>
          <p>{result.description}</p>
        </div>
      )}
      {result.careTips && (
        <div className="result-description" style={{ marginTop: '1rem', background: 'rgba(64,192,116,0.05)', padding: '1rem', borderRadius: '10px', border: '1px solid var(--card-border)' }}>
          <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 600, color: 'var(--bright-green)', marginBottom: '0.6rem' }}>🌱 Care Tips</h3>
          <p>{result.careTips}</p>
        </div>
      )}
      {result.uses && (
        <div className="result-description" style={{ marginTop: '1rem', background: 'rgba(64,192,116,0.05)', padding: '1rem', borderRadius: '10px', border: '1px solid var(--card-border)' }}>
          <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 600, color: 'var(--bright-green)', marginBottom: '0.6rem' }}>💡 Common Uses</h3>
          <p>{result.uses}</p>
        </div>
      )}
      <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
        <button className="btn-primary" onClick={reset}>🔄 Identify Another</button>
        {mode === 'tree' ? (
          <Link href="/identify-tree-by-leaf" className="btn-outline">🍃 Try Leaf ID</Link>
        ) : (
          <Link href="/tree-identifier" className="btn-outline">🌳 Try Tree ID</Link>
        )}
      </div>
    </div>
  );

  return (
    <div>
      {!result && (
        <>
          <div
            className={`upload-zone ${drag ? 'dragover' : ''}`}
            onDragOver={(e) => { e.preventDefault(); setDrag(true); }}
            onDragLeave={() => setDrag(false)}
            onDrop={handleDrop}
            onClick={() => !compressing && fileRef.current.click()}
          >
            <input ref={fileRef} type="file" accept="image/*" onChange={(e) => handleFile(e.target.files[0])} />
            {compressing ? (
              <p style={{ color: 'var(--gray-mid)' }}>⏳ Optimizing image...</p>
            ) : preview ? (
              <img src={preview} alt="Selected" className="img-preview" style={{ marginTop: 0 }} />
            ) : (
              <>
                <div className="upload-icon">{getIcon()}</div>
                <h3>Drop your {getLabel().toLowerCase()} photo here</h3>
                <p>or click to browse · JPG, PNG, WEBP · Max 20MB</p>
              </>
            )}
          </div>

          {preview && !loading && !compressing && (
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
              <button className="btn-primary" onClick={handleIdentify} disabled={loading}>
                🔍 Identify {getLabel()}
              </button>
              <button className="btn-outline" onClick={reset}>↩ Reset</button>
            </div>
          )}
        </>
      )}

      {loading && (
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <div className="spinner"></div>
          <p style={{ color: 'var(--gray-mid)', marginTop: '1rem' }}>
            🤖 AI is analyzing your {getLabel().toLowerCase()} image...
          </p>
          <p style={{ color: 'var(--gray-mid)', fontSize: '0.85rem', marginTop: '0.5rem' }}>
            This usually takes 5–15 seconds
          </p>
        </div>
      )}

      {error && (
        <div style={{ background: 'rgba(220,38,38,0.1)', border: '1px solid rgba(220,38,38,0.3)', borderRadius: '12px', padding: '1rem 1.5rem', marginTop: '1rem', color: '#fca5a5', fontSize: '0.95rem' }}>
          ⚠️ {error}
          {image && (
            <div style={{ marginTop: '0.8rem' }}>
              <button className="btn-outline" style={{ fontSize: '0.85rem', padding: '6px 16px' }} onClick={handleIdentify}>
                🔄 Try Again
              </button>
            </div>
          )}
        </div>
      )}

      {result && (mode === 'wood' ? renderWoodResult() : mode === 'plant' ? renderPlantResult() : renderTreeResult())}
    </div>
  );
}
