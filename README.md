# Madar Integrated Creativity — website

Bilingual (Arabic RTL default, English LTR at `/en/`) static website built with [Astro](https://astro.build).

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs static site to dist/
```

## Where to edit content

| What | File |
| --- | --- |
| Company name, WhatsApp, email, phone, social links | `src/data/site.ts` |
| Services (set `confirmed: true` once approved) | `src/data/services.ts` |
| Portfolio projects and categories | `src/data/projects.ts` |
| Home page copy (Arabic + English) | `src/i18n/home.ts` |
| Colours, spacing, fonts | `src/styles/global.css` |
| Logo (temporary wordmark) | `src/components/Logo.astro` |

Empty values in `site.ts` hide the related UI (e.g. the WhatsApp button appears only once a number is set).

## Adding portfolio work

1. Video: `scripts/encode-video.sh "<source.mp4>" <slug> <preview_start_sec> [poster_sec]`
   creates `public/work/<slug>.mp4` (~720p, max ~20 MB), `<slug>-preview.mp4` (6 s muted loop) and `<slug>.jpg` (poster). Requires ffmpeg.
   Photo: save as `public/work/<slug>.webp` (max 1600 px on the long side).
2. Add an entry to `projects` in `src/data/projects.ts` with the same slug, category and orientation.

Cloudflare Pages rejects files over 25 MiB, so keep each video under that. For long films, prefer YouTube/Vimeo.

## Quote form

Submissions are sent by [Web3Forms](https://web3forms.com) (free tier) to Madar's email.
Create an access key with the official email and set `PUBLIC_WEB3FORMS_KEY` in the hosting environment (see `.env.example`).

## Deploy (Cloudflare Pages, free)

1. Cloudflare dashboard → Workers & Pages → Create → Pages → connect this GitHub repo.
2. Build command `npm run build`, output directory `dist`.
3. Add `PUBLIC_WEB3FORMS_KEY` under Settings → Environment variables.
4. Custom domains → add the domain, then update the DNS records at Hostinger as Cloudflare instructs.
5. Update `SITE_URL` in `astro.config.mjs` and the sitemap line in `public/robots.txt` to the final domain.

## Before launch checklist

- [ ] Official logo and brand colours
- [ ] Confirmed services list
- [ ] Confirm client names may be shown publicly
- [ ] Official showreel (hero currently loops a montage of portfolio clips)
- [ ] WhatsApp number, email, phone, social links
- [ ] Final domain in `astro.config.mjs` and `robots.txt`
