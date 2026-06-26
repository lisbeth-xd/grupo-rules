import { useEffect } from 'react';
import Navbar from './components/layout/Navbar.jsx';
import Footer from './components/layout/Footer.jsx';
import WhatsAppButton from './components/ui/WhatsAppButton.jsx';
import Home from './pages/Home.jsx';
import './styles/globals.css';

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
      <WhatsAppButton />
    </>
  );
}