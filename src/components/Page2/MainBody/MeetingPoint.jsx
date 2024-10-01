import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix default marker issue with React-Leaflet
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const MeetingPoint = () => {
  const position = [51.505, -0.09]; // Example coordinates (replace with actual meeting point)

  return (
    <div className="max-w-full md:max-w-4xl mx-auto p-4 font-sans">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center md:text-left">Meeting Point</h2>

      <div className="bg-green-100 rounded-lg overflow-hidden shadow-md">
        <MapContainer center={position} zoom={13} className="h-72 md:h-96 w-full">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>
              Cafe amics campe avengers<br />A nice meeting spot.
            </Popup>
          </Marker>
        </MapContainer>
      </div>

      <p className="mt-4 text-sm text-gray-600 text-center md:text-left">
        Note: This is an interactive map. You can zoom in/out and explore the area.
      </p>
    </div>
  );
};

export default MeetingPoint;
