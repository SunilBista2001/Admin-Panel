import React from "react";
import Transaction from "../../components/Transaction/Transaction";

function WalletTransaction() {
  const transactions = [
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

  return (
    <div className="container mx-auto my-4">
      <Transaction transactions={transactions} title="Recent Tranasction" />
    </div>
  );
}

export default WalletTransaction;
