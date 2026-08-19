import Layout from '../../components/Layout';
import Link from 'next/link';

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Beech Tree Complete Guide — American Beech, European Beech, Beech Nuts & Disease",
    "description": "Complete beech tree guide covering American beech, European beech, Fagus grandifolia, Fagus sylvatica, tricolor beech, beech nuts, beech tree disease, beech wood, and beech leaf identification.",
    "image": "/beech-tree.jpg",
    "datePublished": "2026-08-20",
    "dateModified": "2026-08-20",
    "author": { "@type": "Organization", "name": "Tree Identifier" },
    "publisher": { "@type": "Organization", "name": "Tree Identifier", "url": "https://treeidentifier.online/" },
    "mainEntityOfPage": "https://treeidentifier.online/blog/beech-tree",
    "wordCount": "2500",
    "keywords": "beech tree, american beech, beech wood, beech definition, european beech, beech tree disease, beech tree leaves, beech nuts, fagus grandifolia, fagus sylvatica, tricolor beech tree"
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a beech tree?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A beech tree is a large deciduous hardwood tree belonging to the genus Fagus in the family Fagaceae. There are approximately 10-13 species of beech worldwide, native to temperate regions of Europe, Asia, and North America. Beech trees are famous for their smooth silvery-gray bark (the smoothest bark of any common large tree), oval toothed leaves with prominent parallel veins, small triangular beech nuts (mast) enclosed in spiky husks, and spectacular golden-bronze fall color. The most common species are American Beech (Fagus grandifolia) in North America and European Beech (Fagus sylvatica) in Europe."
        }
      },
      {
        "@type": "Question",
        "name": "What is American Beech (Fagus grandifolia)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "American Beech (Fagus grandifolia) is the only native beech species in North America, found throughout eastern North America from Nova Scotia south to Florida and west to Wisconsin and Texas. It is a large tree reaching 20-35 meters tall, immediately recognized by its exceptionally smooth silvery-gray bark — the smoothest bark of any common North American tree. American Beech leaves are oval, 6-12cm long, with coarsely toothed margins and prominent parallel veins running to each tooth. The tree produces small triangular nuts (beechnuts) eaten by wildlife. In winter, American Beech retains its dead copper-bronze leaves — a phenomenon called marcescence."
        }
      },
      {
        "@type": "Question",
        "name": "What is European Beech (Fagus sylvatica)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "European Beech (Fagus sylvatica) is the dominant forest tree of central and western Europe, native from Britain to the Caucasus. It closely resembles American Beech but has slightly smaller leaves (4-9cm) with wavy rather than toothed margins, and produces slightly smaller beechnuts. European Beech forms dense cathedral-like forests with a closed canopy that shades out most understory vegetation. It has given rise to many ornamental cultivars including the purple-leaved Copper Beech, the weeping form, and the tricolor beech (Fagus sylvatica 'Roseomarginata')."
        }
      },
      {
        "@type": "Question",
        "name": "What is beech tree disease — Beech Leaf Disease?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Beech Leaf Disease (BLD) is an emerging disease of beech trees first identified in Ohio in 2012 and now spreading rapidly across eastern North America. It is caused by a nematode (Litylenchus crenatae mccannii) and produces distinctive dark green banding between leaf veins, giving affected leaves a striped appearance when held up to light. Severely infected trees show shriveled, leathery leaves and progressive crown dieback. Beech Leaf Disease is a serious conservation concern for American Beech populations, which are already under pressure from Beech Bark Disease caused by scale insects and fungal pathogens."
        }
      },
      {
        "@type": "Question",
        "name": "What are beech nuts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Beech nuts (also called beechmast or mast) are the small triangular nuts produced by beech trees, enclosed in spiky four-valved husks called cupules. Each husk typically contains 1-3 small (1-1.5cm) triangular nuts. Beech nuts are an important food source for wildlife — consumed by deer, bears, squirrels, wild boar, birds (especially jays and pigeons), and many other species. Beech trees produce heavy mast crops every 2-5 years (mast years), with little production in between. Beech nuts are edible for humans when roasted — they taste mild and slightly sweet — and have historically been used as food and to produce beechnut oil."
        }
      },
      {
        "@type": "Question",
        "name": "What is tricolor beech tree?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tricolor beech (Fagus sylvatica 'Roseomarginata', also sold as 'Purpurea Tricolor') is a striking ornamental cultivar of European Beech with leaves that display three colors simultaneously — dark purple-maroon center, irregular pink to rose-red margin, and white to pale pink edge. This dramatic variegation makes it one of the most eye-catching ornamental trees available. Tricolor beech is slower growing than the species, typically reaching 6-10 meters, and performs best in partial shade — full sun can fade the pink coloration. It is highly sought after by gardeners and landscape designers for its unique multi-colored foliage."
        }
      },
      {
        "@type": "Question",
        "name": "What is beech wood used for?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Beech wood (beechwood) is one of the most valuable and widely used hardwoods in Europe and North America. It is straight-grained, hard, and strong with excellent shock resistance. Common uses include furniture (chairs, tables, bed frames), flooring, tool handles, kitchen utensils (spoons, cutting boards, rolling pins), toys, plywood, and steam-bent wood products. Beech is the preferred wood for making woodworking planes and workbenches. It is also widely used as firewood due to its high heat output, and as smoking wood — beech smoked meats and cheeses are a European tradition."
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
      { "@type": "ListItem", "position": 3, "name": "Beech Tree Complete Guide", "item": "https://treeidentifier.online/blog/beech-tree" }
    ]
  }
];

