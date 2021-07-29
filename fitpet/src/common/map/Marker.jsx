import React from 'react';
import styled from 'styled-components';

const Marker = () => {
  return (
    <div>
      <MarkerImg src='/img/markerImg.png' />
    </div>
  );
};

const MarkerImg = styled.img`
  width: 4.5rem;
  height: 7rem;
`;

export default Marker;
