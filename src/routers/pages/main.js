import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

export class Main extends React.Component {
    render() {
        let {match} = this.props;
        return (
            <Router>
                <Switch>
                    <Route exact component={() => <div>home</div>}/>
                    <Route path={`${match.path}list`} component={() => <div>list</div>}/>
                    <Route path="/user" component={() => <div>user</div>}/>
                </Switch>
            </Router>
        )
    }
}