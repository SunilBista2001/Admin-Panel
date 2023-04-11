import AxiosService from "../AxiosService";

export const login = async (data) => {
  const response = await AxiosService.post("/users/login", data);
  return response.data;
};
