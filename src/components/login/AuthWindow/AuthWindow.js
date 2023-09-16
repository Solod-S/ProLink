import { useState } from "react";
import { LoginForm, RestoreForm } from "../../index";

function AuthWindow({ onClose }) {
  const [option, setOption] = useState("login");

  return (
    <>
      {option === "login" ? (
        <LoginForm onClose={onClose} setOption={setOption} />
      ) : (
        <RestoreForm onClose={onClose} setOption={setOption} />
      )}
    </>
  );
}

export default AuthWindow;
