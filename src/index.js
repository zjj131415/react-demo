/*
 *param
 */
import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Home, List} from './routers'
import 'normalize.css/normalize.css'
import './style/dist/index.css'

ReactDOM.render(
    <Router>
        <div className="wrapper">
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/list" component={() => <div>list</div>}/>
                <Route path="/listhh" component={() => <div>user</div>}/>
                <Route component={({location}) => <div>no match from{location.pathname}</div>}/>
            </Switch>
        </div>
    </Router>,
    document.getElementById('root')
);