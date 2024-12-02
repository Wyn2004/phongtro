import React from 'react';
import { location } from '../utils/constant';
import { ProvincesButton } from './index';

const Provinces = () => {
  return (
    <div className="flex gap-5 justify-center items-center pb-5">
      {location.map(item => {
        return <ProvincesButton key={item.id} name={item.name} image={item.image} />;
      })}
    </div>
  );
};

export default Provinces;
