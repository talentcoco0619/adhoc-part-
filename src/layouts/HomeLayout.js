import React from 'react'
import Header01 from '../components/Header/Header01'
import Footer01 from '../components/Footer/Footer01'
import Footer from '../pages/Landing/Footer'

const HomeLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header01 />
      <main className="flex-grow mt-[75px]">{children}</main>
      <Footer showSalad={false} />
    </div>
  )
}

export default HomeLayout
