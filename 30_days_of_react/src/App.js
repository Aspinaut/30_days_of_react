import React from 'react'
import Home from './home'
import Day from './days/Day'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom'

function NoPageFound() {
  return (
    <h3>404 - Page Not Found</h3>
  )
}

function Header() {
  return (
    <header>
      <Link to={"/"}>
        <h1>30 Days of React</h1>
      </Link>
    </header>
  )
}

export default function App() {
  return (
    <>
    <Router >
      <Header />
      <Switch >
        <Route exact path="/" component={Home}/>
        <Route exact path="/day/:id">
          <Day />
        </Route>
        <Route component={NoPageFound}/>
      </Switch>
    </Router>
    </>
  )
}
