export interface SingleCountryData {
  confirmed: {
    value: number;
  };
  recovered: {
    value: number;
  };
  deaths: {
    value: number;
  };
  lastUpdate: string;
}

export interface GlobalDailyData {
  confirmed: { total: number };
  deaths: { total: number };
  reportDate: string;
}

export interface ModifiedGlobalDailyData {
  confirmed: number;
  deaths: number;
  date: string;
}
