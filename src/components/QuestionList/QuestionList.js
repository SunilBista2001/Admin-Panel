import StarsIcon from "@mui/icons-material/Stars";

function QuestionList({ questions }) {
  return (
    <div className="container mx-auto my-4">
      <h1 className="text-3xl font-bold mb-4">List of Questions</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {questions?.data?.map((question) => (
          <li key={question.id} className="bg-white rounded-lg shadow-md p-6">
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
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuestionList;
