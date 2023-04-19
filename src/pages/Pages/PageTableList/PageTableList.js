import React, { useState } from "react";
import EditPageModal from "../EditPageModal/EditPageModal";
import DeletePageModal from "../deletePageModal/DeletePageModal";

function PageTableList({ pageData, refetch }) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [pageId, setPageId] = useState(null);
  const [editPage, setEditPage] = useState(null);

  const deletePage = (id) => {
    setShowDeleteModal(true);
    setPageId(id);
  };

  const editPages = (data) => {
    setEditPage(data);
    setShowEditModal(true);
  };

  return (
    <div className="card-body">
      {showDeleteModal && (
        <DeletePageModal
          title="Page"
          id={pageId}
          refetch={refetch}
          closeModal={() => setShowDeleteModal(false)}
        />
      )}

      {showEditModal && (
        <EditPageModal
          page={editPage}
          refetch={refetch}
          closeModal={() => setShowEditModal(false)}
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
          {pageData?.data?.map((page, index) => (
            <tr key={index}>
              <td>{page.id + 1}</td>
              <td>{page.title}</td>
              <td>{page.description.slice(0, 25) + "..."}</td>
              <td>{page.slug}</td>
              <td className="actions-hover actions-fade">
                <button onClick={() => editPages(page)}>
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
