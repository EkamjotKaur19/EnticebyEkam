import React, { Fragment } from 'react';
import Title from '../Title/Title';
import pricing1 from "assets/pricing1.png";
import pricing2 from "assets/pricing2.png";
import play from "assets/play.png";
import { motion } from "framer-motion";
import { useScroll } from "../useScroll";
import { pricingAnimation } from "animation";
import './style.css'
function Pricing() {
  const [element, controls] = useScroll();
  const plans = [
    {
      name: "Basic",
      price: 1400,
    },
    {
      name: "Pro",
      price: 2000,
    },
    {
      name: "Expert",
      price: 3000,
    },
  ];

  const data = [
    {
      value: "Simple Stitched",
      type: "Basic",
    },
    {
      value: "Double Stitched",
      type: "Basic",
    },
    {
      value: "Plazo Suit",
      type: "Basic",
    },
    {
      value: "Co-Ord Set",
      type: "Pro",
    },
    {
      value: "Indian saree",
      type: "Pro",
    },
    {
      value: "Western Dresses",
      type: "Expert",
    },
    {
      value: "Slip Dress",
      type: "Expert",
    },
  ]

  return (
    <div className='section-price' ref={element}>
      <Title value="pricing" />
      <div className="background">
        <img src={pricing1} alt="background" className="bg1" />
        <img src={pricing2} alt="background" className="bg2" />
      </div>
      <div className="pricing-title">
        <p>Our moto is to provide modern and ethnic designer fashion at right price</p>
        <h2>Finding the best boutique in your city could be time consuming..</h2>
      </div>
      <div className="pricing">
        {plans.map(({ name, price }, index) => {
          return(
            <motion.div className="pricing-plan" 
            key={index}
            variants={pricingAnimation}
            animate={controls}
            transition={{
              delay: 0.03,
              type: "tween",
              duration: 0.8,
            }}
            >
              <div className="pricing-plan-name">
                <h2>{name}</h2>
                <div className="pricing-plan-name-price">
                  <span>Rs</span>
                  <p>{price}</p>
                </div>
              </div>
              <div className="pricing-plan-content">
                <ul className={`pricing-plan-content-features ${name}`}>
                  {data.map(({ value, type }, index2) => {
                    return (
                      <Fragment key={index2}>
                        {name === "Basic" ? (
                          type === name ? (
                            <li>{value}</li>
                          ) : (
                            <li className="line">{value}</li>
                          )
                        ) : name === "Pro" ? (
                          type === "Basic" || type === name ? (
                            <li>{value}</li>
                          ) : (
                            <li className="line">{value}</li>
                          )
                        ) : (
                          name === "Expert" && <li>{value}</li>
                        )}
                      </Fragment>
                    );
                  })}
                </ul>
                <div className="pricing-plan-content-actions">
                  <span>Order Now</span>
                  <img src={play} alt="Order Now" />
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
export default Pricing