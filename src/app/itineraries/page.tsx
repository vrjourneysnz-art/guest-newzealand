import type { Metadata } from "next";
import Link from "next/link";
import { categories } from "@/data/itineraries";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "New Zealand Travel Itineraries | Guest New Zealand",
  description:
    "Browse our curated collection of New Zealand travel itineraries — lifestyle & nature, honeymoon, family, South Island, and combined New Zealand & Australia trips.",
};

export default function ItinerariesPage() {
  return (
    <>
      <PageHeader>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          New Zealand Travel Itineraries
        </h1>
        <p className="text-white/70 text-lg max-w-2xl mx-auto">
          Explore our expertly crafted itineraries across six themes. Each trip is fully
          customisable to suit your travel style and preferences.
        </p>
      </PageHeader>

      <section className="py-16 bg-sage-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/itineraries/${cat.slug}`}
                className="bg-white rounded-lg p-8 hover:shadow-md transition-shadow group border border-gray-100"
              >
                <h2 className="text-2xl font-bold text-dark mb-3 group-hover:text-sage transition-colors">
                  {cat.title}
                </h2>
                <p className="text-dark/60 mb-4 text-sm">{cat.description}</p>
                <span className="text-sage font-semibold text-sm group-hover:underline">
                  View Itineraries <i className="fa-solid fa-arrow-right text-xs" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
