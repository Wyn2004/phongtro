import React, { memo, useState } from 'react';
import icons from '../utils/icons';
import { splitAddress } from '../utils/Common/splitAddress';
import { Link } from 'react-router-dom';

const indexs = [0, 1, 2, 3];

const { IoIosStar, VscHeartFilled, VscHeart, BsFillBookmarkStarFill } = icons;

const Item = ({ address, attributes, description, images, title, user, published, star, id }) => {
  const [isHoverHeart, setIsHoverHeart] = useState(false);

  const handleStart = star => {
    let stars = [];
    for (let i = 1; i <= star; i++) stars.push(<IoIosStar color="#FEBB00" className="star-item" />);
    return stars;
  };

  return (
    <div className="flex w-full border-red-500 border-t py-[6px] mt-4">
      {/* dung the link de link toi detail post */}
      <Link
        to={`chi-tiet/${title}/${id}`}
        className="w-2/5 flex flex-wrap gap-[2px] items-center mr-1 relative cursor-pointer"
      >
        {images?.length > 0 &&
          images
            .filter((i, index) => indexs.some(i => i === index))
            ?.map((i, index) => {
              return <img key={index} src={i} alt="preview" className="w-[110px] h-[130px] object-cover" />;
            })}
        <span className="text-sm bg-bg-overlay-50 text-white absolute left-1 bottom-1 rounded-md px-1">
          {`${images?.length} ảnh`}
        </span>
        <span
          onMouseEnter={() => setIsHoverHeart(true)}
          onMouseLeave={() => setIsHoverHeart(false)}
          className="text-white absolute bottom-1 right-1"
        >
          {isHoverHeart ? <VscHeartFilled className="text-red-500" size={24} /> : <VscHeart size={24} />}
        </span>
      </Link>

      <div className="w-3/5">
        <div className="flex justify-between gap-1 w-full">
          <div className="text-red-500 font-bold">
            {handleStart(+star).length > 0 &&
              handleStart(+star).map((star, number) => {
                return <span key={number}>{star}</span>;
              })}
            {title}
          </div>
          <div className="w-[10%] flex justify-end">
            <BsFillBookmarkStarFill size={30} color="#FEBB00" />
          </div>
        </div>

        <div className="flex items-center gap-8 mt-2">
          <span className="text-green-500 font-bold text-lg">{attributes?.price}</span>
          <span className="text-sm">{attributes?.acreage}</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-md">{splitAddress(address)}</span>
          <span className="text-sm text-gray-400">{published}</span>
        </div>

        <p className="text-gray-500 text-sm mt-2 w-full h-[65px] text-ellipsis overflow-hidden">{description}</p>

        <div className="flex items-center mt-2 justify-between">
          <div className="flex items-center gap-1">
            <img
              src="https://static-00.iconduck.com/assets.00/user-avatar-1-icon-2048x2048-935gruik.png"
              alt="avatar"
              className="w-[30px] h-[30px] object-cover rounded-full"
            />
            <p className="text-gray-500 text-sm">{user?.name}</p>
          </div>

          <div className="flex items-center gap-1">
            <button className="bg-blue-700 text-white text-sm rounded-lg p-1 " type="button">
              {`Gọi ${user?.phone}`}
            </button>
            <button className="text-blue-700 text-sm rounded-lg p-1 border border-1 border-blue-700" type="button">
              Nhắn Zalo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Item);
