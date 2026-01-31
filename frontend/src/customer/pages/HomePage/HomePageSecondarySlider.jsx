import React from 'react'
import {items} from './SecondarySliderData.js'
import SecondarySlider from '../../components/Home/SecondarySlider.jsx'

const HomePageSecondarySlider = () => {
  return (
    <SecondarySlider items={items} title="Up to 40% off | Best Deals on flagship smartphones" />
  )
}

export default HomePageSecondarySlider