import AxiosService from "../AxiosService";

export const getQuestion = async () => {
  const response = await AxiosService.get("/question/index");
  return response.data;
};

export const addQuestion = async (data) => {
  const response = await AxiosService.post("/question/store", data);
  return response.data;
};
