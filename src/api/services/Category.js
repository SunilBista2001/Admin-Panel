import AxiosService from "../AxiosService";

export const addCategory = async (data) => {
  const response = await AxiosService.post("/category/store");
  return response.data;
};

export const updateCategory = async (data) => {
  const response = await AxiosService.put(`/category/update/${data.id}`, data);
  return response.data;
};

export const deleteCategory = async ({ id }) => {
  const response = await AxiosService.delete(`/category/delete/${id}`, id);
  return response.data;
};
