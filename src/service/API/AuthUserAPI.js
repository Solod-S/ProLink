import { socialNetworkAxiosInstance, socialNetworkToken } from "../axios/axios";

export async function postUser(credentials) {
  const { data } = await socialNetworkAxiosInstance.post(`/auth/register`, credentials);
  socialNetworkToken.set(data.token);
  return data;
}

export async function restoreUser(email) {
  const { data } = await socialNetworkAxiosInstance.post(`/auth/password-reset`, { email: email });
  return data;
}

export async function logIn(credentials) {
  const { mail, password } = credentials;
  const { data } = await socialNetworkAxiosInstance.post(`/auth/login`, { email: mail, password });
  socialNetworkToken.set(data.accessToken);
  localStorage.setItem("accessToken", data.data.accessToken);
  localStorage.setItem("refreshToken", data.data.refreshToken);
  localStorage.setItem("sessionId", data.data.sessionId);

  return data;
}

export async function googleLogIn(credentials) {
  const { accesstoken, refreshtoken, sessionid } = credentials;
  socialNetworkToken.set(accesstoken);
  localStorage.setItem("accessToken", accesstoken);
  localStorage.setItem("refreshToken", refreshtoken);
  localStorage.setItem("sessionId", sessionid);

  const { data } = await socialNetworkAxiosInstance.get(`/auth/current`);
  return data;
}

export async function logOut() {
  await socialNetworkAxiosInstance.get(`/auth/logout`);
  localStorage.removeItem("refreshToken");
  localStorage.removeItem("sessionId");
  localStorage.removeItem("accessToken");
  socialNetworkToken.unset();
}

export async function fetchCurrentUser(accessToken) {
  socialNetworkToken.set(accessToken);
  const { data } = await socialNetworkAxiosInstance.get(`/auth/current`);
  return data;
}
