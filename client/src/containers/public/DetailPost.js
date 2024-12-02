import React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

const DetailPost = () => {
  const param = useParams();
  console.log(param);

  return <div>DetailPost</div>;
};

export default DetailPost;
