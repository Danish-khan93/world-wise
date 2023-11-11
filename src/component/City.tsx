// import { Box, Typography } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { useParams } from "react-router-dom";
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

const City = ({ cities }: { cities: CITY[] }) => {
  const { id } = useParams();

  const [seachParams,setSearchParams] =useSearchParams()

  const lat =seachParams.get("lat")
  const lng =seachParams.get("lng")

  const cityInd = cities.find((city: CITY) => {
    if (city.id === +id) {
      return city;
    }
  });
  console.log(cityInd);

  return (
    <h1>{cityInd.id}</h1>

    // <Box className="w-[400px] h-[400px] bg-[#0d1321] rounded-lg text-center flex flex-col gap-3 pt-6">
    //   <Typography className="text-white font-bold text-[16px]" variant="h6">
    //    COUNTRY : {cityInd?.country}
    //   </Typography>
    //   <Typography className="text-white font-bold text-[16px]" variant="h6">
    //    CITY : {cityInd?.cityName}
    //   </Typography>
    //   <Typography className="text-white font-bold text-[16px]" >
    //     {cityInd?.notes}
    //   </Typography>

    //   <Typography className="text-white font-bold text-[16px]" variant="h6">
    //     Position
    //   </Typography>
    //   <Typography className="text-white font-bold text-[16px]" >
    //    Lat : {cityInd?.position.lat}
    //   </Typography>
    //   <Typography className="text-white font-bold text-[16px]" >
    //     Lng : {cityInd?.position.lng}
    //   </Typography>
    // </Box>
  );
};

export default City;
