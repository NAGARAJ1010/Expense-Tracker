import CategoryIcon from "./CategoryIcon";
import incomeCash from '../assets/inc-cash.svg';
import expenseCash from '../assets/exp-cash.svg';
const ExpenseCard = ({
  price = "123.45",
  detail = "Breakfast in hotel",
  date = "15 May 25",
  type = 'income',
}) => {
  return (
    <div className="expense-card-container flex justify-between py-4 px-6 bg-white border border-gray-100 rounded-xl">
      <div className="flex gap-4 items-center">
        <CategoryIcon categoryName="food" type="icon" />
        <div>
          <p className="price-value text-xl">{price}</p>
          <p className="expense-detail text-sm">{detail}</p>
        </div>
      </div>
      <div className="flex flex-col items-end justify-between">
        <p className="text-sm">{date}</p>
        <div className="w-6 h-6">
          <img src={`${type === 'income' ? incomeCash : expenseCash}`} alt="" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default ExpenseCard;
