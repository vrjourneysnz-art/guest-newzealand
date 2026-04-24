import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getItinerary, getItinerariesByCategory } from "@/data/itineraries";
import ItineraryDetail from "@/components/ItineraryDetail";
import RichItineraryDetail from "@/components/RichItineraryDetail";
import type { RichItinerary } from "@/data/rich-itineraries/types";
import { itin12DaysNorthIslandNewZealand } from "@/data/rich-itineraries/12-days-north-island-new-zealand";
import { itin12DaysSouthIslandHiddenTreasures } from "@/data/rich-itineraries/12-days-south-island-hidden-treasures";
import { itin14DaysGolfingNewZealand } from "@/data/rich-itineraries/14-days-golfing-new-zealand";
import { newZealandLotrLocations } from "@/data/rich-itineraries/new-zealand-lotr-locations";

const richItineraries: Record<string, RichItinerary> = {
  [itin12DaysNorthIslandNewZealand.slug]: itin12DaysNorthIslandNewZealand,
  [itin12DaysSouthIslandHiddenTreasures.slug]: itin12DaysSouthIslandHiddenTreasures,
  [itin14DaysGolfingNewZealand.slug]: itin14DaysGolfingNewZealand,
  [newZealandLotrLocations.slug]: newZealandLotrLocations,
};

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return getItinerariesByCategory("unique-travel-new-zealand").map((i) => ({ slug: i.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const canonical = `/itineraries/unique-travel-new-zealand/${params.slug}`;
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
  const itinerary = getItinerary("unique-travel-new-zealand", params.slug);
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

export default function UniqueTravelNewZealandItineraryPage({ params }: Props) {
  const rich = richItineraries[params.slug];
  if (rich) {
    return <RichItineraryDetail itinerary={rich} />;
  }
  const itinerary = getItinerary("unique-travel-new-zealand", params.slug);
  if (!itinerary) notFound();
  return <ItineraryDetail itinerary={itinerary} />;
}
