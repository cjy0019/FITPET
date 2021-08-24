import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { hotelMainSagaStart } from '../redux/modules/hotelMain';
import HotelMain from '../components/hotel/hotel_main/HotelMain';
import { useEffect } from 'react';
import { hotelListSagaStart } from '../redux/modules/hotelList';

const HotelMainContainer = () => {
  const dispatch = useDispatch();
  const hitsList = useSelector((state) => state.hotelMain.hitsList);
  const hotels = useSelector((state) => state.hotelList.hotels);

  useEffect(() => {
    dispatch(hotelMainSagaStart());
    dispatch(hotelListSagaStart());
  }, [dispatch]);

  return <HotelMain hitsList={hitsList} hotels={hotels} />;
};

export default HotelMainContainer;
