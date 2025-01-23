import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { Navigate, useParams } from "react-router-dom";
import { fetchOwnerDetails } from "../api/ownerProfile";
import { Container } from "@mui/material";
import SomethingWentWrong from "../components/common/SomethingWentWrong";
import OwnerProfileSection from "../components/pages/OwnerProfile/OwnerProfile";
import OwnerProfileSkeleton from "../components/skeletons/OwnerProfile.skeleton";
import { Owner } from "../types/OwnerProfile";
import { ErrorResponse } from "./../types/ErrorResponse";
import BackButton from "../components/common/BackButton";

function OwnerProfile() {
  const { username } = useParams();

  const {
    data,
    isLoading,
    isError,
    isSuccess,
    error,
  }: UseQueryResult<Owner, ErrorResponse> = useQuery({
    queryKey: ["repositoryDetails", username],
    queryFn: () => fetchOwnerDetails(username || ""),
  });
  return (
    <main>
      <Container maxWidth="sm" sx={{ py: 2 }}>
      <BackButton />

        {isLoading && <OwnerProfileSkeleton />}
        {isSuccess && <OwnerProfileSection owner={data} />}
        {isError && error.response?.data?.message === "Not Found" ? (
          <Navigate to="/not-found" />
        ) : (
          isError && <SomethingWentWrong />
        )}
      </Container>
    </main>
  );
}

export default OwnerProfile;
