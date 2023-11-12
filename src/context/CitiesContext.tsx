import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const BaseURL = "http://localhost:9000";

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

const CitiesContext = createContext<any>({});

function CitiesProvider({ children }: { children: any }) {
  const [cities, setCities] = useState<[] | CITY[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentCity, setCurrentCity] = useState<{} | CITY>({});

  useEffect(() => {
    async function fetchCities() {
      try {
        setIsLoading(true);
        await axios(`${BaseURL}/cities`).then((res) => {
          setCities(res.data);
        });
      } catch (error) {
        alert("there is an error");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  async function getCity(id: number) {
    try {
      setIsLoading(true);
      await axios.get(`${BaseURL}/cities/${id}`).then((res) => {
        setCurrentCity(res.data);
      });
    } catch (error) {
      console.log("error in city component ");
    }finally{
      setIsLoading(false)
    }
  }

  return (
    <CitiesContext.Provider value={{ cities, isLoading, currentCity, getCity }}>
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("cities context use outsidde city provider");
  return context;
}

export { CitiesProvider, useCities };
