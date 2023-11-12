import { Box, Typography,Skeleton } from "@mui/material";
import { useEffect } from "react";
import { useCities } from "../context/CitiesContext";

import { useParams } from "react-router-dom";

// type CITY = {
//   cityName: string;
//   country: string;
//   notes: string;
//   position: {
//     lat: number;
//     lng: number;
//   };
//   id: number;
// };

const City = () => {
  // @ts-ignore
  const { currentCity, getCity, isLoading } = useCities();
  const { id } = useParams();

  console.log(currentCity);

  useEffect(() => {
    getCity(id);
  }, [id]);

  if (isLoading) return <Skeleton animation="wave" variant="rectangular" width={400} height={400} />;
  ;
  return (
    <Box className="w-[400px] h-[400px] bg-[#0d1321] rounded-lg text-center flex flex-col gap-3 pt-6">
      <Typography className="text-white font-bold text-[16px]" variant="h6">
        COUNTRY : {currentCity?.country}
      </Typography>
      <Typography className="text-white font-bold text-[16px]" variant="h6">
        CITY : {currentCity?.cityName}
      </Typography>
      <Typography className="text-white font-bold text-[16px]">
        {currentCity?.notes}
      </Typography>

      <Typography className="text-white font-bold text-[16px]" variant="h6">
        Position
      </Typography>
      <Typography className="text-white font-bold text-[16px]">
        Lat : {currentCity?.position?.lat}
      </Typography>
      <Typography className="text-white font-bold text-[16px]">
        Lng : {currentCity?.position?.lng}
      </Typography>
    </Box>
  );
};

export default City;
