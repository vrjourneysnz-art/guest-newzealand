import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Visiting Places in New Zealand | Guest New Zealand",
  description:
    "Discover New Zealand's most iconic regions — from the Bay of Islands and Rotorua in the north to Queenstown, Fiordland, and the West Coast glaciers in the south.",
};

interface RegionLink {
  label: string;
  url: string;
}

interface Place {
  name: string;
  region: string;
  description: string;
  /** Local image path under /public/images/regions/. Falls back to sage gradient if missing. */
  image: string;
  /** One or more external regional tourism sites (each opens in a new tab). */
  links: RegionLink[];
}

const places: Place[] = [
  {
    name: "Auckland",
    region: "North Island — Gateway City",
    description:
      "New Zealand's largest city, framed by two harbours and 48 volcanic cones. Waiheke Island wineries, Hauraki Gulf islands, west coast surf beaches, and a strong food and coffee scene.",
    image: "/images/regions/auckland.jpg",
    links: [{ label: "Auckland NZ", url: "https://www.aucklandnz.com" }],
  },
  {
    name: "Bay of Islands",
    region: "Northland",
    description:
      "Subtropical waters dotted with 144 islands. Sailing, dolphin swimming, deep-sea fishing, and the birthplace of modern New Zealand at Waitangi. Warm beaches all summer.",
    image: "/images/regions/bay-of-islands.jpg",
    links: [{ label: "Northland NZ", url: "https://www.newzealand.com/int/northland/" }],
  },
  {
    name: "Coromandel",
    region: "North Island — East Coast",
    description:
      "White-sand beaches, Cathedral Cove, the famous Hot Water Beach, and gentle bush walks. A favourite holiday region for locals — best explored slowly with a rental car.",
    image: "/images/regions/coromandel.jpg",
    links: [{ label: "The Coromandel", url: "https://thecoromandel.nz/" }],
  },
  {
    name: "Rotorua & Taupō",
    region: "Central North Island",
    description:
      "Geothermal wonderland — geysers, mud pools, hot springs, and rich Māori culture. Lake Taupō (a collapsed super-volcano) sits at the centre of the island, ringed by trout streams.",
    image: "/images/regions/rotorua-taupo.jpg",
    links: [
      { label: "Rotorua NZ", url: "https://www.rotoruanz.com/" },
      { label: "Love Taupō", url: "https://www.lovetaupo.com/" },
    ],
  },
  {
    name: "Wellington",
    region: "Lower North Island — Capital",
    description:
      "Compact, walkable capital famous for craft coffee, world-class restaurants, Te Papa museum, and the Weta Workshop film studios. Gateway to the Cook Strait ferry crossing.",
    image: "/images/regions/wellington.jpg",
    links: [{ label: "Wellington NZ", url: "https://www.wellingtonnz.com/" }],
  },
  {
    name: "Nelson & Marlborough",
    region: "Top of the South Island",
    description:
      "Sun-drenched corner of NZ — Abel Tasman National Park's golden coves, the Marlborough Sounds by water taxi, and the Sauvignon Blanc wineries that put NZ wine on the map.",
    image: "/images/regions/nelson-marlborough.jpg",
    links: [{ label: "Nelson Tasman", url: "https://www.nelsontasman.nz/" }],
  },
  {
    name: "West Coast Glaciers",
    region: "South Island — West Coast",
    description:
      "Wild, untamed coastline. Franz Josef and Fox Glaciers descend from the Southern Alps almost to sea level — heli-hike on the ice, then walk through ancient rainforest the same afternoon.",
    image: "/images/regions/west-coast-glaciers.jpg",
    links: [{ label: "West Coast NZ", url: "https://westcoast.co.nz/visit/" }],
  },
  {
    name: "Christchurch & Canterbury",
    region: "South Island — East Coast",
    description:
      "The 'Garden City' is the South Island's main hub. Gateway to the TranzAlpine train, Akaroa harbour, the Banks Peninsula, and the road north to whale-watching at Kaikōura.",
    image: "/images/regions/christchurch-canterbury.jpg",
    links: [{ label: "ChristchurchNZ", url: "https://www.christchurchnz.com/" }],
  },
  {
    name: "Mt Cook & Mackenzie",
    region: "South Island — Alpine Heart",
    description:
      "New Zealand's highest peak rises above turquoise glacial lakes Pukaki and Tekapo. A certified International Dark Sky Reserve — among the best stargazing on the planet.",
    image: "/images/regions/mt-cook-mackenzie.jpg",
    links: [{ label: "Mackenzie NZ", url: "https://mackenzienz.com/" }],
  },
  {
    name: "Queenstown & Wānaka",
    region: "South Island — Southern Lakes",
    description:
      "The adventure capital. Bungy jumping, jet boats, and luge by day; lakeside dining and Central Otago Pinot Noir by night. Wānaka offers the same beauty with a quieter pace.",
    image: "/images/regions/queenstown-wanaka.jpg",
    links: [
      { label: "Queenstown NZ", url: "https://www.queenstownnz.co.nz/" },
      { label: "Wānaka NZ", url: "https://www.wanaka.co.nz/" },
    ],
  },
  {
    name: "Fiordland",
    region: "South Island — South-West",
    description:
      "Milford Sound, Doubtful Sound, and the Milford Track Great Walk. Sheer rock walls, waterfalls plunging into deep fiords, and some of the wettest, most pristine wilderness on earth.",
    image: "/images/regions/fiordland.jpg",
    links: [{ label: "Fiordland NZ", url: "https://www.fiordland.org.nz/" }],
  },
  {
    name: "Dunedin & Otago Peninsula",
    region: "South Island — Lower East",
    description:
      "Scottish-heritage university city with the world's steepest street and a wildlife-rich peninsula — royal albatross, yellow-eyed penguins, fur seals, and sea lions all within 30 minutes.",
    image: "/images/regions/dunedin-otago.jpg",
    links: [{ label: "Dunedin NZ", url: "https://www.dunedinnz.com/" }],
  },
];

