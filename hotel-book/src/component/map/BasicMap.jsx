import './map.scss';
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from 'react-leaflet'
import Pin from '../pin/Pin';
const BasicMap = ({ items }) => {



    return (
        <MapContainer center={[5.614818, -0.205874]} zoom={12} scrollWheelZoom={false} className='map'>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {items.map(item => (
                <Pin item={item} key={item.id} />
            ))}
        </MapContainer>
    )
}

export default BasicMap


5.614818, -0.205874


//<MapContainer center={[48.8566, 2.3922]} zoom={9}>

//<TileLayer
//attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
// url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"

///>


//</MapContainer>




//<MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} className='map'>
//<TileLayer
// attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
///>
//<Marker position={[51.505, -0.09]}>
// <Popup>
//    A pretty CSS3 popup. <br /> Easily customizable.
// </Popup>
//</Marker>
//</MapContainer>

