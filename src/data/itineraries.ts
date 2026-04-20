export interface Itinerary {
  slug: string;
  title: string;
  duration: string;
  category: string;
  categorySlug: string;
  intro: string;
  highlights: string[];
  image: string;
  days: { day: number; title: string; description: string }[];
}

export const itineraries: Itinerary[] = [
  {
    slug: "12-days-new-zealand-north-south-itinerary",
    title: "12 Days North + South Island Itinerary",
    duration: "12 Days",
    category: "Lifestyle & Nature",
    categorySlug: "lifestyle-and-nature",
    intro: `Exploring New Zealand North and South Island itinerary in 12 days by land, sea and air. Participate in exciting tours. Stay in stylish accommodation.`,
    highlights: [
      "Explore the Waitomo Limestone caves with the 'Black Labyrinth' adventure.",
      "Zip-line through a native rainforest and support a pest eradication program.",
      "Cruise Milford Sound - take guided walks on the way to Fiordland NP.",
      "Jet-boat on the Dart River and join a guided walk through a LOTR filming area.",
      "Travel on the TranzAlpine Rail Journey between the West Coast and Christchurch.",
    ],
    image: "/images/itineraries/12-days-new-zealand-north-south-itinerary.jpg",
    days: [
      {
        day: 1,
        title: "Auckland",
        description: `Meet your private transfer driver at Auckland Airport and check-in to your hotel. Explore the America's Cup village. Stretch your legs by climbing the Sky City Tower for awesome views of Auckland City. Take a boat trip to across to the pretty village of Devonport. Check in to QT Auckland Information - Viaduct Harbour Optional - Sky Tower Optional - Devonport`,
      },
      {
        day: 2,
        title: "Rotorua",
        description: `Pick-up your rental car and travel via the Waikato region to the famous Waitomo caves (225 km, 140 miles, 3 hours). Choose your Waitomo Cave tour - either with a wetsuit and a helmet with 'Black Water Rafting' (takes 3 hrs) or the Abseiling trip (4 hours) or the "dry cave" (2 hours, no wetsuit required) Ruakuri Cave tour. Continue in the afternoon to Rotorua (140 km, 87 miles, 2 hours). Check in to Regent of Rotorua Included - Waitomo Black Labyrinth Optional - Ruakuri Cave Tour Optional - Wa...`,
      },
      {
        day: 3,
        title: "Rotorua",
        description: `Rotorua is a geothermal wonderland of bubbling mud pools, clouds of steam, and natural hot springs. The Canopy Tours trip is a fantastic way to experience New Zealand conservation. It is also great fun zip-lining between giant native trees. Rotorua also offers a spiritual journey into Maori culture with village and performance experiences. The Hobbiton Village is only 50 min drive away. Check in to Regent of Rotorua Included - Rotorua Canopy Tours Optional - Hobbiton Movie Set & Farm Tours Op...`,
      },
      {
        day: 4,
        title: "Te Anau",
        description: `Drop-off your rental car off at the airport and take a domestic flight to Invercargill. Collect another rental car outside the airport terminal carpark. We recommend you travel the Southern Coastal route to via Riverton and Tuatapere - this is where the scenery is untamed and beautiful. Dotted with small villages, this is classic New Zealand heartland at it's best! Check in to High Leys Lodge Recommended - Kepler Track Car Park`,
      },
      {
        day: 5,
        title: "Te Anau",
        description: `Te Anau is the gateway to the Fiordland National Park and New Zealand's hiking capital. Fiordland features a variety of unique wildlife, including rare penguins. Milford Sound is a fusion of spectacular features where waterfalls cascade down hundreds of metres. The fiord cliffs rise verticall and mountain peaks scrape the sky. Join a guided tour into Milford Sounds which includes a choice of walks and a nature cruise in the fjord. Check in to High Leys Lodge Included - Milford Coach Cruise & ...`,
      },
      {
        day: 6,
        title: "Queenstown",
        description: `Your drive from Te Anau to Queenstown is short (2.5 hrs) There is plenty of time to spend on more Fiordland walks or 'action time' in Queenstown. Think about exploring some of the stunning scenic wineries in the Lake Hayes region or check out the views from the Skyline. The adventure is endless - bungy jumping, sky diving, canyon swinging, jet boating, horse trekking, wine tasting and river rafting It's all here! Check in to Mount Rosa Lodge Optional - Shotover Jet Optional - Appellation Bout...`,
      },
      {
        day: 7,
        title: "Queenstown",
        description: `Queenstown is a busy place and one of New Zealand's top visitor destinations. Try to include a visit to the beautiful Glenorchy area, which is famous for its gorgeous scenery as well as the famous Dart River Safaris. With this guided jet-boating trip you learn so much about the Lord of the Rings movie locations which took place here. For something very special, take a private 4WD farm tour with a local guide - see the real side of New Zealand farming. Check in to Mount Rosa Lodge Included - D...`,
      },
      {
        day: 8,
        title: "Franz Josef",
        description: `Continue traveling north via the lakeside village of Wanaka. Cross over the Haast Pass to Jackson Bay. Here, there are empty shingle beaches, dunes, lakes and wetlands, all with the backdrop of the Southern Alps. You have the entire day to stop at scenic spots, take short nature walks and see remote attractions unique to New Zealand. After arrival in Franz Josef village, take a helicopter flight over the Franz Josef or Fox Glacier. Check in to Holly Homestead Bed & Breakfast Optional - Makaro...`,
      },
      {
        day: 9,
        title: "Franz Josef",
        description: `Explore the Franz Josef Glacier in the morning with a guided heli-hiking trip. In the afternoon join a guided kayaking tour into the Okarito Lagoon Scenic Reserve. Check in to Holly Homestead Bed & Breakfast Included - Franz Josef Glacier Guides Glacier Heli Hike Included - Okarito Kayaks Guided Kayak Trips Recommended - Okarito Recommended - Franz Josef Wildlife Centre`,
      },
      {
        day: 10,
        title: "Greymouth",
        description: `There are very few towns on the 600 kms of coastal road between Karamea and Jackson Bay. However your attention will be focused on the beauty of native forest, beaches and lagoons. A visit to the White Heron colony near Whataroa is a must-do! The second largest town in the area is Hokitika, famous for New Zealand Pounamu (Jade) and the gold rush from 1860-80. Stop at the town of Hokitika for refreshments. The Lonely Planet lists the Great Coast Road as one of the Top 10 Coastal Drives in the ...`,
      },
      {
        day: 11,
        title: "Christchurch",
        description: `You will have time in the morning to explore the 'Pancake Rocks' in Punakaiki with the attached Paparoa National Park. In the afternoon drop-off you rental car at the Greymouth Railway Station. Take the TranzAlpine scenic train that uns between Greymouth and Christchurch. Cross from one coast to the next (train takes 4.5 hours). From the comfort of modern carriages you can see the fields of the Canterbury Plains and farmland, followed by the spectacular gorges and river valleys of the Waimaka...`,
      },
      {
        day: 12,
        title: "Auckland",
        description: `Depending on your flight, you may have plenty of time to relax or the explore the Christchurch region before leaving. If leaving in the evening, Akaroa would be a perfect day trip (only a 1.5 hour drive away (one-way). Feel free to extend your stay in Christchurch or any other location. Plan With a Local Insider View interactive map --> - Opens in a new window - --> Expand Map + Included Highlights Rotorua Canopy Tours Milford Coach Cruise & Walk Dart River Safaris Paradise Discovery Tour Fra...`,
      },
    ],
  },
  {
    slug: "12-days-north-island-new-zealand",
    title: "12 Days North Islands Hidden Treasures",
    duration: "12 Days",
    category: "Unique Travel NZ",
    categorySlug: "unique-travel-new-zealand",
    intro: `The North Islands Hidden Treasures itinerary is designed for travellers wanting to get away from standard tourism routes. Exploring authentic New Zealand.`,
    highlights: [
      "Explore Auckland",
      "Explore The Coromandel",
      "Explore Rotorua",
      "Explore Tongariro National Park",
      "Explore New Plymouth",
      "Explore Waikato",
    ],
    image: "/images/itineraries/12-days-north-island-new-zealand.jpg",
    days: [
      {
        day: 1,
        title: "Auckland",
        description: `Meet your private driver at the Auckland Airport arrival gate and transfer to your hotel. If you're arriving early, try to stay awake as long as possible to beat jet lag. Check in to Franklin 38 Optional - Sky Tower Optional - The Auckland Whale & Dolphin Safari Optional - Explore America's Cup Sailing Auckland Optional - Kelly Tarlton's SEA LIFE Aquarium`,
      },
      {
        day: 2,
        title: "The Coromandel",
        description: `Pick-up your rental car and travel to the Coromandel Peninsula.`,
      },
      {
        day: 3,
        title: "The Coromandel",
        description: `Explore the Coromandels. Check in to Mussel Bed Boutique Holiday Accommodation Included - Cathedral Cove Kayak Tours Optional - Hahei Explorer Optional - Kiwi Dundee Adventures 1 Day Coromandel Circuit`,
      },
      {
        day: 4,
        title: "Rotorua",
        description: `Travel via Bay of Plenty to Rotorua.`,
      },
      {
        day: 5,
        title: "Rotorua",
        description: `Explore the Rotorua area. Check in to Regent of Rotorua Included - Rotorua Canopy Tours Included - Mitai Maori Village Optional - Hobbiton Movie Set & Farm Tours Optional - Volcanic Air Recommended - Polynesian Spa Recommended - Wingspan National Bird of Prey Centre Optional - Redwoods Treewalk`,
      },
      {
        day: 6,
        title: "Tongariro National Park",
        description: `Continue travelling via Lake Taupo to the Tongariro National Park. Check in to Tongariro Suites @ The Rocks Optional - Hukafalls Jet Optional - Orakei Korako Geothermal Park & Cave Recommended - Huka Falls Optional - Wai-O-Tapu Thermal Wonderland Optional - Waimangu Volcanic Valley`,
      },
      {
        day: 7,
        title: "Tongariro National Park",
        description: `Explore the Tongariro National Park. Check in to Tongariro Suites @ The Rocks Information - Tongariro National Park Recommended - Tongariro Alpine Crossing`,
      },
      {
        day: 8,
        title: "New Plymouth",
        description: `Travelling via the 'Forgotten Highway' to New Plymouth in the Taranaki region.`,
      },
      {
        day: 9,
        title: "New Plymouth",
        description: `Explore the Taranaki region. Check in to Hosking House Information - Mount Taranaki Recommended - Te Rewa Rewa Bridge & coastal walk Recommended - Govett-Brewster Art Gallery Recommended - Pukekura Park & Pukeiti Rhododendron Gardens Recommended - Walks Mr Egmont / Taranaki National Park Recommended - Trades & Whalers & Tawhiti Museum in Hawera Recommended - Climb Paritutu Rock near harbour`,
      },
      {
        day: 10,
        title: "Waikato",
        description: `Travel to the Waitomo region.`,
      },
      {
        day: 11,
        title: "Waikato",
        description: `Explore the Waitomo region. Check in to Kamahi Cottage Included - Ruakuri Cave Tour Optional - Waitomo Glowworm Caves Optional - Waitomo Black Labyrinth Optional - Waitomo Adventures Lost World 4 Hour Optional - Hairy Feet Scenic Film Location Tour`,
      },
      {
        day: 12,
        title: "Otewa",
        description: `Travel back to Auckland or extend your stay in New Zealand. Plan With a Local Insider View interactive map --> - Opens in a new window - --> Expand Map + Included Highlights Cathedral Cove Kayak Tours Rotorua Canopy Tours Mitai Maori Village Tongariro National Park Mount Taranaki Ruakuri Cave Tour Information Links How does the Planning Work? Why Planning with Guest NZ? Information About New Zealand View pricing options--> Michael Nees Travel Expert +64-21-629498`,
      },
    ],
  },
  {
    slug: "12-days-south-island-hidden-treasures",
    title: "12 Days South Island Hidden Treasures",
    duration: "12 Days",
    category: "Unique Travel NZ",
    categorySlug: "unique-travel-new-zealand",
    intro: `The South Islands Hidden Treasures itinerary gets travellers in touch with authentic, unexplored New Zealand. Remoter locations and real people are the key!`,
    highlights: [
      "Explore Akaroa",
      "Explore Canterbury",
      "Explore Burn Cottage Retreat",
      "Explore Haast",
      "Explore Hokitika",
    ],
    image: "/images/itineraries/12-days-south-island-hidden-treasures.jpg",
    days: [
      {
        day: 1,
        title: "Akaroa",
        description: `After your arrival at Christchurch Airport, go to the rental car counter to collect your rental car. Your flight arrival time will dictate whether you need to stay one night in Christchurch. Otherwise start your travel through rural New Zealand to the seaside town of Akaroa. This should take you about 1.5 hours.`,
      },
      {
        day: 2,
        title: "Akaroa",
        description: `Akaroa is the main village for the Banks Peninsula, which has many hidden bays and beaches. Do some local walks, join a dolphin tour or take a scenic cruise. For food and wine lovers there are also vineyards to check out. Think about buying some cheese at the iconic Barry's Bay Cheese Factory. Check in to Akaroa House Bed & Breakfast Included - Black Cat Akaroa Harbour Nature Cruises Optional - Swimming with Dolphins`,
      },
      {
        day: 3,
        title: "Canterbury",
        description: `Set off back through the Banks Peninsula area, then take the Inland route via the scenic Rakaia Gorge to Mid-Canterbury. The tiny village of Staveley is undervalued as a fantastic base to explore local forest parks. Also just a short distance away, is the Canterbury High Country and the stunning scenery around Mt. Sunday and the Rangitata River. Part of the Lord of the Rings was filmed here (e.g. Edoras).`,
      },
      {
        day: 4,
        title: "Canterbury",
        description: `Spend today exploring the Mt. Somers and Rangitata River areas. Your local hosts will guide you in the right direction to all those fantastic forest walks. Check in to Red Cottages Staveley Recommended - Edoras Mt Sunday Summit Information - Rangitata River Recommended - Mount Somers`,
      },
      {
        day: 5,
        title: "Burn Cottage Retreat",
        description: `Depart the Mid-Canterbury area and continue via Geraldine to the Lake Tekapo and Mount Cook region. This area is famous for the glacier lakes, scenic flights with snow landings and nature walks. If you are keen to join one of the suggested tours, you will have enough time to do all this on your way through. Continue traveling via Lindis Pass into the Central Otago region. This will be your base for the next three nights. Check in to Burn Cottage Retreat Optional - Air Safaris Tekapo Optional ...`,
      },
      {
        day: 6,
        title: "Burn Cottage Retreat",
        description: `The historic and and peaceful village of Cromwell is the ideal base for travellers. It is just a short drive from busy Queenstown, Wanaka and those great wine areas. Cromwell is also an excellent choice for repeat travellers. Most travellers would have stayed in Queenstown or Wanaka for their first visit. But even for first time visitors to New Zealand, Cromwell is a the perfect spot to discover the Central Otago region. There is much to see and discover! Check in to Burn Cottage Retreat Incl...`,
      },
      {
        day: 7,
        title: "Burn Cottage Retreat",
        description: `In just the space of 30-40 min, you can discover beautiful historic villages, local day walks and exciting tours. If you feel you want to be more active, get a bike from your accommodation and discover the local wineries. They are conveniently located quite close to one another. Check in to Burn Cottage Retreat Recommended - Cromwell Recommended - Bannockburn Recommended - Clyde Optional - Alexandra Optional - Arrowtown`,
      },
      {
        day: 8,
        title: "Haast",
        description: `After enjoying the vast and arid landscape of Central Otago, travel to the beautiful lush rain forests of the West Coast of the South Island. There are many attractions en route - take a walk to stunning waterfalls and remote beaches. From Haast to Jackson Bay there are empty shingle beaches, lakes and wetlands, all with the backdrop of the Southern Alps. For an authentic insight to this remote area, join the Waiatoto River Jet Boating Safari. Check in to Collyer House B&B Recommended - Haast...`,
      },
      {
        day: 9,
        title: "Haast",
        description: `The Haast region is pristine and full of natural highlights. An absolute 'must do' is the jet boating journey up the Waiatoto River. You will breathe the purest oxygen, hear the bird song and listen to the rich history and nature stories by your driver-guide. There is plenty of time to head further south to the remote village of Jackson. Again, there are lovely local walks as well as the 'Craypot Cafe' for a bite to eat! Check in to Collyer House B&B Included - Wayne's Waiatoto River Safari R...`,
      },
      {
        day: 10,
        title: "Hokitika",
        description: `Continue north towards Fox and Franz Josef Glacier. If the weather is good, we recommend a helicopter or heli-hiking trip up the glacier. Again, there are plenty of scenic options such as a loop walk around the beautiful Lake Matheson. If you want to see a real live Kiwi Bird, why not visit the Kiwi Wildlife Centre in Franz Josef. For bird nature lovers, a White Heron tour from Whataroa is a must-do. For the next two nights, stay in Hokitika. Check in to Hokitika Firestation Boutique Hotel Re...`,
      },
      {
        day: 11,
        title: "Hokitika",
        description: `Hokitika is on the West Coast of the South Island, has a classic small town charm. Up until recently, the surrounding area of Hokitika has remains fairly undiscovered by tourists. But travellers are beginning to find new and exciting attractions, such as the Hokitika Gorge and the Southern Alps glaciers. Here you will discover the fantastic Six Glacier Helicopter trip - one of the best in New Zealand! There are other helicopter options in the busier Fox and Franz Josef. You could also head no...`,
      },
      {
        day: 12,
        title: "Hokitika",
        description: `Depending on your flight time, you may have ample time to explore the South Island further. We can easily add arrange for you to travel further north to Nelson. From there, you could take a domestic flight to Auckland. Otherwise you will be travelling via Arthur's Pass to Christchurch and depart later in the afternoon or evening. .Important to know: every part of this itinerary can be amended to your personal requirements. We can add, delete or amend. Just contact us and it will be done! Plan...`,
      },
    ],
  },
  {
    slug: "14-days-golfing-new-zealand",
    title: "14 Days Golfing New Zealand",
    duration: "14 Days",
    category: "Unique Travel NZ",
    categorySlug: "unique-travel-new-zealand",
    intro: `Play the best Golf courses in New Zealand with this 14 days golfing New Zealand itinerary. Discover the North and South Island's most scenic spots.`,
    highlights: [
      "Explore Auckland",
      "Explore Bay of Islands",
      "Explore Taupo",
      "Explore Napier",
      "Explore Queenstown",
      "Explore South Island",
    ],
    image: "/images/itineraries/14-days-golfing-new-zealand.jpg",
    days: [
      {
        day: 1,
        title: "Auckland",
        description: `Meet your private driver at the Auckland Airport arrival gate and transfer to your hotel. Explore the America's Cup village. Visit the Sky Tower and see the great views of the city and harbour. If you're arriving early, try to stay awake as long as possible to beat jet lag. Check in to Sofitel Auckland Viaduct Harbour Optional - The Auckland Whale & Dolphin Safari Optional - Explore America's Cup Sailing Auckland Included - Auckland`,
      },
      {
        day: 2,
        title: "Bay of Islands",
        description: `Transfer from hotel to Auckland Domestic airport and flight to the Bay of Islands. Collect a rental car to be independent while in the area.`,
      },
      {
        day: 3,
        title: "Bay of Islands",
        description: `Playing golf at Kauri Cliffs. We recommend to pre-book tee-off times. Check in to Harakeke Gardens Luxury Guesthouse Included - The Lodge at Kauri Cliffs Included - Bay of Islands`,
      },
      {
        day: 4,
        title: "Bay of Islands",
        description: `Explore the Bay of Islands region today. Check in to Harakeke Gardens Luxury Guesthouse Optional - Salt Air Tours Optional - Fullers Dolphin Eco Cruise Optional - Fullers Cape Reinga/Ninety Mile Beach full day tour Recommended - Waitangi Treaty Grounds`,
      },
      {
        day: 5,
        title: "Taupo",
        description: `Travel back to Kerikeri Airport and take a domestic flight to Taupo (via Auckland). Pick-up a new rental car and stay for three nights. Check in to The Pillars Retreat Included - Lake Taupo`,
      },
      {
        day: 6,
        title: "Taupo",
        description: `Play golf at Wairakei Golf course or explore the Taupo, Rotorua and Tongariro region. Check in to The Pillars Retreat Optional - Hukafalls Jet Optional - Orakei Korako Geothermal Park & Cave Recommended - Huka Falls Optional - Wai-O-Tapu Thermal Wonderland Optional - Waimangu Volcanic Valley`,
      },
      {
        day: 7,
        title: "Taupo",
        description: `Another full day to explore the region. Check in to The Pillars Retreat Included - Tongariro National Park Recommended - Tongariro Alpine Crossing`,
      },
      {
        day: 8,
        title: "Napier",
        description: `Continue travelling to the east coast of the North Island, the Hawkes Bay. Check in to McHardy Lodge Included - Hawke's Bay`,
      },
      {
        day: 9,
        title: "Napier",
        description: `Play Golf at Cape Kidnappers course. Check in to McHardy Lodge Included - The Farm at Cape Kidnappers`,
      },
      {
        day: 10,
        title: "Napier",
        description: `Another day to explore the Hawkes Bay region. Check in to McHardy Lodge Optional - Hawkes Bay Farmers Market Optional - Art Deco Walks & Tours Optional - Gannet Safaris Overland Ltd Optional - Arataki Honey Optional - Mission Estate Winery`,
      },
      {
        day: 11,
        title: "Queenstown",
        description: `Return your rental car and take a domestic flight to Queenstown. Collect another rental car at the airport and stay for three nights. Check in to Kinross Cottages Included - Queenstown`,
      },
      {
        day: 12,
        title: "Queenstown",
        description: `Queenstown offer a number of world-class golf courses, such as Millbrook, The Hills, Jack's Point as well as superb coursed used by local, such as Cromwell or Arrowtown. Check in to Kinross Cottages Included - Lodge at The Hills`,
      },
      {
        day: 13,
        title: "Queenstown",
        description: `Spend time in the Queenstown region. Check in to Kinross Cottages Optional - Dart River Safaris Optional - Shotover Jet Optional - Appellation Boutique Wine Tour Optional - Ziptrek MOA 4-Line Tour Optional - Glacier Southern Lakes Helicopters Queenstown Optional - Routeburn Track Guided Walk Optional - Milford Sound Scenic Flights Optional - Queenstown Fishing Fly fishing Optional - Paradise Discovery Tour`,
      },
      {
        day: 14,
        title: "South Island",
        description: `Depart from Queenstown or extend your stay. Plan With a Local Insider View interactive map --> - Opens in a new window - --> Expand Map + Included Highlights Auckland The Lodge at Kauri Cliffs Bay of Islands Lake Taupo Tongariro National Park Hawke's Bay The Farm at Cape Kidnappers Queenstown Lodge at The Hills Information Links How does the Planning Work? Why Planning with Guest NZ? Information About New Zealand View pricing options--> Michael Nees Travel Expert +64-21-629498`,
      },
    ],
  },
  {
    slug: "15-day-new-zealand-pure-places-visit",
    title: "15 Day New Zealand Pure Places Visit",
    duration: "15 Days",
    category: "Lifestyle & Nature",
    categorySlug: "lifestyle-and-nature",
    intro: `With this 15 day Pure Places NZ itinerary you'll experience the real Hidden Gems New Zealand has to offer. Mt. Taranaki, Stewart Island, Otago and more.`,
    highlights: [
      "Explore the Ruakuri limestone caves in Waitomo in a much smaller group.",
      "Hiking in the Mt. Egmont/ Taranaki National Park. The rainforest is amazing!",
      "Head over to Stewart Islands for hiking; it's NZ's secret nature & wilderness spot.",
      "Discover remote part in the Fiordland NP; join the Doubtful Sound Overnight Cruise.",
      "In Central Otago have the opportunity to cycle the Otago Rail Trails as a day tour.",
    ],
    image: "/images/itineraries/15-day-new-zealand-pure-places-visit.jpg",
    days: [
      {
        day: 1,
        title: "Auckland",
        description: `A private driver will meet you at Auckland Airport and will take you to your hotel for check-in. After refreshing at the hotel, go out explore the America's Cup village. Climb the city sky tower and see the expansive views. Take a boat trip to beautiful Waiheke Island or cross over to the lovely Devonport village. Check in to Eden Villa Bed & Breakfast Optional - Sky Tower Optional - The Auckland Whale & Dolphin Safari Optional - Explore America's Cup Sailing Auckland`,
      },
      {
        day: 2,
        title: "Waikato",
        description: `Collect your rental car and drive south via Hamilton. Visit the award-winning Hamilton Gardens on the way. Stay at a Farm Cottage near Otorohanga (180 km, 3 hours). This beautiful rural area is known as the 'King Country' and is home to the Waitomo Caves.`,
      },
      {
        day: 3,
        title: "Waikato",
        description: `The stalactites architecture of the Waitomo Caves is breathtaking. Join a walking or boat tour to see the caves. For active adventure, try blackwater rafting through the caves on a rubber tube. We recommend the Ruakuri Cafe, as no wetsuit is required. However, if you prefer the more adventurous 'Black Water Rafting' or abseiling (4 or 7 hours), let us know and we'll include it in your itinerary. Check in to Kamahi Cottage Included - Ruakuri Cave Tour Optional - Waitomo Black Labyrinth`,
      },
      {
        day: 4,
        title: "New Plymouth",
        description: `Travel south towards New Plymouth (181 km, 112 miles, 2 hours). Do the Hairy Feet' tour before continuing to the Marokopa Falls. Go off the beaten track - drive through the beautiful scenic "Forgotten Highway". At New Plymouth, visit Puke Ariki, a world class museum and check out the Len Lye Centre. Pukekura Park is a beautiful nature wonderland and looks amazing at night during the Festival of Lights (mid December to Feb). Stroll along the New Plymouth Coastal Walkway, a 10 km promenade with...`,
      },
      {
        day: 5,
        title: "New Plymouth",
        description: `Explore the many interesting sites of the Taranaki region. For pure nature, the Mt. Egmont/ Taranaki National Park is top of the list! The conical shape of Mount Taranaki provides a dramatic backdrop to the city and has great hiking trails nearby. The denseness of the bush provides pure oxygen and the walking trails well maintained. As you walk through this Garden of Eden, reach out to touch the soft green mosses on the way. Check in to Hosking House Information - Egmont National Park`,
      },
      {
        day: 6,
        title: "Oban",
        description: `Drop off your rental car at New Plymouth airport and take a domestic flight to Invercargill. From Invercargill, take another 25 minute flight to Halfmoon Bay at Stewart Island. The rugged pristine Stewart Island is 64 km long, and 40 km across at its widest point. The island has 700 km of rugged coastline, but only 20 km of road. There is much to see on this untouched piece of paradise. Check in to Glendaruel B&B Information - Stewart Island`,
      },
      {
        day: 7,
        title: "Oban",
        description: `Stewart Island is heaven for nature lovers - a guided nature tour is a must-do. Take a 20 min boat ride to Ulva Island, an idyllic, predator-free bird sanctuary for endangered birds. Ulva Island is home to many plant species and great walking tracks. Your guide, Ulva Goodwillie is named after the Island and is a direct descendant of the first Maori to Stewart Island. She imparts her knowledge from a Maori and local Stewart Island perspective. Check in to Glendaruel B&B Included - Ulva Island ...`,
      },
      {
        day: 8,
        title: "Te Anau",
        description: `Fly back to Invercargill in the morning and collect another rental car. Take the Southern Scenic Route to Te Anau, gateway to the Fiordland National Park and New Zealand's hiking capital. The Fiordland region consists of 1.3 million hectares of untouched national heritage. It is a wonderland of cascading waterfalls and enormous fiords. Outdoor activities include trout fishing, kayaking and bush walks. On arrival, walk along the Waiau River on the Kepler Track. Begin from the 'Rainbow Ridge' s...`,
      },
      {
        day: 9,
        title: "",
        description: `The fiords have a wealth of flora and fauna and New Zealand Fur Seals. Fiordland Crested Penguins can be seen on many of the small islets at the entrance of the fiord. Doubtful Sound is the deepest of the fiords and home to several magnificent waterfalls. Manapouri is the departure point for Doubtful Sound excursions. Choose the privately owned luxury 'Southern Secret' boat or the coastal sailing ship 'Fiordland Navigator'.Fiordland Navigator is a replica of a traditional trading scow and is ...`,
      },
      {
        day: 10,
        title: "Clyde",
        description: `Travel via Queenstown to Clyde, Central Otago. (Manapouri to Clyde: 243 km, 150 miles, 3.5 hours). The scenery of Central Otago is typical tussock grassland within a powerful landscape of ancient mountains and rivers. You can still pan for gold among the miners' old trails, but nowadays, the real gold is Pinot Noir wine. See the region's remote sites and absorb the luxury of having much of this space to yourself.`,
      },
      {
        day: 11,
        title: "Clyde",
        description: `The lovely historic town of Clyde is surrounded by fruit orchards and vineyards. More recently, huge areas of grapes have been planted with local vineyards producing internationally renowned Pinot Noir. Many historic buildings have been refurbished as cafes, bars, and accommodation. A typical example, is the restored and stylish Olivers Lodge and restaurant. This area is famous for the 150 km Central Otago Rail Trail. If time permits, hire a bike to cycle a portion of this trail. Check in to ...`,
      },
      {
        day: 12,
        title: "Twizel",
        description: `Take an easy drive from Clyde via Wanaka and Lindis Pass to Twizel or Lake Tekapo ( 220 km, 135 miles, 3.5 hours). The Aoraki Mount Cook Mackenzie region enjoys clear starry nights, sunny days and turquoise lakes. The area offers 4WD safaris, boating on the glacier lakes, horse treks, fishing, scenic flights with snow landings and numerous walks. Accommodation is limited here, so your stay will vary between Twizel, Mt. Cook Village and Lake Tekapo. Check in to Twizel Central Optional - Air Sa...`,
      },
      {
        day: 13,
        title: "Arthur's Pass National Park",
        description: `Continue north to Geraldine in South Canterbury on SH 79. Stop here and visit the ice cream, cheese and preserves shops. Drive via SH 73 to the Wilderness Lodge Arthurs Pass. (Tekapo to Wilderness Lodge Arthurs Pass: 290 km, 180 miles, 4 hours). Drive through the expansive Canterbury Plains up into the foothills of the Southern Alps. The eastern side of Arthur's Pass National Park has wide, riverbeds and vast beech forests. The western side of the park has deep river gorges flowing through de...`,
      },
      {
        day: 14,
        title: "Arthur's Pass National Park",
        description: `The Arthur's Pass National Park has many gigantic peaks over 2000 metres. All the main valleys of the park are steep sided, with the U-shaped profile typical of glacial action. Above the sub-alpine shrub lands, there are vast rows of alpine fields with wildflowers. Join expert guides to explore this spectacular 6000 acre property and the nearby Arthur's Pass National Park. See 'real' heartland sheep farmers at work and hike mountain trails. Two guided farm or nature activities are included in...`,
      },
      {
        day: 15,
        title: "Auckland",
        description: `Travel to Christchurch via the Canterbury Plains, a vast quilt of agricultural land (135 km, 84 miles, 2 hours). Depending on your flight time, you could still explore the Christchurch region. The French inspired Akaroa fishing village is only 1.5 hours drive away (one-way). Central Christchurch is being renovated but still provides innovative dining options. The surrounds provide a backyard of magnificent alpine heights, premium wineries and a gorgeous coastline.Important to know: every part...`,
      },
    ],
  },
  {
    slug: "16-day-new-zealand-hiking-trip",
    title: "New Zealand Hiking Trip in 16 Days",
    duration: "16 Days",
    category: "Lifestyle & Nature",
    categorySlug: "lifestyle-and-nature",
    intro: `With the 16 days New Zealand Hiking Trip vacation package, you'll discover the best local walks and stay in boutique accommodation.`,
    highlights: [
      "Guided nature and lifestyle tour on the Coromandels.",
      "Limestone caving tour in Waitomo exploring the Ruakuri glowworm caves.",
      "Scenic flight of the thermal area around Rotorua/ North Island.",
      "Guided nature walk into the Yellow-Eyed Penguin colony near Dunedin.",
      "Guided day hike on the famous Milford Track in the Fiordland National Park.",
      "A beautiful scenic cruise in Milford Sound with all transfers included.",
      "Nature walk with a boat transfer and local guide on remote island in Lake Wanaka.",
      "Jet-boating the Matukituki Valley into the Mt. Aspiring National Park.",
    ],
    image: "/images/itineraries/16-day-new-zealand-hiking-trip.jpg",
    days: [
      {
        day: 1,
        title: "Auckland",
        description: `Meet your private driver at the Auckland Airport arrival gate for transfer to your hotel. Explore the America's Cup village. Visit the Sky Tower and get fabulous views of the city and harbour. Take a boat trip to beautiful Waiheke Island or go across to Devonport. Visit the shops and cafes of Parnell Village. If you're arriving early, try to stay awake as long as possible to beat jet lag. Check in to QT Auckland Optional - The Auckland Whale & Dolphin Safari Optional - Explore America's Cup S...`,
      },
      {
        day: 2,
        title: "Whangamata",
        description: `Collect your rental car and drive to the eastern coast on the Coromandel Peninsula (2.5 hours). The Coromandel has beautiful golden beaches plus great swimming and bush walks. Visit the famous hot water beach at Hahei and have a relaxing soak in a natural thermal spring - remember to go at low tide! See the marine wildlife at the Hahei Marine Reserve. Adventure options include scenic boat trips, sea kayaking, scuba diving and surfing. Check in to Brenton Lodge Information - The Coromandel`,
      },
      {
        day: 3,
        title: "Whangamata",
        description: `Join a small group guided nature tour. Explore the local rainforest and beaches - this is a great introduction to New Zealand's natural wonders! Alternatively you can take a guided kayaking tour from Hahei Beach or a scenic boat tour along the stunning Coromandel coastline. Check in to Brenton Lodge Included - Kiwi Dundee Adventures 1 Day Coromandel Circuit Optional - Cathedral Cove Kayak Tours Optional - Hahei Explorer`,
      },
      {
        day: 4,
        title: "Rotorua",
        description: `Travel to the famous Waitomo caves (3 hours) to view the beauty of stalactites. Go on the 'Ruakuri Cave' tour, which takes you on a 2-hour walk through a dry cave. Go 'Black Water Rafting' or do the 'Black Labyrinth' tour and float through the caves on a rubber tube. Alternatively, abseil through the darkness! (takes about 3 hours). Afterwards, drive to Rotorua through the rolling farm country of the Central North Island (2.5 hours). Check in to On The Point Lake Rotorua Included - Ruakuri Ca...`,
      },
      {
        day: 5,
        title: "Rotorua",
        description: `The North Island of New Zealand is a tectonic centre of bubbling mud pools, natural hot springs and volcanoes. In the morning, take a helicopter flight over Rotorua. In this remote place, you'll get a firsthand experience of mother nature's immerse powers. Spend the afternoon being pampered in a luxurious spa. In the evening, take a spiritual journey into Maori culture to enjoy village and performances. Check in to On The Point Lake Rotorua Included - Rotorua Canopy Tours Optional - Volcanic ...`,
      },
      {
        day: 6,
        title: "Otago Peninsula",
        description: `Take a domestic flight to Dunedin and collect another rental car at the airport. Dunedin City is surrounded by dramatic hills and a natural harbour. It was originally settled by whalers, gold miners and migrants from Scotland and China. Dunedin is one of the best preserved Victorian and Edwardian cities in the Southern Hemisphere. Check in to Camp Estate Optional - Larnach Castle Optional - Olveston Historic Home Recommended - Otago Museum Information - Dunedin Recommended - Tunnel Beach`,
      },
      {
        day: 7,
        title: "Otago Peninsula",
        description: `Spend the morning, exploring more of Dunedin City and the Otago Peninsula. In the afternoon join a wildlife tour to see the Royal Albatross and Yellow-Eyed Penguins. This tour is one of the prime nature attractions in New Zealand. As you will not be returning to your accommodation until that evening, we recommend that you have a substantial lunch. Check in to Camp Estate Included - Elm Wildlife Peninsula Encounters Tour`,
      },
      {
        day: 8,
        title: "Te Anau",
        description: `Travel through the Southland region to the Fiordland area. Take the 'Southern Scenic Route' between Invercargill, Riverton and Tuatapere to Te Anau. If you don't mind extra driving time, we recommend a detour through the Catlins - you'll see Nugget Point Lighthouse and the Cathedral Caves. Please note, that if you're visiting the caves, do remember to check the tides beforehand. Check in to High Leys Lodge Information - Catlins Information - Invercargill Information - Riverton Information - T...`,
      },
      {
        day: 9,
        title: "Te Anau",
        description: `Milford Sound is a spectacular area and perfect for hikers. Do the Milford Guided Walk in the morning and the Milford Scenic fjord cruise in the afternoon. Shorter walks can be arranged with a local operator. Choose a series of short walks with your nature guide or a 2.5 hour walk on the Routeburn Track to Key Summit. Return back to Te Anau around 5.30pm. Check in to High Leys Lodge Included - Milford Track Guided Walk Included - Real Journeys Milford Sound Nature Cruise`,
      },
      {
        day: 10,
        title: "Wanaka",
        description: `Leave the lush rainforest and drive to the tussock grasslands of Central Otago. As it is only a 2 hours drive from Te Anau to Queenstown, visit Queenstown or head to a nearby winery for lunch. Continue in the afternoon to the village of Wanaka. Stay in the surrounding countryside for a couple of nights. Check in to WÄnaka Haven Information - Queenstown Recommended - Arrowtown Recommended - Cromwell Heritage Precinct Optional - Gibbston Valley Wines Optional - Mt Difficulty Wines`,
      },
      {
        day: 11,
        title: "Wanaka",
        description: `Wanaka is an extremely scenic spot. Smaller than Queenstown, it has a far more relaxed vibe. This morning, take a cruise on Lake Wanaka and head out to a beautiful remote island for a guided walk. In the afternoon, travel up the Matukituki Valley with a local jet-boating operator. Learn more about the regions history, natural wonders and activities. Check in to WÄnaka Haven Included - Lake Wanaka Cruise & Island Nature Walk Included - Wanaka River Journeys Optional - Eco Wanaka Rob Roy Glacie...`,
      },
      {
        day: 12,
        title: "Fox Glacier",
        description: `Travel through Haast Pass to Fox Glacier (4 hours). There are plenty of stops along the way, so check out the many waterfalls, scenic walks and remote beaches. In the afternoon, take an inspirational helicopter flight with a snow landing on the Franz Josef or Fox Glacier. Alternatively, join a heli-hiking tour - this involves two short heli flights and a 2 hour guided walk on the ice. Check in to Distinction Fox Glacier Te Weheka Hotel Optional - Flying Fox Helihike Included - The Helicopter ...`,
      },
      {
        day: 13,
        title: "Hokitika",
        description: `There are hardly any towns on the 600 kms of coastal road between Karamea and Jackson Bay, so take plenty of refreshments. On this road trip you'll see the absolute unbridled beauty of native forests, beaches and lagoons. An early morning walk around Lake Matheson is a great start to the day. Explore the goldfield walkway at Ross and stop by the shores of Lake Ianthe. Consider a visit to the White Heron colony near Whataroa. The town of Hokitika is famous for New Zealand Pounamu (Jade) and go...`,
      },
      {
        day: 14,
        title: "Bronte",
        description: `Today you'll be travel along 'The Great Coast Road', one of the Top 10 Coastal Drives in the world. Drive along the ancient limestone cliffs of Paparoa National Park, home to the world's smallest penguins. Stop at Charleston and go underground rafting. See the famous Pancake Rocks and Blowholes at Punakaiki. Visit the seal colony at Cape Foulwind. Stop at Westport for refreshments. Continue via the Buller Gorge to the Abel Tasman region. Check in to Te Koi the Lodge at Bronte Information - Pa...`,
      },
      {
        day: 15,
        title: "Bronte",
        description: `When it comes to lush greenery and sea views, the Abel Tasman Coast Track is unsurpassed! This great New Zealand walk passes through golden beaches and coastal forests. Take a day trip with Abel Tasman Charters, a very personalised trip. Or you can use a water taxi to do the coastal walk. Another option is a guided sea kayaking tour for a half or full day. Check in to Te Koi the Lodge at Bronte Included - Abel Tasman Charters Taranui Optional - R&R Kayaks Optional - Abel Tasman Golden Future ...`,
      },
      {
        day: 16,
        title: "Auckland",
        description: `Drop off your rental car at Nelson airport and take a domestic flight to Auckland. Connect to your international flight or continue with your travels to other parts of the North Island. Plan With a Local Insider View interactive map --> - Opens in a new window - --> Expand Map + Included Highlights Kiwi Dundee Adventures 1 Day Coromandel Circuit Ruakuri Cave Tour Rotorua Canopy Tours Elm Wildlife Peninsula Encounters Tour Milford Track Guided Walk Real Journeys Milford Sound Nature Cruise Lak...`,
      },
    ],
  },
  {
    slug: "18-day-new-zealand-itinerary",
    title: "New Zealand Itinerary 3 Weeks",
    duration: "18 Days",
    category: "Lifestyle & Nature",
    categorySlug: "lifestyle-and-nature",
    intro: `This New Zealand itinerary 3 weeks package allows plenty of time to enjoy North & South Island highlights. Travel real heartland, meet people.`,
    highlights: [
      "Guided sea-kayaking tour - half or full day - at the Coromandel Peninsula.",
      "Black Water Rafting through glowworm caves limestone caves in Waitomo.",
      "Scenic flight of the thermal and volcano areas around Rotorua/ North Island.",
      "Guided nature walk into the Yellow-Eyed Penguin colony near Dunedin.",
      "Guided day hike on the famous Milford Track in the Fiordland National Park.",
      "Scenic cruise into Milford Sound - one of the most magic places in NZ.",
      "Nature walk and boat transfer with a local guide on Wanaka's remote island.",
      "Jet-boating into the West Matukituki Valley, Mt Aspiring National Park.",
    ],
    image: "/images/itineraries/18-day-new-zealand-itinerary.jpg",
    days: [
      {
        day: 1,
        title: "Auckland",
        description: `Meet your private driver at the arrival gates of Auckland Airport for transfer to your hotel. After check-in, stroll through the America's Cup village. Visit the Sky Tower and take in the views of the city and harbour. Take a boat trip to beautiful Waiheke Island or head across to Devonport. Visit the shops and cafes of Parnell Village. Check in to QT Auckland Optional - The Auckland Whale & Dolphin Safari Optional - Explore America's Cup Sailing Auckland`,
      },
      {
        day: 2,
        title: "Hahei",
        description: `Collect your rental car and drive to the eastern coast on the Coromandel Peninsula (2.5 hours). The Coromandel is famous for its golden beaches, great swimming and bush walks. Take a relaxing soak in a natural thermal spring at Hahei beach - make sure you go at low tide! See the marine wildlife at the Hahei Marine Reserve. Choose your adventure - scenic boat trips, sea kayaking and scuba diving. There are great surfing options. Check in to Hahei Bed & Breakfast Information - The Coromandel`,
      },
      {
        day: 3,
        title: "Hahei",
        description: `Join the Kiwi Dundee guided nature tour and explore the local rainforest and beaches. This is the ideal introduction to New Zealand's nature and beauty spots! Alternatively, join a guided kayaking tour from Hahei Beach or take a scenic boat tour along the stunning Coromandel coast. Check in to Hahei Bed & Breakfast Included - Cathedral Cove Kayak Tours Optional - Kiwi Dundee Adventures 1 Day Coromandel Circuit Optional - Hahei Explorer`,
      },
      {
        day: 4,
        title: "Rotorua",
        description: `Drive to the famous Waitomo caves (3 hours) and discover the beauty of stalactites. We have included the 'Ruakuri Cave' tour, a dry-cave walk- through. This trip takes about 2 hours. Go 'Black Water Rafting' or do the 'Black Labyrinth' tour where you float through the caves on a rubber tube. Alternatively, abseil through the darkness! (takes about 3 hours). Afterwards, drive through rural farm country to Rotorua (2.5 hours). Check in to Regent of Rotorua Included - Ruakuri Cave Tour Optional ...`,
      },
      {
        day: 5,
        title: "Rotorua",
        description: `The North Island of New Zealand is the tectonic centre of thermal activity. In the morning, take a helicopter flight over Rotorua's an active volcano areas. Here you can experience the immerse power of mother nature in a remote place. In the afternoon, be pampered in a luxurious spa. For the evening, take a spiritual journey into Maori culture with village and performance experiences. Check in to Regent of Rotorua Included - Volcanic Air Optional - Rotorua Canopy Tours Recommended - Waimangu ...`,
      },
      {
        day: 6,
        title: "Lake Pukaki",
        description: `Return your rental car to Rotorua airport and take a domestic flight to Christchurch. Collect another rental car from Christchurch airport and travel to Lake Tekapo. Take the the Inland route along the Rakaia Gorge through South Canterbury to Geraldine. Continue on to Lake Tekapo (4 hours drive). See for yourself, the famous turquoise colour of Lake Tekapo. Visit the Church of the Good Shepherd and the Mt John Observatory.`,
      },
      {
        day: 7,
        title: "Lake Pukaki",
        description: `Take a day trip from Lake Tekapo to the Mount Cook National Park. This area has wonderful mountain walks, 4WD safaris, boating on the glacier lakes and scenic flights with snow landings. Don't miss the chance to do some stargazing at Mt. John - this is a highly recommended night tour. Remember to pre-book for all these tours. Check in to Mt Cook Lakeside Retreat Optional - Earth & Sky Observatory Optional - Tekapo Springs Optional - Air Safaris Tekapo Optional - Glacier Explorers Aoraki Mt Co...`,
      },
      {
        day: 8,
        title: "Otago Peninsula",
        description: `Drive on through the MacKenzie Country, down the Waitaki Valley and onto the eastern coast. Dunedin City is surrounded by dramatic hills and a natural harbour. It was originally settled by whalers, gold miners and migrants from Scotland and China. Dunedin has some of the best preserved Victorian and Edwardian architecture in the Southern Hemisphere. Check in to Camp Estate Optional - Larnach Castle`,
      },
      {
        day: 9,
        title: "Otago Peninsula",
        description: `This morning, go out exploring more of Dunedin and the Otago Peninsula. Join a wildlife tour in the afternoon - visit the Royal Albatross sanctuary where you might catch sight of the extremely rare Yellow-Eyed Penguin. This is one of the main nature attractions in New Zealand nature enthusiasts love. You won't be returning to your accommodation until the evening, so do have a substantial lunch. Check in to Camp Estate Included - Elm Wildlife Peninsula Encounters Tour Optional - Olveston Histo...`,
      },
      {
        day: 10,
        title: "Te Anau",
        description: `Drive through the Southland region to the Fiordland area. Take the 'Southern Scenic Route' between Invercargill, Riverton and Tuatapere to Te Anau. If you don't mind driving longer, take a detour via the Catlins - on this route, you'll see Nugget Point Lighthouse and the Cathedral Caves. Do check the tides before visiting the caves.`,
      },
      {
        day: 11,
        title: "Te Anau",
        description: `Milford Sound is a spectacular scenic wonderland- perfect for nature lovers and hikers. Do the Milford Guided Walk in the morning and the Milford Scenic fjord cruise in the afternoon. Shorter walks can be arranged with a local operator. Choose a series of short walks with your nature guide or a 2.5 hour walk on the Routeburn Track to Key Summit. Return back to Te Anau around 5.30pm. Check in to High Leys Lodge Included - Milford Track Guided Walk Included - Real Journeys Milford Sound Scenic ...`,
      },
      {
        day: 12,
        title: "Wanaka",
        description: `Depart the green rainforests and drive to the tussock grasslands of Central Otago. As it is only a 2-hour drive from Te Anau to Queenstown, you may want to check out Queenstown or head to a nearby winery for lunch. Continue in the afternoon to the charming Wanaka village. You'll be staying in the surrounding countryside of Wanaka for a couple of nights.`,
      },
      {
        day: 13,
        title: "Wanaka",
        description: `Wanaka is an lovely scenic spot and much smaller than Queenstown - a much more relaxed village vibe. In the morning, join a cruise on Lake Wanaka and head out to the beautiful Mou Waho Island for a guided walk. In the afternoon, take a jet boat tour up the Matukituki Valley. Learn more about the regions history, natural wonders and activities. Check in to Copper Beech Wanaka - Luxury Bed & Breakfast Included - Lake Wanaka Cruise & Island Nature Walk Included - Wanaka River Journeys Optional -...`,
      },
      {
        day: 14,
        title: "Fox Glacier",
        description: `Travel through Haast Pass to Fox Glacier (4 hours). You'll have many opportunities to visit waterfalls and take short forest walks. In the afternoon, take an inspirational helicopter flight and land on the snow at Franz Josef or Fox Glacier. As an alternative, you can join a heli-hiking tour, which involves two short heli flights and a 2 hour guided walk on the ice. Check in to Distinction Fox Glacier Te Weheka Hotel Optional - Flying Fox Helihike Included - The Helicopter Line Fox Glacier`,
      },
      {
        day: 15,
        title: "Greymouth",
        description: `There are hardly any towns on the 600 kms of coastal road between Karamea and Jackson Bay. However, you'll enjoy the unbridled beauty of native forests, beaches and lagoons. Start your day with an early morning walk around Lake Matheson. Explore the goldfield walkway at Ross and stop by the shores of Lake Ianthe. We highly recommend a visit to the White Heron colony near Whataroa. Drive on to the town of Hokitika, which is famous for New Zealand Pounamu (Jade) and gold. Check in to Breakers B...`,
      },
      {
        day: 16,
        title: "Bronte",
        description: `Travel along 'The Great Coast Road', one of the Top 10 Coastal Drives in the world. The Paparoa National Park is home to the world's smallest penguins. Stop at Charleston and go underground rafting. See the famous Pancake Rocks and Blowholes at Punakaiki. Visit the seal colony at Cape Foulwind, then stop at Westport for refreshments. Continue via the Buller Gorge to the Abel Tasman region.`,
      },
      {
        day: 17,
        title: "Bronte",
        description: `The sea views and lush native bush of the Abel Tasman Coastal Track is unsurpassed! This great New Zealand walk passes through golden beaches and coastal forests. Do a day trip with Abel Tasman Charters - a very personalised tour. Alternatively, use a water taxi to the coastal walk or take a guided sea kayaking tour for a half or full day. If you are keen on nature and wildlife, join an Eco tour in a small party group. Check in to Te Koi the Lodge at Bronte Included - Abel Tasman Charters Tar...`,
      },
      {
        day: 18,
        title: "Northern Cape",
        description: `Drop off your rental car at Nelson airport and take a domestic flight to Auckland. Connect with your international flight in the afternoon or evening Plan With a Local Insider View interactive map --> - Opens in a new window - --> Expand Map + Included Highlights Cathedral Cove Kayak Tours Ruakuri Cave Tour Volcanic Air Elm Wildlife Peninsula Encounters Tour Milford Track Guided Walk Real Journeys Milford Sound Scenic Cruise Lake Wanaka Cruise & Island Nature Walk Wanaka River Journeys The He...`,
      },
    ],
  },
  {
    slug: "new-zealand-lotr-locations",
    title: "New Zealand LOTR Locations",
    duration: "16 Days",
    category: "Unique Travel NZ",
    categorySlug: "unique-travel-new-zealand",
    intro: `Overall there are 23 main New Zealand LOTR filming locations. Some of the key sights such as Hobbiton Village, the Dart River and Skippers Canyon areas are easily discovered. For other sites it's best to join a local tour guide to get the full benefit of those sights.`,
    highlights: [
      "Explore Auckland",
      "Explore Rotorua",
      "Explore Ohakune",
      "Explore Wellington",
      "Explore Abel Tasman National Park",
      "Explore Christchurch",
    ],
    image: "/images/itineraries/new-zealand-lotr-locations.jpg",
    days: [
      {
        day: 1,
        title: "Auckland",
        description: `A private driver will meet you at the arrival gate at Auckland Airport for transfer and hotel check in. Check in to Grand Millennium Auckland Optional - Sky Tower`,
      },
      {
        day: 2,
        title: "Rotorua",
        description: `Collect your car and drive south into the Waikato region (225 km, 140 miles, 3 hours). This area is famous for the Waitomo caves and the 'Hairy Feet Tour' where you'll get to see the actual locations shown in the first Hobbit Movie - a very authentic small group experience. If you're a Lord of the Rings fan, this is a must-do tour - the scenery is beautiful. In the afternoon continue travelling to Rotorua (140 km, 87 miles, 2 hours). Check in to Ngongotaha Lakeside Lodge Included - Hairy Feet...`,
      },
      {
        day: 3,
        title: "Rotorua",
        description: `Rotorua is in the central North Island and is famous for bubbling mud pools and natural hot springs. Rotorua offers a spiritual journey into Maori culture with village and performance experiences. The Lord of the Rings Movie Set Tour is set on picturesque private farmland near Matamata, only an hours drive from Rotorua. The lush dairy farming landscape around the Waikato town of Matamata was used to portray the peaceful Shire region of Middle-earth. The village of Hobbiton was created here an...`,
      },
      {
        day: 4,
        title: "Ohakune",
        description: `Travel south to the Tongariro National Park. On the way, visit some of New Zealand key thermal sites. Remember to stop at Lake Taupo, New Zealand's largest lake. It's a reasonably short drive, but there is so much to see and do in this area. Check in to Manuka Lodge Optional - Orakei Korako Geothermal Park & Cave Optional - Wai-O-Tapu Thermal Wonderland Optional - Waimangu Volcanic Valley`,
      },
      {
        day: 5,
        title: "Ohakune",
        description: `Explore the Tongariro National Park today. In autumn 2000, the Tongariro National Park was home to the most sinister of the Lord of the Rings locations, Mordor, the stronghold of the dark Lord Sauron. Mordor, is actually the great volcanic plateau filled with geological wonders known as Gorgoroth. Much of Frodo and Sam's journey into the land of Sauron was filmed on and around the Tongariro National Park. The area has jagged volcanic rock formations and eerie barren landscapes, ideally suited...`,
      },
      {
        day: 6,
        title: "Wellington",
        description: `Travel further south via the Wanganui River region, Kapiti Coast and on to Wellington. Here you'll have two nights to explore the Wellington city and the surrounding areas. Wellington is home to the Weta Workshop, Weta Digital and the Miramar film empire which is central to The Hobbit Trilogy production. The movie business centre is off-limits to visitors, however Lord of the Rings fans can experience the Weta Cave. Check in to Novotel Wellington Included - Wellington`,
      },
      {
        day: 7,
        title: "Wellington",
        description: `Join the Wellington Lord of the Rings Tour - a must-do for fans. Start with a visit to the lookout on Mount Victoria. Then visit the locations used in the Trilogy like the Outer Shire, Hobbiton Woods & Dunharrow. Drive out to the Hutt Valley to Kaitoke Regional park, the location of Rivendell. Along the way, visit Isengard, Fords of Isen and see where Helms Deep & Minas Tirith were filmed. This full day tour includes an Orc-sized picnic or cafe lunch plus a visit to the famous Weta Cave. Chec...`,
      },
      {
        day: 8,
        title: "Abel Tasman National Park",
        description: `This morning, take the Interislander ferry to Picton on the South Island, arriving in the early afternoon. Continue travelling to Nelson, which is about 1.5 hours drive away. A good alternative route is via the Queen Charlotte Scenic Drive.`,
      },
      {
        day: 9,
        title: "Abel Tasman National Park",
        description: `Nelson is home to Jens Hansen, the goldsmith that created the 40 different rings used in production. One of the original rings is on display and copies can be bought in 9 and 18ct gold. From Nelson drive west over Takaka Hill, the filming site for Chetwood Forest. Here the Ranger 'Strider' led the hobbits into the rough country east of Bree in an attempt to escape the Black Riders. You'll need to catch a helicopter to see where the fellowship hid from Saruman's black crows. Ask the pilot to s...`,
      },
      {
        day: 10,
        title: "Christchurch",
        description: `Travel via the central island route to Christchurch, which takes about a 6 hours scenic drive. Alternatively you can take a domestic flight to save valuable time.`,
      },
      {
        day: 11,
        title: "Christchurch",
        description: `Join the Lord of the Rings Tour from Christchurch and journey to another LOTR filming location - the remote and beautiful Mt Potts High Country station, home of Mt Sunday. See how this peaceful mountain was transformed into Edoras, the capital city of the Rohan people portrayed in the trilogy. Immerse yourself in the natural, unspoilt beauty of this breathtaking area with its sparkling clear lakes, glistening blue rivers and fresh, crisp mountain air. Check in to Eliza's Manor Included - Lord...`,
      },
      {
        day: 12,
        title: "Queenstown",
        description: `Take the inland scenic route via Lake Tekapo and Mt. Cook to Wanaka. This beautiful scenic drive will take about 6.5 hours. Near Twizel in the Mackenzie Country, Peter Jackson filmed the epic battle of the Pelennor Fields. Here, thousands of orcs bred by Sauron clashed with the men of Gondor and Rohan. The grassy fields that stretch to the foothills of the mountains look exactly as described in The Lord of the Rings Trilogy. The location is on private land, however you can arrange a tour in t...`,
      },
      {
        day: 13,
        title: "Queenstown",
        description: `The "southern lakes" region has key locations for the LOTR filming. From the village of Glenorchy, at the northern end of Lake Wakatipu, you can see the north-western slopes of Mount Earnslaw, which featured in the opening sequence of The Two Towers. From Glenorchy, you'll also discover Lothlorien - the beech forest on the road to Paradise. Another memorable location is found near Queenstown at Arrowtown. Here you can walk to the Ford of Bruinen on the Arrow River. You can also walk to Wilcox...`,
      },
      {
        day: 14,
        title: "Te Anau",
        description: `Drive via Queenstown to Te Anau next to the Fiordland National Park. The Waiau River between Te Anau and Manapouri represented the River Anduin as the Fellowship paddled south from LothlÃ³rien. The surrounding high peaks were used to depict the rough country south of Rivendell. To discover Fanghorn Forest, ask for the directions to Takaro Road, which is near Te Anau. Both sides of the road were filmed as Fangorn Forest - remote cameras were strung from high wires to film Aragon moving through ...`,
      },
      {
        day: 15,
        title: "Te Anau",
        description: `A 'must see' in the area is one of the fjords in the Fiordland National Park. Join a guided day tour from Manapouri into the Doubtful Sound. This fjord is also called the 'Sound of Silence' with an original landscape unchanged for millions of years. Check in to Dusky Ridges Included - Real Journeys - Doubtful Sound Wilderness Cruise`,
      },
      {
        day: 16,
        title: "Southland",
        description: `Travel either the 'Southern Scenic Route' to Invercargill or back to Queenstown. Then fly out to Christchurch or Auckland and connect with your international flight. Also, you can extend your stay and add another location into your itinerary.Important to know: every part of this itinerary can be amended to your personal requirements. We can add, delete or amend. Just contact us and it will be done! Plan With a Local Insider View interactive map --> - Opens in a new window - --> Expand Map + I...`,
      },
    ],
  },
  {
    slug: "10-days-south-island-honeymoon",
    title: "10 Days South Island Honeymoon",
    duration: "10 Days",
    category: "Honeymoon Packages",
    categorySlug: "honeymoon-packages-new-zealand",
    intro: `The 10 Days South Island honeymoon is perfect for lovers. Participate at amazing tour experieinces and stay in private vineyard cottages and stylish lodges.`,
    highlights: [
      "Discover the lush native forest of the famous Milford Track.",
      "Jet boat down the beautiful Wanaka River and take a flight over majestic glaciers.",
      "Indulge your passion for the outdoors with skydiving, zip-lining and caving.",
      "Explore the beautiful Abel Tasman National Park by kayaking between the beaches.",
      "Relax in a locally-owned vineyard or simply enjoy a romantic walk on a golden beach.",
    ],
    image: "/images/itineraries/10-days-south-island-honeymoon.jpg",
    days: [
      {
        day: 1,
        title: "Te Anau",
        description: `Take a domestic flight from Auckland to Queenstown and collect your rental car. Drive to Te Anau, a 2 hour drive from Queenstown airport. Check-in to your romantic accommodation cottage then do an easy local walk, such as the nearby Kepler Track.`,
      },
      {
        day: 2,
        title: "Te Anau",
        description: `An early start today with pick-up from Te Anau and transport to Milford Sound. With your local guide you'll take a short water taxi ride to the beginning of the Milford Guided Day Track. See lush rain-forests, breath pure oxygen and view local bird-life. Transfer back to Milford Sound Wharf in the afternoon and join the scenic cruise into the fjord. Transfer back to Te Anau. Check in to Dusky Ridges Included - Milford Track Guided Walk Included - Real Journeys Milford Sound Scenic Cruise`,
      },
      {
        day: 3,
        title: "Wanaka",
        description: `The drive to Queenstown only takes 2.5 hours, so you'll have time to check out the original Kawarau Bungy Bridge and local wineries before heading to Wanaka. Wanaka has a relaxed village atmosphere and if you want a laid back vibe, stay outside Wanaka is a peaceful and private lodge. If you crave the nightlife and world-class facilities, then stay in Queenstown. Either way, the Wanaka-Queenstown region (with Cromwell and Cardrona in between) offers an endless supply of active adventure. This ...`,
      },
      {
        day: 4,
        title: "Wanaka",
        description: `Wanaka is a glorious place to hang out and do local tours and fun activities. In the morning, join the exciting Wanaka River Journeys, heading up the Matukituki River and learn more about the Otago region. In the afternoon do one of the local hikes or join one of the optional tours listed. Lots to do and see in Wanaka! Check in to Wanaka Haven Included - Wanaka River Journeys Optional - Wanaka Highlights Safari Optional - Skydive Wanaka Optional - Wildwire Go Wild Waterfall Climb`,
      },
      {
        day: 5,
        title: "Fox Glacier",
        description: `Leave the dry Otago region and travel via the Haast Pass to the lush rainforest of the Westcoast Region (about 4 hours). From Haast to Jackson Bay, there are empty shingle beaches, lakes and wetlands. Consider doing the Waiatoto River Jet Boating Safari to explore the local wilderness rivers. Do the Lake Matheson loop Walk (about 1 hour) or the glacier face walk in the Fox Glacier valley. Check in to Distinction Fox Glacier Te Weheka Hotel Optional - The Helicopter Line Fox Glacier Optional -...`,
      },
      {
        day: 6,
        title: "Greymouth",
        description: `The heli-hiking trip up the Fox Glacier is one of those 'unforgettable' honeymoon experiences. Join this trip in the morning (takes about 3 hours). Leave Fox Glacier after lunch and travel north with exciting stops on the way. Time-permitting, visit the White Heron colony near Whataroa Stop for a break in Hokitika, famous for New Zealand Pounamu (Jade). Stay in a beachfront B&B lodge outside Greymouth which overlooks the beautiful Tasman Sea! Plus, we recommend a romantic walk with sunset ove...`,
      },
      {
        day: 7,
        title: "Abel Tasman National Park",
        description: `The Great Coast Road as one of the Top 10 Coastal Drives in the world! Drive alongside the ancient limestone cliffs of Paparoa National Park. Go underground rafting at Charleston, caving at Fox River and visit the famous Pancake Rocks and Blowholes at Punakaiki. Stop at Cape Foulwind (with a short walk to the seal colony), before you travel inland along the mighty Buller River. Arrive in the beautiful Abel Tasman region in the late afternoon. Check in to Kina Beach Vineyard Included - Paparoa...`,
      },
      {
        day: 8,
        title: "Abel Tasman National Park",
        description: `After all the driving its time to get active again! Join a guided kayaking day tour into the Abel Tasman National Park. A self-guided walk is included, if you wish. The Abel Tasman National Park is famous for its golden beaches, stunning landscape, good food and wine. It is the perfect place to complete your last few days of your South Island honeymoon itinerary. Check in to Kina Beach Vineyard Included - Abel Tasman Kayaks Optional - Abel Tasman Charters Taranui`,
      },
      {
        day: 9,
        title: "Abel Tasman National Park",
        description: `Having another day in the region is a great way to relax before heading back home. Do some beach walks or rent a bicycle to experience local food and wine. Or just simply enjoy your South Island honeymoon retreat for a bit longer. Naturally there are plenty of other tours to join as well! Check in to Kina Beach Vineyard Optional - Skydive Abel Tasman Optional - Abel Tasman Golden Future Tour Optional - Wheelie Fantastic Cycle Tours`,
      },
      {
        day: 10,
        title: "Tasman",
        description: `Take a domestic flight from Nelson to Auckland and connect with your international flight in the afternoon/ evening.Important to know: every part of this itinerary can be amended to your personal requirements. We can add, delete or amend. Just contact us and it will be done! Download Your Free Travel Planner View interactive map --> - Opens in a new window - --> Expand Map + Included Highlights Milford Track Guided Walk Real Journeys Milford Sound Scenic Cruise Wanaka River Journeys Flying Fo...`,
      },
    ],
  },
  {
    slug: "12-day-new-zealand-honeymoon-itinerary",
    title: "12 Day New Zealand Honeymoon Itinerary",
    duration: "12 Days",
    category: "Honeymoon Packages",
    categorySlug: "honeymoon-packages-new-zealand",
    intro: `With this 12 day New Zealand honeymoon itinerary you cover both North and South Island. See key attractions, join exciting tours, experience romantic stays.`,
    highlights: [
      "Black Labyrinth caving in Waitomo - explore limestone caves with a wetsuit.",
      "Kayak the beautiful Abel Tasman National Park, plus join a guided nature walk.",
      "Feeling firsthand, the lush green rainforest while walking the famous Milford Track.",
      "Stay in romantic vineyard cottages and stylish boutique lodges with dramatic views.",
      "Fill your senses with the romance of this unique and pure land for your special trip.",
    ],
    image: "/images/itineraries/12-day-new-zealand-honeymoon-itinerary.jpg",
    days: [
      {
        day: 1,
        title: "Auckland",
        description: `A private driver will meet you at the arrival gate at Auckland Airport for transfer and hotel check in. Explore the America's Cup village and view the from the Sky Tower. Take a boat trip to beautiful Waiheke Island or Devonport village. Visit the shops and cafes of Parnell Village. Check in to Rendezvous Heritage Hotel Auckland Optional - Sky Tower Optional - Explore America's Cup Sailing Auckland`,
      },
      {
        day: 2,
        title: "Rotorua",
        description: `Collect your rental car in the morning then travel to the famous Waitomo caves. This easy drive will take about 3 hours through stunning rolling hill side country. For pure adventure and honeymoon fun, try 'Black Water Rafting' through the caves on a rubber tube! In the afternoon, continue travelling to Rotorua, which will take you another two hours. Yes, it's a full day, but worth every minute! Check in to Flemington Lake View B&B Included - Waitomo Black Labyrinth Optional - Ruakuri Cave To...`,
      },
      {
        day: 3,
        title: "Rotorua",
        description: `Rotorua is a region of bubbling mud pools and natural hot springs. Be pampered in a luxurious spa while on honeymoon. Rotorua offers a spiritual journey into Maori culture with village and performance experiences. For outdoor adventures, the Canopy Zipline tour is an amazing experience and wildlife conservation project. Check in to Flemington Lake View B&B Included - Rotorua Canopy Tours Included - Mitai Maori Village Optional - Volcanic Air Optional - Hobbiton Movie Set & Farm Tours Recommen...`,
      },
      {
        day: 4,
        title: "Tasman",
        description: `Leave your rental car at the airport and take a domestic flight to Nelson. Collect another rental car at the Nelson Airport car park. The Nelson/Tasman region is an aquatic paradise, surrounded by the Tasman Ocean, sandy beaches and three National Parks. Enjoy quality artwork, premium wines and beautiful landscapes. Stay at a romantic vineyard cottage - a real highlight in your honeymoon itinerary!`,
      },
      {
        day: 5,
        title: "Tasman",
        description: `The beautiful Abel Tasman Coastal walk passes through golden beaches and coastal forests. Take a personalized day trip with Eco Abel Tasman tours or kayak the national park and explore the local wildlife and beach. Another popular option is a guided sea kayaking tour for a half or full day. You can also use an E-bike to make your way back to your vineyard cottage. Check in to Kina Beach Cottages Included - Abel Tasman Golden Future Tour Optional - R&R Kayaks Optional - Wheelie Fantastic Cycle...`,
      },
      {
        day: 6,
        title: "Greymouth",
        description: `Drive from the Nelson-Tasman region via the Buller Gorge to the gorgeous West Coast of the South Island. Today you'll be in the Punakaiki region. The Great Coast Road is one of the Top 10 Coastal Drives in the world. Stop at Charleston to go underground rafting. See the famous Pancake Rocks and Blowholes at Punakaiki. Visit the seal colony at Cape Foulwind. Check in to Breakers Boutique Accommodation Recommended - Paparoa National Park Recommended - Punakaiki Pancake Rocks and Blowholes`,
      },
      {
        day: 7,
        title: "Fox Glacier",
        description: `Travel from Punakaiki to Fox or Franz Josef. Enjoy the sight of beautiful native forests, beaches and lagoons. Explore the goldfield walkway at Ross and stop by the shores of Lake Ianthe. Visit the White Heron colony near Whataroa. Buy some New Zealand Pounamu (Jade) in the town of Hokitika. Include a helicopter flight and snow landing on the Franz Josef or Fox Glacier. It's a must do for any honeymoon couple travelling the West Coast. Check in to Distinction Fox Glacier Te Weheka Hotel Optio...`,
      },
      {
        day: 8,
        title: "Queenstown",
        description: `Join a helicopter flight onto the glaciers (with landing) in the morning. Alternatively do a 'heli hiking' tour, which takes 3 hours. Thereafter, travel via the 'Gates of Haast' to Queenstown. The drive will take 5.5 hours. From Haast to Jackson Bay, there are empty beaches, lakes and the soaring Southern Alps. Arrive at Queenstown for some serious adventure action! Check in to Kinross Cottages Included - Flying Fox Helihike`,
      },
      {
        day: 9,
        title: "Queenstown",
        description: `Queenstown is located on the shore of sparkling Lake Wakatipu. Choose your adventure - bungy jumping, sky diving, jet boating, horse trekking and river rafting. The Dart River Safari tour is the ideal combo and includes a guided walk through an ancient forest, a visit to the LOTR filming locations and a jet-boat ride down the Dart River. Check in to Kinross Cottages Included - Dart River Safaris Optional - Nzone Skydive Queenstown Optional - Shotover Jet Optional - Queenstown Wine Trail Tours...`,
      },
      {
        day: 10,
        title: "Te Anau",
        description: `Drive from Queenstown to Te Anau, New Zealand's hiking capital. On the afternoon of your arrival, do the 'LOTR walk' along the Waiau River (on the Kepler Track). Start from 'Rainbow Ridge' swing bridge between Te Anau and Manapouri. The Fiordland region consists of 1.3 million hectares of untouched national heritage park with great outdoor activities. Enjoy the drama of giant waterfalls and enormous fiords. Check in to Dusky Ridges Recommended - Kepler Track Car Park Information - Fiordland`,
      },
      {
        day: 11,
        title: "Te Anau",
        description: `Milford Sound is full of spectacular natural features. Take a break from driving - explore Milford Sounds by joining a local tour starting from Te Anau. This is a small group tour and begins with a leisurely Nature Boat Cruise to the Tasman Sea to see the magnificent scenery and wildlife. At the end of the cruise, the overland part of the tour begins. Choose from a series of short walks with a nature guide or a 2.5 hour walk on the Routeburn Track to Key Summit. Return back to Te Anau around ...`,
      },
      {
        day: 12,
        title: "North Island",
        description: `Travel back to Queenstown or via the 'Southern Scenic Route' to Invercargill before flying back to connect with your international flight. Alternatively, you may extend your stay in this region or any other location within New Zealand and relax at the end of your honeymoon in New Zealand.Important to know: every part of this itinerary can be amended to your personal requirements. We can add, delete or amend. Just contact us and it will be done! Download Your Free Travel Planner View interacti...`,
      },
    ],
  },
  {
    slug: "14-days-honeymoon-package-nz",
    title: "14 Days Honeymoon Package NZ",
    duration: "14 Days",
    category: "Honeymoon Packages",
    categorySlug: "honeymoon-packages-new-zealand",
    intro: `Travel at a relaxing pace on the 14 days honeymoon package NZ itinerary. Explore both the North and South Island of New Zealand. Go Black Water Rafting, explore the Abel Tasman National Park, fly over giant glaciers and walk the famous Kepler Track. Stay in stylish boutique ac...`,
    highlights: [
      "Dig your own spa at a Hot Water Beach a top honeymoon destination.",
      "Explore the famous Waitomo Caves and go Black Water Rafting.",
      "Be awed by beauty of the Abel Tasman National Park.",
      "Be sure to see the giant Sperm Whales at Kaikoura.",
      "Fly over giant glaciers on the West Coast and walk the ice.",
      "Take a thrilling jet boat ride at Shotover Canyon near Queenstown.",
      "Walk the beautiful Kepler Track in Fiordland National Park.",
    ],
    image: "/images/itineraries/14-days-honeymoon-package-nz.jpg",
    days: [
      {
        day: 1,
        title: "Auckland",
        description: `After your arrival at Auckland Airport, collect your rental car. Check-in at your hotel. Explore the America's Cup village, climb the Sky Tower for great views of the city. Take a boat trip to beautiful Waiheke Island or across to the village of Devonport. Check in to QT Auckland Optional - Sky Tower Optional - Explore America's Cup Sailing Auckland`,
      },
      {
        day: 2,
        title: "Hahei",
        description: `Start your New Zealand honeymoon itinerary and drive to the eastern coast on the Coromandel Peninsula (2.5 hours). The Coromandel has beautiful golden beaches and great bush walks. The Hahei Beach area is a famous Hot Water Beach where you can soak your body in a natural thermal spring. See the marine wildlife at Cathedral Cove. Adventure options include scenic boat trips, sea kayaking, scuba diving and scooter rides. Great range of restaurants and art galleries.`,
      },
      {
        day: 3,
        title: "Hahei",
        description: `Explore the beaches to the north and dig your own Spa Pool in the sand. This is just one of many NZ honeymoon ideas. From Cooks Beach, drive to the Ferry and park your car. Enjoy a short ferry ride to Whitianga. Take a walk along Buffalo Beach or a stroll into Te Pare Reserve on the eastern side of Hahei Beach. Join an easy guided kayaking tour ex Hahei Beach. Check in to Hahei Bed & Breakfast Included - Cathedral Cove Kayak Tours Optional - Hahei Explorer Optional - Kiwi Dundee Adventures 1 ...`,
      },
      {
        day: 4,
        title: "Rotorua",
        description: `Travel to the famous Waitomo caves (3 hours). For active adventure on your honeymoon in NZ, go blackwater rafting and float through the caves on a rubber tube or abseil through the darkness! The more adventurous 'Black Water Rafting' or abseiling will take much longer so let us know if you want to include that in your itinerary. In the afternoon, arrive in Rotorua (2 hours). If you're doing the 7-hour abseiling tours, you'll need to stay in the Waitomo region for one night. Check in to Regent...`,
      },
      {
        day: 5,
        title: "Rotorua",
        description: `Rotorua has bubbling mud pools and natural hot springs. Experience the atmosphere within a geothermal park and be pampered in a luxurious spa. Take a spiritual journey into Maori culture with village and performance shows. For outdoor adventures, go kayaking, hiking and mountain biking. For an adrenaline rush, go sky-diving. Check in to Regent of Rotorua Included - Rotorua Canopy Tours Included - Mitai Maori Village Recommended - Waimangu Volcanic Valley Recommended - Wai-O-Tapu Thermal Wonde...`,
      },
      {
        day: 6,
        title: "Kaikoura",
        description: `Travel back to Auckland then take a domestic flight to Christchurch and collect a new rental car. Drive to Kaikoura and stay two nights. Kaikoura is famous for Whale-watching and Dolphin Swims, a must do on your honeymoon itinerary.`,
      },
      {
        day: 7,
        title: "Kaikoura",
        description: `Apart from Whale-watching, Kaikoura is also renowned for its great fishing grounds, scuba diving and kayaking. Scenic flights are also available. Check in to Kincaid Cottage Included - Whale Watch Kaikoura Optional - Dolphin Encounter Kaikoura`,
      },
      {
        day: 8,
        title: "Greymouth",
        description: `Drive from the east coast to the west coast of the South Island. The ancient limestone cliffs of Paparoa National Park is home to the world's smallest penguin. Stop at Charleston for underground rafting. See the famous Pancake Rocks and Blowholes at Punakaiki. Visit the seal colony at Cape Foulwind. Check in to Breakers Boutique Accommodation Recommended - Paparoa National Park Recommended - Punakaiki Pancake Rocks and Blowholes`,
      },
      {
        day: 9,
        title: "Franz Josef",
        description: `Explore the goldfield walkway at Ross and stop at Lake Ianthe. Do visit the White Heron colony near Whataroa. The town of Hokitika is famous for New Zealand Pounamu (Jade). A helicopter flight and snow landing on the Franz Josef or Fox Glacier is recommended. Due to limited accommodation options on the Coast, your stay may vary between Punakaiki and Greymouth and Franz Josef/ Fox Villages. Check in to Holly Homestead Bed & Breakfast Recommended - Shantytown Heritage Park Recommended - Hokitik...`,
      },
      {
        day: 10,
        title: "Queenstown",
        description: `Travel on the edge of a wilderness via the 'Gates of Haast'. From Haast to Jackson Bay there are empty beaches and lakes. Join the Waiatoto River Jet Boating Safari to explore the local rivers and wildlife. After the Haast Pass, enter the classic tussock grassland of Otago. Arrive at Queenstown, the 'adventure capital' of New Zealand. Check in to Kinross Cottages Included - The Helicopter Line Fox Glacier Optional - Flying Fox Helihike Optional - Wayne's Waiatoto River Safari`,
      },
      {
        day: 11,
        title: "Queenstown",
        description: `Queenstown is located by Lake Wakatipu and has a fantastic range of adventure activities including bungy jumping, sky diving, jet boating and river rafting. The Dart River Safari tour combo includes a guided walk through an ancient forest, a visit to the LOTR filming locations, then a jet-boat ride down the Dart River. Queenstown has great cycling tracks of all grades. Check in to Kinross Cottages Included - Shotover Jet Optional - Dart River Safaris Optional - Dart River Funyaks Optional - Q...`,
      },
      {
        day: 12,
        title: "Te Anau",
        description: `Enjoy an easy drive from Queenstown to Te Anau, the gateway to the Fiordland National Park and New Zealand's hiking capital. After arrival in the afternoon, walk a portion of the Kepler Track starting from 'Rainbow Ridge' swing bridge between Te Anau and Manapouri. The Fiordland region has 1.3 million hectares of untouched national heritage park and great outdoor activities. Enjoy the drama of giant waterfalls and enormous fiords. Stay a minimum of 2 nights. Check in to Dusky Ridges Optional ...`,
      },
      {
        day: 13,
        title: "Te Anau",
        description: `Milford Sound is carved from glaciers and is a breathtaking fusion of spectacular natural features (2.5 hours one-way). When it rains, the waterfalls are awesome! Drive from Te Anau to Milford Sound to take a nature cruise in the fjord. On your way back, do a short walk on the famous Routeburn Track to Key Summit. Check in to Dusky Ridges Included - Real Journeys Milford Sound Nature Cruise`,
      },
      {
        day: 14,
        title: "Southland",
        description: `Travel back to Queenstown to connect with your international flight. You may want to extend your honeymoon stay in this region or any other location within New Zealand.Important to know: every part of this itinerary can be amended. We can add, delete or amend. Just contact us and we'll make the changes. Download Your Free Planner View interactive map --> - Opens in a new window - --> Expand Map + Included Highlights Cathedral Cove Kayak Tours Waitomo Black Labyrinth Rotorua Canopy Tours Mitai...`,
      },
    ],
  },
  {
    slug: "16-days-active-nz-honeymoon",
    title: "16 Days Active NZ Honeymoon",
    duration: "16 Days",
    category: "Honeymoon Packages",
    categorySlug: "honeymoon-packages-new-zealand",
    intro: `On the 16 days active NZ honeymoon, you'll get to stay longer at each location by using domestic flights. Go Black water rafting, kayak in the Abel Tasman and explore the famous Milford Track. Fly over giant glaciers and land on the snow! Stay in gorgeous romantic accommodatio...`,
    highlights: [
      "Go Black Labyrinth caving in the famous Waitomo Glowworm Caves.",
      "Zip-line between ancient trees near Rotorua . Learn about a conservation project.",
      "Experience the Maori culture in Rotorua and hear their ancient stories and wisdoms.",
      "Meet the rare Yellow-eyed Penguins on the Otago Peninsula near Dunedin.",
      "Kayaking and Half-day hiking in the beautiful Abel Tasman National Park.",
      "Day excursion to Milford Sound. Walking the famous Milford Track and cruise the fjord.",
      "Take a jet boat ride down one of New Zealand's pristine locations - the Dart River.",
      "Helicopter flight over giant glaciers and guided heli-hike walk on the ice.",
    ],
    image: "/images/itineraries/16-days-active-nz-honeymoon.jpg",
    days: [
      {
        day: 1,
        title: "Auckland",
        description: `Look out for your private driver at the arrival gate at Auckland Airport and transfer to your hotel check in. Explore the America's Cup village and get panoramic city views from the Sky Tower. Take a boat trip to beautiful Waiheke Island or the Devonport village. Visit the shops and cafes of Parnell Village. Check in to Legacy Airedale Hotel Auckland Optional - The Auckland Whale & Dolphin Safari Optional - Explore America's Cup Sailing Auckland Optional - Sky Tower`,
      },
      {
        day: 2,
        title: "Whangamata",
        description: `This morning, collect your rental car from the Auckland city depot and start your honeymoon adventure. Drive to the eastern coast on the Coromandel Peninsula (3 hours on the direct route). If you prefer to get off the main highway, take the exit at Botanical Gardens and travel via Kawakawa Bay - very scenic drive. The Coromandel has beautiful golden beaches and bush walks. The Hahei Beach area has a famous hot water beach - at low tide, soak in a natural thermal spring.`,
      },
      {
        day: 3,
        title: "Whangamata",
        description: `Explore the romantic beaches to the north, including Hahei, Cathedral Cove and Cooks Beach. In the morning join a guided, half day sea kayaking tour from Hahei Beach. In the afternoon, take a walk along Cathedral Cove or stroll into Te Pare Reserve on the eastern side of Hahei Beach. Check in to Brenton Lodge Included - Cathedral Cove Kayak Tours Optional - Hahei Explorer Optional - Kiwi Dundee Adventures 1 Day Coromandel Circuit`,
      },
      {
        day: 4,
        title: "Rotorua",
        description: `This morning, drive from the Coromandels to the famous Waitomo caves (about hours). For active adventure on your honeymoon, go blackwater rafting through the caves on a rubber tube or abseil through the darkness! The adventurous 'Black Water Rafting' is included in your travel package. However, if you select the Ruakuri Cave tour, you won't need a wet suit. In the afternoon, continue on to Rotorua, a stunning 2.5 hours drive through the rolling hills of the central North Island. Check in to R...`,
      },
      {
        day: 5,
        title: "Rotorua",
        description: `Rotorua is a region of bubbling mud pools and natural hot springs. Immerse yourself in the atmosphere of a geothermal park and be pampered in a luxurious spa. Rotorua offers a spiritual journey into Maori culture with village and performance experiences. We have scheduled a Maori hangi evening for your NZ honeymoon experience. Check in to Regent of Rotorua Included - Rotorua Canopy Tours Included - Mitai Maori Village Optional - Volcanic Air Optional - Hobbiton Movie Set & Farm Tours Optional...`,
      },
      {
        day: 6,
        title: "Otago Peninsula",
        description: `Take a domestic flight into the deep South to at Dunedin, which save lots of time on your honeymoon. Pick-up a new rental car and make your way into town or onto the Otago Peninsula. This area is famous for its wildlife - specifically the Royal Albatross and the Yellow Eyed Penguin. Another key feature of Dunedin is its local Scottish heritage.`,
      },
      {
        day: 7,
        title: "Otago Peninsula",
        description: `The Royal Albatross Centre is the only place in the world on the mainland where you can view Northern Royal Albatross in their natural habitat. Be aware the Albatross colony is closed between 15 Sept and 25 Nov. You'll find incredible wildlife virtually n the doorstep of Dunedin city. See the world's rarest penguins, fur seals and sea lions. If you wish to explore the peninsula by yourself, do the 'Tunnel Beach Walk' then the 'Sandfly Bay' beach walk. Visit Larnach Castle and it's stunning ga...`,
      },
      {
        day: 8,
        title: "Te Anau",
        description: `Drive through the Southland region from Dunedin to Te Anau, New Zealand's hiking capital. We recommend driving part of the 'Southern Scenic' route between Invercargill, Riverton and Tuatapere. On arrival, do the LOTR walk' along the Waiau River (on the Kepler Track), starting from 'Rainbow Ridge' swing bridge between Te Anau and Manapouri. The Fiordland region consists of 1.3 million hectares of untouched national heritage park. Check in to Dusky Ridges Optional - Wings & Water Doubtful Sound...`,
      },
      {
        day: 9,
        title: "Te Anau",
        description: `Milford Sound is a breathtaking fusion of spectacular natural features (2.5 hours one-way). Avoid the 5-hour drive from Te Anau to Milford and join a local tour into Milford Sounds. With a maximum of 11 people, you'll travel in comfort. Included in the tour, is a leisurely Nature Boat Cruise to the Tasman Sea to see the magnificent scenery and wildlife. You may also wish to include the guided Milford Day Track, a very special honeymoon experience. Check in to Dusky Ridges Included - Milford T...`,
      },
      {
        day: 10,
        title: "Queenstown",
        description: `Today you have a short drive 2 hour drive to Queenstown. You'll have plenty of time to explore the Otago region from this afternoon. Or simply relax and enjoy Queenstown village during your NZ honeymoon. Check in to Hidden Lodge Queenstown Optional - Shotover Jet Optional - Queenstown Rafting Kawarau River Optional - Kawarau Bungy Centre Queenstown - AJ Hackett Bungy New Zealand Optional - Nzone Skydive Queenstown Optional - Ziptrek Zip And Ride`,
      },
      {
        day: 11,
        title: "Queenstown",
        description: `Drive from Queenstown along the shore of sparkling Lake Wakatipu to Glenorchy. This very scenic drive will take about 50 min, but do plan some time for photo stops. The Dart River Safari tour is the ideal combo - it includes a guided walk through an ancient forest, a visit to the LOTR filming locations and a jet-boat ride down the Dart River. Check in to Hidden Lodge Queenstown Included - Dart River Safaris`,
      },
      {
        day: 12,
        title: "Fox Glacier",
        description: `Travel from Queenstown via the 'Gates of Haast' for Franz Josef Glacier Village (5.5 hours). From Haast to Jackson Bay there are empty beaches and lakes plus the soaring backdrop of the Southern Alps. The West Coast region is one of the least populated in New Zealand with only a few small villages along the way to the Fox and Franz Josef Glacier townships.`,
      },
      {
        day: 13,
        title: "Greymouth",
        description: `A helicopter flight with snow landing on the Franz Josef or Fox Glacier is a very memorable experience. Thereafter continue travelling north. Along the way, admire the beauty of native forests, beaches and lagoons, explore the goldfield walkway at Ross and stop by the shores of Lake Ianthe. A visit to the White Heron colony near Whataroa is also an option. The town of Hokitika is famous for New Zealand Pounamu (Jade). Check in to Breakers Boutique Accommodation Optional - Flying Fox Helihike ...`,
      },
      {
        day: 14,
        title: "Tasman",
        description: `Travel to the Nelson-Tasman region via the Buller Gorge to the gorgeous West Coast of the South Island. The Great Coast Road is one of the Top 10 Coastal Drives in the world. See the famous Pancake Rocks and Blowholes at Punakaiki. Visit the seal colony at Cape Foulwind. The Nelson/Tasman region is a warm aquatic paradise. This area is surrounded by the Tasman Ocean, sandy beaches and three National Parks. Enjoy quality artwork, premium wines and beautiful landscapes. Check in to Kina Beach V...`,
      },
      {
        day: 15,
        title: "Tasman",
        description: `The beautiful Abel Tasman Coastal walk passes through golden beaches and coastal forests. It's the perfect New Zealand honeymoon destination to finish your trip at. Take a personalized day trip with Abel Tasman Charters or use a water taxi to the coastal walk. Another popular option is a guided sea kayaking tour for a half or full day. If you haven't done sea kayaking before, take the half day trip and either walk or water taxi back. Check in to Kina Beach Vineyard Included - Abel Tasman Char...`,
      },
      {
        day: 16,
        title: "Otago Peninsula",
        description: `Drop-off your rental car at Nelson airport and take a domestic flight to Auckland. Continue your honeymoon journey or connect with your international flight. Download Your Free Travel Planner View interactive map --> - Opens in a new window - --> Expand Map + Included Highlights Cathedral Cove Kayak Tours Waitomo Black Labyrinth Rotorua Canopy Tours Mitai Maori Village Elm Wildlife Peninsula Encounters Tour Milford Track Guided Walk Real Journeys Milford Sound Scenic Cruise Dart River Safaris...`,
      },
    ],
  },
  {
    slug: "10-days-new-zealand-family-vacation",
    title: "10 days New Zealand Family Vacation",
    duration: "10 Days",
    category: "Family Holidays",
    categorySlug: "family-friendly-holidays",
    intro: `This 10 days New Zealand family vacation package guarantees children and parents a great time in NZ's outdoors with adventures and nature activities.`,
    highlights: [
      "Experience an authentic taste of rural life on a New Zealand farm.",
      "Explore the underworld of limestone and glowworm caves at Waitomo.",
      "Take an exhilarating zip line over a canopy of native rainforest.",
      "Be entertained by a Maori cultural concert in Rotorua with Hangi dinner included.",
      "Go on a child-friendly guided kayaking in the beautiful Abel Tasman National Park.",
      "Fly over the Southern Alps glaciers and land on the snow field below Mt. Cook.",
    ],
    image: "/images/itineraries/10-days-new-zealand-family-vacation.jpg",
    days: [
      {
        day: 1,
        title: "Auckland",
        description: `Your transfer driver will meet your family at the arrival gate at Auckland Airport. After transfer and check-in to your hotel, go and explore the America's Cup village. Climb the Sky Tower for great views of the Auckland City. Take a boat trip to beautiful Waiheke Island or head across to Devonport. Visit the shops and cafes of Parnell Village. Check in to The Sebel Quay West Auckland Optional - Sky Tower Optional - Kelly Tarlton's SEA LIFE Aquarium`,
      },
      {
        day: 2,
        title: "Rotorua",
        description: `Travel through the Waikato region to the famous Waitomo caves (3 hours). See the stunning architectural forms of the stalactites. Your family will join a guided tour into the Ruakuri Cave. However if you prefer the more adventurous 'Black Water Rafting' or abseiling (4 or 7 hours), let us know to include it in your itinerary. In the afternoon arrive in Rotorua (2 hours). Check in to Regent of Rotorua Included - Ruakuri Cave Tour Optional - Waitomo Black Labyrinth`,
      },
      {
        day: 3,
        title: "Rotorua",
        description: `Rotorua is a region of bubbling mud pools and natural hot springs. Some of your family may enjoy being pampered in a luxurious spa. Rotorua offers a spiritual journey into Maori culture with village and performance experiences. Go on a fun and educational experience with Canopy Tours - soar by zip-line over the native forest. Also included is a brief overview of the exciting conservation being undertaken in this area. Check in to Regent of Rotorua Included - Rotorua Canopy Tours Included - Mi...`,
      },
      {
        day: 4,
        title: "Abel Tasman National Park",
        description: `Drop-off your rental car at the airport and take a domestic flight to Nelson. In this short time span, you'll cover a lot of ground and save yourself lots of driving. Collect another rental car at Nelson airport and continue into the Abel Tasman National Park. This beautiful area has many empty beaches, fine wines and great food. Your family will love it!`,
      },
      {
        day: 5,
        title: "Abel Tasman National Park",
        description: `The beautiful Abel Tasman Coastal walk passes through golden beaches and coastal forests. Take a personalized day trip with an Eco boat tour to explore the local wildlife and beach. Another popular option is join a guided, family-friendly sea kayaking tour for a half or full day. Check in to Ruby Bay Vineyard Lodge & Cottage Included - Abel Tasman Golden Future Tour Optional - R&R Kayaks Optional - Abel Tasman Charters Taranui Optional - Wheelie Fantastic Cycle Tours`,
      },
      {
        day: 6,
        title: "Punakaiki",
        description: `Scenic drive from the Nelson-Tasman region via the Buller Gorge to the gorgeous West Coast of the South Island. Today you'll be in the Punakaiki region. The Great Coast Road is one of the Top 10 Coastal Drives in the world. Stop at Charleston for some underground rafting. See the famous Pancake Rocks and Blowholes at Punakaiki. Visit the seal colony at Cape Foulwind - a big highlight for children. Check in to Hydrangea Cottages Included - Paparoa National Park`,
      },
      {
        day: 7,
        title: "Fox Glacier",
        description: `Travel from Punakaiki to Fox. Along the way, you'll go pass beautiful native forests, beaches and lagoons. Explore the goldfield walkway at Ross and stop by the shores of Lake Ianthe. Visit the White Heron colony near Whataroa. Buy some New Zealand Pounamu (Jade) at Hokitika. Younger children will enjoy a visit to Shantytown to relive the gold rush era. Check in to Sunset Motels Fox Glacier Recommended - Shantytown Heritage Park Recommended - Hokitika Included - White Heron Sanctuary Tour`,
      },
      {
        day: 8,
        title: "Queenstown",
        description: `As part of your family package, take a helicopter flight up the Fox Glacier and land on the ice.. Thereafter travel south over Haast Pass and Wanaka into the Otago region. Queenstown is New Zealand's 'Adventure Capital and has breath-taking scenery plus adrenaline-rush activities. This is such great place for family fun and adventure. Check in to Garden Court Suites Included - The Helicopter Line Fox Glacier Optional - Flying Fox Helihike`,
      },
      {
        day: 9,
        title: "Queenstown",
        description: `Explore the Queenstown region or take a scenic flight between Queenstown and Milford Sound - this has to be the ultimate way to absorb the drama and vastness of New Zealand's alpine scenery. We recommend that you join the Dart River Safari based at Glenorchy village - one of the most scenic spots in the world! Check in to Garden Court Suites Included - Dart River Safaris Optional - Paradise Discovery Tour Optional - Milford Sound Scenic Flights Optional - Skyline Queenstown Optional - Real Jo...`,
      },
      {
        day: 10,
        title: "Punakaiki",
        description: `Depending on your overall travel arrangements you might still have time to explore Queenstown before taking a domestic flight to Auckland or an international flight to Australia. Download Your Free Travel Planner View interactive map --> - Opens in a new window - --> Expand Map + Included Highlights Ruakuri Cave Tour Rotorua Canopy Tours Mitai Maori Village Abel Tasman Golden Future Tour Paparoa National Park White Heron Sanctuary Tour The Helicopter Line Fox Glacier Dart River Safaris Inform...`,
      },
    ],
  },
  {
    slug: "12-days-south-island-family-holiday",
    title: "12 days South Island Family Holiday",
    duration: "12 Days",
    category: "Family Holidays",
    categorySlug: "family-friendly-holidays",
    intro: `Spend less time travelling and stay longer at each location. This 12 days family holiday South Island family itinerary includes stargazing at Lake Tekapo, glacier tours where you really - touch an iceberg! Jet boat rides near Queenstown, kayaking in the Abel Tasman National Pa...`,
    highlights: [
      "Go Stargazing in one of the world best locations at Lake Tekapo.",
      "Take an exciting glacier lake tour beneath Mt. Cook and touch an iceberg.",
      "Enjoy a thrilling jet boat ride in the Dart River scenic area near Queenstown.",
      "Go on a child-friendly guided kayaking in the beautiful Abel Tasman NP.",
      "Walk through native rain forest, pristine beaches and lagoons of the West Coast.",
      "Discover the whales of Kaikoura or maybe even swim with dolphins!",
    ],
    image: "/images/itineraries/12-days-south-island-family-holiday.jpg",
    days: [
      {
        day: 1,
        title: "Christchurch",
        description: `After arrival at Christchurch Airport, take your pre-arranged transfer service to your hotel. The central city is only a short drive away, so kick back and relax into your South Island family holiday. Depending on your flight arrival time, you'll have some time to explore Christchurch. Check in to City Centre Motel Recommended - Christchurch Botanic Gardens Recommended - Christchurch Tramway Restaurant Optional - International Antarctic Centre`,
      },
      {
        day: 2,
        title: "Lake Tekapo",
        description: `Pick-up a rental car and drive the Inland route (via the scenic Rakaia Gorge) through South Canterbury to Geraldine. Continue into the Mackenzie country to Lake Tekapo and Twizel Village ( 4 hours). See the turquoise colour of Lake Tekapo, visit the famous Church of the Good Shepherd and the Mount John Observatory. The southern hemisphere's equivalent of the Northern Lights is best seen at Lake Tekapo, between April and September. Because of limited accommodation in this region, your stay wil...`,
      },
      {
        day: 3,
        title: "Queenstown",
        description: `The Mount Cook area offers 4WD safaris, boating on the glacier lakes, horse treks, scenic flights with snow landings and numerous hikes. The Glacier Explorers company operates up to 7 trips per day from early September to late May. This tour include a coach ride, a 20-minute walk, then a boat cruise through the Tasman Glacier terminal lake. Touch and taste the ice crystals from the floating icebergs. This is great fun for children and parents alike! Check in to Garden Court Suites Information...`,
      },
      {
        day: 4,
        title: "Queenstown",
        description: `Drive from Queenstown to Glenorchy for the day (50 min). Remember to stop along the way to take photos. Join the Dart River Safaris and travel up the river on a jet boat. Get a firsthand experience of the Lord of the Rings movies locations. This is a real highlight for LOTR fans! Check in to Garden Court Suites Included - Dart River Safaris Optional - Shotover Jet Optional - Skyline Queenstown Optional - Queenstown Rafting Kawarau River Optional - Nzone Skydive Queenstown`,
      },
      {
        day: 5,
        title: "Queenstown",
        description: `There is so much to see and do in the Queenstown region - so spend another day exploring. Consider a thrilling Fly-Cruise-Fly to the beautiful and dramatic Milford Sound! This is a highlight trip for any family travelling through the South Island. Check in to Garden Court Suites Optional - Milford Sound Scenic Flight`,
      },
      {
        day: 6,
        title: "Fox Glacier",
        description: `Drive to the beautiful rugged West Coast (Queenstown to Fox: 5.5 hours). From Haast to Jackson Bay you'll see shingle beaches, lakes and wetlands - plus the backdrop of the Southern Alps. Take a helicopter flight over the Franz Josef or Fox Glacier - a definite highlight is landing on the snow! Do the scenic Lake Matheson Walk (just over 1 hour) or the glacier face walk in the Fox Glacier valley - a family-friendly activity for all children over the age of 6 years. Check in to Sunset Motels F...`,
      },
      {
        day: 7,
        title: "Punakaiki",
        description: `Continue travelling north along the West Coast road. Explore the goldfield walkway at Ross and stop by the shores of Lake Ianthe. For young families, a must-do is a visit to Shantytown near Greymouth. For an awesome nature experience, consider a visit to the White Heron colony near Whataroa. The town of Hokitika is famous for New Zealand Pounamu (Jade) and gold. Arrive at Punakaiki in the afternoon. Note: do all your supply shopping before you arrive in Punakaiki. Check in to Hydrangea Cottag...`,
      },
      {
        day: 8,
        title: "Abel Tasman National Park",
        description: `The Great Coast Road as one of the Top 10 Coastal Drives in the world! Drive alongside the limestone cliffs of Paparoa National Park, home to the world's smallest penguin. Go underground rafting at Charleston or caving at Fox River. Visit the famous Pancake Rocks and Blowholes at Punakaiki. Stop by the seal colony at Cape Foulwind. Plan on having lunch at Westport and enjoy some great home-cooked food. Continue via the Buller River Gorge to the Abel Tasman-Nelson region. Check in to Mapua 41 ...`,
      },
      {
        day: 9,
        title: "Abel Tasman National Park",
        description: `When it comes to lush native bush and and sea views, the Abel Tasman Coast Track is unsurpassed! This great New Zealand walk passes through golden beaches and coastal forests. If you are keen on nature and wildlife, join an Eco tour in a small party group. Another popular option is a guided sea kayaking tour for a half or full day. For a higher level of comfort, take your family on the Abel Tasman Charter yacht trip. Check in to Mapua 41 South Information - Abel Tasman National Park Included ...`,
      },
      {
        day: 10,
        title: "Kaikoura",
        description: `Continue driving the loop around the South Island to Kaikoura via Blenheim. If you love fine wines and vineyard lunches, then Blenheim is worth a few hours stop. Before or after lunch, do take your family to visit the Omaka Aviation Museum at the Omaka Air Field - your kids will love it! Remember, Kaikoura is only about 2.5 hours drive from Blenheim. Check in to Kincaid Cottage Information - Blenheim Recommended - Omaka Aviation Heritage Centre`,
      },
      {
        day: 11,
        title: "Kaikoura",
        description: `Kaikoura is the centre of Whalewatching in New Zealand. Please Note: these tours are very much dependent on sea conditions (it has to be calm before the boats go out). Therefore, the best tour time is early morning. By going early, you will have time to check out other local sites in the afternoon. Check in to Kincaid Cottage Included - Whale Watch Kaikoura Optional - Dolphin Encounter Kaikoura Optional - Albatross Encounter Kaikoura Optional - Wings Over Whales Kaikoura`,
      },
      {
        day: 12,
        title: "Kaikoura",
        description: `Drive back to Christchurch (about 2.5 hours) Depending on your flight time, you may have ample time to explore the Christchurch region before leaving. Plan With a Local Insider View interactive map --> - Opens in a new window - --> Expand Map + Included Highlights Glacier Explorers Aoraki Mt Cook Dart River Safaris Paparoa National Park Abel Tasman Golden Future Tour Whale Watch Kaikoura Information Links How does the Planning Work? Why Planning with Guest NZ? Information About New Zealand Vi...`,
      },
    ],
  },
  {
    slug: "14-days-new-zealand-family-itinerary",
    title: "New Zealand Family Itinerary in 14 Days",
    duration: "14 Days",
    category: "Family Holidays",
    categorySlug: "family-friendly-holidays",
    intro: `This 14 days New Zealand family itinerary is classic Kiwi family holiday for everyone. Dig on the famous hot beach, explore Waitomo Caves and and much more.`,
    highlights: [
      "Explore the Coromandel Peninsula, its stunning beaches and hidden coves.",
      "Go 'underground' at Waitomo and see the starry wonderland of the Glowworm Caves.",
      "Visit the 'Hobbiton' village, the only place with LOTR film setting still left.",
      "Explore the world of Maoridom in Rotorua and hear their stories.",
      "Visit a real New Zealand farm - meet the animals and those hardworking farm dogs!",
      "Glide over the Dart River on a fun jet boat ride into LOTR film country!",
      "Fly by helicopter to the top of a NZ glacier - see a snow-covered Alpine world.",
      "Kick back and relax on a scenic coast-to-coast TranzAlpine train journey.",
    ],
    image: "/images/itineraries/14-days-new-zealand-family-itinerary.jpg",
    days: [
      {
        day: 1,
        title: "Auckland",
        description: `Your transfer driver will meet you at the arrival gate at Auckland Airport. After transfer to your hotel for check-in, go out and explore the America's Cup village. You'll get wonderful views of the city and harbour from the Sky Tower. Take a boat trip to beautiful Waiheke Island or head over to the pretty village of Devonport. Visit the shops and cafes of Parnell Village. Check in to Rendezvous Heritage Hotel Auckland Optional - Sky Tower`,
      },
      {
        day: 2,
        title: "Auckland",
        description: `Explore more of Auckland today. This is a great opportunity for the whole family to get a bit of sun and exercise - time to beat that jet lag! Check in to Rendezvous Heritage Hotel Auckland Optional - The Auckland Whale & Dolphin Safari Optional - Explore America's Cup Sailing Auckland Optional - Kelly Tarlton's SEA LIFE Aquarium`,
      },
      {
        day: 3,
        title: "Hahei",
        description: `Collect your rental car and drive to the eastern coast on the Coromandel Peninsula (2.5 hours). The Coromandel has golden beaches, great swimming and refreshing bush walks. The Hahei Beach area is famous for it's Hot Water Beach. Your whole family can enjoy a soak in a natural thermal spring - remember to go at low tide! At Cathedral Cove, see marine wildlife at the Hahei Marine Reserve. Choose your adventure from scenic boat trips, sea kayaking, scuba diving and surfing.`,
      },
      {
        day: 4,
        title: "Hahei",
        description: `Take a picnic lunch and go exploring the beaches to the north. Do include Hot Water Beach - dig your own Spa Pool in the sand at Hahei, Cathedral Cove and Cooks Beach. From Cooks Beach, drive to the Ferry and park your car. Then take a short ferry ride across to Whitianga for good cafes and shopping. Walk along Buffalo Beach or drive to the eastern side of Hahei Beach and walk through the Te Pare Reserve. Join a guided kayaking tour ex Hahei Beach - it's easy and fun! Check in to The Church H...`,
      },
      {
        day: 5,
        title: "Rotorua",
        description: `Travel through the Waikato region to the famous Waitomo caves (3 hours). See the stunning architectural forms of the stalactites. Today, your family will join a guided tour into the Ruakuri Cave. However, if you prefer the more adventurous 'Black Water Rafting' or abseiling (4 or 7 hours), let us know and we'll include this in your itinerary. It will take you about 2 hours to get to Rotorua in the afternoon. Check in to Regent of Rotorua Included - Ruakuri Cave Tour Optional - Waitomo Black L...`,
      },
      {
        day: 6,
        title: "Rotorua",
        description: `Rotorua is characterized by bubbling mud pools and natural hot springs. Families can also enjoy being pampered in a luxurious spa. Rotorua offers a spiritual journey into Maori culture with village and performance experiences. For outdoor adventures, try rejuvenating with a spot of kayaking, hiking or mountain biking. If it's adrenaline you crave, go sky-diving, jet boating and zorbing. Check in to Regent of Rotorua Included - Hobbiton Movie Set & Farm Tours Optional - Rotorua Canopy Tours In...`,
      },
      {
        day: 7,
        title: "Queenstown",
        description: `Travel to Auckland airport and take a domestic flight to Queenstown. Collect another rental car at Queenstown Airport. Queenstown is New Zealand's 'Adventure Capital, with breath-taking scenery and adrenalin-rush activities. The Queenstown environment is majestic and has a great night life. Check in to Garden Court Suites Information - Queenstown`,
      },
      {
        day: 8,
        title: "Queenstown",
        description: `Go exploring the Queenstown region today. Alternatively, take a scenic flight connection between Queenstown and Milford Sound - there is no better way to enjoy the drama of New Zealand's alpine country. Fly both ways or travel the overland route on a luxury coach and then back again. Check in to Garden Court Suites Optional - Milford Sound Scenic Flights Included - Dart River Safaris Optional - Paradise Discovery Tour Optional - Skyline Queenstown Optional - Real Journeys Walter Peak Farm Tour`,
      },
      {
        day: 9,
        title: "Queenstown",
        description: `Enjoy another day of exploring the beautiful Queenstown surrounds. The Shotover Jet boat company is the only jetboat company operating in the Shotover River canyon and is definitely an iconic Queenstown experience. Their powerful jet boats are dwarfed by the Shotover Canyon walls towering above. If you are travelling with adult children, consider a wine tour of this famous wine area - the Pinot Noir is a stand-out! Check in to Garden Court Suites Optional - Shotover Jet Optional - Ziptrek MOA...`,
      },
      {
        day: 10,
        title: "Fox Glacier",
        description: `Drive into the lush rainforests and beaches, to Fox Glacier in the beautiful West Coast. (5.5 hours). From Haast to Jackson Bay there are empty shingle beaches, dunes, lakes and wetlands. If you have young children, remember to take plenty of refreshments. For an authentic tour, join the Waiatoto River Jet Boating Safari - this is the perfect activity for families wanting to see a pristine wilderness area. Check in to Sunset Motels Fox Glacier Optional - Wayne's Waiatoto River Safari`,
      },
      {
        day: 11,
        title: "Fox Glacier",
        description: `A helicopter flight over the Franz Josef or Fox Glacier is an absolute must-do. It is worth it to pay a little extra to include a snow landing - your kids will love it! Do the Lake Matheson loop walk (1 hour) or the glacier face walk in the Fox Glacier valley. Check in to Sunset Motels Fox Glacier Included - The Helicopter Line Fox Glacier Optional - Flying Fox Helihike`,
      },
      {
        day: 12,
        title: "Christchurch",
        description: `Drive north in the morning to Greymouth and check out all those scenic and historic spots on the way. In the afternoon leave Greymouth for Christchurch via the TranzAlpine train ride (Greymouth to Christchurch, 4.5 hours). From the comfort of modern carriages, view the Canterbury Plains and the beautiful Waimakariri River. After your arrival at the Christchurch Railway Station, you'll be driven to your accommodation. The central business district of Christchurch is thriving and you will have ...`,
      },
      {
        day: 13,
        title: "Christchurch",
        description: `During your stay in Christchurch, spend your time doing a range of family activities. Think about taking a day tour to Akaroa, The Akaroa Harbour is set within picturesque and sheltered Banks Peninsula. In the summer months, you can go on dolphin tours inside the harbour. You will actually get to swim with the world's smallest dolphins in the world's largest ocean! Check in to City Centre Motel Recommended - Christchurch Botanic Gardens Recommended - Christchurch Tramway Restaurant Optional -...`,
      },
      {
        day: 14,
        title: "Canterbury",
        description: `Depending on your flight time, you might have plenty of time to explore the Christchurch region further, before leaving. Download Your Free Travel Planner View interactive map --> - Opens in a new window - --> Expand Map + Included Highlights Hahei Explorer Ruakuri Cave Tour Hobbiton Movie Set & Farm Tours Mitai Maori Village Queenstown Dart River Safaris The Helicopter Line Fox Glacier KiwiRail - TranzAlpine Information Links How does the Planning Work? Why Planning with Guest NZ? Informatio...`,
      },
    ],
  },
  {
    slug: "12-day-new-zealand-with-kids-vacation",
    title: "New Zealand with Kids Vacation in 12 Days",
    duration: "12 Days",
    category: "Family Holidays",
    categorySlug: "family-friendly-holidays",
    intro: `This 12 day New Zealand with kids vacation includes a lot of outdoor adventures and authentic nature tours. Whalewatch, kayaking, caving and much more.`,
    highlights: [
      "Cruise Auckland Harbour and see whales and dolphins.",
      "Discover the 'underworld' by visiting the Glowworm Caves in Waitomo.",
      "Take a Flying fox eco-adventure over the canopy of an ancient native forest.",
      "Learn about the culture and history of the local indigenous Maori people.",
      "Visit a real New Zealand farm - meet the animals and the working farm dogs!",
      "Take a fun jet boat ride into the Mt. Aspiring National Park to LOTR sites.",
      "Family friendly guided kayaking tour in the pristine Abel Tasman NP.",
    ],
    image: "/images/itineraries/12-day-new-zealand-with-kids-vacation.jpg",
    days: [
      {
        day: 1,
        title: "Auckland",
        description: `A transfer driver will meet you at the arrival gate, Auckland Airport. After transfer to your hotel for check-in, head out to explore the America's Cup village. See the city and harbour views from the Sky Tower. Take a boat trip to either beautiful Waiheke Island or across to Devonport. Visit the shops and cafes of Parnell Village. Check in to Sofitel Auckland Viaduct Harbour Optional - Sky Tower`,
      },
      {
        day: 2,
        title: "Auckland",
        description: `Auckland is a strongly connected urban environment. Most of Auckland's people live within half an hour of beautiful beaches, hiking trails and a dozen enchanted holiday islands. Rangitoto Island is only a short ferry ride away. Today you'll be joining the Auckland Whale & Dolphin Safari. Check in to Sofitel Auckland Viaduct Harbour Included - The Auckland Whale & Dolphin Safari Optional - Explore America's Cup Sailing Auckland Optional - Kelly Tarlton's SEA LIFE Aquarium Recommended - Aucklan...`,
      },
      {
        day: 3,
        title: "Rotorua",
        description: `Travel through the Waikato region to the famous Waitomo caves (3 hours). See the stunning architectural forms of the stalactites. Your family will join a guided tour into the Ruakuri Cave. However if you prefer the more adventurous 'Black Water Rafting' or abseiling (4 or 7 hours), let us know to include it in your itinerary. Arrive at Rotorua in the afternoon (2 hours). Check in to Regent of Rotorua Included - Ruakuri Cave Tour Optional - Waitomo Black Labyrinth`,
      },
      {
        day: 4,
        title: "Rotorua",
        description: `Rotorua is a region of bubbling mud pools and natural hot springs. In the morning join the Canopy Eco tour - zipline on a steel wire through a native rainforest. The Canopy Eco Tours company supports a pest control conservation project so this highlight is also educational. Rotorua offers a spiritual journey into Maori culture with village and performance experiences in the evening. Check in to Regent of Rotorua Included - Rotorua Canopy Tours Included - Mitai Maori Village Optional - Hobbito...`,
      },
      {
        day: 5,
        title: "Rotorua",
        description: `Rotorua and Taupo are famous for their geotechnonic activity including bubbling mud pools and natural hot springs. In the morning take an exciting helicopter flight over Mount Tarawera. In the afternoon, explore scenic sites between Rotorua and Taupo. Check in to Regent of Rotorua Optional - Volcanic Air Recommended - Waimangu Volcanic Valley Recommended - Wai-O-Tapu Thermal Wonderland Recommended - Polynesian Spa Recommended - Wingspan National Bird of Prey Centre Optional - Redwoods Treewal...`,
      },
      {
        day: 6,
        title: "Arrowtown",
        description: `Take a domestic flight to Queenstown from Rotorua or Auckland. Queenstown is New Zealand's 'Adventure Capital and has many adrenaline-rush activities. The scenery is breathtaking and dramatic! Collect another rental car from the airport and travel to your accommodation which is located outside the central hub.`,
      },
      {
        day: 7,
        title: "Arrowtown",
        description: `The Queenstown region is a paradise for family travellers. There are so many world-class facilities and restaurants to suit every taste. You will also be able to access the rural heartland New Zealand in a matter of minutes! Go on a fully guided private farm 4WD excursion. Eat a hearty lunch before doing the Dart River Jet in the afternoon. All transfers are included. Check in to Millbrook Resort Included - Paradise Discovery Tour Included - Dart River Safaris`,
      },
      {
        day: 8,
        title: "Arrowtown",
        description: `You will have another day in Queenstown to enjoy an endless choice of activities. However keep in mind that whatever you choose to do, will depend on your interests and the ages of your children. Check in to Millbrook Resort Optional - Skyline Queenstown Optional - Queenstown Rafting Kawarau River Optional - Glacier Southern Lakes Helicopters Queenstown Optional - Milford Sound Scenic Flights Optional - Queenstown Fishing Spin Fishing Optional - Queenstown Fishing Fly fishing Included - Kawar...`,
      },
      {
        day: 9,
        title: "Abel Tasman National Park",
        description: `Take a domestic flight to Nelson in the Abel Tasman region. Collect another rental car at the airport and drive towards your nearby accommodation. The Nelson-Tasman region contains New Zealand's smallest national park with 22,350ha. Golden beaches and azure waters stretch from Marahau, near Motueka, to Wainui Bay, in Golden Bay. This region is also famous for its great seafood and boutique family-owned wineries.`,
      },
      {
        day: 10,
        title: "Abel Tasman National Park",
        description: `The scenery on the Abel Tasman Coast Track is breathtaking! This great New Zealand walk passes through golden beaches and coastal forests. Take a personalised day trip with an Eco boat tour and learn more about the local environment. Another option is a Abel Tasman Charter cruise tour for a day. On the Charter Cruise, you and your family will be given the use of sea kayaks. Check in to Ruby Bay Vineyard Lodge & Cottage Included - Abel Tasman Golden Future Tour Optional - Abel Tasman Charters ...`,
      },
      {
        day: 11,
        title: "Abel Tasman National Park",
        description: `Spend another day in the stunning Nelson-Tasman region. Consider taking a guided or independent family cycle trip. The local 'Taste Cycle Trail' in the Mapua region is a stunning experience. There are many local sites to stop at and enjoy the last full day of your New Zealand family itinerary. Check in to Ruby Bay Vineyard Lodge & Cottage Optional - Wheelie Fantastic Cycle Tours Optional - Great Taste Trail Optional - Golden Bay Recommended - Upper Moutere Recommended - Mapua Wharf Recommende...`,
      },
      {
        day: 12,
        title: "South Island",
        description: `Depart with a domestic flight from Nelson to Auckland and connect with your international flight. Alternatively you can extend your time in New Zealand. Download Your Free Travel Planner View interactive map --> - Opens in a new window - --> Expand Map + Included Highlights The Auckland Whale & Dolphin Safari Ruakuri Cave Tour Rotorua Canopy Tours Mitai Maori Village Paradise Discovery Tour Dart River Safaris Abel Tasman Golden Future Tour Information Links How does the Planning Work? Why Pla...`,
      },
    ],
  },
  {
    slug: "12-days-new-zealand-south-island-itinerary",
    title: "12 Days New Zealand South Island Itinerary",
    duration: "12 Days",
    category: "South Island",
    categorySlug: "south-island-travel-itineraries",
    intro: `This 12 days New Zealand South Island Itinerary will bring you the key highlights closer. Do a fjord cruise, view penguins or walk through lush rainforest.`,
    highlights: [
      "Explore Christchurch",
      "Explore Twizel",
      "Explore Dunedin",
      "Explore Te Anau",
      "Explore Queenstown",
      "Explore Fox Glacier",
    ],
    image: "/images/itineraries/12-days-new-zealand-south-island-itinerary.jpg",
    days: [
      {
        day: 1,
        title: "Christchurch",
        description: `After arriving at Christchurch Airport, go to the rental car counter to collect your reserved car. The central city is only a short 15 minute drive away, so depending on your flight arrival time, you'll have some time to explore some of Christchurch. Check in to Orari Bed & Breakfast Recommended - Christchurch Botanic Gardens Recommended - Christchurch Tramway Restaurant Recommended - Christchurch Art Gallery`,
      },
      {
        day: 2,
        title: "Twizel",
        description: `Drive the Inland route via the scenic Rakaia Gorge to Geraldine. Head towards Mackenzie country to Lake Tekapo and Twizel Village (285 km, 177 miles, 4 hours). Visit the Church of the Good Shepherd at Lake Tekapo. The Mount John Observatory is definitely worth a visit. Because of limited accommodation in this area, you'll be stay in either Twizel, Mt. Cook Village or Lake Tekapo.`,
      },
      {
        day: 3,
        title: "Dunedin",
        description: `The Mount Cook offers 4WD safaris, glacier lakes, horse treks, scenic flights with snow landings and walks. The Glacier Explorer company will take you by coach to the Tasman Valley for a 20-minute walk then a boat cruise on the Tasman Glacier terminal lake. Touch the ice crystals from floating icebergs and admire the awesome views of Mount Cook. Leave the high country for Oamaru, famous for it's whitestone architecture. Stop for lunch at the nearby world-famous 'Fleur's' restaurant in the fis...`,
      },
      {
        day: 4,
        title: "Dunedin",
        description: `Explore the wild beauty of the Otago Peninsula. Visit the Royal Albatross Centre at the foot of Tairoa Heads . This is the only place in the world on a mainland where you'll see Northern Royal Albatross in their natural habitat. (The colony is closed between 15 Sept and 25 Nov.) At Dunedin's doorstep, see wildlife, including the rare yellow- eyed penguin, sea lions and cute little blue penguins. Enjoy the 'Tunnel Beach' and 'Sandfly Bay' beach walks. Visit Dunedin's Larnach Castle. Check in t...`,
      },
      {
        day: 5,
        title: "Te Anau",
        description: `Travel the 'Southern Scenic Route' either via the Catlins or from Invercargil. Head to Te Anau, New Zealand's tramping capital. The drive traverses the eastern boundary of Fiordland National Park and the rugged south coast, connecting to the southern parts of Te Wahipounamu World Heritage Area. On arrival at Te Anau, take the 'LOTR walk' along the Waiau River (on the Kepler Track). Start from the 'Rainbow Reach' swing bridge between Te Anau and Manapouri. Enjoy the awesomeness of Fiordland's ...`,
      },
      {
        day: 6,
        title: "Te Anau",
        description: `Milford Sound is a mixture of spectacular and breathtaking natural features (125 km, 78 miles, 2.5 hours one-way). The fiords rise vertically and when it rains and waterfalls transform into giant water canons of power. Join a tour into Milford Sound for a nature cruise in the fjord. On the way back to Te Anau, take some short scenic walks on the Routeburn Track to Key Summit. Check in to Cosy Kiwi Bed & Breakfast Included - Milford Coach Cruise & Walk Included - Real Journeys Milford Sound Sc...`,
      },
      {
        day: 7,
        title: "Queenstown",
        description: `The drive to Queenstown only takes 2.5 hours. If you crave the nightlife and world-class facilities, then stay in Queenstown. Equally beautiful is the smaller Wanaka township. Either way, the Wanaka-Queenstown region (with Cromwell and Cardrona in between) offers great adventure, including zipline, jet boating, bungy or sky diving. Once in Central Otago, the rainforests of the Fiordland area are replaced by large lakes and tussock grassland. This area is renowned for it's stunning wines and b...`,
      },
      {
        day: 8,
        title: "Queenstown",
        description: `Queenstown is one of New Zealand's top visitor destinations. You'll be spellbound by the crystal clear Lake Wakatipu and it's dramatic alpine surrounds. Queenstown is also home to the ultimate adventure bucket list. Skiers love the winter months and all visitors love activities like bungy jumping, sky diving, canyon swinging, jet boating, horse trekking and river rafting. Queenstown is now a famous cycling destination with different graded scenic tracks. Check in to Chalet Queenstown Included...`,
      },
      {
        day: 9,
        title: "Fox Glacier",
        description: `Travel to the beautiful rugged West Coast. From Haast to Jackson Bay, see empty shingle beaches, lakes and wetlands. For an authentic insight, go on the Waiatoto River Jet Boating Safari. Join a wildlife tour to see fur seals, Hector's Dolphins and Fiordland Crested Penguins. A helicopter flight over the Franz Josef or Fox Glacier is a definite highlight - especially if you land on the snow! Do the easy 1-hour Lake Matheson Loop Walk. Check in to Sunset Motels Fox Glacier Recommended - Lake M...`,
      },
      {
        day: 10,
        title: "Greymouth",
        description: `The West Coast region is sparsely populated with few towns between Karamea and Jackson Bay. The town of Hokitika is famous for New Zealand Pounamu (Jade) and the 1860's gold rush. Stop here for a break. The Great Coast Road as one of the Top 10 Coastal Drives in the world! Drive alongside the ancient limestone cliffs of Paparoa National Park. Go underground rafting at Charleston, caving at Fox River and visit the famous Pancake Rocks at Punakaiki. Visit Cape Foulwind to see the seal colony an...`,
      },
      {
        day: 11,
        title: "Christchurch",
        description: `Explore the Paparoa National Park before leaving Greymouth for Christchurch . The TranzAlpine scenic train runs between Christchurch and Greymouth. From the comfort of modern carriages, view the farmlands of the Canterbury Plains and the spectacular gorges and river valleys of the Waimakariri River. Continue through the Canterbury Plains to Christchurch. You'll be collected at the Christchurch Railway Station and driven to your accommodation. Christchurch City continues to thrive as a 'Garden...`,
      },
      {
        day: 12,
        title: "Twizel",
        description: `Depending on your flight time, you may have ample time to explore the Christchurch region before leaving. If departing in the evening, Akaroa would be a perfect day trip (only a 1.5 hour drive away (one-way). Feel free to extend your stay in Christchurch or any other location.Important to know: every part of this itinerary can be amended to your personal requirements. We can add, delete or amend. Just contact us and it will be done! Plan With a Local Insider View interactive map --> - Opens i...`,
      },
    ],
  },
  {
    slug: "18-days-south-island-travel-itinerary",
    title: "18 Days South Island Travel Itinerary",
    duration: "18 Days",
    category: "South Island",
    categorySlug: "south-island-travel-itineraries",
    intro: `This 18 days New Zealand South Island Itinerary is perfect. More time to explore the Southern parts of NZ and staying longer at each location.`,
    highlights: [
      "Explore Christchurch",
      "Explore Lake Tekapo",
      "Explore Otago Peninsula",
      "Explore Te Anau",
      "Explore Wanaka",
      "Explore Franz Josef",
    ],
    image: "/images/itineraries/18-days-south-island-travel-itinerary.jpg",
    days: [
      {
        day: 1,
        title: "Christchurch",
        description: `After arrival at Christchurch Airport go to the rental car counter to collect your reserved rental car. The central city is only a short drive away (15 minutes).`,
      },
      {
        day: 2,
        title: "Christchurch",
        description: `Time to explore Christchurch and the Banks Peninsula today. Check in to The George Recommended - Christchurch Botanic Gardens Recommended - Christchurch Art Gallery Optional - International Antarctic Centre Optional - Punting on the Avon Recommended - Air Force Museum of New Zealand Optional - Waipara Optional - Swimming with Dolphins Optional - Black Cat Akaroa Harbour Nature Cruises`,
      },
      {
        day: 3,
        title: "Lake Tekapo",
        description: `Drive via the Inland route (via the scenic Rakaia Gorge) through South Canterbury to Geraldine, then into the Mackenzie country to Lake Tekapo and Twizel Village (285 km, 177 miles, 4 hours). Lake Tekapo gets its milky turquoise colour from fine rock-flour formed by suspended glaciers. Visit the Church of the Good Shepherd and enjoy views of the Southern Alps through the altar windows.The southern hemisphere's equivalent of the Northern Lights is best seen at Lake Tekapo, between April and Se...`,
      },
      {
        day: 4,
        title: "Lake Tekapo",
        description: `Explore the Mt. Cook National Park today. The alpine village of Mount Cook, is located in Aoraki / Mount Cook National Park.This area offers 4WD safaris, boating on the glacier lakes, horse treks, fishing, scenic flights with snow landings and numerous walks and hikes. The Glacier Explorers company operates up to 7 trips per day from early September to late May. From the Hermitage Hotel, be driven by coach to the Tasman Valley. After a 20-minute walk, take a boat cruise through the Tasman Gla...`,
      },
      {
        day: 5,
        title: "Otago Peninsula",
        description: `After exploring the high country of the South Island, travel down the Waitaki Valley region and visit Oamaru, to see it's historic whitestone architecture. Stop for lunch at the nearby iconic 'Fleur's' restaurant in the fishing village of Moeraki (not to be confused with the 'Moeraki Boulders'). Check in to Camp Estate Information - Waitaki Information - Oamaru Recommended - Moeraki Boulders Recommended - Fleurs Place`,
      },
      {
        day: 6,
        title: "Otago Peninsula",
        description: `Its time to explore the wild and stunning beauty of the Otago Peninsula. Nestled at the foot of Tairoa Head is the Royal Albatross Centre, the only place in the world on a mainland where you can view Northern Royal Albatross in their natural habitat. (The Albatross colony is closed between 15 Sept and 25 Nov.) At Dunedin's doorstep, you'll find an incredible variety of wildlife, including the rare yellow- eyed penguin. See fur seals, sea lions and the cute little blue penguins. If exploring t...`,
      },
      {
        day: 7,
        title: "Te Anau",
        description: `We recommend to travel the 'Southern Scenic Route' via Invercargill to Te Anau with stops in Riverton and Tuatapere. The drive traverses the eastern boundary of Fiordland National Park and the rugged south coast, connecting to the southern parts of Te Wahipounamu World Heritage Area. There are opportunities for tramping, mountain biking, trout fishing, hunting, boating and caving. When you arrive at New Zealand's hiking capital, Te Anau, take the 'LOTR walk' along the Waiau River (on the Kepl...`,
      },
      {
        day: 8,
        title: "Te Anau",
        description: `Milford Sound is a mixture of spectacular and breathtaking natural features (125 km, 78 miles, 2.5 hours one-way). The fiords rise vertically and when it rains, waterfalls transform into giant water canons of power. To avoid the 5-hour drive from Te Anau to Milford, join a local tour into Milford Sound for a nature cruise in the fjord. This guided tour begins from Te Anau then along the Milford Road. With a maximum of 11 passengers, this is a quality Fiordland experience. Once in Milford Soun...`,
      },
      {
        day: 9,
        title: "Wanaka",
        description: `The drive to Queenstown only takes 2.5 hours and to Wanaka, 3.5 hours. Wanaka is located on Lake Wanaka and has a relaxed village atmosphere, plus it's only a 1-hour drive from the busy Queenstown. If you want a relaxed and local 'vibe, stay in Wanaka. If you crave the nightlife and world-class facilities, then stay in Queenstown. Either way, the Wanaka-Queenstown region (with Cromwell and Cardrona in between) offers an endless supply of adventure, including zipline, jet boating, bungy or sky...`,
      },
      {
        day: 10,
        title: "Wanaka",
        description: `Wanaka is a 4-season holiday destination, with skiing, fishing, hiking, wine tasting, canyoning, scenic flights, skydiving and 750 kms of cycle trails. Check in to WÄnaka Haven Included - Lake Wanaka Cruise & Island Nature Walk Information - Lake Wanaka Optional - Wanaka River Journeys Optional - Eco Wanaka Rob Roy Glacier Guided Walk Optional - Wanaka Flightseeing Optional - Wanaka Highlights Safari Optional - Skydive Wanaka`,
      },
      {
        day: 11,
        title: "Franz Josef",
        description: `Travel to the beautiful rugged West Coast. From Haast to Jackson Bay there are empty shingle beaches, lakes and wetlands, all with the backdrop of the Southern Alps. For an authentic insight to this area, join the Waiatoto River Jet Boating Safari to explore the local rivers. Join a wildlife tour to see fur seals, Hector's Dolphins and Fiordland Crested Penguins. A helicopter flight over the Franz Josef or Fox Glacier is a definite highlight, especially if you land on the snow! Do the Lake Ma...`,
      },
      {
        day: 12,
        title: "Murchison",
        description: `The West Coast region is sparsely populated parts of the country and there very few towns on the 600 kms of coastal road between Karamea and Jackson Bay (Fox to Greymouth/Punakaiki area: 200-250 km, 124-155 miles, 3-4 hours). A visit to the White Heron colony near Whataroa is a must-do! The town of Hokitika, is famous for New Zealand Pounamu (Jade) and the gold rush from 1860-80. Stop here for a break and immerse yourself in it's history. Check in to Maruia River Retreat Included - The Helico...`,
      },
      {
        day: 13,
        title: "Murchison",
        description: `Experience a wellness and healing stay at Maruia River Retreat. Intrinsic to this vision was the communion with nature that our modern lives have stripped us. Guests at the retreat have come to appreciate the primal power of our private forest estate and purity of our waters, and most leave understanding that much like us, nature needs protection and healing. Check in to Maruia River Retreat Information - Paparoa National Park Information - Kahurangi National Park Recommended - Punakaiki Panc...`,
      },
      {
        day: 14,
        title: "Bronte",
        description: `Travel further north with stop along the route in St Arnaud in the Nelson Lakes National Park. Check in to Te Koi the Lodge at Bronte Information - Nelson Lakes National Park`,
      },
      {
        day: 15,
        title: "Bronte",
        description: `Spend a couple of days to explore the Nelson-Tasman region. Apart from the famous Abel Tasman National Park, check-out foodie places and local wineries and breweries. Or cycle part of the Tasman Cycle Trail. Check in to Te Koi the Lodge at Bronte Included - Abel Tasman Charters Taranui Optional - Abel Tasman Golden Future Tour Optional - Abel Tasman Kayaks Optional - Skydive Abel Tasman Information - Abel Tasman National Park Optional - Wheelie Fantastic Cycle Tours`,
      },
      {
        day: 16,
        title: "Kaikoura",
        description: `Travel via Blenheim to Kaikoura. Time to stop at a Marlborough vineyard for a wonderful lunch and some wine tastings. Check in to Hapuku Lodge + Tree Houses Recommended - Pelorus River Information - Marlborough`,
      },
      {
        day: 17,
        title: "Kaikoura",
        description: `The Whale Watch Kaikoura trip is a 'must do' for any visitor in the area. Best done in the early morning, due to sea conditions. In the afternoon you also have time to explore the area in more depth or join another local tour. Check in to Hapuku Lodge + Tree Houses Included - Whale Watch Kaikoura Recommended - Wings Over Whales Kaikoura Optional - Dolphin Encounter Kaikoura Optional - Albatross Encounter Kaikoura Optional - Seal Swim Kaikoura Recommended - Walk along the Kaikoura Peninsula Re...`,
      },
      {
        day: 18,
        title: "Kaikoura",
        description: `Travel back to Christchurch and depart from here. The drive takes about 2.5 hours. region before leaving. Feel free to extend your stay in Christchurch or any other location.Important to know: every part of this itinerary can be amended to your personal requirements. We can add, delete or amend. Just contact us and it will be done! Plan Your Holiday with Michael View interactive map --> - Opens in a new window - --> Expand Map + Included Highlights Mount Cook National Park Elm Wildlife Penins...`,
      },
    ],
  },
  {
    slug: "new-zealand-south-island-itinerary-10-days",
    title: "New Zealand South Island Itinerary 10 Days",
    duration: "10 Days",
    category: "South Island",
    categorySlug: "south-island-travel-itineraries",
    intro: `This New Zealand South Island Itinerary 10 days will cover most key highlights the South Island offers. Whales, beaches, glaciers and more.`,
    highlights: [
      "Explore Christchurch",
      "Explore Kaikoura",
      "Explore Abel Tasman National Park",
      "Explore Greymouth",
      "Explore Fox Glacier",
      "Explore Wanaka",
    ],
    image: "/images/itineraries/new-zealand-south-island-itinerary-10-days.jpg",
    days: [
      {
        day: 1,
        title: "Christchurch",
        description: `At Christchurch Airport, go to the rental car counter to collect your reserved car. Central Christchurch is only a short 15 minute drive away - so depending on your flight arrival time, you'll have some time to explore here. Check in to Orari Bed & Breakfast Recommended - Christchurch Botanic Gardens Recommended - Christchurch Tramway Restaurant Recommended - Christchurch Art Gallery`,
      },
      {
        day: 2,
        title: "Kaikoura",
        description: `Travelling from Christchurch to Kaikoura, you'll get plenty of stops on the way - wine lovers will love the Waipara area of North Canterbury.`,
      },
      {
        day: 3,
        title: "Kaikoura",
        description: `Kaikoura is famous for Whale Watch, which can be done by flight or boat. The Albatross bird tour and Dolphin Swim trip is also another great option. Try and complete all tours in the morning - leave plenty of time for some awesome walks along the Kaikoura Peninsula. Check in to Kincaid Cottage Included - Whale Watch Kaikoura Recommended - Dolphin Encounter Kaikoura Recommended - Albatross Encounter Kaikoura`,
      },
      {
        day: 4,
        title: "Abel Tasman National Park",
        description: `Continue travelling along the coastal road to Blenheim,into the main wine growing region of Marlborough - famous for its Sauvignon Blancs . Great vineyard lunch restaurants here. Visit the fascinating Omaka Aviation Centre. Drive to the Nelson-Tasman region in the afternoon. Check in to Mapua 41 South Recommended - Omaka Aviation Heritage Centre`,
      },
      {
        day: 5,
        title: "Abel Tasman National Park",
        description: `Today it's time to explore the Abel Tasman National Park. We have scheduled a very informative nature tour, but you could also go for a kayaking and walking trips or an cruise along the coast with short walks. Check in to Mapua 41 South Included - Abel Tasman Golden Future Tour Optional - R&R Kayaks Optional - Abel Tasman Charters Taranui`,
      },
      {
        day: 6,
        title: "Greymouth",
        description: `Travel south through the Buller River. Do stop at Cape Foulwind to see it's seal colony and coastal walks. Continue to Punakaiki. If you're lucky to arrive at high tide, you'll see the dramatic force of the Tasman Sea. The Paparoa National Park offer many some stunning scenic walks. Check in to Oak Lodge Greymouth Recommended - Cape Foulwind Recommended - Punakaiki`,
      },
      {
        day: 7,
        title: "Fox Glacier",
        description: `Drive along the beautiful rugged West Coast with its empty shingle beaches, lakes and wetlands. Stop at Hokitika for the local gold mining history. A helicopter flight over the Franz Josef or Fox Glacier is a highlight - especially if you land on the snow! Do the easy 1.5 hour Lake Matheson Loop Walk - either in the early evening or next morning. Check in to Sunset Motels Fox Glacier Recommended - Lake Matheson Optional - The Helicopter Line Fox Glacier`,
      },
      {
        day: 8,
        title: "Wanaka",
        description: `Continue south on a road trip with amazing scenery full of surprise and highlights. Stop at view points like Shipwreck Cove. Get a closer look at waterfalls and the famous 'Blue Pools' near Makaroa. Arrive in Wanaka, a great base from where to explore the Otago region. Check in to Wanaka Berry Farm B&B Information - Haast`,
      },
      {
        day: 9,
        title: "Wanaka",
        description: `Wanaka is one of New Zealand's top visitor destinations. Its' close to the 'busy' Queenstown, but a little smaller and calmer. You'll be spellbound by the crystal clear Lake Wanaka and it's dramatic alpine surrounds. We have included the Wanaka River Journeys trip, but there are other tours and activities available in both Wanaka and Queenstown. We can easily add another day or two if you have more time available. Check in to Wanaka Berry Farm B&B Included - Wanaka River Journeys Optional - L...`,
      },
      {
        day: 10,
        title: "Tasman",
        description: `Depending on your forward travel arrangements you may have still time to experience the Queenstown region. Plan Your Holiday with Michael View interactive map --> - Opens in a new window - --> Expand Map + Included Highlights Whale Watch Kaikoura Abel Tasman Golden Future Tour Cape Foulwind Punakaiki Lake Matheson Haast Wanaka River Journeys Information Links How does the Planning Work? Why Planning with Guest NZ? Information About New Zealand View pricing options--> Travel Expert +64-21-629498`,
      },
    ],
  },
  {
    slug: "21-day-trip-australia-and-new-zealand",
    title: "21 Day Trip Australia and New Zealand",
    duration: "21 Days",
    category: "NZ & Australia",
    categorySlug: "australia-and-new-zealand",
    intro: `This 21 day trip Australia and New Zealand with activities from snorkelling the Great Barrier Reef to hiking the Milford Track.`,
    highlights: [
      "Getting to know the hidden spots in Sydney with a local guide.",
      "Snorkel the Great Barrier Reef and explore the lush Daintree Forest.",
      "Be amazed with the natural wonders of Kangaroo Island on a guided tour.",
      "Cruise the magic Milford Sound in the Fiordland National Park.",
      "Jet-boat up the Matukituki River into the Mt. Aspiring NP.",
      "Kayak, Walk and cruise the Abel Tasman National Park.",
    ],
    image: "/images/itineraries/21-day-trip-australia-and-new-zealand.jpg",
    days: [
      {
        day: 1,
        title: "Sydney",
        description: `Go through the arrival gates at Sydney Airport to meet your driver. You're about to explore one of the most beautiful cities in the world - stunning harbour views, golden beaches, exciting shopping, dining options galore and a vibrant nightlife. Check in to The Grace Sydney Optional - Sydney Opera House Optional - Manly Beach Optional - The Rocks`,
      },
      {
        day: 2,
        title: "Sydney",
        description: `Take a a guided tour from your city hotel - a great way to get a snapshot of Sydney! Begin with a drive around the historic Rocks precinct. Visit the first church in Australia, the Observatory and the cottages built by early convicts. Continue around Circular Quay, the Opera House and the Botanical Gardens. Sit on Mrs Macquarie's chair to absorb the views of the Harbour Bridge and Opera House. Check in to The Grace Sydney Included - The Essentials Sydney Tour Optional - Bridgeclimb Sydney`,
      },
      {
        day: 3,
        title: "Port Douglas",
        description: `Transfer back to Sydney Airport and take a direct domestic flight to Cairns (3 hours and 15 mins). Your Australia & New Zealand trave vacation package comes with airfares within Australia and to New Zealand. From Cairns, transfer to the Port Douglas area (1 hour drive away). Your accommodation is located in the tropical holiday town of Port Douglas.`,
      },
      {
        day: 4,
        title: "Port Douglas",
        description: `Sail off in luxury catamaran with a high level of service. Cruise The Great Barrier Reef, a kaleidoscope of marine life. Visit a stunning tropical island and snorkel in the playground of green turtles, parrot fish and fusiliers. Explore the tranquil waters off the Low Isles lagoon. Enjoy a fresh tropical fruit and seafood gourmet lunch on-board the Aquarius. Back on the island, take a guided walk to learn its fascinating history. Afternoon refreshments are served on the return back. Check in ...`,
      },
      {
        day: 5,
        title: "Port Douglas",
        description: `Get collected from your hotel for a drive through rich farm land towards the World Heritage forest region of the famous Daintree National Park. Step aboard a personalized craft for a cruise on the Daintree River. Cruise close to riverbanks and under the overhead canopy of the rainforest. Seek out the vivid Ulysses Butterfly, Kingfishers and other wildlife. As you glide through silent backwaters, enjoy the sight of those magnificent crocodiles basking on the riverbanks. Check in to Port Dougla...`,
      },
      {
        day: 6,
        title: "Yulara",
        description: `A driver will transport to Cairns airport. Take a domestic flight to Ayers Rock (either direct or via Alice Springs). Experience the powerful force of the real Australian outback. Here, the skyscrapers are made of rock and best shows in town is the million-star night-time display. This arid environment is home to unique animals, birds and reptiles. Wallabies, dingoes, emus, geckos and huge eagles are just some of the locals you're going to meet. Check in to Sails in the Desert Optional - Soun...`,
      },
      {
        day: 7,
        title: "Yulara",
        description: `Tonight, guests can either join an outback tour or attend the Sound of Silence dinner. Check in to Sails in the Desert Included - Uluru-Kata Tjuta National Park Included - Emu Run Experience 1 Day Uluru Tour from Ayers Rock Resort Optional - Outback Camel Tours Optional - Uluru-Kata Tjuta Cultural Centre Optional - Sounds of Silence`,
      },
      {
        day: 8,
        title: "Adelaide",
        description: `Transfer back to Ayers Rock Airport and take a domestic flight to Adelaide in Southern Australia. Adelaide is a cosmopolitan city, renowned for it's museums, art galleries and wine. This wine region is unique for it's combination of rich European heritage and the fresh vitality of the Barossa lifestyle. There are many hidden treasures and much to see, including historic churches, cottages and famous wineries. Check in to The Playford Optional - Adelaide Central Market Optional - Adelaide Cent...`,
      },
      {
        day: 9,
        title: "Adelaide",
        description: `Today you'll be treated to the highlights of South Australia's premier nature-based destination, Kangaroo Island. After pick-up from your hotel at 6.45am you'll be transferred to the Cape Jervis ferry terminal. Take a 45-minute ferry trip to Penneshaw to visit the Seal Bay Conservation Park. A Park Ranger will accompany you to see Australian Sea-lions. Enjoy a two-course lunch in a beautiful bush setting at Vivonne Bay Bistro. After lunch, visit the Hanson Bay Wildlife Sanctuary to see koalas...`,
      },
      {
        day: 10,
        title: "Melbourne",
        description: `Transfer from your Adelaide hotel to the airport to catch a domestic flight to Melbourne. A driver will meet you at the arrival hall. Melbourne is Australia's second largest city and known for it's stately 19th-century buildings and tree-lined boulevards. At the centre of Melbourne is the modern Federation Square complete with plazas, bars, restaurants and cultural events along the Yarra River. In Southbank, the Melbourne Arts Precinct has a series of galleries displaying Australian and Indig...`,
      },
      {
        day: 11,
        title: "Melbourne",
        description: `Seize the morning and taste your way around Melbourne's top 'foodie' destinations. Take a shopping tour of the Queen Victoria Market or discover hidden secrets found in Melbourne's lanes. In the afternoon or evening, see Australian wildlife . A not-to-be-missed highight is the Penguin Parade. Join a Wild Ocean Eco-Boat Tour, see the Koala Conservation Centre, Churchill Island Heritage Farm and Nobbies Centre. Enjoy a bush walk across Phillip Island which traverses stunning beaches and wetland...`,
      },
      {
        day: 12,
        title: "Te Anau",
        description: `After your time in Australia head over to New Zealand for the second part of your vacation. Fly from Melbourne to the Adventure Capital of New Zealand - Queenstown. Collect your rental car and drive to Te Anau/ Fiordland, which is about 2 hours away. If you prefer a transfer service we can arrange this as well.`,
      },
      {
        day: 13,
        title: "Te Anau",
        description: `Today, enjoy a tour of the beautiful Milford Sound. Your local guide will meet you at the accommodation. So, that way it's all nice and easy. During the drive into Milford Sound (takes about 2 hours), you will be stopping at key scenic sites. After the scenic cruise in Milford Sound you'll have the opportunity to do some local guided walks into the Fiordland National Park. Check in to High Leys Lodge Included - Milford Coach Cruise & Walk Included - Real Journeys Milford Sound Scenic Cruise`,
      },
      {
        day: 14,
        title: "Wanaka",
        description: `Travel via Queenstown to Wanaka.`,
      },
      {
        day: 15,
        title: "Wanaka",
        description: `Wanaka is located on the shore of sparkling Lake Wanaka. Adventure and lifestyle tour options are endless. From sky diving, jet boating, horse trekking to wine tasting and fine food. The Wanaka River Journey tour is the ideal combo and includes a guided walk through an ancient forest and a jet-boat ride down the Matukituki River. There are of hiking trails and walks in the area as well! Check in to WÄnaka Haven Optional - Lake Wanaka Cruise & Island Nature Walk Optional - Eco Wanaka Rob Roy G...`,
      },
      {
        day: 16,
        title: "Fox Glacier",
        description: `Take a 4 hour drive to Fox Glacier (or Franz Josef Glacier). Travel via Wanaka and Haast Pass. Stop at key scenic sites on the way. Take a short walk to the beautiful 'Blue Pools' near Makarora. Just before you reach Haast, visit the Twin Falls. Take the lovely 'Shipwreck Cove' walk along the West Coast main road. Take your time to explore on one of the most scenic roads in New Zealand. The terminal face of Fox Glacier is only five kilometres from the Fox township, so a late afternoon walk is...`,
      },
      {
        day: 17,
        title: "Greymouth",
        description: `The West Coast region is one of the most sparsely populated parts of the country. There are few towns on the 600 kms of coastal road between Karamea and Jackson Bay. It is a visually stunning area of native forest and beaches. At Ross, explore the goldfield walkway and stop for a picnic by the shores of Lake Ianthe. A visit to the White Heron colony near Whataroa is a must-do. Stop at Hokitika for a coffee then visit the local museum to see the historic slideshow. Hokitika is famous for Pouna...`,
      },
      {
        day: 18,
        title: "Tasman",
        description: `The Great Coast Road is one of Lonely Planet's Top 10 Coastal Drives and connects between Greymouth and Westport. Travel by the ancient limestone cliffs of Paparoa National Park, home to the world's smallest penguin. Stop on the way to go underground rafting at Charleston or caving at Fox River. Visit the famous Pancake Rocks and Blowholes at Punakaiki. Continue north on Highway 6 through the dramatic Buller Gorge - there's a beautiful photo stop here (but do remember to use the correct pullo...`,
      },
      {
        day: 19,
        title: "Tasman",
        description: `The beautiful Nelson-Tasman region contains New Zealand's smallest National Park, the Abel Tasman National Park. Golden beaches and azure waters stretch from Kaiteriteri to Collingwood in Golden Bay. Walk at least one of the inland tracks through the centre of the park - the beautiful coastal track, and the inland track. Bring your own supplies and hiking gear. Visit nearby Marahau, then take a short drive from Motueka to Kaiteriteri Beach - this is a popular holiday spot with a beautiful swi...`,
      },
      {
        day: 20,
        title: "Rotorua",
        description: `Discover the heart of the North Island and its stunning landscapes. The Rotorua and Lake Taupo region is situated in New Zealand's volcanic heartland and is rich in Maori tradition. There are a number of recommended thermal areas to visit - Orakei Korako, Waiotapu and the Waimangu Valley. Arrive in Rotorua in the afternoon, considered to be the 'capital of Maori culture'. Do some mountain biking, join a farm tour or fly by helicopter to a spectacular volcano.`,
      },
      {
        day: 21,
        title: "North Island",
        description: `Your Australia and New Zealand travel journey comes to end today. Travel to Auckland and depart for Sydney in the afternoon. Note, we can adjust the schedule subject to your international flight out of Sydney. Plan Your Holiday with Michael View interactive map --> - Opens in a new window - --> Expand Map + Included Highlights Sailaway Outer Reef Tour One Day Kangaroo Island Experience Milford Coach Cruise & Walk Abel Tasman Charters Taranui View pricing options--> Michael Nees Travel Expert ...`,
      },
    ],
  },
  {
    slug: "australia-new-zealand-16-days",
    title: "Australia and New Zealand in 16 Days",
    duration: "16 Days",
    category: "NZ & Australia",
    categorySlug: "australia-and-new-zealand",
    intro: `This Australia and New Zealand in 16 Days trip offers activities from snorkelGreat Barrier Reef to hiking the Miliford Track.`,
    highlights: [
      "Discover the special spots found in Sydney with a local driver-guide.",
      "Explore the Great Barrier Reef - go snorkelling or intro diving",
      "The Daintree rainforest is so worth enjoying with a local guide.",
      "Kangaroo Island is an amazing place with stunning wildlife and scenery.",
      "Zipline - tree-hop your way through a New Zealand forest near Rotorua.",
      "Experience the local Maori culture with a guide tour or show.",
      "Take a 'must do' Milford Sound scenic cruise, combined with a Milford Track day tour.",
      "Enjoy an exhilarating jet-boat ride up the Dart River - guided by the locals.",
    ],
    image: "/images/itineraries/australia-new-zealand-16-days.jpg",
    days: [
      {
        day: 1,
        title: "Sydney",
        description: `Meet your driver at the arrival gate at Sydney Airport to meet your driver. Get ready to explore one of the most beautiful cities in the world - there's so much to enjoy - stunning harbour views, golden beaches, the endless dining options and a vibrant nightlife. Check in to The Grace Sydney Optional - SEA LIFE Sydney Aquarium Optional - Manly Beach Recommended - The Rocks`,
      },
      {
        day: 2,
        title: "Sydney",
        description: `Get to know the Sydney by taking a guided tour city tour. See the historic Rocks precinct, explore the famous opera house and wander through the beautiful Botanical Garden - you'll get to sit on Mrs Macquarie's chair to absorb views of both the Sydney Harbour Bridge and Opera House. Note: the Opera House 'Backstage' tour can be arrange at 7am before your Sydney City tour. Check in to The Grace Sydney Included - The Essentials Sydney Tour Information - Bondi Beach Optional - Sydney Opera House...`,
      },
      {
        day: 3,
        title: "Port Douglas",
        description: `Transfer back to Sydney Airport for a direct domestic flight to Cairns (3 hours and 15 mins). From Cairns, you'll be transferred to the lush area of tropical Port Douglas (1 hour drive away). Your accommodation is actually located within the perimeters of this popular holiday village - that way, you'll only have a short walk to most amenities and pick-ups for tours .`,
      },
      {
        day: 4,
        title: "Port Douglas",
        description: `Sail away in the luxurious Aquarius Catamaran. This is a dedicated snorkel-only vessel with no more than 20 people on-board. Cruise to the Low Isles Island in the Great Barrier Reef - swim and snorkel alongside green turtles and parrot fish. Explore the Low Isles lagoon, before returning to the comfort of the Aquarius to enjoy a great gourmet lunch. Take an informal guided walk around the island, before cruising back to Port Douglas. Check in to Port Douglas Peninsula Boutique Hotel Included ...`,
      },
      {
        day: 5,
        title: "Port Douglas",
        description: `A driver guide will collect you from your hotel for the Daintree Tour. The tour begins with a drive towards the World Heritage forest region of the Daintree National Park. Step aboard a personalized craft for a cruise on the Daintree River. Cruise close to riverbanks and under the overhead canopy of the rain forest. Seek out the vivid Ulysses Butterfly, Kingfishers and other wildlife. As you glide along the silent backwaters, do your camera ready - you won't believe the size of those magnific...`,
      },
      {
        day: 6,
        title: "Adelaide",
        description: `Transfer back to Cairns Airport and take a domestic flight to Adelaide in Southern Australia. Adelaide is a cosmopolitan city, renowned for its museums, art galleries and wine. In fact, what makes this wine region so unique, is a combination of European heritage and the vitality of the Barossa lifestyle. There are many hidden treasures and much to see, including historic churches, cottages and famous wineries. Check in to The Playford Optional - Adelaide Planetarium Optional - Adelaide Centra...`,
      },
      {
        day: 7,
        title: "Adelaide",
        description: `Its time to enjoy the highlights of South Australia's premier nature destination, Kangaroo Island. After pick-up at 6.45am, you'll take a brief ferry trip to Penneshaw to visit the Seal Bay Conservation Park. (Note: instead of taking the ferry, you can choose to take a flight.) A Park Ranger will take you on a beach walk to see Australian Sea-lions. Stop for lunch in a beautiful bush setting at Vivonne Bay Bistro, then visit the Hanson Bay Wildlife Sanctuary to see koalas. Explore Flinders Ch...`,
      },
      {
        day: 8,
        title: "Auckland",
        description: `Today, you're going to fly across to beautiful New Zealand! Transfer back to Adelaide Airport and flight from Adelaide to Auckland, New Zealand largest city. Transfer from the airport to your Auckland city hotel. Check in to Grand Millennium Auckland Information - Auckland`,
      },
      {
        day: 9,
        title: "Rotorua",
        description: `This morning, collect your rental car and start travelling to the Waitomo caves (3 hours) - it's time to see the architectural beauty of stalactites. We have included the 'Ruakuri Cave' tour, a walk through a dry cave (about 2 hours). If you want more adventure, go 'Black Water Rafting' or do the 'Black Labyrinth' tour by floating through the caves on a rubber tube. Alternatively, abseil through the darkness! (takes about 3 hours). End the day's adventure with a relaxing drive through the rur...`,
      },
      {
        day: 10,
        title: "Rotorua",
        description: `Plan for a full day in Rotorua. Visit the volcanic areas and hot pools around Rotorua. Take a sightseeing boat trip, then enjoy a traditional Hangi concert in the evening. Consider a Zipline adventure through the forest or relax by the lake with your fishing rod. A scenic flight over the Rotorua and Tarawera (3 + 4-star package) is also an option in the morning. For the rest of the afternoon, soak in one of nature's hot springs or have a relaxing massage. If you are a keen Lord of the Rings f...`,
      },
      {
        day: 11,
        title: "Rotorua",
        description: `Rotorua and the Lake Taupo region is famous for geothermal activity. Located within the Pacific Rim of Fire, these areas of bubbling mud pools, clouds of steam, and natural hot springs, are a nature's wonderland. There are key thermal sites you should visit today. Check in to Regent of Rotorua Optional - Orakei Korako Geothermal Park & Cave Optional - Wai-O-Tapu Thermal Wonderland Optional - Waimangu Volcanic Valley Optional - Wairakei Terraces & Thermal Health Spa Optional - Hukafalls Jet Re...`,
      },
      {
        day: 12,
        title: "Te Anau",
        description: `Drop-off your rental car at the airport. Take a domestic flight to Queenstown or Invercargill (we will check the best flight connections for you). Collect another rental car outside the airport terminal carpark. We recommend the Southern Coastal route via Riverton and Tuatapere - here, the scenery is rugged, untamed and beautiful. The villages are small - classic New Zealand heartland! After arrival, in Te Anau you might want to go for a late afternoon walk at the famous Kepler Track. Check i...`,
      },
      {
        day: 13,
        title: "Te Anau",
        description: `Look upon Te Anau as the gateway to the Fiordland National Park, New Zealand's hiking capital. Fiordland features a variety of unique wildlife, including penguins. Waterfalls cascade hundreds of metres into enormous fiords. You'll find a mixture of spectacular natural features. The fiord cliffs rise vertically, and waterfalls are giant canons of power. Join a guided tour into Milford Sound - this includes a nature cruise in the fjord. You can opt for a series of short walks with the nature gu...`,
      },
      {
        day: 14,
        title: "Queenstown",
        description: `Today, you'll have a very short 2.5 hour drive from Te Anau to Queenstown. Therefore, you will have plenty of time for more Fiordland walks or alternatively, 'action time' in Queenstown. Queenstown, is the Adventure Capital of New Zealand, with every variety of outdoor adventure you can imagine. Set on the shores of Lake Wakatipu, the Queenstown scenery is stunning! Queenstown also has some of New Zealand best boutique vineyards and is famous for Pinot Noir. Enjoy the perfect combo of sophist...`,
      },
      {
        day: 15,
        title: "Queenstown",
        description: `As one of New Zealand's top destinations, Queenstown is a very busy place in the peak seasons. So if you're look for a bit of tranquility, drive out from Lake Wakatipu to the village of Glenorchy. The scenery here will thrill you! Glenorchy is the starting point for the famous Dart River Safaris. This is a guided jet-boating trip and sightseeing trip which feature Lord of the Rings Location areas. For something extra special, consider a private 4WD farm tour with a local guide We guarantee, y...`,
      },
      {
        day: 16,
        title: "South Island",
        description: `Return your rental car to Queenstown airport and depart to Sydney. You may want to spend some more time either in New Zealand or Sydney. We can arrange this for you, so please feel free to contact us for any itinerary amendments. Plan Your Holiday with Michael View interactive map --> - Opens in a new window - --> Expand Map + Included Highlights The Essentials Sydney Tour Aquarius Sail & Snorkel Daintree Wanderer Tour One Day Kangaroo Island Experience Ruakuri Cave Tour Rotorua Canopy Tours ...`,
      },
    ],
  },
  {
    slug: "australia-new-zealand-2-weeks",
    title: "Australia and New Zealand in 2 Weeks",
    duration: "14 Days",
    category: "NZ & Australia",
    categorySlug: "australia-and-new-zealand",
    intro: `This Australia and New Zealand in 2 weeks holiday offers tours from snorkel Great Barrier Reef to hiking the Miliford Track and jetboating the Dart River.`,
    highlights: [
      "Sydney's famous golden beaches (including Bondi Beach) and Sydney Opera House.",
      "Stay in the tropical holiday town of Port Douglas with a lovely village feel.",
      "Sail away to the Great Barrier Reef in the luxury Aquarius Catamaran.",
      "Snorkel the Great Barrier Reef. Optional intro dive is possible too.",
      "Explore Daintree National Park, a World Heritage-listed forest.",
      "Stay in Queenstown the adventure capital of New Zealand.",
      "Explore NZ's Fox Glacier and Abel Tasman's wildlife in their natural habitat.",
      "Visit a White Heron colony near Whataroa. A memorable nature experience.",
    ],
    image: "/images/itineraries/australia-new-zealand-2-weeks.jpg",
    days: [
      {
        day: 1,
        title: "Sydney",
        description: `Sydney is one of the most sought after destinations in Australia - the harbour views of this city are some of the best in the world - the dining is world class. However, Sydney is also famous for golden beaches and a very energetic nightlife. Check in to The Grace Sydney Optional - Sydney Opera House Optional - SEA LIFE Sydney Aquarium Optional - Manly Beach Recommended - The Rocks`,
      },
      {
        day: 2,
        title: "Sydney",
        description: `Sydney is a great introduction to this beautiful city. Check out the historic Rocks precinct, visit the first church in Australia, the Observatory and the convict-built cottages. Travel around Circular Quay, see the magnificent Sydney Opera House. Take your time exploring the gorgeous Botanical Gardens - don't forget to sit on Mrs Macquarie's chair - the views are sublime. Check in to The Grace Sydney Optional - The Essentials Sydney Tour Optional - Bridgeclimb Sydney Information - Bondi Beach`,
      },
      {
        day: 3,
        title: "Port Douglas",
        description: `Now for a dramatic change of scenery! Transfer back to Sydney Airport for a domestic flight direct to Cairns. From Cairns, take another transfer to the Port Douglas area - a one hour's drive. Time to enjoy a stay in the tropical holiday town of Port Douglas.`,
      },
      {
        day: 4,
        title: "Port Douglas",
        description: `Sail away to the Great Barrier Reef in the luxury catamaran. The Aquarius is a dedicated snorkel only vessel with a very personalized level of service. Cruise to the stunning tropical Low Isles. The marine life here is colourful and plentiful. Swim and snorkel in the playground of green turtles, parrotfish and fusiliers. Relax on the return trip back to Port Douglas. Check in to Port Douglas Peninsula Boutique Hotel Included - Sailaway Outer Reef Tour Information - Great Barrier Reef`,
      },
      {
        day: 5,
        title: "Port Douglas",
        description: `Enjoy a tour of the Daintree National Park, a World Heritage-listed forest region. Step aboard a purpose-built craft for a cruise on the calm waters of the Daintree River. Cruise by riverbanks close enough to enjoy the overhead canopy of the rainforest. See if you can spot the vivid Ulysses Butterfly, Kingfishers and other wildlife. Get your camera ready for those magnificent crocodiles basking in the sun. Check in to Port Douglas Peninsula Boutique Hotel Included - Daintree Cape Tribulation ...`,
      },
      {
        day: 6,
        title: "Queenstown",
        description: `Fly to Queenstown, the adventure capital of New Zealand. Either collect a rental car or be met by a driver at the arrival hall for transfer to your accommodation. Queenstown provides every variety of adventure imaginable - para-gliding, jetboating, bungy jumping and more. Take in the sights of the majestic mountains surrounding Queenstown. Enjoy a walk on the shores of Lake Wakatipu - the scenery is stunning! Queenstown provides the perfect combo of sophisticated dining, shopping and adventure.`,
      },
      {
        day: 7,
        title: "Queenstown",
        description: `Explore the Queenstown region today. Depending on the weather, you could also take a scenic flight to Milford Sound which includes a cruise in the fjord. Check in to Queenstown Park Boutique Hotel Optional - Dart River Safaris Optional - Shotover Jet Optional - Queenstown Wine Trail Tours Optional - Queenstown Rafting Kawarau River Optional - Nzone Skydive Queenstown Optional - Glacier Southern Lakes Helicopters Queenstown Included - Paradise Discovery Tour Optional - Routeburn Track Guided W...`,
      },
      {
        day: 8,
        title: "Fox Glacier",
        description: `Take a 5.5-hour drive to Fox Glacier (or Franz Josef Glacier) via Wanaka and Haast Pass. Take plenty of breaks by stopping at key scenic sites on the way. Enjoy a short walk to the lovely 'Blue Pools' near Makarora. Visit the Twin Falls just before you get to Haast Pass. The 'Shipwreck Cove' walk is a definite must-do. In fact, you'll be travelling on one of the most scenic roads in New Zealand. Arrive in the Fox township by late afternoon - plenty of time for a refreshing walk. Stay for 2 ni...`,
      },
      {
        day: 9,
        title: "Greymouth",
        description: `The West Coast region is one of the most sparsely populated parts of the country. In fact, there are very few towns on the 600 km of coastal road between Karamea and Jackson Bay, However this area is visually quite stunning, with native forest and beaches. At Ross, stop at the goldfield walkway and have a picnic by the shores of Lake Ianthe. A visit to the White Heron colony near Whataroa is highly recommended. Have a coffee at the town of Hokitika - visit the local museum to see the historic...`,
      },
      {
        day: 10,
        title: "Abel Tasman National Park",
        description: `The Great Coast Road is Lonely Planet's Top 10 Coastal Drives in the world. This area serves to connect Greymouth and Westport. Travel along the Paparoa National Park, home to the world's smallest penguin. Try your hand at underground rafting at Charleston or go caving at Fox River. Visit the famous Pancake Rocks and Blowholes at Punakaiki. Highway 6 will take you through the dramatic Buller Gorge. This section of the trip is crammed with great photo opportunities - remember to use the correc...`,
      },
      {
        day: 11,
        title: "Abel Tasman National Park",
        description: `New Zealand's smallest National park, the Abel Tasman, is located in the Nelson-Tasman region. Golden beaches sit within sheltered coves - sparkling green waters stretch from Kaiteriteri to Collingwood in the Golden Bay. No visit to this region is complete without a walk along the beautiful coastal track of the Abel Tasman National park. Remember to bring a few supplies and suitable hiking gear. Visit nearby Marahau, then take a short drive from Motueka to Kaiteriteri Beach - a favourite holi...`,
      },
      {
        day: 12,
        title: "Rotorua",
        description: `Domestic flight to Auckland and travel to the heart of the North Island and to some of New Zealand's finest landscapes. The Lake Taupo region is the jewel of New Zealand's volcanic heartland. It is an area extremely rich in Maori tradition. Between Taupo and Rotorua, you'll get a great choice of thermal areas to visit - such as Orakei Korako, Waiotapu and the Waimangu Valley. This afternoon, you'll arrive in Rotorua, the very heart of Maori culture. Go mountain biking, join a farm tour or fly...`,
      },
      {
        day: 13,
        title: "Rotorua",
        description: `Today will be full of exciting adventures in Rotorua. Visit the volcanic areas and hot pools around the town. Kick back and enjoy a traditional Hangi concert or a boat trip. For an adrenaline rush, go Ziplining through the forest. For something more laid-back, go fishing on the lake. You can start the morning with a scenic flight over the Rotorua and Tarawera. For some of the afternoon, take a soak in one of nature's hot springs. A trip to an original Maori Village (Ohinemutu) and an evening ...`,
      },
      {
        day: 14,
        title: "Northern Cape",
        description: `Depending on your flight departure, you still have some time in the morning to relax. Auckland is only a good 3-hour drive away. You can extend your stay to another location.Important for you to know: every part of this itinerary can be amended to your personal requirements. We can add, delete or amend. Contact us and it will be done! Plan Your Holiday with Michael View interactive map --> - Opens in a new window - --> Expand Map + Included Highlights Sailaway Outer Reef Tour Daintree Cape Tr...`,
      },
    ],
  },
  {
    slug: "newzealand-fiji-honeymoon-vacation",
    title: "New Zealand and Fiji Vacation Packages",
    duration: "16 Days",
    category: "NZ & Australia",
    categorySlug: "australia-and-new-zealand",
    intro: `This New Zealand and Fiji vacation package in 16 day honeymoon itinerary is the perfect mix for a once in a lifetime holiday experience.`,
    highlights: [
      "Waitomo's Black Labyrinth guided caving tour in a wetsuit.",
      "Canopy Tours Zip-line through a native rainforest near Rotorua.",
      "Maori Hangi Concert and Scenic flight in Rotorua.",
      "Milford Sound cruise and walking tour with a local guide.",
      "Fox Glacier 30-minute helicopter flight with landing.",
      "Kayak, Walk and cruise the Abel Tasman National Park.",
      "Jet-boating the Dart River with a LOTR guided walk.",
      "Helicopter Ride on top of For or Franz Josef glacier.",
    ],
    image: "/images/itineraries/newzealand-fiji-honeymoon-vacation.jpg",
    days: [
      {
        day: 1,
        title: "Auckland",
        description: `Welcome to Auckland, New Zealand! A private driver has been arranged to meet you at the arrival gate of Auckland Airport. After transfer to your hotel for check-in, refresh in your suite before heading out to explore the America's Cup village. Take a lift up to the Sky Tower - you will get such stunning views. Get away from the city for a while and take a ferry across to beautiful Waiheke Island. Check in to Sofitel Auckland Viaduct Harbour Optional - Sky Tower Optional - Auckland Whale & Dol...`,
      },
      {
        day: 2,
        title: "Rotorua",
        description: `Travel via the Waikato region to the famous Waitomo caves (225 km, 140 miles, 3 hours). It is time for some active adventure - go blackwater rafting through the caves on a rubber tube or abseil through the darkness! You won't need a wet suit for the Ruakuri Cave. In the afternoon, you will arrive in in Rotorua (140 km, 87 miles, 2 hours). Check in to On The Point Lake Rotorua Included - Waitomo Black Labyrinth Optional - Ruakuri Cave Tour`,
      },
      {
        day: 3,
        title: "Rotorua",
        description: `Rotorua is a region of unique geothermal activity. There are many bubbling mud pools and natural hot springs. Today would be a good opportunity to be pampered at a luxury spa. Take a spiritual journey into Maori culture and enjoy the Maori village and evening performances. For outdoor adventures, go trout fishing, kayaking or hiking. For pure adrenaline, try your hand at go sky-diving, jet boating and zorbing. Check in to On The Point Lake Rotorua Included - Rotorua Canopy Tours Included - Mi...`,
      },
      {
        day: 4,
        title: "Te Anau",
        description: `Take an easy drive from Queenstown to Te Anau, New Zealand's hiking capital. In the afternoon, stretch your legs on the 'LOTR walk' along the Waiau River (on the Kepler Track. Start this walk from the 'Rainbow Ridge' swing bridge between Te Anau and Manapouri. The landscape in the Fiordland Region is dramatic and powerful - get ready for giant waterfalls and towering fiords. Stay a minimum of 2 nights. Check in to High Leys Lodge Recommended - Kepler Track Car Park`,
      },
      {
        day: 5,
        title: "Te Anau",
        description: `Milford Sound is a breathtaking fusion of spectacular natural features (125 km, 78 miles, 2.5 hours one-way). If you wish to avoid the 5-hour drive from Te Anau to Milford, a small group tour into Milford Sound is recommended. Included in the tour is a leisurely Nature Boat Cruise to the Tasman Sea. You will see a lot of magnificent scenery and wildlife. At the end of that cruise, the next part of the journey begins with an overland drive. At this point, you will be given the option of taking...`,
      },
      {
        day: 6,
        title: "Queenstown",
        description: `From Te Anau to Queenstown, it is a short 2-hour drive so you can take your time. Prepare yourself for the vibrancy of New Zealand's 'adventure capital' - Queenstown. Check in to Azur Lodge Optional - Arrowtown Optional - Amisfield Winery and Bistro Optional - Shotover Jet Optional - Queenstown Rafting Kawarau River Optional - Kawarau Bungy Centre Queenstown - AJ Hackett Bungy New Zealand Optional - Nzone Skydive Queenstown`,
      },
      {
        day: 7,
        title: "Queenstown",
        description: `Queenstown is located on the shore of sparkling Lake Wakatipu and for adventure, the options are endless. Take the ultimate plunge by doing a skydive. There is some great river rafting and jet boat rides in and around Queenstown. The Dart River Safari tour is the ideal combo if you want more than just a short thrill - it includes a guided walk through an ancient forest, a visit to the LOTR filming locations and a jet-boat ride down the Dart River. Check in to Azur Lodge Included - Dart River ...`,
      },
      {
        day: 8,
        title: "Fox Glacier",
        description: `Drive into the lush rainforests and beaches towards Fox Glacier in the beautiful wild West Coast. (Queenstown to Fox: 327 km, 202 miles, 5.5 hours). From Haast to Jackson Bay you will pass shingle beaches, lakes and wetlands - many of which you will have to yourself. For an authentic insight of this area, take a Jet Boat ride up the Waiatoto River. Take a helicopter ride and land on the snow. Do the easy Lake Matheson Walk (1-hour loop walk) or the glacier face walk in the Fox Glacier valley....`,
      },
      {
        day: 9,
        title: "Greymouth",
        description: `The West Coast region is sparsely populated. (Fox to Greymouth/Punakaiki area: 200-250 km, 124-155 miles, 3-4 hours). Make sure you stock up on your supplies before you head off today. Be enthralled by the beauty of the native forests, beaches and lagoons. Don't miss the famous Pancake Rocks and Blowholes at Punakaiki. This area is an untouched paradise of beautiful tracks and swing-bridges. The beaches are wild and beautiful - perfect for a romantic stroll! Check in to Breakers Boutique Acco...`,
      },
      {
        day: 10,
        title: "Tasman",
        description: `Travel to the beautiful Nelson-Tasman region via the Buller Gorge (275 km, 170 miles, 4 hours). Go caving at Fox River and underground rafting at Charleston. We recommend a visit to Cape Foulwind for the seal colony coastal walkway. Stop in Westport for coffee and home-cooked food. The Mighty Buller Gorge is a superb scenic drive and carves out a 169 kilometre path through gorges and dense forest to the sea. Arrive in the Nelson/Tasman region in the late afternoon.`,
      },
      {
        day: 11,
        title: "Tasman",
        description: `The beautiful Abel Tasman Coastal walk passes through golden beaches and coastal forests. Take a personalized and luxurious day trip with Abel Tasman Charters. Another popular option is to do a guided sea kayaking tour for a half or full day. If you haven't done sea kayaking before, take the half day trip and then walk back or take a water taxi. Check in to Kina Beach Cottages Included - Abel Tasman Charters Taranui Optional - Wheelie Fantastic Cycle Tours Optional - Abel Tasman Kayaks Option...`,
      },
      {
        day: 12,
        title: "Mamanuca Islands",
        description: `Take a domestic flight from Nelson to Auckland. In the afternoon, connect with your flight to Nadi. You may need to stay overnight in Nadi before being transferred to one of the offshore islands - however this will largely depend on your arrival time at Nadi. Relax in tropical Fiji, a paradise of blue lagoons and palm-lined beaches. Eco-activities include mountain climbing, surfing and soft-coral diving.`,
      },
      {
        day: 13,
        title: "Mamanuca Islands",
        description: `Transfer by coach to the Denarau harbour for a boat ride to one of the island's premiun resorts. Alternatively, a helicopter transfer can be arranged. There is a fantastic selection of off-shore island resorts, including Malolo, Matamoana, Yasawa, Tokoriki and Vomo island resorts. If you stay on one of the off-shore islands, you will definitely be treated to Fiji's best with service and premium facilities.`,
      },
      {
        day: 14,
        title: "Mamanuca Islands",
        description: `Now you can really set your own pace. If you are into adventure, take a high-speed jet ski safaris to other nearby tropical islands. Do an awesome skydive from 14,000ft and get a bird's eye view of Fiji's beautiful coral reefs. Just for fun, try testing your skills on Fiji's most iconic wave, the world-famous Cloudbreak. Check in to Tokoriki Island Resort Included - Tokoriki Island Resort Fiji`,
      },
      {
        day: 15,
        title: "Mamanuca Islands",
        description: `If you're visitng Mamanuca Island to relax, or you just want to set aside a day for total relaxation, join a day cruise to a deserted island. Spend an hour or two basking in the sun by the pool, or explore the miles of sugar-white sand beaches. No island trip is complete without a luxurious spa treatment, so do take the opportunity to enjoy a couples spa treatment.`,
      },
      {
        day: 16,
        title: "Auckland",
        description: `Transfer back to the mainland via Denarau harbour and then travel by coach to the airport. Fly out of Nadi in the afternoon or evening, to Auckland and connect with any flight connection from there.Important to know: every part of this itinerary can be amended to your personal requirements. We can add, delete or amend. Just contact us and it will be done! Plan Your Holiday with Michael View interactive map --> - Opens in a new window - --> Expand Map + Included Highlights Waitomo Black Labyri...`,
      },
    ],
  },
];

