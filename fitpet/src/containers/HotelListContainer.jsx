import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import HotelList from '../components/hotel/hotel_list/HotelList';
import { hotelListSagaStart } from '../redux/modules/hotelList';

const HotelListContainer = () => {
  const dispatch = useDispatch();
  const hotels = useSelector((state) => state.hotelList.hotels);

  useEffect(() => {
    dispatch(hotelListSagaStart());
  }, [dispatch]);

  return <HotelList hotels={hotels} />;
};

export default HotelListContainer;
