import StarsIcon from "@mui/icons-material/Stars";

const questions = [
  {
    id: 1,
    title: "React Js is a Library?",
    greenOption: "Yes",
    redOption: ["no", "maybe"],
    rewardPoints: 10,
    date: "2058-05-01",
  },
  {
    id: 2,
    title: "Angular Js is a Library?",
    greenOption: "No",
    redOption: ["yes", "maybe"],
    rewardPoints: 10,
    date: "2058-05-01",
  },
  {
    id: 2,
    title: "Who is Prime Minister of Nepal",
    greenOption: "Prachandya",
    redOption: ["kp olya", "sher bahdur deubya"],
    rewardPoints: 10,
    date: "2058-05-01",
  },
];

function QuestionList() {
  return (
    <div className="container mx-auto my-4">
      <h1 className="text-3xl font-bold mb-4">List of Questions</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {questions.map((question) => (
          <li key={question.id} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-medium">{question.title}</h2>
            <div className="flex flex-col gap-2 mt-2">
              <span className=" text-green-500">
                Green Option: {question.greenOption}
              </span>
              <p className="text-red-500">
                Red Option:{" "}
                {question.redOption[0] + ", " + question.redOption[1]}
              </p>
              <h4 className="flex ">Question Added: {question.date}</h4>
              <div className="w-full flex gap-1 justify-end items-center">
                <StarsIcon style={{ width: "18px", height: "18px" }} />
                <span>Reward Points: {question.rewardPoints}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuestionList;
