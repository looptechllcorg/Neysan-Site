import React from 'react'
import BestProduct from './bestProduct/BestProduct'
import OurServices from './ourServices/OurServices'
import CompanyBanner from './companyBanner/CompanyBanner'
import { ourCompanyDatas } from '../../../MyDatas/MyDatas'

const OurCompany = () => {
  return (
    <main>
      <CompanyBanner/>
      <BestProduct text={ourCompanyDatas.text} data={ourCompanyDatas.datas}/>
      <OurServices/>
    </main>
  )
}

export default OurCompany