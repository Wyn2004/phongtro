import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as action from '../../store/actions';
import { formatVietnameseToString } from '../../utils/Common/formatVietnamese';

const notActive = 'hover:bg-secondary2 bg-secondary1 h-full p-4 flex items-center';
const Active = 'hover:bg-secondary2 bg-secondary2 h-full p-4 flex items-center';

const Navigation = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector(state => state.app);
  useEffect(() => {
    dispatch(action.getCategories());
  }, []);

  return (
    <div className="flex w-full items-center justify-center h-[40px] bg-secondary1 text-[white] mb-3">
      <div className="w-3/5 flex items-center font-bold text-sm h-full">
        <NavLink to={'/'} className={({ isActive }) => (isActive ? Active : notActive)}>
          Trang chủ
        </NavLink>
        {categories?.length > 0 &&
          categories.map(item => {
            return (
              /// phải có key
              // khi chọt vào the navlink thi sẽ trả về 1 đối tượng => có thể dùng để set hover
              <div className="h-full flex items-center justify-center" key={item.code}>
                <NavLink
                  to={formatVietnameseToString(item.value)}
                  className={({ isActive }) => (isActive ? Active : notActive)}
                >
                  {item.value}
                </NavLink>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Navigation;
