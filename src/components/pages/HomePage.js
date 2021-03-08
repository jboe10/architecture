import React from 'react'
import Footer from '../layout/Footer'
import Hero from '../modules/HomePage/Hero'
import RecentProjects from '../modules/HomePage/RecentProjects'
import ContactPageBanner from '../modules/ContactPageBanner'
import HeaderC from '../layout/HeaderC'


export default function HomePage() {
  return (
    <div className="home-page">
      <HeaderC
        color=""
      />
      <Hero/>
      <RecentProjects/>
      <ContactPageBanner/>
      <Footer/>
    </div>
  )
}
