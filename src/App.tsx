import { Heading } from "@chakra-ui/react";
import { useGetInPlayQuery } from "./redux/InPlayApi";

const App: React.FC = () => {
  const { data=[] , error } = useGetInPlayQuery(1);
  console.log(data);
  console.log(error);
  return (
    <>
      <Heading>I'm a Heading</Heading>
    </>
  );
};

export default App;
