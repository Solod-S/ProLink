import { Route, Routes, Navigate } from "react-router-dom";

import { LoginPage } from "./pages";

function App() {
  return (
    <Routes>
      <Route index element={<LoginPage />} />
    </Routes>
  );
}
export default App;
