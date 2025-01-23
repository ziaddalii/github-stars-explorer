import { Box, Typography } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
function ErrorPageNotFound() {
  return (
    <Box
      sx={{
        paddingTop:"2rem",
        minHeight: "300px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <ErrorOutlineIcon
        color="primary"
        sx={{ fontSize: "300px", opacity: "40%" }}
      />
      <Typography
        variant="h2"
        fontWeight={"bold"}
        component={"p"}
        color="textSecondary"
      >
        404
      </Typography>
      <Typography variant="h2" mt={1} component={"p"} color="textSecondary">
        Not found
      </Typography>
      {/* <Button variant="contained" component={Link} to="/">
        Back To Home
      </Button> */}
    </Box>
  );
}

export default ErrorPageNotFound;
