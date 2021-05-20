import { markerIcon } from '../../const';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';


const ResultTrackerVista = ({ data }) => {
    return (
        <>
            {data.status === 200 &&
                <>
                    {/* Div con la data del IP buscado */}
                    <div className="container_result_ip" style={{ backgroundColor: '#505b66', borderRadius: '10px', width: '50%', textAlign: 'center', padding: '10px' }}>
                        <h2 style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', fontWeight: '700' }}>{data.data.ip_address}{data.data.flag !== null && <img src={data.data.flag.svg} style={{ width: '40px', marginLeft: '30px', marginTop: '5px' }} alt='flag' />}</h2>
                        <p><b>Operador:</b> {data.data.connection.isp_name}, {data.data.connection.organization_name}</p>
                        {data.data.country !== null && <p><b>País:</b> {data.data.country}</p>}
                        {data.data.city !== null && <p><b>Ciudad: </b>{data.data.city}</p >}
                        {data.data.postal_code !== null && <p><b>ZIP:</b> {data.data.postal_code}</p>}
                    </div>

                    {/* Mapa (Leaflet) con las coordenadas del IP buscado */}
                    <MapContainer center={[data.data.latitude, data.data.longitude]} zoom={12} scrollWheelZoom={false} style={{ height: '300px', width: '50%', marginTop: '20px' }}>
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker
                            position={[data.data.latitude, data.data.longitude]}
                            icon={markerIcon}
                        >
                            <Popup>
                                {data.data.city} <br /> {data.data.postal_code} <br />{data.data.country}
                            </Popup>
                        </Marker>
                    </MapContainer>
                </>
            }
        </>
    );
}

export default ResultTrackerVista;