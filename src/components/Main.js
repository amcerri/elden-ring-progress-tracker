import React from "react";
import FiltersMenu from "./FiltersMenu";

const Main = () => {

  const [filtersMenuOpen, setFiltersMenuOpen] = React.useState(true);

  const toggleFiltersMenu = () => {
    setFiltersMenuOpen(!filtersMenuOpen);
  };

  return (
    <main className="container mx-auto mt-4 mb-auto rounded-md text-white">
      <section id="filters">
        <FiltersMenu filtersMenuOpen={filtersMenuOpen} toggleFiltersMenu={toggleFiltersMenu} />
      </section>
      <article id="checklists" className="flex flex-col p-4 mt-4 rounded-md bg-black">
        <p>Checklists Component</p>
        <section id="checklists--location1" className="flex py-4 mt-4 justify-between bg-neutral-800">
          <p>Location Checklist Component 1</p>
          <p>Open/Close Location</p>
        </section>
      </article>
    </main>
  );
};

export default Main;
