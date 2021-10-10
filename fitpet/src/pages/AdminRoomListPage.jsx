import React from 'react';
import AdminRooms from '../components/admin/admin_rooms/AdminRooms';
import HeaderContainer from '../containers/HeaderContainer';

const AdminRoomListPage = () => {
  return (
    <>
      <HeaderContainer />
      <AdminRooms />
    </>
  );
};

export default AdminRoomListPage;
