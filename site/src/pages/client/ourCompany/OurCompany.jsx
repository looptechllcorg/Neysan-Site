import React from 'react'
import BestProduct from './bestProduct/BestProduct'
import OurServices from './ourServices/OurServices'
import CompanyBanner from './companyBanner/CompanyBanner'

const OurCompany = () => {
  return (
    <main>
      <CompanyBanner/>
      <BestProduct/>
      <OurServices/>
    </main>
  )
}

export default OurCompany