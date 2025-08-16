import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Products } from './pages/Products';
import ProductsSimple from './pages/ProductsSimple';
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
              <Route path="/services" element={<Services />} />
              <Route path="/products" element={
                <ErrorBoundary>
                  <Products />
                </ErrorBoundary>
              } />
              <Route path="/products-simple" element={<ProductsSimple />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
