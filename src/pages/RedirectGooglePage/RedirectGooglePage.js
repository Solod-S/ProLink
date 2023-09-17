import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

function RedirectGooglePage() {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    // Получаем значения параметров из URL
    const accesstoken = searchParams.get("accesstoken");
    const refreshtoken = searchParams.get("refreshtoken");
    const sessionid = searchParams.get("sessionid");

    console.log("accesstoken:", accesstoken);
    console.log("refreshtoken:", refreshtoken);
    console.log("sessionid:", sessionid);

    // Вы можете выполнять здесь любую логику, используя эти значения
  }, [searchParams]);

  return (
    <>
      <p>!!!!!!</p>
    </>
  );
}

export default RedirectGooglePage;
