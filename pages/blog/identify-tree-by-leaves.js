import Layout from '../../components/Layout';
import Link from 'next/link';

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How to Identify a Tree by Its Leaves — Complete Visual Guide",
    "description": "Learn how to identify any tree by its leaves using leaf shape, margin, venation, texture, and arrangement. Complete visual guide with expert tips and 20+ tree examples.",
    "image": "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=1200&q=80",
    "datePublished": "2026-07-22",
    "dateModified": "2026-07-22",
    "author": { "@type": "Organization", "name": "Tree Identifier" },
    "publisher": { "@type": "Organization", "name": "Tree Identifier", "url": "https://treeidentifier.online/" },
    "mainEntityOfPage": "https://treeidentifier.online/blog/identify-tree-by-leaves",
    "wordCount": "1800",
    "keywords": "how to identify a tree by its leaves, identify tree by leaves, tree leaf identification, leaf shapes trees"
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I identify a tree by its leaves?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To identify a tree by its leaves, observe these six features in order: leaf type (simple or compound), leaf shape (oval, lance-shaped, lobed, etc.), leaf margin (smooth, serrated, or lobed), leaf arrangement on the twig (opposite or alternate), leaf surface texture (smooth, hairy, or waxy), and leaf color (top vs underside). Combining these features narrows down the species quickly. Upload a clear photo to our AI Leaf Identifier for instant identification."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between simple and compound leaves?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A simple leaf is a single undivided blade attached to the twig by a stalk (petiole). Examples include oak, maple, and birch leaves. A compound leaf is divided into multiple smaller leaflets, all attached to a single main stalk. Examples include ash (pinnately compound with leaflets along a central stalk), horse chestnut (palmately compound with leaflets radiating from one point), and black walnut. To tell them apart, look for the bud — buds only grow where leaves attach to the twig, never where leaflets attach to the leaf stalk."
        }
      },
      {
        "@type": "Question",
        "name": "What trees have lobed leaves?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The most common trees with lobed leaves include: Oak (deeply lobed, either rounded or pointed lobes), Maple (opposite lobed leaves with 3-5 pointed lobes), Sweetgum (star-shaped with 5-7 pointed lobes), Tulip Poplar (unusual 4-lobed shape with flat top), Sycamore (large 3-5 lobed leaves resembling maple), Mulberry (variable lobed or unlobed leaves on same tree), and Sassafras (3 different leaf shapes including mitten-shaped lobed leaves on same tree)."
        }
      },
      {
        "@type": "Question",
        "name": "How do opposite and alternate leaves help identify trees?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Leaf arrangement is one of the fastest identification shortcuts in tree identification. Opposite leaves — where two leaves grow directly across from each other at each node — immediately limit your tree to the MAD Cap Horse families: Maple, Ash, Dogwood, Caprifoliaceae, and Horse Chestnut. This eliminates the vast majority of tree species in one observation. All other trees have alternate leaves — one leaf per node, alternating sides — including oaks, birches, cherries, elms, and many more."
        }
      },
      {
        "@type": "Question",
        "name": "What is the best app to identify trees by leaves?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our free AI Leaf Identifier at treeidentifier.online is specifically optimized for tree identification from leaf photos. Upload a clear photo of the leaf (top surface, full blade visible, natural lighting) and receive instant species identification with confidence level and key identification features. The AI works on all common North American and European tree species and is available free with no signup required."
        }
      },
      {
        "@type": "Question",
        "name": "What trees have heart-shaped leaves?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Common trees with heart-shaped (cordate) leaves include: Eastern Redbud (Cercis canadensis) — the classic heart-shaped leaf, one of the most distinctive; Catalpa — very large heart-shaped leaves up to 30cm; Basswood/Linden — heart-shaped with asymmetric base and toothed margin; Paulownia — enormous heart-shaped leaves up to 60cm on young growth; and Katsura — small neat heart-shaped leaves that smell of caramel when crushed in autumn."
        }
      },
      {
        "@type": "Question",
        "name": "How do leaf margins help identify trees?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Leaf margins (edges) are highly distinctive between species. The main margin types are: entire (smooth, no teeth — Magnolia, Dogwood), serrated (fine teeth pointing forward — Cherry, Birch, Elm), doubly serrated (large and small teeth alternating — Hornbeam, Ironwood), crenate (rounded teeth — Basswood), and lobed (large rounded or pointed projections — Oak, Maple). Margin type combined with lobe shape narrows identification significantly."
        }
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://treeidentifier.online/" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://treeidentifier.online/blog" },
      { "@type": "ListItem", "position": 3, "name": "How to Identify a Tree by Its Leaves", "item": "https://treeidentifier.online/blog/identify-tree-by-leaves" }
    ]
  }
];

