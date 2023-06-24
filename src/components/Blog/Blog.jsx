import React from 'react';
import play from "assets/play.png";
import Title from '../Title/Title';
import { motion } from "framer-motion";
import { useScroll } from "../useScroll";
import { blogsAnimation } from "animation";
import './style.css'

function Blog() {
  const [element, controls] = useScroll();
  const blogsData = [
    {
      title:"Learn the art of the ethnic - how to slay Indian Wear",
      type: "Fashion",
      description: "We’ll give you the tea - see, mastering Indian wear takes a little bit of effort and time. Indian wear is heavily laid with extensively fashionable pieces and style statements, so much versatility.",
    },
    {
      title:"Ways to embrace Indian fashion in everyday clothing",
      type: "Indian",
      description: "Let me start by declaring this - Indian fashion is no joke! The amount of dimension, dynamism, and creativity it takes to make one piece of traditional Indian wear will surpass your imagination.",
    },
    {
      title:"Reel worthy wedding attires",
      type: "Instagram",
      description: "We don’t know if you know this but Instagram loves fashion. And the wedding seasons brings out the most of the ethnic excitement; its colors and styles, its pop plush beauty and statements. ",
    },
  ]
  return <div className='section-blog' id="blog" ref={element}>
    <Title value="Blog" />
    <div className="blogs">
        {blogsData.map(({ title, type, description }) => {
          return (
            <motion.div className="blog"
              variants={blogsAnimation}
              animate={controls}
              key={title}
              transition={{
                delay: 0.03,
                type: "tween",
                duration: 0.8,
              }}
            >
              <div className="image"></div>
              <div className="title">
                <h3>{title}</h3>  
              </div>
                <span className="type">{type}</span>
                <div className="description">
                  <p>{description}</p>  
                </div>
                <div className="more">
                  <img src={play} alt="Play" />
                  <span>Read More</span>  
                </div>
            </motion.div>
          )
        })}
    </div>
    </div>
}


export default Blog