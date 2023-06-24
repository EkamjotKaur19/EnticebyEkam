import React from 'react';
import styled from "styled-components";
import home from "assets/bg6.png";
import Navbar from '../Navbar/Navbar';
import { motion } from "framer-motion";
import { homeAnimation, homeInfoAnimation } from "animation";
import './style.css'

function Home() {
  return (
    <div className='section-home' id="home">
      <Navbar />
      <motion.div className="home"
      variants={homeAnimation}
      transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
      >
        <div className="content">
          <div className="title">
            <h1>Ekas <br /> Boutique</h1>
          </div>  
          <div className="subTitle">
            <p>
            Soulful. Elegant. Ekas, serves as a one-stop destination for all kinds of latest & designer western & ethnic wear designed by expert designers and stitched by expert ladies tailors
            </p>  
          </div>
          {/*<img src={play} alt="Play Button" />*/}
        </div>  
      </motion.div>

      <motion.div className="info"
      variants={homeInfoAnimation}  
      transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
      >
          <div className="grid">
            <div className="col">
                <strong className='heads' >Fashion Boutique</strong>
                <p>Ekas Boutique</p>
            </div>
            <div className="col">
                <strong className='heads'>Email</strong>
                <p>ekamjot@gmail.com</p>
            </div> 
            <div className="col">
                <strong className='heads'>Mobile</strong>
                <p>+91 7009555689</p>
            </div> 
            <div className="col">
                <strong className='heads'>Address</strong>
                <p>1198D,Modeltown</p>
                <p>Ludhiana, Punjab</p>
            </div> 
            <div className="col">
                <strong className='heads'>Services</strong>
                <p></p>
                <p>Western, Ethnic Wear</p>
            </div> 
            <div className="col">
                <strong className='heads'> Working Hours</strong>
                <p>Everyday</p>
                <p>08:00 to 09:00</p>
            </div>   
          </div>
      </motion.div>
    </div>
  );
}
export default Home