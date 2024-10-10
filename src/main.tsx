import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

console.log('main: Starting to render the app');
console.log('main: App import:', App);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {console.log('main: Rendering App component')}
    <App />
    {console.log('main: Finished rendering App component')}
  </React.StrictMode>
);

console.log('main: Finished setting up the render');