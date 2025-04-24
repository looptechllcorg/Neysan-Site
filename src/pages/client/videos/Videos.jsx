import React, { useState } from 'react';
import './Videos.scss';
import { VideoGallery } from '../../../MyDatas/MyDatas';
import PlayButton from '../../../assets/icons/PlayButton';
import Fancybox from '../../../components/fancybox/Fancybox';
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
		<section id="photos">
			<div className="container">
				<SectionHeader sectionHeaderh2="videos" />
				<div className="row mt-5">
					<div className="col-lg-6 col-sm-6 g-3">
						<Fancybox>
							<a
								href={VideoGallery[0]?.videoSrc}
								data-fancybox="gallery"
								style={{ backgroundImage: `url(${VideoGallery[0].bgImgSrc})` }}
								className="videoImg imageSize-700"
							>
								<div className="icon">
									<PlayButton />
								</div>
							</a>
						</Fancybox>
					</div>
					<div className="col-lg-6 col-sm-6">
						<div className="row">
							<div className="col-12 g-3">
								<Fancybox>
									<a
										href={VideoGallery[1]?.videoSrc}
										data-fancybox="gallery"
										style={{ backgroundImage: `url(${VideoGallery[1].bgImgSrc})` }}
										className="videoImg imageSize-345"
									>
										<div className="icon">
											<PlayButton />
										</div>
									</a>
								</Fancybox>
							</div>
							<div className="col-12 g-3">
								<Fancybox>
									<a
										href={VideoGallery[2]?.videoSrc}
										data-fancybox="gallery"
										style={{ backgroundImage: `url(${VideoGallery[2].bgImgSrc})` }}
										className="videoImg imageSize-345"
									>
										<div className="icon">
											<PlayButton />
										</div>
									</a>
								</Fancybox>
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
						<button onClick={closeModal} className="close-modal">
							X
						</button>
					</div>
				</div>
			)}
		</section>
	);
};

export default Photos;
