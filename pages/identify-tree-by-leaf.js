import Layout from '../components/Layout';
import UploadTool from '../components/UploadTool';
import Link from 'next/link';

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://treeidentifier.ai/identify-tree-by-leaf",
      "url": "https://treeidentifier.ai/identify-tree-by-leaf",
      "name": "Identify a Tree by Leaf — Free AI Leaf Identification Tool",
      "description": "Upload a leaf photo and instantly identify the tree species. Our AI analyzes leaf shape, venation, margin, and texture to identify 50,000+ tree species.",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://treeidentifier.ai" },
          { "@type": "ListItem", "position": 2, "name": "Identify Tree by Leaf", "item": "https://treeidentifier.ai/identify-tree-by-leaf" }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can I identify a tree from just one leaf?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes! A single, clear photo of one leaf is often sufficient for our AI to make an accurate identification. The more clearly you can see the leaf shape, edges, and vein patterns, the better the result." }
        },
        {
          "@type": "Question",
          "name": "What leaf features does the AI analyze?",
          "acceptedAnswer": { "@type": "Answer", "text": "Our AI analyzes leaf shape, margin type (serrated, lobed, smooth), venation pattern, texture, color, size, and petiole characteristics to identify the tree species." }
        },
        {
          "@type": "Question",
          "name": "Does it work with pressed or dried leaves?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes, our AI can identify pressed and dried leaves. Clear shape and vein patterns are retained in dried leaves and are sufficient for identification." }
        }
      ]
    }
  ]
};

const leafFeatures = [
  { icon: '📐', label: 'Leaf Shape', desc: 'Oval, lanceolate, palmate, pinnate, lobed, or compound — shape is the primary identifier.' },
  { icon: '✂️', label: 'Leaf Margin', desc: 'Entire (smooth), serrated, crenate, lobed, or doubly serrated edges.' },
  { icon: '🔀', label: 'Venation Pattern', desc: 'Pinnate, palmate, parallel, or dichotomous branching vein networks.' },
  { icon: '🎨', label: 'Color & Texture', desc: 'Upper and lower surface color, glossiness, hairiness, and waxy coatings.' },
  { icon: '📏', label: 'Size & Proportion', desc: 'Length-to-width ratio and relative petiole length.' },
  { icon: '🌿', label: 'Arrangement', desc: 'Whether leaves are opposite, alternate, or whorled on the branch.' },
];

const leafTypes = [
  { name: 'Simple Leaves', icon: '🍃', examples: 'Maple, Oak, Birch, Willow, Beech', note: 'Single undivided blade' },
  { name: 'Compound Leaves', icon: '🌿', examples: 'Walnut, Ash, Locust, Elder', note: 'Multiple leaflets on one stem' },
  { name: 'Palmate Leaves', icon: '✋', examples: 'Horse Chestnut, Cannabis, Fig', note: 'Radiating from a central point' },
  { name: 'Pinnate Leaves', icon: '🪶', examples: 'Rowan, Acacia, Mimosa', note: 'Leaflets arranged in two rows' },
  { name: 'Lobed Leaves', icon: '🍁', examples: 'Maple, Oak, Ginkgo, Mulberry', note: 'Divided into rounded lobes' },
  { name: 'Needle Leaves', icon: '🌲', examples: 'Pine, Spruce, Fir, Larch', note: 'Long, narrow, needle-shaped' },
];

const seasons = [
  { season: 'Spring', icon: '🌸', tips: 'Fresh new leaves are smaller but full of color. Flowers may also be present for added ID accuracy.' },
  { season: 'Summer', icon: '☀️', tips: 'Fully mature leaves show their true shape and size. Best time for the most accurate identification.' },
  { season: 'Autumn', icon: '🍂', tips: 'Color changes are distinctive. Even changing leaves retain enough shape for accurate AI identification.' },
  { season: 'Winter', icon: '❄️', tips: 'No leaves? Try bark or bud photos. Fallen dried leaves from the previous season also work well.' },
];

