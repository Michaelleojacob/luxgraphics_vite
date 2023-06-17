import json2mq from "json2mq";
import useMediaQuery from "@mui/material/useMediaQuery";

const LandingPage = () => {
  const isScreenOver600px = useMediaQuery(
    json2mq({
      minWidth: 600,
    })
  );
  return (
    <div>
      <img src="images/landingpagecol.jpg" />;
      <div>this is the landing page</div>
    </div>
  );
};

export default LandingPage;
