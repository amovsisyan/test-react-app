import React, { useEffect } from 'react';
import { advertisements_getAll } from '../services/http/mainApi';

export const App: React.FC<unknown> = () => {
  const getAdvertisements = async () => {
    const res = await advertisements_getAll();
    console.log(res);
  };

  useEffect(() => {
    getAdvertisements();
  }, []);

  return (
    <div>
      Hello world
    </div>
  );
};
