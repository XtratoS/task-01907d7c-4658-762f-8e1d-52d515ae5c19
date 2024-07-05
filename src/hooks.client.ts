import { writable } from "svelte/store";

/**
 * Use the browser's Geolocation API to get the current location of the user
 */
export const useGeoLocation = () => {
  const store = writable<{location: google.maps.LatLngLiteral|null}>({location: null});
  // let location: google.maps.LatLngLiteral|null = null;
  // if (!navigator.geolocation) return {location};
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

  const positionOptions = {
    enableHighAccuracy: true,
    maximumAge: 10000
  }

  navigator.geolocation.getCurrentPosition(successCallback, errorCallback, positionOptions);

  return store;
}