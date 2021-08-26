import React, { useCallback } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import HotelAbout from '../components/hotel/hotel_about/HotelAbout';
import { hotelAboutSagaStart } from '../redux/modules/hotelAbout';
import { closeRoomDetail, openRoomDetail } from '../redux/modules/modal';

const HotelAboutContainer = ({ hotelId }) => {
  const dispatch = useDispatch();
  const options = useSelector((state) => state.hotelAbout.options);
  const roomDetailOpen = useSelector((state) => state.modal.roomDetailOpen);
  const isLoading = useSelector((state) => state.hotelAbout.isLoading);
  // 객실 상세 창 열기
  const showRoomDetail = useCallback(() => {
    dispatch(openRoomDetail());
  }, [dispatch]);

  // 객실 상세 창 닫기
  const hideRoomDetail = useCallback(() => {
    dispatch(closeRoomDetail());
  }, [dispatch]);

  useEffect(() => {
    dispatch(hotelAboutSagaStart(hotelId));
    if (roomDetailOpen) {
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
  }, [dispatch, hotelId, roomDetailOpen]);

  return (
    <HotelAbout
      showRoomDetail={showRoomDetail}
      roomDetailOpen={roomDetailOpen}
      hideRoomDetail={hideRoomDetail}
      options={options}
      isLoading={isLoading}
    />
  );
};

export default HotelAboutContainer;
