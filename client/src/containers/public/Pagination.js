import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { PageNumber } from '../../components'
import  icons  from '../../utils/icons'

const {GrFormNext, GrFormPrevious} = icons
const Pagination = ({ page }) => {
    
    const { count, posts } = useSelector(state => state.post)
    const [arrPage, setArrPage] = useState([])
    const [currentPage, setCurrentPage] = useState(page || 1)
    const [isHiddenMoreStart, setIsHiddenMoreStart] = useState(false)
    const [isHiddenMoreEnd, setIsHiddenMoreEnd] = useState(false)
    const [isHiddenStart, setIsHiddenStart] = useState(false)
    const [isHiddenEnd, setIsHiddenEnd] = useState(false)

    useEffect(() => {
        let maxPage = Math.floor(count / posts?.length)
        let end = (+currentPage + 3) > maxPage ? maxPage : (+currentPage + 3)
        let start = (+currentPage - 3) < 1 ? 1 : (+currentPage - 3)
        let temp = []
        for (let i = start; i <= end; i++)
            temp.push(i)
        setArrPage(temp);
        + currentPage === 1 ? setIsHiddenStart(true) : setIsHiddenStart(false);
        (+currentPage - 3) <= 1 ? setIsHiddenMoreStart(true) : setIsHiddenMoreStart(false);
        (+currentPage + 3) >= maxPage ? setIsHiddenMoreEnd(true) : setIsHiddenMoreEnd(false);
        +currentPage === maxPage ? setIsHiddenEnd(true) : setIsHiddenEnd(false);
    }, [count, posts, currentPage])

    return (
        <div className='flex items-center justify-center gap-1 py-5'>
            {!isHiddenStart &&
                <PageNumber icon={<GrFormPrevious />}
                text={+page - 1}
                setCurrentPage={setCurrentPage}
                />
            }
            {!isHiddenMoreStart && <PageNumber text={'...'}/>}
            {arrPage.length > 0 && arrPage.map(item => {
                return (
                    <PageNumber
                        key={item}
                        text={item}
                        currentPage={page || 1}
                        setCurrentPage={setCurrentPage}
                    />
                )
            }) 
            }
            {!isHiddenMoreEnd && <PageNumber text={'...'}/>}
            {
                !isHiddenEnd &&
                <PageNumber icon={<GrFormNext />}
                    text={page === null ? +page + 2 : +page + 1}
                    setCurrentPage={setCurrentPage}
                />
            }
        </div>
    )
}

export default Pagination