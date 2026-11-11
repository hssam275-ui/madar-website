// Copy for the dedicated service pages (/services/media/, /services/print/).

export const servicePages = {
  media: {
    ar: {
      metaTitle: 'خدمات الإنتاج الإعلامي والتصوير والبودكاست | مدار',
      metaDescription:
        'خدمات الميديا من مدار في السعودية: الأفلام والإعلانات، والتصوير والفيديو، وإنتاج البودكاست، وتأجير الاستوديو، وصناعة المحتوى والتسويق.',
      eyebrow: 'خدمات الميديا',
      title: 'إنتاج مرئي وصوتي يحكي قصة علامتك',
      lead: 'من الإعلان التلفزيوني إلى ريلز الأسبوع، نتولى الفكرة والتصوير والمونتاج والنشر بفريق واحد.',
      workTitle: 'من أعمالنا في الميديا',
      workCta: 'شاهد كل الأعمال',
    },
    en: {
      metaTitle: 'Media Production, Video & Podcast Services | Madar',
      metaDescription:
        'Media services in Saudi Arabia: films and commercials, photo and video, podcast production, studio rental, content creation and marketing.',
      eyebrow: 'Media services',
      title: 'Video and audio that tell your brand’s story',
      lead: 'From a TV commercial to this week’s reels, one team handles the idea, filming, editing and publishing.',
      workTitle: 'Selected media work',
      workCta: 'See all work',
    },
  },
  print: {
    ar: {
      metaTitle: 'خدمات الطباعة والمطبوعات التسويقية | مدار الإبداع المتكامل',
      metaDescription:
        'خدمات الطباعة من مدار: بطاقات الأعمال والهوية المطبوعة، والبروشورات، والرول أب واللوحات، ومطبوعات المعارض، والتغليف والهدايا الدعائية.',
      eyebrow: 'خدمات المطبوعات',
      title: 'مطبوعات تليق بعلامتك، من التصميم حتى التسليم',
      lead: 'نجهز التصميم ونختار الخامة المناسبة ونتابع الطباعة والتشطيب، لتصلك مطبوعات بنفس جودة حضورك الرقمي.',
      stepsTitle: 'كيف نعمل على مطبوعاتك',
      steps: [
        { title: 'التصميم أو المراجعة', text: 'نصمم من الصفر بهوية علامتك، أو نراجع ملفاتك ونجهزها للطباعة.' },
        { title: 'اختيار الخامة', text: 'نقترح نوع الورق والمقاس والتشطيب المناسب للاستخدام والميزانية.' },
        { title: 'نموذج للاعتماد', text: 'نرسل لك بروفة رقمية، أو عينة مطبوعة عند الحاجة، قبل الطباعة النهائية.' },
        { title: 'الطباعة والتسليم', text: 'نطبع ونراجع الجودة ونسلم في الموعد المتفق عليه.' },
      ],
    },
    en: {
      metaTitle: 'Printing & Marketing Print Services | Madar Integrated Creativity',
      metaDescription:
        'Print services in Saudi Arabia: business cards and printed identity, brochures, roll-ups and signage, exhibition print, packaging and branded gifts.',
      eyebrow: 'Print services',
      title: 'Print worthy of your brand, from design to delivery',
      lead: 'We prepare the design, choose the right material and oversee printing and finishing, so your print matches the quality of your digital presence.',
      stepsTitle: 'How we handle your print',
      steps: [
        { title: 'Design or review', text: 'We design from scratch in your brand identity, or review your files and make them print-ready.' },
        { title: 'Choose materials', text: 'We recommend paper, size and finish to suit the use and the budget.' },
        { title: 'Proof for approval', text: 'You get a digital proof, or a printed sample when needed, before the final run.' },
        { title: 'Print & deliver', text: 'We print, check quality and deliver on the agreed date.' },
      ],
    },
  },
} as const;
