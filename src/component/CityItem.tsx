import { IconButton, Typography, Box } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { Link } from "react-router-dom";
type CITY = {
  cityName: string;
  country: string;
  notes: string;
  position: {
    lat: number;
    lng: number;
  };
  id: number;
};

const CityItem = ({ city }: { city: CITY }) => {
  

  const handleClick = () => {
    console.log("hello delete");
  };
  return (
    <Link to={`${city.id}?lat=${city.position.lat}&lng=${city.position.lng}`}>
      <Box className="mt-5 bg-slate-500 text-white font-bold flex justify-between items-center rounded-full px-2">
        <Typography>{city.cityName}</Typography>
        <IconButton onClick={handleClick}>
          <ClearIcon className="text-white font-bold" />
        </IconButton>
      </Box>
    </Link>
  );
};

export default CityItem;
