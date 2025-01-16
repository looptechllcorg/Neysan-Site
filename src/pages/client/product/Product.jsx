import React, { useState } from 'react'
import "./Product.scss"
import productCloud from "../../../assets/image/productImage/productCloud.png"
import { categories, productsData } from '../../../MyDatas/MyDatas'
import { motion, AnimatePresence } from "framer-motion";
import LeavePattern from '../../../assets/pattern/leaves2Pattern.png'
import QaragatPattern from '../../../assets/pattern/qaragat1.png'
import MorugPattern from '../../../assets/pattern/qirmiziMorug2.png'
import FlowerPattern from '../../../assets/pattern/saffronFlower2.png'
const Product = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = selectedCategory === "All"
    ? productsData 
    : productsData.filter(product => product.category === selectedCategory);

    const leaves = [
      { id: 1, top: "10%", left: "-3%",right:"auto", size: "100px",src:LeavePattern },
      { id: 2, top: "24  %", left: "auto",right:"1%", size: "80px",src:LeavePattern },
     { id: 3, top: "48%", left: "-6%",right:"auto", size: "180px",src:MorugPattern },
       { id: 4, top: "65%", left: "auto",right:"0%", size: "100px",src:FlowerPattern },
       { id: 5, top: "85%", left: "-1%",right:"auto", size: "80px",src:LeavePattern },
      { id: 6, top: "91%", left: "auto",right:"0%", size: "90px",src:LeavePattern },
      
    ];
  return (
    <main  style={{position:"relative"}}>
  {leaves.map((leaf) => (
        <img
          key={leaf.id}
          src={leaf.src}
          alt="Yaprak"
          style={{
            position: "absolute",
            top: leaf.top,
            left: leaf.left,
            right:leaf.right,
            width: leaf.size,
            height: leaf.size,
            objectFit:"contain"
            // zIndex:"99"
          }}
        />
      ))}
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
            {categories.map((category,index) => (
             <div className="col-lg-2 col-sm-3" key={index}>
               <button
                
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