import { Route, Routes } from "react-router-dom";
import { SharedLayout, AppBar } from "./components";

import { LoginPage, HomePage } from "./pages";

function App() {
  return (
    <Routes>
      <Route index element={<LoginPage />} />
      <Route path="/" element={<SharedLayout />}>
        <Route path="/home" element={<HomePage />} />
      </Route>
    </Routes>
  );
}
export default App;
