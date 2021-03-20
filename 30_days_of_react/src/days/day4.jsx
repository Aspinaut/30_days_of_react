import React from 'react'
import logoHTML from './images/logo-html.png'
import logoCSS from './images/logo-css.png'
import logoJS from './images/logo-js.png'
import logoREACT from './images/logo-react.png'

function Logo(props) {
  let logo
  switch (props.className) {
    case "logo-html":
      logo = <img src={logoHTML} alt="imageHTML" width={props.width}/>
      break
    case "logo-css":
      logo = <img src={logoCSS} alt="imageCSS" width={props.width}/>
      break
    case "logo-js":
      logo = <img src={logoJS} alt="imageJS" width={props.width}/>
      break
    case "logo-react":
      logo = <img src={logoREACT} alt="imageREACT" width={props.width}/>
      break
    default:
      logo = <></>
  }
  return logo
}

function Logos() {
  return (
    <div>
      <Logo width="150" className="logo-html"/>
      <Logo width="150" className="logo-css"/>
      <Logo width="150" className="logo-js"/>
      <Logo width="150" className="logo-react"/>
    </div>
  )
}


export default function Day4(props){
  return (
    <>
      <h1>Ici day {props.id}</h1>
      <h3>Exercice 1.1 :</h3>
      <div style={{ textAlign:"center" }}>Front end Technologies</div>
      <Logos />
      <hr/>
    </>
  )
}
