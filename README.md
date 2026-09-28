# A&H Techworld — static site

Plain HTML/CSS/JS (no build step). Dark polished redesign of [ahtech.world](https://www.ahtech.world/), ready to drop onto Vercel.

## What’s inside

| Path | What |
|---|---|
| `index.html` | Homepage (hero → logos → cases → disciplines → team → process → CTA) |
| `about.html` | Team placeholders, how we work, company facts |
| `work.html` + `work/*.html` | Case index + AutomateOnline / KibRide / Mituteed / Säästupark |
| `contact.html` | Form (Formspree placeholder) + mailto |
| `privacy.html` `terms.html` `cookies.html` `security.html` | Plain-English legal |
| `404.html` | Friendly not-found |
| `css/` `js/` `fonts/` `images/` | Assets (fonts + images self-hosted) |
| `vercel.json` | `cleanUrls`, old-route redirects, security headers |
| `sitemap.xml` `robots.txt` | SEO basics |

## Replace before going live

1. **Team** — in `about.html` and the homepage team strip: real names, bios, LinkedIn URLs, photos in `images/team/`. Search for `REPLACE (Holden)` / `Team member name`.
2. **Email** — confirm `hello@ahtech.world` is a live inbox/forward (domain MX is Namecheap email forwarding). Search for `TO CONFIRM`.
3. **Contact form** — create a Formspree form, put the ID in `contact.html` (`action="https://formspree.io/f/REPLACE_WITH_FORM_ID"`). Until then the form tells visitors to email instead of submitting.
4. **Testimonials** — add real, permissioned quotes to the `TESTIMONIALS` array in `js/main.js`. The section stays hidden while the array is empty. Do not invent quotes.
5. **Legal details** — company name / HE 494576 / Orfeos 2B address came from third-party Cyprus registry mirrors. Verify against the official Registrar of Companies before relying on them.
6. **Mituteed logo** — `images/clients/mituteed.svg` is a stand-in glyph; swap for a real brand mark if you have one.
7. Optional: review the legal page templates with a Cyprus-qualified adviser.

## Deploy on Vercel

### (a) From this folder (CLI or drag-and-drop)

**CLI (recommended):**
```bash
npm i -g vercel          # once
cd /path/to/this/folder  # the folder that contains index.html
vercel                   # preview
vercel --prod            # production
```
Log in when prompted, link to the existing `ahtech.world` project (or create a new one), framework preset **Other**, no build command, output directory `.` (root).

**Vercel Drop (drag-and-drop):** unzip this archive, then open [vercel.com/drop](https://vercel.com/drop) and drag the **folder** that contains `index.html` onto the page (Vercel Drop deploys a folder; a zip is not the input — unzip first). Choose a team/project name and Deploy. No Git or CLI needed. Docs: [Deploying to Vercel](https://vercel.com/docs/deployments/deployment-methods).

### (b) Via GitHub

1. Push this folder to a GitHub repo (contents at repo root, `index.html` at top level).
2. Vercel → **Add New… → Project** → Import the repo.
3. Framework Preset: **Other**. Build Command: leave empty. Output Directory: leave empty / `.`. Root Directory: `.`.
4. Deploy. Every push to the production branch redeploys.

### Point ahtech.world at it

In the Vercel project → **Settings → Domains**:
- Add `ahtech.world` and `www.ahtech.world`.
- Vercel will show the DNS records. Today `www` already CNAMEs to `cname.vercel-dns.com` and apex `A` is `76.76.21.21` (Vercel). If you create a **new** project, either transfer the domain from the old Lovable project or update DNS to the records Vercel shows for the new one, then remove the domain from the old project so only one project owns it.
- Prefer apex → Vercel and `www` → apex (or the reverse with a redirect). HTTPS is automatic once DNS propagates.

`vercel.json` already turns `/ourworks`, `/why-us`, `/capabilities`, `/ai` into redirects so old SPA links keep working.

## Local preview

```bash
cd /path/to/this/folder
python3 -m http.server 8080
# open http://127.0.0.1:8080/
```

Because `cleanUrls` is a Vercel feature, locally use `/about.html` or run a tiny static server that maps extensionless paths; on Vercel `/about` works.
