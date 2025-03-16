import React from "react";

const NetworkView: React.FC = () => {
  return (
    <div className="relative w-[1244px] h-[490px] border-t border-gray-800 overflow-hidden">
      <img
        className="absolute left-[585px] top-[219px] w-[75px] h-[62.84px] rounded-full object-cover"
        src="/_76701347-20.png"
      />
      <img
        className="absolute left-[787px] top-[114px] w-[75px] h-[68.52px] rounded-full object-cover"
        src="/images-10.png"
      />
      <div
        className="absolute left-[660px] top-[236px] w-[149.04px] border-t border-white"
        style={{ transform: "rotate(-31.557deg) scale(1, 1)" }}
      ></div>
      <div className="absolute left-[605px] top-[294px] text-white text-[24px] font-semibold font-['PlayfairDisplay']">
        me
      </div>
      <div className="absolute left-[794px] top-[195px] text-white text-[24px] font-semibold font-['PlayfairDisplay']">
        Sarah
      </div>
    </div>
  );
};

export default NetworkView;
