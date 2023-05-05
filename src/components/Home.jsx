import React from 'react';
import styled from "styled-components";
import home from "assets/bg6.png";
import play from "assets/play.png";
import Navbar from './Navbar';
import { motion } from "framer-motion";
import { homeAnimation, homeInfoAnimation } from "animation";

function Home() {
  return (
    <Section id="home">
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
    </Section>
  );
}

const Section = styled.section`
  background: url(${home}) no-repeat center ;
  min-height: 100vh;
  background-size: cover;
  
  position: relative;
  .home{
    height: 80%;
    
    .content {
      display: flex;
      
      flex-direction: column;
      align-items: flex-start;
      width: 60%;
      color:  var(--ternary-color);
      gap: 1rem;
      margin-top: 4rem;
      padding-left: 18rem;
      .title {
        h1 {
          font-size: 5rem;
          line-height: 5.3rem;
          font-family:  'Bebas Neue';
        }
      }
      .subTitle {
        p {
          color:#000;
          font-size:1.5rem;
          width: 80%;
          font-weight:900;
          margin-bottom: 2rem;
        }
      }
    }
  }
  .info {
    position: absolute;
    bottom: -10.7rem;
    right: 0;
    font-family: 'Open Sans';
    font-size: 1.2rem;
    background-color: var(--primary-color);
    padding: 3rem;
    margin-top:2rem;
    .grid {
      display: grid;
      grid-template-columns: repeat(7, 3fr);
      gap: 4rem;
      color: var(--ternary-color);

      .heads{
        color: #000;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .home {
      .content {
        padding-left: 2rem;
        width: 100%;
        margin-bottom: 2rem;
        .title {
          h1 {
            font-size: 4rem;
            line-height: 4rem;
          }
        }
      }
    }
    .info {
      position: initial;
      .grid {
        grid-template-columns: 1fr;
      }
    }
  }
`;

export default Home