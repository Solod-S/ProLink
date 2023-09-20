import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

import { Loader, RestorePassForm } from "../../components";

function PasswordRestorePage() {
  const [resetToken, setreseTtoken] = useState("");
  const [searchParams] = useSearchParams();

  const navigate = useNavigate();

  useEffect(() => {
    const resettoken = searchParams.get("resettoken");
    if (resettoken) {
      setreseTtoken(resettoken);
    } else {
      navigate("/login");
    }
    return () => {
      setreseTtoken("");
    };
  }, [navigate, searchParams, resetToken]);

  return <>{!resetToken ? <Loader /> : <RestorePassForm resetToken={resetToken} />}</>;
}

export default PasswordRestorePage;
