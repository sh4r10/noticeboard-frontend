import React, {useState} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootswatch/dist/litera/bootstrap.min.css";
import "../css/App.css";

import Login from "./Login";
import NotesView from "./NotesView";
import Navbar from "./Navbar";
import CreateNote from "./CreateNote"
import EditNote from "./EditNote";

function App(props) {
  const [loggedIn, setLogin] = useState(sessionStorage.getItem("token") ? true : false);
  // const Host = "https://backend.sh4r10.design";
  const Host = "http://localhost:5000";

  return (
    <Router>
      {loggedIn ? <Navbar /> : null}
      <button onClick={props.subscribe}>Notifications on!</button>
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
