import React from 'react';
import { Context } from './GlobalContext';

export const useData = () => {
  const context = React.useContext(Context);
  if (!context) throw new Error('useData precisa estar em DataContextProvider');
  return context;
};
