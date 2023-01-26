import { BrowserRouter, Routes, Route } from "react-router-dom";

import Troops from "./components/pages/Troops";
import Leaderboard from "./components/pages/Leaderboard";
import Battle from "./components/pages/Battle";
import Buildings from "./components/pages/Buildings";
import Landing from "./components/landing/Landing";
import NotFound from "./components/pages/NotFound";
import Registration from "./components/pages/registration/Registration";
import RegistrationMap from "./components/pages/registration/RegistrationMap";
import Login from "./components/pages/login/Login"


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Registration />} />
        <Route path="/register/map" element={<RegistrationMap />} />
        <Route path="/*" element={<Landing />} />
        <Route path="/register" element={<Registration />} />
        <Route path ="/login" element={< Login/>} />
    </Routes>  
    </BrowserRouter>
  );
}
