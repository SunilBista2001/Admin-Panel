import React from "react";
import Transaction from "../../components/Transaction/Transaction";

function RewardTransaction() {
  const transactions = [
    { name: "Esewa", type: "reward", amount: "50.00", date: "2023-04-11" },
    { name: "Khalti", type: "reward", amount: "5000.00", date: "2023-05-11" },
    { name: "Fone Pay", type: "reward", amount: "150.00", date: "2023-06-11" },
  ];
  return (
    <div className="container mx-auto my-4">
      <Transaction transactions={transactions} title="Reward Tranasction" />
    </div>
  );
}

export default RewardTransaction;
