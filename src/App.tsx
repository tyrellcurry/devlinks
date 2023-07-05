import { Routes, Route } from 'react-router';
import Home from './Pages/Home'
import Links from './Pages/Links'
import Profile from './Pages/Profile'
import NotFound from './Pages/NotFound'
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/links" element={<Links />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
    );
}

export default App;
