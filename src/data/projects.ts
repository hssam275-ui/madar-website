import { url } from '../utils/url';

// Portfolio. Media lives in /public/work (videos compressed to ~720p with scripts/encode-video.sh).
// Add a project: drop files in public/work, then add an entry below.

export type Category = 'ads' | 'reels' | 'gov' | 'podcast' | 'photo';

export const categories: { id: Category; ar: string; en: string }[] = [
  { id: 'ads', ar: 'إعلانات', en: 'Ads' },
  { id: 'reels', ar: 'ريلز', en: 'Reels' },
  { id: 'gov', ar: 'جهات حكومية وجمعيات', en: 'Government & non-profit' },
  { id: 'podcast', ar: 'بودكاست واستوديو', en: 'Podcast & studio' },
  { id: 'photo', ar: 'تصوير فوتوغرافي', en: 'Photography' },
];

export type Project = {
  slug: string;
  category: Category;
  kind: 'video' | 'image';
  orientation: 'landscape' | 'portrait';
  featured?: boolean; // shown large on the home page
  ar: { title: string; client: string; summary: string };
  en: { title: string; client: string; summary: string };
};

// Paths derived from slug: /work/<slug>.mp4, -preview.mp4, .jpg (video) or .webp (image).
export const media = (p: Project) =>
  p.kind === 'video'
    ? { src: url(`/work/${p.slug}.mp4`), preview: url(`/work/${p.slug}-preview.mp4`), poster: url(`/work/${p.slug}.jpg`) }
    : { src: url(`/work/${p.slug}.webp`), preview: '', poster: url(`/work/${p.slug}.webp`) };

