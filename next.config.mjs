/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.pexels.com"
            },
        ],
        domains: [
            "via.placeholder.com",
            "elearningindustry.com",
            "miro.medium.com",
            "private-user-images.githubusercontent.com"
        ],
    }
};

export default nextConfig;
