import { IconButton, Typography, Box } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { NavLink } from "react-router-dom";
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
    <Box className="mt-5 bg-slate-500 text-white font-bold flex justify-between items-center rounded-full px-2">
      <NavLink to={`${city.id}?lat=${city.position.lat}&lng=${city.position.lng}`} className={`${(isActive:boolean)=>isActive?"text-red-600":"text-white"}`}>
        <Typography>{city.cityName}</Typography>
      </NavLink>
      <IconButton onClick={handleClick}>
        <ClearIcon className="text-white font-bold" />
      </IconButton>
    </Box>
  );
};

export default CityItem;
