import 'reflect-metadata';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './document';
import ThemeProvider from './Providers/ThemeProvider';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
