# LoanChain Web

Página web informativa oficial de **LoanChain** — ahorro colectivo transparente para tu comunidad. Sitio estático construido con Next.js (App Router), TypeScript y Tailwind CSS, listo para desplegar en Vercel.

## 🚀 Comandos

```bash
npm install        # instalar dependencias
npm run dev        # entorno de desarrollo → http://localhost:3000
npm run build      # build de producción
npm run lint       # ESLint
npm start          # servir el build de producción
```

## 🗂️ Estructura

```
src/
├── app/
│   ├── layout.tsx           # Layout raíz: metadata SEO, Navbar, Footer
│   ├── page.tsx             # Página principal + datos estructurados (JSON-LD)
│   ├── globals.css          # Sistema de diseño: tema oscuro fintech, utilidades
│   ├── icon.svg             # Favicon (marca de cadena)
│   ├── opengraph-image.tsx  # Imagen Open Graph generada automáticamente
│   ├── robots.ts            # robots.txt
│   └── sitemap.ts           # sitemap.xml
├── components/
│   ├── sections/            # Hero, HowItWorks, Features, Community, FAQ, Contact
│   ├── Navbar.tsx           # Barra de navegación fija con menú móvil
│   ├── Footer.tsx
│   ├── Logo.tsx             # Marca LoanChain (SVG)
│   ├── Icon.tsx             # Set de íconos stroke
│   ├── PhoneMockup.tsx      # Mockup CSS de la app móvil
│   └── Reveal.tsx           # Animación de aparición al hacer scroll
└── lib/
    ├── site.ts              # Configuración central del sitio (URL, correo, TRINODE)
    └── content.ts           # Contenido editorial (secciones, FAQ, características)
```

## 📝 Contenido y fuentes

Todo el contenido editorial proviene de los documentos oficiales del proyecto:

- `LoanChain_App_Specification_Requirements_System_Docs.docx` (SRS)
- `Propuesta_Comercial_TRINODE_LoanChain_App.docx`

La información reflejada (cadenas de ahorro, microcréditos, cifrado AES-256,
modo Offline-First, notificaciones 24 h, estados de mora) corresponde a lo
documentado en esos archivos. La página incluye un aviso de que la aplicación
se encuentra en fase de desarrollo.

## 🔧 Configuración antes de publicar

Edita `src/lib/site.ts`:

| Campo | Uso |
|---|---|
| `url` | Dominio final del sitio (SEO, sitemap, Open Graph) |
| `email` | Correo destino del formulario de contacto |
| `trinode` | Datos de la empresa desarrolladora |

## ☁️ Despliegue en Vercel

1. Sube este repositorio a GitHub.
2. En [vercel.com](https://vercel.com) → *Add New Project* → importa el repo.
3. Framework preset: **Next.js** (auto detectado). No requiere variables de entorno.
4. Cada `push` a la rama principal genera un despliegue automático.

## ✨ Stack

- [Next.js 16](https://nextjs.org) (App Router, Server Components)
- React 19 · TypeScript · ESLint
- Tailwind CSS v4 (tema oscuro fintech: esmeralda + dorado)
- SEO: metadata, Open Graph, JSON-LD (FAQPage, Organization, WebSite), sitemap
