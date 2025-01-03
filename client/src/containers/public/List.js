import React, { useEffect } from 'react';
import { Button, Item } from '../../components/index';
import { getPosts, getPostsLimit } from '../../store/actions/post';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

const List = ({ page }) => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  const { posts } = useSelector(
    state =>
      /// vi da khai bao reducer nen state co hieu luc voi moi reducer o file rootReducer
      state.post
  );
  useEffect(() => {
    // check page cos null k
    let params = [];
    for (let entry of searchParams.entries()) {
      params.push(entry);
    }

    let searchObject = {};
    params?.map(item => {
      searchObject = { ...searchObject, [item[0]]: item[1] };
    });
    dispatch(getPostsLimit(searchObject));
  }, [searchParams]);

  return (
    <div className="w-full border bg-white shadow-md rounded-lg p-2">
      <div className="flex justify-between items-center my-2">
        <h4 className="font-bold text-lg">Danh sách tin đăng</h4>
        <span className="text-gray-500 text-sm">Cập nhật: 12:32 24/8/2024</span>
      </div>

      <div className="flex items-center gap-1 my-2">
        <span>Sắp xếp:</span>
        <Button bgColor={'bg-gray-200'} text={'Mặc định'} />
        <Button bgColor={'bg-gray-200'} text={'Mới nhất'} />
        <Button bgColor={'bg-gray-200'} text={'Có video'} />
      </div>

      <div className="item">
        {posts?.length > 0 &&
          posts.map(item => {
            return (
              <Item
                key={item?.id}
                address={item?.address}
                attributes={item?.attributes}
                description={JSON.parse(item?.description)}
                images={JSON.parse(item?.images.image)}
                title={item?.title}
                user={item?.user}
                published={item?.attributes?.published}
                star={item?.star}
                id={item?.id}
              />
            );
          })}
      </div>
    </div>
  );
};

export default List;
