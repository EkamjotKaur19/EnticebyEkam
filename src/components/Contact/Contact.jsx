import React from 'react';
import { motion } from "framer-motion";
import { useScroll } from "../useScroll";
import { contactAnimation } from "animation";
import './style.css'

function Contact() {
  const [element, controls] = useScroll();
  return (
    <div className='section-cont' id="contact" ref={element}>
      <motion.div className="contact"
      variants={contactAnimation}
      animate={controls}
      transition={{
        delay: 0.03,
        type: "tween",
        duration: 0.8,
      }}
      >
        <div className="contact-title">
          <p>Stay in touch with me </p>
          <h2>Quick Contact</h2>
        </div>
        <div className="contact-data">
          <div className="contact-data-description">
            <h4>Just to say hi !!</h4>
            <p>
              If you have any questions simply use the following contact details.
            </p>
            <p>
              Business Owners to take their Online Presence 
              to the next level. We are in the business of Bulk SMS, Digital Marketing.
            </p>
            <div>
              <p>
                <strong>Address:</strong> 1198D, Modeltown, Ludhiana
              </p>
              <p>
                <strong>Email:</strong> ekamjot@gmail.com
              </p>
              <p>
                <strong>Website:</strong> www.ekasbyekam.com
              </p>
            </div>
          </div>
          <div className="contact-data-form">
            <input type="text" placeholder='name' />
            <input type="email" placeholder='email' />
            <textarea placeholder='message'></textarea>
            <button>Send Message</button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
export default Contact