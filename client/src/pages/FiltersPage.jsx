import { useEffect, useState } from "react";
import { getTransactionById, getTransactions } from "../api/transactionService";
import { setTransactionField } from "../redux/transactionSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ExpenseCard from "../components/ExpenseCard";
import notFound from "../assets/search-not-found.png";
import {
  faArrowLeft,
  faFilter,
  faMagnifyingGlass,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { fields } from "../config/fields.config";

const FiltersPage = () => {
  const [transactions, setTransactions] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    fetchTransactions();
  }, []);
  const fetchTransactions = async () => {
    try {
      const result = await getTransactions();
      setTransactions(result?.data.transactions);
      setFilteredData(result?.data.transactions);
    } catch (err) {
      console.error("Error fetching transactions:", err);
    }
  };

  const viewTransaction = async (transactionId) => {
    try {
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

  const handleTransaction = (field, value) => {
    dispatch(setTransactionField({ field, value }));
  };

  const handleSearch = (e) => {
    const inputVal = e?.target?.value || "";
    setSearchInput(inputVal);
    if (!inputVal) {
      setFilteredData(transactions);
      return;
    }

    const matchedData = transactions.filter((data) =>
      fields.some((field) =>
        String(data[field] ?? "")
          .toLowerCase()
          .includes(inputVal.toLowerCase())
      )
    );

    setFilteredData(matchedData);
  };

  return (
    <div className="transactions-container overflow-y-scroll relative px-4 pt-8 pb-20 flex flex-col gap-5 lg:gap-8 max-w-[80rem] m-auto h-full">
      <div
        className="transaction__heading flex gap-2 items-center"
        onClick={() => navigate("/dashboard")}
      >
        <div className="w-6 h-6">
          <FontAwesomeIcon icon={faArrowLeft} className="w-full h-full" />
        </div>
        <p className="capitalize text-2xl font-medium select-none">
          transactions
        </p>
      </div>

      <div className="relative flex gap-2 items-center">
        <input
          type="text"
          placeholder="Search Here..."
          className="search-input-container px-10 py-2 outline-none w-full border-1 shadow-sm border-gray-100 rounded-xl"
          onChange={(e) => handleSearch(e)}
          value={searchInput}
        />
        <div className="absolute left-4 top-2.5">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="gray-icon" />
        </div>
        {searchInput && (
          <div
            className="absolute w-5 h-5 right-18 top-3"
            onClick={() => handleSearch()}
          >
            <FontAwesomeIcon icon={faXmark} className="gray-icon" />
          </div>
        )}
        <div className="bg-(--input-text-color) rounded-xl w-14 h-11 p-3">
          <FontAwesomeIcon icon={faFilter} className="turn-white" />
        </div>
      </div>

      <div className="flex flex-col gap-2 w-full mt-4">
        {filteredData?.length > 0 &&
          filteredData.map((data, index) => {
            return (
              <ExpenseCard
                key={index}
                data={data}
                viewTransaction={viewTransaction}
              />
            );
          })}
        {!filteredData?.length && (
          <div className="not-found-container h-full">
            <p className="text-center mb-4.5">
              No matching transactions found.
            </p>
            <div className="w-24 h-24 -rotate-90 mx-auto">
              <img
                src={notFound}
                alt="search not found"
                className="gray-icon"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FiltersPage;