export default function IdentifyByLeaf() {
  return (
    <Layout
      meta={{
        title: 'Identify a Tree by Leaf — Free AI Leaf Identification Tool | Tree Identifier',
        description: 'Upload a leaf photo and identify the tree species instantly. Our AI analyzes leaf shape, edges, venation, and texture to identify 50,000+ tree species. Free, fast, and accurate.',
        canonical: 'https://treeidentifier.ai/identify-tree-by-leaf',
        schema,
      }}
      breadcrumbs={[{ label: 'Identify Tree by Leaf' }]}
    >
      {/* HERO - Different layout: full width with leaf-forest background */}
      <section style={{
        position: 'relative',
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        background: `linear-gradient(135deg, rgba(5,5,5,0.8) 0%, rgba(13,40,24,0.7) 50%, rgba(5,5,5,0.9) 100%), url('https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?w=1600&q=80') center/cover no-repeat`,
        paddingTop: '70px',
        overflow: 'hidden'
      }}>
        {/* Decorative leaf shapes */}
        <div style={{ position: 'absolute', right: '5%', top: '15%', opacity: 0.06, fontSize: '20rem', lineHeight: 1, pointerEvents: 'none', transform: 'rotate(15deg)' }}>🍃</div>
        <div style={{ position: 'absolute', left: '3%', bottom: '10%', opacity: 0.05, fontSize: '15rem', lineHeight: 1, pointerEvents: 'none', transform: 'rotate(-20deg)' }}>🍁</div>

        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem', width: '100%', position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '600px' }}>
            <span className="green-tag">🍃 Leaf-Specific AI</span>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--white)', lineHeight: 1.1, marginBottom: '1.2rem' }}>
              Identify a Tree<br />
              <span style={{ color: 'var(--bright-green)' }}>by Its Leaf</span>
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, marginBottom: '2.5rem' }}>
              Found an interesting leaf? Our AI analyzes 6 key leaf characteristics to identify the exact tree species in seconds. Works with fresh, pressed, and even fallen autumn leaves.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem' }}>
              {['🎯 97% Accurate', '🍃 All Leaf Types', '⚡ Under 3 Seconds', '🆓 Always Free'].map(b => (
                <span key={b} style={{ background: 'rgba(64,192,116,0.1)', border: '1px solid rgba(64,192,116,0.25)', color: 'var(--pale-green)', borderRadius: '50px', padding: '6px 16px', fontSize: '0.85rem', fontWeight: 500 }}>
                  {b}
                </span>
              ))}
            </div>

            <Link href="/tree-identifier" className="btn-outline">
              🌳 Prefer full tree photo?
            </Link>
          </div>
        </div>
      </section>

      {/* UPLOAD TOOL - Centered, large card */}
      <section style={{ background: 'var(--deep-black)', padding: '0 2rem 4rem', marginTop: '-2rem', position: 'relative', zIndex: 3 }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{
            background: 'var(--card-bg)',
            border: '1px solid var(--bright-green)',
            borderRadius: '24px',
            padding: '3rem',
            boxShadow: '0 30px 80px rgba(64,192,116,0.1)'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.4rem', fontWeight: 700, color: 'var(--white)' }}>
                🍃 Upload Your Leaf Photo
              </h2>
              <p style={{ color: 'var(--gray-mid)', marginTop: '0.5rem' }}>
                Best results with a clear photo of a single leaf on a light background
              </p>
            </div>
            <UploadTool mode="leaf" />
          </div>
        </div>
      </section>

      {/* LEAF FEATURES */}
      <section className="section">
        <div className="section-inner">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-label">AI Analysis</span>
            <h2 className="section-title">What Our AI Analyzes<br />in Every Leaf</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Our AI simultaneously examines six botanical characteristics to deliver precise species identification.
            </p>
          </div>
          <div className="grid-3">
            {leafFeatures.map((f, i) => (
              <div key={i} style={{
                background: 'var(--card-bg)',
                border: '1px solid var(--card-border)',
                borderRadius: '16px',
                padding: '1.8rem',
                borderLeft: '3px solid var(--bright-green)',
                transition: 'transform 0.3s',
              }}>
                <span style={{ fontSize: '2rem', display: 'block', marginBottom: '0.8rem' }}>{f.icon}</span>
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 700, color: 'var(--bright-green)', marginBottom: '0.5rem' }}>{f.label}</h3>
                <p style={{ color: 'var(--gray-mid)', fontSize: '0.88rem', lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEAF TYPES */}
      <section className="section" style={{ background: 'var(--deep-black)' }}>
        <div className="section-inner">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-label">Coverage</span>
            <h2 className="section-title">All Leaf Types Identified</h2>
          </div>
          <div className="grid-3">
            {leafTypes.map((t, i) => (
              <div className="card" key={i}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.8rem' }}>
                  <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 700, color: 'var(--white)' }}>{t.name}</h3>
                  <span style={{ fontSize: '1.5rem' }}>{t.icon}</span>
                </div>
                <p style={{ color: 'var(--bright-green)', fontSize: '0.82rem', marginBottom: '0.4rem', fontWeight: 500 }}>{t.note}</p>
                <p style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>{t.examples}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEASONAL TIPS */}
      <section className="section">
        <div className="section-inner">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-label">Year-Round Identification</span>
            <h2 className="section-title">Works in Every Season</h2>
          </div>
          <div className="grid-4">
            {seasons.map((s, i) => (
              <div key={i} style={{
                background: 'var(--card-bg)',
                border: '1px solid var(--card-border)',
                borderRadius: '16px',
                padding: '1.5rem',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '0.8rem' }}>{s.icon}</div>
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', fontWeight: 700, color: 'var(--white)', marginBottom: '0.5rem' }}>{s.season}</h3>
                <p style={{ color: 'var(--gray-mid)', fontSize: '0.82rem', lineHeight: 1.6 }}>{s.tips}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENT SEO - 1000+ words */}
      <section className="section" style={{ background: 'var(--deep-black)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2rem' }}>
          <article className="prose-content" style={{ maxWidth: '100%' }}>
            <span className="green-tag">Botanical Science</span>
            <h2>The Science of Leaf Identification — How to Identify Any Tree by Its Leaves</h2>
            <p>
              Of all the methods botanists use to identify tree species, leaf analysis remains the gold standard. Leaves are present for most of the year on deciduous trees and year-round on evergreens, they are easy to collect and photograph, and they carry a wealth of botanical information encoded in their shape, structure, and texture. When you <Link href="/identify-tree-by-leaf">identify a tree by its leaf</Link>, you're engaging in the same systematic observation process that trained botanists have used for centuries — now supercharged by artificial intelligence.
            </p>

            <h3>The Four Primary Leaf Characteristics</h3>
            <p>
              Every leaf identification begins with four primary characteristics that alone can narrow thousands of possibilities down to a handful of candidates. <strong>Leaf arrangement</strong> on the branch is the first question: are leaves opposite (in pairs directly across from each other), alternate (staggered along the branch), or whorled (three or more leaves radiating from the same point)? Only a small fraction of tree species have opposite leaves — maples, ashes, dogwoods, and elders are the most common examples. If leaves are opposite, the possible species are already dramatically reduced.
            </p>
            <p>
              The second primary characteristic is <strong>leaf type</strong>: simple or compound. A simple leaf is a single undivided blade attached to the twig. A compound leaf consists of multiple leaflets all attached to a shared central stalk. Walnut, ash, locust, and elderberry trees all have compound leaves. Distinguishing simple from compound leaves requires looking for the bud at the base of the entire leaf — true leaves always have a bud at their base, individual leaflets do not.
            </p>
            <p>
              <strong>Leaf shape</strong> — the overall outline of the blade — is the third characteristic. Shape vocabulary in botany is precise: ovate (egg-shaped), lanceolate (lance-shaped), cordate (heart-shaped), deltoid (triangular), elliptical, orbicular (round), and many more. The shape narrows identification considerably, especially when combined with leaf arrangement and type.
            </p>
            <p>
              The <strong>leaf margin</strong> — the edge of the leaf — is the fourth primary characteristic. Margins can be entire (completely smooth), serrated (toothed like a saw), crenate (rounded teeth), lobed (with large rounded or pointed projections), or sinuate (wavy). The depth and regularity of teeth and lobes varies between species in highly specific ways.
            </p>

            <h3>Secondary Leaf Characteristics for Precise Identification</h3>
            <p>
              When multiple species share similar primary characteristics, secondary characteristics become decisive. <strong>Venation</strong> — the pattern of veins running through the leaf — is among the most reliable secondary features. Pinnate venation has a single midrib with smaller veins branching off to the sides, like the ribs of a feather. Palmate venation has multiple main veins radiating from the base, like fingers from a palm. Parallel venation, common in grasses and some palms, has veins running side by side without branching.
            </p>
            <p>
              <strong>Leaf texture and surface features</strong> include the presence of hairs (trichomes), which may be present on the upper surface, underside, along veins, or around the margin. Some species have sticky or resinous surfaces, others are glossy and waxy, others are rough or puckered. The underside often reveals features not visible from above, including rust-colored or silver hairs, prominent veins, or distinctive gland dots.
            </p>
            <p>
              <strong>Leaf color</strong> varies between species and seasons, but the contrast between the upper and lower surface is often more diagnostic than the absolute color. Species like the white willow and white poplar have dramatically paler undersides that flash silver-white in the breeze — a recognizable field mark. The autumn color of a tree is also species-specific: sugar maples turn brilliant orange-red, ginkgos turn pure gold, and ashes turn deep burgundy.
            </p>

            <h3>Identifying Trees in Autumn — Using Fallen Leaves</h3>
            <p>
              Autumn is actually one of the best times for leaf identification. The distinctive color changes of each species make identification easier, not harder. A pile of leaves beneath a tree contains all the information you need: pick up a fallen leaf that's still in good condition, place it on a light surface, and photograph it clearly. Our AI leaf identifier performs excellently on autumn leaves because the color transformation, while dramatic, does not alter the fundamental shape, margin, or venation patterns.
            </p>
            <p>
              When working with fallen leaves, look for leaves with intact margins and clearly visible veins. Partially decomposed or insect-damaged leaves may still work, but results are more accurate with complete, undamaged specimens. When in doubt, photograph multiple leaves from the same tree and upload the clearest one. The more detail visible in the photo, the higher the identification confidence score will be.
            </p>

            <h3>Leaf Identification for Foraging Safety</h3>
            <p>
              One of the most critical applications of accurate leaf identification is foraging safety. Several deadly or dangerously toxic plants closely resemble edible species when viewed casually. Giant hogweed leaves resemble those of edible cow parsley but cause severe chemical burns. Deadly nightshade can be confused with edible berries. While trees are generally less dangerous than ground-level plants, several toxic trees do exist in residential and woodland settings.
            </p>
            <p>
              The yew tree (<em>Taxus baccata</em>) is one of the most toxic trees in the temperate world — virtually all parts except the fleshy red aril surrounding the seed are lethally poisonous. Its flat, dark green needles can be mistaken for those of safer conifers. Horse chestnut produces seeds that resemble sweet chestnuts in their spiky casings but are toxic if eaten. Black locust leaves and bark contain toxic lectins. Always use our leaf identifier to confirm the species of any tree before harvesting seeds, berries, bark, or leaves for any purpose.
            </p>

            <h3>How to Take the Perfect Leaf Photo for AI Identification</h3>
            <p>
              Getting the best results from our AI leaf identifier requires a good quality photo. Follow these five guidelines for near-perfect identification accuracy every time. First, use natural daylight and avoid indoor artificial lighting, which can shift colors and create misleading shadows. Second, place the leaf flat on a clean white or light gray background — a sheet of printer paper works perfectly. Third, shoot from directly above the leaf, not at an angle. Fourth, get close enough to fill 70-80% of the frame with the leaf. Fifth, ensure the image is sharp — if your phone has portrait mode, turn it off for leaf photography as the depth-of-field blur can obscure edge details.
            </p>
            <p>
              For the best possible results, photograph both the upper and lower surface of the leaf. Our <Link href="/identify-tree-by-leaf">leaf identification AI</Link> can process multiple photos in sequence, and the underside often contains distinctive features that dramatically increase confidence. Photographing a small piece of twig with a few leaves attached also helps the AI assess leaf arrangement, another powerful identification feature.
            </p>
            <p>
              Ready to identify your leaf? <Link href="/identify-tree-by-leaf#upload">Upload your photo above</Link> and get your result in seconds. You can also try our <Link href="/tree-identifier">full tree identifier</Link> if you have a photo showing the entire tree or its bark.
            </p>
          </article>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '4rem 2rem', background: 'linear-gradient(135deg, var(--dark-green), var(--forest-green))', borderTop: '1px solid var(--card-border)' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.2rem', color: 'var(--white)', marginBottom: '1rem' }}>Found a Mystery Leaf?</h2>
          <p style={{ color: 'var(--pale-green)', marginBottom: '2rem', fontSize: '1rem', lineHeight: 1.7 }}>
            Don't wonder — know. Upload your leaf photo now and get an expert AI identification in seconds.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/tree-identifier" className="btn-outline" style={{ borderColor: 'var(--pale-green)', color: 'var(--pale-green)' }}>🌳 Try Full Tree ID</Link>
            <Link href="/about" className="btn-outline" style={{ borderColor: 'var(--pale-green)', color: 'var(--pale-green)' }}>Learn About Our AI</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
