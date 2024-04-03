import React from 'react';
import { BsArrowRight } from "react-icons/bs";
import './stories.css';

const Stories = () => {
  return (
    <div>
    <div className="section_home-success-stories">
    <div className="padding-global">
    <div className="container-large">
    <div className="padding-section-medium">
    <div className="home-success-stories_wrapper">
    <div  className="title-with-divider">
    <h3>Explore our success stories</h3>
    <a href="https://www.tanla.com/case-studies" className="link-with-arrow text-color-dark-green w-inline-block">
    <p className="link-with-arrow_text">View All</p>
    <BsArrowRight className="right-arrow" />
    </a>
    </div>
    <div className="home-success-stories_image-wrapper">
    <img src="https://assets-global.website-files.com/65a4d6e71551dd4dd97a2ac6/65cb5fec94ba4a447397e26a_atp%20big%20card.webp"  className="home-success-stories_image"/>
    </div>
    <div className="home-success-stories_content-wrapper">
    <div className="home-success-stories__text-wrapper">
    <h3>Protecting 1 billion+ users from scams through AI/ML</h3>
    <p className="para-medium">Combatting the rising issue of phishing attacks, Wisely ATP has been recognised as a global leader in scam prevention with a staggering 99%+ efficacy rate powered by 4 patent pending engines and a differentiated ecosystem play by partnering with leading tech giants such as Google and WhatsApp. It is the world's first end-to-end AI/ML based anti SMS-phishing platform that identifies and prevents scams in real-time, helping eliminate the source.
    </p>
    </div>
    <a href="https://www.tanla.com/case-study/wisely-atp-protecting-1-billion-users-from-scams" className="button is-secondary w-button">Read More
    </a>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>  
     </div>
  )
}

export default Stories