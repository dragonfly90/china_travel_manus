import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, CheckCircle2, AlertCircle, Smartphone, CreditCard, Globe, ChevronRight } from "lucide-react";
import { Link, useParams } from "wouter";

/**
 * Guide Detail Page - Modern Adventurism Design
 * Displays comprehensive practical guides for travelers
 */

interface GuideContent {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  sections: Array<{
    title: string;
    content: string;
    tips?: string[];
    warnings?: string[];
  }>;
}

const guidesData: Record<string, GuideContent> = {
  payment: {
    id: "payment",
    title: "Payment Methods in China",
    description: "Complete guide to paying for goods and services in China",
    icon: <CreditCard className="w-8 h-8" />,
    sections: [
      {
        title: "Alipay (支付宝)",
        content:
          "Alipay is one of China's two dominant mobile payment platforms. It's owned by Alibaba and is widely accepted in most establishments including restaurants, shops, taxis, and online platforms. To use Alipay, you'll need a Chinese bank account or a foreign credit card linked to an Alipay account.",
        tips: [
          "Download the Alipay app before arriving in China",
          "Link your foreign credit card or bank account",
          "Ask merchants to scan your QR code or scan theirs",
          "Keep your phone charged for contactless payments",
        ],
        warnings: [
          "Some older merchants may not accept mobile payments",
          "Alipay requires a Chinese phone number for verification",
        ],
      },
      {
        title: "WeChat Pay (微信支付)",
        content:
          "WeChat Pay is integrated into the WeChat messaging app and is equally ubiquitous as Alipay. It's the payment method of choice for many Chinese residents and is accepted almost everywhere. Like Alipay, you'll need to set up an account before arrival.",
        tips: [
          "WeChat is essential for communication in China",
          "Set up WeChat Pay through the app's wallet feature",
          "Many restaurants display WeChat Pay QR codes on tables",
          "You can send money to friends through WeChat",
        ],
        warnings: [
          "WeChat requires a Chinese phone number for full functionality",
          "International credit card linking can be complicated",
        ],
      },
      {
        title: "Cash (现金)",
        content:
          "While mobile payments dominate, cash is still accepted in many places, especially in smaller cities and rural areas. Chinese Yuan (CNY) comes in denominations of 100, 50, 20, 10, 5, and 1 yuan, plus coins and smaller notes.",
        tips: [
          "Withdraw cash from ATMs upon arrival",
          "Keep small bills for taxis and small vendors",
          "ATMs are widely available in cities",
          "Exchange rates at ATMs are usually better than at airports",
        ],
        warnings: [
          "Not all ATMs accept foreign cards",
          "Some ATMs have daily withdrawal limits",
          "Counterfeit notes are rare but possible",
        ],
      },
      {
        title: "Credit Cards",
        content:
          "International credit cards are accepted at major hotels, restaurants, and shopping malls, but their acceptance is not universal. Many smaller establishments don't accept cards at all. It's best to use credit cards as a backup payment method.",
        tips: [
          "Notify your bank before traveling to China",
          "Major hotels and restaurants accept Visa and Mastercard",
          "Keep your credit card for emergencies",
          "Some restaurants may add a surcharge for card payments",
        ],
        warnings: [
          "Not accepted at most street vendors and small shops",
          "Some establishments may not recognize foreign cards",
        ],
      },
    ],
  },
  internet: {
    id: "internet",
    title: "Internet Access & VPN Guide",
    description: "How to access Google, Instagram, and international websites",
    icon: <Globe className="w-8 h-8" />,
    sections: [
      {
        title: "Understanding the Great Firewall",
        content:
          "China has strict internet regulations known as the 'Great Firewall'. Many international websites and services are blocked, including Google, Facebook, Instagram, YouTube, and most Western news sites. However, this doesn't mean you can't access them—you'll need a VPN.",
        tips: [
          "Understand that internet restrictions are real",
          "Plan ahead and set up a VPN before arriving",
          "Be respectful of local internet policies",
        ],
        warnings: [
          "Using a VPN is technically restricted but widely tolerated for tourists",
          "Some VPNs may not work reliably in China",
          "Don't engage in activities that violate Chinese law",
        ],
      },
      {
        title: "VPN Solutions",
        content:
          "A Virtual Private Network (VPN) encrypts your internet connection and routes it through a server outside of China, allowing you to access blocked websites. Several VPNs work reliably in China, though the situation changes frequently as the government blocks VPN services.",
        tips: [
          "Download and set up a VPN BEFORE arriving in China",
          "Popular options: ExpressVPN, NordVPN, Surfshark, CyberGhost",
          "Test your VPN before your trip",
          "Have a backup VPN service",
          "Keep VPN apps updated",
        ],
        warnings: [
          "VPN speeds may be slow",
          "Some VPNs stop working without notice",
          "Free VPNs are often unreliable or unsafe",
        ],
      },
      {
        title: "Accessing Google Services",
        content:
          "Google Search, Gmail, Google Maps, and other Google services are blocked in mainland China. However, with a VPN, you can access them normally. Google Maps is particularly useful for navigation, though Baidu Maps and Amap are local alternatives.",
        tips: [
          "Use Google Maps with VPN for navigation",
          "Gmail works fine with a VPN",
          "Download offline maps before traveling",
          "Learn basic Chinese phrases for directions",
        ],
        warnings: [
          "Google services are slow even with VPN",
          "Some Google services may not work perfectly",
        ],
      },
      {
        title: "Social Media Access",
        content:
          "Instagram, Facebook, Twitter, and most Western social media platforms are blocked. With a VPN, you can access them, but speeds may be slow. Many travelers use local alternatives like WeChat, Douyin (TikTok), and Weibo for communication.",
        tips: [
          "Set up WeChat before arriving—it's essential",
          "Use Instagram with VPN for sharing photos",
          "Download offline messaging apps as backup",
          "Inform friends about potential communication delays",
        ],
        warnings: [
          "Social media speeds are often very slow with VPN",
          "Consider using local apps for better connectivity",
        ],
      },
      {
        title: "Local Internet Options",
        content:
          "China has excellent internet infrastructure. Most hotels, cafes, and restaurants offer free WiFi. You can also get a local SIM card with data for very affordable rates. China Unicom, China Mobile, and China Telecom are the main providers.",
        tips: [
          "Get a local SIM card at the airport",
          "Data plans are very cheap (around 10-20 CNY per day)",
          "Ask hotels for WiFi passwords",
          "Many cafes have free WiFi",
        ],
        warnings: [
          "WiFi speeds vary by location",
          "Some public WiFi may not be secure",
        ],
      },
    ],
  },
  transport: {
    id: "transport",
    title: "Transportation Guide",
    description: "Navigate China's cities and travel between them",
    icon: <Smartphone className="w-8 h-8" />,
    sections: [
      {
        title: "City Subway Systems",
        content:
          "Major Chinese cities have modern, efficient subway systems. Beijing, Shanghai, Guangzhou, and Chengdu have extensive metro networks. Subways are the fastest and most reliable way to get around cities. Fares are cheap, typically 2-8 CNY per ride depending on distance.",
        tips: [
          "Get a transit card (Yikatong) for convenience",
          "Download metro apps for route planning",
          "Travel during off-peak hours to avoid crowds",
          "Keep your transit card charged",
        ],
        warnings: [
          "Rush hours are extremely crowded",
          "Signs are in Chinese and English in major cities",
          "Some older lines may not have English announcements",
        ],
      },
      {
        title: "Taxis and Ride-Sharing",
        content:
          "Taxis are abundant and affordable in Chinese cities. However, communication can be challenging without Chinese language skills. Didi (China's Uber equivalent) is more convenient as you can book through an app and see the driver's location.",
        tips: [
          "Use Didi app for booking rides",
          "Have your destination written in Chinese",
          "Cash payment is common for taxis",
          "Didi is usually cheaper than taxis",
          "Keep small bills for taxi change",
        ],
        warnings: [
          "Some taxi drivers don't speak English",
          "Didi requires a Chinese phone number",
          "Taxi scams are rare but possible",
        ],
      },
      {
        title: "Buses",
        content:
          "Buses are the cheapest way to travel within cities, with fares typically 1-3 CNY. However, they can be crowded and routes are harder to navigate without Chinese language skills. Most buses have digital displays showing stops in Chinese and English.",
        tips: [
          "Get a transit card for easy payment",
          "Ask locals for help with directions",
          "Travel during off-peak hours",
          "Keep your valuables secure",
        ],
        warnings: [
          "Buses are often very crowded",
          "Route information may only be in Chinese",
          "Pickpocketing can occur on crowded buses",
        ],
      },
      {
        title: "Trains and High-Speed Rail",
        content:
          "China has an excellent train network connecting cities. High-speed trains (G-trains) are fast and comfortable, while regular trains (K-trains) are slower but cheaper. Booking can be done online through 12306.cn or through travel agencies.",
        tips: [
          "Book tickets in advance during peak seasons",
          "High-speed trains are worth the extra cost",
          "Bring snacks and water for long journeys",
          "Arrive early for security screening",
        ],
        warnings: [
          "Booking system can be confusing for foreigners",
          "Peak travel times sell out quickly",
          "Station names may differ from city names",
        ],
      },
      {
        title: "Flights",
        content:
          "Domestic flights are affordable and convenient for long distances. Major airlines include Air China, China Eastern, and China Southern. Booking through Ctrip or other travel sites is easy. Prices are competitive, especially if booked in advance.",
        tips: [
          "Book flights in advance for better prices",
          "Arrive 2 hours early for domestic flights",
          "Check baggage allowances",
          "Use travel sites like Ctrip or Skyscanner",
        ],
        warnings: [
          "Flights can be delayed",
          "Baggage fees may apply",
          "Airport transfers can be expensive",
        ],
      },
    ],
  },
  communication: {
    id: "communication",
    title: "Communication & SIM Cards",
    description: "Stay connected during your trip to China",
    icon: <Smartphone className="w-8 h-8" />,
    sections: [
      {
        title: "Getting a Local SIM Card",
        content:
          "Getting a local SIM card is one of the best decisions you can make for your trip. It's cheap, easy, and gives you reliable data and calling capabilities. You can purchase a SIM card at the airport, train stations, or mobile carrier shops.",
        tips: [
          "Buy SIM card at airport upon arrival",
          "Bring your passport for registration",
          "Choose a plan with sufficient data",
          "Keep the SIM card after your trip for future visits",
        ],
        warnings: [
          "Registration requires your passport",
          "Some plans auto-renew, so check terms",
          "International roaming can be expensive",
        ],
      },
      {
        title: "Mobile Carriers",
        content:
          "China has three main mobile carriers: China Mobile (中国移动), China Unicom (中国联通), and China Telecom (中国电信). China Mobile has the largest coverage, especially in rural areas. All three offer similar pricing and service quality in cities.",
        tips: [
          "China Mobile has best coverage nationwide",
          "All carriers offer good data speeds",
          "Prices are very affordable (10-20 CNY per day)",
          "Ask for tourist plans at the counter",
        ],
        warnings: [
          "Coverage may be limited in remote areas",
          "Some plans may have data throttling",
        ],
      },
      {
        title: "Data Plans",
        content:
          "Data plans in China are incredibly cheap. You can get 1GB of daily data for around 10 CNY, or unlimited data for around 50-100 CNY per month. Most travelers opt for daily data packages that auto-renew.",
        tips: [
          "Choose daily data packages for flexibility",
          "Unlimited plans are good for longer stays",
          "Monitor your data usage",
          "WiFi is widely available as backup",
        ],
        warnings: [
          "Some plans may have hidden charges",
          "Read the terms carefully before purchasing",
          "Data speeds may vary by location",
        ],
      },
      {
        title: "WeChat and Messaging",
        content:
          "WeChat is the dominant messaging app in China and is essential for communication. It's used not just for messaging but also for payments, social media, and business. Download WeChat before arriving and set up your account.",
        tips: [
          "Download WeChat before arriving",
          "Add friends using QR codes",
          "Use WeChat for group chats with other travelers",
          "Enable notifications for important messages",
        ],
        warnings: [
          "WeChat requires a phone number for registration",
          "Some features may require Chinese ID",
          "WeChat Pay requires additional verification",
        ],
      },
      {
        title: "International Calling",
        content:
          "Making international calls from China is expensive. Instead, use internet-based calling apps like WhatsApp, Viber, or Skype with a VPN. Video calling through these apps is much cheaper than traditional international calls.",
        tips: [
          "Use WhatsApp or Skype for international calls",
          "WiFi calling is free",
          "Set up accounts before arriving",
          "Use VPN for reliable app access",
        ],
        warnings: [
          "International calling rates are high",
          "Some apps may not work without VPN",
          "Internet-based calling requires good WiFi",
        ],
      },
    ],
  },
};

