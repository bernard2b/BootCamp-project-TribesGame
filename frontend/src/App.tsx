import { BrowserRouter, Routes, Route } from "react-router-dom";

import Troops from "./components/pages/Troops";
import Leaderboard from "./components/pages/Leaderboard";
import Battle from "./components/pages/Battle";
import Buildings from "./components/pages/Buildings";
import Landing from "./components/landing/Landing";
import NotFound from "./components/pages/NotFound";
import Registration from "./components/pages/registration/Registration";
import Header from "./components/header/Header";
import Main from "./components/Main/Main";
import Resources from "./components/Resources/Resources";

export default function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/*" element={<Landing />} />
        <Route path="/not-found" element={<NotFound />} />
    </Routes>  
    </BrowserRouter>
  );
}
