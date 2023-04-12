import AxiosService from "../AxiosService";

export const getPage = async () => {
  const response = await AxiosService.get("/page/index");
  return response.data;
};

export const addPage = async (data) => {
  const response = await AxiosService.post("/page/store", data);
  return response.data;
};

export const updatePage = async (data) => {
  const response = await AxiosService.put(`/page/update/${data.id}`, data);
  return response.data;
};

export const deletePage = async ({ id }) => {
  const response = await AxiosService.delete(`/page/delete/${id}`, id);
  return response.data;
};
