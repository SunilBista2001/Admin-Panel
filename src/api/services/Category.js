import AxiosService from "../AxiosService";

export const getCategory = async () => {
  const response = await AxiosService.get("/category/index/");
  return response.data;
};

export const addCategory = async (data) => {
  const response = await AxiosService.post("/category/store", data);
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

export const uploadImage = async (image) => {
  let data = new FormData();
  data.append("myfile", image);
  try {
    const response = await AxiosService.post("/upload", data);
    return response.data.path;
  } catch (error) {
    console.log(error);
  }
};
