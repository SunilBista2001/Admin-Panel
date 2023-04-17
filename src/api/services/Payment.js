import AxiosService from "../AxiosService";

export const getPaymentMethod = async () => {
  const response = await AxiosService.get("/payment-mode/index");
  return response.data;
};

export const addPaymentOption = async (data) => {
  const response = await AxiosService.post("/payment-mode/store", data);
  return response.data;
};

export const updatePaymentOption = async (data) => {
  const response = await AxiosService.put(
    `/payment-mode/update/${data.id}`,
    data
  );
  return response.data;
};

export const deletePaymentOption = async ({ id }) => {
  const response = await AxiosService.delete(`/payment-mode/delete/${id}`, id);
  return response.data;
};
