import { writable } from "svelte/store";

/**
 * Use the browser's Geolocation API to get the current location of the user
 */
export const useGeoLocation = () => {
  // location store
  const store = writable<{location: google.maps.LatLngLiteral|null}>({location: null});

  const successCallback = (position: GeolocationPosition) => {
    store.set({location: {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    }});
  }

  const errorCallback = (error: GeolocationPositionError) => {
    console.error(error);
    store.set({location: null});
  }

  // position options as per MDN docs
  const positionOptions = {
    enableHighAccuracy: true,
    maximumAge: 10000
  }

  navigator.geolocation.getCurrentPosition(successCallback, errorCallback, positionOptions);

  return store;
}