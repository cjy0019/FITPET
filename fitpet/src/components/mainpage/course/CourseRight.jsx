import React from 'react';
import styled from 'styled-components';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const CourseRight = ({ google }) => {
  const mapStyles = {
    width: '84rem',
    height: '50rem',
    outline: 'none',
  };

  return (
    <StyledDiv>
      <Map
        google={google}
        style={mapStyles}
        zoom={16}
        initialCenter={{ lat: 37.542694, lng: 127.076378 }}
      />
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  background-color: bisque;
  width: 84rem;
  height: 50rem;
  margin-left: 9.9rem;
`;
export default GoogleApiWrapper({
  apiKey: 'AIzaSyCBMaPLmEzBLSgbKQqd645gSJI7RBunzSY',
})(CourseRight);
