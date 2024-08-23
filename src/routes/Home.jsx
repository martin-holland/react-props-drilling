import { Typography } from "@mui/material";
import ComponentA from "../components/ComponentA";
import useData from "../contexts/useData";

const Home = () => {
  const { data } = useData();

  return (
    <div>
      <Typography variant="h6" component="h2">
        Home
      </Typography>
      {data && <ComponentA />}
    </div>
  );
};

export default Home;
