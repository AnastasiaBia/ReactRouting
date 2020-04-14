import React from 'react';
import Popup from "reactjs-popup"

export default class ClassComponentButton extends React.Component {

state = {
    // Δηλώνω τη μεταβλητή που μετράει
    count: 0
};

render(){
    // Στο κλικ εκτελείται το function
    return <div className="ml-3"><button className="btn btn-primary" onClick = {this.handleClick}>Click me</button>
    {/* Το εμφανίζω στην παράγραφο */}
    <p>{this.state.count}</p>
    <Popup trigger={<button> Trigger</button>} position="right center">
        <div>Popup content here!</div>
    </Popup>
    </div>
}

// Φτιάχνω ένα arrow function που αυξάνει το state του count κατά ένα
handleClick = () => {
    this.setState({ count: this.state.count+1 }) 
  



}
}