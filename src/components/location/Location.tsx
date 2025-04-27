'use client'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import 'leaflet/dist/leaflet.css'
import L from 'leaflet';

import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';


const defaultIcon = L.icon({
  iconUrl: (typeof markerIcon === 'string' ? markerIcon : markerIcon.src),
  shadowUrl: (typeof markerShadow === 'string' ? markerShadow : markerShadow.src),
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = defaultIcon;

export const Location = () => {
    const position: [number, number]= [51.50080263801094, -0.12470050427637647]
   



    return (
        <div className="w-full">
            <MapContainer
                center={position}
                zoom={20}
                style={{ height: '50vh', width: '100%'}}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>Big Ben</Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}