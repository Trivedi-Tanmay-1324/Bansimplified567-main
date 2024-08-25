import Facebook from '../../img/logos/neon-facebook.png';
import Instagram from '../../img/logos/neon-instagram.png';
import Linkedin from '../../img/logos/neon-linkedin.png';
import Tiktok from '../../img/logos/neon-tiktok.png';
import Messenger from '../../img/logos/neon-twitter.png';
import Youtube from '../../img/logos/neon-youtube.png';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Email from '../../Pages/Extra/Email/Email';
import Footer from '../../Pages/Extra/Footer/Footer';

import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Contact.css';

function Contact() {
   const [aboutRef, aboutInView] = useInView({ threshold: 0.1, triggerOnce: true });
   const [firstPersonBioRef, firstPersonBioInView] = useInView({
      threshold: 0.1,
      triggerOnce: true,
   });

   const slideInVariants = {
      hidden: { opacity: 0, x: -100 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
   };

   const slideOutVariants = {
      hidden: { opacity: 0, x: 100 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
   };

   const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: '',
   });

   const [submitted, setSubmitted] = useState(false);

   const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
         ...formData,
         [name]: value,
      });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      setSubmitted(true);
   };

   return (
      <>
         <main className="section">
            <div className="contact">
               <motion.section
                  className="contactContactMe"
                  ref={aboutRef}
                  initial="hidden"
                  animate={aboutInView ? 'visible' : 'hidden'}
                  variants={slideOutVariants}
               >
                  <h1 className="aboutTitle">LET&#39;S WORK TOGETHER 📨</h1>
                  <div className="contactNavLink">
                     {[
                        {
                           to: '/contact',
                           title: 'SPEAKING',
                           subtitle: 'Invite me to speak',
                           text: 'I love sharing my journey and enjoy speaking on both personal technical topics.',
                           icon: (
                              <svg
                                 width="24"
                                 height="24"
                                 fill="currentColor"
                                 viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg"
                              >
                                 <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2ZM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8Zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5Zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11Zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5Z"></path>
                              </svg>
                           ),
                        },
                        {
                           to: '/skills',
                           title: 'SKILLS',
                           subtitle: 'Look At My Skills',
                           text: 'I would love to show you what i am used to with.',
                           icon: (
                              <svg
                                 width="26"
                                 height="26"
                                 fill="currentColor"
                                 viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg"
                              >
                                 <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2Zm0 16H5V5h14v14ZM17.99 9l-1.41-1.42-6.59 6.59-2.58-2.57-1.42 1.41 4 3.99 8-8Z"></path>
                              </svg>
                           ),
                        },
                        {
                           to: '/blog',
                           title: 'BLOG',
                           subtitle: 'Look For My Blog',
                           text: 'I will be sharing my daily blog in my journey as an aspiring Frontend Developer.',
                           icon: (
                              <svg
                                 width="24"
                                 height="24"
                                 fill="currentColor"
                                 viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg"
                              >
                                 <path d="M4 18h16c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2ZM4 5h16v11H4V5Z"></path>
                                 <path d="M23 19H1v2h22v-2Z"></path>
                                 <path d="M13.97 7.53a3.495 3.495 0 0 0-4.95 0 3.495 3.495 0 0 0 0 4.95c1.18 1.18 3 1.34 4.36.47l2.09 2.09 1.06-1.06-2.09-2.09c.87-1.36.72-3.18-.47-4.36Zm-1.06 3.88c-.78.78-2.05.78-2.83 0-.78-.78-.78-2.05 0-2.83.78-.78 2.05-.78 2.83 0 .78.79.78 2.05 0 2.83Z"></path>
                              </svg>
                           ),
                        },
                        //{
                        //   to: '/portfolio',
                        //   title: 'PORTFOLIO',
                        //   subtitle: 'Visit My Portfolio',
                        //   text: 'My portfolio showcases projects I’ve launched at work and side projects I’ve tinkered on.',
                        //   icon: (
                        //      <svg
                        //         width="24"
                        //         height="24"
                        //         fill="currentColor"
                        //         viewBox="0 0 24 24"
                        //         xmlns="http://www.w3.org/2000/svg"
                        //      >
                        //         <path d="m18.364 2-4.546 4.09v10L18.364 12V2ZM7 4.727c-1.773 0-3.682.364-5 1.364v13.327a.49.49 0 0 0 .455.455c.09 0 .136-.064.227-.064 1.227-.59 3-.99 4.318-.99 1.773 0 3.682.363 5 1.363 1.227-.773 3.454-1.364 5-1.364 1.5 0 3.046.282 4.318.964.091.045.136.027.227.027a.489.489 0 0 0 .455-.454V6.09c-.546-.41-1.136-.682-1.818-.91v12.273C19.182 17.136 18.09 17 17 17c-1.546 0-3.773.59-5 1.364V6.09c-1.318-1-3.227-1.363-5-1.363Z"></path>
                        //      </svg>
                        //   ),
                      //  },
                     ].map((link, index) => (
                        <div key={index} className="homeLinkContainer">
                           <NavLink className="homeNavLink" to={link.to}>
                              <h1 className="aboutParagraph">
                                 {link.title} {link.icon}
                              </h1>
                              <h3 className="aboutSemiTitle">{link.subtitle}</h3>
                              <p>{link.text}</p>
                           </NavLink>
                        </div>
                     ))}
                  </div>
               </motion.section>
               <motion.section
                  className="contactSendMessage"
                  ref={firstPersonBioRef}
                  initial="hidden"
                  animate={firstPersonBioInView ? 'visible' : 'hidden'}
                  variants={slideInVariants}
               >
                  <form className="contactForm" onSubmit={handleSubmit}>
                     <h1 className="contactTitle">Send me a message</h1>
                     <div className="contactFormGroup">
                        <label>Name: </label>
                        <input
                           type="text"
                           className="contactName"
                           name="name"
                           value={formData.name}
                           onChange={handleInputChange}
                           required
                           placeholder="Enter your name..."
                        />
                     </div>
                     <div className="contactFormGroup">
                        <label>Email: </label>
                        <input
                           type="email"
                           className="contactEmail"
                           name="email"
                           value={formData.email}
                           onChange={handleInputChange}
                           required
                           placeholder="Enter your email..."
                        />
                     </div>
                     <div className="contactFormGroup">
                        <label>Message: </label>
                        <textarea
                           className="contactMessage"
                           name="message"
                           value={formData.message}
                           onChange={handleInputChange}
                           required
                           placeholder="Enter your message..."
                        ></textarea>
                     </div>
                     <button type="submit" className="contactSubmit">
                        Send Message
                     </button>
                  </form>
                  {submitted && (
                     <div className="submittedDataContainer">
                        <h2>Submitted Information</h2>
                        <p>
                           <strong>Name:</strong> {formData.name}
                        </p>
                        <p>
                           <strong>Email:</strong> {formData.email}
                        </p>
                        <p>
                           <strong>Message:</strong> {formData.message}
                        </p>
                     </div>
                  )}

                  <div className="contactInformation">
                     <div className="contactInfoLoc">
                        <div className="contactInfo">
                           <h1>Contact Information</h1>
                           <p>Name: Tanmay H Trivedi</p>
                           <p>Location: Ahmedabad, Gujarat, India</p>
                           <p>Number: +91 87329 99953</p>
                           <p>Email: tanmayhere23@gmail.com</p>
                        </div>
                        <div className="contactHelpInfo">
                           <h1>What Can We Help You?</h1>
                           <p>
                              Please follow my social media to get in touch with me and learn more
                              about me.
                           </p>
                        </div>
                        <div className="socialIcons">
                           <h4>Follow Me: </h4>
                           <SocialLink
                              url="https://www.linkedin.com/in/tanmay-trivedi-b6b93720a/"
                              imgSrc={Linkedin}
                              alt="Linkedin"
                           />
                           <SocialLink
                              url="https://www.instagram.com/thelifeof.tanmayy?igsh=OWRvdjVhNml4c2J2"
                              imgSrc={Instagram}
                              alt="Instagram"
                           />
                           <SocialLink
                              url="https://www.facebook.com/trivedi.tanmay?mibextid=JRoKGi"
                              imgSrc={Facebook}
                              alt="Facebook"
                           />
                           <SocialLink
                              url="https://x.com/manupandit000?t=bNvxJhg4cjps7XlFRyR72w&s=09"
                              imgSrc={Messenger}
                              alt="Messenger"
                           />
                           
                        </div>
                     </div>
                  </div>
               </motion.section>
            </div>
            <section className="homeEmail">
               <Email />
            </section>
            <section className="section">
               <Footer />
            </section>
         </main>
      </>
   );
}

function SocialLink({ url, imgSrc, alt }) {
   return (
      <div className="contactSocialLink">
         <NavLink to={url}>
            <img src={imgSrc} alt={alt} width="30px" />
         </NavLink>
      </div>
   );
}

export default Contact;
