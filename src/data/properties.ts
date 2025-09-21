import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import property4 from "@/assets/property-4.jpg";
import property5 from "@/assets/property-5.jpg";
import property6 from "@/assets/property-6.jpg";

export interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  rating: number;
  reviewCount: number;
  images: string[];
  host: string;
  guests: number;
  bedrooms: number;
  bathrooms: number;
  amenities: string[];
  description: string;
  type: string;
}

export const properties: Property[] = [
  {
    id: "1",
    title: "Luxury Beachfront Villa",
    location: "Malibu, California",
    price: 750,
    rating: 4.9,
    reviewCount: 127,
    images: [property1],
    host: "Sarah Wilson",
    guests: 8,
    bedrooms: 4,
    bathrooms: 3,
    amenities: ["Pool", "Ocean view", "WiFi", "Kitchen", "Parking", "Air conditioning"],
    description: "Wake up to stunning ocean views in this modern beachfront villa. Perfect for groups looking for luxury and relaxation.",
    type: "Entire villa"
  },
  {
    id: "2", 
    title: "Cozy Mountain Cabin",
    location: "Aspen, Colorado",
    price: 320,
    rating: 4.8,
    reviewCount: 89,
    images: [property2],
    host: "Michael Chen",
    guests: 6,
    bedrooms: 3,
    bathrooms: 2,
    amenities: ["Fireplace", "Mountain view", "WiFi", "Kitchen", "Parking", "Heating"],
    description: "Escape to the mountains in this charming wooden cabin. Perfect for winter getaways and outdoor adventures.",
    type: "Entire cabin"
  },
  {
    id: "3",
    title: "Modern City Loft",
    location: "New York, NY",
    price: 200,
    rating: 4.7,
    reviewCount: 203,
    images: [property3],
    host: "Emma Rodriguez",
    guests: 4,
    bedrooms: 2,
    bathrooms: 1,
    amenities: ["City view", "WiFi", "Kitchen", "Gym access", "Elevator", "Air conditioning"],
    description: "Stylish loft in the heart of Manhattan. Walking distance to major attractions and restaurants.",
    type: "Entire apartment"
  },
  {
    id: "4",
    title: "Rustic Countryside Farmhouse",
    location: "Tuscany, Italy",
    price: 180,
    rating: 4.9,  
    reviewCount: 156,
    images: [property4],
    host: "Giuseppe Rossi",
    guests: 10,
    bedrooms: 5,
    bathrooms: 3,
    amenities: ["Garden", "Pool", "WiFi", "Kitchen", "Parking", "BBQ area"],
    description: "Authentic farmhouse surrounded by rolling hills and vineyards. Perfect for large groups seeking tranquility.",
    type: "Entire house"
  },
  {
    id: "5",
    title: "Desert Modern Retreat",
    location: "Scottsdale, Arizona",
    price: 450,
    rating: 4.8,
    reviewCount: 94,
    images: [property5],
    host: "David Kim",
    guests: 6,
    bedrooms: 3,
    bathrooms: 2,
    amenities: ["Pool", "Desert view", "WiFi", "Kitchen", "Parking", "Hot tub"],
    description: "Stunning modern architecture in the Sonoran Desert. Watch incredible sunsets from the infinity pool.",
    type: "Entire house"
  },
  {
    id: "6",
    title: "Overwater Bungalow Paradise",
    location: "Bora Bora, French Polynesia", 
    price: 950,
    rating: 5.0,
    reviewCount: 78,
    images: [property6],
    host: "Marie Dupont",
    guests: 4,
    bedrooms: 2,
    bathrooms: 1,
    amenities: ["Ocean view", "Private deck", "WiFi", "Kitchenette", "Snorkeling gear", "Kayak"],
    description: "Ultimate romantic getaway in an overwater bungalow. Crystal clear lagoon and incredible marine life.",
    type: "Entire bungalow"
  }
];