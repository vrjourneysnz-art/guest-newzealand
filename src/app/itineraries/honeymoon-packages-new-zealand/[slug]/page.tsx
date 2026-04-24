import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getItinerary, getItinerariesByCategory } from "@/data/itineraries";
import ItineraryDetail from "@/components/ItineraryDetail";
import RichItineraryDetail from "@/components/RichItineraryDetail";
import type { RichItinerary } from "@/data/rich-itineraries/types";
import { itin10DaysSouthIslandHoneymoon } from "@/data/rich-itineraries/10-days-south-island-honeymoon";
import { itin12DayNewZealandHoneymoonItinerary } from "@/data/rich-itineraries/12-day-new-zealand-honeymoon-itinerary";
import { itin14DaysHoneymoonPackageNz } from "@/data/rich-itineraries/14-days-honeymoon-package-nz";
import { itin16DaysActiveNzHoneymoon } from "@/data/rich-itineraries/16-days-active-nz-honeymoon";

const richItineraries: Record<string, RichItinerary> = {
  [itin10DaysSouthIslandHoneymoon.slug]: itin10DaysSouthIslandHoneymoon,
  [itin12DayNewZealandHoneymoonItinerary.slug]: itin12DayNewZealandHoneymoonItinerary,
  [itin14DaysHoneymoonPackageNz.slug]: itin14DaysHoneymoonPackageNz,
  [itin16DaysActiveNzHoneymoon.slug]: itin16DaysActiveNzHoneymoon,
};

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return getItinerariesByCategory("honeymoon-packages-new-zealand").map((i) => ({ slug: i.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const canonical = `/itineraries/honeymoon-packages-new-zealand/${params.slug}`;
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
  const itinerary = getItinerary("honeymoon-packages-new-zealand", params.slug);
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

export default function HoneymoonPackagesNewZealandItineraryPage({ params }: Props) {
  const rich = richItineraries[params.slug];
  if (rich) {
    return <RichItineraryDetail itinerary={rich} />;
  }
  const itinerary = getItinerary("honeymoon-packages-new-zealand", params.slug);
  if (!itinerary) notFound();
  return <ItineraryDetail itinerary={itinerary} />;
}
