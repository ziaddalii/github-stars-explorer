import { Box, Skeleton } from "@mui/material";

function ReposHeaderSkeleton() {
  return (
    <Box sx={{ display: "flex", alignItems: "center", mb: "1rem", gap:"8px" }}>
      <Skeleton variant="circular" width={"80px"} height={"80px"} />
      <Box >
        <Skeleton height={35} width="130px" style={{ marginBottom: 6 }} />
        <Skeleton height={25} width="90px" />
      </Box>
    </Box>
  );
}

export default ReposHeaderSkeleton;

export function DescriptionSkeleton() {
  return (
    <div>
      <Skeleton variant="text" />
      <Skeleton variant="text" />
      <Skeleton variant="text" />
      <Skeleton variant="text" />
      <Skeleton variant="text" />
    </div>
  );
}
