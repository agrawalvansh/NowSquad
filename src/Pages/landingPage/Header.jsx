import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const LandingPageNavbar = ({ user, handleLogout }) => {
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [portalsMenuOpen, setPortalsMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

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

  // Close video modal on Escape key & prevent body scroll
  useEffect(() => {
    if (videoModalOpen) {
      document.body.style.overflow = 'hidden';
      const handleEscape = (e) => {
        if (e.key === 'Escape') setVideoModalOpen(false);
      };
      document.addEventListener('keydown', handleEscape);
      return () => {
        document.body.style.overflow = '';
        document.removeEventListener('keydown', handleEscape);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [videoModalOpen]);

  const toggleProfileMenu = () => setProfileMenuOpen(!profileMenuOpen);
  const togglePortalsMenu = () => setPortalsMenuOpen(!portalsMenuOpen);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { href: '#Home', label: 'Home', sectionId: 'Home' },
    { href: '#About', label: 'About', sectionId: 'About' },
    { href: '#OurSolution', label: 'Our Solution', sectionId: 'OurSolution' },
    { href: '#FAQs', label: 'FAQs', sectionId: 'FAQs' },
    { href: '#Team', label: 'Team', sectionId: 'Team' }
  ];

  const portalLinks = [
    { url: 'https://mav-aug-7844-0006.lab.service-now.com/cp', label: 'Citizen Portal', icon: '' },
    { url: 'https://mav-aug-7844-0006.lab.service-now.com/vp', label: 'Volunteer Portal', icon: '' },
    { url: 'https://mav-aug-7844-0006.lab.service-now.com/dp', label: 'Department Portal', icon: '' }
  ];

  const handleDownloadApp = () => {
    const apkPath = '/apk/HackNow Offline App!!.apk';
    const link = document.createElement('a');
    link.href = apkPath;
    link.download = 'ResQLink.apk';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const isActive = (href) => location.hash === href;

  return (
    <>
      <div className="fixed top-0 right-0 left-0 w-full z-30">
        <nav
          className={`w-full px-4 sm:px-6 py-2 sm:py-3 shadow-lg transition-all duration-300 ${scrolled ? 'bg-opacity-95' : 'bg-opacity-85'
            }`}
          style={{ backgroundColor: '#030455' }}
          aria-label="Main navigation"
        >
          <div className="grid items-center w-full" style={{ gridTemplateColumns: '1fr auto 1fr' }}>
            {/* Logo */}
            <div className="flex items-center">
              <a
                href="#Home"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('Home');
                  window.history.pushState(null, '', '#Home');
                }}
                className="flex items-center shrink-0"
                aria-label="ResQLink Home"
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200" style={{ width: '120px', height: '32px' }}>
                  <img
                    src="/logo/logo.png"
                    alt="ResQLink"
                    className="w-full h-full object-contain"
                    style={{ transform: 'scale(2.2)' }}
                  />
                </div>
              </a>
            </div>

            {/* Main Navigation Links - True Center Column */}
            <div className="flex items-center justify-center overflow-x-auto no-scrollbar">
              <div className="flex items-center min-w-max gap-1 sm:gap-2">
                {navLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className={`px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-base rounded-md whitespace-nowrap transition-colors duration-200 focus:outline-none ${isActive(link.href)
                        ? 'text-[#f9f871] font-semibold'
                        : 'text-[#e7fefe] font-medium hover:text-[#f4e4c9]'
                      }`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.sectionId);
                      window.history.pushState(null, '', link.href);
                    }}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    style={{ textTransform: 'capitalize' }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Right side buttons container */}
            <div className="flex items-center justify-end gap-2 sm:gap-3">
              {/* Watch Demo Button */}
              <button
                onClick={() => setVideoModalOpen(true)}
                className="flex items-center justify-center px-2 sm:px-3 py-1.5 sm:py-2 border-2 border-[#f9f871] text-[#f9f871] text-xs sm:text-sm font-semibold rounded-md hover:bg-[#f9f871] hover:text-[#030455] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#f9f871] focus:ring-opacity-50 whitespace-nowrap"
                aria-label="Watch demo video"
              >
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
                <span className="hidden sm:inline">Watch Demo</span>
                <span className="sm:hidden">Demo</span>
              </button>

              {/* Download App Button */}
              <button
                onClick={handleDownloadApp}
                className="flex items-center justify-center px-2 sm:px-3 py-1.5 sm:py-2 bg-[#f9f871] text-[#030455] text-xs sm:text-sm font-semibold rounded-md hover:bg-[#f4e4c9] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#f9f871] focus:ring-opacity-50 whitespace-nowrap"
                aria-label="Download offline app"
              >
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
                </svg>
                <span className="hidden sm:inline">Download App</span>
                <span className="sm:hidden">App</span>
              </button>

              {/* Portals Menu */}
              <div className="relative portals-menu-container">
                <button
                  onClick={togglePortalsMenu}
                  className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-[#e7fefe] bg-opacity-20 hover:bg-opacity-30 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#f9f871] focus:ring-opacity-50"
                  aria-label="Portals menu"
                  aria-expanded={portalsMenuOpen}
                >
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-[#e7fefe]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
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
              <div className="sm:hidden mobile-menu-container">
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
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="sm:hidden mt-4 pb-4 border-t border-[#e7fefe] border-opacity-20">
              <div className="flex flex-col space-y-2 mt-4">
                {/* Download App Button for Mobile */}
                <button
                  onClick={() => {
                    handleDownloadApp();
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center px-3 py-2 text-sm font-semibold text-[#030455] bg-[#f9f871] rounded-md hover:bg-[#f4e4c9] transition-colors duration-200"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
                  </svg>
                  Download Offline App
                </button>

                {/* Watch Demo Button for Mobile */}
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setVideoModalOpen(true);
                  }}
                  className="flex items-center px-3 py-2 text-sm font-semibold text-[#f9f871] border-2 border-[#f9f871] rounded-md hover:bg-[#f9f871] hover:text-[#030455] transition-colors duration-200"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Watch Demo Video
                </button>

                {navLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className={`px-3 py-2 text-sm rounded-md transition-colors duration-200 ${isActive(link.href)
                        ? 'text-[#f9f871] font-semibold bg-[#e7fefe] bg-opacity-10'
                        : 'text-[#e7fefe] font-medium hover:text-[#f4e4c9] hover:bg-[#e7fefe] hover:bg-opacity-10'
                      }`}
                    onClick={(e) => {
                      e.preventDefault();
                      setMobileMenuOpen(false);
                      scrollToSection(link.sectionId);
                      window.history.pushState(null, '', link.href);
                    }}
                  >
                    {link.label}
                  </a>
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

      {/* Video Demo Modal */}
      {videoModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 video-modal-backdrop"
          onClick={() => setVideoModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Demo video"
        >
          <div
            className="relative w-full max-w-4xl video-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setVideoModalOpen(false)}
              className="absolute -top-12 right-0 flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-200 group"
              aria-label="Close video"
            >
              <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">Close</span>
              <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-200">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            </button>

            {/* Video Title */}
            <div className="mb-4 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
              <h3 className="text-white text-lg sm:text-xl font-semibold">ResQLink — Product Demo</h3>
            </div>

            {/* Video Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/oHa1zSCVmkA?autoplay=1&rel=0"
                title="NowSquad_Video_SNU HackNow India"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>

            {/* Subtle hint */}
            <p className="text-white/40 text-xs text-center mt-4">Press Esc or click outside to close</p>
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{
        __html: `
          .no-scrollbar {
            -ms-overflow-style: none;  
            scrollbar-width: none;  
          }
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .video-modal-backdrop {
            background: rgba(0, 0, 0, 0.75);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            animation: fadeIn 0.25s ease-out;
          }
          .video-modal-content {
            animation: scaleIn 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes scaleIn {
            from { opacity: 0; transform: scale(0.92); }
            to { opacity: 1; transform: scale(1); }
          }
        `
      }} />
    </>
  );
};

export default LandingPageNavbar;