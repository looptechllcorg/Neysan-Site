import React from 'react'
import Banner from './banner/Banner'
import JamBottle from './jamBottle/JamBottle'
import HomeTwotoFour from './hometwoToFour/HomeTwotoFour'
import MarketLogo from './marketLogos/MarketLogo'
import HomeSlider from './homeSlider/HomeSlider'
import HomeMedia from './media/HomeMedia'


const Home = () => {
  return (
    <main>
      <JamBottle/>
      <Banner/>
     <HomeTwotoFour/>
     <HomeSlider/>
     <HomeMedia/>
     <MarketLogo/>

    </main>
  )
}

export default Home