import { Phone, Mail, MapPin, Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="w-full bg-white">
      {/* Üst Kısım: Tanıtım (Hero Section) */}
      <section className="container mx-auto px-4 md:px-32 py-16 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 flex flex-col gap-6 text-center md:text-left">
          <h5 className="font-bold text-[#252B42] tracking-[0.1px]">CONTACT US</h5>
          <h1 className="text-[40px] md:text-[58px] font-bold leading-tight text-[#252B42]">
            Get in touch today!
          </h1>
          <p className="text-[#737373] text-xl">
            We know how large objects will act, but things on a small scale.
          </p>
          <div className="flex flex-col gap-2 font-bold text-[#252B42]">
            <p>Phone : +451 215 215 </p>
            <p>Fax : +451 215 215</p>
          </div>
          <div className="flex justify-center md:justify-start gap-8 text-[#252B42]">
            <Twitter className="cursor-pointer hover:text-[#23A6F0]" />
            <Facebook className="cursor-pointer hover:text-[#23A6F0]" />
            <Instagram className="cursor-pointer hover:text-[#23A6F0]" />
            <Linkedin className="cursor-pointer hover:text-[#23A6F0]" />
          </div>
        </div>
        
        {/* Görsel Alanı (Sağ taraf) */}
        <div className="flex-1 w-full flex justify-center">
           <div className="w-full aspect-square bg-[#FFE9EA] rounded-full overflow-hidden flex items-center justify-center">
              {/* Buraya Figma'daki o kadın/ofis görseli gelecek */}
              <span className="text-gray-400">Contact Hero Image</span>
           </div>
        </div>
      </section>

      {/* Orta Kısım: İletişim Kartları */}
      <section className="bg-[#FAFAFA] py-20">
        <div className="container mx-auto px-4 md:px-32 text-center">
          <h5 className="font-bold text-sm text-[#252B42] mb-4">VISIT OUR OFFICE</h5>
          <h2 className="text-[40px] font-bold text-[#252B42] mb-20">
            We help small businesses <br className="hidden md:block"/> with big ideas
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 items-center">
            {/* Kart 1 */}
            <div className="bg-white p-12 flex flex-col items-center gap-4">
              <Phone size={72} className="text-[#23A6F0]" />
              <div className="text-sm font-bold text-[#252B42]">
                <p>georgia.young@example.com</p>
                <p>georgia.young@ple.com</p>
              </div>
              <h5 className="font-bold text-base">Get Support</h5>
              <button className="border border-[#23A6F0] text-[#23A6F0] px-8 py-4 rounded-[37px] font-bold hover:bg-[#23A6F0] hover:text-white transition-all">
                Submit Request
              </button>
            </div>

            {/* Kart 2 (Öne Çıkan - Koyu Renk) */}
            <div className="bg-[#252B42] p-20 flex flex-col items-center gap-4 text-white">
              <MapPin size={72} className="text-[#23A6F0]" />
              <div className="text-sm font-bold">
                <p>georgia.young@example.com</p>
                <p>georgia.young@ple.com</p>
              </div>
              <h5 className="font-bold text-base">Get Support</h5>
              <button className="border border-[#23A6F0] text-[#23A6F0] px-8 py-4 rounded-[37px] font-bold hover:bg-[#23A6F0] hover:text-white transition-all">
                Submit Request
              </button>
            </div>

            {/* Kart 3 */}
            <div className="bg-white p-12 flex flex-col items-center gap-4">
              <Mail size={72} className="text-[#23A6F0]" />
              <div className="text-sm font-bold text-[#252B42]">
                <p>georgia.young@example.com</p>
                <p>georgia.young@ple.com</p>
              </div>
              <h5 className="font-bold text-base">Get Support</h5>
              <button className="border border-[#23A6F0] text-[#23A6F0] px-8 py-4 rounded-[37px] font-bold hover:bg-[#23A6F0] hover:text-white transition-all">
                Submit Request
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Alt Kısım: Call to Action */}
      <section className="py-20 text-center flex flex-col items-center gap-6">
         <div className="w-16 h-16 bg-[#23A6F0] rotate-45 flex items-center justify-center mb-4">
            <ArrowDown className="-rotate-45 text-white" />
         </div>
         <h5 className="font-bold text-[#252B42]">WE CAN'T WAIT TO MEET YOU</h5>
         <h2 className="text-[58px] font-bold text-[#252B42]">Let’s Talk</h2>
         <button className="bg-[#23A6F0] text-white px-10 py-4 rounded-md font-bold hover:bg-blue-600 transition-all">
            Try it free now
         </button>
      </section>
    </div>
  );
};

// Küçük bir yardımcı ikon ekleyelim (Lucide içinde ArrowDown)
import { ArrowDown } from 'lucide-react';

export default ContactPage;