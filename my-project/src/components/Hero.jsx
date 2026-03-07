import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[960px] bg-gradient-to-r from-[#0052D4] via-[#4364F7] to-[#6FB1FC] flex items-center pt-24">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 md:px-32 relative z-10 flex flex-col md:flex-row items-center gap-10">
        <div className="flex flex-col gap-y-8 text-white max-w-[510px]">
          <h5 className="font-bold tracking-[0.1px]">SUMMER 2020</h5>
          <h1 className="text-5xl md:text-[58px] font-bold leading-tight">-30% Discount</h1>
          <h4 className="text-xl font-normal leading-relaxed text-gray-100">
            We know how large objects will act, but things on a small scale.
          </h4>
          <button className="w-fit border border-white px-9 py-4 rounded-[37px] font-bold text-sm hover:bg-white hover:text-blue-600 transition-all">
            Read More
          </button>
        </div>
        <div className="flex-1 flex justify-center">
         <img 
  src="https://picsum.photos/443/453" 
  alt="Hero" 
  className="w-[443px] h-auto object-contain relative z-10" 
/>
        </div>
      </div>
    </section>
  );
};

export default Hero;