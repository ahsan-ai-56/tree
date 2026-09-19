import Layout from '../components/Layout';
import Link from 'next/link';
import UploadTool from '../components/UploadTool';

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Wood Identifier — Free AI Wood Type Identification Tool",
    "description": "Free AI wood identifier tool. Upload a photo of any wood grain, timber, or lumber to instantly identify the wood species, Janka hardness, grain pattern, workability, and best uses.",
    "url": "https://treeidentifier.online/wood-identifier",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://treeidentifier.online/" },
        { "@type": "ListItem", "position": 2, "name": "Wood Identifier", "item": "https://treeidentifier.online/wood-identifier" }
      ]
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Wood Identifier",
    "applicationCategory": "UtilitiesApplication",
    "operatingSystem": "Web Browser",
    "description": "AI-powered wood identification tool. Identify any wood species from a photo — works on raw timber, finished wood, furniture, flooring, and lumber. Provides Janka hardness, grain pattern, workability, and uses.",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "url": "https://treeidentifier.online/wood-identifier",
    "featureList": [
      "Identify 100+ wood species from photos",
      "Janka hardness rating",
      "Grain pattern analysis",
      "Hardwood vs softwood classification",
      "Workability and finishing tips",
      "Best uses recommendations"
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I identify wood type from a photo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Upload a clear photo of the wood grain, end grain (cross-section), or surface to our AI wood identifier. The AI analyzes grain pattern, color, pore structure, rays, and texture to identify the wood species instantly. For best results, photograph in natural daylight with the grain clearly visible. An end grain cross-section provides the most identifying features and gives the highest accuracy."
        }
      },
      {
        "@type": "Question",
        "name": "What types of wood can this tool identify?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our wood identifier tool recognizes 100+ wood species including common hardwoods (oak, walnut, maple, cherry, ash, mahogany, teak, birch, beech, hickory), softwoods (pine, cedar, fir, spruce, redwood, cypress), and exotic/tropical woods (ebony, rosewood, padauk, purpleheart, zebrawood, wenge). It works on raw timber, finished wood furniture, flooring planks, cutting boards, and any wood surface."
        }
      },
      {
        "@type": "Question",
        "name": "What is Janka hardness and why does it matter?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Janka hardness is the standard measurement of wood hardness — it measures the force required to embed a steel ball halfway into a wood sample. Measured in pounds-force (lbf) in the US or kilonewtons (kN) elsewhere. A higher Janka rating means harder wood. For flooring, a minimum Janka of 1000 lbf is recommended for high-traffic areas. Hickory (1820 lbf) and hard maple (1450 lbf) are among the hardest common North American woods, while pine (870 lbf) and cedar (350 lbf) are softer. Our wood identifier provides the Janka hardness rating for every identified wood species."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between hardwood and softwood?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Hardwood comes from deciduous trees (trees that lose their leaves seasonally) such as oak, walnut, maple, cherry, and ash. Softwood comes from coniferous trees (evergreen trees with needles) such as pine, cedar, fir, spruce, and redwood. The terms refer to the botanical classification of the tree, not necessarily the actual hardness of the wood — balsa wood is technically a hardwood but is very soft, while yew is classified as a softwood but is harder than many hardwoods."
        }
      },
      {
        "@type": "Question",
        "name": "Can I identify wood from furniture or flooring?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — our wood identifier works on finished wood including furniture, flooring, cabinets, and decorative wood. For best results on finished surfaces, photograph a section where the grain is clearly visible in good natural light. If the finish is very thick or painted, look for a raw edge or underside of the piece for a clearer grain view. The AI can identify wood through most standard finishes (oil, wax, varnish, polyurethane)."
        }
      },
      {
        "@type": "Question",
        "name": "How accurate is the AI wood identification?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our AI wood identifier achieves high accuracy for common wood species under good lighting conditions. Accuracy is highest for woods with distinctive grain patterns (walnut, oak, teak, pine) and lower for woods with very similar grain patterns. For best accuracy: use natural daylight, show end grain or a clean cross-section if possible, ensure the image is sharp and in focus, and avoid extreme zoom that loses grain context. The AI provides a confidence score with each identification."
        }
      },
      {
        "@type": "Question",
        "name": "What wood is best for furniture making?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The best woods for furniture depend on the application. For fine furniture: walnut (rich color, excellent workability), cherry (beautiful aging, fine grain), and maple (hard, takes finish well). For general furniture: oak (durable, classic grain), ash (flexible, strong), and mahogany (traditional, stable). For budget-friendly furniture: pine (easy to work, takes stain) and poplar (smooth, paints well). For outdoor furniture: teak (naturally oily, weather-resistant), cedar (rot-resistant, aromatic), and white oak (rot-resistant due to closed tyloses)."
        }
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Identify Wood Type from a Photo",
    "description": "Step-by-step guide to identifying wood species using our free AI wood identifier tool.",
    "step": [
      { "@type": "HowToStep", "position": 1, "name": "Take a Clear Photo", "text": "Photograph the wood in natural light. Show end grain (cross-section) for highest accuracy, or photograph the surface grain clearly." },
      { "@type": "HowToStep", "position": 2, "name": "Upload to Wood Identifier", "text": "Drag and drop or click to upload your photo. JPG, PNG, or WEBP format, under 10MB." },
      { "@type": "HowToStep", "position": 3, "name": "Get Instant Results", "text": "AI analyzes grain pattern, color, pore structure, and texture to identify the wood species with Janka hardness, workability, and uses." }
    ]
  }
];

