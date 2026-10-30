// Portfolio entries. All current entries are PLACEHOLDERS (placeholder: true) and show a
// visible "sample" badge. Replace with real, publish-approved projects before launch.

export type Project = {
  slug: string;
  service: string; // matches a Service slug
  placeholder: boolean;
  image?: string; // path under /public, e.g. /work/project-1.jpg
  hue: number; // fallback gradient tint while there is no image
  ar: { title: string; client: string; category: string };
  en: { title: string; client: string; category: string };
};

export const projects: Project[] = [
  {
    slug: 'sample-brand-film',
    service: 'media-production',
    placeholder: true,
    hue: 32,
    ar: { title: 'فيلم تعريفي لعلامة تجارية', client: 'اسم العميل', category: 'إنتاج إعلامي' },
    en: { title: 'Brand film', client: 'Client name', category: 'Media production' },
  },
  {
    slug: 'sample-podcast',
    service: 'podcast',
    placeholder: true,
    hue: 200,
    ar: { title: 'موسم بودكاست', client: 'اسم العميل', category: 'بودكاست' },
    en: { title: 'Podcast season', client: 'Client name', category: 'Podcast' },
  },
  {
    slug: 'sample-product-shoot',
    service: 'photo-video',
    placeholder: true,
    hue: 350,
    ar: { title: 'تصوير منتجات', client: 'اسم العميل', category: 'تصوير' },
    en: { title: 'Product shoot', client: 'Client name', category: 'Photography' },
  },
  {
    slug: 'sample-event',
    service: 'photo-video',
    placeholder: true,
    hue: 260,
    ar: { title: 'تغطية فعالية', client: 'اسم العميل', category: 'فيديو' },
    en: { title: 'Event coverage', client: 'Client name', category: 'Video' },
  },
  {
    slug: 'sample-social',
    service: 'content-creation',
    placeholder: true,
    hue: 150,
    ar: { title: 'حملة محتوى للتواصل الاجتماعي', client: 'اسم العميل', category: 'صناعة محتوى' },
    en: { title: 'Social content campaign', client: 'Client name', category: 'Content' },
  },
  {
    slug: 'sample-campaign',
    service: 'marketing',
    placeholder: true,
    hue: 15,
    ar: { title: 'إطلاق حملة تسويقية', client: 'اسم العميل', category: 'تسويق' },
    en: { title: 'Campaign launch', client: 'Client name', category: 'Marketing' },
  },
];
