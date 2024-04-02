import React from 'react';
import { projectsData } from "../work/Data";
import "./starbucks.css"
import Landing from './Landing';
import Overview from './Overview';
import Process from './Process';
import Result from './Result';

const Starbucks = () => {
    const workItem = projectsData.find((item) => item.id === 8);
  return (
    <div>
        <Landing />
        <Overview />
        <Process />
        <Result />
      
    </div>
  )
}

export default Starbucks
