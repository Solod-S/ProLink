import { axiosInstance, instanceToken } from "../axios/axios";

export async function postUser(credentials) {
  const { data } = await axiosInstance.post(`/auth/register`, credentials);
  instanceToken.set(data.token);
  return data;
}

export async function restoreUser(email) {
  const { data } = await axiosInstance.post(`/auth/password-reset`, { email: email });
  return data;
}

export async function logIn(credentials) {
  const { mail, password } = credentials;
  const { data } = await axiosInstance.post(`/auth/login`, { email: mail, password });
  instanceToken.set(data.accessToken);
  localStorage.setItem("accessToken", data.data.accessToken);
  localStorage.setItem("refreshToken", data.data.refreshToken);
  localStorage.setItem("sessionId", data.data.sessionId);

  return data;
}

export async function logOut() {
  await axiosInstance.get(`/auth/logout`);
  localStorage.removeItem("refreshToken");
  localStorage.removeItem("sessionId");
  localStorage.removeItem("accessToken");
  instanceToken.unset();
}

export async function fetchCurrentUser(accessToken) {
  instanceToken.set(accessToken);
  const { data } = await axiosInstance.get(`/auth/current`);
  return data;
}
