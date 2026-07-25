import Layout from '../../components/Layout';
import Link from 'next/link';

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Poisonous Trees to Avoid — Complete Safety Guide with Identification Tips",
      "description": "Learn which poisonous trees are dangerous to humans and pets. Identification guide covering toxic bark, berries, sap, and leaves of the most dangerous trees in North America.",
      "image": "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1200&q=80",
      "datePublished": "2026-07-25",
      "dateModified": "2026-07-25",
      "author": { "@type": "Organization", "name": "Tree Identifier", "url": "https://treeidentifier.online/" },
      "publisher": { "@type": "Organization", "name": "Tree Identifier", "url": "https://treeidentifier.online/" },
      "mainEntityOfPage": "https://treeidentifier.online/blog/poisonous-trees",
      "keywords": "poisonous trees, toxic trees, dangerous trees, trees to avoid, poisonous tree berries, toxic tree sap, poisonous trees North America, trees toxic to dogs, trees toxic to humans, manchineel tree, oleander tree, poison sumac tree, yew tree poisonous, black walnut toxic"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the most poisonous tree in the world?",
          "acceptedAnswer": { "@type": "Answer", "text": "The Manchineel tree (Hippomane mancinella) is widely considered the most poisonous tree in the world. Every part of the tree is toxic — fruit, sap, bark, and even standing under it in rain can cause skin burns from its caustic milky sap." }
        },
        {
          "@type": "Question",
          "name": "Which common backyard trees are poisonous to dogs?",
          "acceptedAnswer": { "@type": "Answer", "text": "Common trees toxic to dogs include Yew (all parts), Black Walnut (hulls and roots), Cherry trees (seeds, leaves, bark), Oleander, and Horse Chestnut. Yew is particularly dangerous — even a small amount of foliage can be fatal to dogs and cats." }
        },
        {
          "@type": "Question",
          "name": "Is the Poison Sumac tree different from regular Sumac?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. Poison Sumac (Toxicodendron vernix) is a completely different species from edible Staghorn Sumac. Poison Sumac grows in wetlands, has smooth-edged leaflets and white/gray berries, and causes severe allergic contact dermatitis far worse than poison ivy." }
        },
        {
          "@type": "Question",
          "name": "Can you get poisoned just by touching a tree?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. Trees like Manchineel, Poison Sumac, and Stinging Trees (Dendrocnide) can cause serious reactions just from skin contact with sap, leaves, or bark. The Manchineel sap causes chemical burns; Poison Sumac causes severe dermatitis; the Stinging Tree injects venom through microscopic needles on its leaves." }
        },
        {
          "@type": "Question",
          "name": "How do I identify a poisonous tree safely?",
          "acceptedAnswer": { "@type": "Answer", "text": "Use our free AI Tree Identifier tool — upload a photo without touching the tree and get instant species identification. Never taste, smell closely, or touch sap from an unidentified tree. Learn the key warning signs: milky white sap, trifoliate leaves, red/white berries in clusters, and strong unpleasant smell when leaves are crushed." }
        }
      ]
    }
  ]
};

