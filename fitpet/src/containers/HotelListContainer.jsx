import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import HotelList from '../components/hotel/hotel_list/HotelList';
import { hotelListSagaStart } from '../redux/modules/hotelList';

const HotelListContainer = () => {
  const dispatch = useDispatch();
  const hotels = useSelector((state) => state.hotelList.hotels);
  const isLoading = useSelector((state) => state.hotelList.isLoading);
  const search = useSelector((state) => state.router.location.search);
  const page = search.split('').splice(6).toString();

  useEffect(() => {
    dispatch(hotelListSagaStart(page));
  }, [dispatch, page]);

  return <HotelList hotels={hotels} isLoading={isLoading} />;
};

export default HotelListContainer;
