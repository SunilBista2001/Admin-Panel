import React, { useState } from "react";
import Button from "../../components/Button/Button";
import AddPagesModal from "./AddPagesModal";
import PageTableList from "./PageTableList/PageTableList";
import { useQuery } from "react-query";
import { getPage } from "../../api/services/Page";
import Loader from "../../components/Loader/Loader";

function Pages() {
  const [showAddPagesModal, setShowAddPagesModal] = useState(false);

  const { isLoading, data } = useQuery("fetch-page", getPage);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="container mx-auto my-4">
      {showAddPagesModal && (
        <AddPagesModal closeModal={() => setShowAddPagesModal(false)} />
      )}
      <div className="flex w-full justify-end">
        <button onClick={() => setShowAddPagesModal(true)}>
          <Button title="Add Pages" />
        </button>
      </div>
      <div className="my-4">
        <PageTableList pageData={data} />
      </div>
    </div>
  );
}

export default Pages;