const leafFeatures = [
  { step: '01', title: 'Simple or Compound?', icon: '🍃', description: 'First determine if the leaf is simple (one blade) or compound (multiple leaflets). Look for the bud — buds grow only where leaves attach to twigs, never where leaflets attach to the leaf stalk. Ash, Walnut, and Hickory have compound leaves. Oak, Maple, and Birch have simple leaves.', examples: 'Simple: Oak, Maple, Birch, Cherry | Compound: Ash, Walnut, Horse Chestnut' },
  { step: '02', title: 'Leaf Shape', icon: '📐', description: 'Observe the overall outline of the leaf blade. Is it oval (elliptical), lance-shaped (narrow), lobed (with finger-like projections), heart-shaped (cordate), or triangular? Leaf shape is one of the most distinctive features and immediately narrows identification to a small group of species.', examples: 'Oval: Dogwood, Magnolia | Lobed: Oak, Maple | Lance-shaped: Willow | Heart: Redbud' },
  { step: '03', title: 'Leaf Margin (Edge)', icon: '✂️', description: 'Examine the leaf edge closely. Is it smooth (entire), finely toothed (serrated), doubly toothed, or deeply lobed? Run your finger along the edge — smooth means entire, sharp teeth mean serrated. This feature distinguishes between many similar-looking species.', examples: 'Smooth: Magnolia, Dogwood | Serrated: Cherry, Birch | Doubly serrated: Elm, Hornbeam' },
  { step: '04', title: 'Leaf Arrangement', icon: '🔄', description: 'Look at how leaves attach to the twig. Opposite leaves (two per node, directly across from each other) = Maple, Ash, Dogwood. Alternate leaves (one per node, alternating sides) = Oak, Birch, Cherry, Elm. This single observation eliminates over half of all species instantly.', examples: 'Opposite: Maple, Ash, Dogwood | Alternate: Oak, Birch, Elm, Cherry, Walnut' },
  { step: '05', title: 'Leaf Texture & Surface', icon: '👆', description: 'Touch the leaf surface. Is it smooth and glossy, rough like sandpaper (Elm), soft and downy (Mullein), or waxy? Check both sides — many species have pale or hairy undersides while the top is smooth and dark green. Leaf texture helps distinguish between species with similar shapes.', examples: 'Glossy: Magnolia, Holly | Rough: Elm, Hackberry | Hairy underside: Silver Maple, Basswood' },
  { step: '06', title: 'Venation Pattern', icon: '🕸️', description: 'Hold the leaf up to light and observe the vein pattern. Pinnate venation (one main midrib with side veins branching off) is most common. Palmate venation (multiple main veins from leaf base like fingers) occurs in Maple, Sweetgum, and Sycamore. Parallel venation (veins running parallel) occurs in some tropical species.', examples: 'Pinnate: Oak, Cherry, Birch | Palmate: Maple, Sweetgum | Parallel: Ginkgo (fan-shaped)' },
];

