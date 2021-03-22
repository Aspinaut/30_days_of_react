import { Squares, assignColor, assignRandomColor } from '.././Square'

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
    </>
  )
}
