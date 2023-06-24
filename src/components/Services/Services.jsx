import React from 'react';
import service1 from "assets/service1.png";
import service2 from "assets/service2.png";
import service3 from "assets/service3.png";
import Title from '../Title/Title';
import { useScroll } from "components/useScroll";
import { motion } from "framer-motion";
import { servicesAnimations } from "animation";
import './style.css'

function Services() {
  const [element, controls] = useScroll();

  const data = [
    {
      type: "Ethnic Wear",
      text: "Ekas is your one stop online shopping destination for designer ethnic wear. Browse through our handpicked designs of sarees, anarkalis, lehengas, kurtis, etc at best price",
      image: service1,
    },
    {
      type: "Western",
      text: "Ekas is all about combining the right amount of panache and comfort to create a symphony of style.It is a medley of colors, patterns, cuts, and fabrics",
      image: service2,
    },
    {
      type: "Indo-Western",
      text: "We showcase a new, contemporary design language that comes from India and belongs everywhere on the globe.",
      image: service3,
    },
  ];
  return <div className='section-serv' id="services" ref={element}>
    <Title value="services" />
    <div className="services">
        {data.map(({type,text,image},index) => {
            return (
              <motion.div className="services-service"
              variants={servicesAnimations}
              animate={controls}
              key={index}
              transition={{
                delay: 0.03,
                type: "tween",
                duration: 0.8,
              }}
              >
                  <div className="services-service-image">
                    <img src={image} alt="Service" />  
                  </div>
                  <div className="services-service-title">
                    <span>0{index + 1}</span>  
                    <h2>{type}</h2>
                  </div>
                  <p className="services-service-description">{text}</p>
                  {/*<img src={play} alt="Readmore" />*/}
              </motion.div>
            )
          })}
    </div>
  </div>
}

export default Services