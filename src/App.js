import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Certificate from './pages/Certificate';
import Management from './pages/Management';
import Plans from './pages/Plans';
import Services from './pages/Services';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/certificate" element={<Certificate />} />
          <Route path="/management" element={<Management />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/services" element={<Services />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
