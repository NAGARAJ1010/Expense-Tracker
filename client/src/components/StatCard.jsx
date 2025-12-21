import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleDown, faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const StatCard = ({ title = "spended", amount = "2300" }) => {
  const titleName = {
    spended: {
      name: "spended",
      bgColor: "bg-(--spend-color)",
    },
    income: {
      name: "income",
      bgColor: "bg-(--income-color)",
    },
  };

  return (
    <div className={`stat-card flex items-center justify-center gap-2 py-2 px-2 ${titleName[title].bgColor} text-white text-center rounded-[10rem]`}>
      <div className="w-8 h-8 opacity-60">
        <FontAwesomeIcon icon={title === 'spended' ? faArrowAltCircleDown : faArrowAltCircleUp} className="w-full h-full"/>
      </div>
      <div>
        <p className="stat-card__title text-sm capitalize">{titleName[title].name}</p>
        <p className="stat-card__amount text-xl">₹{amount}</p>
      </div>
    </div>
  );
};

export default StatCard;
