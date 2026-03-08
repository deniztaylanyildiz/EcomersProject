import { ChevronRight } from 'lucide-react';

const ShopPage = () => {
  return (
    <div className="w-full min-h-screen bg-[#FAFAFA]">
      
      {/* Breadcrumb Alanı - Beyaz Şerit */}
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

      {/* Ürün Listesi - Gri Zemin */}
      <section className="container mx-auto px-4 md:px-32 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
           {/* 8 adet kart (Görseldeki gibi 2 satır) */}
           {[1,2,3,4,5,6,7,8].map(item => (
             <div 
               key={item} 
               className="bg-white h-[400px] shadow-sm border border-gray-100 rounded-sm hover:shadow-md transition-all cursor-pointer flex items-center justify-center text-gray-300"
             >
                Product Image Placeholder
             </div>
           ))}
        </div>
      </section>
    </div>
  );
};

export default ShopPage;