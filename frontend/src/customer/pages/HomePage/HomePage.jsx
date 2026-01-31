import React from 'react'
import HomeCarousel from '../../components/Product/HomeCarousel'
import ActivitySection from './ActivitySection'
import HomePageSecondarySlider from './HomePageSecondarySlider'
import Footer from './Footer'
import Navigation from '../../components/Navbar'

const HomePage = () => {
  return (
    <div>
        <Navigation/>
        <HomeCarousel/>
        
        <ActivitySection />
        <HomePageSecondarySlider />
        <Footer />
    </div>
  )
}

export default HomePage