const poisonousTrees = [
  {
    num: 1,
    name: 'Manchineel Tree',
    sci: 'Hippomane mancinella',
    icon: '☠️',
    danger: 'EXTREME',
    dangerColor: '#dc2626',
    region: 'Florida, Caribbean, Central America',
    toxic: 'Entire tree — sap, fruit, bark, leaves, smoke',
    symptoms: 'Chemical burns, blindness (eye contact), severe blistering, anaphylaxis if eaten',
    leaf: 'Simple, glossy, ovate, finely serrated, alternate',
    bark: 'Gray-brown, slightly furrowed, exudes milky white sap when cut',
    fruit: 'Small green-yellow apple-like fruits called "beach apples"',
    note: 'Guinness World Records listed it as the most dangerous tree. Even rainwater dripping through the canopy can blister skin.'
  },
  {
    num: 2,
    name: 'Pacific Yew',
    sci: 'Taxus brevifolia',
    icon: '🔴',
    danger: 'HIGH',
    dangerColor: '#ea580c',
    region: 'Western North America',
    toxic: 'All parts except the red aril (berry flesh) — seeds, bark, needles, leaves',
    symptoms: 'Cardiac arrest, dizziness, muscle tremors, death within hours if seeds are swallowed',
    leaf: 'Flat dark green needles, 1–2 cm, arranged in two rows, pale stripe underneath',
    bark: 'Thin, scaly, reddish-brown to purple, peels in papery flakes',
    fruit: 'Distinctive bright red berry-like arils, each containing a single toxic seed',
    note: 'The red flesh (aril) is the only non-toxic part. The seed inside is highly toxic. Used medicinally to produce the cancer drug Taxol.'
  },
  {
    num: 3,
    name: 'Poison Sumac',
    sci: 'Toxicodendron vernix',
    icon: '⚠️',
    danger: 'HIGH',
    dangerColor: '#ea580c',
    region: 'Eastern North America (wetlands)',
    toxic: 'All parts — sap, leaves, bark, berries',
    symptoms: 'Severe allergic dermatitis, intense itching, blistering rash, respiratory problems if burned',
    leaf: 'Compound, 7–13 smooth-edged leaflets per stem, red midrib, brilliant orange-red in fall',
    bark: 'Smooth, gray-brown, with orange-colored lenticels (pores)',
    fruit: 'Clusters of white to gray-green berries hanging downward',
    note: 'More potent than poison ivy. Always grows in boggy, wet areas. Smooth leaflet margins distinguish it from harmless Staghorn Sumac (which has serrated margins and red berries).'
  },
  {
    num: 4,
    name: 'Black Walnut',
    sci: 'Juglans nigra',
    icon: '🪨',
    danger: 'MODERATE',
    dangerColor: '#ca8a04',
    region: 'Eastern North America',
    toxic: 'Roots, husks, and bark — produce juglone toxin',
    symptoms: 'Toxic to dogs (causes laminitis), kills surrounding plants, skin staining from hulls',
    leaf: 'Compound, 15–23 leaflets, alternate, leaflets finely serrated',
    bark: 'Very dark brown-black, deeply furrowed in diamond patterns',
    fruit: 'Round green husks encasing hard-shelled walnuts, stain skin dark brown',
    note: 'Juglone in roots is toxic to many plants within a 15–18 meter radius. Moldy black walnut husks are severely toxic to dogs, causing neurological symptoms.'
  },
  {
    num: 5,
    name: 'Oleander',
    sci: 'Nerium oleander',
    icon: '🌸',
    danger: 'HIGH',
    dangerColor: '#ea580c',
    region: 'Mediterranean, widely planted in US South and West',
    toxic: 'Every part — leaves, flowers, fruit, sap, even smoke when burned',
    symptoms: 'Cardiac glycoside poisoning, irregular heartbeat, vomiting, death in severe cases',
    leaf: 'Long, narrow, lance-shaped, leathery, dark green, arranged in whorls of 3',
    bark: 'Smooth gray-green bark on young stems, older bark grayish-brown',
    fruit: 'Slender paired seed pods 5–23 cm, splitting to release fluffy seeds',
    note: 'One of the most commonly planted yet deadly ornamental trees. Frequently found in parks and roadsides across California, Florida, and Texas. Do not burn trimmings.'
  },
  {
    num: 6,
    name: 'Horse Chestnut',
    sci: 'Aesculus hippocastanum',
    icon: '🌰',
    danger: 'MODERATE',
    dangerColor: '#ca8a04',
    region: 'Widely planted across North America and Europe',
    toxic: 'Seeds (conkers), leaves, flowers, and bark contain aesculin and saponins',
    symptoms: 'Nausea, vomiting, muscle twitching, depression, paralysis in severe cases',
    leaf: 'Large palmate compound leaf with 5–7 leaflets, opposite',
    bark: 'Gray-brown, breaking into irregular scaly plates on older trees',
    fruit: 'Spiky round green husks containing 1–3 shiny brown conkers (seeds)',
    note: 'Do not confuse with edible Sweet Chestnut (Castanea sativa). Horse chestnuts have spikier husks and the seeds are not notched like sweet chestnuts.'
  },
  {
    num: 7,
    name: 'Wild Cherry',
    sci: 'Prunus serotina',
    icon: '🍒',
    danger: 'MODERATE',
    dangerColor: '#ca8a04',
    region: 'Eastern North America',
    toxic: 'Seeds, leaves, and bark contain cyanogenic glycosides (release hydrogen cyanide)',
    symptoms: 'Cyanide poisoning — rapid breathing, weakness, seizures; especially dangerous for livestock',
    leaf: 'Alternate, lance-shaped, finely serrated, dark green and glossy',
    bark: 'Distinctive dark scaly bark with horizontal lenticels; "burnt cornflake" texture',
    fruit: 'Small dark red to black cherries — fruit flesh is edible but seeds are toxic',
    note: 'Wilted cherry leaves are especially dangerous to livestock as wilting increases cyanide release. Ripe fruit is widely eaten by wildlife and humans; avoid all seeds.'
  },
  {
    num: 8,
    name: 'Chinaberry Tree',
    sci: 'Melia azedarach',
    icon: '🟡',
    danger: 'MODERATE-HIGH',
    dangerColor: '#ea580c',
    region: 'Southeastern US, invasive across warm regions',
    toxic: 'Berries, bark, flowers, and leaves — tetranortriterpene neurotoxins',
    symptoms: 'Nausea, vomiting, slow heart rate, breathing difficulty, death in large doses',
    leaf: 'Large bipinnate compound leaves up to 80 cm, toothed leaflets',
    bark: 'Brown-gray, furrowed with interlacing ridges, orange inner bark',
    fruit: 'Clusters of round yellow berries that persist on the tree through winter',
    note: 'Often planted as a shade tree but invasive and toxic. As few as 6–8 berries can be fatal to children. Birds eat the fermented berries and sometimes appear intoxicated.'
  },
];

