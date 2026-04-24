import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getItinerary, getItinerariesByCategory } from "@/data/itineraries";
import ItineraryDetail from "@/components/ItineraryDetail";
import RichItineraryDetail from "@/components/RichItineraryDetail";
import type { RichItinerary } from "@/data/rich-itineraries/types";
import { itin10DaysNewZealandFamilyVacation } from "@/data/rich-itineraries/10-days-new-zealand-family-vacation";
import { itin12DaysSouthIslandFamilyHoliday } from "@/data/rich-itineraries/12-days-south-island-family-holiday";
import { itin14DaysNewZealandFamilyItinerary } from "@/data/rich-itineraries/14-days-new-zealand-family-itinerary";
import { itin12DayNewZealandWithKidsVacation } from "@/data/rich-itineraries/12-day-new-zealand-with-kids-vacation";

const richItineraries: Record<string, RichItinerary> = {
  [itin10DaysNewZealandFamilyVacation.slug]: itin10DaysNewZealandFamilyVacation,
  [itin12DaysSouthIslandFamilyHoliday.slug]: itin12DaysSouthIslandFamilyHoliday,
  [itin14DaysNewZealandFamilyItinerary.slug]: itin14DaysNewZealandFamilyItinerary,
  [itin12DayNewZealandWithKidsVacation.slug]: itin12DayNewZealandWithKidsVacation,
};

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return getItinerariesByCategory("family-friendly-holidays").map((i) => ({ slug: i.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const canonical = `/itineraries/family-friendly-holidays/${params.slug}`;
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
  const itinerary = getItinerary("family-friendly-holidays", params.slug);
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

export default function FamilyFriendlyHolidaysItineraryPage({ params }: Props) {
  const rich = richItineraries[params.slug];
  if (rich) {
    return <RichItineraryDetail itinerary={rich} />;
  }
  const itinerary = getItinerary("family-friendly-holidays", params.slug);
  if (!itinerary) notFound();
  return <ItineraryDetail itinerary={itinerary} />;
}
