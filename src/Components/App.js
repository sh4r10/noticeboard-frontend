import React, {useState} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootswatch/dist/litera/bootstrap.min.css";
import "../css/App.css";

import Login from "./Login";
import NotesView from "./NotesView";
import Navbar from "./Navbar";
import CreateNote from "./CreateNote"
import EditNote from "./EditNote";

function App() {
  const [loggedIn, setLogin] = useState(sessionStorage.getItem("token") ? true : false);
  // const Host = "https://backend.sh4r10.design";
  const Host = "http://localhost:5000";

  const subscribe = async () => {
    let sw = await navigator.serviceWorker.ready;
    let push = await sw.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: "BGZpPKao_Ys-a6IwmeITyD5j2oqH3Oc74c3BbaEOeJ94Lm7pusHcepolWmrkWBJ9pVWuO0J6hCJ4-41uqbA79nQ"
    })
    console.log(JSON.stringify(push));
  }

  return (
    <Router>
      {loggedIn ? <Navbar /> : null}
      <button onClick={subscribe}>Notifications on!</button>
      <div className="container">
        <Route path="/" exact render={() => <NotesView host={Host} loggedIn={loggedIn}/>}/>
        <Route path="/login" exact render={()=> <Login host={Host} setLogin={setLogin}/>}/>
        <Route path="/create" exact render={()=> <CreateNote setLogin={setLogin} host={Host}/>}/>
        <Route path="/edit/:id" render={()=> <EditNote setLogin={setLogin} host={Host}/>}/>
      </div>
      <footer><p>Created By <a href="https://github.com/sh4r10" rel="noopener noreferrer" target="_blank">sh4r10</a>. All Rights Reserved.</p></footer>
    </Router>
  );
}

export default App;
