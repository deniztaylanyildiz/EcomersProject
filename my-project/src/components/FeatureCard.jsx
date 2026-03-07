const FeatureCard = ({ title, description }) => {
  return (
    <div className="bg-white p-10 flex flex-col items-center gap-y-3 shadow-xl rounded-sm w-full md:w-[328px]">
      {/* Icon Placeholder (Figma'daki alert-color #E77C40) */}
      <div className="w-12 h-10 bg-[#E77C40] rounded-sm mb-4"></div>
      <h3 className="text-2xl font-bold text-dark-blue">{title}</h3>
      <p className="text-sm text-[#737373] text-center leading-5">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;