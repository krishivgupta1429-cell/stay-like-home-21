import { Heart, Star } from "lucide-react";
import { Property } from "@/data/properties";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface PropertyCardProps {
  property: Property;
  onClick?: () => void;
}

const PropertyCard = ({ property, onClick }: PropertyCardProps) => {
  return (
    <Card className="property-card cursor-pointer border-0 shadow-none" onClick={onClick}>
      <CardContent className="p-0">
        <div className="relative">
          <img
            src={property.images[0]}
            alt={property.title}
            className="w-full h-64 object-cover rounded-xl"
          />
          <Button
            variant="ghost"
            size="sm"
            className="absolute top-3 right-3 rounded-full bg-white/90 hover:bg-white p-2"
          >
            <Heart className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="mt-3 space-y-1">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-gray-900 truncate">
              {property.location}
            </h3>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 text-primary fill-current" />
              <span className="text-sm font-medium">{property.rating}</span>
            </div>
          </div>
          
          <p className="text-gray-500 text-sm truncate">{property.title}</p>
          <p className="text-gray-500 text-sm">
            {property.guests} guests · {property.bedrooms} bedrooms · {property.bathrooms} bathrooms
          </p>
          
          <div className="flex items-baseline gap-1 pt-1">
            <span className="font-semibold text-gray-900">${property.price}</span>
            <span className="text-gray-500 text-sm">night</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;