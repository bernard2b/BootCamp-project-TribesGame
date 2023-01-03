import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from '../NotFound';
import Landing from './landing/Landing';
import Registration from './pages/registration/Registration';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Registration />} />
        <Route path='/' element = {<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}
