import React from 'react'
import logoHTML from './images/logo-html.png'
import logoCSS from './images/logo-css.png'
import logoJS from './images/logo-js.png'
import logoREACT from './images/logo-react.png'

function Logo(props) {
  return <img src={props.src} alt={props.className} width={props.width}/>
}

function Logos() {
  return (
    <div style={{ display:"flex", justifyContent:"center"}}>
      <Logo width="150" className="logoHTML" src={logoHTML}/>
      <Logo width="150" className="logoCSS" src={logoCSS}/>
      <Logo width="150" className="logoJS" src={logoJS}/>
      <Logo width="150" className="logoREACT" src={logoREACT}/>
    </div>
  )
}

function Subscribe() {
  return (
    <div style={{ display: "flex" }}>
      <h1>SUBSCRIBE</h1>
      <p>Sign up with your email to receive news and updates</p>
      <div style={{ display: "flex" }}>
        <form action="">
          <input type="text" placeholder="First name"/>
          <input type="text" placeholder="Last name"/>
          <input type="text" placeholder="Email"/>
          <input type="submit"/>
        </form>
      </div>
    </div>
  )
}
// hexacolor generator from Asabeneh
const hexaColor = () => {
  let str = '0123456789abcdef'
  let color = ''
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color
}

function RandomHexaColor(props) {
  return (
    <div style={{ width: 1000, height: 50, backgroundColor: props.color }}>
      <p style={{ textAlign: "center" }}>{props.color}</p>
    </div>
  )
}

const RandomHexaColors = () => {
  return (
    <div style={{ display:"flex", flexDirection: "column", alignItems: "center"}}>
      <RandomHexaColor color={hexaColor()}/>
      <RandomHexaColor color={hexaColor()}/>
      <RandomHexaColor color={hexaColor()}/>
      <RandomHexaColor color={hexaColor()}/>
      <RandomHexaColor color={hexaColor()}/>
    </div>
  )
}

export default function Day4(props){
  return (
    <>
      <h1>Ici day {props.id}</h1>
      <h3>Exercice 2.1 :</h3>
      <p style={{ textAlign:"center" }}>Front end Technologies</p>
      <Logos />
      <hr/>
      <h3>Exercice 2.2 :</h3>
      <Subscribe />
      <hr/>
      <h3>Exercice 3.1 :</h3>
      <RandomHexaColors />
    </>
  )
}
