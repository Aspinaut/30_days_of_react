import { isPrime } from 'mathjs'
import { Link } from 'react-router-dom'

const green = "#21BF73"
const yellow = "#FDDB3A"
const red = "#FD5E53"

function assignColor(index, comesFrom){
  let color
  if (comesFrom === "day6"){
    if (index %2 !== 0) {
      color = yellow
    } else if (index %2 === 0) {
      color = green
    }
    if (isPrime(index)) {
      color = red
    }
  } else {
    color = green
  }
  return color
}

function createSquares(comesFrom){
  const squares = []
  for (let i=1; i<31;i++) {
    const color = assignColor(i, comesFrom)
    squares.push(
      <Link to={"/day/" + i}><Square color={color} number={i}/></Link>
    )
  }
  return squares
}

function Square(props) {
  return (
    <div style={{ width: 50, height: 50, backgroundColor: props.color, marginRight: "1px", marginBottom: "1px", display:"flex", alignItems:"center", justifyContent:"center" }}>
      <div style={{ color:"white" }}>{props.number}</div>
    </div>
  )
}

function Squares(props) {
  return (
    <div className="squares-group" style={{ display:"flex", flexWrap:"wrap", width: 408 }}>
      { createSquares(props.comesFrom) }
    </div>
  )
}

export default function Day6(props){
  return (
    <>
      <h1>Ici day {props.id}</h1>
      <hr/>
      <h3>Exercice 2.1 :</h3>
      <Squares comesFrom="day6"/>
      <hr/>
      <h3>Exercice 2.2 :</h3>
    </>
  )
}

export {
  Squares,
  Day6
}
