import { Box, IconButton, InputBase, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  query: string;
}
function SearchForm({ query }: Props) {
  const inputRef = useRef<HTMLInputElement>();
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const query = inputRef?.current?.value?.trim();
    if (query) {
      navigate(`?q=${query}&page=1`);
    }
  };

  return (
    <Box
      sx={{
        paddingTop: query ? "32px" : "0",
        height: query ? "auto" : "100vh",
        minHeight: query ? "none" : "300px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Typography
        fontWeight={"bold"}
        textAlign={"center"}
        variant={"h3"}
        sx={{ textDecoration: "none", color: "black" }}
        component={query ? "a" : "h2"}
        href={query ? "/" : ""}
        mb={1}
      >
        <span style={{ color: "#176cee" }}>G</span>
        <span style={{ color: "#dc4935" }}>i</span>
        <span style={{ color: "#ffb802" }}>t</span>
        <span style={{ color: "#1c70ee" }}>H</span>
        <span style={{ color: "#029d5a" }}>u</span>
        <span style={{ color: "#d6412e" }}>b </span>
        Stars Explorer
      </Typography>
      {!query && (
        <Typography
          fontSize={"14px"}
          textAlign={"center"}
          color="textSecondary"
        >
          Discover Top-Rated GitHub Repositories &ndash; Where Stars Lead the
          Way!
        </Typography>
      )}
      <Box
        component="form"
        role="form"
        onSubmit={handleSubmit}
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          borderRadius: "999999px",
          bgcolor: "#f6f8fa",
          width: "100%",
          mt: 2,
          WebkitBoxShadow: "5px 6px 5px 0px rgba(0,0,0,0.06)",
          MozBoxShadow: "5px 6px 5px 0px rgba(0,0,0,0.06)",
          BoxShadow: "5px 6px 5px 0px rgba(0,0,0,0.06)",
        }}
      >
        <InputBase
          defaultValue={query}
          sx={{
            ml: 1,
            flex: 1,
            width: "100%",
    
          }}
          placeholder="Search for repositories"
          inputProps={{ "aria-label": "search for repositories" }}
          inputRef={inputRef}
        />
        <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

export default SearchForm;
