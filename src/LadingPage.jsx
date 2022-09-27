import { useEffect, useState } from 'react'
import Features from './sections/features/Features'
import Footer from './sections/footer/Footer'
import Gallary from './sections/gallary/Gallary'
import Header from './sections/header/Header'
import OverView from './sections/middle/OverView'
import Projects from './sections/projects/Projects'
import Testimonials from './sections/testimonials/Testimonials'

const LandingPage=()=>{
    const [slideIndex,setSlideIndex]=useState(0);

  useEffect(()=>{  
    if(slideIndex>-1 && slideIndex<3){
      setTimeout(()=>{
        setSlideIndex(slideIndex+1)
      },5000)
    }else setSlideIndex(0);
  },[slideIndex])

    return(
        <>
        <div style={{width:"100%"}}>
        <Header slideIndex={slideIndex} />
        <OverView />
        <Features />
        <Projects />
        <Testimonials />
        <Gallary slideIndex={slideIndex} />
        <Footer />
        </div>
        </>
    )
}
export default LandingPage