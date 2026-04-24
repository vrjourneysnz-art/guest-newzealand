import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Personal New Zealand Driver Guide | Guest New Zealand",
  description:
    "Private, individually tailored driver-guide service throughout New Zealand. Hidden, authentic places shown by an experienced local. Bookings 3–14 days.",
};

const benefits = [
  {
    icon: "fa-route",
    title: "Wealth of Local Knowledge",
    body: "Years of travel experience and an intimate understanding of New Zealand&apos;s lesser-known corners.",
  },
  {
    icon: "fa-language",
    title: "Multi-Lingual",
    body: "German, French and English-speaking drivers available depending on your needs.",
  },
  {
    icon: "fa-id-card",
    title: "Fully Licensed",
    body: "All drivers hold a current New Zealand Passenger Transport Licence.",
  },
];

const inclusions = [
  "All transport running costs (petrol, insurance)",
  "Driver accommodation and meals on multi-day tours",
  "Premium vehicle provision",
  "Daily availability 8am–6pm, with emergency support after hours",
];

const arrangements = [
  "Custom tours for 1–8 people",
  "Itinerary planning to your exact requirements",
  "Hotel and tour reservations arranged on your behalf",
  "A complete authentic, personalised New Zealand experience",
];

export default function PersonalDriverGuidePage() {
  return (
    <>
      <PageHeader>
        <Link href="/" className="text-gold text-sm hover:underline mb-4 inline-block">
          <i className="fa-solid fa-arrow-left text-xs mr-1" /> Back to Home
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Personal New Zealand Driver Guide</h1>
        <p className="text-white/70 text-lg max-w-2xl mx-auto">
          Seamless, private travel throughout New Zealand — an experienced driver-guide who knows the hidden
          and authentic corners locals love.
        </p>
      </PageHeader>

      <section className="py-16 bg-sage-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Intro */}
          <div className="bg-white rounded-lg p-8 border border-gray-100">
            <p className="text-dark/70 leading-relaxed mb-4">
              Do you want seamless and easy travelling in New Zealand? An experienced New Zealand
              driver-guide will show you hidden and authentic places, acting as both your designated driver
              and personal assistant.
            </p>
            <p className="text-dark/70 leading-relaxed">
              This is a private, individually tailored service. Bookings range from <strong>3 to 14 days</strong>
              and cover the entire country.
            </p>
            <a
              href="https://geni.us/AirportTransfers"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-5 bg-sage text-white px-6 py-3 rounded font-semibold hover:bg-sage-dark transition-colors"
            >
              <i className="fa-solid fa-magnifying-glass text-sm mr-2" />
              Check Personal Driver availability
              <i className="fa-solid fa-arrow-up-right-from-square text-xs ml-2" />
            </a>
          </div>

          {/* Why Use a Personal Driver */}
          <div>
            <h2 className="text-2xl font-bold text-dark mb-5">Why Use a Personal Driver?</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {benefits.map((b) => (
                <div key={b.title} className="bg-white rounded-lg p-6 border border-gray-100">
                  <div className="w-12 h-12 bg-gold/40 rounded-full flex items-center justify-center mb-3">
                    <i className={`fa-solid ${b.icon} text-sage`} />
                  </div>
                  <h3 className="font-bold text-dark mb-2">{b.title}</h3>
                  <p
                    className="text-dark/60 text-sm"
                    dangerouslySetInnerHTML={{ __html: b.body }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Multi-Day Inclusions */}
          <div className="bg-white rounded-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-dark mb-4">Available for Multi-Day, Overnight Travel</h2>
            <p className="text-dark/70 mb-4">
              Multi-day bookings are fully inclusive — no surprise add-ons:
            </p>
            <ul className="space-y-2">
              {inclusions.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-dark/70">
                  <i className="fa-solid fa-check text-sage mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* All Arrangements */}
          <div className="bg-white rounded-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-dark mb-4">All Arrangements Made for You</h2>
            <ul className="space-y-2">
              {arrangements.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-dark/70">
                  <i className="fa-solid fa-check text-sage mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Driver Profiles */}
          <div>
            <h2 className="text-2xl font-bold text-dark mb-5">Meet Our Drivers</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-6 border border-gray-100">
                <h3 className="text-xl font-bold text-dark mb-2">Roam James</h3>
                <p className="text-sage text-sm font-semibold mb-3">Private Driver — based in Nelson</p>
                <p className="text-dark/60 text-sm mb-4">
                  Offers a premium classic-vehicle experience, perfect for travellers who want something a
                  little more memorable than a standard transfer.
                </p>
                <a
                  href="https://www.roamjames.co.nz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sage font-semibold hover:underline text-sm"
                >
                  Visit roamjames.co.nz
                  <i className="fa-solid fa-arrow-up-right-from-square text-xs ml-1" />
                </a>
              </div>

              <div className="bg-white rounded-lg p-6 border border-gray-100">
                <h3 className="text-xl font-bold text-dark mb-2">Michael Nees</h3>
                <p className="text-sage text-sm font-semibold mb-3">
                  Private Driver — North &amp; South Island
                </p>
                <p className="text-dark/60 text-sm mb-4">
                  Originally from Germany (arrived in NZ in 1986) and tour guiding since 1988. Passionate
                  about the outdoors, New Zealand history, birdlife, food, wines, swimming and cycling.
                </p>
                <div className="flex flex-wrap gap-3 text-sm">
                  <a
                    href="https://bit.ly/3x77fwE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sage font-semibold hover:underline"
                  >
                    Google Reviews
                    <i className="fa-solid fa-arrow-up-right-from-square text-xs ml-1" />
                  </a>
                  <a
                    href="https://nz.linkedin.com/in/michaelnees"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sage font-semibold hover:underline"
                  >
                    LinkedIn
                    <i className="fa-solid fa-arrow-up-right-from-square text-xs ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Related Links */}
          <div className="bg-white rounded-lg p-8 border border-gray-100">
            <h2 className="text-xl font-bold text-dark mb-4">Related Reading</h2>
            <div className="grid sm:grid-cols-2 gap-3 text-sm">
              <Link href="/travel-planning" className="text-sage font-semibold hover:underline">
                <i className="fa-solid fa-arrow-right text-xs mr-1" /> Why Guest holiday planning?
              </Link>
              <Link href="/travel-information/travel-tips" className="text-sage font-semibold hover:underline">
                <i className="fa-solid fa-arrow-right text-xs mr-1" /> Helpful travel tips
              </Link>
              <Link
                href="/travel-information/detailed-new-zealand-maps"
                className="text-sage font-semibold hover:underline"
              >
                <i className="fa-solid fa-arrow-right text-xs mr-1" /> Detailed New Zealand maps
              </Link>
              <Link
                href="/travel-information/boutique-travel-providers"
                className="text-sage font-semibold hover:underline"
              >
                <i className="fa-solid fa-arrow-right text-xs mr-1" /> Boutique travel providers
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-sage rounded-lg p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-3">Ready to travel with a personal driver?</h2>
            <p className="text-white/85 mb-5">
              Get in touch and we&apos;ll match you with the right driver-guide for your dates and route.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/travel-planning"
                className="inline-block bg-white text-sage px-6 py-3 rounded font-semibold hover:bg-gold hover:text-dark transition-colors"
              >
                Plan My Trip
              </Link>
              <a
                href="tel:+6421629498"
                className="inline-block border border-white text-white px-6 py-3 rounded font-semibold hover:bg-white hover:text-sage transition-colors"
              >
                <i className="fa-solid fa-phone text-sm mr-2" />
                +64 21 629 498
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
