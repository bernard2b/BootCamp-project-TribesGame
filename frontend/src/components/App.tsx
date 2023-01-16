import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import NotFound from '../components/pages/NotFound';
import Landing from './landing/Landing';
import Registration from './pages/registration/Registration';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Registration />} />
        <Route path='/' element = {<Landing />} />
        <Route path ="*" element={< NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}
