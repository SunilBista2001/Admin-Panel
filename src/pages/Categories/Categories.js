import React, { useState } from "react";
import Button from "../../components/Button/Button";
import AddCategoriesModal from "./AddCategoriesModal";
import CategoriesTable from "./categoriesTable/CategoriesTable";
import { getCategory } from "../../api/services/Category";
import { useQuery } from "react-query";
import Loader from "../../components/Loader/Loader";

function Categories() {
  const [showAddCategoryModal, setShowAddCategoryModal] = useState(false);
  const { isLoading, data, refetch } = useQuery("fetch-category", getCategory);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="container mx-auto my-4">
      {showAddCategoryModal && (
        <AddCategoriesModal
          closeModal={() => setShowAddCategoryModal(false)}
          refetch={refetch}
        />
      )}
      <div className="flex w-full justify-end">
        <button onClick={() => setShowAddCategoryModal(true)}>
          <Button title="Add Categories" />
        </button>
      </div>

      <div className="my-4">
        <CategoriesTable data={data} refetch={refetch} />
      </div>
    </div>
  );
}

export default Categories;
