import React from 'react'
import BestProduct from './bestProduct/BestProduct'
import OurServices from './ourServices/OurServices'
import CompanyBanner from './companyBanner/CompanyBanner'
import { ourCompanyDatas } from '../../../MyDatas/MyDatas'
import LeavePattern from '../../../assets/pattern/leaves2Pattern.png'
import MorugPattern from '../../../assets/pattern/qirmiziMorug2.png'
import FlowerPattern from '../../../assets/pattern/saffronFlower2.png'

const OurCompany = () => {
  const leaves = [
    { id: 1, top: "20%", left: "-3%",right:"auto", size: "100px",src:LeavePattern },
    { id: 2, top: "25%", left: "auto",right:"0%", size: "100px",src:FlowerPattern },
    { id: 3, top: "125%", left: "auto",right:"1%", size: "80px",src:LeavePattern },
   { id: 4, top: "245%", left: "-6%",right:"auto", size: "180px",src:MorugPattern },
     { id: 5, top: "320%", left: "auto",right:"0%", size: "100px",src:FlowerPattern },
    { id: 6, top: "370%", left: "-1%",right:"auto", size: "80px",src:LeavePattern },
  //  { id: 7, top: "490%", left: "auto",right:"0%", size: "90px",src:LeavePattern },
    
  ];
  return (
    <main>
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