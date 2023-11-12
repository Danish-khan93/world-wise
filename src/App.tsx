import { Routes, Route, Navigate } from "react-router-dom";
import Product from "./pages/Poduct";
import Pricing from "./pages/Pricing";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import AppLayOut from "./pages/AppLayOut";
import Login from "./pages/Login";
import CitiesList from "./component/CitiesList";
// import { useEffect, useState } from "react";
import CountryList from "./component/CountryList";
// import axios from "axios";
import City from "./component/City";
import Form from "./component/Form";
import { CitiesProvider } from "./context/CitiesContext";
// const BaseURL = "http://localhost:9000";

const App = () => {
  // const [cities, setCities] = useState([]);
  // const [isloading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   async function fetchCities() {
  //     try {
  //       setIsLoading(true);
  //       await axios(`${BaseURL}/cities`).then((res) => {
  //         setCities(res.data);
  //       });
  //     } catch (error) {
  //       alert("there is an error");
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }
  //   fetchCities();
  // }, []);

  return (
    <>
      <CitiesProvider>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="login" element={<Login />} />
          <Route path="app" element={<AppLayOut />}>
            <Route index element={<Navigate to="cities" />} />
            <Route path="cities" element={<CitiesList />} />
            <Route path="cities/:id" element={<City />} />
            <Route path="country" element={<CountryList />} />
            <Route path="form" element={<Form />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </CitiesProvider>
    </>
  );
};

export default App;
