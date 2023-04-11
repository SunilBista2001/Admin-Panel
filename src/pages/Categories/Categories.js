import React, { useState } from "react";
import Button from "../../components/Button/Button";
import AddCategoriesModal from "./AddCategoriesModal";
import CategoriesTable from "./categoriesTable/CategoriesTable";

function Categories() {
  const [showAddCategoryModal, setShowAddCategoryModal] = useState(false);
  return (
    <div className="w-full py-2">
      {showAddCategoryModal && (
        <AddCategoriesModal closeModal={() => setShowAddCategoryModal(false)} />
      )}
      <div className="flex w-full justify-end">
        <button onClick={() => setShowAddCategoryModal(true)}>
          <Button title="Add Categories" />
        </button>
      </div>
      <div className="my-4">
        <CategoriesTable />
      </div>
    </div>
  );
}

export default Categories;
