import React from "react";
import { useLocation } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "../../redux/store";
import { render, screen, waitFor, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "../../constants/theme";
import { createMemoryHistory } from "history";
import UserRoutes from "../../components/UserRoutes";
import App from "../../components/App";
import { configureStore, createSlice } from "@reduxjs/toolkit";

const USER = {
  _id: "6515113799685684d8c43d5f",
  name: "Sergey",
  surname: "Nikolaevich",
  email: "solik098@gmail.com",
  favorite: [],
  posts: [],
  subscription: [],
  phone: "",
  site: "",
  other1: "",
  other2: "",
  other3: "",
  about: "",
  experience: {},
  education: {},
  languages: {},
  headLine: "",
  frame: "Original",
};

describe("Routing tests", () => {
  test("Renders Login page when logged out", async () => {
    const history = createMemoryHistory({ initialEntries: ["/login"] });

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      render(
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <ThemeProvider theme={theme}>
              <MemoryRouter history={history}>
                <App />
              </MemoryRouter>
            </ThemeProvider>
          </PersistGate>
        </Provider>
      );
    });

    expect(screen.getByLabelText("login-page")).toBeInTheDocument();
    // Check login page
  });

  test("Renders invalid path when logged out (invalid path redirect check)", async () => {
    const history = createMemoryHistory({ initialEntries: ["/asfsaf/asfas"] });

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      render(
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <ThemeProvider theme={theme}>
              <MemoryRouter history={history}>
                <App />
              </MemoryRouter>
            </ThemeProvider>
          </PersistGate>
        </Provider>
      );
    });

    expect(screen.getByLabelText("login-page")).toBeInTheDocument();
    // Check login page
  });

  it("Renders Login Page when logged in (Home page redirect check)", async () => {
    // Mock the user's state in the store
    const loggedInState = {
      auth: {
        user: USER,
        isloggedIn: true,
        isRefreshing: false,
      },
    };

    // Create a fake store with the desired state
    const testStore = configureStore({
      reducer: {
        auth: (state = loggedInState.auth) => state,
      },
    });

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      render(
        <Provider store={testStore}>
          <PersistGate loading={null} persistor={persistor}>
            <ThemeProvider theme={theme}>
              <MemoryRouter>
                <App />
              </MemoryRouter>
            </ThemeProvider>
          </PersistGate>
        </Provider>
      );
    });

    await waitFor(async () => {
      expect(screen.getByLabelText("home-page")).toBeInTheDocument();
      // Check that we are going to the home page
    });
  });

  it("Renders Home Page when logged in", async () => {
    const history = createMemoryHistory({ initialEntries: ["/home"] });

    // Mock the user's state in the store
    const loggedInState = {
      auth: {
        user: USER,
        isloggedIn: true,
        isRefreshing: false,
      },
    };

    // Create a fake store with the desired state
    const testStore = configureStore({
      reducer: {
        auth: (state = loggedInState.auth) => state,
      },
    });

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      render(
        <Provider store={testStore}>
          <PersistGate loading={null} persistor={persistor}>
            <ThemeProvider theme={theme}>
              <MemoryRouter history={history}>
                <App />
              </MemoryRouter>
            </ThemeProvider>
          </PersistGate>
        </Provider>
      );
    });

    await waitFor(async () => {
      expect(screen.getByLabelText("home-page")).toBeInTheDocument();
      // Check home page
    });
  });

  it("Renders invalid path when logged in (invalid path redirect check)", async () => {
    const history = createMemoryHistory({ initialEntries: ["/asfasf/asfasf"] });

    // Mock the user's state in the store
    const loggedInState = {
      auth: {
        user: USER,
        isloggedIn: true,
        isRefreshing: false,
      },
    };

    // Create a fake store with the desired state
    const testStore = configureStore({
      reducer: {
        auth: (state = loggedInState.auth) => state,
      },
    });

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      render(
        <Provider store={testStore}>
          <PersistGate loading={null} persistor={persistor}>
            <ThemeProvider theme={theme}>
              <MemoryRouter history={history}>
                <App />
              </MemoryRouter>
            </ThemeProvider>
          </PersistGate>
        </Provider>
      );
    });

    await waitFor(async () => {
      expect(screen.getByLabelText("home-page")).toBeInTheDocument();
      // Check home page
    });
  });

  it("Renders Home Page when logged out (Login page redirect check)", async () => {
    const history = createMemoryHistory({ initialEntries: ["/home"] });

    // Mock the user's state in the store
    const loggedInState = {
      auth: {
        user: {},
        isloggedIn: false,
        isRefreshing: false,
      },
    };

    // Create a fake store with the desired state
    const testStore = configureStore({
      reducer: {
        auth: (state = loggedInState.auth) => state,
      },
    });

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      render(
        <Provider store={testStore}>
          <PersistGate loading={null} persistor={persistor}>
            <ThemeProvider theme={theme}>
              <MemoryRouter history={history}>
                <App />
              </MemoryRouter>
            </ThemeProvider>
          </PersistGate>
        </Provider>
      );
    });

    await waitFor(async () => {
      expect(screen.getByLabelText("login-page")).toBeInTheDocument();
      // Check that we are going to the login page
    });
  });

  it("Login and redirect to Home Page", async () => {
    const authSlice = createSlice({
      name: "auth",
      initialState: {
        user: {},
        isloggedIn: false,
        isRefreshing: false,
      },
      reducers: {
        loginUser: (state, action) => {
          state.user = action.payload;
          state.isloggedIn = true;
        },
      },
    });

    const history = createMemoryHistory({ initialEntries: ["/home"] });

    // Create a fake storage with the desired state
    const testStore = configureStore({
      reducer: {
        auth: authSlice.reducer,
      },
    });

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      render(
        <Provider store={testStore}>
          <PersistGate loading={null} persistor={persistor}>
            <ThemeProvider theme={theme}>
              <MemoryRouter history={history}>
                <App />
              </MemoryRouter>
            </ThemeProvider>
          </PersistGate>
        </Provider>
      );
    });

    await waitFor(async () => {
      expect(screen.getByLabelText("login-page")).toBeInTheDocument();
      // Сheck that the user is not authorized and we see Login page
    });

    // Simulate user login by calling the loginUser action
    await waitFor(async () => {
      testStore.dispatch(authSlice.actions.loginUser(USER));
    });

    await waitFor(async () => {
      expect(screen.getByLabelText("home-page")).toBeInTheDocument();
      // Verify that the user is logged in and can see Home page
    });
  });

  it("LogOut and redirect to Login Page", async () => {
    const authSlice = createSlice({
      name: "auth",
      initialState: {
        user: USER,
        isloggedIn: true,
        isRefreshing: false,
      },
      reducers: {
        logOut: (state, _) => {
          state.user = {};
          state.isloggedIn = false;
        },
      },
    });

    const history = createMemoryHistory({ initialEntries: ["/home"] });

    // Create a fake storage with the desired state
    const testStore = configureStore({
      reducer: {
        auth: authSlice.reducer,
      },
    });

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      render(
        <Provider store={testStore}>
          <PersistGate loading={null} persistor={persistor}>
            <ThemeProvider theme={theme}>
              <MemoryRouter history={history}>
                <App />
              </MemoryRouter>
            </ThemeProvider>
          </PersistGate>
        </Provider>
      );
    });

    await waitFor(async () => {
      expect(screen.getByLabelText("home-page")).toBeInTheDocument();
      // Сheck that the user is authorized and we see Home page
    });

    // Simulate user login by calling the logOut action
    await waitFor(async () => {
      testStore.dispatch(authSlice.actions.logOut());
    });

    await waitFor(async () => {
      expect(screen.getByLabelText("login-page")).toBeInTheDocument();
      // Verify that the user is logOut in and can see Login page
    });
  });
});
