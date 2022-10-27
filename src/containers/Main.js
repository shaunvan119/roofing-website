import React from 'react'
import "./main.css"
import backgroundVid from "../assets/backgroundVid.mp4"
import ContactForm from '../components/ContactFrom'


const Main = () => {
  return (
    <div className="main">
      <div className='overlay'></div>
      <video src={backgroundVid} autoPlay loop muted/>
      <div className="heading_wrapper">
      <div class="vl"></div>
        <h1 className="main_heading">AUSTRALIA'S TRUSTED<br/> EXPERTS IN ROOF REPAIRS<br/> AND ROOF RESTORATION</h1>
        <h2 className="main_heading_two">Book a free <span style={{ color: "#d89e1a" }} >Quote</span></h2>
        <button className="booking_button">Book Online</button>
      </div>
      <div className="content">
  
      <div className="free_quote_form">
      <ContactForm/>
      </div>
        
      </div>
    </div>
  )
}

export default Main