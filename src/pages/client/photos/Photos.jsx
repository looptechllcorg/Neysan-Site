import React, { useState } from 'react'
import "./Photos.scss"
import { PhotoGallery } from '../../../MyDatas/MyDatas'
import SectionHeader from '../../../components/SectionsHeader/SectionHeader';

const Photos = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const openModal = (imgSrc) => {
      setSelectedImage(imgSrc);
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setSelectedImage(null);
      setIsModalOpen(false);
    };
  return (
    <section id='photos'>
        <div className="container">
        <SectionHeader sectionHeaderh2="photos"/>
            <div className="row mt-5">
                <div className="col-lg-7 col-md-12 col-sm-12">
                    <div className="row flex-wrap">
                        <div className="col-lg-7 col-sm-7 col-xs-7 g-3">
                            <img onClick={() => openModal(PhotoGallery[0].imgSrc)}  className='galeryImage imageSize-580' src={PhotoGallery[0]?.imgSrc} alt="" />
                        </div>
                        <div className="col-lg-5 col-sm-5 col-xs-5">
                      <div className="row">
                      <div className="col-12 col-sm-12 g-3">
                            <img  onClick={() => openModal(PhotoGallery[1].imgSrc)} className='galeryImage imageSize-285' src={PhotoGallery[1]?.imgSrc} alt="" />
                        </div>
                        <div className="col-12 col-sm-12 g-3">
                            <img onClick={() => openModal(PhotoGallery[2].imgSrc)} className='galeryImage imageSize-285' src={PhotoGallery[2].imgSrc} alt="" />
                        </div>
                      </div>
                        </div>
                        <div className="col-12 col-sm-12 g-3">
                            <img onClick={() => openModal(PhotoGallery[3].imgSrc)} className='galeryImage imageSize-285' src={PhotoGallery[3].imgSrc} alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 col-md-12 col-sm-12">
                <div className="row">
                <div className="col-12 col-sm-12 g-3">
                    <img onClick={() => openModal(PhotoGallery[4].imgSrc)} className='galeryImage imageSize-285' src={PhotoGallery[4].imgSrc} alt="" />
                </div>
                <div className="col-12 col-sm-12 g-3">
                    <img onClick={() => openModal(PhotoGallery[5].imgSrc)} className='galeryImage imageSize-580' src={PhotoGallery[5].imgSrc} alt="" />
                </div>
                </div>
                </div>
            </div>
           
                
        </div>
        {/* Modal */}
        {isModalOpen && (
          <div className="modal" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <img src={selectedImage} alt="Selected" />
              <button onClick={closeModal} className="close-modal">X</button>
            </div>
          </div>
        )}
    </section>
  )
}

export default Photos