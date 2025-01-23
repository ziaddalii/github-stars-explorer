import { Avatar, Box, Button } from "@mui/material";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import { formatNumber } from "./../../../utils/common";
import { RepoDetailsTypes } from "../../../types/RepoDetails";
import { GitHub } from "@mui/icons-material";

interface RepoHeaderProps {
  repo: RepoDetailsTypes;
}
function RepoHeader({ repo }: RepoHeaderProps) {
  return (
    <Box
      display={{ sm: "flex", xs: "block" }}
      alignItems={"center"}
      mb={2}
      justifyContent={"space-between"}
      width={"100%"}
    >
      {/* Header */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Avatar
          component={Link}
          to={`/profile/${repo.owner.login}`}
          slotProps={{
            img: {
              loading: "lazy",
            },
          }}
          sx={{ width: "80px", height: "80px" }}
          src={repo.owner.avatar_url}
          alt={repo.owner.login}
        />
        <Box display={"flex"} flexDirection={"column"}>
          <Typography
            sx={{
              color: "black",
              textDecoration: "none",
              fontSize: "1.75rem",
            }}
            variant="h2"
            fontWeight={"bold"}
          >
            {repo.name}
            <Button
              target="_blank"
              sx={{
                background: "black",
                minWidth: "0",
                p: 1,
                borderRadius: "50%",
                ml: "8px",
              }}
              variant="contained"
              component={Link}
              to={repo.svn_url}
            >
              <GitHub fontSize="small" />
            </Button>
          </Typography>
          <Typography
            sx={{
              color: "black",
              textDecoration: "none",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
            component={Link}
            to={`/profile/${repo.owner.login}`}
          >
            {repo.owner.login}
          </Typography>
        </Box>
      </Box>
      <Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
          }}
          marginTop={{ sm: "0px", xs: "8px" }}

        >
          <StarIcon fontSize="large" sx={{ color: "#fcd53f" }} />
          <Typography>Star</Typography>
          <Typography fontWeight={"bold"} fontSize={"14px"}>
            {formatNumber(repo.stargazers_count)}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default RepoHeader;
