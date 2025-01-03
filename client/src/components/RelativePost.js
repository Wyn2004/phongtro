import React, { memo } from 'react';
import SmallItem from './SmallItem';
import { formatTimeFromNow, formatTitle, getFirstImage } from '../utils/Common/formatLongString';

const RelativePost = ({ title, posts }) => {
  return (
    <div className="w-full bg-white p-4">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      {posts &&
        posts.length > 0 &&
        posts?.map(post => (
          <SmallItem
            key={post.id}
            image={getFirstImage(post?.images?.image)}
            header={formatTitle(post.title)}
            price={post.attributes.price}
            createAt={formatTimeFromNow(post.createdAt)}
          />
        ))}
    </div>
  );
};

export default memo(RelativePost);
