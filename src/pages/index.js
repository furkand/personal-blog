import React, {createRef}from "react"
import { Link, graphql } from "gatsby"
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

  return(

    <div className="conntainer">
      <div className="sidebar">
        <div className="instagram contact"></div>
        <div className="github contact"></div>
        <div className="mail contact"></div>
        <div className="number contact"></div>
      </div>
      <div className="typing">
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
            <span className='develospaner'>I am Fullstack Javascript Develoer. 🤓😍 </span>
            <br/>
            <span className='portfolio'> You can see my portfolio from here.   👉 </span><span > <a className="clickme" href="#portfolio">Lets See </a></span>
          </Typist>
      </div>
      <div ref={myRef}id="portfolio" className="portfolio-container">
      <Repostories />
      </div>
     
  </div>
  )

}

export default IndexPage
