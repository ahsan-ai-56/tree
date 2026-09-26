import Layout from '../components/Layout';
import Link from 'next/link';
import UploadTool from '../components/UploadTool';

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Flower Identifier — Free AI Flower Identification by Photo Online",
    "description": "Free flower identifier by photo. Upload any flower picture to identify it instantly online — wildflowers, garden flowers, roses, orchids, and more. No app download needed. Free flower identification tool.",
    "url": "https://treeidentifier.online/flower-identifier",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://treeidentifier.online/" },
        { "@type": "ListItem", "position": 2, "name": "Flower Identifier", "item": "https://treeidentifier.online/flower-identifier" }
      ]
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Flower Identifier",
    "applicationCategory": "UtilitiesApplication",
    "operatingSystem": "Web Browser",
    "description": "Free AI flower identifier by photo. Identify any flower online from a picture — wildflowers, garden flowers, roses, orchids, tulips, succulents. Instant results with scientific name, bloom season, care tips, and toxicity. No app download, no signup.",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "url": "https://treeidentifier.online/flower-identifier",
    "featureList": [
      "Identify flowers by photo for free",
      "Works on wildflowers, garden flowers, houseplants",
      "Scientific name and flower family",
      "Bloom season and care tips",
      "Toxicity and pollinator information",
      "No app download required — 100% online"
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I identify a flower by photo for free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Upload a clear photo of the flower to our free flower identifier tool above. The AI analyzes petal shape, color, number of petals, leaf shape, stem, and overall structure to identify the flower species in seconds. For best results, photograph the flower in natural daylight with petals clearly visible and in focus. Our flower identifier is completely free — no app download, no signup, no subscription required."
        }
      },
      {
        "@type": "Question",
        "name": "What flower is this? How do I find out?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The fastest way to find out 'what flower is this' is to upload a photo to our free flower identifier above. The AI will identify the flower species in seconds and provide the common name, scientific name, family, native region, bloom season, care tips, and whether the flower is toxic to pets or humans. Alternatively, you can identify flowers manually by examining petal count, color, leaf shape, stem type, and comparing to a wildflower field guide for your region."
        }
      },
      {
        "@type": "Question",
        "name": "What is the best free flower identifier?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our flower identifier is one of the best free options available — it works directly in your web browser without any app download, identifies thousands of flower species instantly from a photo, and provides comprehensive information including scientific name, bloom season, care tips, and toxicity. Unlike many flower identifier apps that require subscriptions for full features, our tool is 100% free with no hidden costs."
        }
      },
      {
        "@type": "Question",
        "name": "Can I identify a flower by picture without an app?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — our flower identifier works directly in your web browser without downloading any app. Simply visit this page on your phone, tablet, or computer, upload or take a photo of the flower, and receive instant identification results. No app installation, no account creation, no subscription fee. It works on iPhone, Android, and any device with a web browser and internet connection."
        }
      },
      {
        "@type": "Question",
        "name": "How do I identify a wildflower?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To identify a wildflower, upload a clear photo to our free flower identifier. Wildflower identification works best when you photograph: the flower head (front view showing petal arrangement), a side view showing flower structure, the leaves (both upper and lower surfaces), the stem, and if possible the whole plant showing growth habit. The AI identifies wildflowers including common species like Queen Anne's Lace, Black-Eyed Susan, Wild Violet, Chicory, Trillium, Bloodroot, Jack-in-the-Pulpit, and hundreds more."
        }
      },
      {
        "@type": "Question",
        "name": "What flower has 5 petals?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Many common flowers have 5 petals — this is actually the most common petal count in flowering plants (a group called the eudicots). Common 5-petal flowers include: Wild Rose (Rosa species), Buttercup (Ranunculus), Forget-Me-Not (Myosotis), Geranium, Potentilla, Wild Strawberry, Periwinkle (Vinca), Phlox, Pink (Dianthus), and many wildflowers. 5-petal flower identification narrows your options but still includes thousands of species — upload a photo to our flower identifier for the exact species."
        }
      },
      {
        "@type": "Question",
        "name": "How do I identify purple flowers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Common purple flowers include: Lavender (Lavandula), Wisteria, Allium, Salvia, Catmint (Nepeta), Agapanthus, Baptisia, Delphinium, Foxglove, Heather (Calluna), Iris, Lupin, Penstemon, Purple Coneflower (Echinacea purpurea), Verbena, Viola, and Wisteria. For wildflowers: Purple Loosestrife, Wild Violet, Ironweed, Blazing Star (Liatris), and Spiderwort. Upload a photo to our free flower identifier for instant exact identification — purple flower color alone matches hundreds of species."
        }
      },
      {
        "@type": "Question",
        "name": "Are flower identifiers accurate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AI flower identifiers are highly accurate for common garden and wildflower species under good lighting conditions, typically achieving 85-95% accuracy for clear, well-lit photos of intact flowers. Accuracy is highest for flowers with distinctive features (orchids, roses, sunflowers, daisies) and lower for flowers with very similar appearances (many white wildflowers, grasses). For best accuracy: photograph in natural light, show the flower fully open, include leaves, and submit a sharp in-focus image. Our flower identifier provides a confidence score with every identification."
        }
      },
      {
        "@type": "Question",
        "name": "What flowers are toxic to dogs and cats?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Many common flowers are toxic to pets. Toxic to dogs AND cats: Lily (Lilium and Hemerocallis — highly toxic to cats), Tulip (bulbs especially), Daffodil/Narcissus (bulbs especially), Azalea/Rhododendron, Oleander, Cyclamen, Foxglove, Autumn Crocus, Hyacinth. Toxic to cats specifically: Any true Lily species (can cause kidney failure with even small exposure). Toxic to dogs specifically: Sago Palm flower/seeds (highly toxic), Yew, Black-Eyed Susan. Always use our flower identifier to check toxicity before bringing unknown flowers home to pets."
        }
      },
      {
        "@type": "Question",
        "name": "How do I identify a flower by color?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Flower color is a useful starting point but rarely sufficient alone for identification — most flower colors match hundreds of species. The fastest method is uploading a photo to our free flower identifier. For manual identification by color: White flowers — Daisy, Queen Anne's Lace, Lily, Magnolia, Jasmine. Yellow flowers — Sunflower, Buttercup, Daffodil, Black-Eyed Susan, Forsythia. Red flowers — Poppy, Rose, Tulip, Salvia, Hibiscus. Purple flowers — Lavender, Iris, Allium, Wisteria. Pink flowers — Peony, Cherry Blossom, Cosmos, Impatiens. Blue flowers — Cornflower, Forget-Me-Not, Delphinium, Hydrangea (blue)."
        }
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Identify Any Flower by Picture — Free Online",
    "description": "Step-by-step guide to identifying flowers for free using our AI flower identifier by photo.",
    "step": [
      { "@type": "HowToStep", "position": 1, "name": "Take a Clear Flower Photo", "text": "Photograph the flower in natural daylight. Show the flower head from the front, include leaves, and capture the whole plant if possible. Avoid flash and blurry images." },
      { "@type": "HowToStep", "position": 2, "name": "Upload to Flower Identifier", "text": "Click or drag and drop your photo above. Works with JPG, PNG, and WEBP images. No signup required." },
      { "@type": "HowToStep", "position": 3, "name": "Get Instant Flower Identification", "text": "AI identifies the flower species in seconds — provides common name, scientific name, bloom season, care tips, toxicity, and pollinator information." }
    ]
  }
];

