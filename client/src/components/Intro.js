import React, { memo } from 'react';
import { text } from '../utils/data/dataIntro';
import Button from './Button';
import { handleStart } from '../utils/Common/handleStar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { formatVietnameseToString } from '../utils/Common/formatVietnamese';

const Intro = () => {
  const { categories } = useSelector(state => state.app);

  return (
    <div className="w-4/6 border shadow-sm bg-white rounded-md py-10 px-20 justify-center items-center flex flex-col gap-6 text-center">
      <h3 className="font-bold text-lg">{text.title}</h3>
      <p className="text-gray-600 text-md">
        {text.description}
        {categories?.length > 0 &&
          categories.map(item => (
            <Link
              className="text-blue-600 font-bold hover:text-orange-500"
              key={item.code}
              to={`/${formatVietnameseToString(item.value)}`}
            >
              {item.value}
              {', '}
            </Link>
          ))}
        {text.description2}
      </p>
      <div className="w-full flex justify-evenly ">
        {text.statistic.map((item, index) => (
          <div key={index} className="flex flex-col items-center justify-center">
            <h3 className="text-xl font-bold">{item.value}</h3>
            <p className="text-gray-600">{item.name}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-bold">{text.price}</h3>
        <h3>{handleStart(text.star)}</h3>
      </div>
      <div className="flex flex-col gap-2 justify-center items-center text-gray-600">
        <p className="text-xs"> {text.comment}</p>
        <p className="text-sm">{text.author}</p>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-bold">{text.question}</h3>
        <p className="text-gray-600 text-sm">{text.answer}</p>
      </div>
      <Button
        text={'Đăng tin ngay'}
        textColor={'text-white'}
        bgColor={'bg-secondary2'}
        customStyle={'font-bold w-1/5'}
      />
    </div>
  );
};

export default memo(Intro);
