import { Outlet } from "react-router-dom";
import { Suspense } from "react";

import AppBar from "../AppBar/AppBar";
import { Box } from "../Box/Box";
// import Loader

export default function SharedLayout() {
  return (
    <>
      <AppBar />
      <Suspense
      // fallback={<Loader />}
      >
        <Box
        // minHeight="60vh"
        >
          <Outlet />
        </Box>
      </Suspense>
    </>
  );
}
