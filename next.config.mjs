import withPWA from "@ducanh2912/next-pwa";

const nextConfig = {
    // Your Next.js config
};

export default withPWA({
    ...nextConfig,
    pwa: {
        dest: "public",
    }
});