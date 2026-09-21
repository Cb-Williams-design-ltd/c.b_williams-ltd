[README.md](https://github.com/user-attachments/files/32490872/README.md)
# c.b_williams-ltd# C.B. Williams Ltd

A static, responsive website for website creation and device repair and upgrade enquiries. No build step, packages, API keys or backend are required.

## Upload and run on GitHub Pages

1. Create a GitHub repository (for example, `cb-williams-ltd`). A public repository works with GitHub Free.
2. Extract `cb-williams-ltd-github.zip`. Upload the extracted files, not the ZIP, to the repository root using **Add file → Upload files**, then commit to `main`. `index.html`, `styles.css`, and `script.js` must be at the top level, not inside another folder. Include `.nojekyll` if your file picker shows hidden files; if it does not, create an empty file named `.nojekyll` with **Add file → Create new file**.
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

## Sites source checkout

The Sites checkout additionally contains `.openai/hosting.json` and `dist/` for its existing hosting. These are not needed for GitHub Pages and are excluded from the ZIP. If editing this checkout, keep the three website files in `dist/` synchronized with the root files before publishing through Sites. The ZIP in `dist/` is the portable GitHub download.
