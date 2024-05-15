const StaticsCard = ({ text, value }: { text: string; value: number }) => {
  return (
    <div className="relative bg-gradient-to-r from-cyan-500 to-blue-500 h-[200px] rounded-md border-1 mt-3 flex justify-center items-center">
      {/* Statics data */}
      <div className="text-white text-center">
        <span className="font-bold text-[25px]">{value}</span>
        <span className="block font-bold text-[25px]">{text}</span>
      </div>
    </div>
  );
};

export default StaticsCard;
