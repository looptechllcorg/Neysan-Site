import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import "./ContactBanner.scss"
import BannerImage from "../../../../assets/image/picture5-min.jpg"
import mapLocation from "../../../../assets/image/locationIcon.png"
import { useTranslation } from 'react-i18next';
const ContactBanner = () => {
      const {t} = useTranslation()
    const position = [40.4093, 49.8671];
    const icon = L.icon({
      iconUrl: mapLocation,
      iconSize: [58, 58],
    });
  return (
    <>
    <section id='contactBanner' style={{backgroundImage: `url(${BannerImage})`}}>
        <div className="bannerText">
          <h2>{t("contactUs")}</h2>
          <p>{t("contactBanner")}</p>
        </div>
    </section>
    
    <section id='map' >
      <MapContainer
                center={position}
                zoom={12}
                scrollWheelZoom={true}
                style={{ width: "100%", height: "100%", zIndex: "5" }}
              >
                <TileLayer
                                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                  url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
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