const TRIP_COM_LINK = "https://www.trip.com/?Allianceid=7659513&SID=286708661&trip_sub1=&trip_sub3=D9560539";

export default function GuideDetail() {
  const { guideId } = useParams<{ guideId: string }>();
  const guide = guideId ? guidesData[guideId] : null;

  if (!guide) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Guide Not Found</h1>
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
          <h1 className="text-xl font-bold text-primary">{guide.title}</h1>
          <a href={TRIP_COM_LINK} target="_blank" rel="noopener noreferrer">
            <Button size="sm" className="bg-secondary text-secondary-foreground">
              Book
            </Button>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section py-16 md:py-24">
        <div className="container">
          <div className="flex items-center gap-6 mb-6">
            <div className="p-4 bg-secondary/10 rounded-lg text-secondary">{guide.icon}</div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">{guide.title}</h1>
              <p className="text-lg text-foreground/70 mt-2">{guide.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-12 md:py-16">
        <div className="container max-w-4xl">
          {guide.sections.map((section, idx) => (
            <div key={idx} className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">{section.title}</h2>
              <div className="section-divider w-12 mb-6"></div>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">{section.content}</p>

              {section.tips && section.tips.length > 0 && (
                <Card className="p-6 mb-6 bg-secondary/5 border-secondary/20">
                  <div className="flex items-center gap-3 mb-4">
                    <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0" />
                    <h3 className="text-lg font-bold text-foreground">Tips</h3>
                  </div>
                  <ul className="space-y-3">
                    {section.tips.map((tip, tipIdx) => (
                      <li key={tipIdx} className="flex gap-3">
                        <span className="text-secondary font-bold">•</span>
                        <span className="text-foreground/80">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              )}

              {section.warnings && section.warnings.length > 0 && (
                <Card className="p-6 bg-destructive/5 border-destructive/20">
                  <div className="flex items-center gap-3 mb-4">
                    <AlertCircle className="w-6 h-6 text-destructive flex-shrink-0" />
                    <h3 className="text-lg font-bold text-foreground">Important Notes</h3>
                  </div>
                  <ul className="space-y-3">
                    {section.warnings.map((warning, warnIdx) => (
                      <li key={warnIdx} className="flex gap-3">
                        <span className="text-destructive font-bold">•</span>
                        <span className="text-foreground/80">{warning}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready for Your Adventure?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Book your flights, hotels, and tours through Trip.com to get the best deals and complete your travel plans.
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
