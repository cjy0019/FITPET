import React, { useCallback } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import HotelAbout from '../components/hotel/hotel_about/HotelAbout';
import { openRoomDetail } from '../redux/modules/modal';

const HotelAboutContainer = () => {
  const dispatch = useDispatch();
  const roomDetailOpen = useSelector((state) => state.modal.roomDetailOpen);

  const showRoomDetail = useCallback(() => {
    console.log('showRoomDetail: ' + roomDetailOpen);
    dispatch(openRoomDetail());
  }, [dispatch, roomDetailOpen]);

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
    />
  );
};

export default HotelAboutContainer;
