<script lang="ts">
  import { onDestroy, onMount } from 'svelte';
  import { get } from 'svelte/store';
  import { mapZoom, markerLocation } from '$lib/stores';
  import type { Loader } from '@googlemaps/js-api-loader';

  let map: google.maps.Map;
  let marker: google.maps.marker.AdvancedMarkerElement;
  let ref: HTMLDivElement;
  let unsubscribe: () => void;

  onMount(async () => {
    await initMap();
  });

  onDestroy(() => {
    unsubscribe && unsubscribe();
  });

  const loadAndAttachMapToHTMLDiv = async (loader: Loader, ref: HTMLDivElement, mapOptions: google.maps.MapOptions) => {
    // Import the map library
    const { Map } = await loader.importLibrary("maps");
    // Create the map and attach it to the ref element
    map = new Map(ref, mapOptions);
    // Update the zoom value in the store
    map.addListener("zoom_changed", () => {
      mapZoom.set(map.getZoom() || 15);
    });
  }

  const loadAndAttachMarkerToMap = async (loader: Loader, markerOptions: google.maps.marker.AdvancedMarkerElementOptions) => {
    // Import the marker library
    const { AdvancedMarkerElement } = await loader.importLibrary("marker");
    // Create a marker and attach it to the map
    marker = new AdvancedMarkerElement(markerOptions);
    // marker.addListener()
    // Update the marker location in the store whenever it's dragged
    marker.addListener("dragend", () => {
      markerLocation.set(marker.position as google.maps.LatLngLiteral);
    });
  }

  const initMap = async () => {
    const { Loader } = await import('@googlemaps/js-api-loader');
    const loader = new Loader({
      apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
      version: "weekly"
    });

    const mapOptions: google.maps.MapOptions = {
      center: get(markerLocation),
      zoom: get(mapZoom),
      mapId: '51562447c0a38a88',
      fullscreenControl: false,
    }
    await loadAndAttachMapToHTMLDiv(loader, ref, mapOptions);

    const markerOptions: google.maps.marker.AdvancedMarkerElementOptions = {
      position: get(markerLocation),
      title: "Hello World!",
      gmpDraggable: true,
      map
    }
    await loadAndAttachMarkerToMap(loader, markerOptions);
  }
</script>

<div bind:this={ref} id="map" style="width: 100%; height: 100%;"></div>