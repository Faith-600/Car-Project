import React,{useState} from "react";
import testimonialsData from "./TestimonialData";
import useWindowSize from "./useWindowSize";


const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const { width } = useWindowSize();

       const getCardsPerPage = () => {
        if (width > 1024) return 3;
        if (width > 600) return 2;
        return 1;
    };

    const cardsPerPage = getCardsPerPage();
    const totalCards = testimonialsData.length;
    const maxIndex = Math.max(0, totalCards - cardsPerPage);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => Math.min(maxIndex, prevIndex + 1));
    };

     const slideTransform = `translateX(-${currentIndex * (100 / cardsPerPage)}%)`;

    const isScrollable = width <= 600;

    return (
        <div className="testimonials-section">
            <div className="testimonials-header">
                <h2>What Our Customers Say</h2>
                <p>Don't just take our word for it. See what our satisfied customers have to say about their Eliacars experience.</p>
            </div>
             <div className="slider-container">
                <button onClick={handlePrev} className="slider-btn prev-btn" disabled={currentIndex === 0}>←</button>
                <div className="slider-content">
                    <div className="slider-track" style={!isScrollable ? { transform: slideTransform } : {}}>
                        {testimonialsData.map((testimonial) => (
                            <div key={testimonial.id} className="testimonial-card" style={{ flexBasis: `calc(100% / ${cardsPerPage} - 20px)` }}>
                                <div className="card-header">
                                    <img src={testimonial.image} alt={testimonial.name} className="customer-photo" />
                                    <div className="customer-info">
                                        <h4>{testimonial.name}</h4>
                                        <p>{testimonial.location}</p>
                                        <div className="stars">{'★'.repeat(testimonial.rating)}{'☆'.repeat(5 - testimonial.rating)}</div>
                                    </div>
                                    <span className="quote-icon">”</span>
                                </div>
                                <p className="testimonial-text">{testimonial.text}</p>
                                <a href="#car" className="testimonial-link">{testimonial.link}</a>
                            </div>
                        ))}
                    </div>
                </div>
                <button onClick={handleNext} className="slider-btn next-btn" disabled={currentIndex >= maxIndex}>→</button>
            </div>
        </div>
    );
};

export default Testimonials;