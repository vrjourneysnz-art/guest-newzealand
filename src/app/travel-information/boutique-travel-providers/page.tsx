import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Our Boutique Travel Providers | Guest New Zealand",
  description:
    "Hand-picked boutique accommodation, owner-operated tours and trusted travel resources across New Zealand — every provider personally visited and vetted by the Guest team.",
};

type ProviderLink = { label: string; href: string; note?: string };

const helpfulInfo: ProviderLink[] = [
  { label: "Adapter Guide (Worldwide)", href: "http://www.korjo.com" },
  { label: "Arts and Crafts Gallery New Zealand", href: "http://www.kiwiartz.com" },
  {
    label: "Driving a Rental Car in New Zealand — Quiz",
    href: "https://www.drivingtests.co.nz/roadcode/tourist/",
  },
  { label: "Events Calendar New Zealand", href: "https://www.newzealand.com/int/events/" },
  { label: "Gardens to Visit in New Zealand", href: "http://www.gardenstovisit.co.nz/" },
  { label: "Neuseeland für Deutsche", href: "http://neuseelandfuerdeutsche.com" },
  { label: "Statistics New Zealand", href: "http://www.stats.govt.nz/" },
  {
    label: "Travel Distances and Times — AA New Zealand",
    href: "https://www.aa.co.nz/travel/time-and-distance-calculator/",
  },
  { label: "Tourism New Zealand", href: "http://www.newzealand.com" },
  { label: "Wines of New Zealand", href: "http://www.winesofnz.com" },
];

const accommodation: ProviderLink[] = [
  { label: "Bed of Roses, Paihia", href: "http://bedofroses.co.nz/" },
  { label: "Breakers Boutique Accommodation, Greymouth", href: "http://www.breakers.co.nz/" },
  { label: "Brenton Lodge, Whangamatā / Coromandel", href: "http://www.brentonlodge.co.nz/" },
  { label: "Clifftops Retreat, Ruby Bay / Abel Tasman", href: "http://www.clifftops-retreat.co.nz/" },
  { label: "Eden Villa B&B, Auckland", href: "http://edenvilla.co.nz/" },
  { label: "Five Rivers Retreat, Southland", href: "http://www.fiveriversretreat.co.nz/" },
  {
    label: "Heritage Inns",
    href: "http://www.heritageinns.co.nz/",
    note: "Personally hosted, boutique luxury accommodation",
  },
  { label: "Mapua 41 Holiday Accommodation, Abel Tasman", href: "https://mapua41south.com/" },
  { label: "Mount Cook Lakeside Retreat", href: "https://www.mtcookretreat.nz/" },
  { label: "Te Koi – The Lodge at Bronte, Nelson-Tasman", href: "https://tekoithelodge.com/" },
];

const toursAndActivities: ProviderLink[] = [
  { label: "Abel Tasman Charters – Nelson-Tasman", href: "https://abeltasmancharters.co.nz/" },
  { label: "Appellation Central Wine Tours – Queenstown", href: "http://www.appellationwinetours.nz" },
  { label: "Agrodome – The Unique NZ Experience", href: "http://www.agrodome.co.nz/" },
  { label: "Aucky Walky Guided Auckland City Walks", href: "http://www.auckywalky.co.nz/" },
  { label: "Bush und Beach Tours, Auckland", href: "http://www.bushandbeach.co.nz/" },
  { label: "Canterbury Aviation, Christchurch", href: "http://www.canterburyaviation.co.nz/" },
  { label: "Explore New Zealand – Auckland + Bay of Islands", href: "http://www.exploregroup.co.nz" },
  { label: "Fox Glacier Guides", href: "http://www.foxguides.co.nz/" },
  { label: "Guided New Zealand Eco Tours", href: "https://abeltasmanecotours.co.nz" },
  { label: "Guided Walks Queenstown", href: "http://www.nzwalks.com/" },
  { label: "Nature Guides Otago, Dunedin", href: "http://www.natureguidesotago.co.nz/" },
  { label: "NorWest Adventures, Westport", href: "http://www.caverafting.com" },
  { label: "Sidetracks Tours", href: "http://www.sidetracks.de/" },
  { label: "Volcanic Air, Rotorua", href: "http://www.volcanicair.co.nz/" },
  { label: "Waiheke Island Wine Tours", href: "http://www.waihekeislandwinetours.co.nz/" },
];

const regions: ProviderLink[] = [
  { label: "Auckland", href: "http://www.aucklandnz.com" },
  { label: "Bay of Plenty", href: "http://www.bayofplentynz.com/" },
  { label: "Central South Island", href: "http://www.southcanterbury.org.nz" },
  { label: "Central Otago", href: "http://www.centralotagonz.com/" },
  { label: "Christchurch &amp; Canterbury", href: "http://www.christchurchnz.com/new-zealand/" },
  { label: "Coromandel", href: "http://www.thecoromandel.com/" },
  { label: "Dunedin", href: "http://www.dunedinnz.com/" },
  { label: "Gisborne &amp; Eastland", href: "http://tairawhitigisborne.co.nz/" },
  { label: "Hanmer Springs &amp; Hurunui", href: "http://visithurunui.co.nz/" },
  { label: "Hawke's Bay", href: "http://www.hawkesbaynz.com/" },
  { label: "Lake Taupō", href: "http://www.greatlaketaupo.com/" },
  { label: "Mt Cook / Mackenzie", href: "http://mackenzienz.com/" },
  { label: "Nelson Tasman", href: "https://www.nelsontasman.nz/" },
  { label: "Queenstown", href: "http://www.queenstownnz.co.nz/" },
  { label: "Southland", href: "http://southlandnz.com/" },
  { label: "Wairarapa", href: "http://wairarapanz.com/" },
  { label: "Wellington", href: "http://www.wellingtonnz.com/" },
  { label: "West Coast South Island", href: "http://www.westcoasttravel.co.nz" },
];

