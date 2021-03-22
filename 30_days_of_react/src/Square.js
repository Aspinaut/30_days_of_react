import React from 'react'
import {isPrime} from 'mathjs'
import { Link } from 'react-router-dom'

const green = "#21BF73"
const yellow = "#FDDB3A"
const red = "#FD5E53"

function assignHomeColor(index){
  let color = green

  return color
}

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

function createSquares(number, putColor){
  const squares = []
  for (let i=1; i<=number;i++) {
    squares.push(
      <Link to={"/day/" + i}><Square color={putColor(i)} number={i}/></Link>
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

export default function Squares(props) {
  return (
    <div className="squares-group" style={{ display:"flex", flexWrap:"wrap", width: 408 }}>
      { createSquares(props.days_number, props.colorating_function) }
    </div>
  )
}

export {
  Squares,
  assignColor,
  assignHomeColor,
}
