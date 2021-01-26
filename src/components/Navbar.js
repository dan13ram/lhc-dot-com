import React, { useState, useEffect } from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { applyTheme } from '../utils/Theme';
import useSiteMetadata from '../hooks/useSiteMetadata';
import WorkList from './WorkList';
import { LogoIcon } from '../icons/LogoIcon';

import { Icon } from '@iconify/react';
import instagramIcon from '@iconify/icons-ant-design/instagram-outlined';
import vimeoIcon from '@iconify/icons-la/vimeo';
import linkedinIcon from '@iconify/icons-la/linkedin-in';

const Navbar = ({ title }) => {
  const { social } = useSiteMetadata();
  const [open, toggleOpen] = useState(false);
  const [currentTheme, setTheme] = React.useState('light');
  const [theme, toggleTheme] = React.useState(false);
  const isActiveNavItem = ({ isCurrent }) => {
    return isCurrent ? { className: 'navItem active' } : { className: 'navItem' };
  };
  useEffect(() => {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
      toggleTheme(currentTheme !== 'light');
      setTheme(currentTheme);
      applyTheme(currentTheme);
      localStorage.setItem('theme', currentTheme);
    }
  }, []);
  const changeTheme = () => {
    toggleTheme(theme => !theme);
    const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    applyTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
  };

  return (
    <nav className={open ? 'navBar open' : 'navBar'}>
      <AniLink
        fade
        to="/work"
        className="navLogo"
        title={title}
        onClick={() => {
          toggleOpen(false);
        }}
      >
        <LogoIcon id="logoSvg" color="pink.400" />
      </AniLink>
      <div
        className="navMenu"
        onClick={() => {
          toggleOpen(false);
        }}
      >
        <AniLink fade getProps={isActiveNavItem} id="workSvg" to={`/work`}>
          <p>Work</p>
        </AniLink>
        <WorkList />
        <AniLink fade getProps={isActiveNavItem} id="blogSvg" to={`/blog`}>
          <p>Blog</p>
        </AniLink>
        <AniLink fade getProps={isActiveNavItem} id="aboutSvg" to={`/about`}>
          <p>About</p>
        </AniLink>
      </div>
      <div className="switchContainer">
        <label className="switch">
          <input type="checkbox" checked={theme} onChange={changeTheme} />
          <span className="slider round"></span>
        </label>
      </div>
      <div className="social">
        <a href={`https://vimeo.com/${social.vimeo}`} target="_blank" rel="noopener noreferrer">
          <Icon className="icon" icon={vimeoIcon} />
        </a>
        <a href={`https://instagram.com/${social.instagram}`} target="_blank" rel="noopener noreferrer">
          <Icon className="icon" icon={instagramIcon} />
        </a>
        <a href={`https://linkedin.com/in/${social.linkedIn}`} target="_blank" rel="noopener noreferrer">
          <Icon className="icon" icon={linkedinIcon} />
        </a>
      </div>
      <div
        className="navToggle"
        onClick={() => {
          toggleOpen(o => !o);
        }}
      >
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
