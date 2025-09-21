import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Star, Users, Bed, Bath, Wifi, Car, Waves, UtensilsCrossed, Heart, Share } from "lucide-react";
import { properties } from "@/data/properties";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";

const PropertyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const property = properties.find(p => p.id === id);

  if (!property) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-bold mb-4">Property not found</h1>
          <Button onClick={() => navigate("/")}>Go back home</Button>
        </div>
      </div>
    );
  }

  const getAmenityIcon = (amenity: string) => {
    const icons: Record<string, any> = {
      "WiFi": Wifi,
      "Parking": Car, 
      "Pool": Waves,
      "Kitchen": UtensilsCrossed,
      "Wifi": Wifi,
      "Kitchenette": UtensilsCrossed
    };
    return icons[amenity] || null;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/")}
          className="mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to listings
        </Button>

        {/* Property Header */}
        <div className="mb-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-primary fill-current" />
                  <span className="font-medium">{property.rating}</span>
                  <span>({property.reviewCount} reviews)</span>
                </div>
                <span>{property.location}</span>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="ghost" size="sm">
                <Share className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button variant="ghost" size="sm">
                <Heart className="h-4 w-4 mr-2" />
                Save
              </Button>
            </div>
          </div>
        </div>

        {/* Property Image */}
        <div className="mb-8">
          <img
            src={property.images[0]}
            alt={property.title}
            className="w-full h-96 object-cover rounded-xl shadow-lg"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Property Info */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-semibold">{property.type} hosted by {property.host}</h2>
                  <div className="flex items-center gap-4 text-gray-600 mt-2">
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{property.guests} guests</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bed className="h-4 w-4" />
                      <span>{property.bedrooms} bedrooms</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bath className="h-4 w-4" />
                      <span>{property.bathrooms} bathrooms</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">{property.description}</p>
            </div>

            {/* Amenities */}
            <div>
              <h3 className="text-xl font-semibold mb-4">What this place offers</h3>
              <div className="grid grid-cols-2 gap-4">
                {property.amenities.map((amenity) => {
                  const IconComponent = getAmenityIcon(amenity);
                  return (
                    <div key={amenity} className="flex items-center gap-3">
                      {IconComponent && <IconComponent className="h-5 w-5 text-gray-600" />}
                      <span>{amenity}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Booking Card */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle className="text-2xl">
                  <span className="text-3xl font-bold">${property.price}</span>
                  <span className="text-base font-normal text-gray-600"> night</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-2">
                  <div className="border border-gray-300 rounded-lg p-3">
                    <label className="text-xs font-semibold uppercase text-gray-800">Check-in</label>
                    <div className="text-sm text-gray-600">Add date</div>
                  </div>
                  <div className="border border-gray-300 rounded-lg p-3">
                    <label className="text-xs font-semibold uppercase text-gray-800">Check-out</label>
                    <div className="text-sm text-gray-600">Add date</div>
                  </div>
                </div>
                <div className="border border-gray-300 rounded-lg p-3">
                  <label className="text-xs font-semibold uppercase text-gray-800">Guests</label>
                  <div className="text-sm text-gray-600">1 guest</div>
                </div>
                <Button className="w-full search-button">
                  Reserve
                </Button>
                <p className="text-center text-sm text-gray-600">
                  You won't be charged yet
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>${property.price} x 5 nights</span>
                    <span>${property.price * 5}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cleaning fee</span>
                    <span>$75</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Service fee</span>
                    <span>$100</span>
                  </div>
                  <hr />
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>${property.price * 5 + 175}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;