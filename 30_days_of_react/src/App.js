import React from 'react'
import Home from './home'
import Day from './days/Day'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom'

function Header() {
  return (
    <header>
      <Link to={"/"}>
        <h1>30 Days of React</h1>
      </Link>
      <h2>Clic on the day you want to have a look on :</h2>
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
      </Switch>
    </Router>
    </>
  )
}
