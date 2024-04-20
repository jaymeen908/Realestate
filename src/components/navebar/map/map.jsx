import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './map.scss';
import 'leaflet/dist/leaflet.css';
import Pin from '../../pin/pin';

function Map({items}) {
    return (
        <MapContainer className='map' center={[23.1250,72.6233]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {items && items.length > 0 && items.map(item =>(
                <Pin item={item} key={item.id}/>
            ))}
        </MapContainer>
    );
}

export default Map;
