import CategoryIcon from "./CategoryIcon";
import cash from '../assets/cash.svg';
const ExpenseCard = ({
  price = "123.45",
  detail = "Breakfast in hotel",
  date = "15 May 25",
}) => {
  return (
    <div className="flex justify-between py-4 px-6 border border-(--primary-color) bg-[#e1e3fd] text-[#1E1E1E] rounded-xl">
      <div className="flex gap-4 items-center">
        <CategoryIcon />
        <div>
          <p className="price-value text-xl">{price}</p>
          <p className="expense-detail text-sm">{detail}</p>
        </div>
      </div>
      <div className="flex flex-col items-end justify-between">
        <p className="text-sm">{date}</p>
        <div className="w-6 h-6">
          <img src={cash} alt="" className="w-full h-full turn-white" />
        </div>
      </div>
    </div>
  );
};

export default ExpenseCard;
