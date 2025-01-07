import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Profile from './pages/Profile';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  
  );
};

export default App;
