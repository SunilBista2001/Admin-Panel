import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import AddMoneyModal from "./AddMoneyModal.js/AddMoneyModal";
import Transaction from "../../components/Transaction/Transaction";

function Wallet() {
  const [showAddMoneyModal, setShowAddMoneyModal] = useState(false);
  const walletTransactions = [
    {
      name: "Sunil Bista",
      type: "credit",
      amount: "50,000.00",
      date: "2023-04-10",
    },
    {
      name: "Gaurab Chand",
      type: "credit",
      amount: "7,000.00",
      date: "2023-04-09",
    },
    {
      name: "Sunil Bista",
      type: "debit",
      amount: "40,000.00",
      date: "2023-04-08",
    },
  ];

  const rewardTransactions = [
    { name: "Esewa", type: "reward", amount: "50.00", date: "2023-04-11" },
    { name: "Khalti", type: "reward", amount: "5000.00", date: "2023-05-11" },
    { name: "Fone Pay", type: "reward", amount: "150.00", date: "2023-06-11" },
  ];

  return (
    <div className="container mx-auto my-4">
      {showAddMoneyModal && (
        <AddMoneyModal closeModal={() => setShowAddMoneyModal(false)} />
      )}
      <div className="bg-white rounded-md shadow-md p-4 h-28 flex items-center">
        <div className="flex flex-col font-semibold gap-1 flex-1">
          My Balance
          <span className="text-3xl font-medium text-green-500">
            $ 50,000.00
          </span>
        </div>
        <button
          className="flex items-center text-white px-6 py-2 justify-center w-max rounded-lg"
          style={{ backgroundColor: "#F59F01" }}
          onClick={() => setShowAddMoneyModal(true)}
        >
          <AddIcon className="mr-2" />
          Add Money to Wallet
        </button>
      </div>
      <div className="w-full h-full flex justify-between my-8 gap-4">
        <div className="w-1/2">
          <Transaction
            title="Recent Tranasction"
            transactions={walletTransactions}
          />
        </div>
        <div className="w-1/2">
          <Transaction
            title="Reward Tranasction"
            transactions={rewardTransactions}
          />
        </div>
      </div>
    </div>
  );
}

export default Wallet;
