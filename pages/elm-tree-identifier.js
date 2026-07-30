import Layout from '../components/Layout';
import Link from 'next/link';
import UploadTool from '../components/UploadTool';

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "url": "https://treeidentifier.online/elm-tree-identifier",
      "name": "Elm Tree Identifier — Free AI Elm Tree Identification Tool",
      "description": "Identify elm trees instantly with AI. Upload a photo of elm leaves, bark, or seeds and get accurate species identification with detailed botanical information.",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://treeidentifier.online/" },
          { "@type": "ListItem", "position": 2, "name": "Elm Tree Identifier", "item": "https://treeidentifier.online/elm-tree-identifier" }
        ]
      }
    },
    {
      "@type": "SoftwareApplication",
      "name": "Elm Tree Identifier",
      "applicationCategory": "UtilitiesApplication",
      "operatingSystem": "Web",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
      "url": "https://treeidentifier.online/elm-tree-identifier",
      "description": "Free AI-powered elm tree identification tool. Upload a photo and identify any elm species instantly."
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do I identify an elm tree?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Elm trees are identified by three key features: asymmetric leaf base (one side of the leaf base is higher than the other — unique among common trees), doubly serrated leaf margin (large and small teeth alternating along the edge), and alternate leaf arrangement on the twig. Mature American Elm also has a distinctive vase-shaped silhouette with arching branches spreading wide at the top. Upload a photo to our free AI Elm Tree Identifier for instant species confirmation."
          }
        },
        {
          "@type": "Question",
          "name": "What does an elm tree leaf look like?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Elm leaves are oval to elliptical, 5-15cm long, with a distinctly asymmetric base — one side of the leaf is noticeably higher than the other where it attaches to the stalk. The leaf margin is doubly serrated with alternating large and small teeth. The upper surface is rough to the touch in many species (like sandpaper), while the underside is often softer and paler. Veins are pinnate with prominent parallel side veins."
          }
        },
        {
          "@type": "Question",
          "name": "How do I identify an American Elm tree?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "American Elm (Ulmus americana) is identified by: distinctive vase-shaped silhouette with arching branches spreading wide at the crown (visible from a distance), alternate oval leaves with asymmetric base and doubly serrated margins, gray-brown bark with interlacing flat-topped ridges, and small circular flat winged seeds (samaras) appearing in early spring before leaves. The vase silhouette is unmistakable and visible from far away."
          }
        },
        {
          "@type": "Question",
          "name": "What is Dutch Elm Disease?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dutch Elm Disease (DED) is a fungal disease caused by Ophiostoma novo-ulmi, spread by elm bark beetles. It has devastated elm populations across North America and Europe since the 1960s, killing an estimated 40 million American Elms in North America alone. Symptoms include yellowing and wilting of leaves on individual branches (flagging), followed by brown streaking in the sapwood, and eventual death. Disease-resistant elm cultivars are now available and increasingly planted as replacements."
          }
        },
        {
          "@type": "Question",
          "name": "How many species of elm trees are there?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "There are approximately 35-40 species of elm trees worldwide in the genus Ulmus, native to North America, Europe, and Asia. The most common North American species are American Elm, Slippery Elm, Rock Elm, and Winged Elm. Common European species include English Elm and Wych Elm. Several Asian species including Chinese Elm and Japanese Elm are widely planted as ornamentals worldwide."
          }
        },
        {
          "@type": "Question",
          "name": "Are elm trees fast growing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Elm trees are moderate to fast growers. American Elm grows 60-90cm per year under good conditions. Chinese Elm grows even faster at up to 90cm per year. Slippery Elm is a moderate grower at 30-60cm per year. Most elm species establish quickly and are considered relatively fast growing compared to oaks and other hardwoods."
          }
        }
      ]
    }
  ]
};