export default function PlacesNewZealandPage() {
  return (
    <>
      <PageHeader>
        <Link href="/travel-information" className="text-gold text-sm hover:underline mb-4 inline-block">
          <i className="fa-solid fa-arrow-left text-xs mr-1" /> Back to Travel Information
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Visiting Places in New Zealand</h1>
        <p className="text-white/70 text-lg max-w-2xl mx-auto">
          From subtropical beaches in the north to the wild fiords of the south — explore the regions that
          make New Zealand one of the world&apos;s most rewarding countries to travel.
        </p>
      </PageHeader>

      <section className="py-16 bg-sage-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {places.map((place) => (
              <div
                key={place.name}
                className="bg-white rounded-lg overflow-hidden border border-gray-100 flex flex-col"
              >
                {/* Image — falls back to sage gradient if file is missing */}
                <div
                  className="h-44 bg-gradient-to-br from-sage via-sage-dark to-dark relative overflow-hidden"
                  style={{
                    backgroundImage: `url(${place.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <span className="absolute bottom-3 left-4 right-4 text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
                    {place.name}
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-gold text-xs font-semibold uppercase tracking-wide mb-2">
                    {place.region}
                  </p>
                  <h3 className="text-xl font-bold text-dark mb-3">{place.name}</h3>
                  <p className="text-dark/60 text-sm flex-1">{place.description}</p>
                  <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm">
                    {place.links.map((l) => (
                      <a
                        key={l.url}
                        href={l.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sage font-semibold hover:underline"
                      >
                        {l.label}
                        <i className="fa-solid fa-arrow-up-right-from-square text-xs ml-1" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 bg-sage rounded-lg p-8 text-center text-white max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-3">Not sure how to fit it all together?</h2>
            <p className="text-white/85 mb-5">
              Trying to do too much is the most common NZ planning mistake. We&apos;ll help you build a route
              that matches the time you actually have — with realistic drive times built in.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/travel-planning"
                className="inline-block bg-white text-sage px-6 py-3 rounded font-semibold hover:bg-gold hover:text-dark transition-colors"
              >
                Plan My Trip
              </Link>
              <Link
                href="/new-zealand-travel-itineraries"
                className="inline-block border border-white text-white px-6 py-3 rounded font-semibold hover:bg-white hover:text-sage transition-colors"
              >
                Browse Sample Itineraries
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
