import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer flex between">
      <div className="copyright">
        <span>Copyright © 2019 Paych Company S.L. All rights reserved</span>
      </div>
      <div className="footer-links">
        <Link to="/">Правила пользования</Link>
        <Link to="/">Напишите нам</Link>
      </div>
    </footer>
  );
}

export default Footer