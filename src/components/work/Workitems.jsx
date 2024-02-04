import React from "react";
import { NavLink } from "react-router-dom";
import Work from "./Work";

const Workitems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <NavLink to={`/work/${item.id}`} className="work__img-link">
        <img src={item.image} alt="" className="work__img" />
      </NavLink>
      <h3 className="work__title">{item.title}</h3>
      {/* <span className="work__subtitle">{item.subtitle}</span> */}
      {/* <div className="work__category">{item.category}</div> */}
      <NavLink className="work__button" to={`/work/${item.id}`}>
        Read more <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </NavLink>
    </div>

    
  );
};

export default Workitems;