const beechSpecies = [
  {
    num: 1,
    name: 'American Beech',
    sci: 'Fagus grandifolia',
    icon: '🌳',
    region: 'Eastern North America',
    leaf: 'Oval, 6-12cm, coarsely toothed margin, 9-14 pairs of prominent parallel veins',
    bark: 'Exceptionally smooth silvery-gray — smoothest bark of any large NA tree',
    nut: 'Triangular nuts in spiky 4-valved husks, 1-1.5cm',
    fall: 'Golden-bronze, leaves often persist through winter (marcescence)',
    note: 'Only native North American beech. Famous for retaining dead copper leaves in winter.',
  },
  {
    num: 2,
    name: 'European Beech',
    sci: 'Fagus sylvatica',
    icon: '🌲',
    region: 'Europe (Britain to Caucasus)',
    leaf: 'Oval, 4-9cm, wavy margin (not toothed), 5-9 pairs of veins, silky hairs when young',
    bark: 'Smooth silvery-gray — same distinctive smooth bark as American Beech',
    nut: 'Slightly smaller triangular nuts than American Beech, in spiky husks',
    fall: 'Golden-yellow to copper-orange — spectacular autumn display',
    note: 'Dominant forest tree of central Europe. Forms dense cathedral-like beech forests.',
  },
  {
    num: 3,
    name: 'Copper Beech / Purple Beech',
    sci: 'Fagus sylvatica f. purpurea',
    icon: '🟣',
    region: 'Garden cultivar — worldwide',
    leaf: 'Same shape as European Beech but deep copper-purple to maroon all season',
    bark: 'Smooth gray — same as European Beech',
    nut: 'Same as European Beech',
    fall: 'Turns bronze-purple before dropping',
    note: 'Most popular ornamental beech. Purple-leaved throughout growing season — stunning specimen tree.',
  },
  {
    num: 4,
    name: 'Tricolor Beech',
    sci: "Fagus sylvatica 'Roseomarginata'",
    icon: '🎨',
    region: 'Garden cultivar — worldwide',
    leaf: 'Dark purple center, irregular pink margin, white to pale pink edge — 3 colors simultaneously',
    bark: 'Smooth gray',
    nut: 'Rarely produced in cultivation',
    fall: 'Colors fade — less dramatic than species',
    note: 'Most ornamental beech cultivar. Best color in partial shade — full sun fades pink margins.',
  },
  {
    num: 5,
    name: 'Weeping Beech',
    sci: "Fagus sylvatica 'Pendula'",
    icon: '🌊',
    region: 'Garden cultivar — worldwide',
    leaf: 'Same as European Beech — oval, wavy margin',
    bark: 'Smooth gray',
    nut: 'Produced normally',
    fall: 'Golden-yellow',
    note: 'Dramatic weeping form with pendulous branches — creates a curtain of foliage to the ground.',
  },
  {
    num: 6,
    name: 'Oriental Beech',
    sci: 'Fagus orientalis',
    icon: '🌿',
    region: 'SE Europe & SW Asia',
    leaf: 'Larger than European Beech, 7-12cm, more prominently toothed',
    bark: 'Smooth gray — same family resemblance',
    nut: 'Slightly larger than European Beech',
    fall: 'Yellow to orange-brown',
    note: 'Larger and more vigorous than European Beech. Dominant forest tree of Caucasus region.',
  },
];

