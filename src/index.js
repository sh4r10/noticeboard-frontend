import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

const run = async () =>{
  let sw = await navigator.serviceWorker.register("./serviceWorker.js");
  console.log(sw);
}

run();