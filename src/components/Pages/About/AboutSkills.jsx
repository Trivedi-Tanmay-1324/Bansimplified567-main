import flames from '../../img/assets/animated-flame-01.gif';
import flamesBorder from '../../img/assets/borderseparator.gif';
import Lunocan from '../../img/logos/cusp.jpeg';
import Manolo from '../../img/logos/sunnysky.jpeg';
import Rebisco from '../../img/logos/zenzzen.png';
import Sibonga from '../../img/logos/gu1.png';

import './About.css';

const badgeData = [
   {
      src: 'https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white',
      alt: 'html5',
   },
   {
      src: 'https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white',
      alt: 'css3',
   },
   {
      src: 'https://img.shields.io/badge/javascript-%2314354C.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E',
      alt: 'javascript',
   },
   {
      src: '/flutter2.png',
      alt: 'Flutter',
   },
   {
      src: 'https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white',
      alt: 'json',
   },
   {
      src: 'https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white',
      alt: 'tailwind',
   },
   {
      src: 'https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E',
      alt: 'vite',
   },
   {
      src: 'https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB',
      alt: 'react',
   },
   {
      src: 'https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white',
      alt: 'typescript',
   },
   {
      src: 'https://img.shields.io/badge/PHP-777BB4.svg?style=for-the-badge&logo=php&logoColor=white',
      alt: 'php',
   },
   {
      src: 'https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white',
      alt: 'cpp',
   },
   {
      src: 'https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue',
      alt: 'python',
   },
   {
      src: 'https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E',
      alt: 'prettier',
   },
   {
      src: 'https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white',
      alt: 'github',
   },
   {
      src: 'https://img.shields.io/badge/NPM-CA4245?style=for-the-badge&logo=npm&logoColor=white',
      alt: 'npm',
   },
   {
      src: 'https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white',
      alt: 'git',
   },
   {
      src: 'https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white',
      alt: 'vscode',
   },
   {
      src: 'https://img.shields.io/badge/Open%20AI-0f9e7b.svg?style=for-the-badge&logo=openAI&logoColor=white',
      alt: 'open-AI',
   },
   {
      src: 'https://img.shields.io/badge/PowerShell-%235391FE.svg?style=for-the-badge&logo=powershell&logoColor=white',
      alt: 'powershell',
   },
   {
      src: 'https://img.shields.io/badge/Xampp-F37623?style=for-the-badge&logo=xampp&logoColor=white',
      alt: 'xampp',
   },
   {
      src: 'https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white',
      alt: 'windows',
   },
   //{
   //   src: 'https://img.shields.io/badge/Debian-A81D33?style=for-the-badge&logo=debian&logoColor=white',
   //   alt: 'debian',
   //},
   //{
   //   src: 'https://img.shields.io/badge/Linux_Mint-87CF3E?style=for-the-badge&logo=linux-mint&logoColor=white',
   //   alt: 'linux-mint',
   //},
   {
      src: 'https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white',
      alt: 'ubuntu',
   },
];

const AboutSkills = () => {
   return (
      <>
         <section>
            <div className="aboutTBody">
               {badgeData.map((badge, index) => (
                  <div key={index}>
                     <img src={badge.src} alt={badge.alt} height="35" width="100" />
                  </div>
               ))}
            </div>
         </section>
         <p className="aboutSemiTitle">
            
         </p>
      </>
   );
};

const experiences = [
   {
      image: Rebisco,
      alt: 'Rebisco',
      role: 'Python Intern \n ',
      company: 'Zenzzen Pvt. Ltd.',
      description:
         'Zenzzen is your dedicated in crafting innovative, engaging and user-,focused digital solutions, propelling your business to new heights in todays connected world.',
      location: 'Surendranagar, Gujarat, Bharat.',
      duration: 'March 2022 -  May 2022',
      mode: 'On-site',
   },
];

const education = [
   {
    image: Manolo,
      alt: 'High school',
      role: 'Sunny Sky English School',
      description:
         'Sunny Sky English High School is an amazing school that provides schooling for students from nursery to 12th(commerce & science).',
      location: 'Surendranagar, Gujarat, India',
      duration: 'June 2018 - March 2019',
      type: 'GSCB',
      mode: 'Fulltime-Student',
   },
  
   {
      image: Lunocan,
      alt: 'Diploma Engineering',
      role: 'C. U. Shah. Government Polytechnic',
      description:
         'C. U. Shah. Government Polytechnic is a polytechnic college located in Surendranagar, Gujarat. It is one of the top-performing polytechnic college in the Division of Surendranagar.',
      location: 'Surendranagar, Gujarat, India',
      duration: 'August 2019 - March 2022',
      type: 'Diploma Student',
      mode: 'fulltime-Student',
   },
   {
      image: Sibonga,
      alt: 'Bachlors',
      role: 'Gandhinagar Institute of Technology',
      description:
         'Gandhinagar Institute of Technology is a private educational institution located in Ahmedabad, Gujarat. It is classified as a college and offers various programs and services to its students.',
      location: 'Ahmedabad, Gujarat, India',
      duration: 'Sept 2022-2025',
      type: 'Bachlors of Engineering',
      mode: 'Working-Student',
   },
];

const AboutExperienceArticle = ({
   image,
   alt,
   role,
   company,
   description,
   location,
   duration,
   type,
   mode,
}) => (
   <article className="aboutExperienceArticle">
      <div className="aboutExperienceRebisco">
         <img src={image} alt={alt} className="aboutRebisco" />
         <div className="aboutExperienceRebiscoDescription">
            <h1 className="aboutParagraph">{role}</h1>
            {company && <p>{company}</p>}
            <p>{description}</p>
            <p>{location}</p>
         </div>
      </div>
      <div className="aboutExperienceData">
         <p>{duration}</p>
         <p>{type}</p>
         <p>{mode}</p>
      </div>
   </article>
);

const AboutExperience = () => (
   <>
      <div>
         <div className="aboutSection section">
            <img src={flames} width="26px" alt="flames" />
            <h1 className="aboutTitle">Experience</h1>
            <img src={flames} width="26px" alt="flames" />
         </div>
         <div className="aboutSectionEducation">
            {experiences.map((exp, index) => (
               <AboutExperienceArticle key={index} {...exp} />
            ))}
         </div>
      </div>
      <img src={flamesBorder} className="flamesBorder" alt="flamesBorder" />

      <div>
         <div className="aboutSection">
            <img src={flames} width="26px" alt="flames" />
            <h1 className="aboutTitle">Education</h1>
            <img src={flames} width="26px" alt="flames" />
         </div>

         <div className="aboutSectionEducation section">
            {education.map((edu, index) => (
               <AboutExperienceArticle key={index} {...edu} />
            ))}
         </div>
      </div>
   </>
);

export { AboutExperience, AboutSkills };
