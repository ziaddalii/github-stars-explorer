import { Container } from "@mui/material";
import ReposList from "../components/pages/SearchPage/ReposList";
import SearchForm from "../components/pages/SearchPage/SearchForm";
import { useQuery } from "@tanstack/react-query";
import { searchRepositories } from "../api/searchRepos";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ReposSearchDataSkeleton from "../components/skeletons/ReposSearchData.skeletons";
import SomethingWentWrong from "../components/common/SomethingWentWrong";
import BackButton from "../components/common/BackButton";

function SearchPage() {
  const location = useLocation();
  const queryParam = new URLSearchParams(location.search).get("q");
  const pageParam = new URLSearchParams(location.search).get("page");

  // States
  const [query, setQuery] = useState(queryParam || "");
  const [page, setPage] = useState(Number(pageParam));

  // Handle search params change
  useEffect(() => {
    const queryParam = new URLSearchParams(location.search).get("q");
    const pageParam = new URLSearchParams(location.search).get("page");
    if (queryParam) {
      setQuery(queryParam);
    }
    if (pageParam) {
      setPage(Number(pageParam));
    }
  }, [location.search]);

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["searchRepositories", query, page],
    queryFn: () => searchRepositories(query, page),
    enabled: !!query, // Prevent auto-fetching until `query` is provided
  });

  return (
    <main>
      <Container sx={{ position: "relative" }} maxWidth={query ? "md" : "sm"}>
        <BackButton />

        <SearchForm query={query} />
        {isLoading && <ReposSearchDataSkeleton />}
        {isSuccess && <ReposList data={data} page={page} query={query} />}
        {isError && <SomethingWentWrong />}
      </Container>
    </main>
  );
}

export default SearchPage;
