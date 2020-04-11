import React, { Component } from "react";
import {Link} from "react-router-dom";
import axios from "axios";

class NotesView extends Component{
    constructor(props){
        super(props);
        this.state = {notes:[]};
    }

    componentDidMount = () =>{
        axios.get(this.props.host + "/notes/")
            .then(response => {
                this.setState({notes: response.data})
            })
            .catch(err => console.log(err));
    }

    render(){
        console.log(this.state.note);
        const noteComponents = this.state.notes.reverse().map(note=>{
            return <Note loggedIn={this.props.loggedIn} note={note} key={note._id}/>
        })
        
        return(
            <div>
                <h2>Recent Notices</h2>
                <div className="list-group">
                    {noteComponents}
                </div>
            </div>
        )
    }
}


const Note = props => {
    return(
        <Link to={props.loggedIn ? `/edit/${props.note._id}` : ""} className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{props.note.heading}</h5>
            <small className="text-muted">{props.note.updatedAt.substring(0,10)}</small>
            </div>
            <p className="mb-1">{props.note.message}</p>
            <small className="text-muted">{props.note.manager}</small>
        </Link>
    )
}

export default NotesView;