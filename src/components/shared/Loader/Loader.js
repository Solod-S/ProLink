import React from "react";
import { Blocks } from "react-loader-spinner";
import { LoaderBox } from "./Loader.styled";

const Loader = () => (
  <LoaderBox>
    <Blocks
      visible={true}
      height="80"
      width="80"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
    />
  </LoaderBox>
);

export default Loader;
