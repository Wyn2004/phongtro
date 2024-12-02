import React, { memo } from 'react';
import { createSearchParams, useNavigate, useSearchParams } from 'react-router-dom';

const PageNumber = ({ text, currentPage, icon, setCurrentPage }) => {
  const active = 'w-[46px] h-[43px] flex justify-center items-center bg-[#E13428] text-white rounded-lg text-sm';
  const notActive =
    'w-[46px] h-[43px] flex justify-center items-center bg-white hover:bg-gray-500 hover:text-white rounded-lg text-sm';
  const [paramsSearch] = useSearchParams();
  const navigate = useNavigate();
  let entries = paramsSearch.entries();

  const append = entries => {
    let params = [];
    paramsSearch.append('page', +text);
    for (let entry of entries) {
      params.push(entry);
    }
    let a = {};
    params?.map(item => {
      a = { ...a, [item[0]]: item[1] };
    });
    return a;
  };

  const handleChangePage = () => {
    if (text === '...') return;

    setCurrentPage(+text);
    navigate({
      // path này là ở trước dấu hỏi chấm, nếu ko có thì để như sau
      pathName: '/',
      search: createSearchParams(append(entries)).toString()
    });
  };

  return (
    <div
      className={
        +text == +currentPage
          ? `${active} cursor-text`
          : `${notActive} 
            ${text === '...' ? 'cursor-text' : 'cursor-pointer'}`
      }
      onClick={text !== '...' ? handleChangePage : undefined}
    >
      {icon || text}
    </div>
  );
};

export default memo(PageNumber);
