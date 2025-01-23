import { Box, Pagination } from "@mui/material";
import RepoCard from "../../cards/RepoCard";
import { getTotalPagesCount } from "../../../utils/common";
import { useNavigate } from "react-router-dom";
import NoData from "../../common/NoData";
import { GitHubSearchRepoResponse } from "../../../types/SearchRepo";
import { ChangeEvent } from "react";

interface Props {
  data: GitHubSearchRepoResponse;
  page: number;
  query: string;
}
function ReposList({ data, page, query }: Props) {
  const navigate = useNavigate();
  const handlePageChange = (
    _: ChangeEvent<unknown>,
    value: number
  ): void => {
    navigate(`?q=${query}&page=${value}`);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Box
      sx={{
        maxHeight: data == null ? "0px" : "9999999px",
        transition: "all 100ms",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        mt: 4,
      }}
    >
      {data.total_count === 0 || data.items.length === 0 ? (
        <NoData />
      ) : (
        <>
          {data.items.map((repo) => {
            return <RepoCard key={repo.id} repo={repo} />;
          })}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: 2,
              marginBottom: 4,
            }}
          >
            <Pagination
              count={getTotalPagesCount(data.total_count, 10)}
              page={page}
              onChange={handlePageChange}
              color="primary"
              shape="circular"
            />
          </Box>
        </>
      )}
    </Box>
  );
}

export default ReposList;
