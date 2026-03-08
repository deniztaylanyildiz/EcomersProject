import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Search, ShoppingCart, User, X, Heart, ArrowRight } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    /* Arka planı koyu lacivert yaparak her sayfada sabit durmasını sağlıyoruz */
    <header className="w-full bg-[#252B42] text-white font-montserrat sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 md:px-32 flex justify-between items-center h-[91px]">
        
        {/* Brand Logo */}
        <Link to="/" className="text-2xl font-bold tracking-[0.1px]">
          BrandName
        </Link>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-x-5 text-sm font-bold tracking-[0.2px]">
          <Link to="/" className="hover:text-[#23A6F0] transition-colors">Home</Link>
          <Link to="/shop" className="hover:text-[#23A6F0] transition-colors">Shop</Link>
          <Link to="/contact" className="hover:text-[#23A6F0] transition-colors">Contact</Link>
          <Link to="/pages" className="hover:text-[#23A6F0] transition-colors">Pages</Link>
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-x-4 md:gap-x-8">
          <div className="hidden md:flex items-center gap-x-8">
            <div className="flex items-center gap-x-2 text-sm font-bold">
              <User size={18} />
              <button className="hover:opacity-75">Login / Register</button>
            </div>
            
            <div className="flex items-center gap-x-6 text-[#23A6F0]">
              <Search size={18} className="cursor-pointer" />
              <div className="flex items-center gap-x-1 cursor-pointer">
                <ShoppingCart size={18} />
                <span className="text-xs font-normal">1</span>
              </div>
              <div className="flex items-center gap-x-1 cursor-pointer">
                <Heart size={18} />
                <span className="text-xs font-normal">1</span>
              </div>
            </div>

            <button className="bg-[#23A6F0] px-6 py-4 rounded-md flex items-center gap-x-2 text-sm font-bold hover:bg-blue-600 transition-all">
              Become a member <ArrowRight size={16} />
            </button>
          </div>
          
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#252B42] w-full flex flex-col items-center py-10 gap-y-8 text-2xl animate-in fade-in zoom-in">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/shop" onClick={() => setIsMenuOpen(false)}>Shop</Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          <div className="flex flex-col items-center gap-y-4 text-[#23A6F0]">
            <span className="flex items-center gap-x-2"><User size={24} /> Login</span>
            <div className="flex gap-x-6"><Search size={24} /><ShoppingCart size={24} /><Heart size={24} /></div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;