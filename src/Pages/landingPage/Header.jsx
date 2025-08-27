import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const LandingPageNavbar = ({ user, handleLogout }) => {
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileMenuOpen && !event.target.closest('.profile-menu-container')) {
        setProfileMenuOpen(false);
      }
      if (mobileMenuOpen && !event.target.closest('.mobile-menu-container')) {
        setMobileMenuOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [profileMenuOpen, mobileMenuOpen]);

  const toggleProfileMenu = () => setProfileMenuOpen(!profileMenuOpen);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const navLinks = [
    { to: '/', label: 'Home', onClick: () => navigate('/') },
    { to: '/about', label: 'About', onClick: () => navigate('/about') },
    { to: '/events', label: 'Events', onClick: () => navigate('/events') },
    { to: '/faqs', label: 'FAQs', onClick: () => navigate('/faqs') },
    { to: '/team', label: 'Team', onClick: () => navigate('/team') },
    { to: '/contact', label: 'Contact', onClick: () => navigate('/contact') },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <div className="fixed top-0 left-0 w-full flex justify-center z-30">
        <nav 
          className={`rounded-full my-1 sm:my-3 px-2 sm:px-6 py-2 sm:py-3 shadow-lg transition-all duration-300 ${
            scrolled ? 'bg-opacity-95' : 'bg-opacity-85'
          } overflow-x-auto max-w-[95%] no-scrollbar`}
          style={{ backgroundColor: '#030455' }}
          aria-label="Main navigation"
        >
          <div className="flex items-center justify-start sm:justify-center min-w-max">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.to}
                className={`px-1.5 sm:px-3 py-0.5 sm:py-2 mx-0.5 sm:mx-1 text-xs sm:text-base rounded-md whitespace-nowrap transition-colors duration-200 focus:outline-none ${
                  isActive(link.to) 
                    ? 'text-[#f9f871] font-semibold' 
                    : 'text-[#e7fefe] font-medium hover:text-[#f4e4c9]'
                }`}
                onClick={link.onClick}
                aria-current={isActive(link.to) ? "page" : undefined}
                style={{ textTransform: 'capitalize' }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>

      {/* Custom CSS for hiding scrollbar but allowing scroll functionality */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .no-scrollbar {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
          }
          .no-scrollbar::-webkit-scrollbar {
            display: none;  /* Chrome, Safari, Opera */
          }
        `
      }} />
    </>
  );
};

export default LandingPageNavbar;