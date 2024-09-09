import React, { memo } from 'react'
/// dùng memo để tránh render ko cần thiết, chỉ render component khi property thay đổi 

// w-[100px] overflow-hidden text-ellipsis whitespace-nowrap dùng để tạp dấu 3 chấm khi vượt qua kích cỡ chứa chữ

const SearchItem = ({ IconHead, IconTail, text, fontWeight }) => {
    const editFonWeight = (fontWeight) => {
        return fontWeight ? 'font-bold text-black' : ''
    }
    
    return (
        <div className='bg-white text-gray-400 rounded-md text-[12px] py-2 px-4 w-full flex justify-between items-center cursor-pointer'>
            <div className='flex items-center gap-1 w-full'>
                {IconHead && <IconHead />}
                <span className={editFonWeight(fontWeight)+' w-[100px] overflow-hidden text-ellipsis whitespace-nowrap'}>
                    {text}
                </span>
            </div>
            {IconTail && <IconTail className={editFonWeight(fontWeight)} />}
        </div>
    )
}

export default memo(SearchItem)