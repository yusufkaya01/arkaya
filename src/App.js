import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Products } from './pages/Products';
import { Contact } from './pages/Contact';
import ErrorBoundary from './components/ErrorBoundary';
import { GlobalStyles } from './styles/GlobalStyles';
import { theme } from './styles/theme';
import './i18n';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <div className="App">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={
                <ErrorBoundary>
                  <Products />
                </ErrorBoundary>
              } />
              <Route path="/contact" element={<Contact />} />
              {/* Kaldırılan sayfalar için eski bağlantılar ürünlere yönlensin */}
              <Route path="/services" element={<Navigate to="/products" replace />} />
              <Route path="/products-simple" element={<Navigate to="/products" replace />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
