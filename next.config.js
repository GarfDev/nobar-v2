/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true
    },
    i18n: {
        localeDetection: true,
        locales: ['vi-VN', 'en-US'],
        defaultLocale: 'vi-VN'
    }
}

module.exports = nextConfig
