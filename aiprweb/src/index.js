import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import ScrollToTop from './ScrollToTop/ScrollToTop';  // ScrollToTop 컴포넌트를 임포트합니다.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <ScrollToTop />  {/* ScrollToTop 컴포넌트를 Router 내부에 추가 */}
      <App />
    </Router>
  </React.StrictMode>
);

reportWebVitals();