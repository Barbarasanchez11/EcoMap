import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from '../components/Header/Header'
import Hero from '../components/Home/Hero';
import Footer from '../components/Footer';
import ContactUs from '../pages/ContactUs';
import AboutUs from '../pages/AboutUs';
import MyMap from '../pages/MyMap';

const AppRoutes = () => { 
  return (
    <Router>
      <Header />  
        <MyMap />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/contactus' element={<ContactUs />} />
       
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRoutes;
