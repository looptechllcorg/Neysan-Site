import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import "./ContactBanner.scss"
import BannerImage from "../../../../assets/image/ContactBannerImage.png"
import mapLocation from "../../../../assets/image/locationIcon.png"
const ContactBanner = () => {
    const position = [40.4093, 49.8671];
    // const options = {

    //     scrollwheel: false, 
    //     zoomControl: true, 
    // };
    const icon = L.icon({
      iconUrl: mapLocation,
      iconSize: [58, 58],
    });
  return (
    <>
    <section id='contactBanner' style={{backgroundImage: `url(${BannerImage})`}}>
        <div className="bannerText">
          <h2>Contact Us</h2>
          <p>Home - Contact</p>
        </div>
    </section>
    
    <section id='map' >
      {/* <MapContainer center={position} options={options} zoom={13} style={{ height: '100%', width: '100%' }}>
      <TileLayer
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
          Bakü  Merkezi
          </Popup>
        </Marker>
      </MapContainer> */}
      <MapContainer
                center={position}
                zoom={12}
                scrollWheelZoom={true}
                style={{ width: "100%", height: "100%", zIndex: "5" }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position} icon={icon}>
                  <Popup></Popup>
                </Marker>
              </MapContainer>
    </section>
    </>
  )
}

export default ContactBanner


