import Link from "next/link";
import { Itinerary } from "@/data/itineraries";

export default function ItineraryCard({ itinerary }: { itinerary: Itinerary }) {
  return (
    <Link
      href={`/itineraries/${itinerary.categorySlug}/${itinerary.slug}`}
      className="bg-white rounded-lg p-6 hover:shadow-md transition-shadow group border border-gray-100"
    >
      <span className="inline-block bg-gold/40 text-sage text-xs font-bold px-3 py-1 rounded-full mb-3">
        {itinerary.duration}
      </span>
      <h3 className="text-xl font-bold text-dark mb-2 group-hover:text-sage transition-colors">
        {itinerary.title}
      </h3>
      <p className="text-dark/50 text-sm line-clamp-3 mb-4">{itinerary.intro}</p>
      <span className="text-sage font-semibold text-sm group-hover:underline">
        View Itinerary <i className="fa-solid fa-arrow-right text-xs" />
      </span>
    </Link>
  );
}
