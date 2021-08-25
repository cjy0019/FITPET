import React, { useCallback } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import HotelAbout from '../components/hotel/hotel_about/HotelAbout';
import { closeRoomDetail, openRoomDetail } from '../redux/modules/modal';

const HotelAboutContainer = () => {
  const dispatch = useDispatch();
  const roomDetailOpen = useSelector((state) => state.modal.roomDetailOpen);

  // 객실 상세 창 열기
  const showRoomDetail = useCallback(() => {
    dispatch(openRoomDetail());
  }, [dispatch]);

  // 객실 상세 창 닫기
  const hideRoomDetail = useCallback(() => {
    dispatch(closeRoomDetail());
  }, [dispatch]);

  useEffect(() => {
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
  }, [roomDetailOpen]);

  return (
    <HotelAbout
      showRoomDetail={showRoomDetail}
      roomDetailOpen={roomDetailOpen}
      hideRoomDetail={hideRoomDetail}
    />
  );
};

export default HotelAboutContainer;
