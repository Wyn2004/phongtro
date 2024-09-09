import React, {memo} from 'react'

// object-cover dùng để cho hình ảnh bao bọc thẻ img, còn object-contain bao nhưng 1 là full dọc 2 là full ngang
const ProvincesButton = ({ name, image }) => {
    return (
        <div className='shadow-lg rounded-bl-lg rounded-br-lg 
        cursor-pointer text-[#1266dd] hover:text-orange-500'>
            <img
                src={image}
                alt={name}
                className='w-[220px] h-[110px] object-cover rounded-tl-lg rounded-tr-lg'
            />
            <div className='text-center font-bold p-2'>
                {name}
            </div>
        </div>
    )
}

export default memo(ProvincesButton)