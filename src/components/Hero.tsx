import { Search, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Hero = () => {
  return (
    <section className="hero-gradient text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Find your next adventure
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90">
          Discover amazing places to stay around the world
        </p>
        
        {/* Search Form */}
        <div className="bg-white rounded-full p-2 shadow-lg max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
            <div className="flex items-center px-4 py-3 rounded-full hover:bg-gray-50">
              <div className="flex-1">
                <label className="text-xs font-semibold text-gray-900 block">Where</label>
                <Input 
                  placeholder="Search destinations" 
                  className="border-0 p-0 text-gray-900 placeholder:text-gray-500 focus-visible:ring-0"
                />
              </div>
            </div>
            
            <div className="flex items-center px-4 py-3 rounded-full hover:bg-gray-50">
              <Calendar className="h-4 w-4 text-gray-400 mr-3" />
              <div className="flex-1">
                <label className="text-xs font-semibold text-gray-900 block">Check in</label>
                <span className="text-sm text-gray-500">Add dates</span>
              </div>
            </div>
            
            <div className="flex items-center px-4 py-3 rounded-full hover:bg-gray-50">
              <Calendar className="h-4 w-4 text-gray-400 mr-3" />
              <div className="flex-1">
                <label className="text-xs font-semibold text-gray-900 block">Check out</label>
                <span className="text-sm text-gray-500">Add dates</span>
              </div>
            </div>
            
            <div className="flex items-center px-4 py-3">
              <Users className="h-4 w-4 text-gray-400 mr-3" />
              <div className="flex-1">
                <label className="text-xs font-semibold text-gray-900 block">Who</label>
                <span className="text-sm text-gray-500">Add guests</span>
              </div>
              <Button className="search-button ml-3">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;