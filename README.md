[README.md](https://github.com/user-attachments/files/32573009/README.md)

[README.md](https://github.com/user-attachments/files/32526827/README.md)
# C.B. Williams Ltd

A static, responsive website for website creation and device repair and upgrade enquiries. No build step, packages, API keys or backend are required.

## Upload and run on GitHub Pages

1. Create a GitHub repository (for example, `cb-williams-ltd`). A public repository works with GitHub Free.
2. Extract `the downloaded ZIP`. Upload the extracted files, not the ZIP, to the repository root using **Add file → Upload files**, then commit to `main`. `index.html`, `styles.css`, and `script.js` must be at the top level, not inside another folder. Include `.nojekyll` if your file picker shows hidden files; if it does not, create an empty file named `.nojekyll` with **Add file → Create new file**.
3. Open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, select **main** and **/(root)**, then **Save**.
4. Wait for GitHub Pages to finish publishing. The Pages settings show the live URL, usually `https://YOUR-USERNAME.github.io/cb-williams-ltd/`.

For updates, edit or replace the root HTML, CSS and JavaScript files and commit to `main`. GitHub Pages republishes them automatically. No custom Actions workflow is needed. If an older copy of this repository contains `.github/workflows/jekyll-docker.yml`, delete it; this static site does not need that Jekyll Docker build.

Official instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Run locally

Open `index.html` in a browser. Alternatively, with Python installed, run `python3 -m http.server 8000` from the extracted directory and visit `http://localhost:8000`.

## Files and behaviour

- `index.html`: page content and contact form.
- `styles.css`: responsive styling.
- `script.js`: mobile menu, current year and email preparation.
- `.nojekyll`: serves the files directly on GitHub Pages.

Relative asset links work with both repository URLs and custom domains. Google Fonts loads over the internet, with CSS fallback fonts available. The contact form opens the visitor's email app addressed to `c.b_williams.ltd@proton.me`; the visitor must send the email themselves. It does not store enquiries or send mail through a server.

## September 2026 update

The layout uses smaller headings, tighter spacing and compact service cards. The decorative hero artwork is hidden on smaller screens. Pricing and running-cost sections explain one-off builds, domain renewals, hosting, optional edits, HTTPS and business email.

Build estimates are suggested prices for this business, not a market valuation or binding quotation: £150–£300 for one page; £350–£650 for up to five pages; £700–£1,200+ for larger sites. Confirm that these prices and inclusions suit you before uploading. Change the visible amounts and scope in index.html as needed.

Provider links are included in the running-cost section. Domain allowances and the worked example are illustrative. Check current provider prices, renewal rates, taxes and plan terms for each customer quote. Free hosting depends on platform suitability and limits.

To update your existing site, replace index.html, styles.css and script.js in the existing repository root. The included CNAME preserves your supplied custom domain. This ZIP does not publish itself.

## Phone repair estimates

Added a compact phone repair pricing table and a repair enquiry button that selects Device repair. These are suggested business guide prices, not verified supplier quotes. Confirm parts costs, your labour margin and your ability to complete each repair before publishing. Parts and labour are included in the displayed replacement estimates. Exact model, part quality and extra damage can change the quote; no warranty period, turnaround time or manufacturer authorisation is claimed.

## Local search and sharing

Local page copy, page title, description, social-sharing metadata and Organization structured data focus on Surrey Heath, Camberley and Frimley, with Ash, Aldershot, Fleet and Farnham as additional service areas. No street address, shop location, phone number, opening hours or social profile URL has been invented. The social metadata supplies text; no custom preview image has been added.

Upload robots.txt and sitemap.xml alongside the updated HTML, CSS and JavaScript. The canonical URL and sitemap use https://cbwilliamsdesign.co.uk/. Search visibility and refreshed social previews depend on platforms recrawling the published site; rankings are not guaranteed. This ZIP does not update Instagram or other social accounts.
