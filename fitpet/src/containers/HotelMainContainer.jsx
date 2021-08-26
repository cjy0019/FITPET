import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { hotelMainSagaStart } from '../redux/modules/hotelMain';
import HotelMain from '../components/hotel/hotel_main/HotelMain';
import { useEffect } from 'react';

const HotelMainContainer = () => {
  const dispatch = useDispatch();
  const hitsList = useSelector((state) => state.hotelMain.hitsList);
  const isLoading = useSelector((state) => state.hotelMain.isLoading);
  const search = useSelector((state) => state.router.location.search);
  const region = search.split('').splice(8).join('').toString();

  useEffect(() => {
    dispatch(hotelMainSagaStart(region));
  }, [dispatch, region]);

  return <HotelMain hitsList={hitsList} isLoading={isLoading} />;
};

export default HotelMainContainer;
