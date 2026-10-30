// Proposed service list: media services from the project brief, print services added on request.
// `confirmed: false` = not yet approved by Madar. Set to true (or remove the entry) before launch.

export type ServiceGroup = 'media' | 'print';

export type Service = {
  slug: string;
  group: ServiceGroup;
  icon: string;
  confirmed: boolean;
  ar: { title: string; summary: string };
  en: { title: string; summary: string };
};

export const services: Service[] = [
  {
    slug: 'media-production',
    group: 'media',
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
    group: 'media',
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
    group: 'media',
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
    group: 'media',
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
    group: 'media',
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
    group: 'media',
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
    group: 'media',
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
    group: 'media',
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
  // Print services (proposed list, awaiting Madar's confirmation).
  {
    slug: 'print-identity',
    group: 'print',
    icon: 'card',
    confirmed: false,
    ar: {
      title: 'الهوية المطبوعة',
      summary: 'بطاقات أعمال وأوراق رسمية وظروف وملفات تحمل هوية شركتك بخامات وتشطيبات فاخرة.',
    },
    en: {
      title: 'Printed Brand Identity',
      summary: 'Business cards, letterheads, envelopes and folders in your brand identity, with premium paper and finishes.',
    },
  },
  {
    slug: 'marketing-print',
    group: 'print',
    icon: 'layers',
    confirmed: false,
    ar: {
      title: 'المطبوعات التسويقية',
      summary: 'بروشورات وفلايرز وكتيبات وكتالوجات منتجات، من التصميم إلى الطباعة والتسليم.',
    },
    en: {
      title: 'Marketing Print',
      summary: 'Brochures, flyers, booklets and product catalogues, from design to print and delivery.',
    },
  },
  {
    slug: 'large-format',
    group: 'print',
    icon: 'flag',
    confirmed: false,
    ar: {
      title: 'الطباعة الكبيرة واللوحات',
      summary: 'رول أب وبنرات ولوحات إعلانية وستاندات عرض للمحلات والمكاتب والمواقع الخارجية.',
    },
    en: {
      title: 'Large Format & Signage',
      summary: 'Roll-ups, banners, billboards and display stands for shops, offices and outdoor sites.',
    },
  },
  {
    slug: 'event-print',
    group: 'print',
    icon: 'badge',
    confirmed: false,
    ar: {
      title: 'مطبوعات الفعاليات والمعارض',
      summary: 'دعوات وبطاقات تعريف وخلفيات مسارح وتجهيز أركان المعارض بهوية موحدة.',
    },
    en: {
      title: 'Event & Exhibition Print',
      summary: 'Invitations, badges, stage backdrops and exhibition booth graphics in one consistent look.',
    },
  },
  {
    slug: 'packaging',
    group: 'print',
    icon: 'box',
    confirmed: false,
    ar: {
      title: 'التغليف والملصقات',
      summary: 'علب وأكياس وملصقات منتجات تُبرز علامتك على الرف وعند التسليم.',
    },
    en: {
      title: 'Packaging & Labels',
      summary: 'Boxes, bags and product labels that make your brand stand out on the shelf and at delivery.',
    },
  },
  {
    slug: 'promo-gifts',
    group: 'print',
    icon: 'gift',
    confirmed: false,
    ar: {
      title: 'الهدايا الدعائية',
      summary: 'أقلام وأكواب ودفاتر وملابس مطبوعة بشعارك للموظفين والعملاء والفعاليات.',
    },
    en: {
      title: 'Branded Merchandise',
      summary: 'Pens, mugs, notebooks and apparel printed with your logo for staff, clients and events.',
    },
  },
];

export const servicesIn = (group: ServiceGroup) => services.filter((s) => s.group === group);
