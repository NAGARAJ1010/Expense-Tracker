import FoodDinningIcon from "../assets/foodanddinning.svg";
// import { ReactComponent as EntertainmentIcon } from "../assets/entertainment.svg";
// import { ReactComponent as ShoppingIcon } from "../assets/shopping.svg";
// import { ReactComponent as TravellingIcon } from "../assets/travel.svg";
// import { ReactComponent as MedicalIcon } from "../assets/medical.svg";
// import { ReactComponent as InvestmentIcon } from "../assets/investment.svg";
const CategoryIcon = ({ categoryName = "shopping" }) => {
  const categoryImg = {
    foodDinning: {
      color: "#ff922b",
      bgColor: "bg-[#cc751f]",
    },
    entertainment: {
      color: "#7fc77d",
      bgColor: "bg-[#65a562]",
    },
    shopping: {
      color: "#4ebdf5",
      bgColor: "bg-[#3d98c4]",
    },
    travelling: {
      color: "#8060a3",
      bgColor: "bg-[#654d82]",
    },
    medical: {
      color: "#ce495e",
      bgColor: "bg-[#a13a4a]",
    },
    investment: {
      color: "#92c55e",
      bgColor: "bg-[#749e4b]",
    },
  };
  return (
    <div
      className={`w-12 h-12 rounded-full p-2 ${categoryImg[categoryName].bgColor}`}
    >
      <img src={FoodDinningIcon} alt="" className="w-full h-full turn-white" />
    </div>
  );
};

export default CategoryIcon;