const woodFeatures = [
  { icon: '🔬', title: 'Grain Pattern Analysis', desc: 'AI analyzes fine vs coarse grain, straight vs interlocked patterns, and distinctive ray patterns to identify wood species accurately.' },
  { icon: '🎨', title: 'Color & Texture Detection', desc: 'Detects heartwood vs sapwood color variations, surface texture, luster, and distinctive color patterns unique to each species.' },
  { icon: '🌳', title: '100+ Species Identified', desc: 'Identifies hardwoods, softwoods, and exotic timbers from oak and walnut to teak, ebony, and tropical species.' },
  { icon: '💪', title: 'Janka Hardness Rating', desc: 'Provides the industry-standard Janka hardness rating for every identified wood — essential for flooring and furniture decisions.' },
  { icon: '🪚', title: 'Workability Guide', desc: 'Explains how the wood works — carving, turning, planing, sanding, and finishing characteristics for woodworkers.' },
  { icon: '🏗️', title: 'Best Uses Recommendations', desc: 'Recommends ideal applications for each wood — furniture, flooring, outdoor use, carving, musical instruments, and more.' },
];

const commonWoods = [
  { name: 'White Oak', hardness: '1360 lbf', type: 'Hardwood', color: 'Light to medium brown', grain: 'Coarse, open grain, prominent medullary rays', uses: 'Furniture, flooring, wine barrels, boat building' },
  { name: 'Black Walnut', hardness: '1010 lbf', type: 'Hardwood', color: 'Chocolate to dark brown', grain: 'Straight to wavy, fine uniform texture', uses: 'Fine furniture, gunstocks, cabinets, carvings' },
  { name: 'Hard Maple', hardness: '1450 lbf', type: 'Hardwood', color: 'Cream to light reddish-brown', grain: 'Fine, uniform, often with figure (birds eye, curly)', uses: 'Flooring, cutting boards, musical instruments, butcher blocks' },
  { name: 'Cherry', hardness: '950 lbf', type: 'Hardwood', color: 'Light pink to rich red-brown (darkens with age)', grain: 'Fine, straight, satiny smooth surface', uses: 'Fine furniture, cabinets, musical instruments, veneers' },
  { name: 'Shagbark Hickory', hardness: '1820 lbf', type: 'Hardwood', color: 'Pale to medium brown', grain: 'Straight to wavy, coarse texture', uses: 'Tool handles, flooring, sports equipment, smoking wood' },
  { name: 'Eastern White Pine', hardness: '380 lbf', type: 'Softwood', color: 'Pale yellow to light brown', grain: 'Straight, fine to medium, resin canals visible', uses: 'Construction, furniture, trim, carving, pattern making' },
  { name: 'Teak', hardness: '1070 lbf', type: 'Hardwood', color: 'Golden to dark brown, oily feel', grain: 'Straight to wavy, coarse, uneven texture', uses: 'Outdoor furniture, boat decking, flooring, countertops' },
  { name: 'Mahogany', hardness: '900 lbf', type: 'Hardwood', color: 'Pink to deep reddish-brown', grain: 'Straight to interlocked, ribbon stripe figure', uses: 'Fine furniture, boat building, musical instruments, veneers' },
  { name: 'Western Red Cedar', hardness: '350 lbf', type: 'Softwood', color: 'Reddish-brown to pinkish', grain: 'Straight, fine, aromatic, distinct growth rings', uses: 'Outdoor siding, fence posts, closets, decking, shingles' },
  { name: 'Ash', hardness: '1320 lbf', type: 'Hardwood', color: 'Light to medium brown', grain: 'Straight, coarse, similar to oak but without rays', uses: 'Sports equipment, tool handles, furniture, flooring' },
];

