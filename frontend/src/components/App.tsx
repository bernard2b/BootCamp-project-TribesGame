import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from '../NotFound';
import Landing from './landing/Landing';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
