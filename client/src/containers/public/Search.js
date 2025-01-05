import React, { useState } from 'react';
import { Modal, SearchItem } from '../../components/index';
import icons from '../../utils/icons';
import { useSelector } from 'react-redux';

const { GrNext, LiaFunnelDollarSolid, SlCrop, CiLocationOn, PiBuildingApartment, FiDelete, IoSearch } = icons;

const Search = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [content, setContent] = useState([]);
  const [name, setName] = useState(null);

  const { areas, categories, provinces, prices } = useSelector(state => state.app);

  const handleShowModal = (content, name) => {
    console.log('first', content);
    setContent(content);
    setName(name);
    setIsShowModal(true);
  };

  return (
    <div className="p-[10px] w-4/6 bg-[#febb02] rounded-lg flex lg:flex-row flex-col items-center justify-around gap-2 mb-3">
      <span className="flex-1" onClick={() => handleShowModal(categories, 'category')}>
        <SearchItem IconTail={FiDelete} fontWeight={true} IconHead={PiBuildingApartment} text="Cho thuê căn hộ" />
      </span>
      <span className="flex-1" onClick={() => handleShowModal(provinces, 'province')}>
        <SearchItem IconTail={GrNext} IconHead={CiLocationOn} text="Toàn quốc" />
      </span>
      <span className="flex-1" onClick={() => handleShowModal(prices, 'price')}>
        <SearchItem IconTail={GrNext} IconHead={LiaFunnelDollarSolid} text="Chọn giá" />
      </span>
      <span onClick={() => handleShowModal(areas, 'area')} className="flex-1">
        <SearchItem IconTail={GrNext} IconHead={SlCrop} text="Chọn diện tích" />
      </span>
      <span className="flex-1">
        <button
          type="button"
          className="bg-secondary1 text-white outline-none w-full font-bold text-[14px]
                px-4 py-[7px] rounded-md flex items-center justify-center active:bg-[#005999]"
        >
          <IoSearch />
          Tìm kiếm
        </button>
      </span>
      {isShowModal && <Modal setIsShowModal={setIsShowModal} content={content} name={name} />}
    </div>
  );
};

export default Search;
