import React from 'react'
import "./BottomMain.css"
import GridPics from '../components/GridPics'

const BottomMain = () => {
  return (
    <div>
     <div className="heading_background">
        <h1 className="BottomMain_heading">“We guarantee a perfect job, every time” </h1>
      </div>
        <GridPics/>
        <div className="contact_bottom">
        <h1 className="Secound_bottom_heading">$0 Call out fee</h1>
        <h2 className="roofing_fixed">Let's get your roofing<br/> problem fixed</h2>
        <button  className="contact_button_bottom"><a href="tel:0433310964">Call 0433310964</a></button>
      </div>
    </div>
  )
}

export default BottomMain