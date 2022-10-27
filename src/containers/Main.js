import React from 'react'
import "./main.css"
import backgroundVid from "../assets/backgroundVid.mp4"
import ContactForm from '../components/ContactFrom'

const Main = () => {
  return (
    <div className="main">
      <div className='overlay'></div>
      <video src={backgroundVid} autoPlay loop muted/>
      <div className="content">
      <div className="free_quote_form">
      
      <ContactForm/>

      </div>
        
      </div>
    </div>
  )
}

export default Main