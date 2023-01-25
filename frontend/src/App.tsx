import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/landing/Landing";
import Registration from "./components/pages/registration/Registration";
import Login from "./components/pages/login/Login"
import UserSettings from "./components/pages/user-settings/userSettings";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Landing />} />
        <Route path="/register" element={<Registration />} />
        <Route path ="/login" element={< Login/>} />
        <Route path ="/usersettings" element={< UserSettings/>} />

    </Routes>  
    </BrowserRouter>
  );
}
