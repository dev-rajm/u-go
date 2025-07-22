import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Auth from './pages/Auth';
import { Copyright } from './components/Copyright';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<Auth type="signup" />} />
          <Route path="/login" element={<Auth type="login" />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
      <Copyright />
    </>
  );
};

export default App;
