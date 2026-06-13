Google Search Console Verification Guide

This file helps you register and verify https://webifyservices.ca/ (or your local/test URL) in Google Search Console and request indexing.

Options for verification (Google will give you a token when you add a property):

1) Meta tag (recommended, quick)
- In Search Console choose "URL prefix" (e.g., https://webifyservices.ca).
- Select "HTML tag" verification method.
- Google will provide a meta tag like:

  <meta name="google-site-verification" content="REPLACE_WITH_TOKEN" />

- Add that meta tag inside the <head> of your site. Example (replace token):

  <!-- GOOGLE-SITE-VERIFICATION: replace CONTENT value with token from Search Console -->
  <meta name="google-site-verification" content="REPLACE_WITH_TOKEN" />

- Commit and deploy/push so Google can see it at your site root.

2) HTML file upload (alternative)
- Google may give you a filename like "googleXXXXXXXXXXXX.html" with a token inside.
- Create that file and place it in `artifacts/webify/public/` so it is served at `https://your-site/googleXXXXXXXXXXXX.html`.

Commands to add and push (run in repo root):

```powershell
cd d:\Gabin\Webify
git add artifacts/webify/index.html artifacts/webify/public/googleXXXXXXXXXXXX.html
git commit -m "chore: add Google Search Console verification"
git push origin main
```

After verification
- In Search Console, use URL Inspection -> enter your homepage URL -> Request Indexing.
- Submit a sitemap (if you have one) at `https://your-site/sitemap.xml` via the Sitemaps tool.

Notes and tips
- Use the META tag method for the fastest workflow.
- If your site uses HTTPS and a canonical domain, verify the exact URL prefix (https://www vs https://).
- I cannot complete the Search Console registration for you because it requires your Google account sign-in. I can add the meta tag or verification file to the repo and push it; you'll then finish verification in Search Console and request indexing.

If you want, reply with the verification token Google provides and I will add the meta tag or verification file to the project and push it for you.
