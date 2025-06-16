import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; 
import Home from './pages/Home';
import AddReview from './pages/AddReview';
import Contact from './pages/Contact';
import ServiceDetails from './pages/ServicesDetails'; 
import AddJourney from './pages/AddJourney'; // <-- ADD THIS

const AppRouter = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
          <Route path="/review" element={<AddReview />} />
      <Route path="/add" element={<AddJourney />} />  {/* <-- FIXED LINE */}
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<ServiceDetails />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default AppRouter;
