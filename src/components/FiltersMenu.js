//import react-icons 
import React from "react";
import { MdExpandMore, MdExpandLess } from "react-icons/md"; 

const FiltersMenu = (props) => {

  return (
    <div className="flex flex-col w-full p-4 rounded-md bg-black">
      <button id="filters-dropdown-btn" className="flex justify-between" onClick={props.toggleFiltersMenu}>
        <span>Filters</span>
        {props.filtersMenuOpen ? <MdExpandLess size={25}/> : <MdExpandMore size={25} />}
      </button>
      <div id="filters-dropdown-content" className={`${props.filtersMenuOpen ? "flex flex-col" : "hidden"}`}>
        <p>Placeholder</p>
        <p>Placeholder</p>
        <p>Placeholder</p>
        <p>Placeholder</p>
      </div>
    </div>
  );
};

export default FiltersMenu;