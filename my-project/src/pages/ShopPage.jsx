import { ChevronRight } from 'lucide-react';
import ProductCard from "../components/ProductCard.jsx";

const ShopPage = () => {
  // Örnek Ürün Verileri
  const products = [
    { id: 1, title: "Graphic Design", category: "English Department", price: "16.48", salePrice: "6.48", image: "https://picsum.photos/300/400?random=1" },
    { id: 2, title: "Web Design", category: "English Department", price: "16.48", salePrice: "6.48", image: "https://picsum.photos/300/400?random=2" },
    { id: 3, title: "UI/UX Course", category: "English Department", price: "16.48", salePrice: "6.48", image: "https://picsum.photos/300/400?random=3" },
    { id: 4, title: "Brand Identity", category: "English Department", price: "16.48", salePrice: "6.48", image: "https://picsum.photos/300/400?random=4" },
    { id: 5, title: "Graphic Design", category: "English Department", price: "16.48", salePrice: "6.48", image: "https://picsum.photos/300/400?random=5" },
    { id: 6, title: "Web Design", category: "English Department", price: "16.48", salePrice: "6.48", image: "https://picsum.photos/300/400?random=6" },
    { id: 7, title: "UI/UX Course", category: "English Department", price: "16.48", salePrice: "6.48", image: "https://picsum.photos/300/400?random=7" },
    { id: 8, title: "Brand Identity", category: "English Department", price: "16.48", salePrice: "6.48", image: "https://picsum.photos/300/400?random=8" },
  ];

  return (
    <div className="w-full min-h-screen bg-[#FAFAFA]">
      {/* Üst Başlık & Breadcrumb */}
      <div className="w-full bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-32 py-12 flex flex-col md:flex-row justify-between items-center gap-4">
          <h2 className="text-2xl font-bold text-[#252B42]">Shop</h2>
          <div className="flex items-center gap-2 text-sm font-bold">
            <span className="text-[#252B42]">Home</span>
            <ChevronRight size={16} className="text-[#BDBDBD]" />
            <span className="text-[#BDBDBD]">Shop</span>
          </div>
        </div>
      </div>

      {/* Ürün Listeleme Grid */}
      <section className="container mx-auto px-4 md:px-32 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard 
              key={product.id}
              id={product.id}
              image={product.image}
              title={product.title}
              category={product.category}
              price={product.price}
              salePrice={product.salePrice}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ShopPage;