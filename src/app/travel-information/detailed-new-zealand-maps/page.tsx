import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Detailed New Zealand Maps | Guest New Zealand",
  description:
    "Detailed maps of New Zealand for your travel research — North Island and South Island maps with major towns, cities, roads, distances and travel times.",
};

const youtubeLinks = [
  { label: "NZ Trip Planning Playlist", href: "https://geni.us/NZTripSetup" },
  { label: "NZ Itinerary Samples Playlist", href: "https://geni.us/NZTravelPlan" },
  { label: "NZ Road Trips Playlist", href: "https://geni.us/NZRoadTrips" },
  { label: "NZ Visit Places Playlist", href: "https://geni.us/NZVisitPlaces" },
  { label: "NZ Must Do Playlist", href: "https://geni.us/NZMustDo" },
  { label: "Quality Rental Cars at Affordable Prices", href: "https://geni.us/RentalCarOptions" },
  { label: "Wide Range of Motorhomes & Campervans", href: "https://geni.us/CamperOptions" },
];

export default function DetailedNewZealandMapsPage() {
  return (
    <>
      <PageHeader>
        <Link href="/travel-information" className="text-gold text-sm hover:underline mb-4 inline-block">
          <i className="fa-solid fa-arrow-left text-xs mr-1" /> Back to Travel Information
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Detailed New Zealand Maps</h1>
        <p className="text-white/70 text-lg max-w-2xl mx-auto">
          A clear overview of major towns, cities, roads, rivers and lakes — perfect for getting your head around
          New Zealand before you travel.
        </p>
      </PageHeader>

      <section className="py-16 bg-sage-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="bg-white rounded-lg p-8 border border-gray-100">
            <p className="text-dark/70 leading-relaxed">
              There are a number of detailed maps of New Zealand you can use for your travel research. The
              listed PDF map will give you a clear overview of major towns, cities, roads, rivers and lakes —
              great for getting a general overview of New Zealand.
            </p>
            <a
              href="https://geni.us/NZTravelPlanner"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-5 bg-sage text-white px-6 py-3 rounded font-semibold hover:bg-sage-dark transition-colors"
            >
              <i className="fa-solid fa-download text-sm mr-2" />
              FREE NZ Travel Planning Sheet (PDF with Maps)
            </a>
          </div>

          {/* North Island */}
          <div className="bg-white rounded-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-dark mb-4">North Island New Zealand Map</h2>
            <p className="text-dark/70 leading-relaxed mb-4">
              The North Island map highlights the things to do and see across Northland, Auckland, Coromandel,
              Bay of Plenty, Rotorua, Taupō, Hawke&apos;s Bay and Wellington. Use it to scope out which regions
              you want to combine on a single trip.
            </p>
            <a
              href="https://geni.us/NZTravelPlanner"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sage font-semibold hover:underline text-sm"
            >
              Download the North Island map (PDF) <i className="fa-solid fa-arrow-up-right-from-square text-xs ml-1" />
            </a>
          </div>

          {/* YouTube Video Library */}
          <div className="bg-white rounded-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-dark mb-4">Helpful YouTube Video Links</h2>
            <p className="text-dark/70 mb-5">
              Visual research goes a long way. These curated playlists walk you through trip planning,
              sample itineraries, road trips and the must-do experiences across New Zealand.
            </p>
            <ul className="space-y-2">
              {youtubeLinks.map((link) => (
                <li key={link.href} className="flex items-start gap-2">
                  <i className="fa-brands fa-youtube text-red-600 mt-1" />
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sage hover:underline text-sm font-semibold"
                  >
                    {link.label}
                    <i className="fa-solid fa-arrow-up-right-from-square text-xs ml-1" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* South Island */}
          <div className="bg-white rounded-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-dark mb-4">South Island New Zealand Map</h2>
            <p className="text-dark/70 leading-relaxed mb-4">
              The South Island map gives you a clear picture of the activity highlights — from Marlborough
              and Nelson in the north, down through the West Coast glaciers, the Southern Alps, Queenstown,
              Fiordland and the Catlins.
            </p>
            <a
              href="https://geni.us/NZTravelPlanner"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sage font-semibold hover:underline text-sm"
            >
              Download the South Island map (PDF) <i className="fa-solid fa-arrow-up-right-from-square text-xs ml-1" />
            </a>
          </div>

          {/* Map of New Zealand by Google */}
          <div className="bg-white rounded-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-dark mb-4">Using Google Maps for NZ Trip Planning</h2>
            <p className="text-dark/70 leading-relaxed mb-4">
              In today&apos;s digital world, there are a number of tools you can use to make maps interactive
              and beneficial for your holiday. Google Maps is a great starting point — but be aware that
              <strong> driving times from A to B are often optimistic</strong>. For example, Google Maps lists
              Fox Glacier to Wānaka as 262 km / 3h 15m. We&apos;d suggest adding 15% more time (around 30–40
              minutes) on top.
            </p>
            <p className="text-dark/70 leading-relaxed">
              Most New Zealand roads are not highways but scenic routes that invite a &quot;stop and go&quot;
              style of travel. Always allow for weather and road conditions, and build in time for the photo
              stops you&apos;ll inevitably want to make.
            </p>
            <div className="grid sm:grid-cols-2 gap-3 mt-6 text-sm">
              <Link href="/travel-information/travel-tips" className="text-sage hover:underline font-semibold">
                <i className="fa-solid fa-arrow-right text-xs mr-1" /> Helpful New Zealand travel tips
              </Link>
              <Link
                href="/travel-information/places-new-zealand"
                className="text-sage hover:underline font-semibold"
              >
                <i className="fa-solid fa-arrow-right text-xs mr-1" /> Regions to visit in New Zealand
              </Link>
              <Link
                href="/travel-information/new-zealand-travel-distances"
                className="text-sage hover:underline font-semibold"
              >
                <i className="fa-solid fa-arrow-right text-xs mr-1" /> New Zealand travel distances
              </Link>
              <Link
                href="/travel-information/boutique-travel-providers"
                className="text-sage hover:underline font-semibold"
              >
                <i className="fa-solid fa-arrow-right text-xs mr-1" /> Boutique service providers we recommend
              </Link>
            </div>
          </div>

          {/* Walking and Hiking Maps */}
          <div className="bg-white rounded-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-dark mb-4">Walking and Hiking Maps</h2>
            <p className="text-dark/70 leading-relaxed">
              For walking and hiking maps across New Zealand&apos;s national parks and Great Walks, the
              Department of Conservation maintains a comprehensive online library of free downloadable maps.
            </p>
            <a
              href="https://www.doc.govt.nz/map/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-sage font-semibold hover:underline text-sm"
            >
              Visit the DOC online map library
              <i className="fa-solid fa-arrow-up-right-from-square text-xs ml-1" />
            </a>
          </div>

          {/* Distance Maps */}
          <div className="bg-white rounded-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-dark mb-4">North &amp; South Island Distance Maps</h2>
            <p className="text-dark/70 leading-relaxed mb-2">
              Remember to take into account the different types of roads you&apos;ll be travelling. Many
              New Zealand roads are quite flat, but there are some very winding sections — these will take
              longer than you think.
            </p>
            <p className="text-dark/60 text-sm italic">
              All distances shown in kilometres (1 km = 0.62 miles).
            </p>
          </div>

          {/* CTA */}
          <div className="bg-sage rounded-lg p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-3">Want help putting it all together?</h2>
            <p className="text-white/85 mb-5">
              This should be a very special trip for you, right? So why not use a local New Zealand travel
              expert to plan your special holiday.
            </p>
            <Link
              href="/travel-planning"
              className="inline-block bg-white text-sage px-6 py-3 rounded font-semibold hover:bg-gold hover:text-dark transition-colors"
            >
              Plan My Trip
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
