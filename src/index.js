/*
 *param
 */
import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import {Main} from './routers'
import 'normalize.css/normalize.css'
import './style/dist/index.css'

class Nav extends React.Component {
    render() {
        return (
            <div className="main-nav">
                <Link to="/">home</Link>
                <Link to="/list">list</Link>
                <Link to="/user">user</Link>
            </div>
        )
    }
}

ReactDOM.render(
    <Router>
        <div className="wrapper">
            <Switch>
                <Route exact path="/" component={Main}/>
            </Switch>
            <Nav/>
        </div>
    </Router>,
    document.getElementById('root')
);