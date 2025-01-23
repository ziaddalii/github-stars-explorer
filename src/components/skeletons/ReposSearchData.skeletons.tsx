import { Skeleton, Stack } from "@mui/material";

function ReposSearchDataSkeleton() {
  return (
    <Stack spacing={2} mt={2}>
      <Skeleton height={200} sx={{ transform: "unset" }} />
      <Skeleton height={200} sx={{ transform: "unset" }} />
      <Skeleton height={200} sx={{ transform: "unset" }} />
      <Skeleton height={200} sx={{ transform: "unset" }} />
      <Skeleton height={200} sx={{ transform: "unset" }} />
      <Skeleton height={200} sx={{ transform: "unset" }} />
    </Stack>
  );
}

export default ReposSearchDataSkeleton;
