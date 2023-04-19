import StarsIcon from "@mui/icons-material/Stars";
import { useDispatch } from "react-redux";
import { setQuestion } from "../../redux/slices/QuestionSlice";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteModal from "../DeleteModal/DeleteModal";
import { useState } from "react";
import DeleteQuestionModal from "../../pages/Questions/DeleteQuestionModal/DeleteQuestionModal";

function QuestionList({ questions, setShowEditQuestionModal, refetch }) {
  //
  const dispatch = useDispatch();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [questionId, setQuestionId] = useState(null);

  const editQuestion = (data) => {
    dispatch(setQuestion(data));
    setShowEditQuestionModal(true);
  };

  const deleteQuestion = (id) => {
    setQuestionId(id);
    setShowDeleteModal(true);
  };

  return (
    <div className="container mx-auto my-4">
      {showDeleteModal && (
        <DeleteQuestionModal
          title="Question"
          id={questionId}
          refetch={refetch}
          closeModal={() => setShowDeleteModal(false)}
        />
      )}
      <h1 className="text-3xl font-bold mb-4">List of Questions</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
        {questions?.data?.map((question) => (
          <li
            key={question.id}
            className="bg-white rounded-lg shadow-md p-6 relative"
          >
            <h2 className="text-lg font-medium">{question.title}</h2>
            <div className="flex flex-col gap-2 mt-2">
              <span className=" text-green-500">
                Green Option: {question.green_option}
              </span>
              <p className="text-red-500">Red Option: {question.red_option}</p>
              <h4 className="flex ">Question Added: {question.date}</h4>
              <div className="w-full flex gap-1 justify-end items-center">
                <StarsIcon style={{ width: "18px", height: "18px" }} />
                <span>Reward Points: {question.reward_points}</span>
              </div>
            </div>
            <div className="absolute top-10 right-10 flex items-center">
              <button className=" " onClick={() => editQuestion(question)}>
                Edit
              </button>
              <DeleteIcon
                className="text-xs cursor-pointer hover:text-red-500"
                onClick={() => deleteQuestion(question.id)}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuestionList;
