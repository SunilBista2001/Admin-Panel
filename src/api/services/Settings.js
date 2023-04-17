import AxiosService from "../AxiosService";

export const getUserSettings = async () => {
  const response = await AxiosService.get("/setting/index");
  return response.data;
};

export const updateUserSettings = async (data) => {
  const response = await AxiosService.put("/setting/update", data);
  return response.data;
};
