export default function sitemap() {
    return [
      {
        url: 'https://raghavj.vercel.app/',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
      },
      {
        url: 'https://raghavj.vercel.app/#about',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://raghavj.vercel.app/#skills',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.5,
      },
      {
        url: 'https://raghavj.vercel.app/#experience',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.5,
      },
      {
        url: 'https://raghavj.vercel.app/#contact',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.5,
      },

    ]
  }