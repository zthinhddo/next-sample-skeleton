/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    loader: "akamai",
    path: "",
  },
};

export default nextConfig;
