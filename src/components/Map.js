import React, { Component } from 'react';
import { withGoogleMap, Marker, GoogleMap } from 'react-google-maps';

/* Implementing map as shown in documentation for react-google-maps https://tomchentw.github.io/react-google-maps/ and in the article https://medium.com/@morgannegagne/google-maps-with-react-951c12b723ad*/

class Map extends Component {

  gm_authFailure() {
    window.alert("Google Maps error! Please try again later.")
  }

  componentDidCatch(error) {
    alert("Google Maps error! Please try again later.")
  }

  render() {

  const GoogleMapApp = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = {{lat: 50.024488, lng: 14.590685}}
        defaultZoom = { 14 }
      >

      {/* Adding markers on the map */}
      {this.props.venues.map((venue) =>
        <Marker
          key={venue.id}
          title={venue.name}
          animation={venue.animation}
          position={{lat: venue.location.lat, lng: venue.location.lng}}
          onClick={() => this.props.openInfoWindow(venue)}
          />)
      }
      </GoogleMap>
   ));

  return(
      <div>
        <GoogleMapApp
          containerElement={
            <div style={{ height: '500px', width: '100%' }} />}
          mapElement={
            <div style={{ height: '100%' }} />}
        />
      </div>
   );
   }
};

export default Map;
