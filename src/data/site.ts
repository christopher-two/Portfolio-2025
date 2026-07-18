export const siteUrl = 'https://www.christopher.com.mx';
export const siteName = 'Christopher Two';
export const siteDescription = 'Portfolio de Christopher Alejandro Maldonado Chávez: productos multiplataforma con Kotlin, Android, Astro, IA y Cloudflare.';

export const authorSchema = {
  '@type': 'Person',
  '@id': `${siteUrl}/bio#person`,
  name: 'Christopher Alejandro Maldonado Chávez',
  url: `${siteUrl}/bio`,
  jobTitle: 'Desarrollador multiplataforma',
  description: 'Desarrollador especializado en Kotlin Multiplatform, Jetpack Compose, Android, Astro y Cloudflare.',
  email: 'mailto:hola@christopher.com.mx',
  worksFor: {
    '@type': 'Organization',
    name: 'Override',
    url: `${siteUrl}/override`,
  },
  sameAs: [
    'https://github.com/christopher-two',
    'https://www.linkedin.com/in/christopher-two/',
    'https://www.instagram.com/christopher_two_/',
    'https://www.youtube.com/@ChristopherTwo',
  ],
  knowsAbout: [
    'Kotlin Multiplatform',
    'Jetpack Compose',
    'Android development',
    'Astro',
    'Cloudflare Workers',
    'Clean Architecture',
    'Artificial intelligence',
  ],
};
