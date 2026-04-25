export interface FoodItem {
  id: string;
  name: string;
  category: "Breakfast" | "Lunch" | "Dinner";
  rating: number;
  image: string;
}

export const FOOD_ITEMS: FoodItem[] = [
  {
    id: "1",
    name: "Aloo Paratha",
    category: "Breakfast",
    rating: 5,
    image: "/aloo-paratha.webp", 
  },
  {
    id: "2",
    name: "Poha",
    category: "Breakfast",
    rating: 4,
    image: "/poha.webp",
  },
  {
    id: "3",
    name: "Sandwich",
    category: "Breakfast",
    rating: 4,
    image: "/sandwhich.webp",
  },
  {
    id: "4",
    name: "Aloo Bread Pakodi",
    category: "Breakfast",
    rating: 5,
    image: "/aloo-bread.webp",
  },{
    id: "5",
    name: "Idli + Sambhar",
    category: "Breakfast",
    rating: 5,
    image: "/idli.webp",
  },
  {
    id: "6",
    name: "Masala Paratha",
    category: "Breakfast",
    rating: 4,
    image: "/masala-paratha.webp",
  },
  {
    id: "7",
    name: "Puri Sabji",
    category: "Breakfast",
    rating: 4,
    image: "/puri-sabji.webp",
  },
  {
    id: "8",
    name: "Puri Sabji",
    category: "Lunch",
    rating: 4,
    image: "/puri-sabji.webp",
  },
];