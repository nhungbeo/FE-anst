import React, { useState } from 'react';
import './header.css';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../features/toogle/toogleSlice';
import { 
  FiHome, 
  FiBarChart2, 
  FiUser, 
  FiSettings, 
  FiDroplet, 
  FiMenu, 
  FiX,
  FiActivity,
  FiTarget
} from 'react-icons/fi';
import { BsFillBarChartFill, BsFillCalculatorFill } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';
import Aurthentication from './Auth/Loggin';

export default function Navbar({ fixed }) {
  const dispatch = useDispatch();
  const location = useLocation();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const menuItems = [
    {
      path: '/',
      name: 'Study',
      icon: <FiHome />,
      description: 'Pomodoro Timer'
    },
    {
      path: '/status',
      name: 'Status',
      icon: <FiActivity />,
      description: 'Study Progress'
    },
    {
      path: '/result',
      name: 'Analytics',
      icon: <FiBarChart2 />,
      description: 'Performance Charts'
    },
    {
      path: '/Profile',
      name: 'Profile',
      icon: <FiUser />,
      description: 'User Profile'
    },
    {
      path: '/theme-showcase',
      name: 'Themes',
      icon: <FiDroplet />,
      description: 'Customize Appearance'
    }
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  const closeNavbar = () => {
    setNavbarOpen(false);
    setDropdownOpen(false);
  };

  return (
    <div className='modern-header'>
      <nav className='nav-container'>
        {/* Logo Section */}
        <div className='logo-section'>
          <Link to='/' onClick={() => dispatch(actions.reset())}>
            <div className='logo-container'>
              <span className='logo-icon'>🐝</span>
              <span className='logo-text'>BEE STUDY</span>
            </div>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className='desktop-menu'>
          <ul className='nav-menu'>
            {menuItems.map((item) => (
              <li key={item.path} className='nav-item'>
                <Link
                  to={item.path}
                  className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
                  onClick={closeNavbar}
                  title={item.description}
                >
                  <span className='nav-icon'>{item.icon}</span>
                  <span className='nav-text'>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section */}
        <div className='header-right'>
          {/* User Authentication */}
          <div className='auth-section'>
            <Aurthentication />
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className='mobile-toggle'
            onClick={toggleNavbar}
            aria-label="Toggle navigation"
          >
            {navbarOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${navbarOpen ? 'open' : ''}`}>
          <div className='mobile-menu-content'>
            <div className='mobile-menu-header'>
              <span className='mobile-menu-title'>Navigation</span>
              <button 
                className='mobile-close'
                onClick={closeNavbar}
              >
                <FiX />
              </button>
            </div>
            
            <ul className='mobile-nav-list'>
              {menuItems.map((item) => (
                <li key={item.path} className='mobile-nav-item'>
                  <Link
                    to={item.path}
                    className={`mobile-nav-link ${isActive(item.path) ? 'active' : ''}`}
                    onClick={closeNavbar}
                  >
                    <span className='mobile-nav-icon'>{item.icon}</span>
                    <div className='mobile-nav-content'>
                      <span className='mobile-nav-text'>{item.name}</span>
                      <span className='mobile-nav-desc'>{item.description}</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>

            <div className='mobile-menu-footer'>
              <div className='mobile-auth'>
                <Aurthentication />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {navbarOpen && (
          <div 
            className='mobile-overlay'
            onClick={closeNavbar}
          ></div>
        )}
      </nav>
    </div>
  );
}
