import { GitHub } from "@mui/icons-material";
import { Box, Button, Chip, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { RepoDetailsTypes } from "../../../types/RepoDetails";
interface AsideRepoDetailsProps {
  repo: RepoDetailsTypes;
  isSuccess: boolean;
}
export default function AsideRepoDetails({ repo, isSuccess }:AsideRepoDetailsProps) {
  return (
    <Box p={2}>
      {isSuccess && (
        <Button
          target="_blank"
          startIcon={<GitHub />}
          sx={{ background: "black", mb: 2 }}
          fullWidth
          variant="contained"
          component={Link}
          to={repo.svn_url}
        >
          View on GitHub
        </Button>
      )}
      <Typography mb={1} variant="h2" fontSize={24} fontWeight={"bold"}>
        Topics:
      </Typography>

      {isSuccess && repo.topics?.length > 0 && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
            mb: 1,
            flexWrap: "wrap",
          }}
        >
          {repo.topics.map((topic, index) => (
            <Chip key={index} label={topic} />
          ))}
        </Box>
      )}
    </Box>
  );
}
