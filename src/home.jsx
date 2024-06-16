import React, { useState } from 'react'
import './App.css';
import Sections from './components/sections';
import { sectionsData } from './components/sectionsdata';
import Questions from './components/questions';
import Footer from './components/footer';
import { questionsData } from './components/questionsdata';
export default function Home() {
  let [activeFaq, setActiveFaq]  = useState(null)
  return (
    <> 
     <div>
        <header>
            <img className= "logo" src="assests/logo.svg" alt="" />
            <div className="sign-in-button">Sign in </div>
        </header>

      </div>
      <div className="hero">
        <div className="overlay"></div>
        <div className="blury"></div>
        <div className="headings">
            <h1>Unlimited movies, TV shows, and more</h1>
            <h3>Watch anywhere. Cancel anytime.</h3>
            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
            <div className="inputs">
              <form>
                 <input type="text" placeholder='Email Address'/>
                 <button onClick={(e)=>{e.preventDefault()}}>Get Started {`>`}</button>
              </form>
            </div>
        </div>        
      </div>
      <div className="line"></div>
      {sectionsData.map((v,i)=>{
        return(
          <>
            <Sections heading = {v.heading} para = {v.para} img = {v.img} imageOnLeft = {v.imageOnLeft} hasInnerTv={v.hasInnerTv} key={i}/>
            <div className="line"></div>
          </> )     
      })}
      <div className="faq">
        <h1>Frequently Asked Questions</h1>
         {questionsData.map((v,i)=>{
            return(
              <Questions questions ={v.questions} answers ={v.answers} key={i} activeFaq={activeFaq} setActiveFaq={setActiveFaq} index={i} /> )})}
      </div>
      <div>
        <h3 className='email-text'>Ready to watch? Enter your email to create or restart your membership.</h3>
        <div className="inputs-second">
            <form>
              <input className="text-second" type="text" placeholder='Email Address' />
              <button className='submit'>Submit</button>    
            </form>
        </div>
        <div className="line"></div>
      </div>
      <p className='before-footer'>Questions? Contact us.</p>
      <Footer/>
    </>
  )
}