const flowerCategories = [
  { icon: '🌹', name: 'Garden Flowers', examples: 'Rose, Peony, Dahlia, Hydrangea, Lavender, Magnolia, Zinnia, Marigold, Delphinium, Foxglove' },
  { icon: '🌸', name: 'Spring Flowers', examples: 'Cherry Blossom, Tulip, Daffodil, Hyacinth, Crocus, Bluebell, Primrose, Magnolia, Forsythia' },
  { icon: '🌼', name: 'Wildflowers', examples: 'Sunflower, Daisy, Poppy, Cornflower, Buttercup, Clover, Queen Anne\'s Lace, Black-Eyed Susan' },
  { icon: '🌺', name: 'Tropical Flowers', examples: 'Hibiscus, Bird of Paradise, Anthurium, Plumeria, Heliconia, Protea, Ginger Lily, Bougainvillea' },
  { icon: '🪷', name: 'Orchids & Exotic', examples: 'Phalaenopsis, Cattleya, Dendrobium, Oncidium, Vanda, Cymbidium, Lady Slipper Orchid' },
  { icon: '🌻', name: 'Summer Flowers', examples: 'Sunflower, Cosmos, Coneflower, Bee Balm, Yarrow, Salvia, Verbena, Gaillardia, Liatris' },
];

