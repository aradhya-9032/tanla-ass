import React from 'react';
import { BsArrowRight } from "react-icons/bs";
import './blogs.css';

const Blogs = () => {
  return (
    <div>
       <div className='section-_hardcoded-blogs'>
          <div className='padding-global'>
             <div className='container-large'>
               <div className='padding-section-bottom-stick-medium'>
                  <div className='harcoded-blogs_flex'>
                     <h3 className='title-with-h3ider'>Whats's new at Tanla</h3>
                     <div className='hardcoded-blogs_grid'>
                       <a href='https://www.tanla.com/lbs-case-study' className='home-news-card-grey_card-wrapper w-inline-block'>
                         <div className='blog-card-grey_image-wrapper'>
                           <img src='https://assets-global.website-files.com/65a4d6e71551dd4dd97a2ac6/65ddb398b2fe7d7b9dfcd23a_home%20tile%204.webp' className='blog-card-grey_image'/>
                         </div>
                         <div className='blog-card-grey_text-wrapper'>
                           <div className='blog-card-grey_text-wrapper-1'>
                             <div className='caption-small'>Case study</div>
                             <h4>Celebrating tech entrepreneurship</h4>
                             <p>Find out the inspiration behind LBS's decision to pursue Tanla's story.
                             <br/>
                             </p>
                           </div>
                           <div className='link-with-arrow'>
                            <p className='link-with-arrow'>Read More</p>
                            <BsArrowRight className='arrow-icon' />
                           </div>
                         </div>
                       </a>
                       <a href='https://www.spglobal.com/esg/scores/results?cid=4970470' className='home-news-card-grey_card-wrapper w-inline-block'>
                       <div className='blog-card-grey_image-wrapper'>
                         <img src='https://assets-global.website-files.com/65a4d6e71551dd4dd97a2ac6/65c625fa8205e191ff1abf61_img%20with%20title%20(4).webp' className='blog-card-grey_image'/>
                       </div>
                       <div className='blog-card-grey_text-wrapper'>
                         <div className='blog-card-grey_text-wrapper-1'>
                           <div className='caption-small'>ESG</div>
                           <h4>Tanla recognised as an 'Industry Mover'</h4>
                           <p>Tanla named an ‘Industry Mover’ in S&amp;P Global’s Sustainability Yearbook 2024 for more than doubling its ESG score, featuring in top 1% companies globally.
                           </p>
                         </div>
                         <div className='link-with-arrow'>
                          <p className='link-with-arrow_text'>Read More</p>
                          <BsArrowRight className='arrow-icon' />
                         </div>
                       </div>
                       </a>
                       <a href='https://tanla.azureedge.net/resources/media/images/Investor/fy2024/Pressrelease_Q3_FY24.pdf' className='home-news-card-grey_card-wrapper w-inline-block'>
                       <div className='blog-card-grey_image-wrapper'>
                         <img src='https://assets-global.website-files.com/65a4d6e71551dd4dd97a2ac6/65bcd900728b857f66ca0c3d_Frame%209534%20(1).webp' className='blog-card-grey_image'/>
                       </div>
                       <div className='blog-card-grey_text-wrapper'>
                         <div className='blog-card-grey_text-wrapper-1'>
                           <div className='caption-small'>EARNINGS</div>
                           <h4>Q3 2023 earnings</h4>
                           <p>Tanla reports financial results for third quarter 2023.
                           </p>
                         </div>
                         <div className='link-with-arrow'>
                          <p className='link-with-arrow'>Read Press Release</p>
                          <BsArrowRight className='arrow-icon' />
                         </div>
                       </div>
                       </a>
                       <a href='https://www.tanla.com/newsroom/tanla-platforms-recognized-as-a-visionary-in-the-2023-gartner-r-magic-quadrant-tm-for-communications-platform-as-a-service-cpaas' className='home-news-card-grey_card-wrapper w-inline-block'>
                       <div className='blog-card-grey_image-wrapper'>
                         <img src='https://assets-global.website-files.com/65a4d6e71551dd4dd97a2ac6/65c6260e5b1ca9f7b9effd86_gartner%20img%20with%20title%20(3).webp' className='blog-card-grey_image'/>
                       </div>
                       <div className='blog-card-grey_text-wrapper'>
                         <div className='blog-card-grey_text-wrapper-1'>
                           <div className='caption-small'>NEWS</div>
                           <h4>Garter named Tanla Platforms a Visionary</h4>
                           <p>Tanla Platforms recognised as a Visionary in the 2023 Gartner Magic Quadrant for Communications Platforms as a Service report.
                           </p>
                         </div>
                         <div className='link-with-arrow'>
                          <p className='link-with-arrow'>Read Press Release</p>
                          <BsArrowRight className='arrow-icon' />
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

export default Blogs;