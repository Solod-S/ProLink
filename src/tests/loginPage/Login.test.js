import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "../../redux/store";
import { render, screen, waitFor, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "../../constants/theme";
import { Login } from "../../components";

describe("LoginPage => Login Component Tests", () => {
  test("Rendering elements test", () => {
    render(
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </ThemeProvider>
    );

    expect(screen.getByAltText("logo")).toBeInTheDocument();
    // Logo check
    expect(screen.getByText(/joint now/i)).toBeInTheDocument();
    // Joint now check
    expect(screen.getByText("Sign in")).toBeInTheDocument();
    // Sign in check
    expect(screen.getByText("Social login")).toBeInTheDocument();
    // Social login check
    expect(screen.getByText("Welcome to your professional network.")).toBeInTheDocument();
    // General title check
    expect(screen.getByAltText("hero")).toBeInTheDocument();
    // BG image check
    const signInWithButtons = screen.getAllByText(/^Sign in with/i);
    expect(signInWithButtons.length).toBe(4);
    // Social login btns check
  });

  test("External links test", () => {
    render(
      <ThemeProvider theme={theme}>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </ThemeProvider>
    );

    const googleSignInLink = screen.getByText("Sign in with Google");
    const facebookSignInLink = screen.getByText("Sign in with FaceBook");
    const linkedInSignInLink = screen.getByText("Sign in with LinkedIn");
    const githubSignInLink = screen.getByText("Sign in with Github");

    expect(googleSignInLink).toHaveAttribute("href", "https://linkedinclone-backend.onrender.com/auth/google");
    expect(facebookSignInLink).toHaveAttribute("href", "https://linkedinclone-backend.onrender.com/auth/facebook");
    expect(linkedInSignInLink).toHaveAttribute("href", "https://linkedinclone-backend.onrender.com/auth/linkedin");
    expect(githubSignInLink).toHaveAttribute("href", "https://linkedinclone-backend.onrender.com/auth/github");
    // social btns link check

    userEvent.click(googleSignInLink);
    userEvent.click(facebookSignInLink);
    userEvent.click(linkedInSignInLink);
    userEvent.click(githubSignInLink);
    // clicks check
  });

  test("Open/Close 'Joint now' modal", async () => {
    render(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <BrowserRouter>
              <Login />
            </BrowserRouter>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    );

    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      // Find the "Joint now" button
      const jointNowButton = screen.getByText("Joint now");
      // Simulating a click on a button
      userEvent.click(jointNowButton);
    });

    // Checking that the modal window is displayed
    await waitFor(() => {
      const modalTitle = screen.getByText("Make the most of your professional life");
      expect(modalTitle).toBeInTheDocument();
    });

    await waitFor(() => {
      const modalNameLabel = screen.getByText("Name");
      expect(modalNameLabel).toBeInTheDocument();
    });

    await waitFor(() => {
      const modalMailLabel = screen.getByText("Mail");
      expect(modalMailLabel).toBeInTheDocument();
    });

    await waitFor(() => {
      const modalPasswordLabel = screen.getByText("Password");
      expect(modalPasswordLabel).toBeInTheDocument();
    });

    await waitFor(() => {
      const modalNameInput = screen.getByTestId("name");
      expect(modalNameInput).toBeInTheDocument();
    });

    await waitFor(() => {
      const modalMailInput = screen.getByTestId("mail");
      expect(modalMailInput).toBeInTheDocument();
    });

    await waitFor(() => {
      const modalPasswordInput = screen.getByTestId("password");
      expect(modalPasswordInput).toBeInTheDocument();
    });

    await waitFor(() => {
      const modalPolicyInput = screen.getByTestId("policy");
      expect(modalPolicyInput).toBeInTheDocument();
    });

    await waitFor(() => {
      const sendButton = screen.getByText("Send");
      expect(sendButton).toBeInTheDocument();
    });

    await waitFor(() => {
      const closeButton = screen.getByLabelText("close window");
      expect(closeButton).toBeInTheDocument();
    });

    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      // Find the "close" button
      const closeButton = screen.getByLabelText("close window");
      // Simulating a click on a button
      userEvent.click(closeButton);
    });

    // Check that the modal window is no longer visible in the document
    await waitFor(() => {
      const modalContent = screen.queryByText("Make the most of your professional life");
      expect(modalContent).toBeNull();
    });
  });

  test("Open/Close 'Sign In' modal", async () => {
    render(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <BrowserRouter>
              <Login />
            </BrowserRouter>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    );

    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      // Find the "Sign in" button
      const signInButton = screen.getByText("Sign in");
      // Simulating a click on a button
      userEvent.click(signInButton);
    });

    // Checking that the modal window is displayed
    await waitFor(() => {
      const modalContent = screen.getByText("Sign in to Pro Link your account");
      expect(modalContent).toBeInTheDocument();
    });

    await waitFor(() => {
      const modalMailLabel = screen.getByText("Mail");
      expect(modalMailLabel).toBeInTheDocument();
    });

    await waitFor(() => {
      const modalPasswordLabel = screen.getByText("Password");
      expect(modalPasswordLabel).toBeInTheDocument();
    });

    await waitFor(() => {
      const modalMailInput = screen.getByTestId("mail");
      expect(modalMailInput).toBeInTheDocument();
    });

    await waitFor(() => {
      const modalPasswordInput = screen.getByTestId("password");
      expect(modalPasswordInput).toBeInTheDocument();
    });

    await waitFor(() => {
      const sendButton = screen.getByText("Login");
      expect(sendButton).toBeInTheDocument();
    });

    await waitFor(() => {
      const closeButton = screen.getByLabelText("close window");
      expect(closeButton).toBeInTheDocument();
    });

    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      // Find the "close" button
      const closeButton = screen.getByLabelText("close window");
      // Simulating a click on a button
      userEvent.click(closeButton);
    });

    // Check that the modal window is no longer visible in the document
    await waitFor(() => {
      const modalContent = screen.queryByText("Sign in to Pro Link your account");
      expect(modalContent).toBeNull();
    });
  });

  test("Open/Close 'Restore account' modal", async () => {
    render(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <BrowserRouter>
              <Login />
            </BrowserRouter>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    );

    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      // Find the "Sign in" button
      const signInButton = screen.getByText("Sign in");
      // Simulating a click on a button
      userEvent.click(signInButton);
    });

    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      // Find the "Forgot password?" button
      const switchToRestoreMode = screen.getByText("Forgot password?");
      // Simulating a click on a button
      userEvent.click(switchToRestoreMode);
    });

    // Checking that the modal window is displayed
    await waitFor(() => {
      const modalContent = screen.getByText("Restore your Prolink account");
      expect(modalContent).toBeInTheDocument();
    });

    await waitFor(() => {
      const modalMailLabel = screen.getByText("Mail");
      expect(modalMailLabel).toBeInTheDocument();
    });

    await waitFor(() => {
      const modalMailInput = screen.getByTestId("mail");
      expect(modalMailInput).toBeInTheDocument();
    });

    await waitFor(() => {
      const closeButton = screen.getByLabelText("close window");
      expect(closeButton).toBeInTheDocument();
    });

    await waitFor(() => {
      const closeButton = screen.getByLabelText("close window");
      expect(closeButton).toBeInTheDocument();
    });

    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      // Find the "back" button
      const switchToSignInMode = screen.getByText("back");
      // Simulating a click on a button
      userEvent.click(switchToSignInMode);
    });

    // Check that the modal window is no longer visible in the document
    await waitFor(() => {
      const modalContent = screen.queryByText("Restore your Prolink account");
      expect(modalContent).toBeNull();
    });

    // Check that the modal window return back to sign in mode
    await waitFor(() => {
      const modalContent = screen.getByText("Sign in to Pro Link your account");
      expect(modalContent).toBeInTheDocument();
    });
  });
});
