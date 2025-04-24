import React, { useState } from 'react';
import './Product.scss';
import productCloud from '../../../assets/image/productImage/productCloud.png';
import { categories, productsData } from '../../../MyDatas/MyDatas';
import { motion, AnimatePresence } from 'framer-motion';
import LeavePattern from '../../../assets/pattern/leaves2Pattern.png';
import QaragatPattern from '../../../assets/pattern/qaragat1.png';
import MorugPattern from '../../../assets/pattern/qirmiziMorug2.png';
import FlowerPattern from '../../../assets/pattern/saffronFlower2.png';
import { useTranslation } from 'react-i18next';
import { Link, NavLink } from 'react-router-dom';
import SectionHeader from '../../../components/SectionsHeader/SectionHeader';

const Product = () => {
	const [visibleProducts, setVisibleProducts] = useState(9);
	const { t } = useTranslation();
	console.log('prData=', productsData);

	const handleLoadMore = () => {
		setVisibleProducts((prev) => prev + 9);
	};

	const [selectedCategory, setSelectedCategory] = useState('All');

	const filteredProducts =
		selectedCategory === 'All'
			? productsData
			: productsData.filter((product) => product.category === selectedCategory);

	const displayedProducts = filteredProducts.slice(0, visibleProducts);
	const leaves = [
		{ id: 1, top: '22vh', left: '0%', right: 'auto', size: '90px', src: LeavePattern },
		{ id: 2, top: '65vh', left: 'auto', right: '1%', size: '80px', src: LeavePattern },
		{ id: 3, top: '48%', left: '0%', right: 'auto', size: '180px', src: MorugPattern },
		{ id: 4, top: '65%', left: 'auto', right: '0%', size: '100px', src: FlowerPattern },
		{ id: 5, top: '85%', left: '0%', right: 'auto', size: '80px', src: LeavePattern },
		{ id: 6, top: '91%', left: 'auto', right: '0%', size: '90px', src: LeavePattern },
	];
	return (
		<main style={{ position: 'relative' }}>
			{leaves.map((leaf) => (
				<img
					key={leaf.id}
					src={leaf.src}
					alt="Yaprak"
					style={{
						position: 'absolute',
						top: leaf.top,
						left: leaf.left,
						right: leaf.right,
						width: leaf.size,
						height: leaf.size,
						objectFit: 'contain',
						zIndex: '-1',
					}}
				/>
			))}
			<section id="products">
				<div className="container">
					<SectionHeader sectionHeaderh2="products" sectionHeaderh3="productsBannertext" />
					<div className="row justify-content-center py-3">
						{categories.map((category, index) => (
							<div className="col-lg-2 col-sm-3 col-6 g-2" key={index}>
								<button
									onClick={() => setSelectedCategory(category)}
									className={`filterBtn ${selectedCategory === category ? 'btnActive' : ''}`}
								>
									{t(category)}
								</button>
							</div>
						))}
					</div>
					<div className="row py-5">
						<AnimatePresence>
							{displayedProducts.map((product, index) => (
								<motion.div
									key={product.id}
									className="col-xxl-3 col-lg-4 col-md-6 col-sm-12"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -20 }}
									transition={{ duration: 0.4 }}
								>
									<NavLink to={`/product/${product.id}`}>
										<div className="productCard">
											<div className="cardImg" style={{ '--circle-color': `${product.bgColor}` }}>
												<img
													className="prdocutCardImage"
													src={product.image}
													alt={product.productName}
												/>
												<div className="imageBackground"></div>
												<img className="cloud" src={productCloud} alt="" />
											</div>
											<div className="cardText">
												<h4>{t(product.productName)}</h4>

												<p> {t(product.productWeight)}</p>
											</div>
										</div>
									</NavLink>
								</motion.div>
							))}
						</AnimatePresence>

						{visibleProducts < filteredProducts.length && (
							<div className="container">
								<div className="row justify-content-center">
									<div className="col-lg-4">
										<div className="text-center">
											<button className="filterBtn" onClick={handleLoadMore}>
												Load More
											</button>
										</div>
									</div>
								</div>
							</div>
						)}
					</div>
				</div>
			</section>
		</main>
	);
};

export default Product;
