import React, {useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {productsData } from '../../../MyDatas/MyDatas';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';
import {  Autoplay } from 'swiper/modules';

import ArrowLeft from '../../../assets/icons/ArrowLeft';
import ArrowRight from '../../../assets/icons/ArrowRight';
import productCloud from "../../../assets/image/productImage/productCloud.png"
import Image from '../../../assets/image/JamBottle1.png'
import CheckIcon from '../../../assets/icons/CheckIcon';
import "./DetailPage.scss"
import { useTranslation } from 'react-i18next';
const DetailPage = () => {
  const {t} = useTranslation()
    const {slug} = useParams()


    const productData = productsData.find(item => item.id === parseInt(slug));
        console.log(productData);
        
    
    const featuredProducts = productsData.filter(item =>item.category == productData.category)

console.log(featuredProducts);


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
                <div className="detailImage" style={{ "--circle-color": `${productData.bgColor}` }}>
                  <img className='productImage' src={productData.image} alt="" />
                  <div className="imageBackground"></div>
                   <img className='cloud' src={productCloud} alt="" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="detailProductInfo">
                
                    <h3 className='productName'>{t(productData.productName)}</h3>
                    <p className='productDetail'>{t(productData.productWeight)}</p>
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
          <div className="col-lg-12">

       <div className='sliderBox' style={{ width: '100%',  }}>
      <Swiper
        centeredSlides={true}
        loop={true}  
        speed={3000}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
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
        modules={[Autoplay]}
        pagination={{ clickable: true }}

        onSlideChange={handleSlideChange} 
      
      >
        {featuredProducts.map((item, index) => (
          
          
          <SwiperSlide
            key={item.id}
            style={{
               "--text-color":activeIndex === index ? `#fff` : `#000` ,
              backgroundColor: activeIndex === index ? item.bgColor : "" 
            }}
          >
            <Link to={`/product/${item.id}`}>
            <div className='slide_card' >
              <img className='slideImage'
                src={item.image}
                alt={item.productName}
              />
              <h3>{t(item.productName)}</h3>
              <p>{t(item.productWeight)}</p>

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