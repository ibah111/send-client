import 'reflect-metadata';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './document';
import ThemeProvider from './Providers/ThemeProvider';
import moment from 'moment';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
moment.tz.setDefault('GMT');
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
