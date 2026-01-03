import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, MapPin, Utensils, Hotel, Train, DollarSign, ChevronRight } from "lucide-react";
import { Link, useParams } from "wouter";

/**
 * City Detail Page - Modern Adventurism Design
 * Displays comprehensive information for each city
 */

interface CityInfo {
  id: string;
  name: string;
  image: string;
  overview: string;
  bestTime: string;
  duration: string;
  attractions: Array<{
    name: string;
    description: string;
    time: string;
  }>;
  food: Array<{
    name: string;
    description: string;
  }>;
  accommodation: Array<{
    type: string;
    priceRange: string;
    description: string;
  }>;
  transport: Array<{
    method: string;
    description: string;
  }>;
  estimatedCost: {
    budget: string;
    midRange: string;
    luxury: string;
  };
}

const citiesData: Record<string, CityInfo> = {
  beijing: {
    id: "beijing",
    name: "Beijing",
    image: "/images/hero-beijing.jpg",
    overview:
      "Beijing, the capital of China, is a city where ancient traditions meet modern development. Home to the Great Wall, Forbidden City, and numerous temples, Beijing offers an unparalleled glimpse into Chinese history and culture.",
    bestTime: "September to October and April to May",
    duration: "3-4 days minimum",
    attractions: [
      {
        name: "The Great Wall",
        description: "One of the most iconic structures in the world. Visit sections near Beijing like Badaling or Mutianyu for stunning views.",
        time: "Full day trip",
      },
      {
        name: "Forbidden City",
        description: "The imperial palace of Chinese emperors. Explore 980 buildings and learn about Chinese imperial history.",
        time: "3-4 hours",
      },
      {
        name: "Temple of Heaven",
        description: "A sacred complex where emperors performed rituals. Beautiful architecture and peaceful gardens.",
        time: "2-3 hours",
      },
      {
        name: "Summer Palace",
        description: "A stunning royal retreat with gardens, temples, and a beautiful lake.",
        time: "3-4 hours",
      },
    ],
    food: [
      {
        name: "Peking Duck",
        description: "Beijing's most famous dish. Crispy roasted duck served with thin pancakes and sweet bean sauce.",
      },
      {
        name: "Hot Pot",
        description: "A communal dining experience where you cook raw ingredients in a simmering broth.",
      },
      {
        name: "Jianbing",
        description: "A popular street breakfast crepe filled with egg, crispy wonton, and sauce.",
      },
    ],
    accommodation: [
      {
        type: "Budget Hostels",
        priceRange: "$15-30 per night",
        description: "Great for backpackers and solo travelers. Good social atmosphere.",
      },
      {
        type: "Mid-range Hotels",
        priceRange: "$50-100 per night",
        description: "Comfortable rooms with good amenities in central locations.",
      },
      {
        type: "Luxury Hotels",
        priceRange: "$150+ per night",
        description: "Five-star hotels with premium services and facilities.",
      },
    ],
    transport: [
      {
        method: "Subway",
        description: "Efficient and affordable. Get a transit card (Yikatong) for easy travel.",
      },
      {
        method: "Taxi",
        description: "Cheap but can be challenging without Chinese language skills. Use Didi app.",
      },
      {
        method: "Bike Rental",
        description: "Popular way to explore the city. Many rental stations available.",
      },
    ],
    estimatedCost: {
      budget: "$40-60 per day",
      midRange: "$80-120 per day",
      luxury: "$200+ per day",
    },
  },
  shanghai: {
    id: "shanghai",
    name: "Shanghai",
    image: "/images/hero-shanghai.jpg",
    overview:
      "Shanghai is China's most cosmopolitan city, blending futuristic skyscrapers with traditional architecture. Known as the 'Pearl of the Orient', it's a vibrant hub of commerce, culture, and entertainment.",
    bestTime: "October to November and March to April",
    duration: "2-3 days",
    attractions: [
      {
        name: "The Bund",
        description: "Historic waterfront with colonial architecture and modern skyline views. Perfect for evening strolls.",
        time: "2-3 hours",
      },
      {
        name: "Oriental Pearl Tower",
        description: "Iconic TV tower with observation decks offering 360-degree city views.",
        time: "2-3 hours",
      },
      {
        name: "Yu Garden",
        description: "Classical Chinese garden with traditional architecture, ponds, and pavilions.",
        time: "2-3 hours",
      },
      {
        name: "French Concession",
        description: "Charming neighborhood with tree-lined streets, cafes, and boutique shops.",
        time: "2-3 hours",
      },
    ],
    food: [
      {
        name: "Xiaolongbao",
        description: "Shanghai's signature soup dumplings filled with pork and savory broth.",
      },
      {
        name: "Shengian",
        description: "Pan-fried dumplings with crispy bottoms and juicy pork filling.",
      },
      {
        name: "Hairy Crab",
        description: "Seasonal delicacy (September-November) known for its rich flavor.",
      },
    ],
    accommodation: [
      {
        type: "Budget Hostels",
        priceRange: "$20-40 per night",
        description: "Affordable options in popular neighborhoods.",
      },
      {
        type: "Mid-range Hotels",
        priceRange: "$60-120 per night",
        description: "Good quality rooms with modern amenities.",
      },
      {
        type: "Luxury Hotels",
        priceRange: "$180+ per night",
        description: "Premium accommodations with world-class services.",
      },
    ],
    transport: [
      {
        method: "Metro",
        description: "Extensive subway system covering the entire city. Very efficient.",
      },
      {
        method: "Taxi/Didi",
        description: "Readily available and affordable. Use Didi app for convenience.",
      },
      {
        method: "Walking",
        description: "Many areas are walkable, especially the Bund and French Concession.",
      },
    ],
    estimatedCost: {
      budget: "$50-70 per day",
      midRange: "$100-150 per day",
      luxury: "$250+ per day",
    },
  },
  guilin: {
    id: "guilin",
    name: "Guilin",
    image: "/images/hero-guilin.jpg",
    overview:
      "Guilin is renowned for its stunning karst landscape and natural beauty. The Li River cruise is one of China's most scenic experiences, offering dramatic mountain views and traditional culture.",
    bestTime: "April to May and September to October",
    duration: "2-3 days",
    attractions: [
      {
        name: "Li River Cruise",
        description: "A scenic boat journey through dramatic karst mountains. Best done at dawn or dusk.",
        time: "4-5 hours",
      },
      {
        name: "Cormorant Fishing",
        description: "Traditional fishing method using trained cormorants. Evening performances available.",
        time: "1-2 hours",
      },
      {
        name: "Elephant Trunk Hill",
        description: "Iconic limestone peak resembling an elephant. Great for photography.",
        time: "1-2 hours",
      },
      {
        name: "Reed Flute Cave",
        description: "Underground cave with stunning stalactites and stalagmites, beautifully lit.",
        time: "1-2 hours",
      },
    ],
    food: [
      {
        name: "Rice Noodles",
        description: "Guilin's specialty. Served in various broths with different toppings.",
      },
      {
        name: "Snail Noodles",
        description: "Spicy noodle soup with snail broth and various toppings.",
      },
      {
        name: "Bamboo Shoots",
        description: "Local specialty prepared in various ways.",
      },
    ],
    accommodation: [
      {
        type: "Budget Hostels",
        priceRange: "$15-30 per night",
        description: "Good options near the Li River and city center.",
      },
      {
        type: "Mid-range Hotels",
        priceRange: "$40-80 per night",
        description: "Comfortable accommodations with good service.",
      },
      {
        type: "Luxury Resorts",
        priceRange: "$120+ per night",
        description: "Premium riverside resorts with scenic views.",
      },
    ],
    transport: [
      {
        method: "Local Bus",
        description: "Cheap and extensive network. Get a transit card for convenience.",
      },
      {
        method: "Taxi",
        description: "Affordable and readily available. Use Didi app.",
      },
      {
        method: "Bicycle",
        description: "Great for exploring the city and surrounding areas.",
      },
    ],
    estimatedCost: {
      budget: "$30-50 per day",
      midRange: "$70-100 per day",
      luxury: "$150+ per day",
    },
  },
};

