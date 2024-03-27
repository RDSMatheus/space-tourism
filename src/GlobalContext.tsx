import React from 'react';
import { crewData, destinationData } from './variables';

interface IContext {
  destination: null | IDestination[];
  crew: null | ICrew[];
}

export interface IDestination {
  name: string;
  description: string;
  images: string;
  travel: string;
  distance: string;
}

export interface ICrew {
  name: string;
  images: string;
  role: string;
  bio: string;
}

export const Context = React.createContext<IContext | null>(null);

export const ContextProvider = ({ children }: React.PropsWithChildren) => {
  const [destination, setDestination] = React.useState<IDestination[] | null>(
    null,
  );
  const [crew, setCrew] = React.useState<ICrew[] | null>(null);

  React.useEffect(() => {
    setDestination(destinationData);
    setCrew(crewData);
  }, []);

  return (
    <Context.Provider value={{ destination, crew }}>
      {children}
    </Context.Provider>
  );
};
