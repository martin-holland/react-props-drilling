import { createContext, useState, useEffect } from "react";
import { url } from "../api/api";
import { getData } from "../services/apiRequests";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const res = await getData(url);
    setData(res);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};