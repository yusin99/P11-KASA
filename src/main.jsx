import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/home';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

import './utils/style/styles.css';
import { Lodging } from './pages/Lodging/lodging';
import { About } from './pages/About/about';
import { Error } from './components/Error/Error';

// Render the app in the root element
ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/lodging/:id' element={<Lodging />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<Error />} />
        </Routes>
        <Footer />
    </Router>
  </StrictMode>
);
