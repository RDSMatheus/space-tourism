import React from 'react';
import { useData } from '../../useData';
import './Destination.scss';

const Destination = () => {
  const { destination } = useData();
  const [active, setActive] = React.useState('Moon');

  console.log(active);

  console.log(destination);

  return (
    <section className="destination">
      <div className="container">
        <h1>
          <span>01</span>Pick your destination
        </h1>
        {destination?.map((item) => (
          <div>
            {active === item.name ? (
              <div className="grid">
                <img key={item.name} src={item.images} alt={item.name} />
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
