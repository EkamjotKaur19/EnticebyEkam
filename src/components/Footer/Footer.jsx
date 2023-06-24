import React from 'react';
import { BsFacebook, BsTwitter, BsYoutube, BsBehance } from 'react-icons/bs';
import { motion } from "framer-motion";
import { useScroll } from "../useScroll";
import { footerTextAnimation } from "animation";
import './style.css'

function Footer() {
  const [element, controls] = useScroll();
  return (
    <div className='footer' ref={element}>
      <motion.span
      variants={footerTextAnimation}
      animate={controls}
      transition={{
        delay: 0.02,
        type: "tween",
        duration: 0.8,
      }}
      >
        &copy; Designed By Ekamjot Kaur
      </motion.span>
      <motion.div className="footer-social-icons"
      variants={footerTextAnimation}
      animate={controls}
      transition={{
        delay: 0.02,
        type: "tween",
        duration: 0.8,
      }}  
      >
        <BsFacebook />
        <BsTwitter />
        <BsYoutube />
        
      </motion.div>
    </div>
  )
}
export default Footer