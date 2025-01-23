import { Box, Typography } from "@mui/material";
import SearchOffIcon from '@mui/icons-material/SearchOff';
function NoData() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection:"column",
      }}
    >
      <SearchOffIcon color="primary" sx={{fontSize:"300px", mt:"2rem", opacity:"40%"}}/>
      <Typography mt={1} fontSize={"20px"} fontWeight={"bold"} component={"p"} color="textSecondary">No results found!</Typography>
      <Typography textAlign={"center"} mt={1} component={"p"} color="textSecondary">We couldn't find what are you looking for</Typography>
    </Box>
  );
}

export default NoData;
