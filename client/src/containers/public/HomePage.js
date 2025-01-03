import React, { useEffect } from 'react';
import { text } from '../../utils/constant';
import { ItemSidebar, Provinces, RelativePost } from '../../components';
import { Pagination, List } from './index';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as action from '../../store/actions';
import { getNewPost } from '../../store/selector/postSelector';

const HomePage = () => {
  // lay thuoc tinh param o file pagenumber.js
  // owr day la ?page=number => lau duoc param la so
  const [param] = useSearchParams();
  const { categories, prices, areas } = useSelector(state => state.app);
  const dispatch = useDispatch();
  const newPost = useSelector(getNewPost);
  useEffect(() => {
    dispatch(action.getAllPrices());
    dispatch(action.getAllAreas());
    dispatch(action.getNewPost());
  }, []);

  return (
    <div className=" w-full flex flex-col gap-3">
      <h1 className="text-[28px] font-bold text-center">{text.HOME_TITLE}</h1>
      <h2 className="text-gray-500 text-sm">{text.HOME_DESCRIPTION}</h2>
      <h2 className="font-bold text-lg text-center">Khu vực nổi bật</h2>
      <Provinces />
      <div className="w-full flex gap-4">
        <div className="w-[70%]">
          <List />
          <Pagination />
        </div>
        <div className="w-[30%] flex flex-col justify-start gap-5 rounded-md items-center">
          <ItemSidebar title="Danh sách cho thuê" content={categories} />
          <ItemSidebar title="Xem theo giá" type="priceCode" content={prices} isDouble={true} />
          <ItemSidebar title="Xem theo diện tích" type="areaCode" content={areas} isDouble={true} />
          <RelativePost title={'Tin mới đăng'} posts={newPost} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
