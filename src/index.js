import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeContextProvider } from "./context/DarkTheme";
import { App } from './components/App/App';
import './generals.css';

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
