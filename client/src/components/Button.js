import React, { memo } from 'react';

const Button = ({ text, textColor, bgColor, IcAfter, onClick, fullWidth, customStyle }) => {
  return (
    <button
      type="button"
      className={`${customStyle} p-2 ${textColor} ${bgColor} ${
        fullWidth && 'w-full'
      } outline-none rounded-md hover:underline flex items-center justify-center gap-1`}
      onClick={onClick}
    >
      {IcAfter && <IcAfter />}
      {text}
    </button>
  );
};

export default memo(Button);
