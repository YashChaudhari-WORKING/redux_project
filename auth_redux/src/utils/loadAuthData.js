export const loadAuthData = () => {
  try {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");
    const userData = localStorage.getItem("userData");
    if (accessToken && refreshToken && userData) {
      return {
        accessToken,
        refreshToken,
        user: JSON.stringify(userData),
        isAuthenticated: true,
        loading: false,
        error: null,
      };
    }
  } catch (e) {
    console.log("error while loading the data", e);
  }
  return {
    accessToken: null,
    refreshToken: null,
    user: null,
    loading: false,
    error: null,
    isAuthenticated: false,
  };
};