export default function PoisonousTrees() {
  return (
    <Layout
      meta={{
        title: 'Poisonous Trees to Avoid — Complete Safety & Identification Guide | Tree Identifier Blog',
        description: 'Complete guide to the most dangerous poisonous trees in North America. Learn to identify toxic trees by their leaves, bark, berries, and sap — and how to stay safe around them.',
        canonical: 'https://treeidentifier.online/blog/poisonous-trees',
        schema,
      }}
      breadcrumbs={[{ label: 'Blog', href: '/blog' }, { label: 'Poisonous Trees to Avoid' }]}
    >
      {/* ── HERO ── */}
      <section style={{
        background: `linear-gradient(180deg, rgba(5,5,5,0.82) 0%, var(--black) 100%), url('https://images.unsplash.com/photo-1448375240586-882707db888b?w=1600&q=80') center/cover no-repeat`,
        padding: '120px 2rem 5rem',
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            <span style={{ background: 'rgba(220,38,38,0.12)', color: '#f87171', border: '1px solid rgba(220,38,38,0.25)', borderRadius: '50px', padding: '4px 14px', fontSize: '0.78rem', fontWeight: 600 }}>⚠️ Safety Guide</span>
            <span style={{ background: 'rgba(64,192,116,0.1)', color: 'var(--bright-green)', border: '1px solid rgba(64,192,116,0.2)', borderRadius: '50px', padding: '4px 14px', fontSize: '0.78rem', fontWeight: 600 }}>Tree Identification</span>
            <span style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>📅 July 25, 2026</span>
            <span style={{ color: 'var(--gray-mid)', fontSize: '0.85rem' }}>⏱ 14 min read</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: 'var(--white)', lineHeight: 1.15, marginBottom: '1.5rem' }}>
            Poisonous Trees to Avoid —<br />Complete Safety Guide
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.8, marginBottom: '2rem' }}>
            A complete identification guide to the most dangerous toxic and poisonous trees in North America — covering toxic bark, deadly berries, caustic sap, and poisonous leaves, with expert tips on how to identify and safely avoid each species.
          </p>
          {/* Warning box */}
          <div style={{ background: 'rgba(220,38,38,0.1)', border: '1px solid rgba(220,38,38,0.3)', borderRadius: '14px', padding: '1rem 1.4rem', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
            <span style={{ fontSize: '1.4rem', flexShrink: 0 }}>🚨</span>
            <p style={{ color: '#fca5a5', fontSize: '0.88rem', lineHeight: 1.65, margin: 0 }}>
              <strong style={{ color: '#f87171' }}>Medical Emergency:</strong> If you or someone has ingested or had severe contact with any toxic tree, call Poison Control immediately: <strong style={{ color: 'white' }}>1-800-222-1222</strong> (US). Do not wait for symptoms to appear.
            </p>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="section">
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem', display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '4rem', alignItems: 'start' }}>

          <article className="prose-content" style={{ maxWidth: '100%' }}>

            <h2>Why You Need to Know Poisonous Trees</h2>
            <p>Most people know to avoid poison ivy — but far fewer realize that dozens of common trees found in parks, backyards, roadsides, and forests across North America are genuinely poisonous, some lethally so. <strong>Poisonous trees</strong> can cause serious harm through multiple routes of exposure: ingesting berries or fruit, skin contact with sap, breathing smoke from burning wood, or even standing under the canopy in rain.</p>
            <p>Children and pets are at highest risk because they are more likely to touch, chew, or eat unfamiliar plants without understanding the danger. A horse chestnut conker looks appealingly similar to an edible sweet chestnut to a child. The bright red berries of a Yew tree are tempting and look harmless. The "beach apples" of a Manchineel tree look like small green apples. Knowing how to <strong>identify poisonous trees</strong> before you encounter them — especially in areas where children and pets roam — is a critical safety skill.</p>
            <p>For property owners, landscapers, and gardeners, this knowledge is equally important. Some toxic trees are commonly sold and planted as ornamentals (Oleander, Horse Chestnut, Cherry Laurel) while others spread invasively into garden borders. Use our <Link href="/tree-identifier">AI Tree Identifier</Link> to safely identify any unknown tree from a distance before making contact — and use the profiles below to learn the key warning signs for the most dangerous species.</p>

            <h2>Danger Level Key</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.8rem', marginBottom: '0.5rem' }}>
              {[
                { level: '☠️ EXTREME', desc: 'Can cause death from minimal exposure', bg: 'rgba(220,38,38,0.1)', border: 'rgba(220,38,38,0.3)', color: '#f87171' },
                { level: '🔴 HIGH', desc: 'Serious harm or death from ingestion', bg: 'rgba(234,88,12,0.1)', border: 'rgba(234,88,12,0.3)', color: '#fb923c' },
                { level: '🟡 MODERATE', desc: 'Illness or irritation, rarely fatal in adults', bg: 'rgba(202,138,4,0.1)', border: 'rgba(202,138,4,0.3)', color: '#facc15' },
              ].map(({ level, desc, bg, border, color }) => (
                <div key={level} style={{ background: bg, border: `1px solid ${border}`, borderRadius: '12px', padding: '0.9rem 1rem' }}>
                  <p style={{ color, fontWeight: 700, fontSize: '0.82rem', margin: '0 0 0.3rem' }}>{level}</p>
                  <p style={{ color: 'var(--gray-mid)', fontSize: '0.78rem', margin: 0 }}>{desc}</p>
                </div>
              ))}
            </div>

            <h2>The 8 Most Dangerous Poisonous Trees in North America</h2>

            {poisonousTrees.map((tree) => (
              <div key={tree.num} style={{ background: 'var(--card-bg)', border: `1px solid var(--card-border)`, borderRadius: '16px', padding: '1.8rem', marginBottom: '1.5rem', position: 'relative', overflow: 'hidden' }}>
                {/* Danger stripe */}
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: tree.dangerColor }} />
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '44px', height: '44px', minWidth: '44px', background: `${tree.dangerColor}20`, border: `1px solid ${tree.dangerColor}40`, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem' }}>
                    {tree.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.8rem' }}>
                      <div>
                        <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.05rem', fontWeight: 700, color: 'var(--white)', marginBottom: '0.2rem' }}>
                          #{tree.num} {tree.name}
                        </h3>
                        <p style={{ color: 'var(--bright-green)', fontSize: '0.82rem', fontStyle: 'italic', marginBottom: '0.3rem' }}>{tree.sci} · {tree.region}</p>
                      </div>
                      <span style={{ background: `${tree.dangerColor}18`, color: tree.dangerColor, border: `1px solid ${tree.dangerColor}35`, borderRadius: '50px', padding: '3px 12px', fontSize: '0.72rem', fontWeight: 700, whiteSpace: 'nowrap' }}>
                        {tree.danger}
                      </span>
                    </div>

                    {/* Toxic alert */}
                    <div style={{ background: 'rgba(220,38,38,0.07)', border: '1px solid rgba(220,38,38,0.2)', borderRadius: '10px', padding: '0.65rem 1rem', marginBottom: '1rem', display: 'flex', gap: '8px' }}>
                      <span style={{ flexShrink: 0 }}>☠️</span>
                      <div>
                        <p style={{ color: '#f87171', fontSize: '0.75rem', fontWeight: 700, margin: '0 0 0.15rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Toxic Parts</p>
                        <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.83rem', margin: 0 }}>{tree.toxic}</p>
                      </div>
                    </div>

                    {/* Symptoms */}
                    <div style={{ background: 'rgba(234,88,12,0.07)', border: '1px solid rgba(234,88,12,0.2)', borderRadius: '10px', padding: '0.65rem 1rem', marginBottom: '1rem', display: 'flex', gap: '8px' }}>
                      <span style={{ flexShrink: 0 }}>🏥</span>
                      <div>
                        <p style={{ color: '#fb923c', fontSize: '0.75rem', fontWeight: 700, margin: '0 0 0.15rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Symptoms</p>
                        <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.83rem', margin: 0 }}>{tree.symptoms}</p>
                      </div>
                    </div>

                    {/* Identification grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem', marginBottom: '0.8rem' }}>
                      <div>
                        <span style={{ color: 'var(--bright-green)', fontSize: '0.75rem', fontWeight: 600, display: 'block', marginBottom: '0.2rem' }}>LEAF</span>
                        <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.85rem' }}>{tree.leaf}</span>
                      </div>
                      <div>
                        <span style={{ color: 'var(--bright-green)', fontSize: '0.75rem', fontWeight: 600, display: 'block', marginBottom: '0.2rem' }}>BARK</span>
                        <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.85rem' }}>{tree.bark}</span>
                      </div>
                      <div>
                        <span style={{ color: 'var(--bright-green)', fontSize: '0.75rem', fontWeight: 600, display: 'block', marginBottom: '0.2rem' }}>FRUIT / SEED</span>
                        <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.85rem' }}>{tree.fruit}</span>
                      </div>
                      <div>
                        <span style={{ color: 'var(--bright-green)', fontSize: '0.75rem', fontWeight: 600, display: 'block', marginBottom: '0.2rem' }}>KEY WARNING</span>
                        <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.85rem' }}>{tree.note}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <h2>General Warning Signs of a Poisonous Tree</h2>
            <p>While no single feature definitively marks a tree as poisonous, certain characteristics appear frequently across toxic species. Learning these warning signs allows you to exercise caution around any unfamiliar tree before attempting identification:</p>
            <ul>
              <li><strong>Milky white or colored sap:</strong> Clear sap is usually benign, but milky white, yellow, or orange sap — particularly visible when a twig is broken — is a strong warning sign. Manchineel, Poison Sumac, and many Euphorbia species have caustic milky sap.</li>
              <li><strong>White, gray, or yellow berry clusters:</strong> Red berries are sometimes edible (though not always — Yew berries are deadly), but white, gray, or yellow berry clusters on a tree are almost universally toxic. Poison Sumac, Chinaberry, and Mistletoe all produce white or yellow berries.</li>
              <li><strong>Trifoliate or compound leaves with smooth margins:</strong> Smooth-edged leaflets on compound leaves — especially when combined with white berries — can indicate Poison Sumac or related toxic Toxicodendron species.</li>
              <li><strong>Strong unpleasant smell when leaves are crushed:</strong> Many toxic trees release an acrid, bitter, or unpleasant smell when their leaves are damaged. This is often the plant releasing toxic compounds.</li>
              <li><strong>Immediate skin irritation on contact:</strong> Any tree that causes itching, burning, or redness immediately upon skin contact with leaves or sap should be avoided and identified before any further handling.</li>
            </ul>

            <h2>Poisonous Trees That Are Toxic to Dogs and Pets</h2>
            <p>Pet owners need to be especially vigilant, as animals are more likely to chew on bark, eat fallen fruit, or dig around roots of trees in gardens and parks. The following trees are particularly dangerous to dogs, cats, and horses:</p>
            <ul>
              <li><strong>Yew (Taxus spp.):</strong> Extremely toxic to dogs, cats, and horses. Even a small handful of needles can be fatal. Yew is commonly used as a hedge plant, making it a serious garden hazard.</li>
              <li><strong>Black Walnut (Juglans nigra):</strong> The hulls of fallen black walnuts are severely toxic to dogs, causing tremors and neurological symptoms. The roots also release juglone, which kills many surrounding plants.</li>
              <li><strong>Horse Chestnut (Aesculus hippocastanum):</strong> Conkers (seeds) are toxic to dogs and horses, causing vomiting, excessive drooling, and abdominal pain.</li>
              <li><strong>Cherry and Plum trees (Prunus spp.):</strong> The seeds, bark, and wilted leaves contain cyanogenic glycosides. Horses are particularly susceptible to cyanide poisoning from wilted cherry leaves.</li>
              <li><strong>Oleander:</strong> Extremely toxic to all animals — dogs, cats, horses, rabbits. Even dried leaves remain highly toxic. Never allow pets access to Oleander clippings or fallen leaves.</li>
            </ul>
            <p>If your pet has eaten any part of an unknown tree, use our <Link href="/tree-identifier">AI Tree Identifier</Link> to photograph and identify the tree immediately, then contact your veterinarian or the ASPCA Animal Poison Control Center: <strong>1-888-426-4435</strong>.</p>

            <h2>How to Safely Identify Potentially Poisonous Trees</h2>
            <p>The safest approach to identifying a potentially toxic tree is to <strong>never touch the tree before you know what it is</strong>. Our <Link href="/tree-identifier">AI Tree Identifier</Link> allows you to upload a photograph taken from a safe distance and receive an instant species identification without any physical contact with the tree.</p>
            <p>When photographing a suspected toxic tree, use your phone camera with zoom rather than getting close. Photograph the leaves from above, the bark from a meter's distance, and the fruit or berries without handling them. Upload these photos to our <Link href="/identify-tree-by-leaf">Leaf Identifier</Link> or main Tree Identifier tool for instant identification.</p>
            <p>Once you have a species name, look up the toxicity profile for that species before deciding how to proceed. If the tree is on your property and poses a risk to children or pets, consult a certified arborist about safe removal — do not attempt to cut down or burn a suspected poisonous tree yourself, as smoke from burning Yew, Oleander, or Manchineel wood is itself toxic.</p>

            <h2>Trees Commonly Mistaken for Poisonous Species</h2>
            <p>Just as importantly as knowing which trees are toxic, it helps to know which harmless trees are commonly mistaken for poisonous ones — and vice versa. These confusion pairs cause unnecessary alarm or, more dangerously, false reassurance:</p>
            <ul>
              <li><strong>Poison Sumac vs. Staghorn Sumac:</strong> Poison Sumac has white/gray berries and smooth leaflet margins; Staghorn Sumac has red berry clusters and serrated leaflet margins. Staghorn Sumac is edible and used to make a lemonade-like drink.</li>
              <li><strong>Horse Chestnut vs. Sweet Chestnut:</strong> Both have spiny husks but Sweet Chestnut husks are much spikier, the leaves are simple (not compound), and the edible nuts have a distinctive notch. Horse Chestnut seeds (conkers) are rounder and lack the notch.</li>
              <li><strong>Elderberry vs. Pokeweed:</strong> Both have dark purple berries in clusters. Elderberry (Sambucus) grows on a shrubby tree with compound leaves and the ripe cooked berries are edible. Pokeweed (Phytolacca) has larger berries and is highly toxic throughout.</li>
              <li><strong>Wild Cherry vs. Bird Cherry:</strong> Both are Prunus species with small dark berries. The fruit flesh of both is edible, but seeds of all Prunus species are toxic — never eat or crush the seeds.</li>
            </ul>
            <p>For any tree you are uncertain about, the safest approach is always to use our <Link href="/tree-identifier">free AI tree identification tool</Link> before touching, tasting, or allowing children or pets near the tree. Our database covers all of the species listed in this guide and thousands more, providing instant, accurate identification from a single photograph.</p>

            <h2>If You Suspect Poisoning — Emergency Response</h2>
            <p>If you suspect someone has been poisoned by a tree — through ingestion, skin contact, or eye contact with sap — take these immediate steps:</p>
            <ul>
              <li><strong>Ingestion:</strong> Call Poison Control (US: 1-800-222-1222) immediately. Do not induce vomiting unless specifically instructed to do so.</li>
              <li><strong>Skin contact with sap:</strong> Wash the affected area thoroughly with soap and cool water for at least 20 minutes. Remove contaminated clothing. Seek medical attention if burns, blistering, or swelling develop.</li>
              <li><strong>Eye contact:</strong> Flush eyes with clean water for 15–20 minutes. Seek emergency medical care immediately — tree sap in eyes (especially Manchineel) can cause permanent damage.</li>
              <li><strong>Inhalation of smoke:</strong> Move immediately to fresh air. Seek emergency medical care if breathing difficulty, chest tightness, or coughing persist.</li>
              <li><strong>For pets:</strong> Call ASPCA Animal Poison Control (1-888-426-4435) or your nearest emergency veterinary clinic. Bring a photo of the tree if possible.</li>
            </ul>
            <p>Learn the trees around your home, school, and regular outdoor areas using our <Link href="/blog/common-tree-species">Common Tree Species guide</Link> and our AI identification tools. For any tree you cannot confidently identify, use the <Link href="/identify-tree-by-leaf">Leaf Identifier</Link> to get a safe, contact-free identification from a photo.</p>

          </article>

          {/* ── SIDEBAR ── */}
          <aside style={{ position: 'sticky', top: '90px' }}>

            {/* Emergency box */}
            <div style={{ background: 'rgba(220,38,38,0.08)', border: '1px solid rgba(220,38,38,0.25)', borderRadius: '16px', padding: '1.2rem', marginBottom: '1.5rem' }}>
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', fontWeight: 700, color: '#f87171', marginBottom: '0.8rem' }}>🚨 Poison Emergency</h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.82rem', lineHeight: 1.6, marginBottom: '0.6rem' }}>
                <strong style={{ color: 'white' }}>Poison Control (US)</strong><br />
                📞 1-800-222-1222
              </p>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.82rem', lineHeight: 1.6, margin: 0 }}>
                <strong style={{ color: 'white' }}>Pet Poison Control</strong><br />
                📞 1-888-426-4435
              </p>
            </div>

            {/* Identify tool */}
            <div className="card" style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 700, color: 'var(--bright-green)', marginBottom: '0.6rem' }}>🔍 Identify Any Tree Safely</h3>
              <p style={{ color: 'var(--gray-mid)', fontSize: '0.82rem', lineHeight: 1.6, marginBottom: '1rem' }}>Upload a photo without touching the tree. Get instant safe identification.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <Link href="/tree-identifier" className="btn-primary" style={{ textAlign: 'center', justifyContent: 'center', fontSize: '0.88rem', padding: '10px 16px' }}>🌳 Tree Identifier</Link>
                <Link href="/identify-tree-by-leaf" className="btn-outline" style={{ textAlign: 'center', justifyContent: 'center', fontSize: '0.88rem', padding: '10px 16px' }}>🍃 Leaf Identifier</Link>
              </div>
            </div>

            {/* Danger quick ref */}
            <div className="card" style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 700, color: 'var(--white)', marginBottom: '1rem' }}>☠️ Quick Danger Reference</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                {poisonousTrees.map(tree => (
                  <li key={tree.num} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '0.75rem', background: `${tree.dangerColor}18`, color: tree.dangerColor, border: `1px solid ${tree.dangerColor}30`, borderRadius: '4px', padding: '1px 6px', fontWeight: 700, whiteSpace: 'nowrap' }}>{tree.danger}</span>
                    <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.83rem' }}>{tree.name}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Related species */}
            <div className="card" style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 700, color: 'var(--white)', marginBottom: '1rem' }}>🌳 Species Identifiers</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <li><Link href="/oak-tree-identifier" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🌰 Oak Tree Identifier</Link></li>
                <li><Link href="/maple-tree-identifier" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🍁 Maple Tree Identifier</Link></li>
                <li><Link href="/pine-tree-identifier" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🌲 Pine Tree Identifier</Link></li>
                <li><Link href="/birch-tree-identifier" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🪵 Birch Tree Identifier</Link></li>
                <li><Link href="/palm-tree-identifier" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>🌴 Palm Tree Identifier</Link></li>
              </ul>
            </div>

            {/* Related articles */}
            <div className="card">
              <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 700, color: 'var(--white)', marginBottom: '1rem' }}>📝 Related Articles</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <li><Link href="/blog/common-tree-species" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>25 Common Tree Species Guide</Link></li>
                <li><Link href="/blog/how-to-identify-trees" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>How to Identify Trees</Link></li>
                <li><Link href="/blog/tree-identification-by-leaf" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>Tree ID by Leaf Guide</Link></li>
                <li><Link href="/blog" style={{ color: 'var(--gray-mid)', fontSize: '0.88rem' }}>📝 All Articles</Link></li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      <section style={{ padding: '4rem 2rem', background: 'var(--deep-black)', borderTop: '1px solid var(--card-border)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: 'var(--white)', marginBottom: '2rem', textAlign: 'center' }}>
            Frequently Asked Questions
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { q: 'What is the most poisonous tree in the world?', a: 'The Manchineel tree (Hippomane mancinella) is widely considered the most poisonous tree in the world. Every part of the tree is toxic — fruit, sap, bark, and even standing under it in rain can cause skin burns from its caustic milky sap.' },
              { q: 'Which common backyard trees are poisonous to dogs?', a: 'Common trees toxic to dogs include Yew (all parts), Black Walnut (hulls and roots), Cherry trees (seeds, leaves, bark), Oleander, and Horse Chestnut. Yew is particularly dangerous — even a small amount of foliage can be fatal to dogs and cats.' },
              { q: 'Is the Poison Sumac tree different from regular Sumac?', a: 'Yes. Poison Sumac (Toxicodendron vernix) is a completely different species from edible Staghorn Sumac. Poison Sumac grows in wetlands, has smooth-edged leaflets and white/gray berries, and causes severe allergic contact dermatitis far worse than poison ivy.' },
              { q: 'Can you get poisoned just by touching a tree?', a: 'Yes. Trees like Manchineel, Poison Sumac, and Stinging Trees can cause serious reactions just from skin contact with sap, leaves, or bark. The Manchineel sap causes chemical burns; Poison Sumac causes severe dermatitis.' },
              { q: 'How do I identify a poisonous tree safely?', a: 'Use our free AI Tree Identifier tool — upload a photo without touching the tree and get instant species identification. Never taste, smell closely, or touch sap from an unidentified tree.' },
            ].map(({ q, a }) => (
              <div key={q} style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '14px', padding: '1.3rem 1.5rem' }}>
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', fontWeight: 700, color: 'var(--white)', marginBottom: '0.6rem' }}>Q: {q}</h3>
                <p style={{ color: 'var(--gray-mid)', fontSize: '0.88rem', lineHeight: 1.7, margin: 0 }}>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section style={{ padding: '4rem 2rem', background: 'var(--deep-black)', borderTop: '1px solid var(--card-border)', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', color: 'var(--white)', marginBottom: '1rem' }}>
          Identify Any Unknown Tree Safely
        </h2>
        <p style={{ color: 'var(--gray-mid)', marginBottom: '2rem', maxWidth: '480px', margin: '0 auto 2rem' }}>
          Upload a photo from a safe distance — our AI identifies any tree species in seconds, including all toxic species listed in this guide.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/tree-identifier" className="btn-primary">🌳 Identify a Tree Now</Link>
          <Link href="/identify-tree-by-leaf" className="btn-outline">🍃 Identify by Leaf</Link>
          <Link href="/blog" className="btn-outline">📝 More Articles</Link>
        </div>
      </section>

    </Layout>
  );
}
