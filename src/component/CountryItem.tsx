import { IconButton, Typography, Box } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
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

const handleClick =()=>{
    console.log("hello delete");
    
}

const CountryItem = ({ country }: { country: CITY }) => {
  return (
    <Box className="mt-5 bg-slate-500 text-white font-bold flex justify-between items-center rounded-full px-2">
      <Typography>{country.country}</Typography>
      <IconButton onClick={handleClick}>
        <ClearIcon className="text-white font-bold" />
      </IconButton>
    </Box>
  );
};

export default CountryItem;
