# Jpk Console X

Static website for GitHub Pages.

## Files
- `index.html` – home page
- `download.html` – "Ready to download?" page with the download list
- `style.css` – styling

## Setup
1. Create a GitHub repository and upload all of these files.
2. Open `download.html`, find `PASTE_YOUR_DISCORD_LINK_HERE` and replace it with your exe's direct link.
3. Repo **Settings → Pages → Deploy from a branch → main / (root)** → Save.
4. Your site appears at `https://YOUR-USERNAME.github.io/REPO-NAME/`.

## Notes
- Discord attachment links expire, so the button can stop working. A GitHub Release asset link
  (up to 2 GB per file) is permanent and works the same way: just paste that URL instead.
- To list more files, copy the `<li class="dl-item">` block in `download.html`.
