import json2mq from "json2mq";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Button } from "@mui/material";

const LandingPage = () => {
  const isScreenOver600px = useMediaQuery(
    json2mq({
      minWidth: 600,
    })
  );

  const landingClasses = "text-white text-8xl pl-8";

  return (
    <div
      style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}
      className="h-screen"
    >
      <div className="flex-1 bg-blue-600 flex flex-col items-start justify-center">
        <div className={landingClasses}>california</div>
        <div className={landingClasses}>lux design</div>
        <div className={landingClasses}>operating since 1999</div>
        <Button
          variant="contained"
          sx={{
            fontSize: "2rem",
            alignSelf: "center",
            bgcolor: "#eab308",
            overflow: "hidden",
            mt: "2rem",
            "&:hover": {
              backgroundColor: "#f59e0b",
            },
          }}
        >
          news
        </Button>
      </div>
      <img
        src="images/landingpagecol.jpg"
        alt="landing page img"
        className="h-screen"
      />
    </div>
  );
};

export default LandingPage;
