import React, { useState } from 'react';
import loadmore from "assets/loadmore.png";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { testimonialsAnimations } from "animation";
import Title from './Title';

function Testimonials() {
  const [element, controls] = useScroll();
  const [selected, setSelected] = useState(0);
  const testimonials = [
    {
      designation: "Awesome stitching",
      name: "Riaa Sharma",
      review:
      "Hello I received my package just today. The stitching was heavenly amazing and perfect. I've never had such a great experience anywhere else. I hope to order more kurta sets and stitching from you in the future. Extremely Pleased. Thankyou very much!"
    },
    {
      designation: "Worth the visit",
      name: "Tanya Gupta",
      review:
      "VIKA is an awesome find for me. They have an excellent collection of dress materials,very reasonable prices. I got a few dresses for myself and my daughter. Their tailor did an excellent job of stitching for both of us and in a very timely manner. Overall shopping experience was just great, highly recommend!!"
    },
    {
      designation: "Happy Shopping",
      name: "Natalia",
      review:
      "Thoroughly impressed Team Vika.You are doing awonderfuljob.Keepgoing.Wishingyou success.Excellentcollections and perfect stitching.A special thankyou to yourtailor(s).Theyareexceptionallytalented 👌❤Ihave never feltso comfortablein any of my other outfits.Shall keep you in my op priority list way. We always seek some new ideas and advices from our customer so that our customer can say proudly that they are not customers they are VIKA family, VIKA is just not a company, it’s a family of priceless customers. HAPPY SHOPPING!!"
    },
  ];
  return (
    <Section ref={element}>
      <Title value="reviews"/>
      <div className="container">
        <motion.div className="testimonials"
        variants={testimonialsAnimations}
        animate={controls}
        transition={{
          delay: 0.03,
          type: "tween",
          duration: 0.8,
        }}
        >
          {
            testimonials.map(({ designation, name, review}, index)=> {
              return (
                <div className={`testimonial ${selected === index ? "active" : "hidden"}`} key={index}>
                  
                  <div className="title-container">
                    <span className="designation">
                      {designation}
                    </span>
                    <h3 className='title'>{name}</h3>
                  </div>
                  <p className="description">{review}</p>
                </div>
              );
            })
          }
        </motion.div>
        <motion.div className="controls"
        variants={testimonialsAnimations}
        animate={controls}
        transition={{
          delay: 0.03,
          type: "tween",
          duration: 0.8,
        }}
        >
        <button
            className={selected === 0 ? "active" : ""}
            onClick={() => {
              setSelected(0);
            }}>
        </button>
        <button
            className={selected === 1 ? "active" : ""}
            onClick={() => {
              setSelected(1);
            }}>
        </button>
        <button
            className={selected === 2 ? "active" : ""}
            onClick={() => {
              setSelected(2);
            }}>
        </button>
        </motion.div>
      </div>
    </Section>
  )
}

const Section = styled.section`
overflow: hidden;



.container {
  min-height: 90vh;
  background-color: var(--ternary-color);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  .testimonials {
    display: flex;
    gap: 1rem;
    text-align: center;
    justify-content: center;
    font-size:1.3rem;
    padding:3%;
    width: 40%;
    .testimonial {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      .image {
        position: relative;
        .circle2 {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 10rem;
          width: 10rem;
          border-radius: 10rem;
          background-color: #8860e6b0;
        }
      }
    }
    .hidden {
      display: none;
    }
    color: #fff;
    .designation {
      height: 8rem;
    }
  }
  .controls{
    display: flex;
    gap: 1rem;
    button {
      padding: 0.5rem;
      border-radius: 1rem;
      background-color: var(--secondary-color);
      border: 0.1rem solid transparent;
      cursor: pointer;
    }
    .active {
      background-color: transparent;
      border: 0.1rem solid var(--secondary-color);
    }
  }
}
@media screen and (min-width: 280px) and (max-width: 1080px) { 
  .background {
    display: none;
  }
  .container {
    padding: 4rem 0;
    .testimonials {
      width: 80%;
      .testimonial {
        .description {
          height: 18rem;
        }
      }
    }
  }
}
`;

export default Testimonials