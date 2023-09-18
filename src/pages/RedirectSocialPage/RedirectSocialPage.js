import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { googleLogIn } from "../../redux/auth/authOperation";

import { Loader } from "../../components";

function RedirectSocialPage() {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const accesstoken = searchParams.get("accesstoken");
    const refreshtoken = searchParams.get("refreshtoken");
    const sessionid = searchParams.get("sessionid");
    if (accesstoken && refreshtoken && sessionid) {
      dispatch(googleLogIn({ accesstoken, refreshtoken, sessionid }));
    } else {
      navigate("/login");
    }
  }, [dispatch, navigate, searchParams]);

  return (
    <>
      <Loader />
    </>
  );
}

export default RedirectSocialPage;
