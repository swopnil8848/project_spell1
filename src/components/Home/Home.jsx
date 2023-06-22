import React from 'react'
import Home1 from './Home1'
import boudha from '/boudha.jpg'
import mangalbazar from '/mangalbazar.jpg'
import lumbini from '/lumbini.jpg'
import chitwan from '/chitwan.jpg'
import Home2 from './Home2'
import Home3 from './Home3'
import Home4 from './Home4'
import Home5 from './Home5'
import Home6 from './Home6'
import Home7 from './Home7'
import Home8 from './Home8'
import Home9 from './Home9'

const Home = () => {
    const ImageHome1 = [
        {
            imageName:"boudha stupa",
            district: "kathmandu",
            imageNo:0,
            ImageSrc: boudha
        },
        {
            imageName:"Patan durbar sqare",
            district: "lalitpur",
            imageNo:1,
            ImageSrc: mangalbazar
        },
        {
            imageName:"lumbini",
            district: "Ruphandehi",
            imageNo:2,
            ImageSrc: lumbini
        },
        {
            imageName:"Chitwan National Park",
            district:"Chitwan",
            imageNo:3,
            ImageSrc: chitwan
        }
    ];

  return (  
    <div>
        <Home1 Images={ImageHome1}/>
        <Home2/>
        <Home3/>
        <Home4/>
        <Home5/>
        <Home6/>
        <Home7/>
        <Home8/>
        <Home9/>
        
    </div>
  )
}

export default Home