export const categories = [
  {
    slug: "lifestyle-and-nature",
    title: "Lifestyle & Nature",
    description: "Curated experiences blending lifestyle travel with New Zealand's natural wonders — scenic routes, hiking, fine dining, and refined stops.",
  },
  {
    slug: "honeymoon-packages-new-zealand",
    title: "Honeymoon Packages",
    description: "Romantic New Zealand escapes for couples — luxury lodges, private experiences, breathtaking destinations.",
  },
  {
    slug: "family-friendly-holidays",
    title: "Family Holidays",
    description: "Fun-filled New Zealand adventures for the whole family — beaches, wildlife, unforgettable memories.",
  },
  {
    slug: "south-island-travel-itineraries",
    title: "South Island",
    description: "The full South Island experience — Queenstown, Milford, Aoraki/Mt Cook, West Coast, Catlins.",
  },
  {
    slug: "unique-travel-new-zealand",
    title: "Unique Travel NZ",
    description: "Off-the-beaten-path New Zealand — LOTR locations, North Island hidden treasures, golf tours, and themed adventures.",
  },
  {
    slug: "australia-and-new-zealand",
    title: "NZ & Australia",
    description: "Combined trans-Tasman itineraries — experience the best of both countries in one incredible journey.",
  },
];

export function getItinerary(categorySlug: string, slug: string): Itinerary | undefined {
  return itineraries.find((i) => i.categorySlug === categorySlug && i.slug === slug);
}

export function getItinerariesByCategory(categorySlug: string): Itinerary[] {
  return itineraries.filter((i) => i.categorySlug === categorySlug);
}
