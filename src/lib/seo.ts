import type { Metadata } from 'next';

export const siteMetadata: Metadata = {
  metadataBase: new URL('https://www.edgeline-co.com'),
  title: {
    default: 'ELC Company (Edge Line) | مقاولات وتصميم وتنفيذ في الرياض',
    template: `%s | ELC Company (Edge Line)`,
  },
  description: 'شركة ELC (Edge Line) رائدة في خدمات المقاولات والتصميم الداخلي وإدارة المشاريع المتكاملة في الرياض، المملكة العربية السعودية. متخصصون في تحويل رؤيتك إلى واقع ملموس. Contact us at edgeline-co.com.',
  keywords: [
    'ELC',
    'Edge line',
    'ELC Company',
    'edgeline-co.com',
    'Construction in Riyadh',
    'Interior Design Saudi Arabia',
    'Turnkey Projects',
    'مقاولات عامة',
    'تصميم داخلي',
    'مشاريع تسليم مفتاح',
    'شركة مقاولات بالرياض',
    'افضل شركة تصميم داخلي',
    'ELC السعودية',
    'Edge Line KSA',
  ],
  authors: [{ name: 'ELC Company', url: 'https://www.edgeline-co.com' }],
  creator: 'ELC Company',
  icons: {
    icon: 'https://i.imgur.com/6Y7gfdU.png',
  },
};
