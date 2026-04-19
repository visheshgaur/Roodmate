"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FOOD_ITEMS } from "./MenuData";
import { MenuCard } from "./MenuCard";

export const MenuSection = () => {
  // Helper to filter items by category
  const getItemsByCategory = (category: string) => {
    return FOOD_ITEMS.filter((item) => item.category === category);
  };

  const categories = ["Breakfast", "Lunch", "Dinner"];

  return (
    <section className="py-10 px-5 md:px-10 md:py-20 bg-white">
      {/* HEADER SECTION */}
      <div className="flex flex-col items-center text-center mb-12">
        <p className="text-[#9AA813] font-bold tracking-[0.2em] text-sm mb-2 uppercase">
          Menu
        </p>
        <h2 className="heading text-4xl md:text-5xl font-extrabold text-[#064331]">
          Our Food Menu<span className="heading text-4xl md:text-5xl font-extrabold text-[#FFA500]">.</span>
        </h2>
        <p className="mypara mt-4 max-w-4xl text-sm md:text-base">
          Har meal me ghar ka taste, comfort aur care — bilkul waise jaise aap deserve karte ho.
        </p>
      </div>

      {/* SHADCN TABS */}
      <Tabs defaultValue="Breakfast" className="w-full flex flex-col items-center">
        <TabsList className="bg-transparent h-auto gap-3 md:gap-6 mb-12 flex-wrap justify-center">
          {categories.map((cat) => (
            <TabsTrigger
              key={cat}
              value={cat}
              className="rounded-full px-6 py-5 border border-gray-200 text-gray-600 
                         data-[state=active]:bg-[#84A221] data-[state=active]:text-white 
                         data-[state=active]:border-[#84A221] transition-all font-semibold"
            >
              {cat}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((cat) => (
          <TabsContent key={cat} value={cat} className="w-full outline-none">
            {/* THE RESPONSIVE GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
              {getItemsByCategory(cat).map((item) => (
                <MenuCard key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
};