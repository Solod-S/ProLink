import { Route, Routes } from "react-router-dom";
import { SharedLayout } from ".";

import { LoginPage, HomePage } from "../pages";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<SharedLayout />}>
        <Route index path="/home" element={<HomePage />} />
      </Route>
    </Routes>
  );
}
export default App;
