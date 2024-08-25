import Linkedin from '../../../img/logos/neon-linkedin.png';
import Facebook from '../../../img/logos/neon-facebook.png';
import Instagram from '../../../img/logos/neon-instagram.png';
import Messenger from '../../../img/logos/neon-twitter.png';
import Tiktok from '../../../img/logos/neon-tiktok.png';
import Youtube from '../../../img/logos/neon-youtube.png';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import './Email.css';

function Email() {
   const [experienceRef, experienceInView] = useInView({ threshold: 0.1, triggerOnce: true });

   const slideOutVariants = {
      hidden: { opacity: 0, x: 100 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
   };

   return (
      <>
         <motion.div
            ref={experienceRef}
            initial="hidden"
            animate={experienceInView ? 'visible' : 'hidden'}
            variants={slideOutVariants}
            className="emailContainer"
         >
            <form action="" className="emailFormSection">
               
            </form>
         </motion.div>
      </>
   );
}

export default Email;
