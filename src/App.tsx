import React, { useState, useEffect } from "react";

import { Cards, Chart, CountryPicker } from "./components";
import { fetchData } from "./api/index";

import { SingleCountryData } from "./interfaces/interfaces";

import covidImage from "./images/image.png";

import styles from "./App.module.css";

const App: React.FC = () => {
  const [data, setData] = useState<SingleCountryData | undefined>();
  const [country, setCountry] = useState<string>("");

  useEffect(() => {
    const fetchAPI = async () => {
      const fetchedData = await fetchData();

      setData(fetchedData);
    };

    fetchAPI();
  }, []);

  const handleCountryChange = async (country: string) => {
    const fetchedData = await fetchData(country);

    setData(fetchedData);
    setCountry(country);
  };

  return (
    <div className={styles.container}>
      <img src={covidImage} alt="COVID-19" className={styles.image} />
      {data ? <Cards data={data} /> : null}
      <CountryPicker handleCountryChange={handleCountryChange} />
      {data ? <Chart data={data} country={country} /> : null}
    </div>
  );
};

export default App;
