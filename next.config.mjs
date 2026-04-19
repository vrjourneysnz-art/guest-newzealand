/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/itineraries/family",
        destination: "/itineraries/family-holiday-new-zealand",
        permanent: true,
      },
      {
        source: "/itineraries/family/:slug",
        destination: "/itineraries/family-holiday-new-zealand/:slug",
        permanent: true,
      },
      {
        source: "/itineraries/lifestyle",
        destination: "/itineraries/new-zealand-lifestyle-holidays",
        permanent: true,
      },
      {
        source: "/itineraries/lifestyle/:slug",
        destination: "/itineraries/new-zealand-lifestyle-holidays/:slug",
        permanent: true,
      },
      {
        source: "/itineraries/honeymoon",
        destination: "/itineraries/honeymoon-packages-new-zealand",
        permanent: true,
      },
      {
        source: "/itineraries/honeymoon/:slug",
        destination: "/itineraries/honeymoon-packages-new-zealand/:slug",
        permanent: true,
      },
      {
        source: "/itineraries/australia-nz",
        destination: "/itineraries/new-zealand-and-australia-vacation-packages",
        permanent: true,
      },
      {
        source: "/itineraries/australia-nz/:slug",
        destination: "/itineraries/new-zealand-and-australia-vacation-packages/:slug",
        permanent: true,
      },
      {
        source: "/blog",
        destination: "/new-zealand-travel-blog",
        permanent: true,
      },
      {
        source: "/blog/:slug",
        destination: "/:slug",
        permanent: true,
      },
      {
        source: "/new-zealand-travel-blogs",
        destination: "/new-zealand-travel-blog",
        permanent: true,
      },
      {
        source: "/new-zealand-travel-blogs/:slug",
        destination: "/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
