import React from 'react'
import { text } from '../../utils/constant'
import { Provinces } from '../../components'
import { Pagination, List } from './index'
import { useSearchParams } from 'react-router-dom'

const HomePage = () => {

    // lay thuoc tinh param o file pagenumber.js
    // owr day la ?page=number => lau duoc param la so
    const [param] = useSearchParams()

    return (
        <div className='border border-red-500 w-full flex flex-col gap-3'>
            <h1 className='text-[28px] font-bold text-center'>
                {text.HOME_TITLE}
            </h1>
            <h2 className='text-gray-500 text-sm'>
                {text.HOME_DESCRIPTION}
            </h2>
            <h2 className='font-bold text-lg text-center'>
                Khu vực nổi bật
            </h2>
            <Provinces />
            <div className='w-full flex gap-4'>
                <div className='w-[70%]'>
                    <List page={param.get('page')}/>
                    <Pagination page={param.get('page')} />
                </div>
                <div className='w-[30%] border border-purple-600 items-center flex justify-center'>
                    Sidebar
                </div>
            </div>

        </div>
    )
}

export default HomePage