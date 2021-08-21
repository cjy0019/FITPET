import React from 'react';
import GoogleMapReact from 'google-map-react';
import styled from 'styled-components';
import Marker from '../../common/map/Marker';
import CourseSideBar from './CourseSideBar';

const CourseMap = ({ center, zoom }) => {
  const key = 'AIzaSyCBMaPLmEzBLSgbKQqd645gSJI7RBunzSY';

  return (
    <Flex>
      <CourseSideBar />
      <StyledDiv>
        <GoogleMapReact
          bootstrapURLKeys={{ key }}
          defaultCenter={center}
          defaultZoom={zoom}>
          <Marker lat='37.542936' lng='127.076425' />
        </GoogleMapReact>
      </StyledDiv>
    </Flex>
  );
};
const Flex = styled.div`
  display: flex;
`;

const StyledDiv = styled.div`
  width: 100%;
  height: 100vh;
`;

CourseMap.defaultProps = {
  center: {
    lat: 37.542694,
    lng: 127.076274,
  },
  zoom: 16,
};

export default CourseMap;
