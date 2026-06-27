import { useState, useRef } from 'react';
import Link from 'next/link';

export default function UploadTool({ mode = 'tree' }) {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [drag, setDrag] = useState(false);
  const fileRef = useRef();

  const endpoint = mode === 'leaf' ? '/api/leaf-identify' : '/api/identify';

  const handleFile = (file) => {
    if (!file || !file.type.startsWith('image/')) {
      setError('Please upload a valid image file (JPG, PNG, WEBP).');
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      setError('Image must be under 10MB.');
      return;
    }
    setError('');
    setResult(null);
    setImage(file);
    const reader = new FileReader();
    reader.onload = (e) => setPreview(e.target.result);
    reader.readAsDataURL(file);
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
      const reader = new FileReader();
      reader.onload = async (e) => {
        const base64 = e.target.result.split(',')[1];
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ image: base64, mimeType: image.type }),
        });

        const data = await res.json();
        if (!res.ok) throw new Error(data.error || 'Identification failed');
        setResult(data);
        setLoading(false);
      };
      reader.readAsDataURL(image);
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
      setLoading(false);
    }
  };

  const reset = () => {
    setImage(null);
    setPreview(null);
    setResult(null);
    setError('');
  };

  return (
    <div>
      {!result && (
        <>
          <div
            className={`upload-zone ${drag ? 'dragover' : ''}`}
            onDragOver={(e) => { e.preventDefault(); setDrag(true); }}
            onDragLeave={() => setDrag(false)}
            onDrop={handleDrop}
            onClick={() => fileRef.current.click()}
          >
            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              onChange={(e) => handleFile(e.target.files[0])}
            />
            {preview ? (
              <img src={preview} alt="Selected tree" className="img-preview" style={{ marginTop: 0 }} />
            ) : (
              <>
                <div className="upload-icon">🌿</div>
                <h3>Drop your {mode === 'leaf' ? 'leaf' : 'tree'} photo here</h3>
                <p>or click to browse · JPG, PNG, WEBP · Max 10MB</p>
              </>
            )}
          </div>

          {preview && (
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
              <button className="btn-primary" onClick={handleIdentify} disabled={loading}>
                {loading ? '🔍 Analyzing...' : `🔍 Identify ${mode === 'leaf' ? 'Leaf' : 'Tree'}`}
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
            🤖 AI is analyzing your {mode === 'leaf' ? 'leaf' : 'tree'} image...
          </p>
        </div>
      )}

      {error && (
        <div style={{
          background: 'rgba(220,38,38,0.1)',
          border: '1px solid rgba(220,38,38,0.3)',
          borderRadius: '12px',
          padding: '1rem 1.5rem',
          marginTop: '1rem',
          color: '#fca5a5',
          fontSize: '0.95rem'
        }}>
          ⚠️ {error}
        </div>
      )}

      {result && (
        <div className="result-box">
          {preview && (
            <img src={preview} alt="Identified tree" className="img-preview" style={{ marginBottom: '1.5rem', marginTop: 0 }} />
          )}

          <h2>✅ {result.commonName || 'Tree Identified!'}</h2>

          <div className="result-grid">
            {result.scientificName && (
              <div className="result-item">
                <label>Scientific Name</label>
                <p><em>{result.scientificName}</em></p>
              </div>
            )}
            {result.family && (
              <div className="result-item">
                <label>Family</label>
                <p>{result.family}</p>
              </div>
            )}
            {result.nativeRegion && (
              <div className="result-item">
                <label>Native Region</label>
                <p>{result.nativeRegion}</p>
              </div>
            )}
            {result.treeType && (
              <div className="result-item">
                <label>Tree Type</label>
                <p>{result.treeType}</p>
              </div>
            )}
            {result.height && (
              <div className="result-item">
                <label>Typical Height</label>
                <p>{result.height}</p>
              </div>
            )}
            {result.leafType && (
              <div className="result-item">
                <label>Leaf Type</label>
                <p>{result.leafType}</p>
              </div>
            )}
            {result.confidence && (
              <div className="result-item">
                <label>Confidence</label>
                <p>{result.confidence}%</p>
              </div>
            )}
            {result.conservationStatus && (
              <div className="result-item">
                <label>Conservation Status</label>
                <p>{result.conservationStatus}</p>
              </div>
            )}
          </div>

          {result.confidence && (
            <div className="confidence-bar-wrap">
              <label>
                <span>AI Confidence Score</span>
                <span>{result.confidence}%</span>
              </label>
              <div className="confidence-bar">
                <div className="confidence-fill" style={{ width: `${result.confidence}%` }}></div>
              </div>
            </div>
          )}

          {result.description && (
            <div className="result-description">
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 600, color: 'var(--bright-green)', marginBottom: '0.6rem' }}>
                About this Tree
              </h3>
              <p>{result.description}</p>
            </div>
          )}

          {result.careTips && (
            <div className="result-description" style={{ marginTop: '1rem', background: 'rgba(64,192,116,0.05)', padding: '1rem', borderRadius: '10px', border: '1px solid var(--card-border)' }}>
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 600, color: 'var(--bright-green)', marginBottom: '0.6rem' }}>
                🌱 Care Tips
              </h3>
              <p>{result.careTips}</p>
            </div>
          )}

          {result.uses && (
            <div className="result-description" style={{ marginTop: '1rem', background: 'rgba(64,192,116,0.05)', padding: '1rem', borderRadius: '10px', border: '1px solid var(--card-border)' }}>
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 600, color: 'var(--bright-green)', marginBottom: '0.6rem' }}>
                💡 Common Uses
              </h3>
              <p>{result.uses}</p>
            </div>
          )}

          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
            <button className="btn-primary" onClick={reset}>🔄 Identify Another</button>
            <Link href="/identify-tree-by-leaf" className="btn-outline">🍃 Try Leaf Identification</Link>
          </div>
        </div>
      )}
    </div>
  );
}
