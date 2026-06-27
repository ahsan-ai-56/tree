import Layout from '../../components/Layout';
import Link from 'next/link';

const schema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Tree Identifier Blog",
  "url": "https://treeidentifier.ai/blog",
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
        canonical: 'https://treeidentifier.ai/blog',
        schema,
      }}
      breadcrumbs={[{ label: 'Blog' }]}
    >
      {/* HERO */}
      <section style={{
        paddingTop: '70px',
        background: 'linear-gradient(180deg, var(--dark-green) 0%, var(--black) 100%)',
        borderBottom: '1px solid var(--card-border)',
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
            }}>
              <img
                src={posts[0].image}
                alt={posts[0].title}
                style={{ width: '100%', height: '100%', minHeight: '300px', objectFit: 'cover' }}
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
