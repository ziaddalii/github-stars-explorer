import { Box, Typography } from '@mui/material'
import AnnouncementIcon from '@mui/icons-material/Announcement';
function SomethingWentWrong() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection:"column"
      }}
    >
      <AnnouncementIcon color='primary' sx={{fontSize:"300px", mt:"2rem", opacity:"40%"}}/>

      <Typography mt={1} fontSize={"20px"} fontWeight={"bold"} component={"p"} color="textSecondary">Something went wrong!</Typography>
      <Typography mt={1} component={"p"} color="textSecondary">Maybe try again later</Typography>
    </Box>  )
}

export default SomethingWentWrong