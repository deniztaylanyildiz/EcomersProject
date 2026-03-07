import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Menu, 
  Search, 
  ShoppingCart, 
  User, 
  X, 
  Heart, 
  ArrowRight 
} from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full absolute top-0 left-0 z-50 font-montserrat text-white">
      {/* Desktop & Mobile Main Container */}
      <div className="container mx-auto px-4 md:px-32 flex justify-between items-center h-[91px]">
        
        {/* Brand Logo */}
        <Link to="/" className="text-2xl font-bold tracking-[0.1px]">
          BrandName
        </Link>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-x-5 text-sm font-bold tracking-[0.2px]">
          <Link to="/" className="hover:text-[#23A6F0] transition-colors">Home</Link>
          <Link to="/shop" className="hover:text-[#23A6F0] transition-colors">Shop</Link>
          <Link to="/about" className="hover:text-[#23A6F0] transition-colors">About</Link>
          <Link to="/contact" className="hover:text-[#23A6F0] transition-colors">Contact</Link>
          <Link to="/pages" className="hover:text-[#23A6F0] transition-colors">Pages</Link>
        </nav>

        {/* Right Section: Icons & CTAs */}
        <div className="flex items-center gap-x-4 md:gap-x-8">
          
          {/* Desktop User Actions */}
          <div className="hidden md:flex items-center gap-x-8">
            <div className="flex items-center gap-x-2 text-sm font-bold">
              <User size={18} />
              <button className="hover:opacity-75 transition-opacity">Login / Register</button>
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
          
          {/* Mobile Menu Toggle Button */}
          <button 
            className="md:hidden p-2" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay (Mobile First Approach) */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#252B42] w-full flex flex-col items-center py-10 gap-y-8 text-2xl font-normal animate-in fade-in slide-in-from-top-4">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/shop" onClick={() => setIsMenuOpen(false)}>Product</Link>
          <Link to="/pricing" onClick={() => setIsMenuOpen(false)}>Pricing</Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          
          <div className="flex flex-col items-center gap-y-4 mt-4">
            <div className="flex items-center gap-x-2 text-[#23A6F0] font-bold">
              <User size={24} />
              <span>Login / Register</span>
            </div>
            <div className="flex gap-x-6 text-[#23A6F0] mt-4">
              <Search size={24} />
              <ShoppingCart size={24} />
              <Heart size={24} />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;