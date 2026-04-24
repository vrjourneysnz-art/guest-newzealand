import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "New Zealand Travel Distances | Guest New Zealand",
  description:
    "New Zealand travel distances charts and maps showing major towns and tourist destinations — a great way to plan realistic driving times for your NZ trip.",
};

const tips = [
  {
    icon: "fa-car",
    title: "Rental Car",
    body: "Plan around an average speed of 80 km/h. Add buffer time for stops, photos and weather.",
  },
  {
    icon: "fa-caravan",
    title: "Motorhome / Campervan",
    body: "Plan around an average speed of 60 km/h. Heavier and longer to slow down on winding roads.",
  },
  {
    icon: "fa-mountain-sun",
    title: "Winding Roads",
    body: "Northland, Bay of Islands and the Coromandel are deceptively slow — international travellers regularly underestimate these regions.",
  },
];

export default function NewZealandTravelDistancesPage() {
  return (
    <>
      <PageHeader>
        <Link href="/travel-information" className="text-gold text-sm hover:underline mb-4 inline-block">
          <i className="fa-solid fa-arrow-left text-xs mr-1" /> Back to Travel Information
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">New Zealand Travel Distances</h1>
        <p className="text-white/70 text-lg max-w-2xl mx-auto">
          Distance charts and realistic drive-time guidance for both islands — so your NZ road trip stays on
          schedule.
        </p>
      </PageHeader>

      <section className="py-16 bg-sage-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Intro */}
          <div className="bg-white rounded-lg p-8 border border-gray-100">
            <p className="text-dark/70 leading-relaxed">
              New Zealand travel distance charts and maps, showing major towns and tourist destinations, are
              a great way to plan your NZ trip. All distances are measured in kilometres
              (1 km = 0.62 miles). Use them as a starting point, then add buffer time for the photo stops
              you&apos;ll inevitably want to make.
            </p>
          </div>

          {/* Tip Cards */}
          <div className="grid sm:grid-cols-3 gap-4">
            {tips.map((tip) => (
              <div key={tip.title} className="bg-white rounded-lg p-6 border border-gray-100">
                <div className="w-12 h-12 bg-gold/40 rounded-full flex items-center justify-center mb-3">
                  <i className={`fa-solid ${tip.icon} text-sage`} />
                </div>
                <h3 className="font-bold text-dark mb-2">{tip.title}</h3>
                <p className="text-dark/60 text-sm">{tip.body}</p>
              </div>
            ))}
          </div>

          {/* North Island Section */}
          <div className="bg-white rounded-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-dark mb-4">North Island Travel Distances</h2>
            <p className="text-dark/70 leading-relaxed mb-3">
              When travelling the North Island, you&apos;ll need to factor in the many winding roads
              throughout the landscape. This is especially true in <strong>Northland</strong>, the
              <strong> Bay of Islands</strong> and the <strong>Coromandel</strong> — three regions
              international travellers regularly underestimate.
            </p>
            <p className="text-dark/70 leading-relaxed">
              Stick to shorter daily distances (under 300 km) and you&apos;ll have time to actually enjoy
              what you came for.
            </p>
            <Link
              href="/new-zealand-travel-itineraries"
              className="inline-block mt-5 text-sage font-semibold hover:underline text-sm"
            >
              <i className="fa-solid fa-arrow-right text-xs mr-1" />
              View sample North Island itineraries
            </Link>
          </div>

          {/* South Island Section */}
          <div className="bg-white rounded-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-dark mb-4">South Island Travel Distances</h2>
            <p className="text-dark/70 leading-relaxed">
              The South Island has more open space and the roads are often straighter — especially when you
              start your journey from Christchurch heading south or out to the West Coast. Be aware though
              that the alpine passes (Arthur&apos;s Pass, Lewis Pass, Haast Pass) and the Milford Road
              require extra time and respect for changing weather.
            </p>
            <Link
              href="/itineraries/south-island-travel-itineraries"
              className="inline-block mt-5 text-sage font-semibold hover:underline text-sm"
            >
              <i className="fa-solid fa-arrow-right text-xs mr-1" />
              View sample South Island itineraries
            </Link>
          </div>

          {/* Helpful External Tools */}
          <div className="bg-white rounded-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-dark mb-4">Helpful External Tools</h2>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://www.aa.co.nz/travel/time-and-distance-calculator/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sage font-semibold hover:underline"
                >
                  AA New Zealand Time &amp; Distance Calculator
                  <i className="fa-solid fa-arrow-up-right-from-square text-xs ml-1" />
                </a>
                <span className="text-dark/60"> — official AA tool for road distances and drive times.</span>
              </li>
              <li>
                <a
                  href="https://geni.us/RentalCarOptions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sage font-semibold hover:underline"
                >
                  Compare quality rental cars at affordable prices
                  <i className="fa-solid fa-arrow-up-right-from-square text-xs ml-1" />
                </a>
              </li>
              <li>
                <a
                  href="https://geni.us/CamperOptions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sage font-semibold hover:underline"
                >
                  Wide range of motorhomes &amp; campervans
                  <i className="fa-solid fa-arrow-up-right-from-square text-xs ml-1" />
                </a>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="bg-sage rounded-lg p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-3">Need help building a realistic route?</h2>
            <p className="text-white/85 mb-5">
              We&apos;ll structure your itinerary around realistic drive times so you actually get to enjoy
              the places you visit.
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
