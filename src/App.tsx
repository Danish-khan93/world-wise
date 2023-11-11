import { Routes, Route } from "react-router-dom";
import Product from "./pages/Poduct";
import Pricing from "./pages/Pricing";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import AppLayOut from "./pages/AppLayOut";
import Login from "./pages/Login";
import CitiesList from "./component/CitiesList";
import { useEffect, useState } from "react";
import CountryList from "./component/CountryList";
import axios from "axios";
import City from "./component/City";
import Form from "./component/Form";
const BaseURL = "http://localhost:9000";

const App = () => {
  const [cities, setCities] = useState([]);
  const [isloading, setIsLoading] = useState(false);
 

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

  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="login" element={<Login />} />
        <Route path="app" element={<AppLayOut />}>
          <Route
            index
            element={<CitiesList cities={cities} isLoading={isloading} />}
          />
          <Route
            path="cities"
            element={<CitiesList cities={cities} isLoading={isloading} />}
          />
          <Route path="cities/:id" element={<City cities={cities}/> }/>
          <Route path="country" element={<CountryList cities={cities} isLoading={isloading} />} />
          <Route path="form" element={<Form/>} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
