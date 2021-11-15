import React from 'react';
import footers from '../api/footers.json';
function Footer() {
  return (
    <nav className="footer">
      <ul>
        {footers.map((footer) => (
          <li className="footer__list" key="id">
            <a href="/" className="footer__href">
              {footer.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Footer;
