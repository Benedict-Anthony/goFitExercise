import {BrowserRouter, Route, Routes} from "react-router-dom"
import Navbar from "./components/Navbar";
import Exercises from "./pages/Exercises";
import Landing from "./pages/Landing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Landing />} />
        <Route path={"/exercises"} element={<Exercises/>} />
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
