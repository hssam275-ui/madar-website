// Company-wide settings. Every value marked TODO must be confirmed by Madar before launch.
// Empty strings hide the related UI (e.g. no WhatsApp button until a number is set).

export const site = {
  name: { ar: 'مدار الإبداع المتكامل', en: 'Madar Integrated Creativity' },
  shortName: { ar: 'مدار', en: 'Madar' },
  // TODO: official WhatsApp number in international format, digits only, e.g. 9665XXXXXXXX
  whatsapp: '',
  email: 'info@madaribda.com',
  // TODO: official phone number for display
  phone: '',
  // TODO: city to show publicly (leave empty to hide)
  city: { ar: '', en: '' },
  // TODO: official social media links
  social: {
    instagram: '',
    x: '',
    linkedin: '',
    youtube: '',
    tiktok: '',
  },
};

export const whatsappLink = (message = '') =>
  site.whatsapp
    ? `https://wa.me/${site.whatsapp}${message ? `?text=${encodeURIComponent(message)}` : ''}`
    : '';
