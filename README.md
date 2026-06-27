# 🌳 Tree Identifier — AI-Powered Tree & Leaf Identification

A fully professional, SEO-optimized website that uses **Groq AI** to identify any tree species from a photo in seconds.

**Live demo URL:** `https://treeidentifier.ai`

---

## 🚀 Deploy to Vercel (Step-by-Step)

### Step 1: Upload to GitHub
1. Create a new GitHub repository (e.g. `tree-identifier`)
2. Upload all files from this folder to the repository
3. Push to main branch

### Step 2: Deploy on Vercel
1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **"Add New Project"**
3. Import your GitHub repository
4. Vercel will auto-detect Next.js — click **Deploy**

### Step 3: Add Your Groq API Key
1. In Vercel dashboard → go to your project → **Settings → Environment Variables**
2. Add:
   - **Name:** `GROQ_API_KEY`
   - **Value:** `your_groq_api_key_here`
   - **Environment:** Production, Preview, Development
3. Click **Save** then **Redeploy**

### Step 4: Get Your Groq API Key
1. Go to [console.groq.com](https://console.groq.com)
2. Sign up / Log in
3. Click **API Keys → Create API Key**
4. Copy the key and paste it in Vercel environment variables

---

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Create environment file
cp .env.local.example .env.local
# Edit .env.local and add your GROQ_API_KEY

# Start development server
npm run dev

# Open http://localhost:3000
```

---

## 📁 Project Structure

```
tree-identifier/
├── components/
│   ├── Layout.js          # Navigation, Footer, Breadcrumbs, SEO Head
│   └── UploadTool.js      # AI image upload & identification component
├── pages/
│   ├── _app.js            # App wrapper
│   ├── index.js           # Home page (SEO + 1000+ words content)
│   ├── tree-identifier.js # Tree ID tool page (SEO + AI upload)
│   ├── identify-tree-by-leaf.js  # Leaf ID tool page (SEO + AI upload)
│   ├── result.js          # Sample result page
│   ├── about.js           # About us page
│   ├── contact.js         # Contact form page
│   ├── disclaimer.js      # Disclaimer page
│   ├── privacy-policy.js  # Privacy policy page
│   └── api/
│       ├── identify.js    # Tree identification API (Groq)
│       └── leaf-identify.js # Leaf identification API (Groq)
├── styles/
│   └── globals.css        # Full black-green theme CSS
├── public/
│   ├── sitemap.xml        # SEO sitemap
│   └── robots.txt         # Search engine crawl rules
├── package.json
├── next.config.js
├── vercel.json
└── .env.local.example
```

---

## 🎨 Design Theme

- **Primary:** Deep black `#0a0a0a` + Forest green `#1a4a2e`
- **Accent:** Bright green `#40c074`
- **Typography:** Playfair Display (headings) + Inter (body)
- **Hero backgrounds:** Real tree forest photography (Unsplash)

---

## 🔍 SEO Features

- ✅ Unique meta title + description on every page
- ✅ Schema.org structured data (WebSite, Organization, SoftwareApplication, FAQPage, HowTo, BreadcrumbList)
- ✅ Open Graph + Twitter Card tags
- ✅ Canonical URLs
- ✅ XML Sitemap
- ✅ robots.txt
- ✅ 1000+ word SEO content on Home, Tree Identifier, and Leaf Identifier pages
- ✅ Internal linking throughout all pages
- ✅ Breadcrumb navigation

---

## 🤖 AI Model

Uses **Groq's Llama 4 Scout** vision model (`meta-llama/llama-4-scout-17b-16e-instruct`) for:
- Tree species identification from photos
- Leaf morphology analysis
- Structured JSON output with confidence scoring

---

## 📄 Pages

| Page | Route | Features |
|------|-------|---------|
| Home | `/` | Hero with forest BG, features, how-it-works, 1000+ words SEO content |
| Tree Identifier | `/tree-identifier` | AI upload tool, tips, tree types, 1000+ words content |
| Leaf Identifier | `/identify-tree-by-leaf` | Leaf-optimized AI tool, leaf types, seasonal tips, 1000+ words |
| Result | `/result` | Sample identification result display |
| About | `/about` | Team, mission, technology, milestones |
| Contact | `/contact` | Contact form, FAQ section |
| Disclaimer | `/disclaimer` | Safety warnings, legal terms |
| Privacy Policy | `/privacy-policy` | GDPR-compliant privacy policy |

---

## ✅ Checklist Before Going Live

- [ ] Add `GROQ_API_KEY` to Vercel environment variables
- [ ] Update domain in `Layout.js` (replace `treeidentifier.ai` with your domain)
- [ ] Update domain in `sitemap.xml`
- [ ] Update canonical URLs in all pages
- [ ] Add a real `favicon.ico` to `/public/`
- [ ] Add `og-image.jpg` (1200x630px) to `/public/`
- [ ] Update contact email in `contact.js` and `privacy-policy.js`
- [ ] Submit sitemap to Google Search Console

---

Built with ❤️ using Next.js 14, Groq AI, and pure CSS.
