import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import ClassComponent from './ClassComponent';
import ClassComponentButton from './ClassComponentButton';


export default function FunctionalComponent() {

    return (
        <Router>
            <div>
                <nav >
                    <ul className="list-group">
                        <li className="list-group-item">
                            <Link to="/home">Home</Link>
                        </li>
                        <li className="list-group-item">
                            <Link to="/about">About</Link>
                        </li>
                        <li className="list-group-item">
                            <Link to="/users">Users</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/home">
                   
                        <Home /> {/* Με αυτό τραβάει το component που έχει το function Home */}
                    </Route>
                    <Route path="/about">
                        <About /> {/* Με αυτό τραβάει το component που έχει το function About */}
                    </Route>
                    <Route path="/users">
                        <Users /> {/* Με αυτό τραβάει το component που έχει το function Users */}
                    </Route>

                </Switch>




            </div>
        </Router>

    )
}

function Home() {
    return <div><ClassComponentButton/></div>;
}

function About() {
    return <div><ClassComponent/></div>;
}

function Users() {
    return <h2 className="ml-3">Users</h2>;
}