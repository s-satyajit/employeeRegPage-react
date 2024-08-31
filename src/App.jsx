import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegistrationPage from './component/RegistrationPage';
import LoginPage from './component/LoginPage';
import LandingPage from './component/LandingPage';
import UserDetailsPage from './component/UserDetailsPage';
import Header from './component/Header';
import Footer from './component/Footer';

const App = () => {
  const [employeeData, setEmployeeData] = useState([]);

  const handleRegistration = (formData) => {
    setEmployeeData([...employeeData, formData]);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="register" element={<RegistrationPage onRegister={handleRegistration} />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="user-details" element={<UserDetailsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;