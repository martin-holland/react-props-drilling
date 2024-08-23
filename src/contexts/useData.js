const { useContext } = require("react");
const { DataContext } = require("./DataContext");

const useData = () => {
  return useContext(DataContext);
};

export default useData;