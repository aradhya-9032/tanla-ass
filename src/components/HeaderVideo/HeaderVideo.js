import React, { useState } from 'react';
import './headervideo.css';

const HeaderVideo = () => {
const [isPlaying, setIsPlaying] = useState(true);
const handleTogglePlay = () =>{
  const video = document.querySelector('.header-video');
  if (video) {
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  }
};

  return (
    <div>
      <div className='header-hero-video'>
        <div className='hd-video'>
          <video autoPlay muted loop className="header-video">
            <source src="https://tanla.azureedge.net/assets/videos/Tanla%20Mobile%20View.mp4" type="video/mp4"/>
          </video>
          <div className='video-paly-btn'>
          {isPlaying ? ( 
            <img className='pause-video-icon' src='https://tanla.azureedge.net/assets/icons/pauseIcon.png' onClick={handleTogglePlay} alt='pause'/>
            ):(
              <img className='play-video-icon' src='https://tanla.azureedge.net/assets/icons/playIcon.png'  onClick={handleTogglePlay} alt='play'/>
         )}
          </div>
        </div>
      </div> 
      <div className='padding-global'>
      <div className='conatiner-large'>
           <div className='padding-section-small'>
           <div className='home-hero_card-wrapper'>
           <div className='left-card-wrapper'>
              <div className='home-hero_text-wrapper'>
              <h1>Shaping the world of digital interactions</h1>
                <p className='para-xlarge'>
                Drive innovation that empowers consumers and enables companies. Leverage our cutting-edge technologies, deep domain expertise, and strong ecosystem partnerships to create a new communication paradigm.
                </p>
              </div>
              <div className='watch-video-container'>
              <link href="https://tanla.azureedge.net/assets/css/homeWatchVideoModal.css"/>
                <div className='watch-video-btn'> 
                <a href='https://www.tanla.com/'>         
                <p>Watch Video</p>
                </a> 
                </div>
              </div>
            </div>
         </div> 
          </div>
           </div>
      </div>
     <div className='section_mwc-banner'>
     <div className='padding-global'>
     <div className='container-large'>
       <div className='padding-section-xsmall'>
         <div className='mwc-banner'>
            <img src='https://assets-global.website-files.com/65a4d6e71551dd4dd97a2ac6/65dc27d9869b5e3ec692d964_Complete%20Logo%20black.svg' alt='MWC24 logo' />
             <h5 className='mwc-heading'>Discover out latest innovations and announcements at <br/> MWC '24!</h5>
           <a href="/mwc2024" class="button is-small is-alt w-button">Explore MWC Hub</a>
     </div> 
      </div>
     </div>
   </div>
     </div>
   </div>
  );
}

export default HeaderVideo;























































































