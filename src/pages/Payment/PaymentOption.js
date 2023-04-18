import React, { useState } from "react";
import AddPaymentModal from "./AddPaymentModal/AddPaymentModal";
import Loader from "../../components/Loader/Loader";
import Button from "../../components/Button/Button";
import { useQuery } from "react-query";
import { getPaymentMethod } from "../../api/services/Payment";
import PaymentList from "./PaymentList";
import { useSelector } from "react-redux";
import EditPaymentModal from "./EditPaymentModal/EditPaymentModal";

function PaymentOption() {
  const payment = useSelector((state) => state.payment.payment);
  const [showAddPaymentModal, setShowAddPaymentModal] = useState(false);
  const [editPaymentModal, setEditPaymentModal] = useState(false);

  const { data, isLoading, refetch } = useQuery(
    "fetch-payment",
    getPaymentMethod
  );

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="container mx-auto my-4">
      {showAddPaymentModal && (
        <AddPaymentModal
          refetch={refetch}
          closeModal={() => setShowAddPaymentModal(false)}
        />
      )}
      {editPaymentModal && (
        <EditPaymentModal
          refetch={refetch}
          closeModal={() => setEditPaymentModal(false)}
          payment={payment}
        />
      )}

      <div className="flex w-full justify-end">
        <button onClick={() => setShowAddPaymentModal(true)}>
          <Button title="Add Payment Method" />
        </button>
      </div>

      <PaymentList
        payments={data}
        setEditPaymentModal={setEditPaymentModal}
        refetch={refetch}
      />
    </div>
  );
}

export default PaymentOption;
