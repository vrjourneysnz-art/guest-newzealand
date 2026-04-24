import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getItinerary, getItinerariesByCategory } from "@/data/itineraries";
import ItineraryDetail from "@/components/ItineraryDetail";
import RichItineraryDetail from "@/components/RichItineraryDetail";
import type { RichItinerary } from "@/data/rich-itineraries/types";
import { itin21DayTripAustraliaAndNewZealand } from "@/data/rich-itineraries/21-day-trip-australia-and-new-zealand";
import { australiaNewZealand16Days } from "@/data/rich-itineraries/australia-new-zealand-16-days";
import { australiaNewZealand2Weeks } from "@/data/rich-itineraries/australia-new-zealand-2-weeks";
import { newzealandFijiHoneymoonVacation } from "@/data/rich-itineraries/newzealand-fiji-honeymoon-vacation";

const richItineraries: Record<string, RichItinerary> = {
  [itin21DayTripAustraliaAndNewZealand.slug]: itin21DayTripAustraliaAndNewZealand,
  [australiaNewZealand16Days.slug]: australiaNewZealand16Days,
  [australiaNewZealand2Weeks.slug]: australiaNewZealand2Weeks,
  [newzealandFijiHoneymoonVacation.slug]: newzealandFijiHoneymoonVacation,
};

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return getItinerariesByCategory("australia-and-new-zealand").map((i) => ({ slug: i.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const canonical = `/itineraries/australia-and-new-zealand/${params.slug}`;
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
  const itinerary = getItinerary("australia-and-new-zealand", params.slug);
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

export default function AustraliaAndNewZealandItineraryPage({ params }: Props) {
  const rich = richItineraries[params.slug];
  if (rich) {
    return <RichItineraryDetail itinerary={rich} />;
  }
  const itinerary = getItinerary("australia-and-new-zealand", params.slug);
  if (!itinerary) notFound();
  return <ItineraryDetail itinerary={itinerary} />;
}
