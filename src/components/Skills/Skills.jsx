import React from 'react';
import Title from '../Title/Title';
import { motion } from "framer-motion";
import { useScroll } from "../useScroll";
import { skillsBarAnimation } from "animation";
import './style.css'

function Skills() {
  const [element, controls] = useScroll();
  const skillsData = [
    {
      name: "Western",
      amount: 75,
    },
    {
      name: "Saree",
      amount: 70,
    },
    {
      name: "Ethnic",
      amount: 90,
    },
    {
      name: "Indo-Western",
      amount: 80,
    },
    {
      name: "Coord Sets",
      amount: 50,
    },
  ];
  return (
    <div className='section-skill' id="skills" ref={element}>
      <Title value="skills" />
      <div className="skills-title">
        <p>Our Skills</p>
        <h2>Check our super awesome skills</h2>
      </div>
      <div className="skills">
        <div className="skills-bars">
          {
            skillsData.map(({ name, amount }) => {
              return (
                <motion.div className="skills-bars-bar" key={name}
                variants={skillsBarAnimation}
                animate={controls}
                transition={{
                  delay: 0.03,
                  type: "tween",
                  duration: 0.8,
                }}
                >
                  <div className="container-skill">
                    <progress value={amount} max="100" />
                    <span>{name}</span>
                  </div>
                  <h3>{amount}%</h3>
                </motion.div>
              );
            })
          }
        </div>
        <div className="skills-content">
          <p className="title">
            One stop solution for all your Fashion Needs.
          </p>
          <p className="description">
          Raise your OOTD game with us.
          </p>
        </div>
      </div>
    </div>
  )
}
export default Skills