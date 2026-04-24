import { RichItinerary } from "./types";

/**
 * 12 Days North + South Island Itinerary — first rich-detail itinerary for Guest NZ.
 * Affiliate links left empty (`affiliateLink: undefined`) — Michael will supply them.
 * `downloadLink` is a placeholder until the PDF planner URL is provided.
 */
export const lifestyle12DayNorthSouth: RichItinerary = {
  slug: "12-days-new-zealand-north-south-itinerary",
  title: "12 Days North + South Island Itinerary",
  duration: "12 Days",
  category: "Lifestyle & Nature",
  categorySlug: "lifestyle-and-nature",
  metaDescription:
    "Exploring New Zealand North and South Island in 12 days by land, sea and air. Participate in exciting tours and stay in stylish boutique accommodation.",
  intro:
    "Exploring New Zealand North and South Island in 12 days by land, sea and air. Participate in exciting tours, stay in stylish accommodation, and experience the very best of both islands — from Auckland's Waitematā Harbour and Rotorua's geothermal wonderland through to Milford Sound, the Franz Josef Glacier and the iconic TranzAlpine rail journey.",
  highlights: [
    "Explore the Waitomo limestone caves with the 'Black Labyrinth' adventure.",
    "Zip-line through native rainforest and support a pest eradication programme.",
    "Cruise Milford Sound and take guided walks in Fiordland National Park.",
    "Jet-boat on the Dart River and join a guided walk through a Lord of the Rings filming area.",
    "Travel the TranzAlpine scenic rail journey between the West Coast and Christchurch.",
    "Heli-hike the Franz Josef Glacier and kayak the Okarito Lagoon.",
  ],
  // TODO(Michael): replace with the real geni.us PDF planner link
  downloadLink: "https://geni.us/NZTravelPlanner",
  days: [
    {
      day: 1,
      title: "Arrive in Auckland",
      location: "Auckland",
      description:
        "Meet your private transfer driver at Auckland Airport and check in to your hotel. Explore the America's Cup village at Viaduct Harbour. Stretch your legs by climbing the Sky Tower for sweeping views over the city, then take a short ferry across the harbour to the pretty village of Devonport.",
      accommodation: {
        name: "QT Auckland",
        description:
          "Stylish boutique hotel right on the Viaduct Harbour, perfectly positioned for waterfront dining, the ferry terminal and the Sky Tower precinct.",
      },
      activities: [
        {
          name: "Viaduct Harbour",
          type: "Information",
          description:
            "Auckland's revitalised waterfront precinct — home to America's Cup yachts, superyacht moorings, and a string of cafés, bars and restaurants.",
        },
        {
          name: "Sky Tower",
          type: "Optional",
          description:
            "At 328 m, the Sky Tower is the tallest free-standing structure in the Southern Hemisphere. The observation decks deliver 360-degree views, and the brave can SkyJump or SkyWalk the outer ring.",
        },
        {
          name: "Devonport",
          type: "Optional",
          description:
            "A 12-minute ferry from downtown Auckland brings you to this Victorian seaside village with cafés, art galleries and a short climb up Mt Victoria for the best harbour views in the city.",
        },
      ],
    },
    {
      day: 2,
      title: "Auckland to Rotorua via Waitomo",
      location: "Rotorua",
      description:
        "Pick up your rental car and travel via the Waikato region to the famous Waitomo Caves (225 km / 3 hrs). Choose your cave experience — either the wetsuit-and-helmet 'Black Water Rafting' Black Labyrinth tour (3 hrs), an abseiling adventure (4 hrs), or the dry Ruakuri Cave tour (2 hrs). Continue in the afternoon to Rotorua (140 km / 2 hrs).",
      accommodation: {
        name: "Regent of Rotorua",
        description:
          "Boutique art-deco hotel a short walk from Government Gardens, with private hot pools and a relaxed pool-and-courtyard layout — a lovely base after a big driving day.",
      },
      activities: [
        {
          name: "Waitomo Black Labyrinth",
          type: "Included",
          description:
            "The original Black Water Rafting adventure — float on inner tubes through a glow-worm lit limestone cave system. Wetsuits, helmets and hot showers provided.",
        },
        {
          name: "Ruakuri Cave Tour",
          type: "Optional",
          description:
            "A dry, accessible 2-hour walking tour through one of New Zealand's most spectacular limestone cave systems — perfect if you'd prefer to stay out of the water.",
        },
      ],
    },
    {
      day: 3,
      title: "Rotorua",
      location: "Rotorua",
      description:
        "Rotorua is a geothermal wonderland of bubbling mud pools, clouds of steam and natural hot springs. The Canopy Tours zip-line trip is a fantastic way to experience New Zealand conservation in action — and great fun gliding between giant native trees. Rotorua also offers a spiritual journey into Māori culture with village and performance experiences. Hobbiton movie set is only 50 minutes' drive away.",
      accommodation: {
        name: "Regent of Rotorua",
        description: "Second night at the Regent of Rotorua.",
      },
      activities: [
        {
          name: "Rotorua Canopy Tours",
          type: "Included",
          description:
            "Award-winning 3-hour zip-line and treetop walk through 1,000-year-old native forest. Profits fund a working pest-eradication programme — bird life on the trail is incredible.",
        },
        {
          name: "Hobbiton Movie Set & Farm Tours",
          type: "Optional",
          description:
            "Step into Middle-earth on a guided tour of the original Hobbiton movie set, including the Green Dragon Inn for a complimentary craft ale or ginger beer.",
        },
      ],
    },
    {
      day: 4,
      title: "Fly to Te Anau via Invercargill",
      location: "Te Anau",
      description:
        "Drop your rental car at Rotorua Airport and take a domestic flight to Invercargill. Collect another rental car outside the terminal. We recommend the Southern Coastal route via Riverton and Tuatapere — untamed scenery, small villages, and a real slice of New Zealand heartland.",
      accommodation: {
        name: "High Leys Lodge",
        description:
          "Boutique countryside lodge just outside Te Anau with sweeping views over the lake and Fiordland mountains — a peaceful retreat after a travel day.",
      },
      activities: [
        {
          name: "Kepler Track Car Park",
          type: "Recommended",
          description:
            "An easy late-afternoon walk along the start of the Kepler Track. Beech forest, lakeside views and almost guaranteed bird life — a perfect leg-stretch on arrival.",
        },
      ],
    },
    {
      day: 5,
      title: "Milford Sound Cruise",
      location: "Te Anau",
      description:
        "Te Anau is the gateway to Fiordland National Park and New Zealand's hiking capital. Today, join a full-day guided tour to Milford Sound — waterfalls cascading down hundreds of metres, sheer fiord cliffs and mountain peaks scraping the sky. Includes a choice of short walks and a nature cruise on the fiord itself.",
      accommodation: {
        name: "High Leys Lodge",
        description: "Second night at High Leys Lodge.",
      },
      activities: [
        {
          name: "Milford Coach Cruise & Walk",
          type: "Included",
          description:
            "Coach travel from Te Anau through the Milford Road's most spectacular stops, a guided nature walk en route, and a 2-hour scenic cruise on Milford Sound itself.",
        },
      ],
    },
    {
      day: 6,
      title: "Drive to Queenstown",
      location: "Queenstown",
      description:
        "The drive from Te Anau to Queenstown is short (2.5 hrs), so there's plenty of time for another Fiordland walk in the morning or 'action time' in Queenstown in the afternoon. Explore the wineries of the Lake Hayes region, ride the Skyline gondola for panoramic views, or dive into adventure — bungy jumping, sky diving, canyon swinging, jet boating, horse trekking, wine tasting, river rafting. It's all here.",
      accommodation: {
        name: "Mount Rosa Lodge",
        description:
          "Award-winning boutique vineyard lodge in the Gibbston Valley, 30 minutes from Queenstown — peaceful, exceptional food, and a deck looking out over Pinot Noir vines.",
      },
      activities: [
        {
          name: "Shotover Jet",
          type: "Optional",
          description:
            "The original Queenstown jet-boat experience — 360-degree spins through the dramatic Shotover Canyon. Heart-pumping and unforgettable.",
        },
        {
          name: "Appellation Boutique Wine Tour",
          type: "Optional",
          description:
            "Small-group wine tour through the Gibbston, Bannockburn and Cromwell sub-regions — Central Otago Pinot Noir at its finest, with lunch included.",
        },
      ],
    },
    {
      day: 7,
      title: "Glenorchy & Dart River",
      location: "Queenstown",
      description:
        "Queenstown is one of New Zealand's top visitor destinations. Make time for the beautiful Glenorchy area at the head of Lake Wakatipu, famous for its gorgeous scenery and the Dart River Safaris jet-boat trip — you'll learn about the Lord of the Rings filming locations along the way. For something extra special, book a private 4WD farm tour with a local guide and see the real side of New Zealand farming.",
      accommodation: {
        name: "Mount Rosa Lodge",
        description: "Second night at Mount Rosa Lodge.",
      },
      activities: [
        {
          name: "Dart River Safaris",
          type: "Included",
          description:
            "Half-day Glenorchy adventure combining a jet-boat ride up the Dart River, a short rainforest walk, and 4WD return through Paradise Valley — a working sheep station and Lord of the Rings filming location.",
        },
      ],
    },
    {
      day: 8,
      title: "Queenstown to Franz Josef via Wānaka",
      location: "Franz Josef",
      description:
        "Travel north via the lakeside village of Wānaka, then cross the Haast Pass to Jackson Bay. The road follows empty shingle beaches, dunes, lakes and wetlands — all with the Southern Alps as a backdrop. There's plenty of time to stop at scenic lookouts and short nature walks. On arrival in Franz Josef, take a helicopter flight over Franz Josef or Fox Glacier.",
      accommodation: {
        name: "Holly Homestead Bed & Breakfast",
        description:
          "Beautifully restored 1920s homestead-style B&B in Franz Josef, with sumptuous breakfasts and warm hosts who know the glacier region inside-out.",
      },
      activities: [
        {
          name: "Makarora Wilderness Stop",
          type: "Recommended",
          description:
            "Half-way between Wānaka and Haast, Makarora is the gateway to the Blue Pools and Mount Aspiring National Park — a perfect lunch stop and short forest walk.",
        },
      ],
    },
    {
      day: 9,
      title: "Franz Josef Glacier & Okarito",
      location: "Franz Josef",
      description:
        "Explore the Franz Josef Glacier in the morning with a guided heli-hike — landing high on the ice for a 3-hour walk through the blue ice formations. In the afternoon, join a guided kayaking tour on the Okarito Lagoon Scenic Reserve, New Zealand's largest unmodified wetland.",
      accommodation: {
        name: "Holly Homestead Bed & Breakfast",
        description: "Second night at Holly Homestead.",
      },
      activities: [
        {
          name: "Franz Josef Glacier Guides — Heli Hike",
          type: "Included",
          description:
            "Helicopter ride onto the upper ice with a 3-hour guided walk through dramatic ice formations, crevasses and ice caves. All hiking gear provided.",
        },
        {
          name: "Okarito Kayaks Guided Trip",
          type: "Included",
          description:
            "Calm-water guided paddle through the Okarito Lagoon — superb mountain views and excellent chances of spotting white herons (kotuku) and royal spoonbills.",
        },
        {
          name: "Okarito Village",
          type: "Recommended",
          description:
            "Tiny historic gold-rush settlement on the West Coast — a 30-minute detour for the wild beach, the lagoon outlook and the famous Okarito beach hut.",
        },
        {
          name: "Franz Josef Wildlife Centre",
          type: "Recommended",
          description:
            "Home to the breeding programme for the rare rowi kiwi — your best chance to see this elusive bird up close in a nocturnal viewing environment.",
        },
      ],
    },
    {
      day: 10,
      title: "Drive to Greymouth via Hokitika",
      location: "Greymouth",
      description:
        "There are very few towns on the 600 km of coastal road between Karamea and Jackson Bay — but your attention will be on the beauty of native forest, beaches and lagoons. A visit to the white heron colony near Whataroa is a must-do. Stop at Hokitika, famous for New Zealand pounamu (jade) and gold-rush history. Lonely Planet rates the Great Coast Road as one of the world's Top 10 coastal drives.",
      accommodation: {
        name: "Breakers Boutique Accommodation",
        description:
          "Stunning clifftop boutique B&B north of Greymouth, perched right above the Tasman Sea — sunsets straight from your room and a perfect spot to break the West Coast drive.",
      },
      activities: [
        {
          name: "White Heron (Kotuku) Sanctuary Tour",
          type: "Recommended",
          description:
            "Whataroa is home to New Zealand's only white heron breeding colony. A jet-boat and guided boardwalk tour gets you within metres of the nesting birds.",
        },
        {
          name: "Hokitika Pounamu Galleries",
          type: "Recommended",
          description:
            "Hokitika's main street is lined with working pounamu (greenstone / jade) galleries — many will let you watch the carving process.",
        },
      ],
    },
    {
      day: 11,
      title: "TranzAlpine to Christchurch",
      location: "Christchurch",
      description:
        "You'll have time in the morning to explore the Pancake Rocks at Punakaiki in the Paparoa National Park. In the afternoon, drop your rental car at the Greymouth Railway Station and board the TranzAlpine scenic train — one of the world's great rail journeys. The 4.5-hour trip crosses from coast to coast through the Southern Alps, the spectacular Waimakariri gorges, and out across the Canterbury Plains.",
      accommodation: {
        name: "Eliza's Manor Boutique Hotel",
        description:
          "Beautifully restored Victorian manor house just minutes from Hagley Park and the Christchurch Botanic Gardens — the perfect way to end the trip in style.",
      },
      activities: [
        {
          name: "Pancake Rocks, Punakaiki",
          type: "Recommended",
          description:
            "30-minute loop boardwalk through extraordinary stratified limestone formations — best timed with high tide for the dramatic blowholes.",
        },
        {
          name: "TranzAlpine Scenic Train",
          type: "Included",
          description:
            "Coast-to-coast scenic rail crossing of the Southern Alps. Open-air viewing carriage, on-board commentary, and some of the best mountain scenery in the country.",
        },
      ],
    },
    {
      day: 12,
      title: "Departure Day",
      location: "Christchurch",
      description:
        "Depending on your flight, you'll have plenty of time to relax or explore the Christchurch region before leaving. If you're departing in the evening, Akaroa would be a perfect day trip — only a 1.5-hour drive each way. Of course, you're welcome to extend your stay in Christchurch or any other location along the route.",
      activities: [
        {
          name: "Akaroa Day Trip",
          type: "Optional",
          description:
            "Historic French-influenced harbour village on the Banks Peninsula — superb cafés, harbour cruises with rare Hector's dolphins, and a beautiful coastal drive each way.",
        },
        {
          name: "Christchurch Botanic Gardens",
          type: "Optional",
          description:
            "21 hectares of riverside parkland in the centre of the city — a peaceful spot to relax before the airport.",
        },
      ],
    },
  ],
};
