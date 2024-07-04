export const useGeoLocation = (callback: (position: google.maps.LatLngLiteral|null) => void) => {
  if (!navigator.geolocation) return null;
  const successCallback = (position: GeolocationPosition) => {
    let location: google.maps.LatLngLiteral = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };
    callback(location);
  }

  const errorCallback = (error: GeolocationPositionError) => {
    console.error(error);
    callback(null);
  }

  const positionOptions = {
    enableHighAccuracy: true,
    maximumAge: 10000
  }

  navigator.geolocation.getCurrentPosition(successCallback, errorCallback, positionOptions);
}