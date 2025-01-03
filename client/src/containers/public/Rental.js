import { useEffect, useState } from 'react';
import { ItemSidebar, Provinces, RelativePost } from '../../components';
import { Pagination, List } from './index';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as action from '../../store/actions';
import { getNewPost } from '../../store/selector/postSelector';
import { formatVietnameseToString } from '../../utils/Common/formatVietnamese';
import { VscGlobe } from 'react-icons/vsc';

const RentalApartment = () => {
  const location = useLocation();
  const [param] = useSearchParams();
  const [category, setCategory] = useState(null);

  const { categories, prices, areas } = useSelector(state => state.app);
  const dispatch = useDispatch();
  const newPost = useSelector(getNewPost);

  useEffect(() => {
    const pathName = location.pathname;
    const category = categories?.find(item => `/${formatVietnameseToString(item.value)}` === pathName);
    setCategory(category);
  }, [categories, location]);

  useEffect(() => {
    dispatch(action.getAllPrices());
    dispatch(action.getAllAreas());
    dispatch(action.getNewPost());
  }, []);

  return (
    <div className=" w-full flex flex-col gap-3">
      <h1 className="text-[28px] font-bold text-center">{category?.header}</h1>
      <h2 className="text-gray-500 text-sm">{category?.subheader}</h2>
      <h2 className="font-bold text-lg text-center">Khu vực nổi bật</h2>
      <Provinces />
      <div className="w-full flex gap-4">
        <div className="w-[70%]">
          <List categoryCode={category?.code} />
          <Pagination />
        </div>
        <div className="w-[30%] flex flex-col justify-start gap-5 rounded-md items-center">
          <ItemSidebar title="Xem theo giá" type="priceCode" content={prices} isDouble={true} />
          <ItemSidebar title="Xem theo diện tích" type="areaCode" content={areas} isDouble={true} />
          <RelativePost title={'Tin mới đăng'} posts={newPost} />
        </div>
      </div>
    </div>
  );
};

export default RentalApartment;
