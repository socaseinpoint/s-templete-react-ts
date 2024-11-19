import Navbar from '@/components/Navbar'
import React from 'react'
import bg from '@/assets/lobby-bg.jpg'
import Header from '@/components/Header'

const BaseLayout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat h-screen w-screen"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      {children}
      <Header />
      <div className="fixed bottom-0 left-0 right-0">
        <Navbar />
      </div>
    </div>
  )
}

export default BaseLayout
