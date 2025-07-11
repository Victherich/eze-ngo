import React from 'react'
import Hero from './Hero'
import AboutComponent from './AboutComponent'
import Impact from './Imapact'
import Programs from './Programs'
import GetInvolved from './GetInvolved'
import Testimonials from './Testimonials'
import News from './News'
import FAQ from './Faq'
import Hero2 from './Hero2'
import Gallery2 from './Gallery2'
import CertificateComponent from './CertificateComponent'
import VideoGallery from './VideoGallery'

const LandingPage = () => {
  return (
    <div>
      <Hero/>
      <AboutComponent/>
      <CertificateComponent/>
      <VideoGallery/>
      <Impact/>
      <Programs/>
      <GetInvolved/>
      <Testimonials/>
      <Hero2/>
      <News/>
      <Gallery2/>
      <FAQ/>
    </div>
  )
}

export default LandingPage
