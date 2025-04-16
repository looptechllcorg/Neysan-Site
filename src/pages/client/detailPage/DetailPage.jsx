import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { productsData } from '../../../MyDatas/MyDatas';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';
import { Autoplay } from 'swiper/modules';
import ArrowLeft from '../../../assets/icons/ArrowLeft';
import ArrowRight from '../../../assets/icons/ArrowRight';
import productCloud from '../../../assets/image/productImage/productCloud.png';
import CheckIcon from '../../../assets/icons/CheckIcon';
import './DetailPage.scss';
import { useTranslation } from 'react-i18next';
import SectionHeader from '../../../components/SectionsHeader/SectionHeader';
const DetailPage = () => {
	const { t } = useTranslation();
	const { slug } = useParams();

	const [similarAndParametrsBtn, setsimilarAndParametrsBtn] = useState(true);

	const handleState = () => {
		setsimilarAndParametrsBtn(!similarAndParametrsBtn);
	};

	// Products find one products
	const productData = productsData.find((item) => item.id === parseInt(slug));

	// Oxsar mehsullar tapilmasi
	const featuredProducts = productsData.filter(
		(item) => item.category === productData.category && item.id !== productData.id,
	);
	console.log(featuredProducts);

	const [activeIndex, setActiveIndex] = useState(0);
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const handleSlideChange = (swiper) => {
		setActiveIndex(swiper.realIndex);
	};
	return (
		<main>
			<section id="productDetail">
				<div className="container">
					<SectionHeader />
					<div className="row justify-content-between">
						<div className="col-lg-4">
							<div className="detailImage" style={{ '--circle-color': `${productData.bgColor}` }}>
								<img className="productImage" src={productData.image} alt="" />
								<div className="imageBackground"></div>
								<img className="cloud" src={productCloud} alt="" />
							</div>
						</div>
						<div className="col-lg-7">
							<div className="detailProductInfo">
								<h3 className="productName">{t(productData.productName)}</h3>
								{/* <p className='productWeight'>{t(productData.productWeight)}</p> */}
								<div className="productTitle">
									<ul className="productDetail">
										{productData.productDetail.map((param) => {
											return (
												<li>
													<span>{t(param.title)}</span>
													<div className="detailborder"></div>
													<span>{t(param.value)}</span>
												</li>
											);
										})}
									</ul>
								</div>
								<div className="border"></div>
								<button
									className="detailButton"
									data-bs-target="#exampleModalToggle"
									data-bs-toggle="modal"
								>
									{t('placeOrder')}
								</button>
								{/* <ul className="qualityList">
                      <li><CheckIcon/> Very good skin compatibility</li>
                      <li><CheckIcon/> Deeply hydrating</li>
                      <li><CheckIcon/> Certified by Cosmos Organic </li>
                    </ul> */}
							</div>
						</div>
					</div>
				</div>
			</section>
			<section id="featuredproducts">
				<div className="container">
					<div className="row py-5">
						<div className="sectionHeaderBtns">
							<button
								onClick={() => handleState()}
								className={`${'similarBtn'} ${similarAndParametrsBtn ? 'activeBtn' : ''}`}
							>
								{t('sameProduct')}
							</button>
							<button
								onClick={() => handleState()}
								className={`${'prParametrsBtn'} ${similarAndParametrsBtn ? '' : 'activeBtn'}`}
							>
								{t('productAtribute')}
							</button>
						</div>
					</div>
					<div className="row justify-content-center">
						<div className="col-lg-12">
							{similarAndParametrsBtn ? (
								<div className="sliderBox">
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
													'--text-color': activeIndex === index ? `#fff` : `#000`,
													backgroundColor: activeIndex === index ? item.bgColor : '',
												}}
											>
												<Link to={`/product/${item.id}`}>
													<div className="slide_card">
														<img
															className="slideImage"
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
							) : (
								<div className="productAtribute">
									<div className="calorie">
										<h6 className="title">{t("productTableTitle")}</h6>
										<table>
											<tbody>
												{productData?.productAtribute?.map((item, idx) => (
													<tr className="thtdWarapper" key={idx}>
														<th>{t(item?.title)}</th>
														<td>
															{item?.title === 'terkib'
																? t(item?.value)
																: item?.title === 'enerjiDeyeri'
																? `${t(item?.value)} ${t('kkal')}`
																: `${t(item?.value)} ${t('qr')}`}
														</td>
													</tr>
												))}
											</tbody>
										</table>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</section>
			<section id="checoutModal">
				<div
					class="modal fade"
					id="exampleModalToggle"
					aria-hidden="true"
					aria-labelledby="exampleModalToggleLabel"
					tabindex="-1"
				>
					<div class="modal-dialog modal-dialog-centered">
						<div class="modal-content">
							<div class="modal-header">
								<h1 class="modal-title fs-5" id="exampleModalToggleLabel">
									Modal 1
								</h1>
								<button
									type="button"
									class="btn-close"
									data-bs-dismiss="modal"
									aria-label="Close"
								></button>
							</div>
							<div class="modal-body">
								<form action="">
									<input type="text" value={name} onChange={(e) => setName(e.target.value)} />
									<input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
								</form>
							</div>
							<div class="modal-footer">
								<button
									class="btn btn-primary"
									onClick={() => {
										const message = encodeURIComponent(`Müşteri bilgileri:${name} phone: ${phone}`);
										const whatsappURL = `https://wa.me/994508697723?text=${message}`;
										window.open(whatsappURL, '_blank');
									}}
								>
									send
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default DetailPage;
