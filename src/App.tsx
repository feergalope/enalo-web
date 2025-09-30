// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './styles/global';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { ScrollToTop } from './components/ScrollToTop/ScrollToTop';
import { CookieBanner } from './components/CookieBanner/CookieBanner';
import { AppLoader } from './components/AppLoader';
import { useAppLoading } from './hooks/useAppLoading';
import { Home } from './routes/Home';
import { Enalo } from './routes/Enalo';
import { Escualano } from './routes/Escualano';
import { Scualane } from './routes/Scualane';
import { BodyOil } from './routes/BodyOil';
import { About } from './routes/About';
import { Privacy } from './routes/Privacy';
import { Terms } from './routes/Terms';
import { Cookies } from './routes/Cookies';
import { NotFound } from './routes/NotFound';

function App() {
  const { isLoading } = useAppLoading();

  return (
    <Router>
      <GlobalStyle />
      <AppLoader isVisible={isLoading} />
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scualane" element={<Scualane />} />
        <Route path="/enalo" element={<Enalo />} />
        <Route path="/scualane-100" element={<Escualano />} />
        <Route path="/body-oil" element={<BodyOil />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacidad" element={<Privacy />} />
        <Route path="/terminos" element={<Terms />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <CookieBanner />
    </Router>
  );
}

export default App;
