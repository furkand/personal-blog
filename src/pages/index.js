import React, {createRef,useEffect, useRef}from "react"
import { Link, graphql } from "gatsby"
import "../components/layout.css"
import Typist from 'react-typist'
import {Repostories} from "../components/Repostories"
// import Layout from "../components/layout"
// import SEO from "../components/seo"

const IndexPage = ({data}) => {

  const myRef = createRef()
  const hours = new Date().getHours()
  const isNoon = hours > 11 && hours < 18
  const isEvening = (hours >= 0 && hours <= 4) || (hours >= 18 && hours <= 23)

  let welcome = ' Good morning. 🌞 '
  if (isNoon) welcome = ' Good afternoon. 🌤 '
  else if (isEvening) welcome = ' Good evening. 🌙 '
  const scrollInto = useRef(null)
  useEffect(() => {
    scrollInto.current.scrollIntoView()
  },[])

  return(

    <div className="conntainer"  >
      <div className="sidebar">
        <div className="mail contact"><p className="number-m">MAIL</p><p className="mail-content"><a href="mailto: furkandemirturk@outlook.com">Click</a></p></div>
        <div className="github contact"><p className="number-g">GITHUB</p><p className="github-content"><a target="_blank" href="https://github.com/fdmrtrk">Click</a></p></div>
        <div className="instagram contact"><p className="number-i">INSTAGRAM</p><p className="instagram-content"><a target="_blank" href="https://www.instagram.com/furkandemirturk_/">Click</a></p></div>
        <div className="number contact"><p className="number-p">NUMBER</p><p className="number-content">05549071702</p></div>
      </div>
      <div className="typing" ref={scrollInto}>
          <Typist 
            startDelay={2000}  
            cursor={{ 
              element: '▍',
              blink:true ,
              hideWhenDone:true
            }}>
            <span className="hello"> Hello there. 🤘</span> 
            <br/>
            <span className='welcome'>Have a {welcome} </span>    
            <br/>
            <span className='name'>I am Bruce Wayne</span>
            <Typist.Backspace count={11} delay={200} /> 
            <span className="hello-continue">Furkan Demirturk. </span>
            <Typist.Delay ms={500} />
            <br/>
            <span className='develospaner'>I am Fullstack Javascript Developer. 🤓😍 </span>
            <br/>
            <span className='portfolio'> You can see my portfolio from here.    </span><span >👉 <a className="clickme" href="#portfolio">Lets See </a></span>
          </Typist>
      </div>
      <div ref={myRef}id="portfolio" className="portfolio-container">
      <Repostories />
      </div>
     
  </div>
  )

}

export default IndexPage