// TODO (Madar): confirm each client name may be shown publicly.
export const projects: Project[] = [
  {
    slug: 'national-day-cafe',
    category: 'ads',
    kind: 'video',
    orientation: 'landscape',
    featured: true,
    ar: { title: 'إعلان اليوم الوطني السعودي 95', client: 'مقهى', summary: 'إعلان احتفالي بالعرضة والأجواء الوطنية داخل المقهى، صُوّر وأُنتج لليوم الوطني 2025.' },
    en: { title: 'Saudi National Day 95 promo', client: 'Café', summary: 'A celebratory café promo featuring the Ardah and National Day atmosphere, produced for September 2025.' },
  },
  {
    slug: 'qiya-eid-2025',
    category: 'gov',
    kind: 'video',
    orientation: 'landscape',
    featured: true,
    ar: { title: 'احتفالات عيد الفطر 2025', client: 'بلدية قيا', summary: 'تغطية جوية وأرضية لزينة المدينة واحتفالات العيد.' },
    en: { title: 'Eid al-Fitr celebrations 2025', client: 'Qiya Municipality', summary: 'Aerial and ground coverage of the city’s Eid decorations and celebrations.' },
  },
  {
    slug: 'qiya-national-day',
    category: 'gov',
    kind: 'video',
    orientation: 'landscape',
    ar: { title: 'احتفالات اليوم الوطني 95', client: 'بلدية قيا', summary: 'فيلم احتفالي يوثّق مسيرات اليوم الوطني والفروسية وزينة المدينة والحفل الرسمي، بلقطات جوية وأرضية.' },
    en: { title: 'National Day 95 celebrations', client: 'Qiya Municipality', summary: 'A celebratory film covering the National Day parades, horsemen, city decorations and the official ceremony, from the air and the ground.' },
  },
  {
    slug: 'ibsar-charity',
    category: 'gov',
    kind: 'video',
    orientation: 'landscape',
    featured: true,
    ar: { title: 'فيلم جمعية إبصار', client: 'جمعية إبصار', summary: 'فيلم يوثّق خدمات الجمعية وبرامجها ولقاءات مع فريقها والمستفيدين.' },
    en: { title: 'Ibsar Association film', client: 'Ibsar Association', summary: 'A documentary film on the association’s services and programmes, with team and beneficiary interviews.' },
  },
  {
    slug: 'vet-clinic-promo',
    category: 'ads',
    kind: 'video',
    orientation: 'portrait',
    ar: { title: 'إعلان العيادة البيطرية', client: 'عيادة بيطرية', summary: 'جولة سينمائية عمودية تعرض مرافق العيادة وخدماتها.' },
    en: { title: 'Veterinary clinic promo', client: 'Veterinary clinic', summary: 'A vertical cinematic tour of the clinic’s facilities and services.' },
  },
  {
    slug: 'shed-studio-reel',
    category: 'reels',
    kind: 'video',
    orientation: 'portrait',
    ar: { title: 'ريلز عروض الاستوديو', client: 'SHED Studio', summary: 'ريلز ترويجي لعروض تأجير الاستوديو بأسلوب حواري مباشر.' },
    en: { title: 'Studio offers reel', client: 'SHED Studio', summary: 'A direct-to-camera promo reel for studio rental offers.' },
  },
  {
    slug: 'business-academy-reel',
    category: 'reels',
    kind: 'video',
    orientation: 'portrait',
    ar: { title: 'ريلز شهادات إدارة المشاريع', client: 'أكاديمية اعمل بيزنس', summary: 'ريلز ترويجي لبرامج الشهادات الاحترافية بأسلوب حواري مع موشن جرافيك ونصوص متحركة.' },
    en: { title: 'Project management certificates reel', client: 'Aamal Business Academy', summary: 'A promo reel for professional certificate programmes, combining direct-to-camera delivery with motion graphics and captions.' },
  },
  {
    slug: 'english-academy-reel',
    category: 'reels',
    kind: 'video',
    orientation: 'portrait',
    ar: { title: 'ريلز أكاديمية لغة إنجليزية للأطفال', client: 'أكاديمية Moonglish الدولية', summary: 'جولة ريلز داخل الأكاديمية تعرّف بأسلوب تعليم الإنجليزية للأطفال ومرافقها.' },
    en: { title: 'Kids’ English academy reel', client: 'Moonglish International Academy', summary: 'A walkthrough reel of the academy, introducing its approach to teaching English to children and its facilities.' },
  },
  {
    slug: 'dental-reel',
    category: 'reels',
    kind: 'video',
    orientation: 'portrait',
    ar: { title: 'ريلز توعوي طبي', client: 'عيادة أسنان', summary: 'محتوى توعوي قصير مع طبيب، بنصوص متحركة ولقطات داعمة.' },
    en: { title: 'Medical awareness reel', client: 'Dental clinic', summary: 'Short educational content with a doctor, animated captions and B-roll.' },
  },
  {
    slug: 'podcast-session',
    category: 'podcast',
    kind: 'video',
    orientation: 'landscape',
    ar: { title: 'جلسة بودكاست', client: '', summary: 'تسجيل بودكاست بإضاءة وصوت احترافيين.' },
    en: { title: 'Podcast session', client: '', summary: 'A podcast recording with professional lighting and sound.' },
  },
  {
    slug: 'content-studio-setup',
    category: 'podcast',
    kind: 'image',
    orientation: 'landscape',
    ar: { title: 'تجهيز استوديو تسجيل', client: '', summary: 'تجهيز إضاءة وكاميرا وصوت لتسجيل محتوى تعليمي.' },
    en: { title: 'Recording studio setup', client: '', summary: 'Lighting, camera and audio set up for educational content.' },
  },
  {
    slug: 'green-screen-shoot',
    category: 'photo',
    kind: 'image',
    orientation: 'landscape',
    ar: { title: 'تصوير على الشاشة الخضراء', client: '', summary: 'جلسة تصوير داخل الاستوديو بخلفية كروما.' },
    en: { title: 'Green screen shoot', client: '', summary: 'An in-studio shoot on a chroma key backdrop.' },
  },
  {
    slug: 'product-apparel',
    category: 'photo',
    kind: 'image',
    orientation: 'portrait',
    ar: { title: 'تصوير منتجات ملابس', client: '', summary: 'تصوير منتجات على خلفية بيضاء جاهزة للمتاجر الإلكترونية.' },
    en: { title: 'Apparel product photography', client: '', summary: 'Clean white-background product shots ready for e-commerce.' },
  },
];