const features = [
  { icon: '🍃', title: 'Leaf Analysis', desc: 'AI analyzes the asymmetric leaf base, doubly serrated margins, and surface texture — the most reliable elm identification features.' },
  { icon: '🪵', title: 'Bark Recognition', desc: 'Identify elms from bark texture, ridge pattern, and color — works year-round even without leaves in winter.' },
  { icon: '🌳', title: 'Silhouette ID', desc: 'Recognize the distinctive vase-shaped crown of American Elm and branching patterns of other elm species from full-tree photos.' },
  { icon: '⚡', title: 'Instant Results', desc: 'Get elm species identification in under 3 seconds with scientific name, habitat, and detailed botanical information.' },
  { icon: '🌍', title: 'All Elm Species', desc: 'Covers all major elm species including American Elm, Slippery Elm, Chinese Elm, Wych Elm, English Elm and more.' },
  { icon: '📊', title: 'Confidence Score', desc: 'Every identification includes an AI confidence percentage and the key features that confirm the identification.' },
];

const elmSpecies = [
  { name: 'American Elm', sci: 'Ulmus americana', region: 'Eastern North America', note: 'Classic vase silhouette, devastated by Dutch Elm Disease' },
  { name: 'Slippery Elm', sci: 'Ulmus rubra', region: 'Eastern North America', note: 'Rough sandpaper-like upper leaf surface, medicinal inner bark' },
  { name: 'Rock Elm', sci: 'Ulmus thomasii', region: 'NE North America', note: 'Corky winged bark on branches, extremely hard wood' },
  { name: 'Winged Elm', sci: 'Ulmus alata', region: 'SE United States', note: 'Distinctive corky wing-like growths on branches' },
  { name: 'Chinese Elm', sci: 'Ulmus parvifolia', region: 'East Asia (widely planted)', note: 'Semi-evergreen, mottled flaking bark, small leaves' },
  { name: 'Siberian Elm', sci: 'Ulmus pumila', region: 'Central Asia (naturalized NA)', note: 'Very cold hardy, small leaves, invasive in some areas' },
  { name: 'Wych Elm', sci: 'Ulmus glabra', region: 'Europe & Asia', note: 'Largest native European elm, no suckers' },
  { name: 'English Elm', sci: 'Ulmus procera', region: 'Western Europe', note: 'Iconic English countryside tree, very susceptible to DED' },
];

const faqs = [
  { q: 'How do I identify an elm tree by its leaves?', a: 'Look for three features: asymmetric leaf base (one side higher than the other), doubly serrated margin (alternating large and small teeth along the edge), and alternate arrangement on the twig (one leaf per node). The rough sandpaper-like upper leaf surface of many elm species is also very distinctive. Upload a clear leaf photo to our AI tool for instant identification.' },
  { q: 'What is the difference between American Elm and Slippery Elm?', a: 'American Elm has a smooth to slightly rough upper leaf surface, a distinctive vase-shaped crown, and interlacing flat-topped bark ridges. Slippery Elm has a very rough sandpaper-like upper leaf surface (noticeably rougher than American Elm), a rounder and less symmetric crown, and bark with irregular ridges. Slippery Elm inner bark is mucilaginous (slippery when wet) — hence the name.' },
  { q: 'How can I identify an elm tree in winter without leaves?', a: 'In winter, identify elms by: bark pattern (gray-brown with interlacing flat-topped ridges in American Elm), overall crown silhouette (vase-shaped in American Elm, rounder in Slippery Elm), and any persistent seeds or seed debris. Winged Elm and Rock Elm retain corky wing-like growths on branches year-round. Our AI works with bark photos for winter identification.' },
  { q: 'What does elm bark look like?', a: 'American Elm bark is gray-brown with interlacing flat-topped ridges separated by diamond-shaped furrows on mature trees. Slippery Elm bark is similar but slightly redder-tinged. Chinese Elm has very distinctive mottled bark that flakes off in irregular patches revealing orange, brown, gray, and green patches beneath — one of the most distinctive barks of any elm species.' },
  { q: 'Are elm trees good for wildlife?', a: 'Yes — elm trees are excellent wildlife trees. Their seeds (samaras) are an important early spring food source for birds and small mammals, appearing before most other tree seeds. Elm leaves support the caterpillars of dozens of butterfly and moth species. Mature elm trees provide nesting sites for cavity-nesting birds. American Elm in particular is considered an important native wildlife tree.' },
  { q: 'Can I plant elm trees today?', a: 'Yes — disease-resistant elm cultivars are now widely available and make excellent landscape trees. Princeton Elm, Valley Forge, New Harmony, and Triumph are popular American Elm cultivars with good DED resistance. Chinese Elm is naturally more resistant to Dutch Elm Disease and is widely planted as an ornamental. These new disease-resistant varieties are reclaiming elm\'s place as one of the finest street and park trees.' },
];

