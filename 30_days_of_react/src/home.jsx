import { isPrime } from 'mathjs'
import { Link } from 'react-router-dom'

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

function Square(props) {
  return (
    <div style={{ width: 50, height: 50, backgroundColor: props.color, marginRight: "1px", marginBottom: "1px", display:"flex", alignItems:"center", justifyContent:"center" }}>
      <div style={{ color:"white" }}>{props.number}</div>
    </div>
  )
}

function Squares() {
  return (
    <div className="squares-group" style={{ display:"flex", flexWrap:"wrap", width: 408 }}>
      { createSquares() }
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Squares />
    </>
  )
}
