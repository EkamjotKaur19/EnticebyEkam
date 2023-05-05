import React from 'react';
import styled from "styled-components";
import play from "assets/play.png";
import home from "assets/p4.avif";
import Title from './Title';
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { blogsAnimation } from "animation";

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
  return <Section id="blog" ref={element}>
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
    </Section>
}

const Section = styled.section`
min-height: 100vh;
position: relative;
.blogs {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  margin: 5rem 15rem;
  .blog {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .image {
      height: 8rem;
      background: url(${home}) no-repeat center center;
      background-size: cover;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .title {
      h3 {
        color: var(--secondary-color);
        font-size: 1.5rem;
      }
    }
    .type {
      color: var(--primary-color);
      font-weight: bolder;
      text-transform: uppercase;
    }
    .description {
      height: 9rem;
      color: var(--primary-color);
    }
    .more {
      display: flex;
      align-items: center;
      gap: 1rem;
      cursor: pointer;
      span {
        letter-spacing: 0.1rem;
        text-transform: uppercase;
        color: var(--primary-color);
      }
    }
  }
}
@media screen and (min-width: 280px) and (max-width: 1080px) { 
  margin: 2rem 0;
  .blogs {
    padding: 0 2rem;
    grid-template-columns: 1fr;
    margin: 0 1rem;
  }
}
`;

export default Blog