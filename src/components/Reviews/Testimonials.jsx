import React, { useState } from 'react';
import { motion } from "framer-motion";
import { useScroll } from "../useScroll";
import { testimonialsAnimations } from "animation";
import Title from '../Title/Title';
import './style.css'

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
      "Thoroughly impressed Team Ekas.You are doing awonderfuljob.Keepgoing.Wishingyou success.Excellentcollections and perfect stitching.A special thankyou to yourtailor(s).They are exceptionally talented. HAPPY SHOPPING!!"
    },
  ];
  return (
    <div className='setion-rev' ref={element}>
      <Title value="reviews"/>
      <div className="container-rev">
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
    </div>
  )
}


export default Testimonials