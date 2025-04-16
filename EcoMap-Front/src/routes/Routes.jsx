import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from '../components/Home/Hero';

const AppRoutes = () => { 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
       
      </Routes>
    </Router>
  );
};

export default AppRoutes;
