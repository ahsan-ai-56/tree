import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function Layout({ children, meta = {}, breadcrumbs = [] }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const [blogOpen, setBlogOpen] = useState(false);

  const defaultMeta = {
    title: 'Tree Identifier – AI-Powered Tree & Leaf Identification Tool',
    description: 'Identify any tree instantly with AI. Upload a photo of a leaf, bark, or full tree and get accurate species identification, care tips, and detailed botanical information.',
    canonical: 'https://treeidentifier.online/',
  };

  const m = { ...defaultMeta, ...meta };

  return (
    <>
      <Head>
        <title>{m.title}</title>
        <meta name="description" content={m.description} />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={m.canonical} />
    <meta name="google-site-verification" content="UGrkYJSSXVdju3GVCc34_Ps61b4YNUpEU_WYOKePatU" />
        <meta property="og:title" content={m.title} />
        <meta property="og:description" content={m.description} />
        <meta property="og:url" content={m.canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://treeidentifier.online/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={m.title} />
        <meta name="twitter:description" content={m.description} />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta name="theme-color" content="#1a4a2e" />
        {m.schema && (
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(m.schema) }} />
        )}
      </Head>

      <style>{`
        .dropdown { position: relative; }
        .dropdown-menu {
          display: none;
          position: absolute;
          top: 100%;
          padding-top: 8px;
          left: 50%;
          transform: translateX(-50%);
          background: #0a0a0a;
          border: 1px solid #1f3a28;
          border-radius: 14px;
          padding: 0.8rem;
          min-width: 220px;
          z-index: 999;
          box-shadow: 0 20px 40px rgba(0,0,0,0.6);
        }
        .dropdown:hover .dropdown-menu { display: block; }
        .dropdown-menu a {
          display: block;
          padding: 0.6rem 1rem;
          color: rgba(255,255,255,0.8) !important;
          font-size: 0.88rem !important;
          border-radius: 8px;
          transition: all 0.2s;
        }
        .dropdown-menu a:hover { background: #1a4a2e; color: #40c074 !important; }
        .dropdown > a::after { content: ' ▾'; font-size: 0.7rem; opacity: 0.6; }
        @media(max-width:768px){ .dropdown-menu { position: static; transform: none; display: none; box-shadow: none; border: none; background: rgba(26,74,46,0.2); border-radius: 8px; margin-top: 0.5rem; } .dropdown-menu.open { display: block; } }
      .dropdown:hover .dropdown-menu { display: block; }
.dropdown-menu:hover { display: block; } 
      `}</style>

      <nav className="navbar">
        <Link href="/" className="nav-logo">
          <span className="nav-logo-icon">🌳</span>
          Tree Identifier
        </Link>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link></li>

          <li className="dropdown">
            <Link href="/tree-identifier" onClick={() => setMenuOpen(false)}>Identifiers</Link>
            <div className="dropdown-menu">
              <Link href="/tree-identifier" onClick={() => setMenuOpen(false)}>🌳 Tree Identifier</Link>
              <Link href="/identify-tree-by-leaf" onClick={() => setMenuOpen(false)}>🍃 Leaf Identifier</Link>
              <Link href="/oak-tree-identifier" onClick={() => setMenuOpen(false)}>🌰 Oak Tree Identifier</Link>
              <Link href="/maple-tree-identifier" onClick={() => setMenuOpen(false)}>🍁 Maple Tree Identifier</Link>
              <Link href="/pine-tree-identifier" onClick={() => setMenuOpen(false)}>🌲 Pine Tree Identifier</Link>
              <Link href="/palm-tree-identifier" onClick={() => setMenuOpen(false)}>🌴 Palm Tree Identifier</Link>
              <Link href="/birch-tree-identifier" onClick={() => setMenuOpen(false)}>🪵 Birch Tree Identifier</Link>
            </div>
          </li>

          <li className="dropdown">
            <Link href="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
            <div className="dropdown-menu">
              <Link href="/blog" onClick={() => setMenuOpen(false)}>📝 All Articles</Link>
              <Link href="/blog/how-to-identify-trees" onClick={() => setMenuOpen(false)}>How to Identify Trees</Link>
              <Link href="/blog/common-tree-species" onClick={() => setMenuOpen(false)}>Common Tree Species</Link>
              <Link href="/blog/tree-identification-by-leaf" onClick={() => setMenuOpen(false)}>Tree ID by Leaf Guide</Link>
            </div>
          </li>

          <li><Link href="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          <li>
            <Link href="/tree-identifier" className="nav-cta" onClick={() => setMenuOpen(false)}>
              🔍 Identify Tree
            </Link>
          </li>
        </ul>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </nav>

      {breadcrumbs.length > 0 && (
        <div style={{ background: 'var(--deep-black)', borderBottom: '1px solid var(--card-border)', paddingTop: '70px' }}>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            {breadcrumbs.map((b, i) => (
              <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span>›</span>
                {b.href ? <Link href={b.href}>{b.label}</Link> : <span style={{ color: 'var(--white)' }}>{b.label}</span>}
              </span>
            ))}
          </nav>
        </div>
      )}

      <main>{children}</main>

      <footer className="footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="nav-logo" style={{ display: 'inline-flex', marginBottom: '0' }}>
              <span className="nav-logo-icon">🌳</span>
              Tree Identifier
            </Link>
            <p>The world's most accurate AI-powered tree identification tool. Identify trees, leaves, and plants instantly with cutting-edge artificial intelligence technology.</p>
          </div>

          <div className="footer-col">
            <h4>AI Tools</h4>
            <ul>
              <li><Link href="/tree-identifier">Tree Identifier</Link></li>
              <li><Link href="/identify-tree-by-leaf">Leaf Identifier</Link></li>
              <li><Link href="/oak-tree-identifier">Oak Tree Identifier</Link></li>
              <li><Link href="/maple-tree-identifier">Maple Tree Identifier</Link></li>
              <li><Link href="/pine-tree-identifier">Pine Tree Identifier</Link></li>
              <li><Link href="/palm-tree-identifier">Palm Tree Identifier</Link></li>
              <li><Link href="/birch-tree-identifier">Birch Tree Identifier</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Blog</h4>
            <ul>
              <li><Link href="/blog">All Articles</Link></li>
              <li><Link href="/blog/how-to-identify-trees">How to Identify Trees</Link></li>
              <li><Link href="/blog/common-tree-species">Common Tree Species</Link></li>
              <li><Link href="/blog/tree-identification-by-leaf">Tree ID by Leaf</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/disclaimer">Disclaimer</Link></li>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Tree Identifier. All rights reserved.</p>
          <p style={{ display: 'flex', gap: '1.5rem' }}>
            <Link href="/privacy-policy" style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>Privacy Policy</Link>
            <Link href="/disclaimer" style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>Disclaimer</Link>
            <Link href="/contact" style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>Contact</Link>
          </p>
        </div>
      </footer>
    </>
  );
}
