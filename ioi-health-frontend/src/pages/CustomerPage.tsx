import React from 'react'
import NavBar from '../layout/Navigation/TopNavBar/NavBar'
import LeftLayout from '../layout/LeftLayout/LeftLayout'
import RightLayout from '../layout/RightLayout/RightLayout'
import NavFooter from '../layout/Navigation/FooterNav/NavFooter'
import './CustomerPage.css'
const CustomerPage = () => {
  return (
    <div className='customer-container'>
        <div className='navBar-container'>
            <NavBar />
        </div>
            <div className='cusomer-profile-container'>
                <LeftLayout />
            </div>
            <div className='content-container'>
                <RightLayout />
            </div>
        <div className='footer-container'>
            <NavFooter/>
        </div>
    </div>
  )
}

export default CustomerPage