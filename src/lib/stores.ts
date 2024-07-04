import { writable } from "svelte/store";

// Local storage keys.
const MARKER_LOCATION_LOCALSTORAGE_KEY = "marker-location";
const MAP_ZOOM_LOCALSTORAGE_KEY = "map-zoom";

// Helper functions to get and set values in local storage.
const getFromLocalStorage = <T>(key: string) => {
  return JSON.parse(localStorage.getItem(key) || "null") as T|null;
}
const storeInLocalStorage = <T>(key: string, value: T) => {
  localStorage.setItem(key, JSON.stringify(value));
}

// Generic function to create a store that stores the value in local storage.
const CreateLocalStorageStore = <T>(key: string, defaultValue: T) => {
  // Create a store that stores the value.
  // Initial value is either the value from local storage
  // or the default value if no value stored in local storage.
  const store = writable(getFromLocalStorage<T>(key) || defaultValue);
  const { set } = store;
  // New set function that handles storing the value in local storage while updating store value.
  const setAndStore = (value: T) => {
    storeInLocalStorage(key, value);
    set(value);
  }

  return {
    ...store,
    set: setAndStore,
  };
}

const initialCoordinates = {lat: 30.05, lng: 31.35};
// Create a store for marker location.
export const markerLocation = CreateLocalStorageStore<google.maps.LatLngLiteral>(MARKER_LOCATION_LOCALSTORAGE_KEY, initialCoordinates);
// Create a store for map zoom.
export const mapZoom = CreateLocalStorageStore<number>(MAP_ZOOM_LOCALSTORAGE_KEY, 15);
export const geoLocationAvailable = writable(false);