import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const Marker = ({ deleteMarker, id }) => {
  const [mouseover, setMouseover] = useState(false);
  return (
    <button
      id={id}
      onMouseEnter={onMouse}
      onMouseLeave={leaveMouse}
      onClick={deleteMarker}>
      {mouseover ? (
        <MarkerImg arrow src='/img/main/marker.svg' />
      ) : (
        <MarkerImg src='/img/main/marker2.svg' />
      )}
    </button>
  );
  function onMouse() {
    setMouseover(true);
  }
  function leaveMouse() {
    setMouseover(false);
  }
};

const MarkerImg = styled.img`
  width: 2rem;
  height: 2rem;

  ${(props) =>
    props.arrow &&
    css`
      width: 6rem;
      height: 5rem;
      transform: translate(-30%, -60%);
    `}
`;

export default Marker;
