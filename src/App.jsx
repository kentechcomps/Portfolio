import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import { Navbar, Nav, Container } from 'react-bootstrap'
import { FaBars, FaTimes } from 'react-icons/fa';
import imge from './assets/img.png'
import arrow from './assets/downarrow.png'
import education from './assets/education.png'
import experience from './assets/experience.png'
import lostfound from './assets/lostandfound.jpg'
import checkmark from './assets/checkmak.png'
import linkedin from './assets/linkedin.png'
import snapstore from './assets/snapstore.png'
import github from './assets/github.png'
import email from './assets/email.png'
import cv from './assets/cv.pdf'
import realestate from './assets/realestatemanagementsystem.jpg'
import banking from './assets/banking.jpg'
import bursary from './assets/bursary.png'
import './App.css'


function App() {

  // const cv =  import.meta.env.DEV ? './assets/cv.pdf' : import.meta.url + './assets/cv.pdf';

  console.log(cv);


    const handleDownload = () => {
      const link = document.createElement('a');
      link.href = cv // Path to your PDF file
      link.download = 'resume.pdf'; // Name to be downloaded
      link.click();
    }




  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");

  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };

 const scrollToContact = () => {
  const contactSection = document.getElementById('contact'); // Assuming the contact section has an id of 'contact'
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
};
const redirectToGithubProfile = () => {
  window.open('https://github.com/kentechcomps', '_blank'); // Replace 'your-profile-url' with your LinkedIn profile URL
};



 const redirectToLinkedIn = () => {
    window.open('https://www.linkedin.com/in/kenn-mutuku-77176a2a3/', '_blank'); // Replace 'your-profile-url' with your LinkedIn profile URL
  };

  const redirectToSnapstore = () => {
    window.open('https://the-snapstore-flask.onrender.com/', '_blank'); // Replace 'your-profile-url' with your LinkedIn profile URL
  };
  const redirectToSnapstoregithub = () =>{
    window.open('https://github.com/michellemwangi01/The-Snapstore-Flask', '_blank')
  }
 const redirectToqwenu =() =>{
  window.open('https://qwenu-residentials.onrender.com/' , '_blank')
 }

 const redirectToqwenugithub =() =>{
  window.open('https://github.com/michellemwangi01/qwenu-residentials' , '_blank')
 }

 const redirectTolostandfoundgithub =() =>{
  window.open('https://github.com/BettLawi/Team-Lost-and-Found-Frontend' , '_blank')
 }
 const redirectTolostandfound =() =>{
  window.open('https://team-lost-and-found-frontend.vercel.app' , '_blank')
 }

 const redirectTobursarygithub = () =>{
  window.open('https://github.com/kenchezken/Masingabursaryfrontend', '_blank')
}

const redirectTobursary = () =>{
  window.open('https://bursaryapplication.onrender.com', '_blank')
}

const redirectTobankinggithub=()=>{
  window.open('https://github.com/kentechcomps/Banking', '_blank')
}

