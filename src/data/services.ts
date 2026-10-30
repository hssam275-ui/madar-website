// Proposed service list from the project brief.
// `confirmed: false` = not yet approved by Madar. Set to true (or remove the entry) before launch.

export type Service = {
  slug: string;
  icon: string;
  confirmed: boolean;
  ar: { title: string; summary: string };
  en: { title: string; summary: string };
};

export const services: Service[] = [
  {
    slug: 'media-production',
    icon: 'film',
    confirmed: false,
    ar: {
      title: 'الإنتاج الإعلامي',
      summary: 'أفلام تعريفية وإعلانات ومحتوى مرئي للعلامات التجارية، من كتابة الفكرة حتى النسخة النهائية.',
    },
    en: {
      title: 'Media Production',
      summary: 'Brand films, commercials and corporate video, from the first idea to the final cut.',
    },
  },
  {
    slug: 'photo-video',
    icon: 'camera',
    confirmed: false,
    ar: {
      title: 'التصوير الفوتوغرافي والفيديو',
      summary: 'تصوير المنتجات والفعاليات والشخصيات والمواقع بجودة سينمائية تناسب كل منصة.',
    },
    en: {
      title: 'Photography & Video',
      summary: 'Product, event, portrait and location shoots with a cinematic finish for every platform.',
    },
  },
  {
    slug: 'podcast',
    icon: 'mic',
    confirmed: false,
    ar: {
      title: 'إنتاج البودكاست',
      summary: 'من تطوير فكرة البرنامج وإعداد الحلقات إلى التصوير والمونتاج والنشر.',
    },
    en: {
      title: 'Podcast Production',
      summary: 'Show concept, episode prep, multi-camera recording, editing and publishing.',
    },
  },
  {
    slug: 'studio-rental',
    icon: 'studio',
    confirmed: false,
    ar: {
      title: 'تجهيز وتأجير الاستوديوهات والمعدات',
      summary: 'استوديو مجهز ومعدات تصوير وصوت وإضاءة بالساعة أو باليوم، مع فريق فني عند الحاجة.',
    },
    en: {
      title: 'Studio & Equipment Rental',
      summary: 'Equipped studio space plus camera, audio and lighting kits, hourly or daily, with crew on request.',
    },
  },
  {
    slug: 'content-creation',
    icon: 'spark',
    confirmed: false,
    ar: {
      title: 'صناعة المحتوى',
      summary: 'محتوى مستمر لمنصات التواصل: ريلز وفيديوهات قصيرة وتصاميم بخطة نشر واضحة.',
    },
    en: {
      title: 'Content Creation',
      summary: 'Ongoing social content: reels, short-form video and design, built around a clear publishing plan.',
    },
  },
  {
    slug: 'marketing',
    icon: 'target',
    confirmed: false,
    ar: {
      title: 'الحلول التسويقية',
      summary: 'حملات وخطط تسويق رقمي تربط المحتوى بأهداف قابلة للقياس.',
    },
    en: {
      title: 'Marketing Solutions',
      summary: 'Digital campaigns and marketing plans that tie content to measurable goals.',
    },
  },
  {
    slug: 'business-development',
    icon: 'growth',
    confirmed: false,
    ar: {
      title: 'تطوير الأعمال',
      summary: 'دعم الشركات في بناء الحضور والشراكات وفرص النمو في السوق السعودي.',
    },
    en: {
      title: 'Business Development',
      summary: 'Helping companies build presence, partnerships and growth opportunities in the Saudi market.',
    },
  },
  {
    slug: 'creative-consulting',
    icon: 'compass',
    confirmed: false,
    ar: {
      title: 'الاستشارات الإبداعية',
      summary: 'رأي خبير في الفكرة والرسالة والاتجاه البصري قبل أن تبدأ الإنتاج.',
    },
    en: {
      title: 'Creative Consulting',
      summary: 'Expert input on concept, message and visual direction before production begins.',
    },
  },
];
