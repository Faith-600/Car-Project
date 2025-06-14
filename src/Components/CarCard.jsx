import React from 'react';

const CarCard = ({ image, category, name, price, specs }) => {
  return (
    <div className="car-card">
      <img src={image} alt={name} className="car-card-img" />
      <div className="car-card-info">
        <div className="car-card-header">
          <span className="car-category">{category}</span>
          <span className="car-price">{price}</span>
        </div>
        <h3 className="car-name">{name}</h3>
        <p className="car-specs">{specs}</p>
        <button className="learn-more-btn">Saperne di più</button>
      </div>
    </div>
  );
};

export default CarCard;