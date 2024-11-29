const _title = 'Osman KOÇ - Software Engineer | Portfolio & Blog';
const _description = 'I develop web-based applications professionally. I also develop mobile applications and open source software for hobby purposes. You can review what is published on GitHub, Google Play Store and AppStore.';
const _keywords = ['Osman KOÇ', 'Osman Koc', 'osmankoc', 'osmkoc', 'kocosman', 'koc osman', 'dev', 'developer', 'kocosm', 'blog', 'medium'];
const _url = 'https://osmankoc.dev';

export const sharedMetadata = {
    title: _title,
    description: _description,
    keywords: _keywords,
    openGraph: {
      title: _title,
      description: _description,
      url: _url,
      siteName: _title,
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: _title,
          type: 'image/png',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: _title,
      description: _description,
      images: ['/og-image.png'],
    },
  };
  