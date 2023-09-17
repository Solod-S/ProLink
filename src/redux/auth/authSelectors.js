export const getIsLoggedIn = (state) => state.auth.isloggedIn;
export const getIsRefreshing = (state) => state.auth.isRefreshing;
export const getUserEmail = (state) => state.auth.user.email;
export const getUserData = (state) => state.auth.user;
export const getAccessToken = (state) => state.auth.accessToken;
export const getRefreshToken = (state) => state.auth.refreshToken;
export const getSessionId = (state) => state.auth.sessionId;