export default function ElmTreeIdentifier() {
  return (
    <Layout
      meta={{
        title: 'Elm Tree Identifier — Free AI Elm Tree Identification Online | Tree Identifier',
        description: 'Identify any elm tree species instantly with our free AI tool. Upload a photo of elm leaves, bark, or seeds. Covers American Elm, Slippery Elm, Chinese Elm, Wych Elm & all major species.',
        canonical: 'https://treeidentifier.online/elm-tree-identifier',
        schema,
      }}
      breadcrumbs={[{ label: 'Elm Tree Identifier' }]}
    >
      {/* HERO */}
      <section style={{
        position: 'relative',
        paddingTop: '70px',
        minHeight: '75vh',
        display: 'flex',
        alignItems: 'center',
        background: `linear-gradient(135deg, rgba(5,5,5,0.85) 0%, rgba(13,40,24,0.75) 100%), url('/elm.jpg') center/cover no-repeat`,
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem', width: '100%' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <span className="green-tag">🌳 Elm Species AI</span>
              <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', color: 'var(--white)', lineHeight: 1.1, margin: '1rem 0 1.2rem' }}>
                Elm Tree Identifier<br />
                <span style={{ color: 'var(--bright-green)' }}>Powered by AI</span>
              </h1>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                Instantly identify any elm tree species worldwide. Upload a photo of elm leaves, bark, or seeds and our AI delivers accurate species identification in seconds — completely free, no signup required.
              </p>
              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                {[['35+', 'Elm Species'], ['97%', 'Accuracy'], ['3s', 'Results'], ['Free', 'Always']].map(([n, l]) => (
                  <div key={l}>
                    <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--bright-green)', fontFamily: 'Playfair Display, serif', lineHeight: 1 }}>{n}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--gray-mid)', marginTop: '0.2rem' }}>{l}</div>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="/identify-tree-by-leaf" className="btn-outline">🍃 Try Leaf Identifier</Link>
                <Link href="/tree-identifier" className="btn-outline">🌳 General Tree ID</Link>
              </div>
            </div>

            <div style={{ background: 'var(--card-bg)', border: '1px solid var(--bright-green)', borderRadius: '20px', padding: '2.5rem' }}>
              <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.1rem', fontWeight: 700, color: 'var(--white)', marginBottom: '1.5rem' }}>🌳 Upload Elm Photo</h2>
              <UploadTool mode="tree" />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section" style={{ background: 'var(--deep-black)' }}>
        <div className="section-inner">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-label">AI Capabilities</span>
            <h2 className="section-title">What Our Elm Tree AI Analyzes</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>Our AI examines multiple botanical features to deliver precise elm species identification.</p>
          </div>
          <div className="grid-3">
            {features.map((f, i) => (
              <div className="card" key={i}>
                <div className="feature-icon-box">{f.icon}</div>
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 700, color: 'var(--white)', marginBottom: '0.6rem' }}>{f.title}</h3>
                <p style={{ color: 'var(--gray-mid)', fontSize: '0.88rem', lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ELM SPECIES TABLE */}
      <section className="section">
        <div className="section-inner">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-label">Species Database</span>
            <h2 className="section-title">Common Elm Species We Identify</h2>
          </div>
          <div className="grid-4">
            {elmSpecies.map((s, i) => (
              <div className="card" key={i}>
                <div style={{ fontSize: '2rem', marginBottom: '0.8rem' }}>🌳</div>
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', fontWeight: 700, color: 'var(--white)', marginBottom: '0.3rem' }}>{s.name}</h3>
                <p style={{ color: 'var(--bright-green)', fontSize: '0.78rem', fontStyle: 'italic', marginBottom: '0.4rem' }}>{s.sci}</p>
                <p style={{ color: 'var(--gray-mid)', fontSize: '0.8rem', marginBottom: '0.3rem' }}>📍 {s.region}</p>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.78rem' }}>{s.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO CONTENT */}
      <section className="section" style={{ background: 'var(--deep-black)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2rem' }}>
          <article className="prose-content" style={{ maxWidth: '100%' }}>
            <span className="green-tag">Complete Elm Guide</span>
            <h2>The Complete Guide to Elm Tree Identification</h2>
            <p>Elm trees are among the most graceful and historically significant trees in the Northern Hemisphere. Belonging to the genus <em>Ulmus</em> in the family Ulmaceae, there are approximately 35-40 species of elm worldwide, native to temperate regions of North America, Europe, and Asia. Our <strong>free AI Elm Tree Identifier</strong> makes it simple to identify any elm species from a single photograph, providing expert-level botanical identification instantly and at no cost.</p>

            {/* IMAGE 1 */}
            <div style={{ margin: '2rem 0', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--card-border)' }}>
              <img
                src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=900&q=80"
                alt="Elm tree leaves showing asymmetric base and doubly serrated margins for identification"
                style={{ width: '100%', height: '300px', objectFit: 'cover' }}
              />
              <div style={{ background: 'var(--card-bg)', padding: '0.8rem 1.2rem' }}>
                <p style={{ color: 'var(--gray-mid)', fontSize: '0.82rem', margin: 0 }}>🍃 Elm leaves are identified by their asymmetric base (one side higher than the other) and doubly serrated margins — features visible on every elm leaf.</p>
              </div>
            </div>

            <h3>How to Identify Elm Trees — Key Features</h3>
            <p>Elm trees have several highly distinctive features that make identification straightforward once you know what to look for. The single most reliable elm identification feature is the <strong>asymmetric leaf base</strong> — when you look at an elm leaf, one side of the base where the leaf attaches to its stalk is noticeably higher than the other. This lopsided base is found in all elm species and distinguishes elms from nearly all other common trees. Run your finger across the two sides of the leaf base — you can feel the height difference even without looking closely.</p>
            <p>The <strong>doubly serrated leaf margin</strong> is the second key feature. Elm leaf edges have alternating large and small teeth — a large tooth followed by a small tooth, consistently around the entire leaf margin. This pattern distinguishes elms from trees with simply serrated leaves (one size of teeth) and from trees with smooth leaf margins. Combined with the asymmetric base, these two features identify any leaf as an elm leaf with near certainty.</p>
            <p>Elm leaves are also <strong>alternate</strong> on the twig — one leaf per node, alternating sides — and have prominent pinnate venation with parallel side veins running to each tooth. The leaf surface texture varies significantly between species: American Elm leaves are slightly rough on top, Slippery Elm leaves are extremely rough like coarse sandpaper, and Chinese Elm leaves are smooth and glossy.</p>

            <h3>American Elm — The Iconic Vase Tree</h3>
            <p>American Elm (<em>Ulmus americana</em>) was once the most widely planted street tree in North America and remains one of the most recognizable trees on the continent despite massive losses to Dutch Elm Disease. Its most distinctive feature is the <strong>vase-shaped crown</strong> — a tall straight trunk that divides into large ascending branches that spread wide at the top, creating a graceful arching canopy. This silhouette is visible from a great distance and is unlike any other North American tree.</p>
            <p>American Elm leaves are oval, 8-15cm long, with the characteristic asymmetric base, doubly serrated margin, and slightly rough upper surface. The bark of mature American Elms is gray-brown with interlacing flat-topped ridges separated by diamond-shaped furrows. In early spring before leaves emerge, American Elm produces small clusters of purplish-red flowers, followed by round flat seeds (samaras) with a papery wing completely surrounding the seed — appearing in April or May.</p>
            <p>Dutch Elm Disease has eliminated most large American Elms from North American cities and forests. Disease-resistant cultivars including 'Princeton', 'Valley Forge', and 'New Harmony' are now available and widely planted, offering the same beautiful vase form with significantly improved disease resistance.</p>

            <h3>Slippery Elm — The Medicinal Elm</h3>
            <p>Slippery Elm (<em>Ulmus rubra</em>) is distinguished from American Elm by several reliable features. Most notably, its upper leaf surface is <strong>extremely rough</strong> — noticeably rougher than American Elm and described as coarse sandpaper. This tactile feature is immediately apparent when you touch the leaf. Slippery Elm leaves are also generally larger (10-18cm) and have a somewhat rougher texture overall.</p>
            <p>The name "Slippery Elm" refers to the inner bark, which is <strong>mucilaginous</strong> — slippery and gel-like when wet. Native American peoples and early settlers used Slippery Elm inner bark as a medicinal food and for treating various ailments. The inner bark remains available as a herbal supplement today. Identifying Slippery Elm by its inner bark requires scratching through the outer bark and wetting the exposed inner layer to observe the mucilaginous texture.</p>

            <h3>Chinese Elm — The Ornamental Elm</h3>
            <p>Chinese Elm (<em>Ulmus parvifolia</em>) is one of the most widely planted ornamental elms worldwide and differs significantly from North American species in several ways. Its leaves are much smaller (2-5cm), glossy rather than rough, and it is semi-evergreen in mild climates. Most distinctively, Chinese Elm has <strong>mottled exfoliating bark</strong> — the outer bark flakes off in irregular patches revealing a mosaic of orange, gray, brown, and green beneath, making it one of the most ornamental tree barks of any species.</p>
            <p>Chinese Elm is significantly more resistant to Dutch Elm Disease than American or English Elm and tolerates urban conditions, drought, and pollution well. These qualities make it a popular choice for street plantings, gardens, and bonsai cultivation. It can be distinguished from Siberian Elm (often mislabeled as "Chinese Elm" in nurseries) by its smaller leaves, better form, and superior ornamental bark.</p>

            {/* IMAGE 2 */}
            <div style={{ margin: '2rem 0', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--card-border)' }}>
              <img
                src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=900&q=80"
                alt="Elm tree bark showing distinctive ridge pattern for identification"
                style={{ width: '100%', height: '280px', objectFit: 'cover' }}
              />
              <div style={{ background: 'var(--card-bg)', padding: '0.8rem 1.2rem' }}>
                <p style={{ color: 'var(--gray-mid)', fontSize: '0.82rem', margin: 0 }}>🪵 Elm bark varies by species — American Elm has interlacing flat-topped ridges, while Chinese Elm has distinctive mottled exfoliating bark revealing orange and green patches.</p>
              </div>
            </div>

            <h3>Elm Tree Identification by Bark</h3>
            <p>Elm bark identification is particularly valuable in winter when leaves are absent. American Elm bark on mature trees is gray-brown with a distinctive pattern of <strong>interlacing flat-topped ridges</strong> separated by diamond-shaped furrows — different from the vertical ridges of oaks or the plated bark of maples. The ridges often appear to cross each other in an interlacing network pattern.</p>
            <p>Rock Elm (<em>Ulmus thomasii</em>) and Winged Elm (<em>Ulmus alata</em>) both produce distinctive <strong>corky growths</strong> on their branches — irregular cork-like wings running along the sides of smaller branches. These corky wings are year-round features that immediately identify these two species even in winter. For bark-based elm identification, see our <Link href="/blog/tree-identification-by-bark">complete bark identification guide</Link>.</p>

            <h3>Elm Seeds — Identification from Samaras</h3>
            <p>Elm seeds are flat, circular, winged fruits called samaras, with the papery wing completely surrounding the central seed — unlike maple samaras where the wing is attached to one side only. American Elm samaras are 1-1.5cm across with a distinctive notch at the top. They are produced abundantly in early spring (April-May in the northeast) before the leaves fully emerge, carpeting the ground beneath elm trees with a green then pale tan layer of seeds.</p>
            <p>The timing of elm seed production — early spring before leaves — is an identification clue in itself. Finding large quantities of circular flat winged seeds beneath a tree in April suggests elm. Slippery Elm samaras are similar but slightly larger and have a reddish-tinged wing. Chinese Elm produces much smaller samaras (0.8-1.2cm) in autumn rather than spring — a significant difference in timing that helps identify this species.</p>

            <h3>Dutch Elm Disease — Impact and Identification</h3>
            <p>Dutch Elm Disease (DED) has profoundly changed elm populations across North America and Europe. Caused by the fungus <em>Ophiostoma novo-ulmi</em> and spread by elm bark beetles, DED has killed an estimated 40 million American Elms in North America since the 1960s. Understanding DED symptoms helps identify affected trees and distinguish disease damage from other causes.</p>
            <p>The earliest DED symptom is <strong>flagging</strong> — one or a few branches suddenly wilting and yellowing while the rest of the tree remains green, typically first appearing in summer. If the bark of a wilting branch is peeled back, <strong>brown streaking</strong> in the sapwood (the outer wood layer) is the definitive confirmation of DED. Once established, DED typically kills most of the crown within one to three years. Early detection and prompt removal of affected branches can sometimes slow spread, but established infections are difficult to control.</p>

            <h3>Using Our Elm Tree Identifier</h3>
            <p>Our <strong>AI Elm Tree Identifier</strong> uses advanced computer vision trained on thousands of elm tree photographs to deliver accurate species identification. For best results, photograph a single mature undamaged leaf from directly above on a light background, ensuring the full leaf blade including the base is clearly visible — the asymmetric base is the most important feature for the AI to analyze.</p>
            <p>For bark photos, stand 30-40cm from the trunk and shoot straight-on in natural side lighting. Include a full-tree silhouette photo when possible — the distinctive vase shape of American Elm is instantly recognizable to the AI. For winter identification, bark photos combined with any visible branch features (corky wings in Rock or Winged Elm) provide the best results. Simply <Link href="/tree-identifier">upload your photo</Link> and get your result in seconds.</p>
            <p>Related identification tools: <Link href="/oak-tree-identifier">Oak Tree Identifier</Link>, <Link href="/maple-tree-identifier">Maple Tree Identifier</Link>, <Link href="/birch-tree-identifier">Birch Tree Identifier</Link>, <Link href="/pine-tree-identifier">Pine Tree Identifier</Link>. For leaf-specific identification see our <Link href="/identify-tree-by-leaf">Leaf Identifier</Link>. For more guides, visit our <Link href="/blog">Tree Identification Blog</Link> including our <Link href="/blog/how-to-identify-trees-in-winter">winter tree identification guide</Link> and <Link href="/blog/tree-identification-by-bark">bark identification guide</Link>.</p>
          </article>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-label">FAQs</span>
            <h2 className="section-title">Elm Tree Identification FAQs</h2>
          </div>
          {faqs.map((faq, i) => (
            <div className="faq-item" key={i}>
              <h3>{faq.q}</h3>
              <p>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '4rem 2rem', background: 'linear-gradient(135deg, var(--dark-green), var(--forest-green))', borderTop: '1px solid var(--card-border)', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', color: 'var(--white)', marginBottom: '1rem' }}>Identify Your Elm Tree Now</h2>
        <p style={{ color: 'var(--pale-green)', marginBottom: '2rem' }}>Free, instant, and accurate — no registration required.</p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/oak-tree-identifier" className="btn-outline" style={{ borderColor: 'var(--pale-green)', color: 'var(--pale-green)' }}>🌰 Oak Identifier</Link>
          <Link href="/maple-tree-identifier" className="btn-outline" style={{ borderColor: 'var(--pale-green)', color: 'var(--pale-green)' }}>🍁 Maple Identifier</Link>
          <Link href="/birch-tree-identifier" className="btn-outline" style={{ borderColor: 'var(--pale-green)', color: 'var(--pale-green)' }}>🪵 Birch Identifier</Link>
          <Link href="/identify-tree-by-leaf" className="btn-outline" style={{ borderColor: 'var(--pale-green)', color: 'var(--pale-green)' }}>🍃 Leaf Identifier</Link>
        </div>
      </section>
    </Layout>
  );
}
