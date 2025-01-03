import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import { Search, Navigation } from './index';
import { Intro, Contact } from '../../components';

const Home = () => {
  return (
    <div className="w-full flex flex-col gap-4 items-center m-auto">
      <Header />
      <Navigation />
      <Search />
      <div className="lg:w-4/6 w-4/5 flex flex-col items-start justify-start">
        <Outlet />
      </div>
      <Intro />
      <Contact />
    </div>
  );
};

export default Home;
