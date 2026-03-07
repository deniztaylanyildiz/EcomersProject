import HomeSlider from "../components/HomeSlider.jsx";
import FeatureCard from "../components/FeatureCard.jsx";
import ProductCard from "../components/ProductCard.jsx";

const HomePage = () => {
  return (
    <div className="w-full font-montserrat">
      {/* Slider Bölümü (Yönerge Madde 9 & 10) */}
      <HomeSlider />

      {/* Özellikler Bölümü (Figma: Job Security vb.) */}
      <section className="container mx-auto px-4 md:px-32 relative z-10 -mt-24">
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          <FeatureCard title="Job Security" description="the quick fox jumps over the lazy dog" />
          <FeatureCard title="Job Security" description="the quick fox jumps over the lazy dog" />
          <FeatureCard title="Job Security" description="the quick fox jumps over the lazy dog" />
        </div>
      </section>

      {/* Ürün Listesi (Repetitive ProductCard - Yönerge Madde 8) */}
      <section className="container mx-auto px-4 md:px-32 py-20">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold text-dark-blue mb-2">Featured Products</h2>
          <p className="text-[#737373]">Problems trying to resolve the conflict between</p>
        </div>
        
        {/* Grid: Mobile 1, Tablet 2, Desktop 4 Kolon */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <ProductCard 
              key={item}
              title={`Product ${item}`}
              category="English Department"
              price="16.48"
              salePrice="6.48"
              image={`https://picsum.photos/300/400?random=${item}`}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;