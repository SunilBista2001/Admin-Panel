import { useState } from "react";
import AddQuestionModal from "./AddQuestionModal";
import Button from "../../components/Button/Button";
import QuestionList from "../../components/QuestionList/QuestionList";
import { useQuery } from "react-query";
import { getQuestion } from "../../api/services/Question";
import Loader from "../../components/Loader/Loader";
import EditQuestionModal from "./EditQuestionModal/EditQuestionModal";
import { useSelector } from "react-redux";

function Questions() {
  //
  const question = useSelector((state) => state.question.question);
  const [showAddQuestionModal, setShowQuestionModal] = useState(false);
  const [showEditQuestionModal, setShowEditQuestionModal] = useState(false);

  const { data, isLoading } = useQuery("fetch-question", getQuestion);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="container mx-auto my-4">
      {showAddQuestionModal && (
        <AddQuestionModal closeModal={() => setShowQuestionModal(false)} />
      )}
      {showEditQuestionModal && (
        <EditQuestionModal
          closeModal={() => setShowEditQuestionModal(false)}
          question={question}
        />
      )}

      <div className="flex w-full justify-end">
        <button onClick={() => setShowQuestionModal(true)}>
          <Button title="Add Questions" />
        </button>
      </div>

      <QuestionList
        questions={data}
        setShowEditQuestionModal={setShowEditQuestionModal}
      />
    </div>
  );
}

export default Questions;
