import axios from "axios";

import {
  SingleCountryData,
  GlobalDailyData,
  ModifiedGlobalDailyData,
} from "../interfaces/interfaces";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (
  country?: string
): Promise<SingleCountryData | undefined> => {
  let changeableUrl = url;

  if (country) {
    changeableUrl = `${url}/countries/${country}`;
  }

  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(changeableUrl);

    return {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    };
  } catch (error) {
    console.log(error);
  }
};

export const fetchDailyData = async (): Promise<
  ModifiedGlobalDailyData[] | undefined
> => {
  try {
    const { data } = await axios.get(`${url}/daily`);

    const modifiedData = data.map((dailyData: GlobalDailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));

    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCountries = async (): Promise<string[] | undefined> => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);

    return countries.map((country: { name: string }) => country.name);
  } catch (error) {
    console.log(error);
  }
};
