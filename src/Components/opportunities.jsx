import React from "react";
import carData from "./carData";
import CarCard from "./CarCard";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";





const Opportunities = () => {
  return (
    <div className="opportunities-section">
      <div className="opportunities-header">
        <span className="header-highlight"></span>
        <h2> <hr className="horizontal-line"/>OPPORTUNITÀ</h2>
        <p>Scopri il nostro stock di veicoli usati</p>
      </div>

      <div className="filter-bar">
        <div className="search-input-wrapper">
           <CiSearch  className="search-icon" size={20}/><input type="text" placeholder="Cerca auto..." className="search-input"></input>
        </div>
        <div className="filter-select">
          <option>Tutti i marchi</option>
          <IoIosArrowDown className="icon" />

        </div>
        <div className="filter-select">
          <option>Tutti i modelli</option>
          <IoIosArrowDown className="icon" />

        </div>
        <div className="filter-select">
          <option>Tutti gli anni</option>
          <IoIosArrowDown  className="icon"/>
          </div>
      </div>

      <div className="car-grid">
        {carData.map((car) => (
          <CarCard
            key={car.id}
            image={car.image}
            category={car.category}
            name={car.name}
            price={car.price}
            specs={car.specs}
          />
        ))}
      </div>

      <button className="view-all-btn">Visualizza tutti i modelli</button>
    </div>
  );
};

export default Opportunities;