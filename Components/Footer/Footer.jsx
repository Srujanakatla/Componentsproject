import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          {/* Logo & Slogan */}
          <div className="footer-logo">
            <img
              src="/src/assets/logo.svg" // Ensure logo is in public/assets/
              alt="Less Talking, More Eating"
              style={{ border: 0, height: '100px', width: '100%' }}
            />
            <p>Less Talking, More Eating</p>
          </div>

          {/* Footer Links */}
          <div className="footer-links">
            {[
              { title: 'Product', links: ['Features', 'Pricing', 'Request Demo', 'Integration'] },
              { title: 'Company', links: ['About Us', 'Testimonials', 'Blog', 'Careers'] },
              { title: 'Support', links: ['Help Center', 'Contact Us', 'FAQ', 'System Status'] }
            ].map((section, index) => (
              <div className="footer-column" key={index}>
                <h4>{section.title}</h4>
                <ul>
                  {section.links.map((link, idx) => (
                    <li key={idx}>
                      <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}>{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Social Media Links */}
          <div className="footer-column social-links">
            <h4>Connect</h4>
            <div className="social-icons">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://www.github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>

            </div>
          </div>

          {/* Newsletter */}
          <div className="footer-column newsletter">
            <h4>Stay Updated</h4>
            <form className="newsletter-form">
              <input type="email" placeholder="Your email" required />
              <button type="submit" aria-label="Subscribe">
                <i className="fas fa-arrow-right"></i>
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Less Talking, More Eating. All rights reserved.</p>
          <div className="legal-links">
            {['Terms of Service', 'Privacy Policy', 'Cookie Policy'].map((text, index) => (
              <a href={`#${text.toLowerCase().replace(/\s+/g, '-')}`} key={index}>
                {text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;















// import React from 'react';
// import './Footer.css';

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="container">
//         <div className="footer-main">
//           {/* Logo & Slogan */}
//           <div className="footer-logo">
//             <img
//               src="/src/assets/logo.svg"
//               alt="Less Talking, More Eating"
//               style={{ border: 0, height: '100px', width: '100%' }}
//             />
//             <p>Less Talking, More Eating</p>
//           </div>

//           {/* Footer Links */}
//           <div className="footer-links">
//             {[
//               { title: 'Product', links: ['Features', 'Pricing', 'Request Demo', 'Integration'] },
//               { title: 'Company', links: ['About Us', 'Testimonials', 'Blog', 'Careers'] },
//               { title: 'Support', links: ['Help Center', 'Contact Us', 'FAQ', 'System Status'] }
//             ].map((section, index) => (
//               <div className="footer-column" key={index}>
//                 <h4>{section.title}</h4>
//                 <ul>
//                   {section.links.map((link, idx) => (
//                     <li key={idx}>
//                       <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}>{link}</a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}

//              {/* Connect Section  */}
//              <div className="footer-column">
//               <h4>Connect</h4>
//               <div className="social-links">
//                 {[
//                   { src:"https://th.bing.com/th/id/OIP.xdv0SGuh3lcQdygSUqRvtwAAAA?rs=1&pid=ImgDetMain", name: 'instagram', url: 'https://www.instagram.com/' },
//                   { name: 'whatsapp', url: 'https://wa.me/' },
//                   { name: 'linkedin', url: 'https://www.linkedin.com/' } 
//                ].map((social, index) => (
//                    <a 
//                      href={social.url}
//                      key={index}
//                      target="_blank"
//                     rel="noopener noreferrer"
//                   aria-label={social.name}
//                  >
//                    <i className={`social-icon ${social.name}`}></i>
//                  </a>
//                ))}
//                </div>
//             </div> 
//              {/* <a href="#"><i className="fab fa-facebook-f"></i></a>
//               <a href="#"><i className="fab fa-twitter"></i></a>
//               <a href="#"><i className="fab fa-instagram"></i></a>
//               <a href="#"><i className="fab fa-linkedin-in"></i></a>  */}

//             {/* Newsletter */}
//             <div className="footer-column newsletter">
//               <h5>Stay Updated</h5>
//               <form className="newsletter-form">
//                 <input type="email" placeholder="Your email" required />
//                 <button type="submit" aria-label="Subscribe">
//                   <i className="arrow-right"></i>
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>

//         {/* Footer Bottom */}
//         <div className="footer-bottom">
//           <p>&copy; {new Date().getFullYear()} Less Talking, More Eating. All rights reserved.</p>
//           <div className="legal-links">
//             {['Terms of Service', 'Privacy Policy', 'Cookie Policy'].map((text, index) => (
//               <a href={`#${text.toLowerCase().replace(/\s+/g, '-')}`} key={index}>
//                 {text}
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;