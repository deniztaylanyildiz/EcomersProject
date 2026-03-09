import { ChevronRight, Star, Heart, ShoppingCart, Eye } from 'lucide-react';

const ProductDetailPage = () => {
  return (
    <div className="w-full min-h-screen bg-[#FAFAFA]">
      {/* Breadcrumb */}
      <div className="w-full bg-[#FAFAFA] py-6">
        <div className="container mx-auto px-4 md:px-32 flex items-center gap-2 text-sm font-bold">
          <span className="text-[#252B42]">Home</span>
          <ChevronRight size={16} className="text-[#BDBDBD]" />
          <span className="text-[#BDBDBD]">Shop</span>
        </div>
      </div>

      {/* Main Content */}
      <section className="container mx-auto px-4 md:px-32 pb-20">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          
          {/* Sol: Ürün Görselleri (Mobile: Üstte) */}
          <div className="flex-1">
            <div className="w-full aspect-square bg-gray-200 rounded-sm mb-4 overflow-hidden shadow-sm">
              <img src="https://picsum.photos/600/600" alt="Product" className="w-full h-full object-cover" />
            </div>
            {/* Küçük Görseller (Thumbnail) */}
            <div className="flex gap-4">
              <div className="w-24 h-24 bg-gray-300 opacity-50"></div>
              <div className="w-24 h-24 bg-gray-300 opacity-50"></div>
            </div>
          </div>

          {/* Sağ: Ürün Bilgileri (Mobile: Altta) */}
          <div className="flex-1 flex flex-col gap-5 pt-4">
            <h2 className="text-xl font-medium text-[#252B42]">Floating Phone</h2>
            
            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex text-[#F3CD03]">
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} />
              </div>
              <span className="text-[#737373] font-bold text-sm">10 Reviews</span>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-bold text-[#252B42]">$1,139.33</h3>
              <p className="text-sm font-bold text-[#737373]">
                Availability : <span className="text-[#23A6F0]">In Stock</span>
              </p>
            </div>

            <p className="text-[#858585] text-sm leading-6">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie.
            </p>

            <hr className="border-[#BDBDBD] my-2" />

            {/* Renk Seçenekleri */}
            <div className="flex gap-2">
              <div className="w-8 h-8 rounded-full bg-[#23A6F0] cursor-pointer"></div>
              <div className="w-8 h-8 rounded-full bg-[#23856D] cursor-pointer"></div>
              <div className="w-8 h-8 rounded-full bg-[#E77C40] cursor-pointer"></div>
              <div className="w-8 h-8 rounded-full bg-[#252B42] cursor-pointer"></div>
            </div>

            {/* Aksiyon Butonları */}
            <div className="flex items-center gap-4 mt-4">
              <button className="bg-[#23A6F0] text-white px-8 py-3 rounded-md font-bold text-sm hover:bg-blue-600 transition-all">
                Select Options
              </button>
              <div className="flex gap-3">
                <button className="p-3 border border-[#E8E8E8] rounded-full bg-white hover:bg-gray-50"><Heart size={20} /></button>
                <button className="p-3 border border-[#E8E8E8] rounded-full bg-white hover:bg-gray-50"><ShoppingCart size={20} /></button>
                <button className="p-3 border border-[#E8E8E8] rounded-full bg-white hover:bg-gray-50"><Eye size={20} /></button>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ProductDetailPage;