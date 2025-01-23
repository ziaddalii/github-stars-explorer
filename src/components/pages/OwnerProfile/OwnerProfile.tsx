import { Avatar, Box, Button, Divider, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GroupIcon from "@mui/icons-material/Group";
import { formatNumber } from "./../../../utils/common";
import { EmailRounded, GitHub } from "@mui/icons-material";
import { Link } from "react-router-dom";
import XIcon from "@mui/icons-material/X";
import { Owner } from "../../../types/OwnerProfile";

interface Props {
  owner: Owner;
}
function OwnerProfileSection({ owner }: Props) {
  return (
    <Box
      p={2}
      bgcolor={"white"}
      borderRadius={"1rem"}
      display={"flex"}
      alignItems={"center"}
      flexDirection={"column"}
    >
      {/* Image */}
      <Avatar
        sx={{ width: 250, height: 250 }}
        src={owner.avatar_url}
        alt={owner.login}
      />
      {/* Name */}
      <Typography
        sx={{
          color: "black",
          textDecoration: "none",
          fontSize: "2rem",
        }}
        variant="h2"
        fontWeight={"bold"}
      >
        {owner.name}
      </Typography>
      {/* Login Name */}
      <Typography
        color="textSecondary"
        sx={{
          textDecoration: "none",
          fontSize: "1.5rem",
        }}
        variant="h2"
      >
        {owner.login}
      </Typography>
      {/* Bio */}
      {owner.bio && (
        <Typography
          textAlign={"center"}
          sx={{
            textDecoration: "none",
          }}
        >
          {owner.bio}
        </Typography>
      )}
      <Divider sx={{ width: "100%", my: "1rem" }} />
      <Box display={"flex"} gap={"4px"} alignItems="center" flexWrap={"wrap"}>
        {/* Followers */}
        <Box display={"flex"} gap={"4px"} alignItems="center">
          <GroupIcon />
          <Typography fontWeight={"bold"} color="textSecondary">
            {formatNumber(owner.followers)}
          </Typography>
          <Typography color="textSecondary">followers</Typography>
        </Box>
        {/* Following */}
        <span>-</span>
        <Box display={"flex"} gap={"4px"} alignItems="center">
          <Typography fontWeight={"bold"} color="textSecondary">
            {formatNumber(owner.following)}
          </Typography>
          <Typography color="textSecondary">following</Typography>
        </Box>
      </Box>
      {/* Location */}
      {owner.location && (
        <Box display={"flex"} gap={"4px"} alignItems="center">
          <LocationOnIcon fontSize="small" />
          <Typography color="textSecondary">{owner.location}</Typography>
        </Box>
      )}
      {/* Email */}
      {owner.email && (
        <Box display={"flex"} gap={"4px"} alignItems="center">
          <EmailRounded fontSize="small" />
          <Typography color="textSecondary">{owner.email}</Typography>
        </Box>
      )}
      {/* Twitte / X */}
      {owner.twitter_username && (
        <Box display={"flex"} gap={"4px"} alignItems="center">
          <XIcon fontSize="small" />
          <Typography color="textSecondary">
            @{owner.twitter_username}
          </Typography>
        </Box>
      )}
      {/* Button */}
      <Button
        target="_blank"
        startIcon={<GitHub />}
        sx={{ background: "black", mt: 2 }}
        fullWidth
        variant="contained"
        component={Link}
        to={owner.html_url}
      >
        View on GitHub
      </Button>
    </Box>
  );
}

export default OwnerProfileSection;