const beechWoodUses = [
  { use: 'Furniture', icon: '🪑', desc: 'Chairs, tables, bed frames — beech is the classic European furniture wood, durable and takes stain well.' },
  { use: 'Flooring', icon: '🏠', desc: 'Beech hardwood flooring is prized for durability and attractive grain — common in European homes.' },
  { use: 'Kitchen Tools', icon: '🥄', desc: 'Wooden spoons, cutting boards, rolling pins, bowls — beech is the traditional kitchen utensil wood.' },
  { use: 'Tool Handles', icon: '🔨', desc: 'Hammer handles, chisel handles, woodworking tools — beech resists splitting and shock.' },
  { use: 'Smoking Wood', icon: '💨', desc: 'Beech wood produces mild, slightly sweet smoke used for smoking fish, meats, and cheeses — a European tradition.' },
  { use: 'Firewood', icon: '🔥', desc: 'High heat output, burns slowly and cleanly — beech is considered one of the best European firewoods.' },
];

export default function BeechTreeGuide() {
  return (
    <Layout
      meta={{
        title: 'Beech Tree Complete Guide — American Beech, European Beech, Beech Nuts & Disease | Tree Identifier',
        description: 'Complete beech tree guide covering American beech (Fagus grandifolia), European beech (Fagus sylvatica), tricolor beech, beech nuts, beech tree disease, beech wood uses, and beech leaf identification.',
        canonical: 'https://treeidentifier.online/blog/beech-tree',
        schema,
      }}
      breadcrumbs={[{ label: 'Blog', href: '/blog' }, { label: 'Beech Tree Complete Guide' }]}
    >
      {/* HERO */}
      <section style={{
        background: `linear-gradient(180deg, rgba(5,5,5,0.72) 0%, var(--black) 100%), url('https://images.unsplash.com/photo-1448375240586-882707db888b?w=1600&q=80') center/cover no-repeat`,
        padding: '120px 2rem 5rem',
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            <span style={{ background: 'rgba(64,192,116,0.1)', color: 'var(--bright-green)', border: '1px solid rgba(64,192,116,0.2)', borderRadius: '50px', padding: '4px 14px', fontSize: '0.78rem', fontWeight: 600 }}>Beech Trees</span>
            <span style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>📅 August 20, 2026</span>
            <span style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>⏱ 16 min read</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: 'var(--white)', lineHeight: 1.15, marginBottom: '1.5rem' }}>
            Beech Tree Complete Guide —<br />American Beech, European Beech,<br />Beech Nuts & Disease
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.8 }}>
            Beech trees are among the most majestic and ecologically important trees of the Northern Hemisphere — famous for their silk-smooth silver bark, copper winter leaves, and dense forest canopies. This complete guide covers every aspect of beech trees from identification to disease, wood uses to ornamental cultivars.
          </p>
          <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/tree-identifier" className="btn-primary" style={{ fontSize: '0.95rem', padding: '12px 28px' }}>
              🌳 Identify Your Beech Tree →
            </Link>
            <Link href="/identify-tree-by-leaf" className="btn-outline" style={{ fontSize: '0.95rem', padding: '12px 28px' }}>
              🍃 Leaf Identifier
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem', display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '4rem', alignItems: 'start' }}>
          <article className="prose-content" style={{ maxWidth: '100%' }}>

            <h2>Beech Tree Definition — What Is a Beech Tree?</h2>
            <p>The beech tree definition: a beech tree is any member of the genus <em>Fagus</em> in the family Fagaceae, comprising approximately 10-13 species of large deciduous trees native to temperate regions of Europe, Asia, and North America. The name "beech" comes from the Old English <em>bēce</em>, which derives from the same Proto-Germanic root as the word "book" — beech wood tablets were among the earliest writing surfaces in northern Europe, giving us an etymological connection between beech trees and literacy.</p>
            <p>Beech trees are defined by several consistent features across all species: exceptionally smooth gray bark, oval leaves with prominent parallel veins, small triangular nuts (beechnuts) enclosed in spiky husks, and a tendency to hold dead leaves through winter (marcescence) especially on younger trees and lower branches. Use our <Link href="/tree-identifier">AI Tree Identifier</Link> to identify any beech species from a photo in seconds.</p>

            {/* IMAGE 1 */}
            <div style={{ margin: '2rem 0', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--card-border)' }}>
              <img
                src="/beech-tree1.jpg"
                alt="American beech tree showing smooth silvery gray bark for identification"
                style={{ width: '100%', height: '300px', objectFit: 'cover' }}
              />
              <div style={{ background: 'var(--card-bg)', padding: '0.8rem 1.2rem' }}>
                <p style={{ color: 'var(--gray-mid)', fontSize: '0.82rem', margin: 0 }}>🌳 Beech trees are immediately identified by their exceptionally smooth silvery-gray bark — the smoothest bark of any large tree. Unlike oaks, maples, and other hardwoods, beech bark remains smooth even on very old trees.</p>
              </div>
            </div>

            <h2>American Beech (Fagus grandifolia) — Complete Guide</h2>
            <p>American Beech (<em>Fagus grandifolia</em>) is the only beech species native to North America and one of the most important and recognizable trees of eastern North American forests. The species name <em>grandifolia</em> means "large-leaved" — reflecting that American Beech leaves are noticeably larger than those of its European cousin.</p>
            <p>American Beech is found throughout eastern North America, from Nova Scotia and New Brunswick south to northern Florida, and west to Wisconsin, Illinois, and eastern Texas. It is particularly abundant in the mixed hardwood forests of the Appalachian Mountains, the Great Lakes region, and New England, where it forms a dominant component of the Beech-Maple forest type — one of the most important forest communities in eastern North America.</p>
            <p>The most distinctive feature of <em>Fagus grandifolia</em> is its bark — exceptionally smooth and silvery-gray, unlike any other common large tree in North America. While oaks, maples, and hickories develop rough furrowed bark as they age, American Beech retains its smooth elephant-skin-like bark throughout its life, even on trees hundreds of years old. This smooth bark has made beech trees a favorite target for carving initials — unfortunately, these carvings persist for decades and can introduce diseases into the tree.</p>

            <h3>American Beech Leaves</h3>
            <p>American Beech leaves are oval to oblong, 6-12cm long, with a distinctive pointed tip and a coarsely toothed margin — each tooth corresponds to one of the prominent parallel veins that run from the midrib to the leaf edge. These parallel veins (9-14 pairs) give beech leaves their characteristic ribbed appearance and are one of the most reliable leaf identification features. The leaf surface is dark green and slightly glossy above, paler below, with silky hairs when young that mostly disappear by summer.</p>
            <p>One of the most distinctive seasonal features of American Beech is marcescence — the retention of dead leaves through winter. While most deciduous trees drop their leaves cleanly in autumn, beech trees (especially younger trees and the lower branches of older trees) hold their dead copper-bronze leaves through the winter, creating a warm russet glow in otherwise bare winter forests. The functional reason for marcescence in beech is not fully understood, but it may deter deer browsing by making nutritious buds less accessible beneath a layer of dry leaves.</p>

            <h2>European Beech (Fagus sylvatica) — The Forest King of Europe</h2>
            <p>European Beech (<em>Fagus sylvatica</em>) is the most important broadleaf forest tree in central and western Europe, forming vast cathedral-like forests across Britain, France, Germany, Poland, and into eastern Europe. The name <em>sylvatica</em> means "of the forests" — an appropriate name for a tree that defines the forest landscape of an entire continent.</p>
            <p>European Beech closely resembles American Beech but has several distinguishing features: slightly smaller leaves (4-9cm) with a wavy rather than toothed margin, fewer pairs of veins (5-9 compared to 9-14 in American Beech), and slightly smaller beechnuts. European Beech forms a denser canopy than American Beech, casting such deep shade that virtually no understory plants can survive beneath mature beech forest — the forest floor beneath a closed beech canopy is carpeted only with beech leaf litter, moss, and shade-tolerant ferns.</p>
            <p>European Beech forests — called <em>Buchenwälder</em> in German — are among the most celebrated natural landscapes in Europe. The Hainich National Park in Germany, the Bialowieza Forest in Poland/Belarus, and the beech forests of the Carpathians are UNESCO World Heritage Sites recognized for their ecological and scenic value. In Britain, the beech woods of the Chiltern Hills and the New Forest are iconic landscapes.</p>

            

            <h2>Tricolor Beech Tree — The Most Ornamental Beech</h2>
            <p>Tricolor beech (<em>Fagus sylvatica</em> 'Roseomarginata', also sold as 'Purpurea Tricolor') is one of the most spectacular ornamental trees available to gardeners — a cultivar of European Beech with leaves that display three distinct colors simultaneously throughout the growing season. The leaf center is deep purple-maroon, transitioning to an irregular zone of pink to rose-red, with white to very pale pink at the outer margin — creating a stunning multi-colored effect unlike any other common ornamental tree.</p>
            <p>The tricolor beech grows more slowly than the standard European Beech, typically reaching 6-10 meters in a landscape setting, making it more suitable for smaller gardens than the full-sized species. For best color development, tricolor beech should be planted in partial shade — in full sun, the pink coloration tends to fade to whitish and the purple center lightens considerably. Morning sun with afternoon shade provides ideal conditions. The tree performs best in moist, well-drained, slightly acidic soils — the same conditions preferred by all beech species.</p>

            <h2>Beech Tree Identification — Key Features</h2>
            <p>Beech trees are among the easiest large trees to identify due to their unique combination of smooth bark, distinctive leaves, and winter leaf retention. Follow these key identification features:</p>
            <p><strong>Bark</strong> — smooth, silvery-gray, and remaining smooth even on very large, old trees. This is the single most reliable beech identification feature at any time of year. No other common large tree maintains smooth bark throughout its life — all other hardwoods eventually develop rough, furrowed, or scaly bark.</p>
            <p><strong>Leaves</strong> — oval with a pointed tip, prominent parallel veins (like the ribs of a boat), and toothed (American Beech) or wavy (European Beech) margins. The parallel vein pattern is immediately recognizable. Leaves are alternate on the twig.</p>
            <p><strong>Winter leaf retention</strong> — dead copper-bronze leaves persisting on the tree through winter, especially on younger trees and lower branches. In a winter forest, a tree with dead leaves still attached is almost certainly a beech or young oak.</p>
            <p><strong>Beech buds</strong> — in winter, beech buds are very distinctive: long (1-2cm), sharp, cigar-shaped, and copper to reddish-brown in color. These pointed torpedo-like buds are unmistakable and make winter beech identification simple. For more winter identification tips, see our <Link href="/blog/how-to-identify-trees-in-winter">complete winter tree identification guide</Link>.</p>

            <h2>Beech Nuts — Wildlife Food and Human History</h2>
            <p>Beech nuts (beechnuts, beech mast) are the small triangular nuts produced by beech trees, enclosed in spiky four-valved husks called cupules. Each cupule typically opens to reveal 1-3 triangular nuts about 1-1.5cm long. The nuts have a thin brown shell enclosing a small kernel with a mild, slightly sweet flavor.</p>
            <p>Beech mast is one of the most important wildlife foods in both North American and European forests. In mast years — bumper crop years occurring every 2-5 years — the forest floor beneath beech trees is carpeted with nuts, providing abundant food for deer, bears, wild boar, squirrels, chipmunks, wood ducks, blue jays, grouse, and many other species. Black bears in particular depend heavily on beech mast in autumn to build up fat reserves for hibernation, and the timing and abundance of mast crops directly affects bear population dynamics.</p>
            <p>Beech nuts have also been important to human populations historically. In Europe, beechnuts were widely eaten during famines and hard times, roasted and ground as a coffee substitute, and pressed to produce beechnut oil — a high-quality cooking and lamp oil. In North America, Indigenous peoples used beechnuts as a food source. Today, beechnuts are occasionally gathered by foragers but are not commercially cultivated due to the low nut-to-shell ratio and the difficulty of harvest.</p>

            <h2>Beech Tree Disease — Beech Bark Disease and Beech Leaf Disease</h2>
            <p>Beech trees in North America currently face two major diseases that are causing significant population declines and raising conservation concerns for American Beech (<em>Fagus grandifolia</em>).</p>
            <p><strong>Beech Bark Disease (BBD)</strong> is caused by a combination of a non-native scale insect (<em>Cryptococcus fagisuga</em>) and fungal pathogens (<em>Neonectria</em> species). The scale insect creates tiny wounds in the smooth beech bark, allowing the fungi to enter and create cankers that girdle and kill the tree. Beech Bark Disease has killed millions of American Beech trees in eastern North America since its introduction from Europe in the late 1800s. Affected trees show white waxy deposits on the bark (from scale insect colonies), followed by rough corky patches of damaged bark, bleeding cankers, and eventual death. Some individual trees show resistance to BBD and are the focus of conservation efforts.</p>
            <p><strong>Beech Leaf Disease (BLD)</strong> is a newer and more alarming threat, first identified in Lake County, Ohio in 2012 and spreading rapidly throughout the eastern United States and Canada. It is caused by a foliar nematode (<em>Litylenchus crenatae mccannii</em>) and produces distinctive dark green banding between leaf veins — visible when infected leaves are held up to light. Severely infected trees show shriveled, leathery, reduced leaves and progressive crown thinning and dieback. Unlike Beech Bark Disease, BLD affects all size classes of beech, killing young seedlings and saplings as well as mature trees, threatening the regeneration of beech populations.</p>

            {/* IMAGE 3 */}
            <div style={{ margin: '2rem 0', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--card-border)' }}>
              <img
                src="/beech-tree2.jpg"
                alt="Beech forest with copper autumn leaves showing seasonal beech tree identification"
                style={{ width: '100%', height: '280px', objectFit: 'cover' }}
              />
              <div style={{ background: 'var(--card-bg)', padding: '0.8rem 1.2rem' }}>
                <p style={{ color: 'var(--gray-mid)', fontSize: '0.82rem', margin: 0 }}>🍂 Beech forests in autumn — American Beech turns golden-bronze while European Beech produces spectacular orange-gold displays. Many beech trees retain their copper-colored dead leaves through winter (marcescence).</p>
              </div>
            </div>

            <h2>Beech Wood — Uses and Properties</h2>
            <p>Beech wood (beechwood) is one of the most important and versatile hardwoods in Europe and North America. It is a diffuse-porous hardwood with a fine, straight grain and uniform texture that works exceptionally well with both hand and machine tools. Beech wood is hard, dense, and strong, with excellent resistance to abrasion and shock.</p>
            <p>The wood is pale pinkish-brown to cream-white, often with a slight reddish tinge. It stains and finishes well, accepting wood stains uniformly due to its fine even texture. Beech is not naturally durable outdoors, but responds very well to steam-bending — a quality that has made it historically important for chair making, where the steam-bent components of Windsor and other traditional chair designs have been produced from beech for centuries.</p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', margin: '1.5rem 0' }}>
              {beechWoodUses.map((item, i) => (
                <div key={i} style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '12px', padding: '1.2rem' }}>
                  <div style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>{item.icon}</div>
                  <div style={{ color: 'var(--white)', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.4rem' }}>{item.use}</div>
                  <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.83rem', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>

            <h2>Beech Tree Species — Complete Profiles</h2>
            <p>The following profiles cover the most important beech species and ornamental cultivars, with identification features for each.</p>

            {beechSpecies.map((tree) => (
              <div key={tree.num} style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '16px', padding: '1.8rem', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '44px', height: '44px', minWidth: '44px', background: 'linear-gradient(135deg, var(--forest-green), var(--mid-green))', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem' }}>{tree.icon}</div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.05rem', fontWeight: 700, color: 'var(--white)', marginBottom: '0.2rem' }}>#{tree.num} {tree.name}</h3>
                    <p style={{ color: 'var(--bright-green)', fontSize: '0.82rem', fontStyle: 'italic', marginBottom: '1rem' }}>{tree.sci} · {tree.region}</p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem', marginBottom: '0.8rem' }}>
                      <div><span style={{ color: 'var(--bright-green)', fontSize: '0.75rem', fontWeight: 600, display: 'block', marginBottom: '0.2rem' }}>LEAF</span><span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.85rem' }}>{tree.leaf}</span></div>
                      <div><span style={{ color: 'var(--bright-green)', fontSize: '0.75rem', fontWeight: 600, display: 'block', marginBottom: '0.2rem' }}>BARK</span><span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.85rem' }}>{tree.bark}</span></div>
                      <div><span style={{ color: 'var(--bright-green)', fontSize: '0.75rem', fontWeight: 600, display: 'block', marginBottom: '0.2rem' }}>BEECH NUTS</span><span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.85rem' }}>{tree.nut}</span></div>
                      <div><span style={{ color: 'var(--bright-green)', fontSize: '0.75rem', fontWeight: 600, display: 'block', marginBottom: '0.2rem' }}>FALL COLOR</span><span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.85rem' }}>{tree.fall}</span></div>
                    </div>
                    <div style={{ background: 'rgba(64,192,116,0.05)', border: '1px solid rgba(64,192,116,0.15)', borderRadius: '8px', padding: '0.6rem 0.9rem', fontSize: '0.82rem', color: 'rgba(255,255,255,0.75)' }}>
                      💡 {tree.note}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <h2>Frequently Asked Questions — Beech Trees</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', margin: '1.5rem 0' }}>
              {[
                { q: 'What is a beech tree?', a: 'A beech tree is any member of the genus Fagus — large deciduous hardwood trees famous for their exceptionally smooth silvery-gray bark, oval leaves with prominent parallel veins, small triangular beechnuts, and copper leaf retention in winter. About 10-13 species exist worldwide.' },
                { q: 'What is American Beech (Fagus grandifolia)?', a: 'American Beech is the only beech native to North America, found throughout eastern North America. It is identified by its smooth silvery-gray bark (smoothest of any large NA tree), oval toothed leaves with 9-14 pairs of veins, and retention of dead copper-bronze leaves through winter.' },
                { q: 'What is European Beech (Fagus sylvatica)?', a: 'European Beech is the dominant forest tree of central and western Europe. Similar to American Beech but with smaller leaves (4-9cm), wavy rather than toothed margins, and fewer vein pairs. Forms dense cathedral-like forests across Europe.' },
                { q: 'What is beech tree disease?', a: 'American Beech faces two major diseases: Beech Bark Disease (caused by scale insects + fungal pathogens, killing millions of trees since the 1800s) and Beech Leaf Disease (caused by a foliar nematode, first identified in 2012 and spreading rapidly, affecting all age classes of beech).' },
                { q: 'What are beech nuts?', a: 'Beech nuts are small triangular nuts produced by beech trees, enclosed in spiky four-valved husks. They are a critical wildlife food for deer, bears, squirrels, and birds. Edible for humans when roasted, with a mild sweet flavor. Produced in heavy mast crops every 2-5 years.' },
                { q: 'What is tricolor beech tree?', a: 'Tricolor beech (Fagus sylvatica "Roseomarginata") is a stunning ornamental cultivar with leaves showing three colors simultaneously — dark purple center, pink-rose margin, and white outer edge. Best color in partial shade. Grows 6-10 meters tall.' },
                { q: 'What is beech wood used for?', a: 'Beech wood is used for furniture, flooring, tool handles, kitchen utensils (spoons, cutting boards), toys, plywood, and smoking wood. It is hard, straight-grained, and excellent for steam bending. One of the most important European hardwoods.' },
              ].map((faq, i) => (
                <div key={i} style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '12px', padding: '1.4rem' }}>
                  <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', fontWeight: 700, color: 'var(--white)', marginBottom: '0.6rem' }}>{faq.q}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.88rem', lineHeight: 1.7, margin: 0 }}>{faq.a}</p>
                </div>
              ))}
            </div>

            <h2>Identify Your Beech Tree Instantly</h2>
            <p>Found a beech tree and want to confirm the species? Upload a photo to our <Link href="/tree-identifier">free AI Tree Identifier</Link> for instant species identification. The AI identifies American Beech, European Beech, Copper Beech, Tricolor Beech, and all other beech species and cultivars from leaf, bark, or full-tree photos.</p>
            <p>For leaf-specific identification, our <Link href="/identify-tree-by-leaf">Leaf Identifier</Link> analyzes the distinctive parallel vein pattern and leaf margin features that distinguish beech leaves. Related guides: <Link href="/blog/willow-tree">Willow Tree Guide</Link>, <Link href="/blog/trees-with-heart-shaped-leaves">Trees with Heart Shaped Leaves</Link>, <Link href="/blog/oak-tree-identification-guide">Oak Tree Identification Guide</Link>, <Link href="/blog/maple-tree-identification-guide">Maple Tree Guide</Link>, <Link href="/blog/tree-identification-by-bark">Tree ID by Bark</Link>, and <Link href="/blog/how-to-identify-trees-in-winter">Winter Tree ID Guide</Link>.</p>
            <p>Species tools: <Link href="/oak-tree-identifier">Oak Tree Identifier</Link>, <Link href="/maple-tree-identifier">Maple Tree Identifier</Link>, <Link href="/elm-tree-identifier">Elm Tree Identifier</Link>, <Link href="/fruit-tree-identifier">Fruit Tree Identifier</Link>, <Link href="/birch-tree-identifier">Birch Tree Identifier</Link>, <Link href="/pine-tree-identifier">Pine Tree Identifier</Link>.</p>

          </article>

          <aside style={{ position: 'sticky', top: '90px' }}>
            <div className="card" style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 700, color: 'var(--bright-green)', marginBottom: '1.2rem' }}>🌳 Identify Your Beech</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <Link href="/tree-identifier" className="btn-primary" style={{ textAlign: 'center', justifyContent: 'center', fontSize: '0.88rem', padding: '10px 16px' }}>🌳 Tree Identifier</Link>
                <Link href="/identify-tree-by-leaf" className="btn-outline" style={{ textAlign: 'center', justifyContent: 'center', fontSize: '0.88rem', padding: '10px 16px' }}>🍃 Leaf Identifier</Link>
              </div>
            </div>

            <div className="card" style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 700, color: 'var(--white)', marginBottom: '1rem' }}>🌳 Beech Quick ID</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                <li style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>✅ Smooth gray bark = Beech (always)</li>
                <li style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>✅ Toothed leaves + NA = American Beech</li>
                <li style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>✅ Wavy leaves + Europe = European Beech</li>
                <li style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>✅ Purple leaves = Copper Beech</li>
                <li style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>✅ 3-color leaves = Tricolor Beech</li>
                <li style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>✅ Dead winter leaves = Marcescence</li>
                <li style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>✅ Spiky husks + triangular nut = Beech nut</li>
                <li style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>✅ Cigar-shaped copper buds = Winter ID</li>
              </ul>
            </div>

            <div className="card" style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 700, color: 'var(--white)', marginBottom: '1rem' }}>🌳 Tree Identifiers</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <li><Link href="/oak-tree-identifier" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🌰 Oak Tree Identifier</Link></li>
                <li><Link href="/maple-tree-identifier" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🍁 Maple Tree Identifier</Link></li>
                <li><Link href="/elm-tree-identifier" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🌳 Elm Tree Identifier</Link></li>
                <li><Link href="/fruit-tree-identifier" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🍎 Fruit Tree Identifier</Link></li>
                <li><Link href="/birch-tree-identifier" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🪵 Birch Tree Identifier</Link></li>
                <li><Link href="/pine-tree-identifier" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🌲 Pine Tree Identifier</Link></li>
              </ul>
            </div>

            <div className="card">
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 700, color: 'var(--white)', marginBottom: '1rem' }}>📝 More Articles</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <li><Link href="/blog/willow-tree" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🌊 Willow Tree Guide</Link></li>
                <li><Link href="/blog/trees-with-heart-shaped-leaves" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>💗 Heart Shaped Leaves</Link></li>
                <li><Link href="/blog/oak-tree-identification-guide" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🌰 Oak ID Guide</Link></li>
                <li><Link href="/blog/maple-tree-identification-guide" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🍁 Maple ID Guide</Link></li>
                <li><Link href="/blog/tree-identification-by-bark" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🪵 Tree ID by Bark</Link></li>
                <li><Link href="/blog/how-to-identify-trees-in-winter" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>❄️ Winter Tree ID</Link></li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section style={{ padding: '4rem 2rem', background: 'var(--deep-black)', borderTop: '1px solid var(--card-border)', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', color: 'var(--white)', marginBottom: '1rem' }}>Identify Any Beech Tree Instantly</h2>
        <p style={{ color: 'var(--gray-mid)', marginBottom: '2rem' }}>Upload a photo of bark, leaves, or beech nuts — our AI identifies the species in seconds. Free, no signup.</p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/tree-identifier" className="btn-primary">🌳 Identify Tree Now</Link>
          <Link href="/blog" className="btn-outline">📝 More Articles</Link>
        </div>
      </section>
    </Layout>
  );
}
