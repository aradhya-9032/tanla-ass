import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div>
      <div className="footer_component">
         <div className="padding-global">
           <div className="container-large">
             <div className="padding-section-footer">
                <div className="footer_content-wrapper">
                  <div className="footer_list-wrapper-flex">
                    <div className="footer_list-wrapper">
                      <h4 className="text-style-nowrap">Company</h4>
                         <div className="footer_link-wrapper">
                          <a href="/about-us" className="footer-link">About</a>
                          <a href="/careers" className="footer-link">Careers</a>
                          <a href="/leadership" className="footer-link">Leadership</a>
                          <a href="/investor-relations" className="footer-link">Investors</a>
                          <a href="/esg" className="footer-link">ESG</a>
                        </div>
                     </div>
           <div  className="footer_list-wrapper">
             <h4 className="text-style-nowrap">Resources</h4>
                <div className="footer_link-wrapper">
                   <a href="/case-studies" className="footer-link">Case Studies</a>
                   <a href="/blog" className="footer-link">Blog</a>
                   <a href="/newsroom" className="footer-link">Newsroom</a>
                </div>
            </div>
         <div className="footer_list-wrapper">
        <div>
      <h4 className="text-style-nowrap">Values</h4>
      </div>
      <div className="footer_link-wrapper">
          <a href="/values#No-Scam-No-Spam" className="footer-link">No Scam, No Spam</a>
          <a href="/values#Data-Privacy-Data-Security" className="footer-link">Data Privacy, Data Security</a>
          <a href="/values#Ubiquitous-Accessibility" className="footer-link">Ubiquitous Accessibility</a>
          <a href="/values#100-Transparency" className="footer-link">100% Transparency</a>
          <a href="/values#Purposeful-Collaboration" className="footer-link">Purposeful Collaboration</a>
      </div>
      </div>
      </div>
      <div  className="footer_company-content-wrapper">
         <div className="footer_company-content-wrapper-1">
           <div className="footer_company-content-wrapper-2">
             <h4>Latest from Tanla</h4>
              <p>Be the first to know about latest developments and news from Tanla by subscribing to our email alert.</p>
      </div>
      <div className="w-embed w-script">
      <form className="subscribe-container" onsubmit="return subscribeValidateForm(event)">
      <label for="footer-subscribe-email">
        <span>Email*</span>
        <input type="email" required="" name="footer-subscribe-email" className="email-input notSelected" onfocus="addStyle(this)" onblur="addStyle(this)"/>
      </label>
      <div className="subscribe-button-container">
        <input type="submit" value="Subscribe" className="form-subscribe-btn"/>
      </div>
    </form>
  </div>
  </div>
  <div className="footer_social-media-icon-wrapper">
     <a href="https://in.linkedin.com/company/tanla-platforms" target="_blank" className="w-inline-block">
        <img src="https://assets-global.website-files.com/65a4d6e71551dd4dd97a2ac6/65bcf4669ab19e1342e2c57c_image%2052.svg" className="icon-32"/>
     </a>
     <a  href="https://twitter.com/Tanla_India" target="_blank" className="w-inline-block">
        <img src="https://assets-global.website-files.com/65a4d6e71551dd4dd97a2ac6/65bcf479d317efbf098fdce6_image%2036.svg" className="icon-32"/>
     </a>
     <a  href="https://www.youtube.com/c/tanlaplatformslimited" target="_blank" className="w-inline-block">
        <img src="https://assets-global.website-files.com/65a4d6e71551dd4dd97a2ac6/65bcf4795a75de6130655983_image%2037.svg" className="icon-32"/>
     </a>
     <a href="https://www.instagram.com/tanlaplatforms/" target="_blank" className="w-inline-block">
        <img src="https://assets-global.website-files.com/65a4d6e71551dd4dd97a2ac6/65bcf4794c5b8474089a6ff7_image%2039.svg"  className="icon-32"/>
     </a>
  </div>
  </div>
  <div  className="footer_additonal-content-wrapper">
  <div className="footer_additional-links-wrapper">
     <a href="/terms-and-conditions" className="footer-link-small">Terms and Conditions</a>
     <a href="/sitemap" className="footer-link-small">Sitemap</a>
     <a href="/privacy-policy" className="footer-link-small">Privacy</a>
  </div>
  <div className="text-xsmall">Copyright © 2024 Tanla. All rights reserved.
        </div>
      </div>
      </div>
     </div>
     </div>
    </div>
   </div>
  </div>
  )
}

export default Footer;