export default function WoodIdentifier() {
  return (
    <Layout
      meta={{
        title: 'Wood Identifier — Free AI Wood Type Identification from Photo',
        description: 'Free AI wood identifier tool. Upload a photo of any wood grain, timber, or lumber to instantly identify the wood species, Janka hardness rating, grain pattern, workability, and best uses. Works on furniture, flooring, raw timber, and more.',
        canonical: 'https://treeidentifier.online/wood-identifier',
        schema,
      }}
    >
      {/* HERO */}
      <section style={{
        background: `linear-gradient(180deg, rgba(5,5,5,0.75) 0%, var(--black) 100%), url('https://images.unsplash.com/photo-1542621334-a254cf47733d?w=1600&q=80') center/cover no-repeat`,
        padding: '100px 2rem 5rem',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(64,192,116,0.1)', border: '1px solid rgba(64,192,116,0.2)', borderRadius: '50px', padding: '6px 16px', marginBottom: '1.5rem' }}>
            <span style={{ color: 'var(--bright-green)', fontSize: '0.82rem', fontWeight: 600 }}>🪵 FREE AI WOOD IDENTIFIER</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', color: 'var(--white)', lineHeight: 1.1, marginBottom: '1.2rem' }}>
            Wood Identifier
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.75)', marginBottom: '2.5rem', lineHeight: 1.7 }}>
            Upload a photo of any wood grain, timber, plank, or finished wood — our AI instantly identifies the wood species, Janka hardness, grain pattern, workability, and best uses. 100% free, no signup required.
          </p>

          <div style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '20px', padding: '2rem', textAlign: 'left' }}>
            <UploadTool mode="wood" />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section" style={{ background: 'var(--deep-black)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', color: 'var(--white)', marginBottom: '1rem' }}>What Our Wood Identifier Detects</h2>
            <p style={{ color: 'var(--gray-mid)', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 }}>Advanced AI analyzes grain pattern, color, pore structure, rays, and texture to identify wood species with expert-level accuracy — and provides complete woodworking information for every identification.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {woodFeatures.map((f, i) => (
              <div key={i} className="card">
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{f.icon}</div>
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.05rem', fontWeight: 700, color: 'var(--white)', marginBottom: '0.5rem' }}>{f.title}</h3>
                <p style={{ color: 'var(--gray-mid)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO CONTENT — 1500 WORDS */}
      <section className="section">
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem', display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '4rem', alignItems: 'start' }}>
          <div className="prose-content" style={{ maxWidth: '100%' }}>

            <h2>Wood Identifier — How to Identify Wood Type from Any Photo</h2>
            <p>Wood identification is an essential skill for woodworkers, carpenters, antique restorers, flooring specialists, and anyone curious about the materials around them. Our free AI wood identifier makes this process instant and accurate — simply upload a photo of any wood surface and receive a complete identification including wood species, Janka hardness rating, grain characteristics, workability, and best uses.</p>
            <p>The AI analyzes multiple visual features simultaneously: grain pattern (straight, wavy, interlocked, irregular), pore structure (ring-porous vs diffuse-porous vs tracheid), ray visibility, color and luster, and surface texture. This multi-feature analysis allows accurate identification even from photos of finished furniture, flooring, or processed timber where some natural features may be obscured. For best results, also check our <Link href="/tree-identifier">Tree Identifier</Link> to identify the source tree, and our <Link href="/identify-tree-by-leaf">Leaf Identifier</Link> if you have access to the tree the wood came from.</p>

            {/* IMAGE */}
            <div style={{ margin: '2rem 0', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--card-border)' }}>
              <img src="https://images.unsplash.com/photo-1542621334-a254cf47733d?w=900&q=80" alt="Wood grain identification showing different wood types and grain patterns" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
              <div style={{ background: 'var(--card-bg)', padding: '0.8rem 1.2rem' }}>
                <p style={{ color: 'var(--gray-mid)', fontSize: '0.82rem', margin: 0 }}>🪵 Different wood species show dramatically different grain patterns, colors, and textures. Our AI wood identifier analyzes these visual characteristics to identify wood species accurately from photos — whether the wood is raw, finished, or part of a furniture piece.</p>
              </div>
            </div>

            <h2>How to Take the Best Photo for Wood Identification</h2>
            <p>The quality of your wood identification result depends significantly on the photo quality. Follow these guidelines for the most accurate wood identification:</p>
            <p><strong>End grain (cross-section) is best.</strong> A cross-section cut showing the end grain reveals the pore structure, ray pattern, and growth rings most clearly — these features are the most diagnostic for wood identification and provide the highest accuracy. If you have access to a freshly cut end grain surface, this is the ideal photo to take.</p>
            <p><strong>Natural daylight gives best color accuracy.</strong> Wood color varies significantly under different lighting conditions — artificial indoor lighting can make wood appear more yellow or orange, while LED lighting can shift colors in various ways. Natural diffuse daylight (near a window but not in direct sunlight) gives the most accurate color representation for identification.</p>
            <p><strong>Focus on the grain, not the figure.</strong> While attractive figuring (bird's eye, curly, quilted) is visually striking, the underlying grain structure and pore pattern are what identify the species. Make sure the base grain is in sharp focus rather than just the surface figure.</p>
            <p><strong>Include some scale.</strong> Very close macro photos can lose the context of grain scale — a grain that looks coarse up very close may be fine-grained in context. Including a small common object (coin, pencil) or shooting from 15-30cm distance helps the AI assess grain scale correctly.</p>

            <h2>Hardwood vs Softwood — Complete Identification Guide</h2>
            <p>The fundamental division in wood identification is between hardwoods and softwoods. Despite what the names suggest, this distinction is botanical rather than about actual hardness. Understanding the difference helps narrow wood identification significantly before even examining specific grain features.</p>
            <p><strong>Hardwoods</strong> come from deciduous trees — trees that lose their leaves seasonally (oak, walnut, maple, cherry, ash, birch, beech, hickory, mahogany, teak). Hardwoods have pores (vessels) visible in cross-section — these appear as small holes or open channels in the end grain. The pattern of these pores is one of the most reliable identification features: ring-porous hardwoods (oak, ash, hickory) have large visible pores concentrated in the early wood forming a distinct ring; diffuse-porous hardwoods (maple, cherry, walnut, birch) have pores distributed more uniformly throughout the growth ring. For the source trees of common hardwoods, see our species guides: <Link href="/blog/oak-tree-identification-guide">Oak Tree Identification</Link>, <Link href="/blog/walnut-tree-identification">Walnut Tree Guide</Link>, <Link href="/blog/hickory-tree-identification">Hickory Tree Identification</Link>, and <Link href="/blog/ash-tree-identification">Ash Tree Guide</Link>.</p>
            <p><strong>Softwoods</strong> come from coniferous trees — evergreen trees with needles (pine, cedar, fir, spruce, redwood, cypress, hemlock). Softwoods lack vessels entirely — instead of pores, their cross-sections show only growth rings (early wood and late wood bands) and resin canals (in pine and fir). The absence of visible pores in end grain immediately identifies a wood as a softwood. Resin canals appear as small white dots or lines in end grain and are found in pine, Douglas-fir, and spruce but not in cedar, hemlock, or true firs. For more on conifer identification, see our <Link href="/blog/pine-tree-identification">Pine Tree Identification Guide</Link>.</p>

            <h2>Janka Hardness — What It Means for Your Project</h2>
            <p>Janka hardness is the industry-standard measurement of wood resistance to denting and wear, and our wood identifier provides this rating for every identification. The Janka test measures the force required to embed a 0.444-inch (11.28mm) steel ball to half its diameter into a wood sample — the result is reported in pounds-force (lbf) in North America or kilonewtons (kN) in international contexts.</p>
            <p>Understanding Janka hardness helps you choose the right wood for your project. For <strong>hardwood flooring</strong> in high-traffic residential areas, a minimum Janka of 1000 lbf is recommended — harder woods like hickory (1820 lbf), hard maple (1450 lbf), and white oak (1360 lbf) are ideal for hallways, kitchens, and living areas. Softer hardwoods like pine (380-870 lbf depending on species) and cherry (950 lbf) dent more easily but are suitable for bedrooms and lower-traffic areas.</p>
            <p>For <strong>furniture and cutting boards</strong>, Janka hardness affects both durability and safety. Hard maple (1450 lbf) and teak (1070 lbf) make excellent cutting surfaces because they resist knife marks. For furniture that will see daily use, woods above 900 lbf (walnut, cherry, oak) provide excellent durability. For <strong>carving and turning</strong>, softer woods like basswood (410 lbf) and butternut (490 lbf) are preferred for their ease of working, while harder woods produce more durable finished pieces.</p>

            {/* IMAGE 2 */}
            <div style={{ margin: '2rem 0', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--card-border)' }}>
              <img src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=900&q=80" alt="Woodworking tools and wood grain showing hardwood identification" style={{ width: '100%', height: '260px', objectFit: 'cover' }} />
              <div style={{ background: 'var(--card-bg)', padding: '0.8rem 1.2rem' }}>
                <p style={{ color: 'var(--gray-mid)', fontSize: '0.82rem', margin: 0 }}>🪚 Wood identification is essential for woodworking — knowing the species determines the correct tools, techniques, and finishes to use. Janka hardness, grain direction, and working properties all vary significantly between species.</p>
              </div>
            </div>

            <h2>Wood Grain Patterns — Identification Guide</h2>
            <p>Grain pattern is one of the most reliable wood identification features visible in side-grain (face and edge grain) photos. Understanding grain terminology helps you describe and identify wood accurately.</p>
            <p><strong>Straight grain</strong> runs parallel to the long axis of the tree trunk — most common in conifers and many hardwoods. Straight-grained wood is easiest to work and most predictable to plane, cut, and finish. Oak, ash, and pine typically show straight grain in standard-cut lumber.</p>
            <p><strong>Interlocked grain</strong> spirals around the trunk, reversing direction every few growth rings. When sawn into lumber, interlocked grain creates a distinctive ribbon stripe figure on quartersawn faces — most visible in mahogany, sapele, and ribbon-striped eucalyptus. Interlocked grain is more difficult to plane cleanly but produces beautiful quartersawn lumber.</p>
            <p><strong>Wavy grain</strong> creates a rippled or "fiddleback" figure — particularly valued in maple (fiddleback maple) and anigre. Wavy grain is caused by the wood fibers growing in an undulating rather than straight pattern.</p>
            <p><strong>Rays</strong> are sheets of wood cells running radially from the center of the tree to the bark. In quartersawn oak and similar woods, rays appear as prominent flecks or ribbon patterns on the face grain — the most distinctive identification feature of oak (and beech, sycamore). In many other hardwoods rays are fine and inconspicuous.</p>

            <h2>Wood Color — How to Use Color in Identification</h2>
            <p>Wood color is a useful identification feature but must be used carefully — wood color changes significantly with age and exposure to light (photodegradation), and varies between heartwood and sapwood within the same tree. Fresh-cut walnut heartwood is a rich chocolate brown, but cherry starts pinkish-tan and darkens dramatically to a rich reddish-brown over years of light exposure. Teak starts golden and weathers to a silver-gray outdoors.</p>
            <p>The most reliable color-based identification features are: the contrast between heartwood and sapwood (very pronounced in black walnut — dark brown heartwood, cream sapwood; less pronounced in maple), distinctive colors that are consistent across specimens (the purple-brown of rosewood, the bright yellow of osage orange, the olive-brown of teak), and the change in color when freshly surfaced vs aged. Our AI wood identifier accounts for typical color variation ranges when making identifications.</p>

            <h2>Common Wood Species — Quick Reference Guide</h2>
            <p>The following table covers the most commonly identified wood species with key identification features and Janka hardness ratings.</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', margin: '1.5rem 0' }}>
              {commonWoods.map((wood, i) => (
                <div key={i} style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '12px', padding: '1.2rem' }}>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                    <div style={{ minWidth: '140px' }}>
                      <div style={{ color: 'var(--white)', fontWeight: 700, fontSize: '0.95rem' }}>{wood.name}</div>
                      <div style={{ display: 'flex', gap: '0.4rem', marginTop: '0.3rem', flexWrap: 'wrap' }}>
                        <span style={{ background: wood.type === 'Hardwood' ? 'rgba(64,192,116,0.12)' : 'rgba(96,165,250,0.12)', color: wood.type === 'Hardwood' ? 'var(--bright-green)' : '#60a5fa', border: `1px solid ${wood.type === 'Hardwood' ? 'rgba(64,192,116,0.25)' : 'rgba(96,165,250,0.25)'}`, borderRadius: '20px', padding: '2px 8px', fontSize: '0.7rem', fontWeight: 600 }}>{wood.type}</span>
                        <span style={{ background: 'rgba(251,191,36,0.1)', color: '#fbbf24', border: '1px solid rgba(251,191,36,0.2)', borderRadius: '20px', padding: '2px 8px', fontSize: '0.7rem', fontWeight: 600 }}>Janka {wood.hardness}</span>
                      </div>
                    </div>
                    <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                      <div>
                        <span style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', display: 'block', marginBottom: '0.15rem' }}>Color</span>
                        <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.82rem' }}>{wood.color}</span>
                      </div>
                      <div>
                        <span style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', display: 'block', marginBottom: '0.15rem' }}>Grain</span>
                        <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.82rem' }}>{wood.grain}</span>
                      </div>
                      <div style={{ gridColumn: '1 / -1' }}>
                        <span style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', display: 'block', marginBottom: '0.15rem' }}>Best Uses</span>
                        <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.82rem' }}>{wood.uses}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* IMAGE 3 */}
            <div style={{ margin: '2rem 0', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--card-border)' }}>
              <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80" alt="Different wood types showing grain patterns for wood identification" style={{ width: '100%', height: '260px', objectFit: 'cover' }} />
              <div style={{ background: 'var(--card-bg)', padding: '0.8rem 1.2rem' }}>
                <p style={{ color: 'var(--gray-mid)', fontSize: '0.82rem', margin: 0 }}>🌳 From source tree to finished lumber — our wood identifier bridges the gap between tree species and wood products. Identify any wood from a photo and learn about its source tree, working properties, and ideal applications.</p>
              </div>
            </div>

            <h2>Wood Identification for Specific Uses</h2>
            <p><strong>Wood identification for flooring:</strong> When identifying mystery flooring, look for Janka hardness (determines suitability for high-traffic use), species (affects refinishing options), and age/finish type. Old-growth longleaf pine flooring is increasingly valuable and identifiable by its tight growth rings. White oak flooring is popular for its closed tyloses (makes it water-resistant and suitable for wine barrels and bathroom flooring). For tree identification related to oak flooring, see our <Link href="/oak-tree-identifier">Oak Tree Identifier</Link>.</p>
            <p><strong>Wood identification for antiques:</strong> Antique furniture used woods that may be uncommon today — American chestnut (nearly extinct after blight), Cuban mahogany, old-growth eastern white pine, and quartersawn tiger oak were all common in early American and European furniture. Identifying these species correctly is important for appropriate restoration techniques and valuation.</p>
            <p><strong>Wood identification for firewood:</strong> Dense hardwoods (hickory, oak, ash, beech) provide more BTUs per cord and burn longer than softwoods or low-density hardwoods. Hickory and oak are considered the best firewood species. Identifying firewood species helps estimate burn quality. For hickory identification, see our <Link href="/blog/hickory-tree-identification">Hickory Tree Identification Guide</Link>.</p>

            <h2>Frequently Asked Questions — Wood Identifier</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', margin: '1.5rem 0' }}>
              {[
                { q: 'How do I identify wood type from a photo?', a: 'Upload a clear photo of the end grain (cross-section) or surface grain in natural light. Our AI analyzes grain pattern, pore structure, color, rays, and texture to identify the species. End grain photos give highest accuracy. Works on raw timber, finished wood, furniture, and flooring.' },
                { q: 'What types of wood can this tool identify?', a: 'Our wood identifier recognizes 100+ species including common hardwoods (oak, walnut, maple, cherry, ash, mahogany, teak, birch, beech, hickory), softwoods (pine, cedar, fir, spruce, redwood), and exotic/tropical woods. Works on raw timber, furniture, flooring planks, and any wood surface.' },
                { q: 'What is Janka hardness and why does it matter?', a: 'Janka hardness measures resistance to denting and wear — higher is harder. Essential for choosing flooring (minimum 1000 lbf for high-traffic areas), furniture wood (durability), and cutting boards. Hickory (1820 lbf) and hard maple (1450 lbf) are among the hardest. Our wood identifier provides Janka ratings for every identification.' },
                { q: 'What is the difference between hardwood and softwood?', a: 'Hardwood = from deciduous trees (oak, walnut, maple, cherry). Softwood = from coniferous trees (pine, cedar, fir, spruce). The terms are botanical, not about actual hardness — balsa is technically a hardwood but very soft. Hardwoods have pores visible in end grain; softwoods have only growth rings and possibly resin canals.' },
                { q: 'Can I identify wood from furniture or flooring?', a: 'Yes — upload a clear photo of the wood surface in good lighting. Works on finished furniture, flooring, cabinets. For best results on heavily finished pieces, photograph a raw edge or underside. The AI can identify wood through most standard finishes.' },
                { q: 'How accurate is the AI wood identification?', a: 'High accuracy for common species with distinctive grain (walnut, oak, teak, pine). Lower accuracy for species with similar grain patterns. Best accuracy: use natural light, show end grain if possible, ensure sharp focus on the grain. A confidence score is provided with every identification.' },
                { q: 'What wood is best for furniture making?', a: 'Fine furniture: walnut (rich color, excellent workability), cherry (beautiful aging), maple (hard, fine grain). General furniture: oak (durable, classic), ash (strong, flexible), mahogany (stable, traditional). Outdoor furniture: teak (oily, weather-resistant), cedar (rot-resistant, aromatic), white oak (closed tyloses = water-resistant).' },
              ].map((faq, i) => (
                <div key={i} style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '12px', padding: '1.4rem' }}>
                  <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', fontWeight: 700, color: 'var(--white)', marginBottom: '0.6rem' }}>{faq.q}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.88rem', lineHeight: 1.7, margin: 0 }}>{faq.a}</p>
                </div>
              ))}
            </div>

            <h2>Related Tree Identification Tools</h2>
            <p>Wood identification and tree identification go hand in hand. Use our suite of free AI tools to identify both the wood and the source tree. See our complete tree identification guides: <Link href="/blog/walnut-tree-identification">Walnut Tree Identification</Link> (for walnut wood identification), <Link href="/blog/oak-tree-identification-guide">Oak Tree Identification Guide</Link> (for oak wood), <Link href="/blog/maple-tree-identification-guide">Maple Tree Identification</Link> (for maple wood), and <Link href="/blog/hickory-tree-identification">Hickory Tree Guide</Link> (for hickory — the hardest common North American wood).</p>
            <p>For identifying the source tree from leaves or bark, use our <Link href="/tree-identifier">AI Tree Identifier</Link>, <Link href="/identify-tree-by-leaf">Leaf Identifier</Link>, or specialized tools: <Link href="/oak-tree-identifier">Oak Tree Identifier</Link>, <Link href="/maple-tree-identifier">Maple Tree Identifier</Link>, <Link href="/pine-tree-identifier">Pine Tree Identifier</Link>, <Link href="/birch-tree-identifier">Birch Tree Identifier</Link>, and <Link href="/fruit-tree-identifier">Fruit Tree Identifier</Link>.</p>

          </div>

          {/* SIDEBAR */}
          <aside style={{ position: 'sticky', top: '90px' }}>
            <div className="card" style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 700, color: 'var(--bright-green)', marginBottom: '1.2rem' }}>🪵 Identify Your Wood</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <Link href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="btn-primary" style={{ textAlign: 'center', fontSize: '0.88rem', padding: '10px 16px' }}>🪵 Wood Identifier</Link>
                <Link href="/tree-identifier" className="btn-outline" style={{ textAlign: 'center', fontSize: '0.88rem', padding: '10px 16px' }}>🌳 Tree Identifier</Link>
                <Link href="/identify-tree-by-leaf" className="btn-outline" style={{ textAlign: 'center', fontSize: '0.88rem', padding: '10px 16px' }}>🍃 Leaf Identifier</Link>
              </div>
            </div>

            <div className="card" style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 700, color: 'var(--white)', marginBottom: '1rem' }}>💪 Janka Hardness Guide</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {[
                  { w: 'Hickory', h: '1820 lbf', c: '#4ade80' },
                  { w: 'Hard Maple', h: '1450 lbf', c: '#4ade80' },
                  { w: 'White Oak', h: '1360 lbf', c: '#86efac' },
                  { w: 'Ash', h: '1320 lbf', c: '#86efac' },
                  { w: 'Walnut', h: '1010 lbf', c: '#fbbf24' },
                  { w: 'Cherry', h: '950 lbf', c: '#fbbf24' },
                  { w: 'Pine', h: '380–870', c: '#f87171' },
                  { w: 'Cedar', h: '350 lbf', c: '#f87171' },
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.85rem' }}>{item.w}</span>
                    <span style={{ color: item.c, fontSize: '0.8rem', fontWeight: 700 }}>{item.h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card" style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 700, color: 'var(--white)', marginBottom: '1rem' }}>🌳 Tree Identifiers</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <li><Link href="/oak-tree-identifier" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🌰 Oak Tree Identifier</Link></li>
                <li><Link href="/maple-tree-identifier" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🍁 Maple Tree Identifier</Link></li>
                <li><Link href="/birch-tree-identifier" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🪵 Birch Tree Identifier</Link></li>
                <li><Link href="/elm-tree-identifier" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🌳 Elm Tree Identifier</Link></li>
                <li><Link href="/pine-tree-identifier" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🌲 Pine Tree Identifier</Link></li>
                <li><Link href="/fruit-tree-identifier" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🍎 Fruit Tree Identifier</Link></li>
              </ul>
            </div>

            <div className="card">
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 700, color: 'var(--white)', marginBottom: '1rem' }}>📝 Wood Tree Guides</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <li><Link href="/blog/walnut-tree-identification" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🌰 Walnut Tree Guide</Link></li>
                <li><Link href="/blog/oak-tree-identification-guide" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🌳 Oak Tree Guide</Link></li>
                <li><Link href="/blog/hickory-tree-identification" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🌿 Hickory Tree Guide</Link></li>
                <li><Link href="/blog/maple-tree-identification-guide" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🍁 Maple Tree Guide</Link></li>
                <li><Link href="/blog/ash-tree-identification" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🌲 Ash Tree Guide</Link></li>
                <li><Link href="/blog/pine-tree-identification" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🌲 Pine Tree Guide</Link></li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* HOW TO USE */}
      <section className="section" style={{ background: 'var(--deep-black)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', color: 'var(--white)', marginBottom: '3rem' }}>How to Use the Wood Identifier</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            {[
              { step: '01', icon: '📸', title: 'Take a Clear Photo', desc: 'Photograph in natural light. End grain (cross-section) gives best results. Show grain clearly.' },
              { step: '02', icon: '⬆️', title: 'Upload the Image', desc: 'Drag and drop or click to upload. JPG, PNG or WEBP. Under 10MB.' },
              { step: '03', icon: '✅', title: 'Get Instant Results', desc: 'AI identifies wood species, Janka hardness, grain type, workability, and best uses in seconds.' },
            ].map((s, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.8rem' }}>
                <div style={{ width: '56px', height: '56px', background: 'linear-gradient(135deg, var(--forest-green), var(--mid-green))', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>{s.icon}</div>
                <div style={{ color: 'var(--bright-green)', fontSize: '0.75rem', fontWeight: 700 }}>STEP {s.step}</div>
                <div style={{ color: 'var(--white)', fontWeight: 700 }}>{s.title}</div>
                <p style={{ color: 'var(--gray-mid)', fontSize: '0.85rem', lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OTHER TOOLS */}
      <section className="section">
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.8rem', color: 'var(--white)', marginBottom: '0.8rem' }}>More Free Tree & Plant Identification Tools</h2>
          <p style={{ color: 'var(--gray-mid)', marginBottom: '2rem' }}>Our complete suite of free AI identification tools for trees, leaves, and wood.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '1rem' }}>
            {[
              { href: '/tree-identifier', icon: '🌳', label: 'Tree Identifier' },
              { href: '/identify-tree-by-leaf', icon: '🍃', label: 'Leaf Identifier' },
              { href: '/oak-tree-identifier', icon: '🌰', label: 'Oak Identifier' },
              { href: '/maple-tree-identifier', icon: '🍁', label: 'Maple Identifier' },
              { href: '/pine-tree-identifier', icon: '🌲', label: 'Pine Identifier' },
              { href: '/birch-tree-identifier', icon: '🪵', label: 'Birch Identifier' },
              { href: '/elm-tree-identifier', icon: '🌳', label: 'Elm Identifier' },
              { href: '/fruit-tree-identifier', icon: '🍎', label: 'Fruit Tree ID' },
            ].map((tool, i) => (
              <Link key={i} href={tool.href} style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '14px', padding: '1.2rem', textAlign: 'center', textDecoration: 'none', display: 'block' }}>
                <div style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>{tool.icon}</div>
                <div style={{ color: 'var(--white)', fontWeight: 600, fontSize: '0.9rem' }}>{tool.label}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '4rem 2rem', background: 'var(--deep-black)', borderTop: '1px solid var(--card-border)', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', color: 'var(--white)', marginBottom: '1rem' }}>Identify Any Wood Instantly — Free</h2>
        <p style={{ color: 'var(--gray-mid)', marginBottom: '2rem' }}>Upload a photo of any wood grain or timber — AI identifies the species in seconds. No signup, no cost.</p>
        <Link href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="btn-primary" style={{ fontSize: '1rem', padding: '14px 36px' }}>
          🪵 Identify Wood Now
        </Link>
      </section>
    </Layout>
  );
}
