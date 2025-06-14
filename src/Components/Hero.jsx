import React, { useState } from 'react';

// Data for the slider (images and text)
const sliderImages = [
  'car.png',
  'car2.avif',
  'car3.jpeg',
];

const sliderContent = [
    {
        title: "Vivi il lusso su ruote",
        subtitle: "Guida oggi l'auto dei tuoi sogni"
    },
    {
        title: "Prestazioni senza eguali",
        subtitle: "Scopri la nostra collezione selezionata di supercar"
    },
    {
        title: "Pronto per la strada",
        subtitle: "Trova il tuo veicolo perfetto con noi"
    }
];

const Hero = () => {
  // State for the image slider
  const [currentIndex, setCurrentIndex] = useState(0);
  // State for the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // --- Slider Functions ---
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? sliderImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === sliderImages.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  // --- Mobile Menu Function ---
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div 
      className="hero-container" 
      style={{ backgroundImage: `url(${sliderImages[currentIndex]})` }}
    >
      <header className="header">
        <div className="logo">
          <span className="logo-yellow">E</span>LIACARS
        </div>
        
        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul className="nav-links">
            <li><a href="#home">CASA</a></li>
            <li><a href="#models">MODELLI</a></li>
            <li><a href="#renault">RENAULT</a></li>
            <li><a href="#about">CHI SIAMO</a></li>
            <li><a href="#contact">CONTATTO</a></li>
          </ul>
        </nav>

        {/* Hamburger Icon */}
        <button className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      {/* Mobile Navigation Menu */}
      <nav className={`mobile-nav ${isMenuOpen ? 'active' : ''}`}>
        <ul className="mobile-nav-links">
            {/* Clicking a link also closes the menu */}
            <li onClick={toggleMenu}><a href="#home">CASA</a></li>
            <li onClick={toggleMenu}><a href="#models">MODELLI</a></li>
            <li onClick={toggleMenu}><a href="#renault">RENAULT</a></li>
            <li onClick={toggleMenu}><a href="#about">CHI SIAMO</a></li>
            <li onClick={toggleMenu}><a href="#contact">CONTATTO</a></li>
        </ul>
      </nav>

      {/* Hero Content */}
      <div className="hero-content">
        <h1>{sliderContent[currentIndex].title}</h1>
        <p>{sliderContent[currentIndex].subtitle}</p>
        <div className="hero-buttons">
          <button className="btn btn-primary">Prenota un'auto ↓</button>
          <button className="btn btn-secondary">Vendi la tua auto</button>
        </div>
      </div>

      {/* Slider Controls */}
      <div className="slider-navigation">
        <button className="slider-arrow left-arrow" onClick={goToPrevious}>◀</button>
        <button className="slider-arrow right-arrow" onClick={goToNext}>▶</button>
      </div>

      {/* Pagination Dots */}
      <div className="pagination-dots">
        {sliderImages.map((_, slideIndex) => (
          <span
            key={slideIndex}
            className={`dot ${currentIndex === slideIndex ? 'active' : ''}`}
            onClick={() => goToSlide(slideIndex)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Hero;