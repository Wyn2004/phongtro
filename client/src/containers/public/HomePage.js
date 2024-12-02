import React, { useEffect } from 'react';
import { text } from '../../utils/constant';
import { ItemSidebar, Provinces } from '../../components';
import { Pagination, List } from './index';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as action from '../../store/actions';

const HomePage = () => {
  // lay thuoc tinh param o file pagenumber.js
  // owr day la ?page=number => lau duoc param la so
  const [param] = useSearchParams();
  const { categories, prices, areas } = useSelector(state => state.app);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(action.getAllPrices());
    dispatch(action.getAllAreas());
  }, []);

  return (
    <div className="border border-red-500 w-full flex flex-col gap-3">
      <h1 className="text-[28px] font-bold text-center">{text.HOME_TITLE}</h1>
      <h2 className="text-gray-500 text-sm">{text.HOME_DESCRIPTION}</h2>
      <h2 className="font-bold text-lg text-center">Khu vực nổi bật</h2>
      <Provinces />
      <div className="w-full flex gap-4">
        <div className="w-[70%]">
          <List />
          <Pagination />
        </div>
        <div className="w-[30%] border border-purple-600 flex flex-col justify-start gap-5 rounded-md items-center">
          <ItemSidebar title="Danh sách cho thuê" content={categories} />
          <ItemSidebar title="Xem theo giá" type="priceCode" content={prices} isDouble={true} />
          <ItemSidebar title="Xem theo diện tích" type="areaCode" content={areas} isDouble={true} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
