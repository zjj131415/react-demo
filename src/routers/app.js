import React from 'react'
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom'
import {Home, List, Discover, Vehicle, Me} from './'

const MeLink = (props) => (
  <NavLink exact activeClassName="active" className="link" to={props.href}>
    <i className={`icon icon-${props.icon}`}/>
    <p>{props.title}</p>
  </NavLink>
);

export class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="page-wrapper">
          <Route exact path="/" component={Home}/>
          <Route path="/list" component={List}/>
          <Route path="/Discover" component={Discover}/>
          <Route path="/vehicle" component={Vehicle}/>
          <Route path="/me" component={Me}/>
          <footer className="main-footer bdr-top bdr-btm">
            <nav className="main-nav">
              <MeLink icon="home" title="首页"  href="/" />
              <MeLink icon="fenlei" title="分类"  href="/list" />
              <MeLink icon="faxian" title="发现"  href="/Discover" />
              <MeLink icon="shoppingcart" title="购物车"  href="/vehicle" />
              <MeLink icon="me" title="我的"  href="/me" />
            </nav>
          </footer>
        </div>
      </Router>
    )
  }
}