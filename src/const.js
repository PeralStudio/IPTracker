import marker from "./assets/marker.svg";

export const baseUrl = "https://ipgeolocation.abstractapi.com/v1/?api_key=";
export const apiKey = "767b7eb30a7d49a4a295495e1a1531d6";
export const queryUrl = "&ip_address=";

const L = require("leaflet");
export const markerIcon = L.icon({
    iconUrl: marker,
    iconSize: [48, 48],
    iconAnchor: [32, 64]
});
