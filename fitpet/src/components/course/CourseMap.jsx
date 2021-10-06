import React from 'react';
import GoogleMapReact from 'google-map-react';
import styled from 'styled-components';
import Marker from '../../common/map/Marker';
import CourseSideBar from './CourseSideBar';
import { useDispatch, useSelector } from 'react-redux';
import { markerAdd, markerDelete } from '../../redux/modules/markers';

const CourseMap = ({ center, zoom }) => {
  const key = 'AIzaSyCBMaPLmEzBLSgbKQqd645gSJI7RBunzSY';
  let locations = useSelector((state) => state.markers.locations);
  const dispatch = useDispatch();

  return (
    <Flex>
      <CourseSideBar />
      <StyledDiv>
        <GoogleMapReact
          bootstrapURLKeys={{ key }}
          defaultCenter={center}
          defaultZoom={zoom}
          onClick={handleMarker}>
          {locations === undefined
            ? (locations = [])
            : locations.map((location, idx) => {
                return (
                  <Marker
                    id={location.id}
                    key={idx * 1.129}
                    lat={location.lat}
                    lng={location.lng}
                    deleteMarker={deleteMarker}
                  />
                );
              })}
        </GoogleMapReact>
      </StyledDiv>
    </Flex>
  );

  function handleMarker(e) {
    dispatch(markerAdd(e.lat, e.lng));
  }
  function deleteMarker(e) {
    dispatch(markerDelete(e.currentTarget.id));
  }
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
  zoom: 17,
};

export default CourseMap;
