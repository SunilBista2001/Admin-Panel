import { useState } from "react";
import EditCategoryModal from "../EditCategoryModal/EditCategoryModal";
import DeleteCategoryModal from "../deleteCategory/DeleteCategoryModal";

function Table({ data, refetch }) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [categoryId, setCategoryId] = useState(null);
  const [editCategory, setEditCategory] = useState({});

  const deleteCategory = (id) => {
    setShowDeleteModal(true);
    setCategoryId(id);
  };

  const editCategories = (data) => {
    setEditCategory(data);
    setShowEditModal(true);
  };

  return (
    <div className="card-body">
      {showDeleteModal && (
        <DeleteCategoryModal
          refetch={refetch}
          title="Category"
          id={categoryId}
          closeModal={() => setShowDeleteModal(false)}
        />
      )}

      {showEditModal && (
        <EditCategoryModal
          refetch={refetch}
          category={editCategory}
          closeModal={() => setShowEditModal(false)}
        />
      )}

      <table className="table table-responsive-md table-hover mb-0">
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Product Image</th>
            <th>Description</th>
            <th>Order</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.data?.map((product, index) => (
            <tr key={index}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>
                <img
                  src={product.photo}
                  alt=""
                  className="w-8 h-8 ml-8 rounded-full object-cover"
                />
              </td>
              <td>{product.description.slice(0, 25) + "..."}</td>
              <td>{product.order}</td>
              <td className="actions-hover actions-fade">
                <button onClick={() => editCategories(product)}>
                  <i className="fas fa-pencil-alt"></i>
                </button>
                <button
                  className="ml-3 delete-row"
                  onClick={() => deleteCategory(product.id)}
                >
                  <i className="far fa-trash-alt"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
