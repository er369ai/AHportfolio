import React from 'react';
import ReactDOM from 'react-dom/client';
import AHTechworldPortfolio from '../react/AHTechworldPortfolio';

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <AHTechworldPortfolio />
    </React.StrictMode>
  );
}
