import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { GlobalStyle } from './styles/global';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { ScrollToTop } from './components/ScrollToTop/ScrollToTop';
import { CookieBanner } from './components/CookieBanner/CookieBanner';
import { AppLoader } from './components/AppLoader';
import { TranslationLoader } from './components/TranslationLoader';
import { useAppLoading } from './hooks/useAppLoading';
import { useTranslations } from './hooks/useTranslations';
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

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

function App() {
  const { isLoading } = useAppLoading();
  const { isReady: translationsReady, language } = useTranslations();

  // Mostrar loader si la app está cargando o las traducciones no están listas
  const showLoader = isLoading || !translationsReady;

  return (
    <Router>
      <GlobalStyle />
      <AppLoader isVisible={isLoading} />
      <TranslationLoader isVisible={!translationsReady} />
      <ScrollToTop />
      {!showLoader && (
        <AppContainer key={language}>
          <Header />
          <MainContent>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/scualane" element={<Scualane />} />
              <Route path="/enalo" element={<Enalo />} />
              <Route path="/enalo/escualanodeoliva" element={<Escualano />} />
              <Route path="/enalo/aceitecorporal" element={<BodyOil />} />
              <Route path="/about" element={<About />} />
              <Route path="/privacidad" element={<Privacy />} />
              <Route path="/terminos" element={<Terms />} />
              <Route path="/cookies" element={<Cookies />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </MainContent>
          <Footer />
        </AppContainer>
      )}
      <CookieBanner />
    </Router>
  );
}

export default App;
