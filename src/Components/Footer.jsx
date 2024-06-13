import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import '../CSS files/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <h2>About</h2>
      <div className="footer-lists">
        <div className="footer-list">
          <h3>Mohammed Owais</h3>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/mohammed-owais-6658301b0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" rel="noopener noreferrer">
                <FaLinkedin />  <div className='links'>LinkedIn</div>
              </a>
            </li>
            <li>
              <a href="https://github.com/owaismohammed79" rel="noopener noreferrer">
                <FaGithub />  <div className='links'>Github</div>
              </a>
            </li>
            <li>
              <a href="https://x.com/Mohamme28738350?t=HFULenDRpO9-uC3MH4ws9Q&s=09" rel="noopener noreferrer">
                <FaTwitter />  <div className='links'>Twitter</div>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-list">
          <h3>Mohammed Sufyan B</h3>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/mohammed-sufyan-b-ba93bb273?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" rel="noopener noreferrer">
                <FaLinkedin />  <div className='links'>LinkedIn</div>
              </a>
            </li>
            <li>
              <a href="https://github.com/Sufyanmd" rel="noopener noreferrer">
                <FaGithub />  <div className='links'>Github</div>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/MD_sufyan133?t=qXrAuwVJFowUkWKUWNhewQ&s=09" rel="noopener noreferrer">
                <FaTwitter />  <div className='links'>Twitter</div>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-list">
          <h3>Bharath Guddadar</h3>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/bharathguddadar" rel="noopener noreferrer">
                <FaLinkedin />  <div className='links'>LinkedIn</div>
              </a>
            </li>
            <li>
              <a href="https://github.com/BharathGuddadar" rel="noopener noreferrer">
                <FaGithub />  <div className='links'>Github</div>
              </a>
            </li>
            <li>
              <a href="https://x.com/BharathGP21?t=Q33a708g4fqwaWT4AMPMYA&s=09" rel="noopener noreferrer">
                <FaTwitter />  <div className='links'>Twitter</div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
