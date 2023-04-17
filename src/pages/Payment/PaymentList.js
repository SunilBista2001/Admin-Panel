import React from "react";
import KhaltiLogo from "../../assets/img/khalti_logo.jpg";
import EsewaLogo from "../../assets/img/esewa_logo.webp";
import { useDispatch } from "react-redux";
import { setPayment } from "../../redux/slices/PaymentSlice";

function PaymentList({ payments, setEditPaymentModal }) {
  const dispatch = useDispatch();

  const editPayment = (data) => {
    dispatch(setPayment(data));
    setEditPaymentModal(true);
  };

  return (
    <div className="container mx-auto my-4">
      <h1 className="text-3xl font-bold mb-4">List of Payment Options</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {payments?.data?.map((payment) => (
          <li
            key={payment.id}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center relative"
          >
            {payment.title === "Esewa" && (
              <img
                src={EsewaLogo}
                alt=""
                className="w-52 h-52 object-contain"
              />
            )}
            {payment.title === "khalti" && (
              <img
                src={KhaltiLogo}
                alt="esewa"
                className="w-52 h-52 object-contain"
              />
            )}
            <h2 className="text-lg font-medium text-center">{payment.title}</h2>
            <div>
              <button
                className="absolute top-10 right-10 "
                onClick={() => editPayment(payment)}
              >
                Edit
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PaymentList;
