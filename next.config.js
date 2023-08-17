/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',	
                hostname: 'image.dummyjson.com'
            }
        ]
    },
    experimental: {
        serverActions: true
    }
}


module.exports = nextConfig
