import type { Metadata } from "next";
import { getItinerariesByCategory } from "@/data/itineraries";
import ItineraryCard from "@/components/ItineraryCard";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Unique Travel NZ Itineraries | Guest New Zealand",
  description: "Off-the-beaten-path New Zealand itineraries — LOTR film locations, North Island hidden treasures, golf tours, and themed adventures for travellers seeking something different.",
};

export default function UniqueTravelPage() {
  const items = getItinerariesByCategory("unique-travel-new-zealand");
  return (
    <>
      <PageHeader>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Unique Travel NZ</h1>
        <p className="text-white/70 text-lg max-w-2xl mx-auto">
          Themed New Zealand journeys for travellers who want something beyond the standard tourist route — LOTR sites, hidden regions, and special-interest tours.
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
