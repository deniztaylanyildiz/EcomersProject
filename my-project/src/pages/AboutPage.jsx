import { Play } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="w-full bg-white">
      {/* 1. Hero Section */}
      <section className="container mx-auto px-4 md:px-32 py-16 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 flex flex-col gap-8 text-center md:text-left">
          <h5 className="font-bold text-[#252B42] hidden md:block">ABOUT COMPANY</h5>
          <h1 className="text-[40px] md:text-[58px] font-bold text-[#252B42] leading-tight">
            ABOUT US
          </h1>
          <p className="text-[#737373] text-xl max-w-sm mx-auto md:mx-0">
            We know how large objects will act, but things on a small scale.
          </p>
          <div>
            <button className="bg-[#23A6F0] text-white px-10 py-4 rounded-md font-bold hover:bg-blue-600 transition-all">
              Get Quote Now
            </button>
          </div>
        </div>
        <div className="flex-1 relative">
           <div className="w-full aspect-square bg-[#FFE9EA] rounded-full overflow-hidden flex items-center justify-center">
              <span className="text-gray-400">About Hero Image</span>
           </div>
        </div>
      </section>

      {/* 2. Problems & Description Section */}
      <section className="container mx-auto px-4 md:px-32 py-20 flex flex-col md:flex-row gap-16 items-center">
        <div className="flex-1 flex flex-col gap-6">
          <h6 className="text-[#E77C40] text-sm font-bold">Problems trying</h6>
          <h3 className="text-2xl font-bold text-[#252B42]">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </h3>
        </div>
        <div className="flex-1">
          <p className="text-[#737373] text-sm leading-7">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>
      </section>

      {/* 3. Stats Section */}
      <section className="container mx-auto px-4 md:px-32 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
          <div>
            <h2 className="text-[58px] font-bold text-[#252B42]">15K</h2>
            <h5 className="text-[#737373] font-bold">Happy Customers</h5>
          </div>
          <div>
            <h2 className="text-[58px] font-bold text-[#252B42]">150K</h2>
            <h5 className="text-[#737373] font-bold">Monthly Visitors</h5>
          </div>
          <div>
            <h2 className="text-[58px] font-bold text-[#252B42]">15</h2>
            <h5 className="text-[#737373] font-bold">Countries Worldwide</h5>
          </div>
          <div>
            <h2 className="text-[58px] font-bold text-[#252B42]">100+</h2>
            <h5 className="text-[#737373] font-bold">Top Partners</h5>
          </div>
        </div>
      </section>

      {/* 4. Video Section */}
      <section className="container mx-auto px-4 md:px-32 py-20">
        <div className="relative w-full aspect-video rounded-3xl overflow-hidden bg-gray-200 shadow-2xl group cursor-pointer">
          <img src="https://picsum.photos/1200/600" className="w-full h-full object-cover" alt="Company Video" />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
             <div className="w-24 h-24 bg-[#23A6F0] rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                <Play fill="currentColor" size={32} />
             </div>
          </div>
        </div>
      </section>

      {/* 5. Big Companies Section (Logolar) */}
      <section className="bg-[#FAFAFA] py-20">
        <div className="container mx-auto px-4 md:px-32 text-center">
          <h2 className="text-[40px] font-bold text-[#252B42] mb-8">Big Companies Are Here</h2>
          <p className="text-[#737373] max-w-md mx-auto mb-16">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
             {/* İkon isimleri veya placeholderlar */}
             <span className="text-4xl font-bold">Hooli</span>
             <span className="text-4xl font-bold">Lyft</span>
             <span className="text-4xl font-bold">Pied Piper</span>
             <span className="text-4xl font-bold">Stripe</span>
             <span className="text-4xl font-bold">AWS</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;