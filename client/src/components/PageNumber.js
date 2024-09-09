import React, { memo } from 'react'
import { createSearchParams, useNavigate } from 'react-router-dom'

const PageNumber = ({ text, currentPage, icon, setCurrentPage }) => {

    const active = 'w-[46px] h-[43px] flex justify-center items-center bg-[#E13428] text-white rounded-lg text-sm'
    const notActive = 'w-[46px] h-[43px] flex justify-center items-center bg-white hover:bg-gray-500 hover:text-white rounded-lg text-sm'

    const navigate = useNavigate()
    const handleChangePage = () => {
        setCurrentPage(+text)
        navigate({
            // path này là ở trước dấu hỏi chấm, nếu ko có thì để như sau
            path: "/",
            search: createSearchParams({
                // tao path ?page=text
                page: text
            }).toString()
            // doan code tren navigate den path .../?page=text
        });
    }

    return (
        <div className={(+text == +currentPage) ? `${active} cursor-text` : `${notActive} 
            ${text === '...' ? 'cursor-text' : 'cursor-pointer'}`}
            onClick={text !== '...' ? handleChangePage : undefined}>
            {icon || text}
        </div>
    )
}

export default memo(PageNumber)