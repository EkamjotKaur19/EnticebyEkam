import React, {useState} from 'react';
import { FaChevronUp } from 'react-icons/fa';
import './style.css'

function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  window.addEventListener("scroll", ()=> {
    window.pageYOffset > 100 ? setVisible(true) : setVisible(false);
  })
  return (
    <div className='stt'>
      <a href="#" className={`${visible ? "block" : "none"}`}>
        <FaChevronUp />
      </a>
    </div>
  )
}

export default ScrollToTop