import React from 'react';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';
import Marker from '../../../common/map/Marker';

const CourseRight = ({ center, zoom }) => {
  const key = 'AIzaSyCBMaPLmEzBLSgbKQqd645gSJI7RBunzSY';

  return (
    <StyledDiv>
      <GoogleMapReact
        bootstrapURLKeys={{ key }}
        defaultCenter={center}
        defaultZoom={zoom}>
        <Marker lat='37.542936' lng='127.076425' />
      </GoogleMapReact>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  background-color: bisque;
  width: 84rem;
  height: 50rem;
  margin-left: 9.9rem;
`;

CourseRight.defaultProps = {
  center: {
    lat: 37.542694,
    lng: 127.076274,
  },
  zoom: 16,
};

export default CourseRight;
