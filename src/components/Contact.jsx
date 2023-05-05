import React from 'react';
import styled from "styled-components";
import Title from './Title';
import c3 from 'assets/cont.png'
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { contactAnimation } from "animation";

function Contact() {
  const [element, controls] = useScroll();
  return (
    <Section id="contact" ref={element}>
      <motion.div className="contact"
      variants={contactAnimation}
      animate={controls}
      transition={{
        delay: 0.03,
        type: "tween",
        duration: 0.8,
      }}
      >
        <div className="contact__title">
          <p>Stay in touch with me </p>
          <h2>Quick Contact</h2>
        </div>
        <div className="contact__data">
          <div className="contact__data__description">
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
          <div className="contact__data__form">
            <input type="text" placeholder='name' />
            <input type="email" placeholder='email' />
            <textarea placeholder='message'></textarea>
            <button>Send Message</button>
          </div>
        </div>
      </motion.div>
    </Section>
  )
}

const Section = styled.section`
min-height: 120vh;

.contact__data__description{
  background-color:var(--primary-color);
  padding:4%;
}

 background: url(${c3}) no-repeat center;
  min-height: 120vh;
  background-size: cover;
.contact {
  
  color: #000;
  margin: 0rem 18rem;
  &__title {
    margin: 0rem 0rem 2rem 0;
    p {
      padding:2rem;
      text-transform: uppercase;
      color: #000;
    }
    h2 {
      margin-top:2rem;
      font-size: 2rem;
      color: #000;
    }
  }
  &__data {
    display: grid;
    font-size:1.3rem;
    grid-template-columns: 1fr 1.2fr;
    gap: 4rem;
    &__description {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      h4 {
        font-size: 1.5rem;
      }
      p {
        
        text-align: justify;
        margin-top: 20px;
      }
      div {
        p {
          strong {
            
            text-transform: uppercase;
          }
        }
      }
    }
    &__form {
      
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size:1.4rem;
      gap: 2rem;
      input,
      textarea {
        text-transform: uppercase;
        border: none;
        border-bottom: 0.1rem solid var(--secondary-color);
        width: 100%;
        color: var(--secondary-color);
        padding-bottom: 0.7rem;
        &:focus {
          outline: none;
        }
        &::placeholder {
          color: var(--secondary-color);
        }
      }
      textarea {
        width: 100%;
        height: 50%;
        resize: none;
      }
      button {
        width: 100%;
        background-color: var(--secondary-color);
        border: 0.1rem solid var(--secondary-color);
        height: 3rem;
        color: #fff;
        text-transform: uppercase;
        cursor: pointer;
        transition: 0.5s ease-in-out;
        &:hover {
          background-color: var(--secondary-color);
          color: #fff;
        }
      }
    }
  }
}
@media screen and (min-width: 280px) and (max-width: 1080px) { 
  .contact {
    margin: 1rem;
    padding: 0 1rem;
    &__title {
      margin: 0;
      text-align: center;
      p {
        font-size: 0.8rem;
      }
      h2 {
        font-size: 1.3rem;
      }
    }
    &__data {
      grid-template-columns: 1fr;
      margin: 0;
      p {
        text-align: left;
      }
      &__form {
        button {
          height: 6rem;
        }
      }
    }
  }
}
`;

export default Contact