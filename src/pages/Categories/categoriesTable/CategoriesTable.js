import React, { useState } from "react";
import ProductImage from "../../../assets/img/newmew.jpg";
import DeleteModal from "../../../components/DeleteModal/DeleteModal";

let dummyData = [
  {
    id: 0,
    title: "new mew",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde modi commodi nemo reiciendis assumenda ratione, culpa neque dolores accusamus, in sint consectetur magni?",
    order: 1,
    photo: ProductImage,
  },
];

function Table() {
  const [productData, setProductData] = useState(dummyData);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [categoryId, setCategoryId] = useState(null);

  const deleteCategory = (id) => {
    setShowDeleteModal(true);
    setCategoryId(id);
    console.log("category id=>", id);
  };

  return (
    <div className="card-body">
      {showDeleteModal && (
        <DeleteModal
          title="Categories"
          id={categoryId}
          closeModal={() => setShowDeleteModal(false)}
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
          {productData.map((product, index) => (
            <tr key={index}>
              <td>{product.id + 1}</td>
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
                <button>
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