const TRIP_COM_LINK = "https://www.trip.com/?Allianceid=7659513&SID=286708661&trip_sub1=&trip_sub3=D9560539";

export default function CityDetail() {
  const { cityId } = useParams<{ cityId: string }>();
  const city = cityId ? citiesData[cityId] : null;

  if (!city) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">City Not Found</h1>
          <Link href="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="container flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
            <ArrowLeft className="w-5 h-5 text-primary" />
            <span className="text-foreground">Back</span>
          </Link>
          <h1 className="text-xl font-bold text-primary">{city.name}</h1>
          <a href={TRIP_COM_LINK} target="_blank" rel="noopener noreferrer">
            <Button size="sm" className="bg-secondary text-secondary-foreground">
              Book
            </Button>
          </a>
        </div>
      </nav>

      {/* Hero Image */}
      <div className="relative h-96 overflow-hidden">
        <img src={city.image} alt={city.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 container pb-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-2">{city.name}</h1>
          <p className="text-xl text-white/90">{city.overview.substring(0, 100)}...</p>
        </div>
      </div>

      {/* Quick Info */}
      <section className="py-8 bg-gradient-to-b from-muted/30 to-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6">
              <p className="text-sm text-foreground/60 mb-2">Best Time to Visit</p>
              <p className="text-lg font-semibold text-foreground">{city.bestTime}</p>
            </Card>
            <Card className="p-6">
              <p className="text-sm text-foreground/60 mb-2">Recommended Duration</p>
              <p className="text-lg font-semibold text-foreground">{city.duration}</p>
            </Card>
            <Card className="p-6">
              <p className="text-sm text-foreground/60 mb-2">Estimated Daily Cost</p>
              <p className="text-lg font-semibold text-foreground">{city.estimatedCost.budget}</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-12 md:py-16">
        <div className="container max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">About {city.name}</h2>
          <p className="text-lg text-foreground/80 leading-relaxed">{city.overview}</p>
        </div>
      </section>

      {/* Attractions */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Top Attractions</h2>
            <div className="section-divider w-20"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {city.attractions.map((attraction, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/10 rounded-lg h-fit">
                    <MapPin className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">{attraction.name}</h3>
                    <p className="text-foreground/70 mb-3">{attraction.description}</p>
                    <p className="text-sm text-secondary font-semibold">⏱ {attraction.time}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Food & Dining */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Must-Try Food</h2>
            <div className="section-divider w-20"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {city.food.map((dish, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/10 rounded-lg h-fit">
                    <Utensils className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-2">{dish.name}</h3>
                    <p className="text-foreground/70">{dish.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Accommodation */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Where to Stay</h2>
            <div className="section-divider w-20"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {city.accommodation.map((acc, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/10 rounded-lg h-fit">
                    <Hotel className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-1">{acc.type}</h3>
                    <p className="text-sm text-secondary font-semibold mb-2">{acc.priceRange}</p>
                    <p className="text-foreground/70 text-sm">{acc.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Transportation */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Getting Around</h2>
            <div className="section-divider w-20"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {city.transport.map((transport, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/10 rounded-lg h-fit">
                    <Train className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-2">{transport.method}</h3>
                    <p className="text-foreground/70">{transport.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Breakdown */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container max-w-3xl">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Estimated Daily Costs</h2>
            <div className="section-divider w-20"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <DollarSign className="w-6 h-6 text-secondary" />
                <h3 className="text-lg font-bold text-foreground">Budget</h3>
              </div>
              <p className="text-3xl font-bold text-secondary mb-2">{city.estimatedCost.budget}</p>
              <p className="text-sm text-foreground/70">Hostels, street food, public transport</p>
            </Card>
            <Card className="p-6 border-2 border-secondary">
              <div className="flex items-center gap-3 mb-4">
                <DollarSign className="w-6 h-6 text-secondary" />
                <h3 className="text-lg font-bold text-foreground">Mid-Range</h3>
              </div>
              <p className="text-3xl font-bold text-secondary mb-2">{city.estimatedCost.midRange}</p>
              <p className="text-sm text-foreground/70">3-star hotels, restaurants, tours</p>
            </Card>
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <DollarSign className="w-6 h-6 text-secondary" />
                <h3 className="text-lg font-bold text-foreground">Luxury</h3>
              </div>
              <p className="text-3xl font-bold text-secondary mb-2">{city.estimatedCost.luxury}</p>
              <p className="text-sm text-foreground/70">5-star hotels, fine dining, private tours</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Visit {city.name}?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Book your flights, hotels, and tours through Trip.com to get the best deals and start your adventure.
          </p>
          <a href={TRIP_COM_LINK} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:opacity-90">
              Book Now on Trip.com <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/5 border-t border-border py-8">
        <div className="container text-center text-foreground/60 text-sm">
          <p>&copy; 2024 Explore China. All rights reserved.</p>
          <p className="mt-2">
            Booking partner:{" "}
            <a href={TRIP_COM_LINK} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              Trip.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
