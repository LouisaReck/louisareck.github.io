import React from "react";
import "./exhale.css";
import Landing from "./Landing";
import Overview from "./Overview";
import Process from "./Process";
import Research from "./Research";
import Usertask from "./usertask";
import Persona from "./Persona";
import Contribution from "./Contribution";
import Evaluation from "./Evaluation";
import Result from "./Result";
import { projectsData } from "../work/Data";

const Exhale = () => {
  const workItem = projectsData.find((item) => item.id === 1);

  return (
    <div>
      <Landing />
      <Overview />
      <Process />
      <Research />
      <Usertask />
      <Persona />
      <Contribution />
      <Evaluation />
      <Result />
    </div>
  );
};

export default Exhale;
