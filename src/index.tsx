import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from './app/contexts/ThemeContext.tsx';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import App from './app/App.tsx';
import { Contacts } from './app/components/contacts/contacts.tsx';
import { Profile } from './app/components/contacts/profile.tsx';

// Page components
const Main = () => <App />;
const About = () => <h1>Пра нас</h1>;
const NotFound = () => <h1>404: Старонка не знойдзена</h1>;

const container = document.getElementById('root');

if (container) {
  const root = ReactDOM.createRoot(container);

  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <ThemeProvider>
          <nav style={{ padding: '1rem' }}>
            <Link to="/">Main</Link> |{' '}
            <Link to="/about">About</Link> |{' '}
            <Link to="/contacts">Contacts</Link>
          </nav>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
} else throw new Error('Root container not found');

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
