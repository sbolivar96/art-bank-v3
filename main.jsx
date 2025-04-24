
import React from 'react';
import ReactDOM from 'react-dom/client';
import UserAnalytics from './UserAnalytics.jsx';
import CatAtGreatWall from './CatAtGreatWall.jsx';

const App = () => {
  const pathname = window.location.pathname;
  if (pathname === '/cat-at-great-wall') {
    return <CatAtGreatWall />;
  }
  return <UserAnalytics />;
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
