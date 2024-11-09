import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoginPage from './pages/logIn/index';
import UserDashboard from './pages/User_Page/index';
import AdminDashboard from './pages/Master_Page/index';
import Rider from './pages/Rider_Page/index';
import Restrurant from './pages/Restaurant_Page/index';
import '../node_modules/antd/dist/reset.css'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/rider-dashboard" element={<Rider/>} />
        <Route path="/restaurant-dashboard" element={<Restrurant />} />
      </Routes>
    </Router>
  );
};

export default App;