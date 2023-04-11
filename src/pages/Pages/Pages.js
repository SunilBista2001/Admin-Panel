import React, { useState } from "react";
import Button from "../../components/Button/Button";
import AddPagesModal from "./AddPagesModal";

function Pages() {
  const [showAddPagesModal, setShowAddPagesModal] = useState(false);

  return (
    <div className="w-full py-2">
      {showAddPagesModal && (
        <AddPagesModal closeModal={() => setShowAddPagesModal(false)} />
      )}
      <div className="flex w-full justify-end">
        <button onClick={() => setShowAddPagesModal(true)}>
          <Button title="Add Pages" />
        </button>
      </div>
    </div>
  );
}

export default Pages;
