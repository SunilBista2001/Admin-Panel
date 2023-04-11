function Transaction({ transactions, title }) {
  return (
    <div className="bg-white rounded-md shadow-md p-4">
      <h2 className="text-lg font-medium mb-4">{title}</h2>
      <ul className="divide-y divide-gray-200">
        {transactions.map((transaction, index) => (
          <li key={index} className="py-2">
            <div className="flex items-center justify-between">
              <span className="font-medium">{transaction.name}</span>
              <span
                className={`text-sm font-medium ${
                  ["credit", "reward"].includes(transaction.type)
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {["credit", "reward"].includes(transaction.type) ? "+" : "-"}
                {transaction.amount}
              </span>
            </div>
            <span className="text-gray-400 text-sm">{transaction.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Transaction;
