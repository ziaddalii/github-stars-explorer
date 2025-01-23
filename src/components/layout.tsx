import { Outlet } from "react-router-dom";
import { Box, Typography } from "@mui/material";

function Layout() {
  return (
    <Box>
      <Box display="flex" justifyContent="center" pt={2}>
        <Typography
          fontWeight={"bold"}
          textAlign={"center"}
          variant={"h5"}
          sx={{ textDecoration: "none", color: "black" }}
          component={"a"}
          href={"/"}
        >
          <span style={{ color: "#176cee" }}>G</span>
          <span style={{ color: "#dc4935" }}>i</span>
          <span style={{ color: "#ffb802" }}>t</span>
          <span style={{ color: "#1c70ee" }}>H</span>
          <span style={{ color: "#029d5a" }}>u</span>
          <span style={{ color: "#d6412e" }}>b </span>
          Stars Explorer
        </Typography>
      </Box>
      <>
        <Outlet />
      </>
    </Box>
  );
}

export default Layout;
