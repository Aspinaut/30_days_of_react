import { Squares, assignColor, assignRandomColor } from '.././Square'

const tenHighestPopulation = [
  { country: 'World', population: 7693165599 },
  { country: 'China', population: 1377422166 },
  { country: 'India', population: 1295210000 },
  { country: 'United States of America', population: 323947000 },
  { country: 'Indonesia', population: 258705000 },
  { country: 'Brazil', population: 206135893 },
  { country: 'Pakistan', population: 194125062 },
  { country: 'Nigeria', population: 186988000 },
  { country: 'Bangladesh', population: 161006790 },
  { country: 'Russian Federation', population: 146599183 },
  { country: 'Japan', population: 126960000 },
]

function graphBar(number){
  const max = 7693165599;
  let width = (number/max)*1000
  return (
    <div style={{ backgroundColor: "#FFA500", width: width, height: "30px", borderRadius: "4px" }}>
    </div>
  )
}

function displayCountries(){
  const countries = []
  for (let country of tenHighestPopulation){
    countries.push(
      <li style={{ listStyle: "none" }}>{country.country} {graphBar(country.population)} {country.population}</li>
    )
  }
  return countries
}

export default function Day6(props){
  return (
    <>
      <h1>Ici day {props.id}</h1>
      <hr/>
      <h3>Exercice 2.1 :</h3>
      <h5>Number Generator</h5>
      <Squares days_number={32} colorating_function={assignColor}/>
      <hr/>
      <h3>Exercice 2.2 :</h3>
      <h5>Hexadecimal Colors</h5>
      <Squares days_number={32} colorating_function={assignRandomColor}/>
      <hr/>
      <h3>Exercice 3 :</h3>
      <h5>World population</h5>
      <p>Ten most populated countries</p>
      <div style={{ display:"flex" }}>
        <ul>
          { displayCountries() }
        </ul>
      </div>
    </>
  )
}
