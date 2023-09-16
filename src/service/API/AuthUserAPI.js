import { axiosInstance } from "../axios/axios";

const token = {
  set(token) {
    axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axiosInstance.defaults.headers.common.Authorization = "";
  },
};

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response.status === 401) {
      const refreshToken = localStorage.getItem("refreshToken");
      const sessionId = localStorage.getItem("sessionId");
      //   аксес токен не валидный и мы подготавливаем из локал стораджа рефреш токен для запроса на рефреш
      try {
        const { data } = await axiosInstance.post("/auth/refresh", { refreshToken, sessionId });
        token.set(data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
        localStorage.setItem("sessionId", data.sessionId);
        // error.config.headers.common.authorization = `Bearer ${data.accessToken}`;
        // если нет инстанса
        return axiosInstance(error.config);
        //   делаем повторный запрос (ерор конфиг это настройки этого не удавшегося запроса, урл, боди и т д)
      } catch (error) {
        return Promise.reject(error);
        //   ловим 403 ошибку (рефреш токен просрочен)
      }
    }
    return Promise.reject(error);
    // ловим все остальные ошибки (400 бед риквес и т д)
  }
);

export async function postUser(credentials) {
  const { data } = await axiosInstance.post(`/auth/register`, credentials);
  token.set(data.token);
  return data;
}

export async function restoreUser(email) {
  const { data } = await axiosInstance.post(`/auth/password-reset`, { email: email });
  return data;
}

export async function logIn(credentials) {
  const { mail, password } = credentials;
  const { data } = await axiosInstance.post(`/auth/login`, { email: mail, password });
  token.set(data.accessToken);
  localStorage.setItem("refreshToken", data.data.refreshToken);
  localStorage.setItem("sessionId", data.data.sessionId);
  return data;
}

export async function logOut() {
  await axiosInstance.get(`/auth/logout`);
  localStorage.removeItem("refreshToken");
  localStorage.removeItem("sessionId");
  token.unset();
}

export async function fetchCurrentUser(persisterToken) {
  token.set(persisterToken);
  const { data } = await axiosInstance.get(`/auth/current`);
  return data;
}
