
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; 
import Home from './pages/Home';
import AddReview from './pages/AddReview';
import Contact from './pages/Contact';

import ServiceDetails from './pages/ServiceDetails';

const AppRouter = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<AddReview />} />
      <Route path="/contact" element={<Contact />} />
   
      <Route path="/services" element={<ServiceDetails />} />
    </Routes>
    <Footer /> {/* ✅ Add Footer outside of <Routes /> */}
  </BrowserRouter>
);

export default AppRouter;
