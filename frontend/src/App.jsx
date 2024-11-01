import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Createpage from "./pages/CreatePage";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Box minH={"100vh"}>
      {<Navbar/>}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/create" element={<Createpage />} />
      </Routes>

    </Box>
  )
}

export default App;
