import type { Metadata } from "next";
import { getItinerariesByCategory } from "@/data/itineraries";
import ItineraryCard from "@/components/ItineraryCard";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Honeymoon Packages New Zealand | Guest New Zealand",
  description: "Romantic New Zealand honeymoon packages — luxury lodges, private experiences, and breathtaking destinations for couples.",
  alternates: { canonical: "/itineraries/honeymoon-packages-new-zealand" },
};

export default function HoneymoonPage() {
  const items = getItinerariesByCategory("honeymoon-packages-new-zealand");
  return (
    <>
      <PageHeader>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Honeymoon Packages</h1>
        <p className="text-white/70 text-lg max-w-2xl mx-auto">
          Romantic New Zealand escapes designed for couples — luxury, intimacy, and unforgettable moments.
        </p>
      </PageHeader>
      <section className="py-16 bg-sage-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {items.map((it) => <ItineraryCard key={it.slug} itinerary={it} />)}
          </div>
        </div>
      </section>
    </>
  );
}
