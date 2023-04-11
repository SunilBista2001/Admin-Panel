import React, { useState } from "react";
import Modal from "../../../components/Modal/Modal";
import WalletPng from "../../../assets/img/wallet.png";

function AddMoneyModal({ closeModal }) {
  const [addMoney, setAddMoney] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(addMoney);
    closeModal();
  };
  return (
    <Modal title="Add Money to Wallet">
      <div className="w-full flex justify-center mb-4">
        <img src={WalletPng} alt="" className="w-48 h-w-48 object-contain" />
      </div>
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <input
            type="text"
            placeholder="Enter Amount to be Added in Wallet"
            className="form-control"
            onChange={(e) => setAddMoney(e.target.value)}
          />
        </div>
        <footer className="card-footer mt-4">
          <div className="row">
            <div className="flex justify-end gap-3">
              <button className="btn btn-primary modal-confirm" type="submit">
                Continue
              </button>
              <button
                className="btn btn-default modal-dismiss"
                onClick={() => closeModal()}
              >
                Cancel
              </button>
            </div>
          </div>
        </footer>
      </form>
    </Modal>
  );
}

export default AddMoneyModal;
