import React, {useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {productsData } from '../../../MyDatas/MyDatas';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';
import {  Navigation } from 'swiper/modules';

import ArrowLeft from '../../../assets/icons/ArrowLeft';
import ArrowRight from '../../../assets/icons/ArrowRight';
import productCloud from "../../../assets/image/productImage/productCloud.png"
import Image from '../../../assets/image/JamBottle1.png'
import CheckIcon from '../../../assets/icons/CheckIcon';
import "./DetailPage.scss"
const DetailPage = () => {
    const {slug} = useParams()
    console.log(slug);
    
    const [activeIndex, setActiveIndex] = useState(0);
  
    const handleSlideChange = (swiper) => {
        setActiveIndex(swiper.realIndex);
      };
  return (
    <main>
        <section id='productDetail'>
          <div className="container">
          <div className="row">
                  <div className="sectionHeader">
                    <p>.. Increased HEALTH With NEYSAN ..</p>
                  </div>
            </div>
            <div className="row justify-content-between">
              <div className="col-lg-4">
                <div className="detailImage" style={{ "--circle-color": `#C8311F` }}>
                  <img src={Image} alt="" />
                  <div className="imageBackground"></div>
                   <img className='cloud' src={productCloud} alt="" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="detailProductInfo">
                
                    <h3 className='productName'>Ag Gilas Murebbesi Limon Ile </h3>
                    <p className='productDetail'>330 ml</p>
                    <div className="productTitle">
                    Nourish your and babies skin with <br />
                    Nourish your and babies skin with  <br />
                    Nourish your and babies skin with <br />
                    </div>
                    <button className="detailButton">Sifaris Et</button>
                    <div className="border"></div>
                    <ul className="qualityList">
                      <li><CheckIcon/> Very good skin compatibility</li>
                      <li><CheckIcon/> Deeply hydrating</li>
                      <li><CheckIcon/> Certified by Cosmos Organic </li>
                    </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id='featuredproducts'>
       <div className="container">
        <div className="row py-5">
          <div className="sectionHeader">
            <h2>OXŞAR MƏHSULLAR</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">

       <div className='sliderBox' style={{ width: '100%',  }}>
      <Swiper
        centeredSlides={true}
        loop={true}  
        breakpoints={{
          769: {
            slidesPerView: 1,
            spaceBetween: 20,
          },

          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}

        pagination={{ clickable: true }}

        onSlideChange={handleSlideChange} 
      
      >
        {productsData.map((item, index) => (
          
          
          <SwiperSlide
            key={item.id}
            style={{
               "--text-color":activeIndex === index ? `#fff` : `#000` ,
              backgroundColor: activeIndex === index ? item.bgColor : "" 
            }}
          >
            <Link to={`/product/${index}`}>
            <div className='slide_card' >
              <img className='slideImage'
                src={item.image}
                alt={item.productName}
              />
              <h3>{item.productName}</h3>
              <p>{item.productWeight}</p>

            </div>
            </Link>
        </SwiperSlide>
        ))}
      </Swiper>
    </div>
          </div>
        </div>
       </div>
    </section>
    </main>
  )
}

export default DetailPage