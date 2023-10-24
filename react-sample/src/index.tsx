import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Name from './components/Name';
import Message from './Message';
import Parent from './ContainerSample';
import Page from './ContextSample';
import { FizzBuzz } from './Parent';
import { Counter } from './Counter';
import { UseMemoSample } from './UseMemoSample';
import { Clock } from './Clock';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React>
    <Clock/>
  // </React>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
