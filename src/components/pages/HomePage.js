import React from 'react'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import Hero from '../modules/HomePage/Hero'
import RecentProjects from '../modules/HomePage/RecentProjects'
import ContactPageBanner from '../modules/ContactPageBanner'


export default function HomePage() {
  return (
    <div className="home-page">
      <Header/>
      <Hero/>
      <RecentProjects/>
      <ContactPageBanner/>
      <Footer/>
    </div>
  )
}
