import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog";

const BASE_URL = "https://guestnewzealand.com";

// Static pages
const staticRoutes: string[] = [
  "",
  "/new-zealand-travel-itineraries",
  "/itineraries/lifestyle-and-nature",
  "/itineraries/unique-travel-new-zealand",
  "/itineraries/honeymoon-packages-new-zealand",
  "/itineraries/family-friendly-holidays",
  "/itineraries/south-island-travel-itineraries",
  "/itineraries/australia-and-new-zealand",
  "/travel-planning",
  "/travel-information",
  "/travel-information/travel-tips",
  "/travel-information/places-new-zealand",
  "/travel-information/detailed-new-zealand-maps",
  "/travel-information/new-zealand-travel-distances",
  "/about-us/personal-new-zealand-driver-guide",
  "/new-zealand-travel-blog",
];

// Itinerary slugs grouped by category — keep in sync with each [slug]/page.tsx lookup map.
const itinerarySlugs: Record<string, string[]> = {
  "lifestyle-and-nature": [
    "12-days-new-zealand-north-south-itinerary",
    "15-day-new-zealand-pure-places-visit",
    "16-day-new-zealand-hiking-trip",
    "18-day-new-zealand-itinerary",
  ],
  "unique-travel-new-zealand": [
    "12-days-north-island-new-zealand",
    "12-days-south-island-hidden-treasures",
    "14-days-golfing-new-zealand",
    "new-zealand-lotr-locations",
  ],
  "honeymoon-packages-new-zealand": [
    "10-days-south-island-honeymoon",
    "12-day-new-zealand-honeymoon-itinerary",
    "14-days-honeymoon-package-nz",
    "16-days-active-nz-honeymoon",
  ],
  "family-friendly-holidays": [
    "10-days-new-zealand-family-vacation",
    "12-days-south-island-family-holiday",
    "14-days-new-zealand-family-itinerary",
    "12-day-new-zealand-with-kids-vacation",
  ],
  "south-island-travel-itineraries": [
    "12-days-new-zealand-south-island-itinerary",
    "18-days-south-island-travel-itinerary",
    "new-zealand-south-island-itinerary-10-days",
  ],
  "australia-and-new-zealand": [
    "21-day-trip-australia-and-new-zealand",
    "australia-new-zealand-16-days",
    "australia-new-zealand-2-weeks",
    "newzealand-fiji-honeymoon-vacation",
  ],
};

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries = staticRoutes.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1.0 : 0.8,
  }));

  const itineraryEntries = Object.entries(itinerarySlugs).flatMap(
    ([category, slugs]) =>
      slugs.map((slug) => ({
        url: `${BASE_URL}/itineraries/${category}/${slug}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.9,
      })),
  );

  // Blog posts live at the root: /<slug> (matches the existing [slug]/page.tsx route)
  const blogEntries = blogPosts.map((post) => ({
    url: `${BASE_URL}/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...itineraryEntries, ...blogEntries];
}
