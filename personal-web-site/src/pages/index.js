import React, {useState}from "react"
// import { Link } from "gatsby"
import Typist from 'react-typist'

// import Layout from "../components/layout"
// import SEO from "../components/seo"

const IndexPage = ({data}) => {


  const hours = new Date().getHours()
  const isNoon = hours > 11 && hours < 18
  const isEvening = (hours >= 0 && hours <= 4) || (hours >= 18 && hours <= 23)

  let welcome = ' Good morning. 🌞 '
  if (isNoon) welcome = ' Good afternoon. 🌤 '
  else if (isEvening) welcome = ' Good evening. 🌙 '

  return(
    <div className="typing">
      <Typist 
        startDelay={2000}  
        cursor={{ 
          element: '▍',
          blink:true 
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


      </Typist>
  </div>
  )

}

export default IndexPage
