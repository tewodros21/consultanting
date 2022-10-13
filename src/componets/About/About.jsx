
import React from 'react'
import { useLocation } from 'react-router-dom'

function About(props) {
  const locatioin = useLocation();
  const data = locatioin.state?.data
  return (
    <div>About
      
      {data.map((datas) => (

      <div key={datas.id}>
      <h1>{datas.name}</h1>
      <h2>{datas.title}</h2>
      <h3>{datas.passportnum}</h3>
      <h4>{datas.email}</h4>
 
      </div>
      ))}
    </div>
  )
}

export default About