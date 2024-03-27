import React from 'react';
import { useData } from '../../useData';
import './Destination.scss';

const Destination = () => {
  const { destination } = useData();
  const [active, setActive] = React.useState('Moon');
  const containerDivRef = React.useRef<HTMLDivElement | null>(null);
  const imageRef = React.useRef<HTMLImageElement | null>(null);
  React.useEffect(() => {
    setTimeout(() => {
      if (containerDivRef.current) {
        containerDivRef.current.style.opacity = '1';
        containerDivRef.current.style.transform = 'translateX(0)';
      }
    }, 100);
  }, [active]);

  React.useEffect(() => {
    setTimeout(() => {
      if (imageRef.current) {
        imageRef.current.style.opacity = '1';
        imageRef.current.style.transform = 'translateX(0)';
      }
    }, 500);
  }, [active]);

  return (
    <section className="destination">
      <div className="container">
        <h1>
          <span>01</span>Pick your destination
        </h1>
        {destination?.map((item) => (
          <div key={item.name}>
            {active === item.name ? (
              <div className="grid">
                <img
                  key={item.name}
                  src={item.images}
                  alt={item.name}
                  ref={imageRef}
                />
                <div>
                  <nav>
                    <ul>
                      {destination?.map((item) => (
                        <li key={item.name}>
                          <button
                            className={item.name === active ? 'active' : ''}
                            onClick={() => setActive(item.name)}
                          >
                            {item.name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </nav>
                  <div className="text" ref={containerDivRef}>
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                    <div className="info">
                      <p>
                        <span>avg. distance</span>
                        {item.distance}
                      </p>
                      <p>
                        <span>est. travel time</span>
                        {item.travel}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              ''
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Destination;
