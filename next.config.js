/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true
    },
    i18n: {
        localeDetection: true,
        locales: ['vi', 'en'],
        defaultLocale: 'vi'
    }
}

module.exports = nextConfig
