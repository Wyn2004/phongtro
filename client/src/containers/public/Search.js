import React from 'react'
import { SearchItem } from '../../components/index'
import icons from '../../utils/icons'

const { GrNext, LiaFunnelDollarSolid, SlCrop, CiLocationOn, PiBuildingApartment, FiDelete, IoSearch } = icons

const Search = () => {
    return (
        <div className='p-[10px] w-3/5 bg-[#febb02] rounded-lg flex lg:flex-row flex-col items-center justify-around gap-2 mb-3' >
            <SearchItem IconTail={FiDelete} fontWeight={true} IconHead={PiBuildingApartment} text='Cho thuê căn hộ' />
            <SearchItem IconTail={GrNext} IconHead={CiLocationOn} text='Toàn quốc' />
            <SearchItem IconTail={GrNext} IconHead={LiaFunnelDollarSolid} text='Chọn giá' />
            <SearchItem IconTail={GrNext} IconHead={SlCrop} text='Chọn diện tích' />
            <button
                type='button'
                className='bg-secondary1 text-white outline-none w-full font-bold text-[14px] 
                px-4 py-[7px] rounded-md flex items-center justify-center active:bg-[#005999]'
            >
                <IoSearch />
                Tìm kiếm
            </button>
        </div>
    )
}

export default Search