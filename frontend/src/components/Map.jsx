import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const Map = () => {
    const [position, setPosition] = useState([51.505, -0.09]); // Default coordinates
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (pos) => {
                    const { latitude, longitude } = pos.coords;
                    setPosition([latitude, longitude]);
                    setLoaded(true);
                },
                (err) => {
                    console.error('Error fetching location:', err);
                    setLoaded(true);
                }
            );
        }
    }, []);

    return (
        <div style={{ height: '100vh', width: '100%' }}>
            {loaded ? (
                <MapContainer
                    center={position}
                    zoom={12}
                    style={{ height: '100%', width: '100%' }}
                    zoomControl={false} // Disables zoom in/out buttons
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={position}>
                        <Popup>Your Current Location</Popup>
                    </Marker>
                </MapContainer>
            ) : (
                <div className='h-[40vh] text-xl font-mono w-full flex justify-center items-center'>
                    <p>Loading your location...</p>
                </div>
            )}
        </div>
    );
};

export default Map;
