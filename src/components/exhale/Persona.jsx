import React from "react";
import personas from "../../assets/personas.png"

const Persona = () => {
  return (
    <section className="persona container section">
      <h2 className="section__title-small">Storyboard & Personas</h2>
      <span className="section__subtitle">For the primary user group</span>
      <img src={personas} alt="" />
    </section>
  );
};

export default Persona;
