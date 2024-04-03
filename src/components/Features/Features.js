import React from 'react';
import { BsArrowRight } from "react-icons/bs";
import './features.css';

const Features = () => {
  return (
    <div>
       <div className='section_home-3-features'>
          <div className='padding-global'>
             <div className='container-large'>
                <div className='padding-section-bottom-stick-small'>
                   <div className='_3-features_main-wrapper'>
                     <div className='_3-features_title-wrapper'>
                       <h3 className='text-align-center'>Explore our role in reshaping the world of digital interactions</h3>
                     </div>
                     <div className='_3-features_grid'>
                       <a href='https://www.tanla.com/platform/wisely' className='w-inline-block'>
                       <div className='_3-features_card-wrapper'>
                         <img src='https://assets-global.website-files.com/65a4d6e71551dd4dd97a2ac6/65bccf005922bc862e22cd86_icons.svg' className='icon-32'/>
                         <div className='_3-features_card-content-wrapper'>
                           <div className='_3-features_arrow-wrapper'>
                             <h4>Discover Wisely</h4>
                             <BsArrowRight className="right-arrow" />
                           </div>
                           <p className='para-small'>Trust our platform of platform to unify your digital interactions.</p>
                         </div>
                       </div>
                       </a>
                       <a href='https://www.tanla.com/careers' className='w-inline-block'>
                       <div className='_3-features_card-wrapper'>
                         <img src='https://assets-global.website-files.com/65a4d6e71551dd4dd97a2ac6/65bccebdca2094556cd0edf5_icons.svg' className='icon-32'/>
                         <div className='_3-features_card-content-wrapper'>
                           <div className='_3-features_arrow-wrapper'>
                             <h4>Elevate your career</h4>
                             <BsArrowRight className="right-arrow" />
                           </div>
                           <p className='para-small'>Trust our platform of platform to unify your digital interactions.</p>
                         </div>
                       </div>
                       </a>
                       <a href='https://www.tanla.com/esg' className='w-inline-block'>
                       <div className='_3-features_card-wrapper'>
                         <img src='https://assets-global.website-files.com/65a4d6e71551dd4dd97a2ac6/65bcceb09fddd95bd933859c_icons.svg' className='icon-32'/>
                         <div className='_3-features_card-content-wrapper'>
                           <div className='_3-features_arrow-wrapper'>
                             <h4>Our ESG commitment</h4>
                             <BsArrowRight className="right-arrow" />
                           </div>
                           <p className='para-small'>Trust our platform of platform to unify your digital interactions.</p>
                         </div>
                       </div>
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

export default Features