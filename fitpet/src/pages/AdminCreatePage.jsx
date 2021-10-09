import React from 'react';
import GoUpBtn from '../common/buttons/small_size/GoUpBtn';
import AdminCreate from '../components/admin/admin_create/AdminCreate';
import Footer from '../components/common/Footer';
import HeaderContainer from '../containers/HeaderContainer';

const AdminCreatePage = () => {
  return (
    <>
      <HeaderContainer />
      <AdminCreate />
      <GoUpBtn />
      <Footer />
    </>
  );
};

export default AdminCreatePage;
