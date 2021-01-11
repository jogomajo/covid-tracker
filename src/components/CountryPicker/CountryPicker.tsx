import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";

import { fetchCountries } from "../../api";

import styles from "./CountryPicker.module.css";

interface IProps {
  handleCountryChange: (country: string) => Promise<void>;
}

const CountryPicker: React.FC<IProps> = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState<
    string[] | undefined
  >();

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries());
    };

    fetchAPI();
  }, [setFetchedCountries]);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue=""
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          handleCountryChange(e.target.value)
        }
      >
        <option value="">Global</option>
        {fetchedCountries
          ? fetchedCountries.map((country, i) => (
              <option key={i} value={country}>
                {country}
              </option>
            ))
          : null}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
