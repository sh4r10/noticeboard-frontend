import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';


const subscribe = async () => {
  let sw = await navigator.serviceWorker.ready;
  let push = await sw.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: "BGZpPKao_Ys-a6IwmeITyD5j2oqH3Oc74c3BbaEOeJ94Lm7pusHcepolWmrkWBJ9pVWuO0J6hCJ4-41uqbA79nQ"
    })
    console.log(JSON.stringify(push));
}

window.onload = async () => {
  let sw = await navigator.serviceWorker.register("serviceWorker.js");
}
  
  ReactDOM.render(
    <React.StrictMode>
      <App subscribe={subscribe}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
