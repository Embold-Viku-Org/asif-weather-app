import React, { useState } from "react";
import { Cities } from "../city_list";

export const MyContext = React.createContext();

export const CustomContext = ({ children }) => {
  const [unselectedCities, setUnselectedCities] = useState(Cities);
  const [selectedCities, setSelectedCities] = useState([])
  const [cityDesc, setCityDesc] = useState({})
  const [favCities, setFavCities] = useState([])
  const [theme, setTheme] = useState(()=>'light')

  const value = {
    unselectedCities,
    setUnselectedCities,
    selectedCities, 
    setSelectedCities,
    cityDesc,
    setCityDesc, 
    favCities,
    setFavCities,
    theme,
    setTheme
  };

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};


