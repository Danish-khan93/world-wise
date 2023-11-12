import { Skeleton } from "@mui/material";
import CountryItem from "./CountryItem";
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

const CountryList = () => {
  // @ts-ignore
  const {cities,isLoading} = useCities()
  const List2 = cities.reduce((arr:CITY[],city:CITY)=> {
    if(!arr.map((el:CITY)=>el.country).includes(city.country))
    return [...arr,{country:city.country}];
    else return arr
  },[]);
console.log(List2,"====>");
const List = List2.map((country: CITY) => {
    return <CountryItem country={country} key={country.id} />;
  });

  if (isLoading)
    return <Skeleton variant="rectangular" width={210} height={60} />;

if(!cities.length) return <Message/>

  return <> {List}</>;
};

export default CountryList;
