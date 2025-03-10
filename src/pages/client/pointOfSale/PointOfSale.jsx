import React, { useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './PointOfSale.scss'
import { MapsBrancs } from '../../../MyDatas/MyDatas';
import mapLocation from "../../../assets/image/locationIcon.png"
import { useTranslation } from 'react-i18next';
const PointOfSale = () => {
  const [location , setLocation] = useState([40.4093, 49.8671])
  const [activeBranchIndex, setActiveBranchIndex] = useState(0);
  const [map, setMap] = useState(null);

 const icon = L.icon({
      iconUrl: mapLocation,
      iconSize: [58, 58],
    });
  const onClickMarketAddress = (item, index) => {
    setActiveBranchIndex(index);
    const coordinates = item.coordinates.split(",");
    setLocation([coordinates[0], coordinates[1]]);
    map.setView([coordinates[0], coordinates[1]], map.getZoom(), {
      animate: true,
      duration: 1,
    });
  };
    const {t} = useTranslation()
  return (
    <main>

      <section id='pointOfSale'>
        <div className="container">
          <div className="row">
            <div className="col-lg-7 p-0">
              <div className="googleMap">
              <MapContainer
                center={location}
                zoom={12}
                scrollWheelZoom={true}
                ref={setMap}
                
                style={{ width: "100%", height: "100%", zIndex: "5" }}
              >
                 
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                />
                <Marker position={location} icon={icon}>
                  <Popup></Popup>
                </Marker>
              </MapContainer>
              </div>
            </div>
            <div className="col-lg-5 col-sm-12 p-0">
                <div className="marketLocations">
                  <div className="marketTitle">
                    <h3>{t("ourLocation")}</h3>
                  </div>
                <div className="margetInfoWrapper">
              {MapsBrancs.map((item, index) => (
                <div
                  key={item.id}
                  className={`locationAddressCart ${
                    index === activeBranchIndex ? "activeElement" : ""
                  }`}
                >
                  <div className="marketNameAndMarketAddress">
                    <h5 className="marketName">{t(item.title)}</h5>
                    <p className="address">{t(item.address)}</p>
                  </div>
                  <button
                    onClick={() => {
                      onClickMarketAddress(item, index);
                    }}
                    className="WebShowOnMapBtn"
                  >
                    {t("showOnMap")}
                  </button>
                  <a
                 
                    href={item.map_url}
                    target="_blank"
                    className="MobileShowOnMapBtn"
                  >
                    {t("showOnMap")}
                  </a>
                </div>
              ))}
            </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default PointOfSale