const leafShapes = [
  { shape: 'Lobed', icon: '🍁', trees: 'Oak, Maple, Sweetgum, Tulip Poplar, Sycamore', tip: 'Check if lobes are rounded (Oak White group) or pointed with bristle tips (Oak Red group)' },
  { shape: 'Oval / Elliptical', icon: '🥚', trees: 'Dogwood, Magnolia, Cherry, Apple, Hornbeam', tip: 'Check margin — smooth means Magnolia or Dogwood, toothed means Cherry or Birch' },
  { shape: 'Lance-shaped', icon: '🗡️', trees: 'Willow, Black Cherry, Peach, Privet', tip: 'Long and narrow — Willow is the most extreme (10:1 length to width ratio)' },
  { shape: 'Heart-shaped', icon: '❤️', trees: 'Redbud, Catalpa, Basswood, Paulownia', tip: 'Redbud has perfectly heart-shaped leaves — very distinctive and easy to recognize' },
  { shape: 'Triangular', icon: '🔺', trees: 'Cottonwood, Aspen, Birch', tip: 'Cottonwood and Aspen have flattened stalks that cause leaves to tremble in wind' },
  { shape: 'Compound Pinnate', icon: '🌿', trees: 'Ash, Black Walnut, Hickory, Elderberry', tip: 'Count leaflets — Ash has 5-11, Walnut has 15-23, Hickory has 5-9' },
];

