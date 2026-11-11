---
name: seo-audit
description: Technical SEO audit of the madaribda.com Astro site (titles, descriptions, schema, hreflang, links, alt, sitemap, speed) with a fix list. Use when asked to check/audit/improve SEO, "راجع السيو", "افحص الموقع", before a release, or after adding pages or articles.
---

# فحص السيو التقني لموقع مدار

الموقع: Astro 5 ثابت على GitHub Pages، الدومين madaribda.com، عربي RTL افتراضي + إنجليزي تحت `/en/`.
الخطة الكاملة والأولويات في `docs/site-plan.md`.

## الخطوات

1. ابنِ الموقع وشغّل الفاحص:
   ```bash
   npm ci && npm run build && node scripts/seo-check.mjs
   ```
   الفاحص يقرأ `dist/` ويطبع لكل صفحة: طول العنوان والوصف، عدد h1، canonical، hreflang، أنواع JSON-LD، صور بلا alt، روابط داخلية مكسورة. ويفحص مقالات `src/content/blog/` (عدد الكلمات، الروابط الداخلية، قسم الأسئلة الشائعة، الغلاف، ملخص "باختصار").
   - **ERROR** = لازم يتصلح قبل الدمج (exit code 1).
   - **warn** = تحسين؛ رتّبه حسب الأثر.

2. افحص يدويًا ما لا يغطيه السكربت:
   - `dist/sitemap-index.xml` فيه كل الصفحات، و`public/robots.txt` يشير له.
   - الصفحات الجديدة مربوطة من القائمة أو من مقالات أخرى (لا صفحة يتيمة).
   - صور `public/work` و`public/blog` بصيغة webp وعرض أقصى 1600px، والفيديو أقل من 20MB.
   - صفحة 404 موجودة؟ (`src/pages/404.astro`).
   - النسخة الإنجليزية: لكل صفحة عربية لها مقابل، `altPath` مضبوط في `PageShell`/`Base`.

3. السرعة: الموقع ثابت وCSS inline، فالمخاطر غالبًا في الفيديو والصور. تأكد أن فيديوهات المعاينة `-preview.mp4` قصيرة ومكتومة و`preload="none"` أو `metadata`.

4. اكتب النتيجة كجدول: المشكلة، الصفحات، الأثر (عالي/متوسط/منخفض)، الإصلاح المقترح، الملف.

## أين يتم الإصلاح

| المشكلة | الملف |
| --- | --- |
| العنوان/الوصف/canonical/hreflang/OG لكل الصفحات | `src/layouts/Base.astro` |
| schema المقال (BlogPosting) والغلاف | `src/pages/blog/[slug].astro` |
| schema الخدمات (ItemList/Service/Breadcrumb) | `src/components/ServicePage.astro` |
| FAQPage للرئيسية + نصوصها | `src/components/HomePage.astro`, `src/i18n/home.ts` |
| بيانات الشركة (Organization) | `src/data/site.ts` |
| العنوان والوصف للمقال | frontmatter في `src/content/blog/<slug>.md` |

## قواعد

- العنوان: الكلمة المفتاحية أولًا، أقل من ~60 حرفًا قبل لاحقة " | مدار الإبداع المتكامل". الوصف 120–160 حرفًا ويحتوي فائدة + دعوة.
- لا تخترع بيانات منظمة غير صحيحة (عنوان، تقييمات، أسعار، ساعات عمل). أي حقل غير مؤكد يُترك فارغًا في `site.ts`.
- لا تغيّر slug لصفحة منشورة إلا مع تحويل؛ GitHub Pages لا يدعم redirects من السيرفر، فالأفضل عدم تغيير الروابط أصلًا.
- لا تلمس سجلات DNS للبريد (MX/TXT) عند أي إعداد للدومين.
- بعد الإصلاح: أعد البناء وشغّل الفاحص، وأرفق الفرق (عدد الأخطاء/التحذيرات قبل وبعد) في الـ PR.
- البروكسي في بيئة Claude قد يمنع فتح madaribda.com مباشرة؛ افحص `dist/` أو فرع `gh-pages` بدلًا منه.
