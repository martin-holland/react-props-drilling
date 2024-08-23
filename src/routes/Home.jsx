import { Typography } from "@mui/material";
import { url } from "../api/api";
import ComponentA from "../components/ComponentA";
import { getData } from "../services/apiRequests";
import { useState } from "react";


const initialData = await getData(url);

const Home = () => {
  const [data, setData] = useState(null);

  return (
    <div>
      <Typography variant="h6" component="h2">
        Home
      </Typography>
      <ComponentA data={data ?? initialData} setData={setData} />
    </div>
  );
};

export default Home;
