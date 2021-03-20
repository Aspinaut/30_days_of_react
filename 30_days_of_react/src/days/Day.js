import React from 'react'
import { useParams } from 'react-router-dom'
import Day1 from './day1'
import Day2 from './day2'
import Day3 from './day3'
import Day4 from './day4'
import Day5 from './day5'
import Day6 from './day6'
import Day7 from './day7'
import Day8 from './day8'
import Day9 from './day9'

const days = [
  {id: 1, page: <Day1 id="1"/>, exercices: false},
  {id: 2, page: <Day2 id="2"/>, exercices: false},
  {id: 3, page: <Day3 id="3"/>, exercices: false},
  {id: 4, page: <Day4 id="4"/>, exercices: false},
  {id: 5, page: <Day5 id="5"/>, exercices: false},
  {id: 6, page: <Day6 id="6"/>, exercices: false},
  {id: 7, page: <Day7 id="7"/>, exercices: false},
  {id: 8, page: <Day8 id="8"/>, exercices: false},
  {id: 9, page: <Day9 id="9"/>, exercices: false},
]

export default function Day() {
    const { id } = useParams()
    return (
      <>
        { days[id-1].page }
      </>
    )
}
