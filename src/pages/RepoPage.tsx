import { Box, Chip, Container, Typography } from "@mui/material";
import { Navigate, useParams } from "react-router-dom";
import RepoHeader from "../components/pages/RepoPage/RepoHeader";
import { fetchRepositoryDetails } from "../api/repoPage";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import ReposHeaderSkeleton, {
  DescriptionSkeleton,
} from "../components/skeletons/RepoDetails.skeletons";
import SomethingWentWrong from "../components/common/SomethingWentWrong";
import { ErrorResponse } from "../types/ErrorResponse";
import { RepoDetailsTypes } from "../types/RepoDetails";
import BackButton from "../components/common/BackButton";

function RepoDetails() {
  const { owner, repoName } = useParams();

  const {
    data,
    isLoading,
    isError,
    isSuccess,
    error,
  }: UseQueryResult<RepoDetailsTypes, ErrorResponse> = useQuery({
    queryKey: ["repositoryDetails", owner, repoName],
    queryFn: () => fetchRepositoryDetails(owner || "", repoName || ""),
  });
  return (
    <main>
      <Container maxWidth="md" sx={{ py: 2, position: "relative" }}>
        <BackButton />

        {/* Header */}
        {isSuccess && <RepoHeader repo={data} />}
        {isLoading && <ReposHeaderSkeleton />}
        {/* Main */}
        <Box
          borderRadius={4}
          display={"flex"}
          flexDirection={"column"}
          gap={"16px"}
          bgcolor={"white"}
          component={"main"}
          p={2}
        >
          {isSuccess && (
            <Box>
              <Typography variant="h2" fontSize={24} fontWeight={"bold"} mb={1}>
                Description:
              </Typography>
              {data.description ? (
                <Box>
                  <Typography>{data.description}</Typography>
                </Box>
              ) : (
                <Typography color="textSecondary">
                  no description found
                </Typography>
              )}
            </Box>
          )}
          {isLoading && <DescriptionSkeleton />}

          {isSuccess && (
            <Box>
              <Typography mb={1} variant="h2" fontSize={24} fontWeight={"bold"}>
                Topics:
              </Typography>
              {data.topics?.length > 0 ? (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    mb: 1,
                    flexWrap: "wrap",
                  }}
                >
                  {data.topics.map((topic, index) => (
                    <Chip key={index} label={topic} />
                  ))}
                </Box>
              ) : (
                <Typography color="textSecondary">no topics found</Typography>
              )}
            </Box>
          )}
        </Box>
        {/* Handle Error */}
        {isError && error.response?.data?.message === "Not Found" ? (
          <Navigate to="/not-found" />
        ) : (
          isError && <SomethingWentWrong />
        )}
      </Container>
    </main>
  );
}

export default RepoDetails;
