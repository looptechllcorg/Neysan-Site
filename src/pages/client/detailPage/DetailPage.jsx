import React, {  useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { productsData } from '../../../MyDatas/MyDatas';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';
import { Autoplay } from 'swiper/modules';
import productCloud from '../../../assets/image/productImage/productCloud.png';
import './DetailPage.scss';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';
import SectionHeader from '../../../components/SectionsHeader/SectionHeader';
const DetailPage = () => {
	const { t } = useTranslation();
	const { slug } = useParams();

	const [similarAndParametrsBtn, setsimilarAndParametrsBtn] = useState(true);

	const validationSchema = Yup.object({
		firstName: Yup.string().required(t('name-error')).min(2, t('minimun')),
		lastName: Yup.string().required(t('lastname-error')).min(2, t('minimun')),
		email: Yup.string().email(t('Invalid-email-address')).required(t('email-error')),
		phoneNumber: Yup.string()
			.matches(/^[0-9]+$/, t('Invalid-number-address'))
			.min(9, t('Invalid-number-address'))
			.required(t('number-error')),
	});

	

	const handleState = () => {
		setsimilarAndParametrsBtn(!similarAndParametrsBtn);
	};

	// Products find one products
	const productData = productsData.find((item) => item.id === parseInt(slug));

	// Oxsar mehsullar tapilmasi
	const featuredProducts = productsData.filter(
		(item) => item.category === productData.category && item.id !== productData.id,
	);

	const [activeIndex, setActiveIndex] = useState(0);
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const handleSlideChange = (swiper) => {
		setActiveIndex(swiper.realIndex);
	};

	const formik = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
			email: '',
			phoneNumber: '',
			message: productData ? t(productData.productName) : '',
		},
		validationSchema: validationSchema,
		onSubmit: (values, { resetForm }) => {
			emailjs
				.send(
					'service_oe7rrp7', // EmailJS servis ID
					'template_8z0emg2', // EmailJS şablon ID
					values,
					'4lXz7K1642U9oFoat', // EmailJS public key
				)
				.then(
					() => {
						Swal.fire({
							position: 'top-end',
							icon: 'success',
							title: t('swalAlertTitle'),
							showConfirmButton: false,
							timer: 1500,
						});
						resetForm();
					},
					(error) => {
						console.error('Email gönderme hatası:', error);
						Swal.fire({
							position: 'top-end',
							icon: 'error',
							title: t('emailError'),
							showConfirmButton: false,
							timer: 1500,
						});
					},
				);
		},
	});
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
										<h6 className="title">{t('productTableTitle')}</h6>
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
					className="modal fade"
					id="exampleModalToggle"
					aria-hidden="true"
					aria-labelledby="exampleModalToggleLabel"
					tabIndex="-1"
				>
					<div className="modal-dialog modal-dialog-centered">
						<div className="modal-content">
							<div className="modal-header">
								<button
									type="button"
									className="btn-close"
									data-bs-dismiss="modal"
									aria-label="Close"
								></button>
							</div>
							<div className="modal-body">
								<form onSubmit={formik.handleSubmit}>
									<div className="formInputs">
										<div className="formInputDiv">
											<label htmlFor="firstName">{t('firstName')}</label>
											<input
												type="text"
												id="firstName"
												name="firstName"
												placeholder={t('firstName')}
												onChange={formik.handleChange}
												value={formik.values.firstName}
											/>
											{formik.errors.firstName && (
												<div style={{ color: 'red' }}>{formik.errors.firstName}</div>
											)}
										</div>
										<div className="formInputDiv">
											<label htmlFor="lastName">{t('lastName')}</label>
											<input
												type="text"
												id="lastName"
												name="lastName"
												placeholder={t('lastName')}
												onChange={formik.handleChange}
												value={formik.values.lastName}
											/>
											{formik.errors.lastName && (
												<div style={{ color: 'red' }}>{formik.errors.lastName}</div>
											)}
										</div>
										<div className="formInputDiv">
											<label htmlFor="phoneNumber">{t('number')}</label>
											<input
												type="tel"
												id="phoneNumber"
												name="phoneNumber"
												placeholder={t('number')}
												onChange={formik.handleChange}
												value={formik.values.phoneNumber}
											/>
											{formik.errors.phoneNumber && (
												<div style={{ color: 'red' }}>{formik.errors.phoneNumber}</div>
											)}
										</div>
										<div className="formInputDiv">
											<label htmlFor="email">{t('email')}</label>
											<input
												type="text"
												id="email"
												name="email"
												placeholder={t('email')}
												onChange={formik.handleChange}
												value={formik.values.email}
											/>
											{formik.errors.email && (
												<div style={{ color: 'red' }}>{formik.errors.email}</div>
											)}
										</div>
										{/* <div className="formTextAreaDiv">
											<label htmlFor="message">{t('message')}</label>
											<textarea
												name="message"
												id="message"
												placeholder={t('message2')}
												onChange={formik.handleChange}
												value={formik.values.message}
											></textarea>
											{formik.errors.message && (
												<div style={{ color: 'red' }}>{formik.errors.message}</div>
											)}
										</div> */}
									</div>
									<div className="formButton">
										<button type="submit">{t('send')}</button>
									</div>
								</form>
							</div>

						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default DetailPage;
