import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/landing/Landing";
import Registration from "./components/pages/registration/Registration";
import RegistrationMap from "./components/pages/registration/RegistrationMap";
import Login from "./components/pages/login/Login"
import UserSettings from "./components/pages/user-settings/userSettings";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Registration />} />
        <Route path="/register/map" element={<RegistrationMap />} />
        <Route path="/*" element={<Landing />} />
        <Route path ="/login" element={< Login/>} />
        <Route path ="/user" element={< UserSettings/>} />

    </Routes>  
    </BrowserRouter>
  );
}
