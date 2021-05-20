import marker from './assets/marker.svg';

export const baseUrl = 'https://ipgeolocation.abstractapi.com/v1/?api_key=';
export const apiKey = '663aec5c87874a8fa25819e057deb530'
export const queryUrl = '&ip_address=';

const L = require('leaflet');
export const markerIcon = L.icon({
    iconUrl: marker,
    iconSize: [48, 48],
    iconAnchor: [32, 64],
});