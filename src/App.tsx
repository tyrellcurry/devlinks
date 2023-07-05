import { Routes, Route } from 'react-router';
import Home from './Pages/Home'
import Links from './Pages/Links'
import Profile from './Pages/Profile'
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/links" element={<Links />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
    );
}

export default App;
