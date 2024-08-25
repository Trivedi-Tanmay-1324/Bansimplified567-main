import { Link } from 'react-router-dom';
import './Footer.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Import images
import Linkedin from '../../../img/logos/neon-linkedin.png';
import Facebook from '../../../img/logos/neon-facebook.png';
import Instagram from '../../../img/logos/neon-instagram.png';
import Messenger from '../../../img/logos/neon-twitter.png';
import Tiktok from '../../../img/logos/neon-tiktok.png';
import Youtube from '../../../img/logos/neon-youtube.png';
import flamesBorder from '../../../img/assets/borderseparator.gif';

function Footer() {
   const [experienceRef, experienceInView] = useInView({ threshold: 0.1, triggerOnce: true });

   const slideInVariants = {
      hidden: { opacity: 0, x: -100 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
   };

   return (
      <motion.section
         ref={experienceRef}
         initial="hidden"
         animate={experienceInView ? 'visible' : 'hidden'}
         variants={slideInVariants}
         className="footer"
      >
         <div className="footerContainer">
            <h1 className="footerTitle">TANMAY</h1>
            {/* <nav className="footernavbarContainer">
               <FooterLink to="/about" title="Learn more about us" text="About" />
               <FooterLink to="/blog" title="Read our latest posts" text="Blog" />
               <FooterLink to="/contact" title="Get in touch with us" text="Contact" />
               <FooterLink
                  to="/activities"
                  title="Find activities opportunities"
                  text="Activities"
               />
               <FooterLink to="/portfolio" title="See our portfolio" text="Portfolio" />
               <FooterLink to="/skills" title="What skills I acquired " text="Skills" />
            </nav> */}
         </div>
         <img src={flamesBorder} className="flamesBorder" alt="flamesBorder" />

         <div className="footerSection" >
            <div className="socialIcons">
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
               <SocialLink url="https://x.com/manupandit000?t=bNvxJhg4cjps7XlFRyR72w&s=09" imgSrc={Messenger} alt="Messenger" />
            
               
            </div>

            {/* <img
               src="https://profile-counter.glitch.me/Blacklion567/count.svg"
               alt="Profile Counter"
            /> */}
            <div className="emailContainerInput">
               <div className="inputWrapper">
                  <input type="email" className="emailInput" placeholder="Enter your email" />
                  <button type="submit">Subscribe</button>
               </div>
            </div>
         </div>
      </motion.section>
   );
}

// FooterLink component for navigation links
function FooterLink({ to, title, text }) {
   return (
      <Link className="navbarLinks" to={to} title={title}>
         {text}
      </Link>
   );
}

// SocialLink component for social media icons
function SocialLink({ url, imgSrc, alt }) {
   return (
      <Link to={url}>
         <img src={imgSrc} alt={alt} width="30px" />
      </Link>
   );
}

export default Footer;
