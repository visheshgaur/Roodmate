import Image from "next/image";
import { Star } from "lucide-react";
import { FoodItem } from "./MenuData";

interface MenuCardProps {
  item: FoodItem;
}

export const MenuCard = ({ item }: MenuCardProps) => {
  return (
    <div className="group flex flex-col items-start gap-3 bg-white rounded-2xl transition-all duration-300">
      {/* IMAGE CONTAINER */}
      <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl shadow-sm border border-gray-100">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* CONTENT */}
      <div className="flex flex-col gap-1 w-full px-1">
        <h3 className="heading text-lg font-bold text-[#064331] tracking-tight">
          {item.name}
        </h3>
        
        {/* STAR RATING */}
        <div className="flex items-center gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className={`${
                i < item.rating 
                ? "fill-[#FFA500] text-[#FFA500]" 
                : "text-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};