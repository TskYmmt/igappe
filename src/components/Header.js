// src/components/Header.js
import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleAnchorClick = (e, anchor) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(`.${anchor}`);
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header>
      <div className={`sp-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span className="toggle-line"></span>
        <span className="toggle-line"></span>
        <span className="toggle-line"></span>
      </div>
      <div className={`sp-menu ${isOpen ? 'open' : ''}`}>
        <a className="menu-logo" href="/">
          <img src="/img/logo_b.png" alt="挽肉と米" />
        </a>
        <ul className="menu-link">
          <li><a href="/">TOP</a></li>
          <li><a href="#" className="anchor" onClick={(e) => handleAnchorClick(e, 'sp-concept')}>「挽肉と米」のこだわり</a></li>
          <li><a href="/kichijoji/">挽肉と米 吉祥寺</a></li>
          <li>
            <a href="/shibuya/">挽肉と米 渋谷</a>
            <a className="-reserve" href="https://www.tablecheck.com/shops/hikinikutocome/reserve" target="_blank" rel="noopener noreferrer">- WEB記帳</a>
          </li>
          <li>
            <a href="/kyoto/">挽肉と米 京都</a>
            <a className="-reserve" href="https://www.tablecheck.com/shops/hikinikutocome-kyoto/reserve" target="_blank" rel="noopener noreferrer">- オンライン先行記帳</a>
          </li>
          <li>
            <a href="/imaizumi/">挽肉と米 今泉</a>
            <a className="-reserve" href="https://www.tablecheck.com/shops/hikinikutocome-imaizumi/reserve" target="_blank" rel="noopener noreferrer">- WEB記帳</a>
          </li>
          <li><a href="/taipei_zhongshan/">挽肉と米 台北華山</a></li>
        </ul>
        <ul className="sns menu-sns">
          <li>
            <a href="https://www.instagram.com/hikiniku.to.come/" target="_blank" rel="noopener noreferrer">
              <div className="sns-icon">
                <img className="icon -insta" src="/img/ico_insta_b.png" alt="" />
              </div>
              全店共通
            </a>
          </li>
          {/* ... */}
        </ul>
      </div>
    </header>
  );
};

export default Header;