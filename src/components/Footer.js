import React from 'react';
import ContactForm from './ContactForm';
import config from '../../config';
export default function Footer() {
  return (
    <footer id="footer">
      <div className="inner">
        <ContactForm />
        <section>
          <h2>Follow</h2>
          <ul className="icons">
            {config.socialLinks.map(social => {
              const { icon, name, url } = social;
              return (
                <li key={url}>
                  <a href={url} className={`icon ${icon}`}>
                    <span className="label">{name}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </section>
        <ul className="copyright">
          <li>&copy; UI/UX. Pattern Ideas All rights reserved</li>
          <li>
            Design: <a href="http://html5up.net">HTML5 UP</a>
          </li>
          <li>
            Website by: <a href="https://sodawebmedia.com/">Soda Web Media</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