const otherSites: ProviderLink[] = [
  { label: "Top Reviews — Best Travel Agents in New Zealand", href: "https://www.topreviews.co.nz/best-travel-agents-new-zealand/" },
  { label: "Helpful overview on Credit Cards NZ", href: "https://www.creditcardscompare.co.nz/" },
  { label: "Tourwriter — Tour Operator Software", href: "https://www.tourwriter.com/" },
  { label: "New Zealand Birds Online", href: "http://nzbirdsonline.org.nz" },
  {
    label: "Iceland Travel",
    href: "http://www.iceland-like-a-local.com/",
    note: "Iceland-based, specialising in tailor-made travel",
  },
];

function LinkList({ items }: { items: ProviderLink[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item.href} className="text-sm">
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sage font-semibold hover:underline"
            dangerouslySetInnerHTML={{ __html: `${item.label}` }}
          />
          <i className="fa-solid fa-arrow-up-right-from-square text-xs ml-1 text-sage/60" />
          {item.note && <span className="text-dark/60"> — {item.note}</span>}
        </li>
      ))}
    </ul>
  );
}

export default function BoutiqueTravelProvidersPage() {
  return (
    <>
      <PageHeader>
        <Link href="/travel-information" className="text-gold text-sm hover:underline mb-4 inline-block">
          <i className="fa-solid fa-arrow-left text-xs mr-1" /> Back to Travel Information
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Boutique Travel Providers</h1>
        <p className="text-white/70 text-lg max-w-2xl mx-auto">
          Hand-picked accommodation, owner-operated tours and trusted travel resources — every provider
          personally visited and vetted by the Guest team.
        </p>
      </PageHeader>

      <section className="py-16 bg-sage-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Intro Cards */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-6 border border-gray-100">
              <div className="w-12 h-12 bg-gold/40 rounded-full flex items-center justify-center mb-3">
                <i className="fa-solid fa-house-chimney text-sage" />
              </div>
              <h3 className="font-bold text-dark mb-2">Authentic NZ Accommodation &amp; Tours</h3>
              <p className="text-dark/60 text-sm">
                Our focus is on local accommodation and owner-operated smaller tours. Our customers are not
                just a number. Before recommending any provider we visit them in person.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-100">
              <div className="w-12 h-12 bg-gold/40 rounded-full flex items-center justify-center mb-3">
                <i className="fa-solid fa-people-group text-sage" />
              </div>
              <h3 className="font-bold text-dark mb-2">Small Group Tours</h3>
              <p className="text-dark/60 text-sm">
                The tour providers we recommend are often family-owned with small group numbers — flexible
                enough that if there&apos;s something you long to see, they&apos;ll do their best to make it
                happen.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-100">
              <div className="w-12 h-12 bg-gold/40 rounded-full flex items-center justify-center mb-3">
                <i className="fa-solid fa-bed text-sage" />
              </div>
              <h3 className="font-bold text-dark mb-2">Hand-Picked Boutique Stays</h3>
              <p className="text-dark/60 text-sm">
                Beautiful boutique hotels, stylish bed-and-breakfast lodges, self-contained cottages,
                retreats and villas — with a small number of trusted motel and hotel brands where they fit.
              </p>
            </div>
          </div>

          {/* Helpful Travel Information */}
          <div className="bg-white rounded-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-dark mb-4">
              <i className="fa-solid fa-circle-info text-sage mr-2" />
              Helpful Travel Information on New Zealand
            </h2>
            <LinkList items={helpfulInfo} />
          </div>

          {/* Accommodation */}
          <div className="bg-white rounded-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-dark mb-4">
              <i className="fa-solid fa-bed text-sage mr-2" />
              Accommodation New Zealand
            </h2>
            <LinkList items={accommodation} />
          </div>

          {/* Tours & Activities */}
          <div className="bg-white rounded-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-dark mb-4">
              <i className="fa-solid fa-binoculars text-sage mr-2" />
              Tours and Activities New Zealand
            </h2>
            <LinkList items={toursAndActivities} />
          </div>

          {/* Regional Tourism Sites */}
          <div className="bg-white rounded-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-dark mb-4">
              <i className="fa-solid fa-map-location-dot text-sage mr-2" />
              Regional Tourism Sites
            </h2>
            <div className="grid sm:grid-cols-2 gap-x-8">
              <LinkList items={regions.slice(0, 9)} />
              <LinkList items={regions.slice(9)} />
            </div>
          </div>

          {/* Other Sites */}
          <div className="bg-white rounded-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-dark mb-4">
              <i className="fa-solid fa-globe text-sage mr-2" />
              Other New Zealand &amp; Worldwide Sites
            </h2>
            <LinkList items={otherSites} />
          </div>

          {/* CTA */}
          <div className="bg-sage rounded-lg p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-3">Want this curated for your trip?</h2>
            <p className="text-white/85 mb-5">
              This should be a very special trip for you, right? So why not use a local New Zealand travel
              expert to plan your holiday — free to you.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/travel-planning"
                className="inline-block bg-white text-sage px-6 py-3 rounded font-semibold hover:bg-gold hover:text-dark transition-colors"
              >
                Get a Customised Itinerary Quote
              </Link>
              <Link
                href="/new-zealand-travel-itineraries"
                className="inline-block border border-white text-white px-6 py-3 rounded font-semibold hover:bg-white hover:text-sage transition-colors"
              >
                View Sample Itineraries
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
