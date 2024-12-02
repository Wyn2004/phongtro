import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { PageNumber } from '../../components';
import icons from '../../utils/icons';
import { useSearchParams } from 'react-router-dom';

const { GrFormNext, GrFormPrevious } = icons;
const Pagination = () => {
  const { count, posts } = useSelector(state => state.post);
  const [arrPage, setArrPage] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isHiddenMoreStart, setIsHiddenMoreStart] = useState(false);
  const [isHiddenMoreEnd, setIsHiddenMoreEnd] = useState(false);
  const [isHiddenStart, setIsHiddenStart] = useState(false);
  const [isHiddenEnd, setIsHiddenEnd] = useState(false);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    let page = searchParams.get('page');
    page && +page !== currentPage && setCurrentPage(+page);
    !page && setCurrentPage(1);
  }, [searchParams]);

  useEffect(() => {
    let maxPage = Math.ceil(count / process.env.REACT_APP_LIMIT);
    let end = +currentPage + 3 > maxPage ? maxPage : +currentPage + 3;
    let start = +currentPage - 3 < 1 ? 1 : +currentPage - 3;
    let temp = [];
    for (let i = start; i <= end; i++) temp.push(i);
    setArrPage(temp);
    +currentPage === 1 ? setIsHiddenStart(true) : setIsHiddenStart(false);
    +currentPage - 3 <= 1 ? setIsHiddenMoreStart(true) : setIsHiddenMoreStart(false);
    +currentPage + 3 >= maxPage ? setIsHiddenMoreEnd(true) : setIsHiddenMoreEnd(false);
    +currentPage === maxPage ? setIsHiddenEnd(true) : setIsHiddenEnd(false);
  }, [count, posts, currentPage]);

  if (count === 0) return null;

  return (
    <div className="flex items-center justify-center gap-1 py-5">
      {!isHiddenStart && (
        <PageNumber icon={<GrFormPrevious />} text={+currentPage - 1} setCurrentPage={setCurrentPage} />
      )}
      {!isHiddenMoreStart && <PageNumber text={'...'} />}
      {arrPage.length > 0 &&
        arrPage.map(item => {
          return <PageNumber key={item} text={item} currentPage={currentPage || 1} setCurrentPage={setCurrentPage} />;
        })}
      {!isHiddenMoreEnd && <PageNumber text={'...'} />}
      {!isHiddenEnd && (
        <PageNumber
          icon={<GrFormNext />}
          text={currentPage === null ? +currentPage + 2 : +currentPage + 1}
          setCurrentPage={setCurrentPage}
        />
      )}
    </div>
  );
};

export default Pagination;
