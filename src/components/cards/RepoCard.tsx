import { Avatar, Box, Chip, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import { formatNumber } from "../../utils/common";
import { Repo } from "../../types/SearchRepo";

interface Props {
  repo: Repo;
}
function RepoCard({ repo }: Props) {
  return (
    <Box
      sx={{ background: "#f6f8fa" }}
      component={"article"}
      bgcolor={"#eeeeee"}
      p={2}
      borderRadius={1}
    >
      <Box sx={{ mb: 2, display: "flex", alignItems: "center", gap: 1 }}>
        <Avatar
          component={Link}
          to={`/profile/${repo.owner.login}`}
          slotProps={{
            img: {
              loading: "lazy",
            },
          }}
          src={repo.owner.avatar_url}
          alt={repo.owner.login}
        />
        <Box display={"flex"} flexDirection={"column"}>
          <Typography
            style={{
              overflow: "hidden",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: "1",
            }}
            component={Link}
            sx={{
              color: "black",
              textDecoration: "none",
              fontSize: "1.25rem",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
            to={`/repository/${repo.owner.login}/${repo.name}`}
            variant="h2"
            fontWeight={"bold"}
          >
            {repo.name}
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
      {repo.description && (
        <Typography
          sx={{ mb: 1 }}
          style={{
            overflow: "hidden",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: "2",
          }}
        >
          {repo.description}
        </Typography>
      )}
      {repo.topics.length > 0 && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
            mb: 1,
            flexWrap: "wrap",
          }}
        >
          {repo.topics.slice(0, 5).map((topic, index) => (
            <Chip key={index} label={topic} />
          ))}
        </Box>
      )}
      <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
        <StarIcon sx={{ color: "#fcd53f" }} />
        <Typography fontWeight={"bold"} fontSize={"14px"}>
          {formatNumber(repo.stargazers_count)}
        </Typography>
      </Box>
    </Box>
  );
}

export default RepoCard;
