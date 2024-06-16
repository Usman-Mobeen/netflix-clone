import React from 'react'
import '../App.css'; 
export default function Sections({heading, para, img, imageOnLeft, hasInnerTv}) {

  return (
    <div className='sectionPar'>
      <div className="section">
        {(imageOnLeft)?
           <>
            <div className="text">
                <h1>{heading}</h1>
                <p>{para}</p>
            </div>
            <div className="graphics">
                <img className='tvframe' src={img} alt=""/>
                {(hasInnerTv)?<video autoPlay muted className="video" src="assests/video-tv-0819.m4v"></video>:""}
            </div>
            </> 
            :
            <>
            
            <div className="graphics rightimage">
                <img className='tvframe' src={img} alt=""/>
            </div>
            <div className="text">
                <h1>{heading}</h1>
                <p>{para}</p>
            </div>
            </>

        } 
        
      </div>
    </div>
  )
}
