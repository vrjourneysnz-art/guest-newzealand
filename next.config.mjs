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

      // Travel Information sub-pages — common legacy/alternative slugs
      { source: "/travel-information/helpful-travel-tips", destination: "/travel-information/travel-tips", permanent: true },
      { source: "/travel-information/visiting-places-new-zealand", destination: "/travel-information/places-new-zealand", permanent: true },
      { source: "/travel-information/new-zealand-holiday-planning", destination: "/travel-planning", permanent: true },
      { source: "/travel-information/new-zealand-maps", destination: "/travel-information/detailed-new-zealand-maps", permanent: true },
      { source: "/travel-information/travel-distances", destination: "/travel-information/new-zealand-travel-distances", permanent: true },
      { source: "/travel-information/travel-providers", destination: "/travel-information", permanent: true },
      { source: "/travel-information/boutique-travel-providers", destination: "/travel-information", permanent: true },

      // About-Us legacy paths
      { source: "/about-us", destination: "/", permanent: true },
      { source: "/about-us/holiday-planning-new-zealand", destination: "/travel-planning", permanent: true },
      { source: "/about-us/driver-guide", destination: "/about-us/personal-new-zealand-driver-guide", permanent: true },

      // Legacy WordPress XML sitemap URLs → the new Next.js sitemap
      { source: "/sitemap_index.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/page-sitemap.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/post-sitemap.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/category-sitemap.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/itinerary-sitemap.xml", destination: "/sitemap.xml", permanent: true },

      // Common legacy WordPress / contact-form paths
      { source: "/customised-itinerary-quote", destination: "/travel-planning", permanent: true },
      { source: "/contact", destination: "/travel-planning", permanent: true },
      { source: "/contact-us", destination: "/travel-planning", permanent: true },
      { source: "/terms", destination: "/", permanent: true },

      // WordPress trailing-slash author/feed URLs that crawlers may probe
      { source: "/feed", destination: "/", permanent: true },
      { source: "/feed/:path*", destination: "/", permanent: true },
      { source: "/author/:path*", destination: "/", permanent: true },
      { source: "/category/:path*", destination: "/new-zealand-travel-blog", permanent: true },
      { source: "/tag/:path*", destination: "/new-zealand-travel-blog", permanent: true },
    ];
  },
};

export default nextConfig;