const flowerByColor = [
  { color: '⚪ White', flowers: 'Daisy, Magnolia, Jasmine, Lily, Gardenia, Queen Anne\'s Lace, White Rose, Baby\'s Breath, Trillium', tip: 'White flowers are often fragrant — evolved to attract night pollinators like moths' },
  { color: '💛 Yellow', flowers: 'Sunflower, Daffodil, Buttercup, Forsythia, Black-Eyed Susan, Coreopsis, Goldenrod, Marigold', tip: 'Yellow flowers attract bees — bees see yellow and blue best' },
  { color: '🔴 Red', flowers: 'Rose, Poppy, Tulip, Salvia, Gaillardia, Cardinal Flower, Bee Balm, Anthurium, Geranium', tip: 'Red flowers are often pollinated by hummingbirds — birds see red clearly' },
  { color: '🟣 Purple', flowers: 'Lavender, Iris, Allium, Wisteria, Delphinium, Salvia, Verbena, Foxglove, Echinacea purpurea', tip: 'Purple flowers are bee favorites — bees are highly attracted to blue-purple wavelengths' },
  { color: '🩷 Pink', flowers: 'Peony, Cherry Blossom, Cosmos, Impatiens, Zinnia, Phlox, Dianthus, Echinacea, Camellia', tip: 'Pink flowers attract both bees and butterflies — very effective pollinator magnets' },
  { color: '🔵 Blue', flowers: 'Cornflower, Forget-Me-Not, Delphinium, Hydrangea, Borage, Agapanthus, Spiderwort, Chicory', tip: 'Truly blue flowers are rare — less than 10% of flowering plants produce blue pigment' },
];

const photoTips = [
  { icon: '☀️', title: 'Natural Light', desc: 'Photograph in natural daylight — shade is ideal. Direct sun creates harsh shadows that hide petal detail. Avoid flash which washes out color.' },
  { icon: '🎯', title: 'Focus on the Flower Head', desc: 'The flower itself is the most important feature. Make sure the petals are in sharp focus — a slightly blurry background is fine.' },
  { icon: '📐', title: 'Front View + Side View', desc: 'A straight-on front view shows petal count and arrangement. A side view shows flower structure and how it attaches to the stem. Both together maximize accuracy.' },
  { icon: '🍃', title: 'Include Leaves', desc: 'Leaf shape often distinguishes between similar-looking flowers. Include at least one clear leaf in your photo when possible.' },
  { icon: '🌱', title: 'Whole Plant for Wildflowers', desc: 'For wildflower identification, a photo of the whole plant showing growth habit, stem, and basal leaves is very helpful alongside the flower close-up.' },
  { icon: '📱', title: 'Steady Your Phone', desc: 'Blurry photos are the most common cause of inaccurate flower identification. Brace your elbows or use a surface to steady your camera for sharp images.' },
];

