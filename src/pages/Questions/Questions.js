import { useState } from "react";
import AddQuestionModal from "./AddQuestionModal";
import Button from "../../components/Button/Button";
import QuestionList from "../../components/QuestionList/QuestionList";

const questions = [
  {
    question: "Do you like React?",
    greenOption: "Yes",
    redOption: "No",
  },
  {
    question: "Is Tailwind CSS easy to use?",
    greenOption: "Yes",
    redOption: "No",
  },
  {
    question: "Do you enjoy coding?",
    greenOption: "Yes",
    redOption: "No",
  },
];
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
      <div className="my-4">
        <QuestionList question={questions} />
      </div>
    </div>
  );
}

export default Questions;
