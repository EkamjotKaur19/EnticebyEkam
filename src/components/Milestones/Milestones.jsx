import React from 'react'
import milestone1 from "assets/milestone1.png";
import milestone2 from "assets/milestone2.png";
import milestone3 from "assets/milestone3.png";
import milestoneBackground from "assets/milestone-background.png";
import { useScroll } from "../useScroll";
import { motion } from "framer-motion";
import { milestonesAnimations } from "animation";
import './style.css'


function Milestones() {
  const [element, controls] = useScroll();

  const milestone = [
    {
      image: milestone1,
      data: "Client Served",
      amount: "877",
    },
    {
      image: milestone2,
      data: "of raw data",
      amount: "1.4M",
    },
    {
      image: milestone3,
      data: "Reviews",
      amount: "5.4K",
    },
]
  return <div className='section-mile' ref={element}>
    <div className="background">
        <img src={milestoneBackground} alt="Milestone Background" />
    </div>
    <div className="milestones">
      {
        milestone.map(({ image, data, amount }) => {
          return (
            <motion.div className="milestone"
            variants={milestonesAnimations}
            animate={controls}
            key={data}
            transition={{
              delay: 0.03,
              type: "tween",
              duration: 0.8,
            }}
            >
              <p>{amount}</p>
              <span>{data}</span>  
              <img src={image} alt="Milestone" />
            </motion.div>
          );
        })
      }  
    </div>
  </div>
}

export default Milestones;