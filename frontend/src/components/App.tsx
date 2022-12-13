import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./landing/Landing";


import TroopsPage from "./pages/Troops";
import LeaderboardPage from "./pages/Leaderboard";
import BattlePage from "./pages/Battle";
import BuildingsPage from "./pages/Buildings";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/kingdom/battle" element={<BattlePage />}/>
        <Route path="/kingdom/buildings" element={<BuildingsPage />}/>
        <Route path="/kingdom/leaderboard" element={<LeaderboardPage />}/>
        <Route path="/kingdom/troops" element={<TroopsPage />}/>
        <Route path="*" element={<Landing />} />
      </Routes>
   
    </BrowserRouter>
  );
}
