import { Route, Routes } from 'react-router-dom';
import {
  Home, Login, RentalApartment, DetailPost,
  RentalHome, RentalRoom, RentalSpace, HomePage
} from './containers/public';
import {path} from './utils/constant'

function App() {
  return (
    // những cái path ko có trong định nghĩa thì sẽ nhảy vào trường hợp *
    <div className="bg-primary">
      <Routes>
        <Route path={path.HOME} element={<Home />}>
          <Route path='*' element={<HomePage />} />
          <Route path={path.HOME__PAGE} element={<HomePage />} />
          <Route path={path.LOGIN} element={<Login />} />
          <Route path={path.CHO_THUE_CAN_HO} element={<RentalApartment/>} />
          <Route path={path.CHO_THUE_MAT_BANG} element={<RentalSpace/>} />
          <Route path={path.CHO_THUE_PHONG_TRO} element={<RentalRoom/>} />
          <Route path={path.NHA_CHO_THUE} element={<RentalHome/>} />
          <Route path={path.DETAIL_POST__TITLE__POSTID} element={<DetailPost/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
