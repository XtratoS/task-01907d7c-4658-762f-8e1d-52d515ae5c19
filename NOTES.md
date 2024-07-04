# What is this?

This is an Asynchronous Map Navigation, an interactive web-page that allows you to move around dragging a pin on google maps.

The position of the pin is stored in your browser's memory, which will be restored whenever you reload the page or close the page and reopen it at some point.

# What did I do?

1. svelte.config.js
   1. Use static adapter for building a static website
      1. @sveltejs/adapter-static
      2. set pages to 'build' and assets to 'build/assets'
   2. set paths
      1. paths.base ?
      2. paths.assets needs to be the absolute path of the assets
2. Environment variables
   1. create .env file in src dir
   2. prefix variable key with `VITE_`
   3. use the variable `import.meta.env.KEY`
3. page.ts
   1. export const prerender = true;
   2. export const ssr = false;
4. google maps
   1. @googlemaps/js-api-loader
   2. @types/google.maps
   3. loader

      ```ts
      const { Loader } = await import('@googlemaps/js-api-loader');
      const loader = new Loader({
        apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
        version: "weekly"
      });
      ```
   4. load libraries

      ```ts
      const { Map } = await loader.importLibrary("maps");
      map = new Map(ref, mapOptions);
      ```
      ```ts
      const { AdvancedMarkerElement } = await loader.importLibrary("marker");
      marker = new AdvancedMarkerElement(markerOptions);
      ```
   5. add event listeners

      ```ts
      map.addListener("zoom_changed", () => {
        mapZoom.set(map.getZoom() || 15);
      });

      marker.addListener("dragend", () => {
        markerLocation.set(marker.position as google.maps.LatLngLiteral);
      });
      ```
5. Created a [new map id](https://developers.google.com/maps/documentation/get-map-id) to use
6. Handling window resize in order to abbreviate coordinates not to obstruct the map controls
   ```ts
   let smallScreen = window.matchMedia("(max-width: 768px)").matches;
   ```
7. using svelte's window directive
   ```ts
   <svelte:window on:resize={onResize} />
   ```
8. [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)
9. global.css
   ```css
   html, body {
     margin: 0;
     padding: 0;
     width: 100%;
     height: 100%;
     box-sizing: border-box;
     font-family: 'Roboto', sans-serif;
     background-color: #f0f0f0;
   }
   ```
10. useGeoLocation hook
    ```ts
    export const useGeoLocation = (callback: Function) => {
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
      }

      const positionOptions = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      }

      navigator.geolocation.getCurrentPosition(successCallback, errorCallback, positionOptions);
    }
    ```
11.
