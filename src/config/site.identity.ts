export const siteIdentity = {
  code: process.env.NEXT_PUBLIC_SITE_CODE || 'am2x8v4q7m',
  name: process.env.NEXT_PUBLIC_SITE_NAME || 'Aerial Matrix',
  tagline: process.env.NEXT_PUBLIC_SITE_TAGLINE || 'Image discovery platform',
  description:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
    'An image-led platform for galleries, visual publishing, and media-rich discovery.',
  domain: process.env.NEXT_PUBLIC_SITE_DOMAIN || 'aerialmatrix.com',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://aerialmatrix.com',
  ogImage: process.env.NEXT_PUBLIC_SITE_OG_IMAGE || '/og-default.png',
  googleMapsEmbedApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY || 'AIzaSyBco7dIECu3rJWjP3J0MImnR_uxlbeqAe0',

} as const

export const defaultAuthorProfile = {
  name: siteIdentity.name,
  avatar: '/placeholder.svg?height=80&width=80',
} as const

