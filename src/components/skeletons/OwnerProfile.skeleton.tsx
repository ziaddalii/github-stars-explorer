import { Box, Skeleton } from "@mui/material";

function OwnerProfileSkeleton() {
  return (
    <Box
      p={2}
      bgcolor={"white"}
      borderRadius={"1rem"}
      display={"flex"}
      alignItems={"center"}
      flexDirection={"column"}
    >
      <Skeleton variant="circular" width={250} height={250} />
      <Skeleton width={130} height={40} />
      <Skeleton width={90} height={40} />
      <Skeleton width={"80%"} height={20} />
      <Skeleton width={"60%"} height={20} />
      <Skeleton width={"40%"} height={20} />
      <Skeleton width={"40%"} height={20} />
    </Box>
  );
}

export default OwnerProfileSkeleton;
