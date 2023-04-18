import AxiosService from "../AxiosService";

export const getQuestion = async () => {
  const response = await AxiosService.get("/question/index");
  return response.data;
};

export const addQuestion = async (data) => {
  const response = await AxiosService.post("/question/store", data);
  return response.data;
};

export const updateQuestion = async (data) => {
  const response = await AxiosService.put(`/question/update/${data.id}`, data);
  return response.data;
};

export const deleteQuestion = async ({ id }) => {
  const response = await AxiosService.delete(`/question/delete/${id}`, id);
  return response.data;
};
