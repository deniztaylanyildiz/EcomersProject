import { ArrowRight } from 'lucide-react';
const Hero = () => {
  return (
    <div className="w-full">
      {/* Mavi Alan - Gradyan ve Filtre burada birleşiyor */}
      <section 
        className="relative w-full min-h-[600px] md:min-h-[800px] flex items-center pt-20 pb-40 overflow-hidden"
        style={{ 
          // Figma'daki 3 renkli gradyan
          background: 'linear-gradient(90deg, #0052D4 0%, #4364F7 50%, #6FB1FC 100%)' 
        }}
      >
        {/* Figma 'filter' katmanı: Rengi koyulaştıran ama öldürmeyen katman */}
        <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-32 relative z-20 flex flex-col md:flex-row items-center justify-between">
          
          {/* Sol Metin Alanı */}
          <div className="flex flex-col gap-y-6 max-w-[500px] text-white">
            <h5 className="font-bold text-base tracking-[0.1px]">SUMMER 2020</h5>
            <h1 className="text-5xl md:text-[58px] font-bold leading-tight tracking-[0.2px]">
              -30% Discount
            </h1>
            <h4 className="text-xl font-normal leading-relaxed opacity-80">
              We know how large objects will act, but things on a small scale.
            </h4>
            <button className="w-fit border-2 border-white rounded-[37px] px-10 py-4 font-bold text-sm hover:bg-white hover:text-[#0052D4] transition-all uppercase">
              Read More
            </button>
          </div>

          {/* Sağ Görsel Alanı (Sarı içecek/ürün görseli) */}
          <div className="mt-12 md:mt-0 relative">
             {/* Buraya kendi görsel yolunu eklemelisin */}
            <img 
              src="https://i.imgur.com/your-image-link.png" 
              alt="Hero Product" 
              className="w-[300px] md:w-[443px] h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Kartlar Alanı - Görseldeki gibi beyaz bir şerit üzerinde */}
      <div className="w-full bg-white relative">
        <div className="container mx-auto px-4 md:px-32 relative -mt-20 z-30 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-12 flex flex-col items-center shadow-[0px_13px_19px_rgba(0,0,0,0.07)]">
                <div className="text-[#E77C40] mb-5">
                   {/* Figma İkon: #E77C40 */}
                   <svg width="48" height="40" viewBox="0 0 24 24" fill="currentColor">
                     <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                   </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#252B42] mb-3">Job Security</h3>
                <p className="text-[#737373] text-center text-sm leading-relaxed">
                  the quick fox jumps over the lazy dog
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;