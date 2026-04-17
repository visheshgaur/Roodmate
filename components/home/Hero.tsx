import { Button } from '@/components/ui/Button';

export const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center py-24 px-6">
      <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 tracking-tight">
        Better Meals for <br />
        <span className="text-orange-600">Roommates.</span>
      </h1>
      <p className="text-gray-600 text-lg md:text-xl max-w-2xl mb-10">
        Stop worrying about daily food payments. Subscribe once, 
        and get your meals delivered to your doorstep every single day.
      </p>
      <div className="flex gap-4">
        <Button className="px-10">View Plans</Button>
        <Button variant="secondary">How it Works</Button>
      </div>
    </section>
  );
};