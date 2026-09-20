import Layout from '../components/Layout';
import Link from 'next/link';
import UploadTool from '../components/UploadTool';

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Plant Identifier — Free AI Plant Identification by Picture Online",
    "description": "Free AI plant identifier by picture. Upload a photo to identify any plant online instantly — flowers, shrubs, houseplants, weeds, and trees. Free plant identifier tool, no signup required.",
    "url": "https://treeidentifier.online/plant-identifier",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://treeidentifier.online/" },
        { "@type": "ListItem", "position": 2, "name": "Plant Identifier", "item": "https://treeidentifier.online/plant-identifier" }
      ]
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Plant Identifier",
    "applicationCategory": "UtilitiesApplication",
    "operatingSystem": "Web Browser",
    "description": "Free AI plant identifier by picture. Identify any plant online from a photo — flowers, shrubs, houseplants, succulents, weeds, and trees. Instant results, no app download, no signup.",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "url": "https://treeidentifier.online/plant-identifier",
    "featureList": [
      "Identify plants by picture for free",
      "Works on flowers, shrubs, houseplants, weeds, succulents, trees",
      "No app download required — 100% online",
      "Instant AI identification results",
      "Care tips and growing information",
      "Works on any device"
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I identify a plant by picture for free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Upload a clear photo of the plant to our free plant identifier tool above. The AI analyzes the leaves, flowers, stem, shape, and other visible features to identify the plant species instantly. For best results, photograph the whole plant, a close-up of the leaves, and any flowers or fruit if present. Our plant identifier is completely free — no signup, no app download, no subscription required."
        }
      },
      {
        "@type": "Question",
        "name": "How to identify plants without an app?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can identify plants without downloading any app using our free online plant identifier — it works directly in your web browser on any device. Simply visit this page, upload a photo of the plant, and our AI identifies it in seconds. No app download, no account creation, no subscription. Alternatively, you can identify plants manually without any tool by examining leaf shape, leaf arrangement (opposite or alternate), flower color and structure, stem type, and habitat — compare these features against a plant field guide for your region."
        }
      },
      {
        "@type": "Question",
        "name": "How to identify any plant in minutes for free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The fastest free way to identify any plant in minutes is to use our AI plant identifier by picture. Upload a photo → AI analyzes the plant → results in under 30 seconds. The AI identifies thousands of plant species including flowers, shrubs, houseplants, succulents, cacti, weeds, vines, aquatic plants, and trees. For tree identification specifically, also try our dedicated Tree Identifier and Leaf Identifier tools for even more detailed tree species information."
        }
      },
      {
        "@type": "Question",
        "name": "Is there a free plant identifier online?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — our plant identifier is completely free online with no hidden costs or subscriptions. Upload a photo of any plant and our AI identifies it instantly, providing the common name, scientific name, family, native region, care tips, and growing information. It works on any device — mobile, tablet, or desktop — directly in your web browser with no app download required."
        }
      },
      {
        "@type": "Question",
        "name": "What plants can this tool identify?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our free plant identifier can identify thousands of plant species including: flowering plants (roses, tulips, sunflowers, orchids, lilies), shrubs and bushes, houseplants and indoor plants (pothos, monstera, snake plant, fiddle leaf fig), succulents and cacti, garden vegetables and herbs, weeds and wildflowers, ferns and mosses, aquatic plants, vines and climbers, and all tree species. For detailed tree identification, also use our specialized Tree Identifier, Leaf Identifier, and species-specific tools."
        }
      },
      {
        "@type": "Question",
        "name": "How to identify plants manually without a tool?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To identify plants manually: 1) Examine leaf shape — simple (one blade) or compound (multiple leaflets). 2) Check leaf arrangement — opposite (two per node) or alternate (one per node alternating sides). 3) Note leaf margin — smooth (entire), toothed (serrated), or lobed. 4) Look at stem type — round, square, hollow, or hairy. 5) Observe flowers — color, petal count, and structure. 6) Check habitat and growth form — tree, shrub, vine, or herbaceous. Compare all features against a regional field guide. Our free plant identifier does all these steps automatically from a photo."
        }
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How To Identify Any Plant in Minutes For FREE",
    "description": "Step-by-step guide to identifying any plant for free using our AI plant identifier by picture.",
    "step": [
      { "@type": "HowToStep", "position": 1, "name": "Take a Clear Photo", "text": "Photograph the plant in natural daylight. Capture the whole plant, a close-up of leaves, and any flowers or fruit. Clear, sharp images in good lighting give the best identification results." },
      { "@type": "HowToStep", "position": 2, "name": "Upload to Plant Identifier", "text": "Click or drag and drop your photo into the upload area above. Works with JPG, PNG, and WEBP images up to 20MB. No signup or account required." },
      { "@type": "HowToStep", "position": 3, "name": "Get Instant Plant Identification", "text": "Our AI analyzes the leaves, flowers, stem, and growth form to identify the plant species in seconds. You receive the common name, scientific name, family, native region, care tips, and toxicity information." }
    ]
  }
];

