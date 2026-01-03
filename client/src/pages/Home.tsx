import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Smartphone, CreditCard, Globe, ChevronRight } from "lucide-react";
import { Link } from "wouter";

/**
 * Home Page - Modern Adventurism Design
 * Design Philosophy: Combines exploration spirit with contemporary minimalism
 * Color Scheme: Deep blue (trust) + Gold (discovery) + Coral red (alerts)
 * Typography: Playfair Display (titles) + Poppins (body)
 */

export default function Home() {
  const cities = [
    {
      id: "beijing",
      name: "Beijing",
      image: "/images/hero-beijing.jpg",
      description: "Explore the Forbidden City, Great Wall, and imperial heritage",
      highlights: ["Forbidden City", "Great Wall", "Temple of Heaven"],
    },
    {
      id: "shanghai",
      name: "Shanghai",
      image: "/images/hero-shanghai.jpg",
      description: "Modern metropolis with stunning skyline and vibrant culture",
      highlights: ["The Bund", "Oriental Pearl Tower", "Yu Garden"],
    },
    {
      id: "guilin",
      name: "Guilin",
      image: "/images/hero-guilin.jpg",
      description: "Breathtaking karst mountains and traditional bamboo rafting",
      highlights: ["Li River", "Karst Mountains", "Cormorant Fishing"],
    },
  ];

  const guides = [
    {
      id: "payment",
      title: "Payment Methods",
      description: "Learn how to pay with Alipay, WeChat Pay, and cash",
      icon: CreditCard,
      image: "/images/payment-methods.jpg",
    },
    {
      id: "internet",
      title: "Internet Access",
      description: "Access Google, Instagram, and maps with VPN solutions",
      icon: Globe,
      image: "/images/internet-access.jpg",
    },
    {
      id: "transport",
      title: "Transportation",
      description: "Navigate cities with subways, taxis, and ride-sharing apps",
      icon: MapPin,
      image: null,
    },
    {
      id: "communication",
      title: "Communication",
      description: "Get a local SIM card and stay connected throughout your trip",
      icon: Smartphone,
      image: null,
    },
  ];

  const TRIP_COM_LINK = "https://www.trip.com/?Allianceid=7659513&SID=286708661&trip_sub1=&trip_sub3=D9560539";

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <MapPin className="w-6 h-6 text-primary" />
            <h1 className="text-xl font-bold text-primary">Explore China</h1>
          </div>
          <div className="flex items-center gap-4">
            <Link href="#cities" className="text-foreground hover:text-primary transition-colors">
              Cities
            </Link>
            <Link href="#guides" className="text-foreground hover:text-primary transition-colors">
              Guides
            </Link>
            <a
              href={TRIP_COM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary text-secondary-foreground px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
            >
              Book Now
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section py-20 md:py-32">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Discover the <span className="text-secondary">Magic</span> of China
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-8">
              Your comprehensive guide to exploring China's most captivating cities. From ancient temples to modern metropolises, learn how to navigate, pay, and connect like a local.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={TRIP_COM_LINK} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="w-full sm:w-auto bg-secondary hover:opacity-90">
                  Book Your Trip <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </a>
              <Link href="#cities">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Explore Cities
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Cities Section */}
      <section id="cities" className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Featured Cities</h2>
            <div className="section-divider w-20"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cities.map((city) => (
              <div key={city.id} className="city-card group cursor-pointer">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={city.image}
                    alt={city.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{city.name}</h3>
                  <p className="text-foreground/70 mb-4">{city.description}</p>
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-secondary mb-2">Highlights:</p>
                    <ul className="space-y-1">
                      {city.highlights.map((highlight) => (
                        <li key={highlight} className="text-sm text-foreground/60 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link href={`/city/${city.id}`}>
                    <Button variant="outline" className="w-full">
                      Learn More <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guides Section */}
      <section id="guides" className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Essential Guides</h2>
            <div className="section-divider w-20"></div>
            <p className="text-lg text-foreground/70 mt-4">
              Everything you need to know to travel comfortably and confidently in China
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {guides.map((guide) => {
              const Icon = guide.icon;
              return (
                <Link key={guide.id} href={`/guide/${guide.id}`}>
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer overflow-hidden">
                    {guide.image && (
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={guide.image}
                          alt={guide.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-secondary/10 rounded-lg">
                          <Icon className="w-6 h-6 text-secondary" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground">{guide.title}</h3>
                      </div>
                      <p className="text-foreground/70">{guide.description}</p>
                      <div className="mt-4 flex items-center text-secondary font-semibold">
                        Read Guide <ChevronRight className="w-4 h-4 ml-2" />
                      </div>
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Explore China?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Book your accommodation, flights, and tours through our trusted partner Trip.com. Get the best deals and start your adventure today.
          </p>
          <a href={TRIP_COM_LINK} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:opacity-90">
              Book on Trip.com <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/5 border-t border-border py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-foreground mb-4">Explore China</h4>
              <p className="text-foreground/70 text-sm">Your ultimate guide to traveling in China with confidence and ease.</p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Cities</h4>
              <ul className="space-y-2 text-sm">
                {cities.map((city) => (
                  <li key={city.id}>
                    <Link href={`/city/${city.id}`} className="text-foreground/70 hover:text-primary transition-colors">
                      {city.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Guides</h4>
              <ul className="space-y-2 text-sm">
                {guides.map((guide) => (
                  <li key={guide.id}>
                    <Link href={`/guide/${guide.id}`} className="text-foreground/70 hover:text-primary transition-colors">
                      {guide.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Booking</h4>
              <a
                href={TRIP_COM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors text-sm block mb-2"
              >
                Book on Trip.com
              </a>
              <p className="text-foreground/70 text-sm">Get the best deals on accommodations and tours</p>
            </div>
          </div>
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-foreground/60">
            <p>&copy; 2024 Explore China. All rights reserved.</p>
            <p>
              Booking partner:{" "}
              <a href={TRIP_COM_LINK} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                Trip.com
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
