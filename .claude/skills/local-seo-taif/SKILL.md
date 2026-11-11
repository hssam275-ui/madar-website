---
name: local-seo-taif
description: Local SEO for Madar in Taif and nearby centers (Qiya etc.) - keyword map, Google Business Profile, NAP consistency, LocalBusiness schema, local landing pages and articles. Use when asked about ranking in Taif, "سيو محلي", "الظهور في الطائف", خرائط جوجل, Google Business, or a new city/service page.
---

# السيو المحلي — الطائف

مدار تخدم الطائف ومراكزها (منها مركز قيا، وعملاؤها الحاليون مثل بلدية قيا وجمعية إبصار)، والهدف الظهور في بحث "خدمة + الطائف" وفي خرائط جوجل، ثم التوسع للمملكة.

## خريطة الكلمات المفتاحية (صفحة واحدة لكل نية بحث، بلا تكرار)

| نية البحث | الصفحة المستهدفة الحالية |
| --- | --- |
| وكالة دعاية وإعلان الطائف / شركة تسويق الطائف | `/blog/best-advertising-agency-taif/` (+ الرئيسية) |
| تصوير احترافي الطائف / مصور الطائف | `/blog/professional-photography-taif/` |
| تنظيم/تغطية فعاليات الطائف، احتفالات | `/blog/events-celebrations-taif/` |
| حملات اليوم الوطني / يوم التأسيس الطائف | `/blog/national-day-founding-day-campaigns-taif/` |
| مطبعة الطائف / طباعة الطائف | `/blog/printing-services-taif/` + `/services/print/` |
| هدايا دعائية الطائف | `/blog/corporate-gifts-taif/` |
| إنتاج فيديو / شركة إنتاج إعلامي الطائف | `/services/media/` (تحتاج تعزيز محلي) |

فرص لم تُغطَّ بعد (انظر `docs/site-plan.md`): تصوير درون الطائف، تصوير منتجات الطائف، إنتاج بودكاست الطائف، تصوير مطاعم الطائف، تصميم هوية الطائف، صفحة "مدار في الطائف" (صفحة موقع حقيقية لا مقال).

قبل كتابة صفحة جديدة: `grep -ril "<الكلمة>" src/content/blog src/i18n` للتأكد أنها لا تنافس صفحة موجودة (cannibalization). لو موجودة، حسّن الموجودة بدل إنشاء جديدة.

## Google Business Profile (أعلى أثر محلي، مجاني)

المستخدم هو من ينشئه (يحتاج حساب جوجل وتحقق). جهّز له:
- الاسم بالضبط: "مدار الإبداع المتكامل" (بدون حشو كلمات).
- الفئة الأساسية: Video production service، وفئات ثانوية: Photographer, Advertising agency, Printing service, Marketing agency.
- منطقة الخدمة: الطائف + المراكز المحيطة (لو لا يوجد مقر يستقبل العملاء، أخفِ العنوان واستخدم Service area).
- الوصف (750 حرف) + قائمة الخدمات + 10 صور حقيقية من `public/work/` + رابط الموقع مع `?utm_source=gbp`.
- خطة مراجعات: اطلب من كل عميل منتهٍ تقييمًا برابط مباشر؛ لا مراجعات مزيفة أبدًا.

## اتساق NAP

الاسم + الهاتف + المدينة يجب أن تكون متطابقة حرفيًا في: `src/data/site.ts`، الفوتر، GBP، إنستجرام/لينكد إن، أي دليل أعمال. حاليًا `whatsapp` و`phone` و`city` فارغة في `site.ts` — **لا تملأها بدون تأكيد المستخدم**. عند التأكيد: `city: { ar: 'الطائف', en: 'Taif' }`.

## البيانات المنظمة المحلية

عند توفر المدينة والهاتف المؤكدين، أضف في `src/layouts/Base.astro` نوع `ProfessionalService` (أو `LocalBusiness`) بجانب Organization:
`name`, `url`, `telephone`, `email`, `areaServed` (City: Taif + الدولة), `address.addressLocality: 'Taif'`, `addressCountry: 'SA'`, `sameAs` للحسابات. لا `aggregateRating` إلا من مراجعات حقيقية معروضة على الصفحة.

## قواعد المحتوى المحلي

- اذكر أماكن ومناسبات حقيقية بالطائف فقط عندما تكون صحيحة (موسم الطائف، الورد الطائفي، الهدا والشفا، سوق عكاظ) وبدون ادعاء أن مدار عملت فيها إلا بتأكيد.
- اربط كل مقال محلي بصفحة الخدمة المناسبة وبمقالين محليين آخرين.
- استخدم أعمالًا حقيقية من `src/data/projects.ts` كدليل (بلدية قيا، جمعية إبصار) بدل الادعاءات العامة.
- لا أسعار ولا أعداد فريق ولا سنوات خبرة غير مؤكدة.