const redirectTobanking=()=>{
  window.open('https://banking-brown.vercel.app/', '_blank')
}

 

  return (
    <>

     {/* <nav className="nav">
      <a href="#" className="nav__brand">
        Kennedy Mutuku
      </a>
      <ul className={active}>
     
        <li className="nav__item">
          <a href="#about" className="nav__link">
            About
          </a>
        </li>
        <li className="nav__item">
          <a href="#experience" className="nav__link">
            EXperience
          </a>
        </li>
        <li className="nav__item">
          <a href="#projects" className="nav__link">
            Projects
          </a>
        </li>
        <li className="nav__item">
          <a href="#contact" className="nav__link">
            Contact
          </a>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav> */}








     <nav className="navbar">
        <div className="nav-container"
        >
           
          <a  className="nav-logo">
            <span style={{
              fontSize: '20px',
              fontWeight: 'bolder' ,
              marginLeft: '5px'
            }}>Kennedy Mutuku</span>
            {/* <i className="fas fa-code"></i> */}
            
          </a>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <a
              
                href="#about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#experience"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#projects"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Projects
              </a>
            </li>
            {/* <li className="nav-item">
              <a
                exact
                to="/Contactus"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact us
              </a>
            </li> */}
            <li className="nav-item">
              <a
                href="#contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                 Contact
              </a>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

            {click ? (
              <span className="icon">
                 <FontAwesomeIcon icon={faHamburger} />
              </span>
            ) : (
              <span className="icon">
                <FontAwesomeIcon icon={faHamburger}/>
              </span>
            )}
          </div>
        </div>
      </nav>


     <section id='profile' style={{ 
                                   height: '100'
    }} >
      <div className='piccontainer'>
        <img src={imge}></img>
      </div>
      <div className='section_text'>
        <p className='sectiontextp1'>Hello , I'm</p>
        <h1 className='title'>Kennedy Mutuku</h1>
        <p className='sectiontextp2'>Fullstack Developer</p>
        <div className='btn-container'>
          <button className='btn btn-color-2' onClick={handleDownload}>
            Download CV
          </button>
          <button className='btn btn-color-1'onClick={scrollToContact}>
            Contact Info
          </button>
        </div>
        <div id='socials-container'>
          <img
           src={linkedin}
          alt='My linkedIn profile'
          className='icon'
          onClick={redirectToLinkedIn}
          ></img>
          <img
           src={github}
          alt='My github profile'
          className='icon'
           onClick={redirectToGithubProfile}
          ></img>
        </div>
      </div>
     </section>

     <section id='about' style={{marginTop: '80px'}}>
      <p>Get To Know More</p>
      <h1 >About Me</h1>
      <div className='aboutdetails'>
        <div className='details'>
          <img src={experience}
          alt='Experience icon'
          className='icon'
          >  
          </img>
          <h3>Experience</h3>
          <p>2+ years <br/> Fullstack Development </p>
        </div>

        <div className='details'>
          <img src={education}
          alt='Education icon'
          className='icon'
          >  
          </img>
          <h3>Education</h3>
          <p>B.Sc. Bachelors Degree Computer science<br/> Software Engineering</p>
        </div>
       
      </div>
      <div className='textcontainer'>
           <p>
           I'm a passionate full-stack developer with a foundation in Android development, blending expertise in frontend and backend technologies. Problem-solving fuels my passion, driving me to craft innovative solutions that exceed expectations. Eager to embrace new challenges, I thrive on continuous learning, exploring emerging technologies, and pushing the boundaries of what's possible in software development. Let's collaborate and create extraordinary solutions together!
           </p>
        </div>
     </section>

     <section id='experience'>
       <p> Explore My</p>
       <h1 className='title'>Experience </h1>
      
        <div className='aboutcontainer'>
          <div className='details'>
            <h2 className='experiencesubtitle'>Frontend Development</h2>
            <div className='articlecontainer'>
             <article>
              <img src={checkmark} alt='experience icon' className='icon'></img>
              <div>
                <h3>HTML</h3>
                <p>Experienced</p>
              </div>
             </article>
             <article>
              <img src={checkmark} alt='experience icon' className='icon'></img>
              <div>
                <h3>css</h3>
                <p>Experienced</p>
              </div>
             </article>
             <article>
              <img src={checkmark} alt='experience icon' className='icon'></img>
              <div>
                <h3>Javascript</h3>
                <p>Experienced</p>
              </div>
             </article>
             <article>
              <img src={checkmark} alt='experience icon' className='icon'></img>
              <div>
                <h3>React</h3>
                <p>Experienced</p>
              </div>
             </article>
             <article>
              <img src={checkmark} alt='experience icon' className='icon'></img>
              <div>
                <h3>Git</h3>
                <p>Experienced</p>
              </div>
             </article>
             <article>
              <img src={checkmark} alt='experience icon' className='icon'></img>
              <div>
                <h3>Adobe photoshop</h3>
                <p>Experienced</p>
              </div>
             </article>
            </div>
          </div>
          <div className='details'>
            <h2 className='experiencesubtitle'>Backend Development</h2>
            <div className='articlecontainer'>
             <article>
              <img src={checkmark} alt='experience icon' className='icon'></img>
              <div>
                <h3>Python</h3>
                <p>Experienced</p>
              </div>
             </article>
             <article>
              <img src={checkmark} alt='experience icon' className='icon'></img>
              <div>
                <h3>Java</h3>
                <p>Experienced</p>
              </div>
             </article>
             <article>
              <img src={checkmark} alt='experience icon' className='icon'></img>
              <div>
                <h3>Flask</h3>
                <p>Experienced</p>
              </div>
             </article>
             <article>
              <img src={checkmark} alt='experience icon' className='icon'></img>
              <div>
                <h3>PostgreSQl</h3>
                <p>Experienced</p>
              </div>
             </article>
             <article>
              <img src={checkmark} alt='experience icon' className='icon'></img>
              <div>
                <h3>SQL</h3>
                <p>Experienced</p>
              </div>
             </article>
             <article>
              <img src={checkmark} alt='experience icon' className='icon'></img>
              <div>
                <h3>Firebase</h3>
                <p>Experienced</p>
              </div>
             </article>

            </div>
       
        </div>
       </div>

     </section>
     <section id='projects'>
      <p>Browse My Recent</p>
      <h1>Projects</h1>
      
        <div className='aboutcontainer'>
        <div className='details color-container'>
         <div className='articlecontainer'>
             <img
             src={realestate}
             alt='Project1'
             className='projectimage'
             ></img>
         </div>
         <h2 className='projecttitle'>Real estate management system</h2>
         <div className='btn-container'>
            <button className='btn btn-color-2 project-btn'
            onClick={redirectToqwenugithub}
            >
                Github
            </button>
            <button className='btn btn-color-2 project-btn'
             onClick={redirectToqwenu}
            >
                Live Demo
            </button>
         </div>
        </div>
        <div className='details color-container'>
         <div className='articlecontainer'>
             <img
             src={lostfound}
             alt='Project1'
             className='projectimage'
             ></img>
         </div>
         <h2 className='projecttitle'>Lost&found system</h2>
         <div className='btn-container'>
            <button className='btn btn-color-2 project-btn'
             onClick={redirectTolostandfoundgithub}
            >
                Github
            </button>
            <button className='btn btn-color-2 project-btn'
            onClick={redirectTolostandfound}
            >
                Live Demo
            </button>
         </div>
        </div>
        <div className='details color-container'>
         <div className='articlecontainer'>
             <img
             src={snapstore}
             alt='Project1'
             className='projectimage'
             ></img>
         </div>
         <h2 className='projecttitle'>Snapstore</h2>
         <div className='btn-container'>
            <button className='btn btn-color-2 project-btn'
            onClick={redirectToSnapstoregithub}
            >
                Github
            </button>
            <button className='btn btn-color-2 project-btn'
            onClick={redirectToSnapstore}
            >
                Live Demo
            </button>
         </div>
        </div>

        <div className='details color-container'>
         <div className='articlecontainer'>
             <img
             src={bursary}
             alt='Project1'
             className='projectimage'
             ></img>
         </div>
         <h2 className='projecttitle'>
  Masinga Constituency BursaryManagement System 
  <span style={{ color: 'red' ,
    fontSize: '10px' 
              
}}>*currently on use</span>
</h2>
         <div className='btn-container'>
            <button className='btn btn-color-2 project-btn'
            onClick={redirectTobursarygithub}
            >
                Github
            </button>
            <button className='btn btn-color-2 project-btn'
            onClick={redirectTobursary}
            >
                Live Demo
            </button>
         </div>
        </div>

        <div className='details color-container'>
         <div className='articlecontainer'>
             <img
             src={banking}
             alt='Project1'
             className='projectimage'
             ></img>
         </div>
         <h2 className='projecttitle'>Kentechbanking System</h2>
         <div className='btn-container'>
            <button className='btn btn-color-2 project-btn'
            onClick={redirectTobankinggithub}
            >
                Github
            </button>
            <button className='btn btn-color-2 project-btn'
            onClick={redirectTobanking}
            >
                Live Demo
            </button>
         </div>
        </div>




        </div>
      
      
     </section>
     <section id='contact'>
      <p>Get in touch</p>
      <h1>Contact Me</h1>
      <div className='Contactinfouppercontainer' style={{overflowX: 'hidden'}}>
        <div className='contactinfocontainer'>
           <img src={email}
           alt='Email icon'
           className='icon contacticon'
           >
           </img>
           <p> 
            <a href=''>mutukukennedy34@gmail.com</a>
           </p>
        </div>
        <div className='contactinfocontainer'>
            <img
            src={linkedin}
            alt='Linkedin icon'
            className='icon contact-icon'
            >
            </img>
            <p>
                <a  href='https://www.linkedin.com/in/kenn-mutuku-77176a2a3/'>Linked in</a>
              </p>
        </div>
      </div>
     </section>
     <footer style={{marginTop: '70px'}}>
      <p>Copyright @#169; 2023 Kennedy Mutuku.All Rights Reserved</p>
     </footer>
    </>
  )
}

export default App
