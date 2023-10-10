import { render, screen, waitFor, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { fireEvent } from "@testing-library/react";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { MemoryRouter } from "react-router-dom";
import { createMemoryHistory } from "history";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "../../redux/store";

import { ThemeProvider } from "styled-components";
import { theme } from "../../constants/theme";

import App from "../../components/App";

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

describe("HomePage => Home Component Tests", () => {
  it("Open/Close 'Create Post' modal window", async () => {
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

    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      // Find the "Start a post" button
      const startPostButton = screen.getByText("Start a post");
      // Simulating a click on a button
      userEvent.click(startPostButton);
    });

    // Checking that the modal window is enable
    await waitFor(() => {
      const modalTitle = screen.getByText("Create a post");
      expect(modalTitle).toBeInTheDocument();
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
      const modalContent = screen.queryByText("Create a post");
      expect(modalContent).toBeNull();
    });
  });

  it("Render check 'Create Post' modal window", async () => {
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

    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      // Find the "Start a post" button
      const startPostButton = screen.getByText("Start a post");
      // Simulating a click on a button
      userEvent.click(startPostButton);
    });

    // Checking that the modal window is enable
    await waitFor(() => {
      const modalTitle = screen.getByText("Create a post");
      expect(modalTitle).toBeInTheDocument();
    });

    await waitFor(() => {
      const userIcon = screen.getByAltText("my user icon");
      expect(userIcon).toBeInTheDocument();
    });

    await waitFor(() => {
      const displayedName = screen.getByText("Sergey");
      expect(displayedName).toBeInTheDocument();
    });

    await waitFor(() => {
      // eslint-disable-next-line
      const textEditor = document.getElementsByClassName("quill ");
      expect(textEditor.length).toBeGreaterThan(0);
    });

    await waitFor(() => {
      const shareIcon = screen.getByAltText("share icon");
      expect(shareIcon).toBeInTheDocument();
    });

    await waitFor(() => {
      const shareVideoIcon = screen.getByAltText("share video icon");
      expect(shareVideoIcon).toBeInTheDocument();
    });

    await waitFor(() => {
      const closeIcon = screen.getByAltText("close icon");
      expect(closeIcon).toBeInTheDocument();
    });

    await waitFor(() => {
      const shareCommentIcon = screen.getByAltText("share comment icon");
      expect(shareCommentIcon).toBeInTheDocument();
    });

    await waitFor(() => {
      const postButton = screen.getByText("Post");
      expect(postButton).toBeInTheDocument();
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
      const modalContent = screen.queryByText("Create a post");
      expect(modalContent).toBeNull();
    });
  });

  it("Validate valid input in 'Create Post' modal window", async () => {
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

    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      // Find the "Start a post" button
      const startPostButton = screen.getByText("Start a post");
      // Simulating a click on a button
      userEvent.click(startPostButton);
    });

    // Checking that the modal window is enable
    await waitFor(() => {
      const modalTitle = screen.getByText("Create a post");
      expect(modalTitle).toBeInTheDocument();
    });

    await waitFor(async () => {
      // eslint-disable-next-line
      const quillTextContent = document.getElementsByClassName("quill ")[0].querySelector(".ql-editor").textContent;
      // We get the first element with the "quill" class => then we get the text inside the editor

      expect(quillTextContent).toBe("");
      // check that the input is empty
    });

    await waitFor(async () => {
      // Find the "send button" button
      const sendPostButton = screen.getByLabelText("submit button");
      // disabled test
      expect(sendPostButton).toBeDisabled();
    });

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      // eslint-disable-next-line
      const quillInstance = document.querySelector(".quill ");
      // eslint-disable-next-line
      quillInstance.querySelector(".ql-editor").innerHTML = "Test";
    });

    await waitFor(async () => {
      // Find the "send button" button
      const sendPostButton = screen.getByLabelText("submit button");
      // disabled test
      expect(sendPostButton).not.toBeDisabled();
    });

    await waitFor(async () => {
      // eslint-disable-next-line
      const quillTextContent = document.getElementsByClassName("quill ")[0].querySelector(".ql-editor").textContent;
      expect(quillTextContent).toBe("Test");
      // checking the input
    });

    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      // Find the "send button" button
      const sendPostButton = screen.getByLabelText("submit button");
      // Simulating a click on a button
      userEvent.click(sendPostButton);
    });

    // Check that the modal window is no longer visible in the document
    await waitFor(() => {
      const modalContent = screen.queryByText("Create a post");
      expect(modalContent).toBeNull();
    });
  });

  it("Validate invalid input in 'Create Post' modal window", async () => {
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

    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      // Find the "Start a post" button
      const startPostButton = screen.getByText("Start a post");
      // Simulating a click on a button
      userEvent.click(startPostButton);
    });

    // Checking that the modal window is enable
    await waitFor(() => {
      const modalTitle = screen.getByText("Create a post");
      expect(modalTitle).toBeInTheDocument();
    });

    await waitFor(async () => {
      // eslint-disable-next-line
      const quillTextContent = document.getElementsByClassName("quill ")[0].querySelector(".ql-editor").textContent;
      // We get the first element with the "quill" class => then we get the text inside the editor
      expect(quillTextContent).toBe("");
      // check that the input is empty
    });

    await waitFor(async () => {
      // Find the "send button" button
      const sendPostButton = screen.getByLabelText("submit button");
      // disabled test
      expect(sendPostButton).toBeDisabled();
    });

    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      // Find the "send button" button
      const sendPostButton = screen.getByLabelText("submit button");
      // Simulating a click on a button
      userEvent.click(sendPostButton);
    });

    // Check that the modal window is no longer visible in the document
    await waitFor(() => {
      const modalContent = screen.queryByText("Create a post");
      expect(modalContent).toBeInTheDocument();
    });
  });

  it("Render posts data in post list", async () => {
    const history = createMemoryHistory({ initialEntries: ["/home"] });

    // Mock the user's state in the store
    const loggedInState = {
      auth: {
        user: USER,
        isloggedIn: true,
        isRefreshing: false,
      },
      myPosts: {
        data: [
          {
            _id: "post1",
            description: "<p>Text 1</p>",
            likes: [],
            comments: [],
            mediaFiles: [
              {
                _id: "media1",
                type: "img",
                location: "posts",
                url: "https://res.cloudinary.com/dbclstp7c/image/upload/v1696878135/prolink/dylcpslizqxwdstlpqfm.jpg",
                providerPublicId: "prolink/dylcpslizqxwdstlpqfm",
                owner: {},
                createdAt: "2023-10-09T19:02:17.416Z",
                updatedAt: "2023-10-09T19:02:17.416Z",
              },
            ],
            owner: {
              _id: "6522726ca19ad950c3d37bf6",
              name: "Sergey",
              surname: "Nikolaevich",
              email: "solik098@gmail.com",
              phone: "",
              site: "",
              posts: [],
              other1: "",
              other2: "",
              other3: "",
              subscription: [],
              favorite: [],
              about: "",
              experience: [],
              education: [],
              languages: [],
              headLine: "",
              frame: "Original",
            },
            postedAtHuman: "0 seconds ago",
            createdAt: "2023-10-09T19:02:15.411Z",
            updatedAt: "2023-10-09T19:02:15.411Z",
          },
          {
            _id: "post2",
            description: "<p>Text 2</p>",
            likes: [],
            comments: [],
            mediaFiles: [
              {
                _id: "media1",
                type: "img",
                location: "posts",
                url: "https://res.cloudinary.com/dbclstp7c/image/upload/v1696878135/prolink/dylcpslizqxwdstlpqfm.jpg",
                providerPublicId: "prolink/dylcpslizqxwdstlpqfm",
                owner: {},
                createdAt: "2023-10-09T19:02:17.416Z",
                updatedAt: "2023-10-09T19:02:17.416Z",
              },
            ],
            owner: {
              _id: "6522726ca19ad950c3d37bf6",
              name: "Sergey",
              surname: "Nikolaevich",
              email: "solik098@gmail.com",
              phone: "",
              site: "",
              posts: [],
              other1: "",
              other2: "",
              other3: "",
              subscription: [],
              favorite: [],
              about: "",
              experience: [],
              education: [],
              languages: [],
              headLine: "",
              frame: "Original",
            },
            postedAtHuman: "0 seconds ago",
            createdAt: "2023-10-09T19:02:15.411Z",
            updatedAt: "2023-10-09T19:02:15.411Z",
          },
        ],
        isRefreshing: false,
      },
    };

    // Create a fake store with the desired state
    const testStore = configureStore({
      reducer: {
        auth: (state = loggedInState.auth) => state,
        myPosts: (state = loggedInState.myPosts) => state,
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

    // Checking that the shareBox is enabled
    await waitFor(() => {
      const shareBox = screen.getByTestId("share-box");
      expect(shareBox).toBeInTheDocument();
    });

    // Checking rendering one post by searching for unique text from the provided post
    await waitFor(() => {
      const postText = screen.getByText("Text 1");
      expect(postText).toBeInTheDocument();
    });
    // Checking rendering posts list

    await waitFor(() => {
      const posts = screen.getAllByTestId("post");
      expect(posts.length).toBeGreaterThan(0); // Check that at least one post is rendered
    });
  });

  it("Render empty post list", async () => {
    const history = createMemoryHistory({ initialEntries: ["/home"] });

    // Mock the user's state in the store
    const loggedInState = {
      auth: {
        user: USER,
        isloggedIn: true,
        isRefreshing: false,
      },
      myPosts: {
        data: [],
        isRefreshing: false,
      },
    };

    // Create a fake store with the desired state
    const testStore = configureStore({
      reducer: {
        auth: (state = loggedInState.auth) => state,
        myPosts: (state = loggedInState.myPosts) => state,
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

    // Checking that the shareBox is enabled
    await waitFor(() => {
      const shareBox = screen.getByTestId("share-box");
      expect(shareBox).toBeInTheDocument();
    });

    // Checking that no posts are rendered
    await waitFor(() => {
      const posts = screen.queryAllByTestId("post");
      expect(posts).toHaveLength(0); // Check that no posts are rendered
    });
  });
});
