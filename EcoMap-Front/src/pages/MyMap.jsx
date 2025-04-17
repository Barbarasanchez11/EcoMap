import  { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents } from 'react-leaflet';
import '../styles/MyMap.css';

const MyMap = () => {
  const [position, setPosition] = useState([40.4168, -3.7038]); 
  const [clickedPosition, setClickedPosition] = useState(null);

  

  // Componente para manejar clics en el mapa
  const MapClickHandler = () => {
    useMapEvents({
      click(e) {
        const { lat, lng } = e.latlng;
        console.log('Clic en el mapa:', { lat, lng });
        setClickedPosition([lat, lng]);
      },
    });
    return null;
  };

  // Componente para centrar el mapa dinámicamente
  const RecenterMap = ({ center }) => {
    const map = useMap();
    useEffect(() => {
      console.log('Centrando mapa en:', center);
      map.setView(center, map.getZoom());
    }, [center, map]);
    return null;
  };


  console.log('Render - Posición:', position, 'Clic:', clickedPosition);

  return (
    <main className='main-hero'>

    <MapContainer className="map-container" center={position} zoom={13}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          ¡Aquí estoy! <br /> Madrid, España.
        </Popup>
      </Marker>
      {clickedPosition && (
        <Marker position={clickedPosition}>
          <Popup>
            Clic en: <br /> Lat: {clickedPosition[0]}, Lng: {clickedPosition[1]}
          </Popup>
        </Marker>
      )}
      <MapClickHandler />
      <RecenterMap center={position} />
    </MapContainer>
    </main>
  );
};

export default MyMap;