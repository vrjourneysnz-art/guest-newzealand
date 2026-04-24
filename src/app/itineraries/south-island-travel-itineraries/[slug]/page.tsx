import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getItinerary, getItinerariesByCategory } from "@/data/itineraries";
import ItineraryDetail from "@/components/ItineraryDetail";
import RichItineraryDetail from "@/components/RichItineraryDetail";
import type { RichItinerary } from "@/data/rich-itineraries/types";
import { itin12DaysNewZealandSouthIslandItinerary } from "@/data/rich-itineraries/12-days-new-zealand-south-island-itinerary";
import { itin18DaysSouthIslandTravelItinerary } from "@/data/rich-itineraries/18-days-south-island-travel-itinerary";
import { newZealandSouthIslandItinerary10Days } from "@/data/rich-itineraries/new-zealand-south-island-itinerary-10-days";

const richItineraries: Record<string, RichItinerary> = {
  [itin12DaysNewZealandSouthIslandItinerary.slug]: itin12DaysNewZealandSouthIslandItinerary,
  [itin18DaysSouthIslandTravelItinerary.slug]: itin18DaysSouthIslandTravelItinerary,
  [newZealandSouthIslandItinerary10Days.slug]: newZealandSouthIslandItinerary10Days,
};

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return getItinerariesByCategory("south-island-travel-itineraries").map((i) => ({ slug: i.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const canonical = `/itineraries/south-island-travel-itineraries/${params.slug}`;
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
  const itinerary = getItinerary("south-island-travel-itineraries", params.slug);
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

export default function SouthIslandTravelItinerariesItineraryPage({ params }: Props) {
  const rich = richItineraries[params.slug];
  if (rich) {
    return <RichItineraryDetail itinerary={rich} />;
  }
  const itinerary = getItinerary("south-island-travel-itineraries", params.slug);
  if (!itinerary) notFound();
  return <ItineraryDetail itinerary={itinerary} />;
}
