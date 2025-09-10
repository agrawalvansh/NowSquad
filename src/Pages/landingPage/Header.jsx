import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const LandingPageNavbar = ({ user, handleLogout }) => {
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [portalsMenuOpen, setPortalsMenuOpen] = useState(false);
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
      if (portalsMenuOpen && !event.target.closest('.portals-menu-container')) {
        setPortalsMenuOpen(false);
      }
      if (mobileMenuOpen && !event.target.closest('.mobile-menu-container')) {
        setMobileMenuOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [profileMenuOpen, portalsMenuOpen, mobileMenuOpen]);

  const toggleProfileMenu = () => setProfileMenuOpen(!profileMenuOpen);
  const togglePortalsMenu = () => setPortalsMenuOpen(!portalsMenuOpen);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const navLinks = [
    { to: '/', label: 'Home', onClick: () => navigate('/') },
    { to: '/about', label: 'About', onClick: () => navigate('/about') },
    { to: '/events', label: 'Our Solution', onClick: () => navigate('/events') },
    { to: '/faqs', label: 'FAQs', onClick: () => navigate('/faqs') },
    { to: '/team', label: 'Team', onClick: () => navigate('/team') }
  ];

  const portalLinks = [
    { url: 'https://mav-aug-7844-0006.lab.service-now.com/cp', label: 'Citizen Portal', icon: '' },
    { url: 'https://mav-aug-7844-0006.lab.service-now.com/vp', label: 'Volunteer Portal', icon: '' },
    { url: 'https://mav-aug-7844-0006.lab.service-now.com/dp', label: 'Department Portal', icon: '' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <div className="fixed top-0 right-0 left-0 w-full z-30">
        <nav 
          className={`w-full px-4 sm:px-6 py-2 sm:py-3 shadow-lg transition-all duration-300 ${
            scrolled ? 'bg-opacity-95' : 'bg-opacity-85'
          }`}
          style={{ backgroundColor: '#030455' }}
          aria-label="Main navigation"
        >
          <div className="flex items-center justify-between w-full">
            {/* Main Navigation Links - Center */}
            <div className="flex items-center justify-center flex-1 overflow-x-auto no-scrollbar">
              <div className="flex items-center min-w-max">
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
            </div>

            {/* Portals Menu - Right Side */}
            <div className="relative portals-menu-container ml-4">
              <button
                onClick={togglePortalsMenu}
                className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-[#e7fefe]  bg-opacity-20 hover:bg-opacity-30 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#f9f871] focus:ring-opacity-50"
                aria-label="Portals menu"
                aria-expanded={portalsMenuOpen}
              >
                <svg 
                  className="w-5 h-5 sm:w-6 sm:h-6 text-[#e7fefe]" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </button>

              {/* Portals Dropdown Menu */}
              {portalsMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                  <div className="px-4 py-2 text-sm font-semibold text-gray-700 border-b border-gray-200">
                    Portal Access
                  </div>
                  {portalLinks.map((portal, index) => (
                    <a
                      key={index}
                      href={portal.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-150"
                      onClick={() => setPortalsMenuOpen(false)}
                    >
                      <span className="mr-3 text-lg">{portal.icon}</span>
                      <span>{portal.label}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <div className="sm:hidden mobile-menu-container ml-2">
              <button
                onClick={toggleMobileMenu}
                className="flex items-center justify-center w-8 h-8 rounded-md bg-[#e7fefe] bg-opacity-20 hover:bg-opacity-30 transition-all duration-200 focus:outline-none"
                aria-label="Toggle mobile menu"
              >
                <svg
                  className="w-5 h-5 text-[#e7fefe]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="sm:hidden mt-4 pb-4 border-t border-[#e7fefe] border-opacity-20">
              <div className="flex flex-col space-y-2 mt-4">
                {navLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.to}
                    className={`px-3 py-2 text-sm rounded-md transition-colors duration-200 ${
                      isActive(link.to) 
                        ? 'text-[#f9f871] font-semibold bg-[#e7fefe] bg-opacity-10' 
                        : 'text-[#e7fefe] font-medium hover:text-[#f4e4c9] hover:bg-[#e7fefe] hover:bg-opacity-10'
                    }`}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      link.onClick();
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="border-t border-[#e7fefe] border-opacity-20 mt-4 pt-4">
                  <div className="text-xs font-semibold text-[#e7fefe] mb-2 px-3">Portals</div>
                  {portalLinks.map((portal, index) => (
                    <a
                      key={index}
                      href={portal.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-3 py-2 text-sm text-[#e7fefe] hover:text-[#f4e4c9] hover:bg-[#e7fefe] hover:bg-opacity-10 rounded-md transition-colors duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="mr-3">{portal.icon}</span>
                      <span>{portal.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}
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