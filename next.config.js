/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    i18n:{
      locales: ['en' , 'bn'],
      defaultLocale: 'en',
    }
  },
}

module.exports = nextConfig
