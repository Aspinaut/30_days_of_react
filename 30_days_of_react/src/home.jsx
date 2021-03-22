import { Squares, assignHomeColor } from './Square'

export default function Home() {
  return (
    <>
      <h2>Clic on the day you want to have a look on :</h2>
      <Squares days_number={30} colorating_function={assignHomeColor}/>
    </>
  )
}
