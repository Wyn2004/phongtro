import React, { memo } from 'react';
import { convertLongString } from '../utils/Common/formatLongString';
const SmallItem = ({ image, header, price, createAt }) => {
  return (
    <div className="w-full flex border-b py-2 gap-2  cursor-pointer">
      <img src={image} alt="preview" className="w-[65px] h-[65px] object-cover" />
      <div className="flex flex-col justify-between flex-1">
        <h3 className="text-md text-blue-600">{convertLongString(header, 40)}</h3>
        <div className="flex justify-between w-full items-end ">
          <span className="text-[12px] font-semibold text-green-500">{price}</span>
          <span className="text-[10px] font-semibold text-gray-400">{createAt}</span>
        </div>
      </div>
    </div>
  );
};

export default memo(SmallItem);
