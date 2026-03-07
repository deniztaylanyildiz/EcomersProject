const ProductCard = ({ image, title, category, price, salePrice }) => {
  return (
    <div className="flex flex-col items-center text-center gap-y-3 p-4 hover:scale-105 transition-transform cursor-pointer">
      <div className="w-full h-[300px] overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <h5 className="font-bold text-dark-blue text-base mt-2">{title}</h5>
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
    </div>
  );
};

export default ProductCard;