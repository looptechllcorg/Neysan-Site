import React from 'react'
import BestProduct from './bestProduct/BestProduct'
import OurServices from './ourServices/OurServices'
import CompanyBanner from './companyBanner/CompanyBanner'
import { ourCompanyDatas } from '../../../MyDatas/MyDatas'
import LeavePattern from '../../../assets/pattern/leaves2Pattern.png'
import MorugPattern from '../../../assets/pattern/qirmiziMorug2.png'
import FlowerPattern from '../../../assets/pattern/saffronFlower2.png'
import "./OurCompany.scss"
const OurCompany = () => {
  const leaves = [
    { id: 1, top: "20vh", left: "-3%",right:"auto", size: "100px",src:LeavePattern },
    { id: 2, top: "25vh", left: "auto",right:"0%", size: "100px",src:FlowerPattern },
    { id: 3, top: "125vh", left: "auto",right:"1%", size: "80px",src:LeavePattern },
   { id: 4, top: "245vh", left: "-6%",right:"auto", size: "180px",src:MorugPattern },
     { id: 5, top: "320vh", left: "auto",right:"0%", size: "100px",src:FlowerPattern },
    { id: 6, top: "360vh", left: "-1%",right:"auto", size: "80px",src:LeavePattern },
  
    
  ];
  return (
    <main>
       {leaves.map((leaf) => (
        <img
          key={leaf.id}
          src={leaf.src}
          alt="Yaprak"
          className={`ourCompanyPattern${leaf.id}`}
          style={{
            position: "absolute",
            top: leaf.top,
            left: leaf.left,
            right:leaf.right,
            width: leaf.size,
            height: leaf.size,
            objectFit:"contain",
            zIndex:"-1"
          }}
        />
      ))}
      <CompanyBanner/>
      <BestProduct text={ourCompanyDatas.text} data={ourCompanyDatas.datas}/>
      <OurServices/>
    </main>
  )
}

export default OurCompany