import { Skeleton } from "@mui/material";
import CityItem from "./CityItem";
import Message from "./Message";
import { useCities } from "../context/CitiesContext";

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


const CitiesList = () => {
// @ts-ignore
const {cities,isLoading} =useCities()

  const List = cities.map((city: CITY) => {
    return <CityItem city={city} key={city.id} />;
  });

  if (isLoading)
    return <Skeleton variant="rectangular" width={210} height={60} />;

if(!cities.length) return <Message/>

  return <> {List}</>;
};

export default CitiesList;
