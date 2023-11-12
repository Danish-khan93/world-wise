import { Box, Button } from "@mui/material";
import { useSearchParams, useNavigate } from "react-router-dom";
const Map = () => {
  const [seachParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate();

  const lat = seachParams.get("lat");
  const lng = seachParams.get("lng");
  return (
    <Box
      className="bg-red-400 w-[50%]"
      onClick={() => {
        navigate("form");
      }}
    >
      map
      <h1>
        position : lat:{lat}
        lng:{lng}
      </h1>
      <Button
        onClick={() => {
          // @ts-ignore
          setSearchParams({ lat: 39, lng: 40 });
        }}
      >
        change Position{" "}
      </Button>
    </Box>
  );
};

export default Map;
