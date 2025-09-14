import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from './app/contexts/ThemeContext.tsx';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Profile } from './app/components/contacts/profile.tsx';

// Page components
const About = () => <h2>Пра нас</h2>;
const NotFound = () => <h2>404: Старонка не знойдзена</h2>;
const Contacts = React.lazy(() =>
  import('./app/components/contacts/contacts.tsx').then(module => ({ default: module.Contacts }))
);
const App = React.lazy(() => import('./app/App.tsx'));

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
          <Suspense fallback={<img src="/loading_snail.gif" alt="Loading..." />}>
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/about" element={<About />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/profile/:id" element={<Profile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </ThemeProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
} else throw new Error('Root container not found');

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
