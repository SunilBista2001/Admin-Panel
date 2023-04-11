import { useState } from "react";
import AddQuestionModal from "./AddQuestionModal";
import Button from "../../components/Button/Button";

function Questions() {
  const [showAddQuestionModal, setShowQuestionModal] = useState(false);

  return (
    <div className="w-full py-2">
      {showAddQuestionModal && (
        <AddQuestionModal closeModal={() => setShowQuestionModal(false)} />
      )}
      <div className="flex w-full justify-end">
        <button onClick={() => setShowQuestionModal(true)}>
          <Button title="Add Questions" />
        </button>
      </div>
    </div>
  );
}

export default Questions;
