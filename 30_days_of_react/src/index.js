import React from 'react'
import { render } from 'react-dom'
import { isPrime } from 'mathjs'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

const rootElement = document.getElementById('root')
const green = "#21BF73"
const yellow = "#FDDB3A"
const red = "#FD5E53"

function assignColor(index){
  let color
  if (index %2 !== 0) {
    color = yellow
  } else if (index %2 === 0) {
    color = green
  }
  if (isPrime(index)) {
    color = red
  }
  return color
}

function createSquares(){
  const squares = []
  for (let i=0; i<32;i++) {
    const color = assignColor(i)
    squares.push(
      <Link to={"/day/" + i}><Square color={color} number={i}/></Link>
    )
  }
  return squares
}

const Header = () => (
    <header>
      <Link to="/">
        <h1>30 Days of React</h1>
      </Link>
      <h2>Clic on the day you want to have a look on :</h2>
    </header>
  )

const Square = (props) => (
  <div style={{ width: 50, height: 50, backgroundColor: props.color, marginRight: "1px", marginBottom: "1px", display:"flex", alignItems:"center", justifyContent:"center" }}>
    <div style={{ color:"white" }}>{props.number}</div>
  </div>
)

const Squares = (props) => (
  <div className="squares-group" style={{ display:"flex", flexWrap:"wrap", width: 408 }}>
    { createSquares() }
  </div>
)
// comment accéder aux props de Square pour chopper la width dans Squares ?

const App = () => (
  <>
  <Router >
    <Header>
      <Route path="/"/>
    </Header>
      <Switch >
        <Squares>
          <Route path="/day"/>
        </Squares>
      </Switch>
    </Router>
  </>
)

render(<App />, rootElement)
