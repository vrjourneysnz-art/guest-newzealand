import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getItinerary, getItinerariesByCategory } from "@/data/itineraries";
import ItineraryDetail from "@/components/ItineraryDetail";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return getItinerariesByCategory("lifestyle-and-nature").map((i) => ({ slug: i.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const itinerary = getItinerary("lifestyle-and-nature", params.slug);
  if (!itinerary) return {};
  return {
    title: `${itinerary.title} | Guest New Zealand`,
    description: itinerary.intro,
  };
}

export default function LifestyleNatureItineraryPage({ params }: Props) {
  const itinerary = getItinerary("lifestyle-and-nature", params.slug);
  if (!itinerary) notFound();
  return <ItineraryDetail itinerary={itinerary} />;
}
