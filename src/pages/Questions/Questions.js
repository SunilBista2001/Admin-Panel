import { useState } from "react";
import AddQuestionModal from "./AddQuestionModal";
import Button from "../../components/Button/Button";
import QuestionList from "../../components/QuestionList/QuestionList";

function Questions() {
  const [showAddQuestionModal, setShowQuestionModal] = useState(false);

  return (
    <div className="container mx-auto my-4">
      {showAddQuestionModal && (
        <AddQuestionModal closeModal={() => setShowQuestionModal(false)} />
      )}

      <div className="flex w-full justify-end">
        <button onClick={() => setShowQuestionModal(true)}>
          <Button title="Add Questions" />
        </button>
      </div>

      <QuestionList />
    </div>
  );
}

export default Questions;
