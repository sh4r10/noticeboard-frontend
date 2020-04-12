import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';

if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
  window.addEventListener('load', function() {
      navigator.serviceWorker.register('/serviceWorker.js');
  });
}
  
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
