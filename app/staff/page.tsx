import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import StaffList from '@/components/StaffList'
import React from 'react'

const Staff = () => {
  return (
    <div className='bg-[#252525]'>
        <Nav/>
        <StaffList/>
        <Footer/>
    </div>
  )
}

export default Staff