const plantFeatures = [
  { icon: '🌸', title: 'Flowers & Flowering Plants', desc: 'Identify roses, tulips, orchids, sunflowers, lilies, and thousands of garden and wildflowers from a single photo.' },
  { icon: '🌿', title: 'Houseplants & Indoor Plants', desc: 'Identify pothos, monstera, snake plant, fiddle leaf fig, peace lily, ZZ plant, and all common indoor plants.' },
  { icon: '🌵', title: 'Succulents & Cacti', desc: 'Identify echeveria, aloe, jade plant, haworthia, and hundreds of succulent and cactus species accurately.' },
  { icon: '🌱', title: 'Weeds & Wildflowers', desc: 'Identify garden weeds, invasive species, and wildflowers — helpful for garden management and foraging safety.' },
  { icon: '🌲', title: 'Trees & Shrubs', desc: 'Identify tree species from leaves, bark, or full tree photos. For detailed tree ID, also try our dedicated Tree Identifier.' },
  { icon: '🥬', title: 'Herbs & Vegetables', desc: 'Identify culinary and medicinal herbs, garden vegetables, and edible wild plants with care and safety information.' },
];

const plantTypes = [
  { category: 'Popular Houseplants', icon: '🏠', plants: ['Monstera deliciosa', 'Pothos (Epipremnum aureum)', 'Snake Plant (Sansevieria)', 'Fiddle Leaf Fig', 'Peace Lily', 'ZZ Plant', 'Rubber Plant', 'Spider Plant'] },
  { category: 'Common Garden Flowers', icon: '🌺', plants: ['Rose (Rosa species)', 'Sunflower (Helianthus)', 'Lavender (Lavandula)', 'Hydrangea', 'Peony', 'Dahlia', 'Marigold', 'Zinnia'] },
  { category: 'Succulents & Cacti', icon: '🌵', plants: ['Echeveria', 'Aloe Vera', 'Jade Plant', 'Haworthia', 'Sedum', 'Agave', 'Prickly Pear Cactus', 'Christmas Cactus'] },
  { category: 'Trees & Shrubs', icon: '🌳', plants: ['Oak (Quercus)', 'Maple (Acer)', 'Birch (Betula)', 'Rose Bush', 'Boxwood', 'Hydrangea shrub', 'Azalea', 'Rhododendron'] },
];

const identificationTips = [
  { icon: '📸', title: 'Photograph Multiple Parts', desc: 'Take photos of leaves, flowers, stem, and whole plant. Multiple angles give the AI more features to analyze — improving accuracy significantly.' },
  { icon: '☀️', title: 'Use Natural Daylight', desc: 'Natural light reveals true leaf color and texture. Avoid flash photography which creates harsh shadows and washes out green colors important for identification.' },
  { icon: '🔍', title: 'Get Close for Leaves', desc: 'A sharp close-up of the leaf showing the upper surface, shape, margin (edge), and vein pattern provides the most reliable identification data.' },
  { icon: '🌺', title: 'Include Flowers When Present', desc: 'Flowers are the most definitive plant identification feature. Even a wilting or partially open flower dramatically improves identification accuracy.' },
  { icon: '📏', title: 'Show Scale', desc: 'Including a hand or common object in the photo helps the AI assess plant size — important for distinguishing between similar-looking small and large species.' },
  { icon: '🌿', title: 'Photograph Both Leaf Surfaces', desc: 'Many plants have distinctive underside features — colored veins, hairs, or texture differences that help confirm identification.' },
];

