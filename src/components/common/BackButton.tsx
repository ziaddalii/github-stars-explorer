import { ArrowBack } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();
  const [canGoBack, setCanGoBack] = useState(false);

  useEffect(() => {
    setCanGoBack(window.history.length > 1);
  }, []);

  const handleBack = () => {
    if (canGoBack) {
      navigate(-1);
    }
  };
  return (
    <IconButton
      disabled={!canGoBack}
      sx={{ position: "fixed", top: "16px", left: "16px" }}
      onClick={handleBack}
    >
      <ArrowBack />
    </IconButton>
  );
}

export default BackButton;
