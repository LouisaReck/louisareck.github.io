import React from 'react';
import { projectsData } from "../work/Data";
import Landing from './Landing';
import Overview from './Overview';

const Podcaster = () => {
    const workItem = projectsData.find((item) => item.id === 5);
  return (
    <div>
        <Landing />
        <Overview />
    </div>
  )
}

export default Podcaster
