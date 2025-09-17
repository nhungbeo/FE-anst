const API_URL = (import.meta?.env?.VITE_API_URL ?? "http://localhost:3333").replace(/\/+$/, "");

const userApi = {
  signIn: (payload) => {
    const url = `${API_URL}/signin`;
    return axiosClient.post(url, payload);
  },

  getMe: async (payload) => {
    const url = `/me`;
    const response = await axiosClient.get(url, payload);
    return response.data;
  },
};

export default userApi;
