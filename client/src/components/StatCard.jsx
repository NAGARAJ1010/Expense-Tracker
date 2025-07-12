import React from "react";

const StatCard = ({ title = "spending", amount = "2300" }) => {
  const titleName = {
    spending: {
      name: "spending",
      bgColor: "bg-[#e55039]",
    },
    balance: {
      name: "balance",
      bgColor: "bg-[#218C74]",
    },
  };

  return (
    <div className={`stat-card py-4 px-8 ${titleName[title].bgColor} text-white text-center rounded-[10rem] min-w-40`}>
      <p className="stat-card__title text-sm capitalize">{titleName[title].name}</p>
      <p className="stat-card__amount text-2xl">₹{amount}</p>
    </div>
  );
};

export default StatCard;
