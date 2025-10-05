import CategoryIcon from "./CategoryIcon";
import incomeCash from '../assets/inc-cash.svg';
import expenseCash from '../assets/exp-cash.svg';
import dayjs from "dayjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
const ExpenseCard = ({
  data,
  viewTransaction
}) => {
  const isoDate = data.date;
  const formattedDate = dayjs(isoDate).format('DD-MM-YYYY');
  return (
    <div className="expense-card-container flex justify-between py-4 px-6 bg-white border border-gray-100 rounded-xl cursor-pointer" onClick={()=>viewTransaction(data._id)}>
      <div className="flex gap-4 items-center">
        <CategoryIcon categoryName={data.category} type="icon" />
        <div>
          <p className="price-value text-xl flex items-center">
            <span className="flex w-4 h-4">
              <FontAwesomeIcon icon={faIndianRupeeSign}/>
            </span>
            {data.amount}
          </p>
          <p className="expense-detail text-sm">{data.notes}</p>
        </div>
      </div>
      <div className="flex flex-col items-end justify-between">
        <p className="text-sm">{formattedDate}</p>
        <div className="w-6 h-6">
          <img src={`${data.transactionType === 'income' ? incomeCash : expenseCash}`} alt="" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default ExpenseCard;