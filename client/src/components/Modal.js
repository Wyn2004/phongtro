import React, { useEffect, useState } from 'react';
import icon from '../utils/icons';

const Modal = ({ setIsShowModal, content, name }) => {
  const [persent1, setPersent1] = useState(0);
  const [persent2, setPersent2] = useState(100);

  useEffect(() => {
    const activedTrackEl = document.getElementById('track-active');
    if (activedTrackEl) {
      if (persent2 <= persent1) {
        activedTrackEl.style.left = `${persent2}%`;
        activedTrackEl.style.right = `${100 - persent1}%`;
      } else {
        activedTrackEl.style.left = `${persent1}%`;
        activedTrackEl.style.right = `${100 - persent2}%`;
      }
    }
  }, [persent1, persent2]);
  const { GrLinkPrevious } = icon;
  return (
    <div
      className="fixed top-0 left-0 bottom-0 right-0 z-20 bg-bg-overlay-70 flex justify-center items-center"
      onClick={() => setIsShowModal(false)}
    >
      <div className="w-2/5 h-[500px] bg-white rounded-md relative " onClick={e => e.stopPropagation()}>
        <div className="border-b p-2 items-center flex">
          <span className="pl-2">
            <GrLinkPrevious size={20} />
          </span>
        </div>
        {(name === 'category' || name === 'province') && (
          <div className="p-2">
            {content?.map(item => (
              <div className="flex gap-2 border-b p-2 " key={item.code}>
                <input type="radio" name={name} id={item.code} value={item.code} />
                <label htmlFor={item}>{item.value}</label>
              </div>
            ))}
          </div>
        )}
        {(name === 'area' || name === 'price') && (
          <div className="p-12 ">
            <div className="flex flex-col justify-center items-center gap-2 relative">
              <div className="slider-track h-[5px] absolute w-full bg-gray-300 rounded-full top-0 bottom-0"></div>
              <div
                id="track-active"
                className="slider-track-active h-[5px] absolute bg-orange-600 rounded-full top-0 bottom-0"
              ></div>
              <input
                type="range"
                value={persent1}
                min={0}
                max={100}
                step={5}
                onChange={e => setPersent1(+e.target.value)}
                className="w-full appearance-none pointer-events-none top-0 bottom-0 absolute"
              />
              <input
                type="range"
                value={persent2}
                min={0}
                max={100}
                step={5}
                onChange={e => setPersent2(+e.target.value)}
                className="w-full appearance-none pointer-events-none top-0 bottom-0 absolute"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
