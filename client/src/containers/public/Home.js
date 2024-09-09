import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import { Search, Navigation } from './index'

// responsive màn hình

const Home = () => {
  return (
    <div className='w-full flex flex-col items-center m-auto'>
      <Header />
      <Navigation />
      <Search/>
      <div className='lg:w-3/5 w-4/5 flex flex-col items-start justify-start'>
        <Outlet />
      </div>
    </div>
  )
}

export default Home