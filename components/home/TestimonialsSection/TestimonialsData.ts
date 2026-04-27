export interface TestimonialData {
  id: string;
  name: string;
  type:String;
  rating: number;
  content: string;
}

export const TESTIMONIALS: TestimonialData[] = [
  {
    id: "1",
    name: "Hemant",
    type:"Employee",
    rating: 5,
    content: "Affordable aur tasty food milna mushkil hota hai, but Rood Mates ne wo problem solve kar di. Perfect for working professionals.", 
  },
  {
    id: "2",
    name: "Raghav Singh",
    type:"Regular Customer",
    rating: 5,
    content: "Sabse best part hai timely delivery aur clean packaging. Khana hamesha fresh hota hai.", 
  },
  {
    id: "3",
    name: "Jitendra Chaudhary",
    type:"College Student",
    rating: 5,
    content: "“Ghar se door rehkar bhi ghar jaisa khana mil raha hai, ye hi Rood Mates ki sabse badi strength hai.”", 
  },

];