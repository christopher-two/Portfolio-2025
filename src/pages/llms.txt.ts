import { projects } from '../data/portfolio';
import { siteUrl } from '../data/site';

export const prerender = true;

export function GET() {
  const body = `# Christopher Two

> Portfolio de Christopher Alejandro Maldonado Chávez, desarrollador multiplataforma especializado en Kotlin, Android, Web, Astro y Cloudflare Workers.

## Perfil

- Sitio: ${siteUrl}/landing
- Biografía: ${siteUrl}/bio
- Contacto: hola@christopher.com.mx
- Empresa: ${siteUrl}/override

## Áreas de experiencia

Christopher trabaja con Kotlin Multiplatform, Jetpack Compose, Android, arquitectura limpia, IA aplicada, Astro, CSS nativo, Cloudflare Workers y productos digitales multiplataforma.

## Proyectos

${projects.map((project) => `- [${project.title}](${siteUrl}/projects/${project.slug}): ${project.description}`).join('\n')}

## Navegación

- [Todos los proyectos](${siteUrl}/projects)
- [Resumen imprimible](${siteUrl}/projects/resume)
- [Contacto](${siteUrl}/landing#contact)
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
