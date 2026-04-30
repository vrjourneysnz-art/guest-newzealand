import type { Metadata } from "next";
import { getItinerariesByCategory } from "@/data/itineraries";
import ItineraryCard from "@/components/ItineraryCard";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "South Island Travel Itineraries | Guest New Zealand",
  description: "South Island New Zealand itineraries — alpine lakes, fiords, glaciers, and wine country. From 10-day samplers to 18-day deep dives.",
  alternates: { canonical: "/itineraries/south-island-travel-itineraries" },
};

export default function SouthIslandPage() {
  const items = getItinerariesByCategory("south-island-travel-itineraries");
  return (
    <>
      <PageHeader>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">South Island Travel Itineraries</h1>
        <p className="text-white/70 text-lg max-w-2xl mx-auto">
          The full South Island experience — Queenstown, Milford, Aoraki/Mt Cook, the West Coast, and the Catlins.
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
