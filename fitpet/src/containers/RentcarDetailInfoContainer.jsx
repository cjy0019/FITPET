import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import RentCarDetail from '../components/rentalcar/rentcar_detail/RentCarDetail';
import { getRentcarDetailInfoStart } from '../redux/modules/rentcarDetail';

const RentcarDetailInfoContainer = () => {
  const query = useSelector((state) => state.router.location.pathname);
  const params = query.split('/')[2];
  const dispatch = useDispatch();
  const { rentcarDetail } = useSelector((state) => state);

  const getRentcarDetailInfo = useCallback(
    (params) => {
      dispatch(getRentcarDetailInfoStart(params));
    },
    [dispatch],
  );

  useEffect(() => {
    getRentcarDetailInfo(params);
  }, [getRentcarDetailInfo, params]);

  return <RentCarDetail rentcarDetail={rentcarDetail} />;
};

export default RentcarDetailInfoContainer;
