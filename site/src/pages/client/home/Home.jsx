import React from 'react'
import Banner from './banner/Banner'
import JamBottle from './jamBottle/JamBottle'
import HomeInformation from './homeInformation/HomeInformation'
import HomeTwotoFour from './hometwoToFour/HomeTwotoFour'
import MarketLogo from './marketLogos/MarketLogo'
import HomeSlider from './homeSlider/HomeSlider'

const Home = () => {
  return (
    <main>
      <JamBottle/>
      <Banner/>
     <HomeTwotoFour/>
     <HomeSlider/>
     <MarketLogo/>

    </main>
  )
}

export default Home