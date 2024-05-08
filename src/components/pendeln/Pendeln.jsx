import React from 'react'
import "./pendeln.css"
import { projectsData } from '../work/Data'; 
import Landing from './Landing';
import Overview from './Overview';
import Process from './Process';
import Result from './Result';





const Pendeln = () => {
    const workItem = projectsData.find((item) => item.id === 7); 
  return (
    <div>
      <Landing />
      <Overview />
      <Process />
      <Result />
    </div>
  )
}

export default Pendeln