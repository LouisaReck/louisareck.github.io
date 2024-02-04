import React from 'react'
import "./bookit.css"
import { projectsData } from '../work/Data'; 
import Landing from '../bookit/Landing';
import Overview from '../bookit/Overview';
import Process from './Process';
import Result from './Result';


const Bookit = () => {
    const workItem = projectsData.find((item) => item.id === 2); 
  return (
    <div>
      <Landing />
      <Overview />
      <Process />
      <Result />
    </div>
  )
}

export default Bookit