export default function IdentifyTreeByLeaves() {
  return (
    <Layout
      meta={{
        title: 'How to Identify a Tree by Its Leaves — Complete Visual Guide | Tree Identifier Blog',
        description: 'Learn how to identify any tree by its leaves using shape, margin, arrangement, and texture. Complete visual guide with 6 identification steps, 20+ tree examples, FAQs, and free AI leaf identifier tool.',
        canonical: 'https://treeidentifier.online/blog/identify-tree-by-leaves',
        schema,
      }}
      breadcrumbs={[{ label: 'Blog', href: '/blog' }, { label: 'How to Identify a Tree by Its Leaves' }]}
    >
      {/* HERO */}
      <section style={{
        background: `linear-gradient(180deg, rgba(5,5,5,0.70) 0%, var(--black) 100%), url('leaves1.jpg') center/cover no-repeat`,
        padding: '120px 2rem 5rem',
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            <span style={{ background: 'rgba(64,192,116,0.1)', color: 'var(--bright-green)', border: '1px solid rgba(64,192,116,0.2)', borderRadius: '50px', padding: '4px 14px', fontSize: '0.78rem', fontWeight: 600 }}>Leaf Identification</span>
            <span style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>📅 July 22, 2026</span>
            <span style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>⏱ 12 min read</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: 'var(--white)', lineHeight: 1.15, marginBottom: '1.5rem' }}>
            How to Identify a Tree<br />by Its Leaves
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.8 }}>
            Leaves are the single most useful tree identification feature — diverse, detailed, and present for most of the year. Master these 6 steps and you can identify almost any tree you encounter.
          </p>
          <div style={{ marginTop: '2rem' }}>
            <Link href="/identify-tree-by-leaf" className="btn-primary" style={{ fontSize: '0.95rem', padding: '12px 28px' }}>
              🍃 Try Free Leaf Identifier →
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem', display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '4rem', alignItems: 'start' }}>
          <article className="prose-content" style={{ maxWidth: '100%' }}>

            <h2>Why Leaves Are the Best Tree Identification Feature</h2>
            <p>Of all the features available for tree identification — bark, fruit, flowers, silhouette — leaves provide the most information per observation. A single leaf tells you about the species' evolutionary history, ecological adaptations, and genus relationships. Unlike bark, which changes dramatically with age, or fruit, which is only present seasonally, leaves are present from spring through autumn and remain relatively consistent in appearance throughout a tree's life.</p>
            <p>The diversity of leaf forms across tree species is remarkable. Leaves range from the enormous 60cm blades of young Paulownia to the tiny 1cm needles of Hemlock. They come in every conceivable shape — star-shaped Sweetgum, mitten-shaped Sassafras, perfectly heart-shaped Redbud, fan-shaped Ginkgo. This diversity makes leaves highly distinctive identifiers once you know what features to look for. Our <Link href="/identify-tree-by-leaf">AI Leaf Identifier</Link> can identify trees instantly from a leaf photo — but understanding the underlying features makes you a better, faster identifier with or without AI assistance.</p>

            {/* IMAGE 1 */}
            <div style={{ margin: '2rem 0', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--card-border)' }}>
              <img
                src="leaves1.jpg"
                alt="Various tree leaves showing different shapes and colors for identification"
                style={{ width: '100%', height: '300px', objectFit: 'cover' }}
              />
              <div style={{ background: 'var(--card-bg)', padding: '0.8rem 1.2rem' }}>
                <p style={{ color: 'var(--gray-mid)', fontSize: '0.82rem', margin: 0 }}>🍃 Tree leaves show remarkable diversity in shape, color, and texture — each feature helps narrow down the species.</p>
              </div>
            </div>

            <h2>The 6-Step Leaf Identification Method</h2>
            <p>Professional botanists and arborists use a systematic approach when identifying trees by leaf. Following these six steps in order ensures you observe the most diagnostic features first and avoid misidentification. Each step eliminates a large portion of possible species, narrowing your identification progressively until only one or a few candidates remain.</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', margin: '1.5rem 0' }}>
              {leafFeatures.map((f) => (
                <div key={f.step} style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '14px', padding: '1.5rem', display: 'flex', gap: '1.2rem' }}>
                  <div style={{ width: '48px', height: '48px', minWidth: '48px', background: 'linear-gradient(135deg, var(--forest-green), var(--mid-green))', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 800, fontSize: '0.9rem', flexShrink: 0 }}>{f.step}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
                      <span style={{ fontSize: '1.1rem' }}>{f.icon}</span>
                      <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 700, color: 'var(--white)', margin: 0 }}>{f.title}</h3>
                    </div>
                    <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: '0.88rem', lineHeight: 1.7, marginBottom: '0.6rem' }}>{f.description}</p>
                    <div style={{ background: 'rgba(64,192,116,0.06)', border: '1px solid rgba(64,192,116,0.15)', borderRadius: '8px', padding: '0.5rem 0.9rem', fontSize: '0.8rem', color: 'var(--bright-green)' }}>
                      📌 {f.examples}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* IMAGE 2 */}
            <div style={{ margin: '2rem 0', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--card-border)' }}>
              <img
                src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=900&q=80"
                alt="Close up of tree leaves showing venation patterns and leaf margin details"
                style={{ width: '100%', height: '280px', objectFit: 'cover' }}
              />
              <div style={{ background: 'var(--card-bg)', padding: '0.8rem 1.2rem' }}>
                <p style={{ color: 'var(--gray-mid)', fontSize: '0.82rem', margin: 0 }}>🔍 Leaf venation and margin details are highly distinctive — hold the leaf up to light to see vein patterns clearly.</p>
              </div>
            </div>

            <h2>Common Leaf Shapes and the Trees They Belong To</h2>
            <p>Leaf shape is often the first feature that catches your eye when you pick up an unknown leaf. The following guide covers the six most common leaf shape categories with the tree species most likely to be found in each group.</p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', margin: '1.5rem 0' }}>
              {leafShapes.map((item, i) => (
                <div key={i} style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '12px', padding: '1.2rem' }}>
                  <div style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>{item.icon}</div>
                  <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', fontWeight: 700, color: 'var(--white)', marginBottom: '0.3rem' }}>{item.shape}</h3>
                  <p style={{ color: 'var(--bright-green)', fontSize: '0.78rem', fontWeight: 600, marginBottom: '0.5rem' }}>{item.trees}</p>
                  <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.82rem', lineHeight: 1.6, margin: 0 }}>{item.tip}</p>
                </div>
              ))}
            </div>

            {/* IMAGE 3 */}
            <div style={{ margin: '2rem 0', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--card-border)' }}>
              <img
                src="https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=900&q=80"
                alt="Maple and oak leaves side by side showing lobed leaf shape differences"
                style={{ width: '100%', height: '280px', objectFit: 'cover' }}
              />
              <div style={{ background: 'var(--card-bg)', padding: '0.8rem 1.2rem' }}>
                <p style={{ color: 'var(--gray-mid)', fontSize: '0.82rem', margin: 0 }}>🍁 Lobed leaves like maple and oak are among the most recognizable — lobe shape and arrangement distinguish between species.</p>
              </div>
            </div>

            <h2>Simple vs Compound Leaves — The Most Important First Step</h2>
            <p>The single most important initial observation when identifying a tree by its leaves is determining whether the leaves are simple or compound. This distinction immediately divides all trees into two large groups and eliminates roughly half of all possible species from consideration.</p>
            <p>A <strong>simple leaf</strong> consists of a single undivided blade attached to the twig by a stalk called a petiole. The blade may be lobed (like an oak or maple leaf) or unlobed (like a cherry or magnolia leaf), but it is always a single connected structure. Simple leaves are found on oaks, maples, birches, cherries, elms, dogwoods, and the vast majority of common North American trees.</p>
            <p>A <strong>compound leaf</strong> is divided into multiple separate leaflets, all attached to a single main stalk (the rachis). The individual leaflets look like small leaves but are not — they have no bud at their base. Compound leaves are found on ash (pinnately compound with 5-11 leaflets along a central stalk), black walnut (pinnately compound with 15-23 leaflets), horse chestnut (palmately compound with 5-7 leaflets radiating from one point like fingers), and hickory (pinnately compound with 5-9 leaflets).</p>
            <p>The foolproof way to distinguish simple from compound leaves is to look for buds. Buds grow only at the point where leaves attach to the twig — never at the base of individual leaflets. If you see a bud at the base of the stalk, you have a simple leaf. If there is no bud, the structure is a leaflet, part of a larger compound leaf.</p>

            <h2>Seasonal Changes in Leaf Appearance</h2>
            <p>Tree leaves change dramatically through the seasons, and understanding these changes helps you identify trees accurately throughout the year. Spring leaves are often smaller, lighter green, and sometimes slightly different in shape than mature summer leaves. Some species have distinctively colored new growth — Red Maple new leaves are red-tinged, and many oaks produce bronze or copper-colored emerging leaves in spring.</p>
            <p>Summer leaves represent the mature form used in most identification guides. Full size, dark green, and with all characteristic features fully developed, summer leaves are the easiest to use for identification. Autumn leaves undergo dramatic color changes, often making species more visible but sometimes making shape identification harder if the leaf is curling or damaged.</p>

            {/* IMAGE 4 */}
            <div style={{ margin: '2rem 0', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--card-border)' }}>
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&q=80"
                alt="Tree leaves in autumn showing seasonal color changes for identification"
                style={{ width: '100%', height: '280px', objectFit: 'cover' }}
              />
              <div style={{ background: 'var(--card-bg)', padding: '0.8rem 1.2rem' }}>
                <p style={{ color: 'var(--gray-mid)', fontSize: '0.82rem', margin: 0 }}>🍂 Autumn leaf color can aid identification — Scarlet Oak turns brilliant red, Sugar Maple turns orange-yellow, and Sweetgum shows multiple colors on one tree.</p>
              </div>
            </div>

            <h2>How to Take a Good Leaf Photo for AI Identification</h2>
            <p>When using our <Link href="/identify-tree-by-leaf">AI Leaf Identifier</Link>, photo quality significantly affects identification accuracy. Follow these simple guidelines for best results. Photograph a single, undamaged, fully mature leaf. Avoid photographing young spring leaves or damaged, insect-eaten leaves, as these may not show all characteristic features.</p>
            <p>Place the leaf on a plain contrasting background — white paper, a dark surface, or your palm all work well. Natural light is best; avoid flash which creates harsh shadows and washes out color. Photograph both the top and bottom of the leaf when possible — many species are identified by underside features (pale color, hairiness, midrib color). Ensure the full leaf blade is visible and in focus, with no parts cut off at the edges.</p>
            <p>For compound leaves, photograph the entire leaf including all leaflets attached to the main stalk — the overall compound leaf structure is as important as individual leaflet shape. For best results, also photograph a small section of the twig showing the leaf attachment point and any buds present.</p>

            <h2>Frequently Asked Questions — Tree Leaf Identification</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', margin: '1.5rem 0' }}>
              {[
                { q: 'How do I identify a tree by its leaves?', a: 'Observe six features in order: simple or compound, leaf shape, leaf margin, leaf arrangement (opposite or alternate), surface texture, and venation pattern. Combining these features narrows identification quickly. Upload a photo to our AI Leaf Identifier for instant results.' },
                { q: 'What is the difference between simple and compound leaves?', a: 'Simple leaves have one undivided blade. Compound leaves are divided into multiple leaflets on a shared stalk. The key test: buds grow only where leaves attach to twigs, never where leaflets attach to the leaf stalk.' },
                { q: 'What trees have lobed leaves?', a: 'Common lobed-leaf trees include Oak (deeply lobed), Maple (opposite 3-5 lobed), Sweetgum (star-shaped 5-7 lobed), Tulip Poplar (4-lobed flat-topped), and Sycamore (large 3-5 lobed).' },
                { q: 'How do opposite and alternate leaves help identify trees?', a: 'Opposite leaves (two per node) = Maple, Ash, Dogwood family only. Alternate leaves (one per node) = all other trees including Oak, Birch, Cherry, Elm. This single feature eliminates over half of all species instantly.' },
                { q: 'What trees have heart-shaped leaves?', a: 'Eastern Redbud (classic heart-shape), Catalpa (very large heart), Basswood (heart with toothed margin), and Paulownia (enormous heart on young growth).' },
                { q: 'How do leaf margins help identify trees?', a: 'Smooth margins = Magnolia, Dogwood. Serrated = Cherry, Birch. Doubly serrated = Elm, Hornbeam. Lobed = Oak, Maple. Margin type combined with shape narrows identification significantly.' },
                { q: 'What is the best app to identify trees by leaves?', a: 'Our free AI Leaf Identifier at treeidentifier.online is specifically optimized for tree leaf identification. Upload a clear photo and get instant species identification — free, no signup required.' },
              ].map((faq, i) => (
                <div key={i} style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '12px', padding: '1.4rem' }}>
                  <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', fontWeight: 700, color: 'var(--white)', marginBottom: '0.6rem' }}>{faq.q}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.88rem', lineHeight: 1.7, margin: 0 }}>{faq.a}</p>
                </div>
              ))}
            </div>

            <h2>Use AI to Identify Any Tree by Leaf Instantly</h2>
            <p>Our free <Link href="/identify-tree-by-leaf">AI Leaf Identifier</Link> puts the power of professional botanical identification in your pocket. Upload any leaf photo and receive instant species identification with confidence level and the key features that confirm the identification. The AI has been trained on all common North American and European tree species and handles partial leaves, autumn coloration, and young spring leaves accurately.</p>
            <p>For full tree identification from any feature — bark, silhouette, fruit, or whole tree photos — use our <Link href="/tree-identifier">AI Tree Identifier</Link>. For species-specific guides, see our dedicated pages: <Link href="/oak-tree-identifier">Oak Tree Identifier</Link>, <Link href="/maple-tree-identifier">Maple Tree Identifier</Link>, <Link href="/birch-tree-identifier">Birch Tree Identifier</Link>, and <Link href="/pine-tree-identifier">Pine Tree Identifier</Link>.</p>
            <p>For more identification guides, read our <Link href="/blog/oak-tree-identification-guide">Oak Tree Identification Guide</Link>, <Link href="/blog/tree-identification-by-bark">Tree Identification by Bark</Link>, <Link href="/blog/how-to-identify-trees-in-winter">How to Identify Trees in Winter</Link>, and <Link href="/blog/common-tree-species">25 Most Common Tree Species</Link>.</p>

          </article>

          <aside style={{ position: 'sticky', top: '90px' }}>
            <div className="card" style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 700, color: 'var(--bright-green)', marginBottom: '1.2rem' }}>🍃 Identify by Leaf Now</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <Link href="/identify-tree-by-leaf" className="btn-primary" style={{ textAlign: 'center', justifyContent: 'center', fontSize: '0.88rem', padding: '10px 16px' }}>🍃 Leaf Identifier</Link>
                <Link href="/tree-identifier" className="btn-outline" style={{ textAlign: 'center', justifyContent: 'center', fontSize: '0.88rem', padding: '10px 16px' }}>🌳 Tree Identifier</Link>
              </div>
            </div>
            <div className="card" style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 700, color: 'var(--white)', marginBottom: '1rem' }}>🍃 Leaf ID Quick Tips</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                <li style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>✅ Opposite leaves = Maple/Ash/Dogwood</li>
                <li style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>✅ Lobed + rounded = White Oak group</li>
                <li style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>✅ Lobed + bristle tips = Red Oak group</li>
                <li style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>✅ Heart-shaped = Redbud or Catalpa</li>
                <li style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>✅ Narrow lance = Willow</li>
                <li style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>✅ Star-shaped = Sweetgum</li>
                <li style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>✅ Compound leaflets = Ash or Walnut</li>
              </ul>
            </div>
            <div className="card" style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 700, color: 'var(--white)', marginBottom: '1rem' }}>🌳 Species Identifiers</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <li><Link href="/oak-tree-identifier" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🌰 Oak Tree Identifier</Link></li>
                <li><Link href="/maple-tree-identifier" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🍁 Maple Tree Identifier</Link></li>
                <li><Link href="/pine-tree-identifier" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🌲 Pine Tree Identifier</Link></li>
                <li><Link href="/palm-tree-identifier" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🌴 Palm Tree Identifier</Link></li>
                <li><Link href="/birch-tree-identifier" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🪵 Birch Tree Identifier</Link></li>
              </ul>
            </div>
            <div className="card">
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 700, color: 'var(--white)', marginBottom: '1rem' }}>📝 More Articles</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <li><Link href="/blog/oak-tree-identification-guide" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🌰 Oak ID Guide</Link></li>
                <li><Link href="/blog/tree-identification-by-bark" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🪵 Tree ID by Bark</Link></li>
                <li><Link href="/blog/how-to-identify-trees-in-winter" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>❄️ Winter Tree ID</Link></li>
                <li><Link href="/blog/common-tree-species" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>25 Common Tree Species</Link></li>
                <li><Link href="/blog/how-to-identify-trees" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>How to Identify Trees</Link></li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section style={{ padding: '4rem 2rem', background: 'var(--deep-black)', borderTop: '1px solid var(--card-border)', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', color: 'var(--white)', marginBottom: '1rem' }}>Identify Any Tree by Leaf — Free & Instant</h2>
        <p style={{ color: 'var(--gray-mid)', marginBottom: '2rem' }}>Upload a leaf photo — our AI identifies the species in seconds. No signup required.</p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/identify-tree-by-leaf" className="btn-primary">🍃 Try Leaf Identifier Free</Link>
          <Link href="/blog" className="btn-outline">📝 More Articles</Link>
        </div>
      </section>
    </Layout>
  );
}
