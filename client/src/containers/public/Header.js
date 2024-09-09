import React, { useCallback,useRef, useEffect  } from 'react'
import logo from '../../assests/logo-removebg.png'
import { Button } from '../../components'
import icons from '../../utils/icons'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { path } from '../../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../store/actions'

const { AiOutlinePlusCircle } = icons
const { BsPersonPlus } = icons
const { IoIosLogIn } = icons

const Header = () => {
  const navigate = useNavigate()
  const { isLoggedIn } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  /// dung useRef de luot trong trang web
  /// gan thuoc tinh ref = {ten ham ref} ở đâu thì khi chay useEffect duoi se đưa trang web tới thẻ đó
  const headerRef = useRef()
  const [searchParams] = useSearchParams()
  useEffect(() => {
    headerRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }, [searchParams.get('page')])
  
  const goLogin = useCallback((flag) => {
    navigate(path.LOGIN, {state: {flag}})
  }, [])

  const goHome = useCallback(() => {
    navigate(path.HOME)
  }, [])
  
  return (

    /// the headerRef để lên đầu
    <div ref={headerRef} className='w-3/5 flex items-center justify-between'>
      <img
        src={logo}
        alt="logo"
        onClick={goHome}
        className='w-[240px] h-[70px] object-contain cursor-pointer'
      />
      <div className='flex items-center gap-3'>
          {
          !isLoggedIn && 
          <div className='flex items-center gap-3'>
              <small>phongtro123.com xin chào !</small>
              <Button text={'Đăng nhập'} textColor='text-black' IcAfter={IoIosLogIn} onClick={() => { goLogin(false) }} />
              <Button text={'Đăng ký'} textColor='text-black' IcAfter={BsPersonPlus} onClick={() => { goLogin(true) }} />
          </div>
        }
        {
        isLoggedIn && 
        <div className='flex items-center gap-3'>
            <small>phongtro123.com xin chào !</small>
            <Button text={'Đăng xuất'} textColor='text-black' IcAfter={BsPersonPlus} onClick={() => dispatch(actions.logout())} />
        </div>
        }
        <Button text={'Đăng tin mới'} textColor='text-white' bgColor='bg-secondary2' IcAfter={AiOutlinePlusCircle}/>
        
    </div>
    </div>
  )
} 

export default Header