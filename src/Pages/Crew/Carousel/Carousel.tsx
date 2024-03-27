import React from 'react';
import { ICrew } from '../../../GlobalContext';
import './Carousel.scss';

const Carousel = ({ content }: { content: ICrew[] }) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [position, setPosition] = React.useState(0);
  const [activeSlide, setActiveSlide] = React.useState(0);

  React.useEffect(() => {
    if (carouselRef.current) {
      const { width } = carouselRef.current.getBoundingClientRect();
      const translate = activeSlide * width;
      setPosition(-translate);
    }
  }, [activeSlide]);

  function handleNext() {
    const isMaxSlide = content.length - 1 === activeSlide;
    if (!isMaxSlide) {
      setActiveSlide(activeSlide + 1);
    } else {
      setActiveSlide(0);
    }
  }

  function handleBack() {
    if (activeSlide > 0) {
      setActiveSlide(activeSlide - 1);
    } else {
      setActiveSlide(content.length - 1);
    }
  }

  function handleSlideIndex(index: number) {
    setActiveSlide(index);
  }

  return (
    <div className="carousel" ref={carouselRef}>
      <div
        className="carousel-wrapper"
        style={{ transform: `translateX(${position}px)` }}
      >
        {content.map((member) => (
          <div key={member.name} className="carousel-grid">
            <div>
              <h3>{member.role}</h3>
              <h2>{member.name}</h2>
              <p>{member.bio}</p>
            </div>
            <div>
              <img src={member.images} alt={member.name} />
            </div>
            <nav className="slide-controls">
              <button onClick={handleBack}></button>
              <button onClick={handleNext}></button>
            </nav>
          </div>
        ))}
      </div>
      <nav className="slide-index">
        <ul></ul>
        {content.map((item, index) => (
          <li>
            <button
              onClick={() => handleSlideIndex(index)}
              style={{
                background: `${activeSlide === index ? '#fff' : '#383941'}`,
              }}
            ></button>
          </li>
        ))}
      </nav>
    </div>
  );
};

export default Carousel;
