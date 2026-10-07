import { Shield, Clock, Award } from 'lucide-react';

export const BACKGROUNDS = {
  flights: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=2000",
  hotels: "https://images.unsplash.com/photo-1542314831-c6a4d14eeaec?auto=format&fit=crop&q=80&w=2000",
  cars: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=2000"
};

export const DESTINATIONS = [
  { id: 1, city: "Honolulu", state: "Hawaii", price: 399, rating: 4.9, image: "https://images.unsplash.com/photo-1542259009477-d625272157b7?auto=format&fit=crop&q=80&w=800", tag: "Tropical" },
  { id: 2, city: "New York", state: "New York", price: 199, rating: 4.8, image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=800", tag: "Trending" },
  { id: 3, city: "Miami", state: "Florida", price: 149, rating: 4.7, image: "https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?auto=format&fit=crop&q=80&w=800", tag: "Beach" },
  { id: 4, city: "Los Angeles", state: "California", price: 249, rating: 4.8, image: "https://images.unsplash.com/photo-1542259009477-d625272157b7?auto=format&fit=crop&q=80&w=800", tag: "Popular" }
];

export const FEATURES = [
  { icon: Shield, title: "Enterprise Security", desc: "Bank-level 256-bit encryption for all bookings and personal data." },
  { icon: Clock, title: "24/7 Concierge", desc: "AI and human support available globally, around the clock." },
  { icon: Award, title: "Price Match Promise", desc: "Find a lower price? We'll refund the difference instantly." }
];

export const REVIEWS = [
  { id: 1, name: "Sarah Jenkins", role: "Frequent Flyer", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150", text: "SkyVista revolutionized my business travel. The multi-city booking engine is incredibly fast and intuitive." },
  { id: 2, name: "Michael Chen", role: "Family Traveler", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150", text: "Found a gorgeous resort in Hawaii for 30% less than other sites. The rewards program is actually worth it." },
  { id: 3, name: "Elena Rodriguez", role: "Digital Nomad", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150", text: "The app interface is gorgeous. Renting a car in Europe was seamless and zero hidden fees at the counter." }
];

export const NAV_LINKS = ['Destinations', 'Offers', 'Corporate', 'My Trips'];
