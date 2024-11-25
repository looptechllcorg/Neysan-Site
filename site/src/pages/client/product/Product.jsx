import React, { useState } from 'react'
import "./Product.scss"
import productCloud from "../../../assets/image/productImage/productCloud.png"
import { categories, productsData } from '../../../MyDatas/MyDatas'
import { motion, AnimatePresence } from "framer-motion";
const Product = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");


  const filteredProducts = selectedCategory === "All"
    ? productsData 
    : productsData.filter(product => product.category === selectedCategory);
  return (
    <main>
      <section id='products'>
          <div className="container">
            <div className="row">
                  <div className="sectionHeader">
                    <p>.. Increased HEALTH With NEYSAN ..</p>
                    <h2>PRODUCTS</h2>
                    <h3>TƏBİƏTDƏN SİZƏ TİPLİ TEXT</h3>
                  </div>
            </div>
            <div className="row py-3">
            {categories.map((category) => (
             <div className="col-2">
               <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`filterBtn ${
                  selectedCategory === category ? "btnActive" : ""
                }`}
              >
                {category}
              </button>
             </div>
            ))}

          </div>
            <div className="row py-5">
            <AnimatePresence>
            {productsData && filteredProducts.map((product , index)=>(
                   <motion.div
                   key={product.id}
                   className="col-xxl-3 col-lg-4 col-md-6 col-sm-12"
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, y: -20 }} 
                   transition={{ duration: 0.4 }} 
                 >

                <div className="productCard">
                  <div className="cardImg" style={{ "--circle-color": `${product.bgColor}` }}>
                    <img src={product.image} alt={product.productName} />
                    <div className="imageBackground"></div>
                   <img className='cloud' src={productCloud} alt="" />
                  </div>
                  <div className="cardText">
                    <h4>{product.productName}</h4>
                    <p> {product.productWeight}</p>
                  </div>
                </div>
              
              </motion.div>
              )
                
              )}
            </AnimatePresence>
             
              
            </div>
          </div>
      </section>
    </main>
  )
}

export default Product