import ExpenseCard from "../components/ExpenseCard";
import StatCard from "../components/StatCard";
import Menu from "../components/Menu";
import { faArrowRight, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import {
  deleteTransaction,
  getTransactionById,
  getTransactions,
} from "../api/transactionService";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setTransactionField } from "../redux/transactionSlice";

const DashBoardPage = () => {
  const [transactions, setTransactions] = useState([]);
  const [summary, setSummary] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    fetchTransactions();
  }, []);

  useEffect(() => {
    if (Array.isArray(transactions)) {
      const summary = calculateFinancialSummary(transactions);
      setSummary(summary);
    }
  }, [transactions]);

  const calculateFinancialSummary = (transactions = []) => {
    return transactions?.reduce(
      (summary, transaction) => {
        const amount = Number(transaction.amount) || 0;

        if (transaction.transactionType === "income") {
          summary.income += amount;
          summary.balance += amount;
        }

        if (transaction.transactionType === "expense") {
          summary.expense += amount;
          summary.balance -= amount;
        }

        return summary;
      },
      {
        income: 0,
        expense: 0,
        balance: 0,
      }
    );
  };

  const fetchTransactions = async () => {
    try {
      const result = await getTransactions();
      setTransactions(result?.data.transactions);
    } catch (err) {
      console.error("Error fetching transactions:", err);
    }
  };
  const handleTransaction = (field, value) => {
    dispatch(setTransactionField({ field, value }));
  };
  const viewTransaction = async (transactionId) => {
    try {
      const fields = [
        "transactionType",
        "category",
        "date",
        "time",
        "amount",
        "notes",
        "tags",
      ];
      const result = await getTransactionById(transactionId);
      const selectedData = result?.transaction;
      if (selectedData) {
        fields.forEach((field) => {
          handleTransaction(field, selectedData[field]);
        });
        navigate(`/transaction/${transactionId}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const removeTransaction = async (transactionId) => {
    try {
      await deleteTransaction(transactionId);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="dashboard flex flex-col gap-4 items-center relative h-full max-w-240 mx-auto">
      <div className="w-full text-start bg-(--primary-color) p-4 text-white">
        <p className="">Good Morning,</p>
        <p className="text-2xl capitalize">Nagaraj Ganesan</p>
      </div>
      <div className="flex w-full h-full md:py-4 md:px-8 gap-4">
        <div className="flex-1 menu-md-screen">
          <Menu />
        </div>
        <div className="flex-1 px-4 md:flex-2">
          <div className="stats-container">
            <div className="grid grid-cols-2 gap-2 justify-center w-full">
              <StatCard amount={summary?.expense} />
              <StatCard title="income" amount={summary?.income} />
            </div>
            <div className="text-sm flex gap-1 py-1 px-4 w-fit bg-(--gray-color) rounded-4xl mx-auto mt-4">
              <p className="capitalize">balance :</p>
              <p>₹{summary?.balance}</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 w-full mt-4">
            <p
              className="text-end"
              onClick={() => navigate("/filterTransactions")}
            >
              Show All
              <FontAwesomeIcon icon={faArrowRight} className="w-5 ml-2" />
            </p>
            {transactions.length > 0 &&
              transactions.map((data, index) => {
                return (
                  <ExpenseCard
                    key={index}
                    data={data}
                    viewTransaction={viewTransaction}
                    removeTransaction={removeTransaction}
                  />
                );
              })}
          </div>
        </div>
      </div>

      <div className="sticky w-full bottom-0 md:hidden">
        <Menu />
      </div>

      <div
        className={`hidden fixed bottom-4 left-5/12 md:left-[45%] lg:left-[46%] xl:left-[47.5%] z-10 w-18 h-18 bg-(--primary-color) rounded-full p-4 shadow-md shadow-gray-600`}
        onClick={() => navigate("/transaction")}
      >
        <FontAwesomeIcon icon={faPlus} className="turn-white" />
      </div>
    </div>
  );
};

export default DashBoardPage;
