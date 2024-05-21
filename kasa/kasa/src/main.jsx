import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/home';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

import './utils/style/styles.css';

// Render the app in the root element
ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Footer />
    </Router>
  </StrictMode>
);
