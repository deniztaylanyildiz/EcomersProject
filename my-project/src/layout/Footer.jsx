const Footer = () => {
  return (
    <footer className="w-full bg-white font-montserrat">
      <div className="container mx-auto px-4 md:px-32 py-10 flex flex-col md:flex-row justify-between items-start gap-10">
        <div className="flex flex-col gap-y-5">
          <h3 className="text-2xl font-bold text-dark-blue">BrandName</h3>
          <p className="text-[#737373] text-sm">Making the world a better place.</p>
        </div>
        {/* Diğer kolonlar Figma'ya göre buraya eklenebilir */}
      </div>
      <div className="bg-[#FAFAFA] py-6 text-center">
        <p className="text-[#737373] font-bold text-sm">Made With Love By Figmaland All Right Reserved</p>
      </div>
     {/* GELİŞTİRİCİ NOTU: PROJE TAMAMLANINCA BU BÖLÜMÜ SİLEBİLİRSİN */}
<section className="bg-slate-900 text-white p-10 font-mono text-xs border-t-8 border-yellow-500">
  <h2 className="text-xl font-bold mb-4 text-yellow-500 underline">🛠️ Kullanılan Teknik Altyapı & Kütüphaneler</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div className="border border-slate-700 p-4 rounded">
      <h3 className="font-bold text-blue-400 mb-2">Routing & State</h3>
      <ul className="list-disc ml-4 space-y-1">
        <li>React Router Dom (v5): Sayfa geçişleri ve URL yönetimi.</li>
        <li>Redux: Global state (Product/User) yönetimi.</li>
      </ul>
    </div>
    <div className="border border-slate-700 p-4 rounded">
      <h3 className="font-bold text-green-400 mb-2">Styling & UI</h3>
      <ul className="list-disc ml-4 space-y-1">
        <li>Tailwind CSS: Sadece utility class'lar (Custom CSS yasak).</li>
        <li>Flex/Grid Layout: Responsive tasarım mimarisi.</li>
        <li>Mobile First: @media sorguları küçük ekrandan başlar.</li>
      </ul>
    </div>
    <div className="border border-slate-700 p-4 rounded">
      <h3 className="font-bold text-purple-400 mb-2">Components & Icons</h3>
      <ul className="list-disc ml-4 space-y-1">
        <li>Lucide React: SVG tabanlı modern ikon seti.</li>
        <li>Swiper: Ana sayfa slider bileşeni.</li>
        <li>ProductCard: Tekrar eden (repetitive) UI bileşeni.</li>
      </ul>
    </div>
  </div>
</section>
    </footer>
  );
};

export default Footer;