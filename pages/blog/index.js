import Layout from '../../components/Layout';
import Link from 'next/link';

const schema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Tree Identifier Blog", 
  "url": "https://treeidentifier.online/blog",
  "description": "Expert guides on tree identification, botanical knowledge, and nature education.",
};

const posts = [
  {
    slug: 'how-to-identify-trees',
    title: 'How to Identify Trees — The Complete Beginner\'s Guide',
    excerpt: 'Learn how to identify any tree using leaves, bark, fruit, and form. A complete step-by-step guide for beginners and nature enthusiasts covering all identification methods.',
    date: 'June 10, 2025',
    readTime: '8 min read',
    category: 'Tree Identification',
    image: 'identifytree.jpg',
    keywords: ['how to identify trees', 'tree identification guide', 'identify trees by leaves'],
  },
  {
  slug: 'hickory-tree-identification',
  title: 'Hickory Tree Identification — Shagbark Hickory, Bitternut, Pignut & Complete Guide',
  excerpt: 'Complete hickory tree identification guide covering shagbark hickory (Carya ovata), bitternut hickory (Carya cordiformis), pignut hickory, mockernut hickory, hickory leaves, bark, nuts, and wood.',
  date: 'August 24, 2026',
  readTime: '12 min read',
  category: 'Tree Identification',
  image: 'hickory-tree.jpg',
  keywords: ['hickory tree identification', 'hickory tree', 'types of hickory trees', 'black hickory'],
},
  {
  slug: 'trees-with-white-bark',
  title: 'Trees With White Bark — Paper Birch, Sycamore, Aspen & Complete Identification Guide',
  excerpt: 'Complete guide to trees with white bark including Paper Birch (Betula papyrifera), white birch, Sycamore, Aspen, and all white barked trees. Covers peeling bark, smooth bark, bark identification, and types of tree bark.',
  date: 'August 27, 2026',
  readTime: '14 min read',
  category: 'Tree Guide',
  image: 'trees-with-white-bark.jpg',
  keywords: ['trees-with-white-bark', 'white bark tree', 'paper birch', 'betula papyrifera', 'white birch'],
},
  {
  slug: 'trees-with-white-flowers',
  title: 'Trees With White Flowers — ID Guide & Best Species',
  excerpt: 'Discover the most beautiful trees with white flowers and learn how to identify them by bloom shape, leaf type, and season. Complete guide covering dogwood, cherry, magnolia, and more white flowering tree species.',
  date: 'August 25, 2026',
  readTime: '8 min read',
  category: 'Tree Identification',
  image: 'trees-with-white-flowers.jpg',
  keywords: ['trees with white flowers', 'white flowering trees', 'white flower tree identification', 'dogwood tree', 'white magnolia tree'],
},
  {
  slug: 'walnut-tree-identification',
  title: 'Walnut Tree Identification — Walnut Tree Leaves, Black Walnut',
  excerpt: 'Complete guide to walnut tree identification covering Black Walnut and English Walnut species. Learn to identify walnut trees by their large compound leaves, deeply furrowed bark, and round green husked nuts.',
  date: 'August 26, 2026',
  readTime: '9 min read',
  category: 'Tree Identification',
  image: 'walnut-tree-identification.jpg',
  keywords: ['walnut tree identification', 'black walnut tree', 'walnut tree leaves', 'english walnut tree', 'walnut tree bark', 'black walnut identification'],
},
  {
  slug: 'pine-tree-identification',
  title: 'Pine Tree Identification — White Pine, Eastern White Pine, Types of Pine Trees & Complete Guide',
  excerpt: 'Complete guide to pine tree identification covering all major pine species. Learn to identify pine trees by needle count, cone shape, bark texture, and size. Covers Eastern White Pine, Ponderosa, Scots Pine, and more.',
  date: 'August 26, 2026',
  readTime: '10 min read',
  category: 'Tree Identification',
  image: 'pine-tree-identification.jpg',
  keywords: ['pine tree identification', 'types of pine trees', 'identify pine tree by needles', 'pine cone identification', 'eastern white pine', 'ponderosa pine identification'],
},
  {
  slug: 'alder-tree-identification',
  title: 'Alder Tree Identification — Complete Guide to Species, Leaves & Uses',
  excerpt: 'Learn how to identify alder trees by their distinctive catkins, dark bark, and toothed leaves. Complete guide covering common alder species, habitat, uses, and ecological importance.',
  date: 'August 22, 2026',
  readTime: '8 min read',
  category: 'Tree Identification',
  image: 'alder-tree.jpg',
  keywords: ['alder tree identification', 'alder tree', 'types of alder trees', 'black alder', 'red alder tree'],
},
  {
  slug: 'fast-growing-trees',
  title: 'Fast Growing Trees — Best Species for Privacy, Shade & Landscaping',
  excerpt: 'Discover the fastest growing trees for your garden, yard, or landscape. Complete guide covering best fast growing trees for privacy, shade, and screening with growth rates, care tips, and species recommendations.',
  date: 'August 25, 2026',
  readTime: '9 min read',
  category: 'Tree Guide',
  image: 'fast-growing-trees.jpg',
  keywords: ['fast growing trees', 'fastest growing trees', 'fast growing trees for privacy', 'fast growing shade trees', 'fast growing trees for landscaping'],
},
  {
  slug: 'linden-tree-identification',
  title: 'Linden Tree Identification — Complete Guide to Species, Flowers & Uses',
  excerpt: 'Learn how to identify linden trees by their heart-shaped leaves, fragrant flowers, and distinctive bracts. Complete guide covering common linden species, habitat, medicinal uses, and ecological importance.',
  date: 'August 22, 2026',
  readTime: '8 min read',
  category: 'Tree Identification',
  image: 'linden-tree.jpg',
  keywords: ['linden tree identification', 'linden tree', 'types of linden trees', 'american linden', 'basswood tree identification'],
},
  {
  slug: 'poplar-tree',
  title: 'Poplar Tree Guide — Types of Poplar Trees, Identification, and Growing Tips',
  excerpt: 'Complete guide to poplar trees covering all major types including Lombardy, Eastern Cottonwood, and White Poplar. Learn how to identify poplar trees by leaves, bark, and shape plus expert growing tips.',
  date: 'August 20, 2026',
  readTime: '9 min read',
  category: 'Tree Identification',
  image: 'poplar-tree.jpg',
  keywords: ['poplar tree', 'types of poplar trees', 'poplar tree identification', 'lombardy poplar', 'poplar tree growing tips'],
},
  {
  slug: 'mulberry-tree-identification',
  title: 'Mulberry Tree Identification — White Mulberry, Red Mulberry, Black Mulberry & Complete Guide',
  excerpt: 'Complete mulberry tree identification guide covering White, Red, Black and Pakistan Mulberry, including leaves, bark, berries, tree characteristics, uses, care, and common problems.',
  date: 'August 21, 2026',
  readTime: '15 min read',
  category: 'Tree Identification',
  image: 'mulberry-tree.jpg',
  keywords: [
    'mulberry tree',
    'mulberry tree identification',
    'white mulberry tree',
    'red mulberry tree',
    'black mulberry tree',
    'pakistan mulberry',
    'mulberry tree leaves',
    'mulberry berries',
    'mulberry tree care',
    'mulberry tree disease'
  ],

},
  {
  slug: 'maple-tree-identification-guide',
  title: 'Maple Tree Identification Guide — Leaf, Bark & Seed',
  excerpt: 'Complete maple tree identification guide covering Sugar Maple, Red Maple, Silver Maple and 5 more species. Learn to identify maple trees by leaf shape, sinus depth, bark, and helicopter seeds.',
  date: 'July 29, 2026',
  readTime: '14 min read',
  category: 'Maple Identification',
  image: 'maple.jpg',
  keywords: ['maple tree identification', 'how to identify maple trees', 'maple tree identifier'],
},
  {
  slug: 'identify-tree-by-leaves',
  title: 'How to Identify a Tree by Its Leaves — Complete Visual Guide',
  excerpt: 'Learn how to identify any tree by its leaves using shape, margin, arrangement, and texture. 6-step visual guide with 20+ tree examples and free AI leaf identifier.',
  date: 'July 28, 2026',
  readTime: '12 min read',
  category: 'Leaf Identification',
  image: 'leavess.jpg',
  keywords: ['identify tree by leaves', 'tree leaf identification', 'how to identify tree by leaf'],
},
  {
  slug: 'beech-tree',
  title: 'Beech Tree Complete Guide — American Beech, European Beech, Beech Nuts & Disease',
  excerpt: 'Complete guide to beech trees covering American and European beech species, how to identify beech trees by leaves, bark and beech nuts, plus common diseases and care tips.',
  date: 'August 20, 2026',
  readTime: '10 min read',
  category: 'Tree Identification',
  image: 'beech-tree.jpg',
  keywords: ['beech tree', 'american beech tree', 'european beech tree', 'beech nuts', 'beech tree disease'],
},
  {
  slug: 'willow-tree',
  title: 'Willow Tree — Complete Identification & Species Guide',
  excerpt: 'Learn how to identify willow trees by their distinctive narrow leaves, drooping branches, and gray-brown bark. A complete guide covering all major willow species, habitat, uses, and care tips.',
  date: 'August 19, 2026',
  readTime: '8 min read',
  category: 'Tree Identification',
  image: 'willow-tree.jpg',
  keywords: ['willow tree', 'willow tree identification', 'types of willow trees', 'weeping willow tree'],
},
  {
  slug: 'trees-with-heart-shaped-leaves',
  title: 'Trees With Heart Shaped Leaves — Complete Identification Guide',
  excerpt: 'Discover the most common trees with heart shaped leaves and learn how to identify them by leaf shape, bark, fruit, and size. A complete visual guide for nature lovers and gardeners.',
  date: 'August 18, 2026',
  readTime: '9 min read',
  category: 'Tree Identification',
  image: 'heart-shaped-leaves.jpg',
  keywords: ['trees with heart shaped leaves', 'heart shaped leaf tree identification', 'identify trees by leaf shape'],
},
  {
  slug: 'poisonous-trees',
  title: 'Poisonous Trees to Avoid — Complete Safety & Identification Guide',
  excerpt: 'Discover the most dangerous poisonous trees and how to identify them safely. A complete guide covering toxic species, warning signs, symptoms, and safety tips for hikers, parents, and nature lovers.',
  date: 'July 25, 2026',
  readTime: '9 min read',
  category: 'Tree Safety',
  image: 'poisonoustrees.jpg',
  keywords: ['poisonous trees', 'toxic trees identification', 'dangerous trees to avoid', 'poisonous tree safety guide'],
},
  {
    slug: 'common-tree-species',
    title: '25 Most Common Tree Species in North America — Full Identification Guide',
    excerpt: 'A complete visual guide to the 25 most common tree species found across North America, with identification tips for leaves, bark, fruit, and seasonal features.',
    date: 'May 28, 2025',
    readTime: '12 min read',
    category: 'Tree Species',
    image: '/commontree.jpg',
    keywords: ['common tree species', 'North America trees', 'tree species guide'],
  },
  {
  slug: 'oak-tree-identification-guide',
  title: 'Oak Tree Identification Guide — Leaf, Bark & Acorn',
  excerpt: 'Complete oak tree identification guide covering 10 major oak species. Learn to identify oak trees by leaf shape, bark texture, and acorn type. Includes White Oak vs Red Oak comparison.',
  date: 'July 19, 2026',
  readTime: '16 min read',
  category: 'Oak Identification',
  image: 'oaktree.jpg',
  keywords: ['oak tree identification', 'how to identify oak trees', 'oak tree identifier'],
},
  { 
  slug: 'tree-identification-by-bark',
  title: 'Tree Identification by Bark — Complete Visual Guide',
  description: 'Learn how to identify trees by their bark year-round...',
  date: 'July 18, 2026',
  readTime: '14 min read',
  image: '/bark.jpg',
  category: 'Bark Identification'
  },
  {
  slug: 'how-to-identify-trees-in-winter',
  title: 'How to Identify Trees in Winter — Complete Bare Tree Guide',
  excerpt: 'Learn how to identify trees in winter without leaves using bark, silhouette, buds, and persistent fruits. Includes 10 easy winter trees and AI identification tips that work year-round.',
  date: 'July 18, 2026',
  readTime: '15 min read',
  category: 'Winter Tree ID',
  image: 'winter.jpg',
  keywords: ['how to identify trees in winter', 'winter tree identification', 'identify trees without leaves'],
},
  {
    slug: 'tree-identification-by-leaf',
    title: 'Tree Identification by Leaf — Expert Guide to Leaf Morphology',
    excerpt: 'Master tree identification using leaf characteristics. Learn leaf shape, margin, venation, texture, and arrangement — the six key features botanists use to identify any tree species.',
    date: 'May 15, 2025',
    readTime: '10 min read',
    category: 'Leaf Identification',
    image: '/leaves.jpg',
    keywords: ['tree identification by leaf', 'leaf morphology', 'identify trees by leaves'],
  },
];

