const FeatureCard = ({ title, description }) => {
  return (
    <div className="bg-white p-[35px_40px] flex flex-col items-center gap-[10px] w-full md:w-[328px] feature-card-shadow">
      {/* icn resize icn-md */}
      <div className="w-[48px] h-[40px] bg-[#E77C40] flex items-center justify-center rounded-sm">
        {/* Buraya Icon gelecek */}
      </div>
      <h3 className="font-bold text-[24px] leading-[32px] tracking-[0.1px] text-[#252B42] text-center">
        {title}
      </h3>
      <p className="text-[14px] leading-[20px] tracking-[0.2px] text-[#737373] text-center">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;