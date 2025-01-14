import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import "./ContactBanner.scss"
import BannerImage from "../../../../assets/image/ContactBannerImage.png"
const ContactBanner = () => {
    const position = [40.4093, 49.8671];
    const options = {

        scrollwheel: false, 
        zoomControl: true, 
    };
  return (
    <>
    <section id='contactBanner' style={{backgroundImage: `url(${BannerImage})`}}>
        <div className="bannerText">
          <h2>Contact Us</h2>
          <p>Home - Contact</p>
        </div>
    </section>
    
    <section id='map' >
      <MapContainer center={position} options={options} zoom={13} style={{ height: '100%', width: '100%' }}>
      <TileLayer
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
          Bakü  Merkezi
          </Popup>
        </Marker>
      </MapContainer>
    </section>
    </>
  )
}

export default ContactBanner


