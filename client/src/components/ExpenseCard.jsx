import CategoryIcon from "./CategoryIcon";
import incomeCash from "../assets/inc-cash.svg";
import expenseCash from "../assets/exp-cash.svg";
import dayjs from "dayjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const ExpenseCard = ({ data, viewTransaction, removeTransaction }) => {
  const [showDelete, setShowDelete] = useState(false);
  const isoDate = data.date;
  const formattedDate = dayjs(isoDate).format("DD-MM-YYYY");
  return (
    <div
      className="expense-card-container relative flex justify-between py-4 px-6 bg-white border border-gray-100 rounded-xl cursor-pointer"
      onClick={() => viewTransaction(data._id)}
      onMouseEnter={() => setShowDelete(true)}
      onMouseLeave={() => setShowDelete(false)}
    >
      <div className="flex gap-4 items-center">
        <CategoryIcon categoryName={data.category} type="icon" />
        <div>
          <p className="price-value text-xl flex items-center">
            <span className="flex w-4 h-4">
              <FontAwesomeIcon icon={faIndianRupeeSign} />
            </span>
            {data.amount}
          </p>
          <p className="expense-detail text-sm">{data.notes}</p>
        </div>
      </div>
      <div className="flex flex-col items-end justify-between">
        <p className="text-sm">{formattedDate}</p>
        <div className="w-6 h-6">
          <img
            src={`${
              data.transactionType === "income" ? incomeCash : expenseCash
            }`}
            alt=""
            className="w-full h-full"
          />
        </div>
      </div>
      {showDelete && (
        <div
          className="absolute -right-1 -top-1 w-5 h-5 rounded-full bg-red-400 flex justify-center items-center p-0.5 transition-all ease-in-out duration-500"
          onClick={() => removeTransaction(data?._id)}
        >
          <FontAwesomeIcon icon={faXmark} className="turn-white" />
        </div>
      )}
    </div>
  );
};

export default ExpenseCard;
