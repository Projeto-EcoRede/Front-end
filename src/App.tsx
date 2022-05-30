import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/estaticos/navbar/Navbar'
import Footer from './components/estaticos/footer/Footer'
import Home from './pages/home/Home'
import Login from './pages/login/Login';
import Sobre from './pages/sobre/Sobre'
import './App.css';

function App() {
  return(
    <Router>
    <Navbar />
    <div style={{ minHeight: '100vh' }}>
    <Routes> // Antigo Switch
    <Route path="/" element={<Login />} />
    <Route path="/login" element={<Login />} />
    <Route path="/home" element={<Home />} />
    <Route path="/sobre" element={<Sobre />} />
    {/* <Route path="/cadastro" element={<CadastroUsuario />} /> */}
    </Routes>
    </div>
    <Footer />
    </Router>
    );
}

export default App;
