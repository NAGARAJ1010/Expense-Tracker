import '../css/category.css';
import FoodDinningIcon from "../assets/foodanddinning.svg";
import EntertainmentIcon from "../assets/entertainment.svg";
import ShoppingIcon from "../assets/shopping.svg";
import TravellingIcon from "../assets/travel.svg";
import MedicalIcon from "../assets/medical.svg";
import InvestmentIcon from "../assets/investment.svg";
import OthersIcon from "../assets/others.svg";
import { useSelector } from 'react-redux';

const CategoryIcon = ({ categoryName = "foodDinning", type = "icon", handleCategory }) => {
  const categoryImg = {
    food: {
      color: "#ff922b",
      bgColor: "bg-[#cc751f]",
      img: FoodDinningIcon,
    },
    entertainment: {
      color: "#7fc77d",
      bgColor: "bg-[#65a562]",
      img: EntertainmentIcon,
    },
    shopping: {
      color: "#4ebdf5",
      bgColor: "bg-[#3d98c4]",
      img: ShoppingIcon,
    },
    travel: {
      color: "#8060a3",
      bgColor: "bg-[#654d82]",
      img: TravellingIcon,
    },
    medical: {
      color: "#ce495e",
      bgColor: "bg-[#a13a4a]",
      img: MedicalIcon,
    },
    investment: {
      color: "#92c55e",
      bgColor: "bg-[#749e4b]",
      img: InvestmentIcon,
    },
    others: {
      color: "",
      bgColor:"bg-[#4C75A3]",
      img: OthersIcon,
    }
  };

  const {category} = useSelector(state=> state.transaction);

  return (
    <>
      {type == "icon" && (
        <div
          className={`w-12 h-12 rounded-full p-2.5 ${categoryImg[categoryName]?.bgColor}`}
        >
          <img
            src={categoryImg[categoryName]?.img}
            alt=""
            className="w-full h-full turn-white"
            style={{
              filter:
                "invert(1) brightness(1) drop-shadow(2px 2px 4px rgba(0,0,0,0.5))",
            }}
          />
        </div>
      )}
      {type == "card" && (
        <div className={`category ${category === '' || category === categoryName ? 'shadow-2xl' : 'unselected-options'} ${categoryImg[categoryName]?.bgColor}`} onClick={()=>handleCategory('category', categoryName)} >
          <div className={`w-12 h-12 category-img`}>
            <img
              src={categoryImg[categoryName]?.img}
              alt={categoryImg[categoryName]}
              className={`w-10 h-10 object-cover ${categoryName == 'travel' ? 'w-12 h-12': ''}`}
              style={{filter: "invert(1) brightness(2) drop-shadow(2px 2px 4px rgba(0,0,0,0.5))"}}
            />
          </div>
          <p className="category-title">{categoryName}</p>
        </div>
      )}
    </>
  );
};

export default CategoryIcon;
