import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './router';
import { StyledEngineProvider } from '@mui/material/styles';

ReactDOM.createRoot(document.querySelector("#root")).render(
  <StyledEngineProvider injectFirst>
   <Router />
  </StyledEngineProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