export default function PlantIdentifier() {
  return (
    <Layout
      meta={{
        title: 'Plant Identifier — Free AI Plant Identification by Picture Online',
        description: 'Free plant identifier by picture. Upload a photo to identify any plant online instantly — flowers, houseplants, succulents, weeds, shrubs, and trees. No app, no signup, 100% free plant identifier online.',
        canonical: 'https://treeidentifier.online/plant-identifier',
        schema,
      }}
    >
      {/* HERO */}
      <section style={{
        background: `linear-gradient(180deg, rgba(5,5,5,0.72) 0%, var(--black) 100%), url('https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1600&q=80') center/cover no-repeat`,
        padding: '100px 2rem 5rem',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(64,192,116,0.1)', border: '1px solid rgba(64,192,116,0.2)', borderRadius: '50px', padding: '6px 16px', marginBottom: '1.5rem' }}>
            <span style={{ color: 'var(--bright-green)', fontSize: '0.82rem', fontWeight: 600 }}>🌿 FREE PLANT IDENTIFIER BY PICTURE</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', color: 'var(--white)', lineHeight: 1.1, marginBottom: '1.2rem' }}>
            Plant Identifier
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.75)', marginBottom: '0.8rem', lineHeight: 1.7 }}>
            Free plant identifier online — upload any plant photo and our AI identifies it instantly. Works on flowers, houseplants, succulents, weeds, shrubs, herbs, and trees. No app download, no signup required.
          </p>
          <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', marginBottom: '2.5rem' }}>
            ✅ 100% Free &nbsp;·&nbsp; ✅ No App Needed &nbsp;·&nbsp; ✅ No Signup &nbsp;·&nbsp; ✅ Results in Seconds
          </p>

          <div style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '20px', padding: '2rem', textAlign: 'left' }}>
            <UploadTool mode="plant" />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section" style={{ background: 'var(--deep-black)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', color: 'var(--white)', marginBottom: '1rem' }}>What Can This Plant Identifier Identify?</h2>
            <p style={{ color: 'var(--gray-mid)', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 }}>Our free plant identifier by picture works on thousands of plant species across all major plant categories — from common houseplants to rare wildflowers.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {plantFeatures.map((f, i) => (
              <div key={i} className="card">
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{f.icon}</div>
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.05rem', fontWeight: 700, color: 'var(--white)', marginBottom: '0.5rem' }}>{f.title}</h3>
                <p style={{ color: 'var(--gray-mid)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN CONTENT + SIDEBAR */}
      <section className="section">
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem', display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '4rem', alignItems: 'start' }}>
          <div className="prose-content" style={{ maxWidth: '100%' }}>

            <h2>Plant Identifier by Picture — How It Works</h2>
            <p>Our free plant identifier by picture uses advanced AI vision technology to analyze plant photos and identify species instantly. The AI examines multiple visual features simultaneously — leaf shape and arrangement, flower color and structure, stem characteristics, growth habit, and overall plant form — to match your photo against a database of thousands of plant species.</p>
            <p>Plant identification by picture is the fastest and most accurate way to identify unknown plants — far faster than manual identification using field guides, and accessible to anyone regardless of botanical knowledge. Whether you found an interesting wildflower on a hike, received a mystery houseplant as a gift, want to identify a weed in your garden, or are curious about a plant in a photo, our free plant identifier online gives you an answer in seconds with no app download required. For tree species specifically, also use our specialized <Link href="/tree-identifier">Tree Identifier</Link> and <Link href="/identify-tree-by-leaf">Leaf Identifier</Link> for even more detailed identification.</p>

            {/* IMAGE 1 */}
            <div style={{ margin: '2rem 0', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--card-border)' }}>
              <img
                src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=900&q=80"
                alt="Plant identifier by picture showing various plant types for identification"
                style={{ width: '100%', height: '300px', objectFit: 'cover' }}
              />
              <div style={{ background: 'var(--card-bg)', padding: '0.8rem 1.2rem' }}>
                <p style={{ color: 'var(--gray-mid)', fontSize: '0.82rem', margin: 0 }}>🌿 Our free plant identifier by picture works on any plant — flowers, houseplants, succulents, weeds, herbs, shrubs, and trees. Upload a photo and get instant identification with scientific name, family, care tips, and growing information.</p>
              </div>
            </div>

            <h2>How to Identify Plants Without an App</h2>
            <p>One of the most common questions we receive is "how to identify plants without an app" — and the answer is simpler than most people expect. Our plant identifier works entirely in your web browser without any app download. Visit this page on any device — mobile, tablet, or desktop — upload a plant photo, and receive instant identification results. No installation, no account, no subscription. This is the fastest way to identify plants without an app on any device.</p>
            <p>But what if you want to identify plants manually without any digital tool at all? Plant identification without technology relies on systematically observing and recording plant features, then comparing them to reference materials. Here is the step-by-step manual plant identification method used by botanists:</p>
            <p><strong>Step 1 — Determine the plant growth form:</strong> Is it a tree (single woody trunk, tall), a shrub (multiple woody stems, shorter), a vine (climbs or trails), or an herbaceous plant (soft green stems, dies back in winter)? This single observation immediately eliminates most species.</p>
            <p><strong>Step 2 — Examine leaf arrangement:</strong> Are the leaves opposite (two leaves at each node, directly across from each other — maple, ash, dogwood are opposite) or alternate (one leaf per node, alternating sides — oak, birch, walnut are alternate)? This divides all plants into two large groups. For more on leaf-based tree identification, see our <Link href="/blog/identify-tree-by-leaves">How to Identify Trees by Leaves guide</Link>.</p>
            <p><strong>Step 3 — Describe the leaf:</strong> Is it simple (one undivided leaf blade) or compound (divided into multiple leaflets)? What shape — oval, heart-shaped, needle, lobed? What margin — smooth, toothed, or deeply lobed? For heart-shaped leaves see our <Link href="/blog/trees-with-heart-shaped-leaves">Trees With Heart Shaped Leaves guide</Link>.</p>
            <p><strong>Step 4 — Note flowers and fruit:</strong> Flower color, number of petals, and arrangement, plus any fruit or seed pods, are the most definitive identification features. Record everything present.</p>
            <p><strong>Step 5 — Note habitat and season:</strong> Where is the plant growing — woodland, grassland, wetland, garden, wall? What time of year? Many plants are highly habitat-specific.</p>
            <p>While manual identification is a valuable skill to learn, our free plant identifier by picture performs all five steps automatically from a single photo in seconds — making it the fastest and most practical method for everyday plant identification.</p>

            <h2>How To Identify Any Plant in Minutes For FREE</h2>
            <p>Identifying any plant in minutes for free is straightforward with the right approach. Here is the fastest free plant identification method available online:</p>
            <p><strong>Method 1 — Our plant identifier by picture (fastest):</strong> Upload a photo above → AI identifies in under 30 seconds → free, no signup, no app. This is the fastest and easiest method for identifying any plant.</p>
            <p><strong>Method 2 — Multiple photos for uncertain plants:</strong> If a single photo gives a low confidence result, take 3-4 photos of different plant parts (whole plant, leaf close-up, flower, stem) and try each one. The combination of results will narrow the identification significantly.</p>
            <p><strong>Method 3 — Combine with our tree tools:</strong> If the plant is a tree or large shrub, also try our <Link href="/identify-tree-by-leaf">Leaf Identifier</Link> and species-specific tools — <Link href="/oak-tree-identifier">Oak Tree Identifier</Link>, <Link href="/maple-tree-identifier">Maple Tree Identifier</Link>, <Link href="/pine-tree-identifier">Pine Tree Identifier</Link>, <Link href="/elm-tree-identifier">Elm Tree Identifier</Link>, and <Link href="/birch-tree-identifier">Birch Tree Identifier</Link> — for more detailed identification of specific tree groups.</p>
            <p><strong>Method 4 — Use blog guides for common species:</strong> For common trees and plants, our identification guides provide detailed written identification keys: <Link href="/blog/oak-tree-identification-guide">Oak Tree Guide</Link>, <Link href="/blog/maple-tree-identification-guide">Maple Tree Guide</Link>, <Link href="/blog/pine-tree-identification">Pine Tree Guide</Link>, <Link href="/blog/walnut-tree-identification">Walnut Tree Guide</Link>, and many more.</p>

            {/* IMAGE 2 */}
            <div style={{ margin: '2rem 0', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--card-border)' }}>
              <img
                src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=900&q=80"
                alt="Plant identification showing leaves and flowers for free online identification"
                style={{ width: '100%', height: '280px', objectFit: 'cover' }}
              />
              <div style={{ background: 'var(--card-bg)', padding: '0.8rem 1.2rem' }}>
                <p style={{ color: 'var(--gray-mid)', fontSize: '0.82rem', margin: 0 }}>📸 For best plant identification results: photograph in natural light, include a leaf close-up, whole plant, and any flowers or fruit present. Multiple photos of different plant parts improve AI identification accuracy significantly.</p>
              </div>
            </div>

            <h2>Tips for the Best Plant Identifier by Picture Results</h2>
            <p>Getting accurate plant identification from photos depends on photo quality and what you photograph. These six tips will maximize your plant identifier accuracy:</p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', margin: '1.5rem 0' }}>
              {identificationTips.map((tip, i) => (
                <div key={i} style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '12px', padding: '1.2rem' }}>
                  <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{tip.icon}</div>
                  <div style={{ color: 'var(--white)', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.4rem' }}>{tip.title}</div>
                  <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.83rem', lineHeight: 1.6, margin: 0 }}>{tip.desc}</p>
                </div>
              ))}
            </div>

            <h2>Plant Identifier Free — Common Plant Categories</h2>
            <p>Our free plant identifier online works across all major plant categories. The following lists cover the most commonly identified plant groups and species to give you an idea of what our tool can identify.</p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', margin: '1.5rem 0' }}>
              {plantTypes.map((cat, i) => (
                <div key={i} style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '14px', padding: '1.4rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
                    <span style={{ fontSize: '1.4rem' }}>{cat.icon}</span>
                    <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', fontWeight: 700, color: 'var(--white)', margin: 0 }}>{cat.category}</h3>
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    {cat.plants.map((plant, j) => (
                      <li key={j} style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.83rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <span style={{ color: 'var(--bright-green)', fontSize: '0.6rem' }}>●</span>
                        {plant}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* IMAGE 3 */}
            <div style={{ margin: '2rem 0', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--card-border)' }}>
              <img
                src="https://images.unsplash.com/photo-1542621334-a254cf47733d?w=900&q=80"
                alt="Plant identifier online showing houseplants and garden plants"
                style={{ width: '100%', height: '260px', objectFit: 'cover' }}
              />
              <div style={{ background: 'var(--card-bg)', padding: '0.8rem 1.2rem' }}>
                <p style={{ color: 'var(--gray-mid)', fontSize: '0.82rem', margin: 0 }}>🌱 Free plant identifier online — no app download, no account required. Works on any device directly in your web browser. Upload a photo and get instant plant identification with scientific name, care tips, and growing information.</p>
              </div>
            </div>

            <h2>Plant Identifier Online vs App — Which is Better?</h2>
            <p>Many people search for a plant identifier app to download, but our free plant identifier online offers significant advantages over downloadable apps. First, there is no storage space required — apps can take up 50-200MB of device storage, while our online tool uses zero device storage. Second, our online plant identifier is always up to date — no app updates required, and our AI is continuously improving. Third, it works on any device with a web browser — mobile, tablet, desktop — without needing to be compatible with a specific operating system version.</p>
            <p>The only situation where a downloadable app has an advantage is offline use — if you need to identify plants without internet access (deep wilderness areas), an offline-capable app is useful. For all other situations — gardens, parks, urban areas, or anywhere with a data connection — our free plant identifier online is faster to access, requires no installation, and provides accurate results.</p>

            <h2>Plant Identification and Tree Identification — Related Tools</h2>
            <p>Plant identification and tree identification overlap significantly — all trees are plants, and many people searching for a plant identifier are specifically looking for tree identification. Our suite of free AI identification tools covers both plant and tree identification comprehensively.</p>
            <p>For general tree identification, use our <Link href="/tree-identifier">AI Tree Identifier</Link> — the most powerful tool for identifying tree species from any photo. For leaf-based identification, our <Link href="/identify-tree-by-leaf">Leaf Identifier</Link> specializes in analyzing leaf features for precise species identification. For specific tree groups: <Link href="/oak-tree-identifier">Oak Tree Identifier</Link>, <Link href="/maple-tree-identifier">Maple Tree Identifier</Link>, <Link href="/pine-tree-identifier">Pine Tree Identifier</Link>, <Link href="/birch-tree-identifier">Birch Tree Identifier</Link>, <Link href="/elm-tree-identifier">Elm Tree Identifier</Link>, and <Link href="/fruit-tree-identifier">Fruit Tree Identifier</Link>.</p>
            <p>For wood identification from timber or finished wood products, use our <Link href="/wood-identifier">Wood Identifier</Link>. For in-depth tree species knowledge, our blog covers: <Link href="/blog/oak-tree-identification-guide">Oak Tree Identification</Link>, <Link href="/blog/maple-tree-identification-guide">Maple Tree Guide</Link>, <Link href="/blog/pine-tree-identification">Pine Tree Guide</Link>, <Link href="/blog/walnut-tree-identification">Walnut Tree Guide</Link>, <Link href="/blog/ash-tree-identification">Ash Tree Guide</Link>, <Link href="/blog/trees-with-white-flowers">Trees With White Flowers</Link>, <Link href="/blog/trees-with-white-bark">Trees With White Bark</Link>, and <Link href="/blog/fast-growing-trees">Fast Growing Trees</Link>.</p>

            <h2>Frequently Asked Questions — Plant Identifier</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', margin: '1.5rem 0' }}>
              {[
                { q: 'How do I identify a plant by picture for free?', a: 'Upload a clear photo of the plant to our free plant identifier above. The AI analyzes leaves, flowers, stem, and shape to identify the species instantly. Completely free — no signup, no app download, no subscription.' },
                { q: 'How to identify plants without an app?', a: 'Use our free online plant identifier — works directly in your web browser on any device without downloading any app. Upload a photo and get instant identification. No installation, no account, no subscription needed.' },
                { q: 'How to identify any plant in minutes for free?', a: 'Upload a photo to our plant identifier above → AI identifies in under 30 seconds → free with no signup. For uncertain plants, take multiple photos of different parts (leaves, flowers, stem, whole plant) and try each for best accuracy.' },
                { q: 'Is there a free plant identifier online?', a: 'Yes — our plant identifier is 100% free online. Upload any plant photo and receive the common name, scientific name, family, native region, care tips, and growing information instantly. Works on any device.' },
                { q: 'What plants can this tool identify?', a: 'Thousands of species including flowering plants, houseplants (monstera, pothos, snake plant), succulents and cacti, weeds and wildflowers, herbs and vegetables, shrubs, vines, and all tree species. For detailed tree ID, also use our specialized Tree Identifier and Leaf Identifier.' },
                { q: 'How to identify plants manually without a tool?', a: 'Check: 1) Growth form (tree, shrub, vine, herb). 2) Leaf arrangement (opposite or alternate). 3) Leaf shape, margin, and surface features. 4) Flowers — color, petals, structure. 5) Fruit and seeds. 6) Habitat. Compare to a regional field guide. Our plant identifier does all this automatically from a photo.' },
              ].map((faq, i) => (
                <div key={i} style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '12px', padding: '1.4rem' }}>
                  <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', fontWeight: 700, color: 'var(--white)', marginBottom: '0.6rem' }}>{faq.q}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.88rem', lineHeight: 1.7, margin: 0 }}>{faq.a}</p>
                </div>
              ))}
            </div>

          </div>

          {/* SIDEBAR */}
          <aside style={{ position: 'sticky', top: '90px' }}>
            <div className="card" style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 700, color: 'var(--bright-green)', marginBottom: '1.2rem' }}>🌿 Identify Your Plant</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <Link href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="btn-primary" style={{ textAlign: 'center', fontSize: '0.88rem', padding: '10px 16px' }}>🌿 Plant Identifier</Link>
                <Link href="/tree-identifier" className="btn-outline" style={{ textAlign: 'center', fontSize: '0.88rem', padding: '10px 16px' }}>🌳 Tree Identifier</Link>
                <Link href="/identify-tree-by-leaf" className="btn-outline" style={{ textAlign: 'center', fontSize: '0.88rem', padding: '10px 16px' }}>🍃 Leaf Identifier</Link>
                <Link href="/wood-identifier" className="btn-outline" style={{ textAlign: 'center', fontSize: '0.88rem', padding: '10px 16px' }}>🪵 Wood Identifier</Link>
              </div>
            </div>

            <div className="card" style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 700, color: 'var(--white)', marginBottom: '1rem' }}>📸 Photo Tips</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                <li style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>✅ Natural daylight is best</li>
                <li style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>✅ Include flowers if present</li>
                <li style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>✅ Close-up of leaves</li>
                <li style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>✅ Both leaf surfaces</li>
                <li style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>✅ Whole plant shot</li>
                <li style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>✅ Sharp, in-focus image</li>
                <li style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>❌ Avoid flash photography</li>
                <li style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>❌ Avoid blurry images</li>
              </ul>
            </div>

            <div className="card" style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 700, color: 'var(--white)', marginBottom: '1rem' }}>🌳 Tree Identifiers</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <li><Link href="/oak-tree-identifier" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🌰 Oak Tree Identifier</Link></li>
                <li><Link href="/maple-tree-identifier" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🍁 Maple Tree Identifier</Link></li>
                <li><Link href="/pine-tree-identifier" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🌲 Pine Tree Identifier</Link></li>
                <li><Link href="/elm-tree-identifier" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🌳 Elm Tree Identifier</Link></li>
                <li><Link href="/birch-tree-identifier" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🪵 Birch Tree Identifier</Link></li>
                <li><Link href="/fruit-tree-identifier" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🍎 Fruit Tree Identifier</Link></li>
              </ul>
            </div>

            <div className="card">
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 700, color: 'var(--white)', marginBottom: '1rem' }}>📝 Plant & Tree Guides</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <li><Link href="/blog/identify-tree-by-leaves" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🍃 ID Trees by Leaves</Link></li>
                <li><Link href="/blog/trees-with-white-flowers" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🌸 Trees With White Flowers</Link></li>
                <li><Link href="/blog/trees-with-heart-shaped-leaves" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>💗 Heart Shaped Leaves</Link></li>
                <li><Link href="/blog/trees-with-white-bark" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🪵 Trees With White Bark</Link></li>
                <li><Link href="/blog/fast-growing-trees" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>⚡ Fast Growing Trees</Link></li>
                <li><Link href="/blog/trees-with-thorns" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>⚠️ Trees With Thorns</Link></li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* HOW TO USE */}
      <section className="section" style={{ background: 'var(--deep-black)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', color: 'var(--white)', marginBottom: '0.8rem' }}>How To Identify Any Plant in Minutes For FREE</h2>
          <p style={{ color: 'var(--gray-mid)', marginBottom: '3rem' }}>Three simple steps — no app, no signup, no cost.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            {[
              { step: '01', icon: '📸', title: 'Take a Clear Photo', desc: 'Natural light, sharp focus. Photograph leaves, flowers, and the whole plant for best results.' },
              { step: '02', icon: '⬆️', title: 'Upload Your Photo', desc: 'Drag and drop or click to upload. JPG, PNG, WEBP. Under 20MB. No signup needed.' },
              { step: '03', icon: '✅', title: 'Get Free Plant ID', desc: 'AI identifies plant species in seconds with common name, scientific name, and care tips.' },
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
          <h2 style={{ fontSize: '1.8rem', color: 'var(--white)', marginBottom: '0.8rem' }}>More Free Identification Tools</h2>
          <p style={{ color: 'var(--gray-mid)', marginBottom: '2rem' }}>Complete suite of free AI tools for plants, trees, leaves, and wood.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1rem' }}>
            {[
              { href: '/tree-identifier', icon: '🌳', label: 'Tree Identifier' },
              { href: '/identify-tree-by-leaf', icon: '🍃', label: 'Leaf Identifier' },
              { href: '/wood-identifier', icon: '🪵', label: 'Wood Identifier' },
              { href: '/oak-tree-identifier', icon: '🌰', label: 'Oak Identifier' },
              { href: '/maple-tree-identifier', icon: '🍁', label: 'Maple Identifier' },
              { href: '/pine-tree-identifier', icon: '🌲', label: 'Pine Identifier' },
              { href: '/birch-tree-identifier', icon: '🪵', label: 'Birch Identifier' },
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
        <h2 style={{ fontSize: '2rem', color: 'var(--white)', marginBottom: '1rem' }}>Identify Any Plant Free — No App Required</h2>
        <p style={{ color: 'var(--gray-mid)', marginBottom: '2rem' }}>Free plant identifier online — upload a photo and get results in seconds. Works on any device.</p>
        <Link href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="btn-primary" style={{ fontSize: '1rem', padding: '14px 36px' }}>
          🌿 Identify Plant Now — Free
        </Link>
      </section>
    </Layout>
  );
}
