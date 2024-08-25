import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { NavLink } from 'react-router-dom';
import flames from '../../img/assets/animated-flame-01.gif';
import flamesBorder from '../../img/assets/borderseparator.gif';
import Email from '../Extra/Email/Email';
import Footer from '../Extra/Footer/Footer';
import { AboutSkills, AboutExperience } from './AboutSkills';
import './About.css';

const About = () => {
   const [aboutRef, aboutInView] = useInView({ threshold: 0.1, triggerOnce: true });
   const [firstPersonBioRef, firstPersonBioInView] = useInView({
      threshold: 0.1,
      triggerOnce: true,
   });
   const [skillsRef, skillsInView] = useInView({ threshold: 0.1, triggerOnce: true });
   const [experienceRef, experienceInView] = useInView({ threshold: 0.1, triggerOnce: true });

   const slideInVariants = {
      hidden: { opacity: 0, x: -100 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
   };

   const slideOutVariants = {
      hidden: { opacity: 0, x: 100 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
   };

   return (
      <div className="container about">
         <article className="aboutContainer">
            <motion.section
               ref={aboutRef}
               initial="hidden"
               animate={aboutInView ? 'visible' : 'hidden'}
               variants={slideInVariants} 
               className="aboutInformation"
            >
               <h1 className="aboutTitle">NICE TO MEET YOU! I&#39;M TANMAY 👋👨‍💻</h1>
               <p className="aboutSemiTitle">
                  As an Aspiring Software Engineer, I&#39;m passionate about continuous learning and
                  growth. I eagerly explore new technologies and embrace challenges that expand my
                  skills.
                  <a
                     href="./Blacklion567.pdf"
                     className="aboutResume"
                     download="Blacklion567.pdf"
                     title="Welcome Back"
                  >
                     Download Resume
                  </a>
               </p>
               {/* <p className="aboutParagraph">
                  <span className="navbarTitle">1+ year</span> 
               </p> */}
               <br></br>
               <NavLink
                  className="aboutButton"
                  to="https://www.linkedin.com/in/tanmay-trivedi-b6b93720a/"
               >
                  CONNECT ON LINKEDIN
                  <svg
                     width="25"
                     height="15"
                     fill="currentColor"
                     viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path d="M12 4L10.59 5.41 16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8Z"></path>
                  </svg>
               </NavLink>
            </motion.section>
            <section>
               <img className="aboutImages" src="./Tanmay.jpg" alt="banban" />
            </section>
         </article>
         <img src={flamesBorder} className="flamesBorder" alt="flamesBorder" />
         <motion.article
            ref={firstPersonBioRef}
            initial="hidden"
            animate={firstPersonBioInView ? 'visible' : 'hidden'}
            variants={slideOutVariants}
            className="aboutArticle section"
         >
            <div className="aboutArticleSection">
               <section className="aboutFirstPersonBio">
                  <h1 className="aboutTitleArticle">First Person Bio</h1>
                  <figure className="aboutArticleList">
                     {[
                        "Hello! I'm Tanmay H Trivedi, also known as Tanmay, from Ahmedabad, Gujarat, India. 👋",
                        "I'm currently pursuing a Bachelor of Engineering in Information Technology in the Gandhinagar Institute of Technology. 👨‍💻",
                        'I enjoy mastering the art of creating dynamic and intuitive websites. 🐾',
                        'Driven to make a positive impact through digital experiences in the tech industry. 🌊',
                        'Tanmay H Trivedi, was born on February 13, 2004, in Bhavnagar, Gujarat. 🌳',
                     ].map((text, index) => (
                        <p key={index} className="aboutSemiTitle">
                           <img src={flames} width="10px" alt="flames" /> {text}
                        </p>
                     ))}
                  </figure>
               </section>
            </div>
            
         </motion.article>
         <img src={flamesBorder} className="flamesBorder" alt="flamesBorder" />
         <motion.article
            ref={skillsRef}
            initial="hidden"
            animate={skillsInView ? 'visible' : 'hidden'}
            variants={slideInVariants}
            className="section"
         >
            <section>
               <div className="aboutSkillsOfMine">
                  <img src={flames} width="26px" alt="flames" />
                  <h1 className="aboutTitle border">Skills Of Mine 👨‍💻</h1>
                  <img src={flames} width="26px" alt="flames" />
               </div>
               <p className="aboutSemiTitle">
                  Hello!👋 I am A desirous and skillful Flutter developer accompanying a powerful company in building cross-policy travelling requests. Enthusiastic about thorough-stack development and machine intelligence, accompanying a sharp interest in leveraging these technologies to generate creative and stunning solutions. Possesses a hard understanding of front-end and back-end growth, in addition to the unification of machine learning models into uses. Committed to unending knowledge and staying revised accompanying new industry currents, addressing to help contemporary projects in a dynamic surroundings.
               </p>
            </section>
            <section className="aboutSkills section">
               <AboutSkills />
            </section>
            <img src={flamesBorder} className="flamesBorder" alt="flamesBorder" />
            <motion.section
               className="aboutExperience section"
               animate={experienceInView ? 'visible' : 'hidden'}
               variants={slideInVariants}
               ref={experienceRef}
            >
               <AboutExperience />
            </motion.section>
            <img src={flamesBorder} className="flamesBorder" alt="flamesBorder" />
         </motion.article>

         <section className="section">
            <Email />
         </section>
         <section className="section">
            <Footer />
         </section>
      </div>
   );
};

export default About;
