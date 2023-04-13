import React, { useState } from "react";
import DeleteModal from "../../../components/DeleteModal/DeleteModal";
import { set } from "react-hook-form";

let dummyData = [
  {
    id: 0,
    title: "Privacy Policy",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde modi commodi nemo reiciendis assumenda ratione, culpa neque dolores accusamus, in sint consectetur magni?",
    slug: "privacy-policy",
  },
];

function PageTableList() {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [pageId, setPageId] = useState(null);

  const deletePage = (id) => {
    setShowDeleteModal(true);
    setPageId(id);
  };

  return (
    <div className="card-body">
      {showDeleteModal && (
        <DeleteModal
          title="Page"
          id={pageId}
          closeModal={() => setShowDeleteModal(false)}
        />
      )}
      <table className="table table-responsive-md table-hover mb-0">
        <thead>
          <tr>
            <th>#</th>
            <th>Page Name</th>
            <th>Description</th>
            <th>Slug</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map((page, index) => (
            <tr key={index}>
              <td>{page.id + 1}</td>
              <td>{page.title}</td>
              <td>{page.description.slice(0, 25) + "..."}</td>
              <td>{page.slug}</td>
              <td className="actions-hover actions-fade">
                <button>
                  <i className="fas fa-pencil-alt"></i>
                </button>
                <button
                  className="ml-3 delete-row"
                  onClick={() => deletePage(page.id)}
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

export default PageTableList;
