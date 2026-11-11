// /llms.txt: a plain summary of Madar for AI assistants and AI search (see .claude/skills/geo-ai-search).
// Built from the same data as the site, so new services and articles appear automatically.
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { site } from '../data/site';
import { services } from '../data/services';
import { url } from '../utils/url';

export const GET: APIRoute = async ({ site: base }) => {
  const abs = (p: string) => new URL(url(p), base).href;
  const posts = (await getCollection('blog', (p) => !p.data.draft)).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
  );
  const list = (group: 'media' | 'print') =>
    services
      .filter((s) => s.group === group)
      .map((s) => `  - ${s.ar.title} (${s.en.title}): ${s.ar.summary}`)
      .join('\n');

  const contact = [
    site.email && `- البريد: ${site.email}`,
    site.phone && `- الهاتف: ${site.phone}`,
    site.whatsapp && `- واتساب: https://wa.me/${site.whatsapp}`,
    `- طلب عرض سعر: ${abs('/#contact')}`,
  ]
    .filter(Boolean)
    .join('\n');

  const body = `# ${site.name.ar} (${site.name.en})

> ${site.name.ar} شركة سعودية للإنتاج الإعلامي والتصوير الفوتوغرافي والفيديو والبودكاست وصناعة المحتوى والطباعة والهدايا الدعائية والحلول التسويقية، تخدم الشركات والجهات الحكومية والجمعيات والعلامات التجارية في الطائف ومختلف مناطق المملكة.

${site.name.en} is a Saudi creative production company: video and photo production, drone filming, event coverage, podcast production, content creation, printing and branded gifts. Website in Arabic (default) and English (${abs('/en/')}).

## الخدمات

- [خدمات الإنتاج الإعلامي](${abs('/services/media/')})
${list('media')}

- [خدمات الطباعة](${abs('/services/print/')})
${list('print')}

## أعمال مختارة

معرض الأعمال في الصفحة الرئيسية: ${abs('/#work')}
من الجهات التي عملنا معها: بلدية قيا (احتفالات عيد الفطر واليوم الوطني)، وجمعية إبصار.

## التواصل

${contact}

## المقالات

${posts.map((p) => `- [${p.data.title}](${abs(`/blog/${p.id}/`)}): ${p.data.description}`).join('\n')}
`;

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
