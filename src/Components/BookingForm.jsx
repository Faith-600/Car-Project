import React from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { SlCalender } from "react-icons/sl";


const BookingForm = () => {
  return (
    <div className="booking-section">
      <div className="booking-container">
        <h2>Prenota l'auto dei tuoi sogni</h2>
        <form className="form-grid">
          {/* Row 1 */}
          <div className="form-field">
            <label htmlFor="pickup-location">Luogo di ritiro</label>
            <div id="pickup-location" name="pickup-location" className='location-icon'>
              <option>Seleziona la posizione</option>
              <IoIosArrowDown  className='arrow-icon'/></div>
          </div>
          <div className="form-field">
            <label htmlFor="dropoff-location">Luogo di riconsegna</label>
            <div id="dropoff-location" name="dropoff-location" className='location-icon'>
              <option>Seleziona la posizione</option>
              <IoIosArrowDown  className='arrow-icon'/>
               </div>
          </div>
          <div className="form-field">
            <label htmlFor="pickup-date">Data di ritiro</label>
            <div className="date-input-wrapper" >
              <input id="pickup-date" type="text" placeholder="dd/mm/yyyy"  />
              <SlCalender className='arrow-icon' />
            </div>
          </div>
          {/* Row 2 */}
          <div className="form-field">
            <label htmlFor="return-date">Data di ritorno</label>
            <div className="date-input-wrapper">
              <input id="return-date" type="text" placeholder="dd/mm/yyyy" />
               <SlCalender className='arrow-icon'/>
            </div>
          </div>
          <div className="form-field">
            <label htmlFor="vehicle-type">Tipo di veicolo</label>
            <div id="vehicle-type" name="vehicle-type" className='location-icon'>
              <option>Seleziona il tipo</option>
              <IoIosArrowDown  className=' arrow-icon' />
          </div>
          </div>
          <div className="form-field">
            <label htmlFor="full-name">Nome e cognome</label>
            <input id="full-name" type="text" placeholder='Inserisci il tuo nome' className='one'/>
          </div>
          {/* Row 3 */}
          <div className="form-field">
            <label htmlFor="email">E-mail</label>
            <input id="email" type="email" placeholder='eliacar@gmail.com' className='one' />
          </div>
          <div className="form-field">
            <label htmlFor="phone">Telefono</label>
            <input id="phone" type="tel" className='one' />
          </div>
          {/* Submit Button */}
          <div className="form-field submit-field">
            <button type="submit" className="search-btn">Cerca le auto disponibili</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;