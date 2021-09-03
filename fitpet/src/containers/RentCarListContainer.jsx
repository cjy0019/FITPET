import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RentCarList from '../components/rentalcar/rentcar/RentCarList';
import { getRentcarList } from '../redux/modules/rentcar';

const RentCarListContainer = () => {
  const dispatch = useDispatch();
  const rentcars = useSelector((state) => state.rentcar.cars);
  const isLoading = useSelector((state) => state.rentcar.isLoading);

  useEffect(() => {
    if (isLoading) {
      document.body.style.cssText = `
      position:fixed;
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;
    `;
    }

    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(window.scrollY, parseInt(scrollY || '0', 10) * -1);
    };
  }, [isLoading]);

  useEffect(() => {
    dispatch(getRentcarList());
  }, [dispatch]);

  return <RentCarList rentcars={rentcars} isLoading={isLoading} />;
};

export default RentCarListContainer;