export default function FlowerIdentifier() {
  return (
    <Layout
      meta={{
        title: 'Flower Identifier — Free AI Flower Identification by Photo Online',
        description: 'Free flower identifier by photo. Upload any flower picture to identify it instantly — wildflowers, garden flowers, roses, orchids, purple flowers, white flowers. No app download. Free online flower identification tool.',
        canonical: 'https://treeidentifier.online/flower-identifier',
        schema,
      }}
    >
      {/* HERO */}
      <section style={{
        background: `linear-gradient(180deg, rgba(5,5,5,0.70) 0%, var(--black) 100%), url('https://images.unsplash.com/photo-1528825871115-3581a5387919?w=1600&q=80') center/cover no-repeat`,
        padding: '100px 2rem 5rem',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(64,192,116,0.1)', border: '1px solid rgba(64,192,116,0.2)', borderRadius: '50px', padding: '6px 16px', marginBottom: '1.5rem' }}>
            <span style={{ color: 'var(--bright-green)', fontSize: '0.82rem', fontWeight: 600 }}>🌸 FREE FLOWER IDENTIFIER BY PHOTO</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', color: 'var(--white)', lineHeight: 1.1, marginBottom: '1.2rem' }}>
            Flower Identifier
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.75)', marginBottom: '0.8rem', lineHeight: 1.7 }}>
            Upload any flower photo and our AI identifies it instantly — common name, scientific name, bloom season, care tips, and toxicity. Works on wildflowers, garden flowers, orchids, roses, and thousands more species. Free, no app needed.
          </p>
          <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', marginBottom: '2.5rem' }}>
            ✅ 100% Free &nbsp;·&nbsp; ✅ No App Download &nbsp;·&nbsp; ✅ No Signup &nbsp;·&nbsp; ✅ Results in Seconds &nbsp;·&nbsp; ✅ Works on Any Device
          </p>
          <div style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '20px', padding: '2rem', textAlign: 'left' }}>
            <UploadTool mode="flower" />
          </div>
        </div>
      </section>

      {/* WHAT IT IDENTIFIES */}
      <section className="section" style={{ background: 'var(--deep-black)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', color: 'var(--white)', marginBottom: '1rem' }}>What Flowers Can This Identifier Recognize?</h2>
            <p style={{ color: 'var(--gray-mid)', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 }}>Our free flower identifier by picture works on thousands of flower species across all major categories — from common garden roses to rare wildflowers and exotic orchids.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {flowerCategories.map((cat, i) => (
              <div key={i} className="card">
                <div style={{ fontSize: '2rem', marginBottom: '0.8rem' }}>{cat.icon}</div>
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.05rem', fontWeight: 700, color: 'var(--white)', marginBottom: '0.5rem' }}>{cat.name}</h3>
                <p style={{ color: 'var(--gray-mid)', fontSize: '0.85rem', lineHeight: 1.6, margin: 0 }}>{cat.examples}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN CONTENT + SIDEBAR */}
      <section className="section">
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem', display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '4rem', alignItems: 'start' }}>
          <div className="prose-content" style={{ maxWidth: '100%' }}>

            <h2>Flower Identifier by Photo — Instant Free Identification</h2>
            <p>"What flower is this?" is one of the most searched questions on the internet — and our free flower identifier by photo answers it in seconds. Simply upload a photo of any flower and our AI analyzes petal shape, color, count, leaf structure, stem characteristics, and overall growth form to identify the species from a database of thousands of flowers worldwide.</p>
            <p>Unlike flower identifier apps that require downloading and often charge subscription fees for full features, our flower identifier is completely free and works directly in your web browser — no installation, no account, no cost. It works on any device: iPhone, Android, tablet, or desktop computer. For identifying trees that produce flowers, also use our <Link href="/tree-identifier">Tree Identifier</Link> and <Link href="/blog/trees-with-white-flowers">Trees With White Flowers guide</Link>.</p>

            {/* IMAGE 1 */}
            <div style={{ margin: '2rem 0', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--card-border)' }}>
              <img src="https://images.unsplash.com/photo-1528825871115-3581a5387919?w=900&q=80" alt="Free flower identifier by photo showing various flower types for identification" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
              <div style={{ background: 'var(--card-bg)', padding: '0.8rem 1.2rem' }}>
                <p style={{ color: 'var(--gray-mid)', fontSize: '0.82rem', margin: 0 }}>🌸 Free flower identifier by photo — upload any flower picture and AI identifies it instantly. Works on wildflowers, garden flowers, roses, orchids, and thousands more species. Provides scientific name, bloom season, care tips, and whether the flower is toxic to pets.</p>
              </div>
            </div>

            <h2>What Flower Is This? — How to Find Out in Seconds</h2>
            <p>Finding the answer to "what flower is this?" has never been easier. Our AI flower identifier processes your photo in seconds and provides a complete identification including:</p>
            <p>The <strong>common name and scientific name</strong> — both the everyday name (Rose, Lavender, Peony) and the Latin botanical name (e.g., <em>Rosa damascena</em>, <em>Lavandula angustifolia</em>, <em>Paeonia lactiflora</em>) useful for researching the flower further. The <strong>flower family</strong> — Rosaceae (Rose family), Asteraceae (Daisy family), Orchidaceae (Orchid family), which tells you about the flower's close relatives. <strong>Native region</strong> — where the flower originally comes from before cultivation and naturalization. <strong>Bloom season</strong> — when the flower naturally blooms in its native or planted climate. <strong>Care tips</strong> — sun, water, and soil requirements for growing the flower. <strong>Toxicity information</strong> — whether the flower is toxic to dogs, cats, or humans — critically important for pet owners and parents. <strong>Pollinator information</strong> — which pollinators the flower attracts (bees, butterflies, hummingbirds, moths).</p>

            <h2>Identify Flowers by Color — Quick Reference Guide</h2>
            <p>Color is one of the first features you notice about a flower — and while color alone is rarely sufficient to identify a species (thousands of flowers share each color), knowing common flowers by color helps narrow your search. Use our flower identifier by photo for exact identification, or use this color guide as a starting point.</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', margin: '1.5rem 0' }}>
              {flowerByColor.map((item, i) => (
                <div key={i} style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '12px', padding: '1.2rem' }}>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ minWidth: '90px' }}>
                      <div style={{ color: 'var(--white)', fontWeight: 700, fontSize: '0.9rem' }}>{item.color}</div>
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.85rem', marginBottom: '0.3rem' }}>{item.flowers}</div>
                      <div style={{ color: 'var(--bright-green)', fontSize: '0.78rem', fontStyle: 'italic' }}>💡 {item.tip}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* IMAGE 2 */}
            <div style={{ margin: '2rem 0', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--card-border)' }}>
              <img src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=900&q=80" alt="Wildflower identification showing different flower colors and types" style={{ width: '100%', height: '270px', objectFit: 'cover' }} />
              <div style={{ background: 'var(--card-bg)', padding: '0.8rem 1.2rem' }}>
                <p style={{ color: 'var(--gray-mid)', fontSize: '0.82rem', margin: 0 }}>🌼 Wildflower identification — upload a photo of any wildflower to our free flower identifier. The AI identifies species including common wildflowers (Queen Anne's Lace, Black-Eyed Susan, Wild Violet, Chicory, Trillium) and rarer regional species from a single photo.</p>
              </div>
            </div>

            <h2>How to Identify a Wildflower — Complete Guide</h2>
            <p>Wildflower identification is one of the most popular uses of our free flower identifier — hikers, nature lovers, and outdoor enthusiasts regularly encounter beautiful unknown wildflowers and want to know their names, whether they are edible or poisonous, and what pollinators they attract.</p>
            <p>Wildflower identification is more challenging than garden flower identification for several reasons: wildflowers often look similar across multiple species, they vary significantly with age (buds vs. open flowers look very different), regional variations exist within species, and lighting conditions in forests and fields are often less than ideal for photography. The following approach gives the best wildflower identification results:</p>
            <p><strong>Photograph multiple stages:</strong> If possible, photograph the flower at different stages — bud, partially open, fully open, and seed head. Each stage shows different identification features.</p>
            <p><strong>Note the habitat:</strong> Record where you found the flower — woodland, meadow, wetland, roadside, alpine. Many wildflowers are habitat-specific and habitat immediately narrows the identification possibilities significantly.</p>
            <p><strong>Photograph the entire plant:</strong> Wildflower identification often requires seeing the basal leaves (leaves at the base of the plant), stem leaves, stem characteristics (hairy vs. smooth, round vs. square, branching pattern), and overall plant height. A single photo of the flower head misses many identification features.</p>
            <p><strong>Photograph leaves carefully:</strong> Turn a leaf over and photograph the underside — many wildflowers have distinctive underside features (coloration, hair pattern, vein structure) that are important for identification. For leaf-based identification of trees producing flowers, see our <Link href="/identify-tree-by-leaf">Leaf Identifier</Link>.</p>

            <h2>Tips for the Best Flower Identifier Results</h2>
            <p>The accuracy of flower identification depends significantly on photo quality. These six tips will maximize your results:</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', margin: '1.5rem 0' }}>
              {photoTips.map((tip, i) => (
                <div key={i} style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '12px', padding: '1.2rem' }}>
                  <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{tip.icon}</div>
                  <div style={{ color: 'var(--white)', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.4rem' }}>{tip.title}</div>
                  <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.83rem', lineHeight: 1.6, margin: 0 }}>{tip.desc}</p>
                </div>
              ))}
            </div>

            <h2>Flower Identification and Toxicity — Safety Guide</h2>
            <p>One of the most important reasons to correctly identify flowers is toxicity — both to humans (especially children) and to pets. Our flower identifier provides toxicity information with every identification. Here is a summary of the most important toxic flower information:</p>
            <p><strong>Flowers toxic to cats:</strong> All true Lily species (<em>Lilium</em> and <em>Hemerocallis</em>) are severely toxic to cats — even small amounts can cause kidney failure. Other toxic flowers for cats include Tulip (bulbs), Daffodil, Azalea, Rhododendron, Cyclamen, Hyacinth, Oleander, and Autumn Crocus. If your cat has consumed any unknown flower, contact a veterinarian immediately.</p>
            <p><strong>Flowers toxic to dogs:</strong> Azalea/Rhododendron, Tulip (bulbs), Daffodil/Narcissus, Oleander, Foxglove, Autumn Crocus, Sago Palm (cycad flower/seeds — highly toxic), Yew, and Lily of the Valley are among the most dangerous flowers for dogs. Symptoms of flower toxicity in dogs include vomiting, diarrhea, lethargy, tremors, and seizures.</p>
            <p><strong>Flowers toxic to humans:</strong> Foxglove (<em>Digitalis</em>) — all parts, including beautiful flowers, contain cardiac glycosides that can cause heart arrhythmia. Monkshood (Aconite) — extremely toxic to touch and ingest. Oleander, Lily of the Valley, Jimsonweed, Hemlock, and Autumn Crocus are also seriously toxic to humans. <strong>Never eat or touch unfamiliar flowers without confirming identification</strong> — always use our flower identifier and verify with additional sources before any contact with unknown plants.</p>

            <h2>Flower Identifier vs. Flower Identifier App — Which Should You Use?</h2>
            <p>Many people search for a flower identifier app to download, but our free online flower identifier offers significant advantages over downloadable apps. No storage space required — flower identifier apps typically take 50-200MB of phone storage. Our tool uses zero device storage. Always up to date — no app updates needed, our AI continuously improves. Works on any device — no compatibility issues with operating system versions. No subscription fees — many flower identifier apps offer limited free uses then require monthly subscriptions. Our tool is permanently free.</p>
            <p>The only advantage of a downloadable flower identifier app is offline functionality — if you are hiking in areas without mobile data, an offline-capable app is useful. For all situations with internet access — gardens, parks, urban areas, homes — our free online flower identifier is faster, easier, and requires no installation. Related tools: our <Link href="/plant-identifier">Plant Identifier</Link> works on all plants including flowers, and our <Link href="/tree-identifier">Tree Identifier</Link> identifies flowering trees.</p>

            {/* IMAGE 3 */}
            <div style={{ margin: '2rem 0', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--card-border)' }}>
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&q=80" alt="Flower identifier showing garden flowers and orchids for identification" style={{ width: '100%', height: '260px', objectFit: 'cover' }} />
              <div style={{ background: 'var(--card-bg)', padding: '0.8rem 1.2rem' }}>
                <p style={{ color: 'var(--gray-mid)', fontSize: '0.82rem', margin: 0 }}>🌺 From garden roses to exotic orchids — our free flower identifier by photo works on thousands of species worldwide. Each identification includes the scientific name, bloom season, native region, care requirements, toxicity, and which pollinators the flower attracts.</p>
              </div>
            </div>

            <h2>Common Flower Identification Questions</h2>
            <p><strong>What flower has 5 petals?</strong> Five-petaled flowers are the most common in nature — the eudicot plant group (which includes most flowering plants) typically produces flowers with 4 or 5 petals. Common 5-petal flowers include Wild Rose, Buttercup, Forget-Me-Not, Geranium, Wild Strawberry, Potentilla, Phlox, Periwinkle, and thousands of wildflowers. Upload a photo to our free flower identifier to pinpoint the exact species.</p>
            <p><strong>How do I identify purple flowers?</strong> Purple flowers are popular garden plants and common wildflowers. Top purple flowers for gardens: Lavender, Allium, Salvia, Catmint, Agapanthus, Iris, Delphinium, Wisteria, and Echinacea purpurea. Common purple wildflowers: Wild Violet, Purple Loosestrife, Ironweed, Blazing Star, Spiderwort, and Chicory. For full flowering tree identification, see our guide to <Link href="/blog/trees-with-white-flowers">flowering trees</Link> and the <Link href="/blog/linden-tree-identification">Linden tree</Link> (which produces fragrant flowers).</p>
            <p><strong>What are the most fragrant flowers?</strong> The most intensely fragrant flowers include Gardenia, Jasmine, Tuberose, Lily of the Valley, Freesia, Hyacinth, Sweet Pea, Heliotrope, Plumeria, and Peony. Among trees, Linden/Basswood (<Link href="/blog/linden-tree-identification">Tilia species</Link>) and Black Locust (<Link href="/blog/trees-with-white-flowers">fragrant white flowering trees</Link>) produce some of the most intensely scented flowers of any tree species.</p>

            <h2>Frequently Asked Questions — Flower Identifier</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', margin: '1.5rem 0' }}>
              {[
                { q: 'How do I identify a flower by photo for free?', a: 'Upload a clear photo to our free flower identifier above. AI analyzes petals, color, leaves, and structure to identify the species in seconds. Completely free — no app download, no signup, no subscription.' },
                { q: 'What flower is this? How do I find out?', a: 'Upload a photo to our free flower identifier for instant identification. The AI provides common name, scientific name, bloom season, care tips, and toxicity information. For manual identification, note petal count, color, leaf shape, and stem characteristics.' },
                { q: 'What is the best free flower identifier?', a: 'Our flower identifier works directly in your browser — no app download, no subscription, 100% free. Identifies thousands of flower species with scientific name, bloom season, care tips, and toxicity. No hidden costs.' },
                { q: 'Can I identify a flower by picture without an app?', a: 'Yes — our tool works in any web browser without downloading an app. Works on iPhone, Android, tablet, and desktop. No installation, no account, no subscription. Upload a photo and get instant results.' },
                { q: 'How do I identify a wildflower?', a: 'Upload a clear photo to our free flower identifier. For best wildflower ID accuracy: photograph the whole plant, include leaves, note habitat (woodland/meadow/wetland), and take multiple photos at different angles. The AI identifies common and uncommon wildflowers from a single photo.' },
                { q: 'What flower has 5 petals?', a: 'Many flowers have 5 petals — it\'s the most common count in flowering plants. Common 5-petal flowers: Wild Rose, Buttercup, Forget-Me-Not, Geranium, Wild Strawberry, Phlox, Periwinkle, Potentilla. Upload a photo for exact species identification.' },
                { q: 'How do I identify purple flowers?', a: 'Common purple garden flowers: Lavender, Iris, Allium, Salvia, Delphinium, Wisteria, Echinacea purpurea. Common purple wildflowers: Wild Violet, Purple Loosestrife, Ironweed, Blazing Star, Chicory, Spiderwort. Upload a photo for exact species.' },
                { q: 'Are flower identifiers accurate?', a: 'AI flower identifiers achieve 85-95% accuracy for common species under good lighting. Highest accuracy for distinctive flowers (orchids, roses, sunflowers). Best results: natural light, sharp focus, front view of open flower, include leaves. A confidence score is provided with every identification.' },
                { q: 'What flowers are toxic to dogs and cats?', a: 'Toxic to cats: All Lily species (severe kidney toxicity), Tulip, Daffodil, Azalea, Oleander, Cyclamen. Toxic to dogs: Azalea, Foxglove, Oleander, Autumn Crocus, Sago Palm. Always identify unknown flowers before bringing home. Our flower identifier provides toxicity information with every result.' },
                { q: 'How do I identify a flower by color?', a: 'White flowers: Daisy, Magnolia, Jasmine, Lily, Gardenia. Yellow: Sunflower, Daffodil, Buttercup, Black-Eyed Susan. Red: Rose, Poppy, Tulip, Salvia. Purple: Lavender, Iris, Allium, Wisteria. Pink: Peony, Cherry Blossom, Cosmos. Blue: Cornflower, Forget-Me-Not, Delphinium. Upload a photo for exact identification.' },
              ].map((faq, i) => (
                <div key={i} style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '12px', padding: '1.4rem' }}>
                  <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', fontWeight: 700, color: 'var(--white)', marginBottom: '0.6rem' }}>{faq.q}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.88rem', lineHeight: 1.7, margin: 0 }}>{faq.a}</p>
                </div>
              ))}
            </div>

            <h2>Flower Identification and Tree Identification — Related Tools</h2>
            <p>Many flowers are produced by trees — and identifying both the flower and the tree that produces it gives the most complete understanding. Our <Link href="/tree-identifier">AI Tree Identifier</Link> identifies all flowering trees from photos of leaves, bark, or the full tree. Our <Link href="/identify-tree-by-leaf">Leaf Identifier</Link> specializes in leaf-based identification. For specific flowering trees: see our guides on <Link href="/blog/trees-with-white-flowers">Trees With White Flowers</Link>, the intensely fragrant <Link href="/blog/linden-tree-identification">Linden Tree</Link>, and the beautiful <Link href="/blog/trees-with-white-bark">Trees With White Bark</Link>. For all plant identification beyond flowers, use our <Link href="/plant-identifier">Plant Identifier</Link> and <Link href="/wood-identifier">Wood Identifier</Link>.</p>

          </div>

          {/* SIDEBAR */}
          <aside style={{ position: 'sticky', top: '90px' }}>
            <div className="card" style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 700, color: 'var(--bright-green)', marginBottom: '1.2rem' }}>🌸 Identify Your Flower</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <Link href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="btn-primary" style={{ textAlign: 'center', fontSize: '0.88rem', padding: '10px 16px' }}>🌸 Flower Identifier</Link>
                <Link href="/plant-identifier" className="btn-outline" style={{ textAlign: 'center', fontSize: '0.88rem', padding: '10px 16px' }}>🌿 Plant Identifier</Link>
                <Link href="/tree-identifier" className="btn-outline" style={{ textAlign: 'center', fontSize: '0.88rem', padding: '10px 16px' }}>🌳 Tree Identifier</Link>
                <Link href="/identify-tree-by-leaf" className="btn-outline" style={{ textAlign: 'center', fontSize: '0.88rem', padding: '10px 16px' }}>🍃 Leaf Identifier</Link>
              </div>
            </div>

            <div className="card" style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 700, color: 'var(--white)', marginBottom: '1rem' }}>⚠️ Toxic Flower Alert</h3>
              <div style={{ background: 'rgba(248,113,113,0.08)', border: '1px solid rgba(248,113,113,0.2)', borderRadius: '10px', padding: '0.8rem' }}>
                <p style={{ color: '#fca5a5', fontSize: '0.82rem', margin: '0 0 0.5rem', fontWeight: 600 }}>Toxic to Cats 🐱</p>
                <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.8rem', margin: 0 }}>All Lily species, Tulip, Daffodil, Azalea, Oleander, Cyclamen</p>
              </div>
              <div style={{ background: 'rgba(251,191,36,0.08)', border: '1px solid rgba(251,191,36,0.2)', borderRadius: '10px', padding: '0.8rem', marginTop: '0.8rem' }}>
                <p style={{ color: '#fbbf24', fontSize: '0.82rem', margin: '0 0 0.5rem', fontWeight: 600 }}>Toxic to Dogs 🐶</p>
                <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.8rem', margin: 0 }}>Azalea, Foxglove, Oleander, Autumn Crocus, Sago Palm</p>
              </div>
            </div>

            <div className="card" style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 700, color: 'var(--white)', marginBottom: '1rem' }}>📸 Photo Tips</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <li style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>✅ Natural daylight</li>
                <li style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>✅ Fully open flower</li>
                <li style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>✅ Front + side view</li>
                <li style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>✅ Include leaves</li>
                <li style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>✅ Sharp in focus</li>
                <li style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>❌ No flash photos</li>
                <li style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>❌ No blurry images</li>
              </ul>
            </div>

            <div className="card" style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 700, color: 'var(--white)', marginBottom: '1rem' }}>🌳 Tree Identifiers</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <li><Link href="/oak-tree-identifier" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🌰 Oak Tree Identifier</Link></li>
                <li><Link href="/maple-tree-identifier" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🍁 Maple Tree Identifier</Link></li>
                <li><Link href="/pine-tree-identifier" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🌲 Pine Tree Identifier</Link></li>
                <li><Link href="/fruit-tree-identifier" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🍎 Fruit Tree Identifier</Link></li>
                <li><Link href="/birch-tree-identifier" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🪵 Birch Identifier</Link></li>
                <li><Link href="/elm-tree-identifier" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🌳 Elm Identifier</Link></li>
              </ul>
            </div>

            <div className="card">
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 700, color: 'var(--white)', marginBottom: '1rem' }}>📝 Flower Tree Guides</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <li><Link href="/blog/trees-with-white-flowers" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🌸 Trees With White Flowers</Link></li>
                <li><Link href="/blog/linden-tree-identification" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🌼 Linden Tree (Fragrant)</Link></li>
                <li><Link href="/blog/trees-with-heart-shaped-leaves" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>💗 Heart Shaped Leaves</Link></li>
                <li><Link href="/blog/trees-with-white-bark" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🪵 Trees With White Bark</Link></li>
                <li><Link href="/blog/fast-growing-trees" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>⚡ Fast Growing Trees</Link></li>
                <li><Link href="/blog/lilly-pilly-tree" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🌿 Lilly Pilly Tree</Link></li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* HOW TO USE */}
      <section className="section" style={{ background: 'var(--deep-black)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', color: 'var(--white)', marginBottom: '0.8rem' }}>How to Identify Any Flower by Picture — Free Online</h2>
          <p style={{ color: 'var(--gray-mid)', marginBottom: '3rem' }}>Three simple steps — no app, no signup, no cost.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            {[
              { step: '01', icon: '📸', title: 'Take a Clear Photo', desc: 'Natural light, fully open flower, sharp focus. Include leaves for best accuracy.' },
              { step: '02', icon: '⬆️', title: 'Upload Your Photo', desc: 'Drag and drop or click to upload. JPG, PNG, WEBP. No signup required.' },
              { step: '03', icon: '✅', title: 'Get Free Flower ID', desc: 'AI identifies flower in seconds with name, bloom season, care tips, and toxicity.' },
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
          <p style={{ color: 'var(--gray-mid)', marginBottom: '2rem' }}>Complete suite of free AI tools for flowers, plants, trees, leaves, and wood.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(155px, 1fr))', gap: '1rem' }}>
            {[
              { href: '/plant-identifier', icon: '🌿', label: 'Plant Identifier' },
              { href: '/tree-identifier', icon: '🌳', label: 'Tree Identifier' },
              { href: '/identify-tree-by-leaf', icon: '🍃', label: 'Leaf Identifier' },
              { href: '/wood-identifier', icon: '🪵', label: 'Wood Identifier' },
              { href: '/oak-tree-identifier', icon: '🌰', label: 'Oak Identifier' },
              { href: '/maple-tree-identifier', icon: '🍁', label: 'Maple Identifier' },
              { href: '/pine-tree-identifier', icon: '🌲', label: 'Pine Identifier' },
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
        <h2 style={{ fontSize: '2rem', color: 'var(--white)', marginBottom: '1rem' }}>Identify Any Flower Free — No App Required</h2>
        <p style={{ color: 'var(--gray-mid)', marginBottom: '2rem' }}>Free flower identifier by photo — upload a picture and get results in seconds. Works on any device.</p>
        <Link href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="btn-primary" style={{ fontSize: '1rem', padding: '14px 36px' }}>
          🌸 Identify Flower Now — Free
        </Link>
      </section>
    </Layout>
  );
}
