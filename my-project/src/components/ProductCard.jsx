import { Link } from 'react-router-dom';

const ProductCard = ({ id, image, title, category, price, salePrice }) => {
  // Başlığı URL uyumlu hale getirmek için (Örn: "Graphic Design" -> "graphic-design")
  const slug = title.toLowerCase().replace(/ /g, '-');
  const categorySlug = category.toLowerCase().replace(/ /g, '-');

  return (
    <Link 
      to={`/shop/${categorySlug}/${id}/${slug}`}
      className="flex flex-col items-center text-center gap-y-3 p-4 bg-white hover:scale-105 transition-transform cursor-pointer shadow-sm"
    >
      <div className="w-full h-[300px] overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <h5 className="font-bold text-[#252B42] text-base mt-2">{title}</h5>
      <p className="text-[#737373] font-bold text-sm">{category}</p>
      <div className="flex gap-x-2 font-bold text-sm">
        <span className="text-[#BDBDBD]">${price}</span>
        <span className="text-[#23856D]">${salePrice}</span>
      </div>
      <div className="flex gap-x-1.5 mt-2">
        <div className="w-4 h-4 rounded-full bg-[#23A6F0]"></div>
        <div className="w-4 h-4 rounded-full bg-[#23856D]"></div>
        <div className="w-4 h-4 rounded-full bg-[#E77C40]"></div>
        <div className="w-4 h-4 rounded-full bg-[#252B42]"></div>
      </div>
    </Link>
  );
};

export default ProductCard;