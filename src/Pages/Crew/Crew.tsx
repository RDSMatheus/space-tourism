import React from 'react';
import { useData } from '../../useData';
import Carousel from './Carousel/Carousel';
import './Crew.scss';

const Crew = () => {
  const { crew } = useData();
  return (
    <section className="container crew-bg">
      <h1>
        <span>02</span>Meet your crew
      </h1>
      {crew && <Carousel content={crew} />}
    </section>
  );
};

export default Crew;
