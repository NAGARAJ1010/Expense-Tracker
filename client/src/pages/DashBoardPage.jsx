import ExpenseCard from "../components/ExpenseCard";
import StatCard from "../components/StatCard";
import Menu from "../components/Menu";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { getTransactionById, getTransactions } from "../api/transactionService";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const DashBoardPage = () => {
  const [transactions, setTransactions] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(async ()=>{
    const result  = await getTransactions();
    setTransactions(result.data);
    console.log(result.data);
  },[]);

  const viewTransaction = async (transactionId)=>{
    try {
      const selectedData = await getTransactionById(transactionId);
      if(selectedData){
        dispatch(setTransactions({
        transactionType : selectedData.transactionType,
        date: selectedData.data,
        time : selectedData.time,
        amount : selectedData.time,
        notes : selectedData.notes,
        tags : selectedData.tags
        }));
        navigate(`/transaction/${transactionId}`);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="dashboard flex flex-col gap-4 items-center relative h-full max-w-[80rem] mx-auto">
      <div className="w-full text-start bg-(--primary-color) p-4 text-white">
        <p className="">Good Morning,</p>
        <p className="text-2xl capitalize">Nagaraj Ganesan</p>
      </div>
      <div className="flex w-full md:py-4 md:px-8 gap-4">
        <div className="flex-1 menu-md-screen">
          <Menu />
        </div>
        <div className="flex-1 px-4 md:flex-2">
          <div className="stats-container">
            <div className="grid grid-cols-2 gap-2 justify-center w-full">
              <StatCard />
              <StatCard title="income" />
            </div>
            <div className="text-sm flex gap-1 py-1 px-4 w-fit bg-(--gray-color) rounded-4xl mx-auto mt-4">
              <p className="capitalize">balance :</p>
              <p>₹ income - spending</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 w-full mt-4">
            <p className="text-end">Show All
              <FontAwesomeIcon icon={faArrowRight} className='w-5 ml-2'/>
            </p>
            {
              transactions && transactions.map((data, index)=>{
                <ExpenseCard key={index} data={data} viewTransaction={viewTransaction}/>
              })
            }
          </div>
        </div>
      </div>

      <div className="sticky w-full bottom-0 md:hidden">
        <Menu />
      </div>
    </div>
  );
};

export default DashBoardPage;