export default function BlogIndex() {
  return (
    <Layout
      meta={{
        title: 'Tree Identification Blog — Expert Guides & Tips | Tree Identifier',
        description: 'Read expert guides on tree identification, leaf morphology, common tree species, and botanical knowledge. Free educational content from Tree Identifier\'s botanical experts.',
        canonical: 'https://treeidentifier.online/blog',
        schema,
      }}
      breadcrumbs={[{ label: 'Blog' }]}
    >
      {/* HERO */}
      <section style={{
        paddingTop: '70px',

background: `linear-gradient(180deg, rgba(5,5,5,0.7) 0%, rgba(5,5,5,0.9) 100%), url('/tree.jpg') center/cover no-repeat`,        borderBottom: '1px solid var(--card-border)',
        padding: '100px 2rem 4rem',
        textAlign: 'center'
      }}>
        <span className="green-tag">📝 Expert Knowledge</span>
        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: 'var(--white)', margin: '1rem 0' }}>
          Tree Identification Blog
        </h1>
        <p style={{ color: 'var(--gray-mid)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto', lineHeight: 1.8 }}>
          Expert guides on tree identification, leaf morphology, species profiles, and botanical knowledge — written by professional arborists and botanists.
        </p>
      </section>

      {/* BLOG POSTS */}
      <section className="section">
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>

          {/* FEATURED POST */}
          <div style={{ marginBottom: '4rem' }}>
            <p style={{ color: 'var(--bright-green)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '1.5rem' }}>Featured Article</p>
           <div style={{
  background: 'var(--card-bg)',
  border: '1px solid var(--card-border)',
  borderRadius: '20px',
  overflow: 'hidden',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  minHeight: '420px',          
  alignItems: 'stretch',
  minHeight: '400px',
}}>
              <img
                src={posts[0].image}
                alt={posts[0].title}
                style={{ width: '100%', height: '100%', minHeight: '400px', objectFit: 'cover', objectPosition: 'center' }}
              />
              <div style={{ padding: '3rem' }}>
                <span style={{ background: 'rgba(64,192,116,0.1)', color: 'var(--bright-green)', border: '1px solid rgba(64,192,116,0.2)', borderRadius: '50px', padding: '4px 14px', fontSize: '0.78rem', fontWeight: 600 }}>
                  {posts[0].category}
                </span>
                <h2 style={{ fontSize: '1.8rem', color: 'var(--white)', margin: '1rem 0', lineHeight: 1.2 }}>
                  {posts[0].title}
                </h2>
                <p style={{ color: 'var(--gray-mid)', lineHeight: 1.7, marginBottom: '1.5rem', fontSize: '0.95rem' }}>{posts[0].excerpt}</p>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <span style={{ color: 'var(--gray-mid)', fontSize: '0.82rem' }}>📅 {posts[0].date}</span>
                  <span style={{ color: 'var(--gray-mid)', fontSize: '0.82rem' }}>⏱ {posts[0].readTime}</span>
                </div>
                <Link href={`/blog/${posts[0].slug}`} className="btn-primary" style={{ fontSize: '0.9rem', padding: '12px 24px' }}>
                  Read Article →
                </Link>
              </div>
            </div>
          </div>

          {/* OTHER POSTS */}
          <div>
            <p style={{ color: 'var(--bright-green)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '1.5rem' }}>More Articles</p>
            <div className="grid-2">
              {posts.slice(1).map((post, i) => (
                <Link href={`/blog/${post.slug}`} key={i} style={{ textDecoration: 'none' }}>
                  <div style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '16px', overflow: 'hidden', transition: 'all 0.3s', height: '100%' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--mid-green)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--card-border)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                  >
                    <img src={post.image} alt={post.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                    <div style={{ padding: '1.8rem' }}>
                      <span style={{ background: 'rgba(64,192,116,0.1)', color: 'var(--bright-green)', border: '1px solid rgba(64,192,116,0.2)', borderRadius: '50px', padding: '3px 12px', fontSize: '0.75rem', fontWeight: 600 }}>
                        {post.category}
                      </span>
                      <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', color: 'var(--white)', margin: '0.8rem 0', lineHeight: 1.3 }}>{post.title}</h3>
                      <p style={{ color: 'var(--gray-mid)', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '1.2rem' }}>{post.excerpt}</p>
                      <div style={{ display: 'flex', gap: '1rem' }}>
                        <span style={{ color: 'var(--gray-mid)', fontSize: '0.78rem' }}>📅 {post.date}</span>
                        <span style={{ color: 'var(--gray-mid)', fontSize: '0.78rem' }}>⏱ {post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '4rem 2rem', background: 'var(--deep-black)', borderTop: '1px solid var(--card-border)', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', color: 'var(--white)', marginBottom: '1rem' }}>Ready to Identify a Tree?</h2>
        <p style={{ color: 'var(--gray-mid)', marginBottom: '2rem' }}>Put your knowledge to work — use our free AI tree identifier.</p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/tree-identifier" className="btn-primary">🌳 Identify a Tree</Link>
          <Link href="/identify-tree-by-leaf" className="btn-outline">🍃 Identify by Leaf</Link>
        </div>
      </section>
    </Layout>
  );
}
