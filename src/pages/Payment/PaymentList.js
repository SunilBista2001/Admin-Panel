import React, { useState } from "react";
import KhaltiLogo from "../../assets/img/khalti_logo.jpg";
import EsewaLogo from "../../assets/img/esewa_logo.webp";
import { useDispatch } from "react-redux";
import { setPayment } from "../../redux/slices/PaymentSlice";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteModal from "../../components/DeleteModal/DeleteModal";
import DeletePaymentModal from "./deletePaymentModal/DeletePaymentModal";

function PaymentList({ payments, setEditPaymentModal }) {
  const dispatch = useDispatch();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [paymentId, setPaymentId] = useState(null);

  const editPayment = (data) => {
    dispatch(setPayment(data));
    setEditPaymentModal(true);
  };

  const deletePayment = (id) => {
    setPaymentId(id);
    setShowDeleteModal(true);
  };

  return (
    <div className="container mx-auto my-4">
      {showDeleteModal && (
        <DeletePaymentModal
          title="Payment Option"
          id={paymentId}
          closeModal={() => setShowDeleteModal(false)}
        />
      )}
      <h1 className="text-3xl font-bold mb-4">List of Payment Options</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {payments?.data?.map((payment) => (
          <li
            key={payment.id}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center relative"
          >
            {["Esewa", "eSewa", "esewa", "E-Sewa", "e-Sewa", "ESEWA"].includes(
              payment.title
            ) && (
              <img
                src={EsewaLogo}
                alt=""
                className="w-52 h-52 object-contain"
              />
            )}
            {["khalti", "Khalti", "KHALTI"].includes(payment.title) && (
              <img
                src={KhaltiLogo}
                alt="esewa"
                className="w-52 h-52 object-contain"
              />
            )}
            <h2 className="text-lg font-medium text-center">{payment.title}</h2>
            <div className="absolute top-10 right-10 flex items-center">
              <button className=" " onClick={() => editPayment(payment)}>
                Edit
              </button>
              <DeleteIcon
                className="text-xs cursor-pointer hover:text-red-500"
                onClick={() => deletePayment(payment.id)}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PaymentList;
