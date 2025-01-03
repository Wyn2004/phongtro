import React, { memo } from 'react';
import icons from '../utils/icons';
import { createSearchParams, Link, useLocation, useNavigate } from 'react-router-dom';
import { formatVietnameseToString } from '../utils/Common/formatVietnamese';

const ItemSidebar = ({ title, content, isDouble, type }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const formatContent = content => {
    const oddEl = content?.filter((item, index) => index % 2 !== 0);
    const evenEl = content?.filter((item, index) => index % 2 === 0);
    const formatContent = oddEl.map((item, index) => {
      return {
        right: item,
        left: evenEl[index]
      };
    });
    return formatContent;
  };

  const handleFilterPosts = code => {
    navigate({
      pathname: location.pathname,
      search: createSearchParams({
        [type]: code
      }).toString()
    });
  };

  const { GrNext } = icons;
  return (
    <div className="p-4 bg-white w-full">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      {!isDouble && (
        <div className="flex flex-col gap-2">
          {content?.length > 0 &&
            content?.map(item => (
              <Link
                key={item.code}
                to={formatVietnameseToString(item.value)}
                className="flex gap-2 items-center cursor-pointer hover:text-orange-500 border-b border-gray-200 border-dashed"
                onClick={() => handleFilterPosts(item.code)}
              >
                <GrNext size={10} color="#ccc" />
                <p className="text-sm ">{item.value}</p>
              </Link>
            ))}
        </div>
      )}
      {isDouble && (
        <div className="flex flex-col gap-2">
          {content?.length > 0 &&
            formatContent(content)?.map((item, index) => (
              <div className="flex items-center justify-around" key={index}>
                <div
                  key={item.code}
                  onClick={() => handleFilterPosts(item.left.code)}
                  className="flex flex-1 gap-2 items-center cursor-pointer hover:text-orange-500 border-b border-gray-200 border-dashed"
                >
                  <GrNext size={10} color="#ccc" />
                  <p className="text-sm ">{item.left.value}</p>
                </div>
                <div
                  key={item.code}
                  onClick={() => handleFilterPosts(item.right.code)}
                  className="flex flex-1 gap-2 items-center cursor-pointer hover:text-orange-500 border-b border-gray-200 border-dashed"
                >
                  <GrNext size={10} color="#ccc" />
                  <p className="text-sm ">{item.right.value}</p>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default memo(ItemSidebar);
