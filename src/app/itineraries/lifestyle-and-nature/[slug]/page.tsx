import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getItinerary, getItinerariesByCategory } from "@/data/itineraries";
import ItineraryDetail from "@/components/ItineraryDetail";
import RichItineraryDetail from "@/components/RichItineraryDetail";
import type { RichItinerary } from "@/data/rich-itineraries/types";
import { itin12DaysNewZealandNorthSouthItinerary } from "@/data/rich-itineraries/12-days-new-zealand-north-south-itinerary";
import { itin15DayNewZealandPurePlacesVisit } from "@/data/rich-itineraries/15-day-new-zealand-pure-places-visit";
import { itin16DayNewZealandHikingTrip } from "@/data/rich-itineraries/16-day-new-zealand-hiking-trip";
import { itin18DayNewZealandItinerary } from "@/data/rich-itineraries/18-day-new-zealand-itinerary";

const richItineraries: Record<string, RichItinerary> = {
  [itin12DaysNewZealandNorthSouthItinerary.slug]: itin12DaysNewZealandNorthSouthItinerary,
  [itin15DayNewZealandPurePlacesVisit.slug]: itin15DayNewZealandPurePlacesVisit,
  [itin16DayNewZealandHikingTrip.slug]: itin16DayNewZealandHikingTrip,
  [itin18DayNewZealandItinerary.slug]: itin18DayNewZealandItinerary,
};

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return getItinerariesByCategory("lifestyle-and-nature").map((i) => ({ slug: i.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const canonical = `/itineraries/lifestyle-and-nature/${params.slug}`;
  const rich = richItineraries[params.slug];
  if (rich) {
    return {
      title: `${rich.title} | Guest New Zealand`,
      description: rich.metaDescription,
      alternates: { canonical },
      openGraph: {
        type: "article",
        url: canonical,
        title: rich.title,
        description: rich.metaDescription,
      },
    };
  }
  const itinerary = getItinerary("lifestyle-and-nature", params.slug);
  if (!itinerary) return {};
  return {
    title: `${itinerary.title} | Guest New Zealand`,
    description: itinerary.intro,
    alternates: { canonical },
    openGraph: {
      type: "article",
      url: canonical,
      title: itinerary.title,
      description: itinerary.intro,
    },
  };
}

export default function LifestyleAndNatureItineraryPage({ params }: Props) {
  const rich = richItineraries[params.slug];
  if (rich) {
    return <RichItineraryDetail itinerary={rich} />;
  }
  const itinerary = getItinerary("lifestyle-and-nature", params.slug);
  if (!itinerary) notFound();
  return <ItineraryDetail itinerary={itinerary} />;
}
