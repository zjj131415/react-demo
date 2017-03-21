import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
export class Main extends React.Component {
    render() {
        return (
            <Router>
                <div className="wrapper">
                    <header className="com-header">
                        <nav className="">
                            <ul>
                                <li></li>
                            </ul>
                        </nav>
                    </header>
                    <Route exact path="/" component={() => <div>home</div>}/>
                    <Route path="/user" component={() => <div>user</div>}/>
                </div>
            </Router>

        )
    }
}