/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  env:{
    GOOGLE_MAPS_API_KEY:"AIzaSyBz3s047evEB4AQY2DiKiYln4WusffKh84"
  }
};

export default nextConfig;
