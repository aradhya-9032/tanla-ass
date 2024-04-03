import React from 'react';
import './main.css';

const Main = () => {
  return (
    <div>
      <div className='padding-global'>
         <div className='container-large'>
            <div className='padding-section-medium'>
               <div className='home-tabs_wrapper'>
                  <div className='center-heading'>
                    <h2 className='text-align-center'>Discover ways to create game-changing impact</h2>
                    <p className='para-medium'>Unleash the endless possibilities of our platform, empowering enterprises and their users.</p>
                  </div>
               </div>

               <div className='tabs-container'>
               <div className='main-tabs-container'>
                   <div className='primary-tabs-container'>
                      <div className='primary-tab-container' is-active="true" >
                      <div className='primary-tab-content'>
                        <h5>Uer.ai</h5>
                        <p>Risk, Compliance & Security</p>
                      </div>
                      <img src='https://tanla.azureedge.net/assets/icons/icons.png' alt='icon'/>
                   </div>
                   <div className='primary-tab-container' is-active="false">
                     <div className='primary-tab-content'>
                        <h5>Enterprises.ai</h5>
                        <p>Growth, Marketing & Digital</p>
                     </div>
                     <img src='https://tanla.azureedge.net/assets/icons/basket.png' alt='icon'/>
                   </div>
               </div>
               <div className='secondary-tabs-container'>
                  <div className='secondary-tab-container' is-secondary-actfive="true">
                    <h5>Protect Users</h5>
                  </div>
                  <div className='secondary-tab-container' is-secondary-actfive="false">
                  <h5>Trusted Interactions</h5>
                </div>
                <div className='secondary-tab-container' is-secondary-actfive="false">
                <h5>Accelerate Growth</h5>
              </div>
              <div className='secondary-tab-container' is-secondary-actfive="false">
              <h5>Elevate Experiences</h5>
            </div>
            </div>
            </div>
            <div className='tab-content'>
               <div className='content-container'>
                  <div className='first-container'>
                     <span className='content-caption'>Protect Users</span>
                        <h3 className='content-header'> Safeguard users through robust data security and privacy&nbsp;</h3>
                        <p className='content-about'>
                        Elevate the user experience to unparalleled heights by ensuring the utmost privacy and security, fortified with gold-standard efficacy that stands resolute against the challenges of phishing, spams, and potential data breaches.
                        </p>
                        <button className='content-btn'>
                         <a href='https://www.tanla.com/solutions/protect-users'>Explore Solutions</a>
                        </button>

                  <div className='second-container'>
                    <h4 className='second-header'>Related products</h4>
                    <div className='header-lists'>
                     <a>Wisely Anti-Phising Platform  (ATP)</a>
                     <a>Trubloq</a>
                     <a>Wisely Consent</a>
                    </div>
                  </div>
               </div>
               <div className='content-image'>
                 <img src='https://tanla.azureedge.net/assets/icons/tabscontentOne.webp'/>
               </div>
             </div>
            </div>
          </div>
         </div>
        </div>  
      </div>
      <div className='section_connect-expert'>
        <div className='padding-global'>
           <div className='container-large'>
              <div className='padding-section-bottom-stick-small'>
                <div className='connect-expert_card-wrapper'>
                  <div className='connect-expert_content-wrapper'>
                    <img src='https://assets-global.website-files.com/65a4d6e71551dd4dd97a2ac6/65bcceb5e75ccf0ee2dd5791_icons.svg' className='icon-48'/>
                    <div className='connect-expert_text-wrapper'>
                        <h3>Connect with an expert</h3>
                        <p className='para-medium'>Understand how Tanla can transform your digital interactions. Our team is ready to help.</p>
                    </div>
                    <a href='https://www.tanla.com/contact' className='button is-secondary w-button'>Contact Us</a>
                  </div>
                  <div className='connect-expert_image-wrapper hide-tablet'>
                     <img src='https://assets-global.website-files.com/65a4d6e71551dd4dd97a2ac6/65bdde0b9aba74d774996703_Frame%209526.webp' alt='TanLA Expert Image' className='connect-expert_image '/>
                  </div>
                </div>
              </div>
           </div>
          </div>
          </div>
        <div className='section_home-ai-feature'>
        <div className='padding-global'>
          <div className='container-large'>
             <div className='padding-section-medium'>
                <div className='image-left-content-right-grey_wrapper'>
                   <div className='image-left-content-right-grey_image-wrapper'>
                     <div className='w-embed w-script'>
                       <div className='home-video-player-container'>
                          <video  class="home-video-player" controls>
                             <source src="https://tanla.azureedge.net/resources/assets/videos/Wise%20Albert%20-%2031%20Jan%202024%20HQ%20-%20v1.0.mp4" />
                          </video>
                       </div>
                     </div>
                   </div>
                   <div className='image-left-content-right-grey_content-wrapper'>
                     <div className='image-left-content-right-grey_text-wrapper'>
                       <h3>Embracing Gen AI in everything we do</h3>
                       <p className='para-medium'>Create Gen AI native communications through our intelligent platform, featuring a versatile AI fabric that underlies our products for your digital interactions.</p>
                     </div>
                     <a href='https://www.tanla.com/platform/wisely/wise-albert' className='button is-secondary w-button'>Explore Wise Albert</a>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
      
   </div>
  )
}

export default Main;