/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Itineraries index moved to match live URL
      { source: "/itineraries", destination: "/new-zealand-travel-itineraries", permanent: true },

      // Short-slug shortcuts -> full category routes
      { source: "/itineraries/lifestyle", destination: "/itineraries/lifestyle-and-nature", permanent: true },
      { source: "/itineraries/lifestyle/:slug", destination: "/itineraries/lifestyle-and-nature/:slug", permanent: true },
      { source: "/itineraries/nature", destination: "/itineraries/lifestyle-and-nature", permanent: true },
      { source: "/itineraries/nature/:slug", destination: "/itineraries/lifestyle-and-nature/:slug", permanent: true },
      { source: "/itineraries/honeymoon", destination: "/itineraries/honeymoon-packages-new-zealand", permanent: true },
      { source: "/itineraries/honeymoon/:slug", destination: "/itineraries/honeymoon-packages-new-zealand/:slug", permanent: true },
      { source: "/itineraries/family", destination: "/itineraries/family-friendly-holidays", permanent: true },
      { source: "/itineraries/family/:slug", destination: "/itineraries/family-friendly-holidays/:slug", permanent: true },
      { source: "/itineraries/south-island", destination: "/itineraries/south-island-travel-itineraries", permanent: true },
      { source: "/itineraries/south-island/:slug", destination: "/itineraries/south-island-travel-itineraries/:slug", permanent: true },
      { source: "/itineraries/australia-nz", destination: "/itineraries/australia-and-new-zealand", permanent: true },
      { source: "/itineraries/australia-nz/:slug", destination: "/itineraries/australia-and-new-zealand/:slug", permanent: true },

      // Live guestnewzealand.com legacy category slugs -> new unified slugs (SEO preservation)
      { source: "/itineraries/natures-best-new-zealand", destination: "/itineraries/lifestyle-and-nature", permanent: true },
      { source: "/itineraries/natures-best-new-zealand/:slug", destination: "/itineraries/lifestyle-and-nature/:slug", permanent: true },
      { source: "/itineraries/unique-new-zealand", destination: "/itineraries/unique-travel-new-zealand", permanent: true },
      { source: "/itineraries/unique-new-zealand/:slug", destination: "/itineraries/unique-travel-new-zealand/:slug", permanent: true },
      { source: "/itinerary-categories/unique-new-zealand", destination: "/itineraries/unique-travel-new-zealand", permanent: true },
      { source: "/itinerary-categories/unique-new-zealand/:slug", destination: "/itineraries/unique-travel-new-zealand/:slug", permanent: true },
      { source: "/itineraries/fiji", destination: "/itineraries/australia-and-new-zealand", permanent: true },
      { source: "/itineraries/fiji/:slug", destination: "/itineraries/australia-and-new-zealand/:slug", permanent: true },
      { source: "/itineraries/australia", destination: "/itineraries/australia-and-new-zealand", permanent: true },
      { source: "/itineraries/australia/:slug", destination: "/itineraries/australia-and-new-zealand/:slug", permanent: true },
      { source: "/itineraries/motorhome-holiday-new-zealand", destination: "/itineraries", permanent: true },
      { source: "/itineraries/motorhome-holiday-new-zealand/:slug", destination: "/itineraries", permanent: true },

      // Prior internal slugs from earlier rebrand pass -> current slugs
      { source: "/itineraries/new-zealand-lifestyle-holidays", destination: "/itineraries/lifestyle-and-nature", permanent: true },
      { source: "/itineraries/new-zealand-lifestyle-holidays/:slug", destination: "/itineraries/lifestyle-and-nature/:slug", permanent: true },
      { source: "/itineraries/family-holiday-new-zealand", destination: "/itineraries/family-friendly-holidays", permanent: true },
      { source: "/itineraries/family-holiday-new-zealand/:slug", destination: "/itineraries/family-friendly-holidays/:slug", permanent: true },
      { source: "/itineraries/new-zealand-and-australia-vacation-packages", destination: "/itineraries/australia-and-new-zealand", permanent: true },
      { source: "/itineraries/new-zealand-and-australia-vacation-packages/:slug", destination: "/itineraries/australia-and-new-zealand/:slug", permanent: true },

      // Blog legacy redirects
      { source: "/blog", destination: "/new-zealand-travel-blog", permanent: true },
      { source: "/blog/:slug", destination: "/:slug", permanent: true },
      { source: "/new-zealand-travel-blogs", destination: "/new-zealand-travel-blog", permanent: true },
      { source: "/new-zealand-travel-blogs/:slug", destination: "/:slug", permanent: true },
    ];
  },
};

export default nextConfig;
