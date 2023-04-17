import AxiosService from "../AxiosService";

export const getProfile = async () => {
  const response = await AxiosService.get("/profile");
  return response.data;
};

export const login = async (data) => {
  const response = await AxiosService.post("/users/login", data);
  return response.data;
};

export const userProfile = async () => {
  const response = await AxiosService.get("/profile");
  return response.data;
};
