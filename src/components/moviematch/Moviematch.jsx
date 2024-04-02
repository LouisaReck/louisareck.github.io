import React from 'react';
import Landing from './Landing';
import { projectsData } from "../work/Data";
import Overview from './Overview';

const Moviematch = () => {
    const workItem = projectsData.find((item) => item.id === 9);
  return (
    <div>
        <Landing />
        <Overview />
    </div>

  )
}

export default Moviematch
