import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaTrophy, FaUsers, FaMedal, FaMapMarkerAlt } from 'react-icons/fa';

const Achievement = () => {
  const sectionRef = useRef();
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });

  const stats = [
    { icon: <FaMedal className="text-2xl sm:text-3xl" />, value: '2nd', label: 'Prize Winner' },
    { icon: <FaUsers className="text-2xl sm:text-3xl" />, value: '263+', label: 'Teams Competing' },
    { icon: <FaMapMarkerAlt className="text-2xl sm:text-3xl" />, value: 'Pan India', label: 'National Level' },
    { icon: <FaTrophy className="text-2xl sm:text-3xl" />, value: 'SNU', label: 'HackNow India 2025' },
  ];

  return (
    <section
      className="relative py-16 sm:py-24 overflow-hidden"
      style={{ backgroundColor: '#030455' }}
      ref={sectionRef}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-32 -left-32 w-64 h-64 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #f9f871 0%, transparent 70%)' }}
        />
        <div
          className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #f9f871 0%, transparent 70%)' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5"
          style={{ background: 'radial-gradient(circle, #e7fefe 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full border-2 mb-6 shadow-sm"
            style={{ borderColor: '#f9f871', backgroundColor: 'rgba(249, 248, 113, 0.1)' }}>
            <FaTrophy className="text-sm mr-2" style={{ color: '#f9f871' }} />
            <span className="text-sm font-semibold tracking-wider uppercase"
              style={{ color: '#f9f871' }}>Achievement</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: '#fefefe' }}>
            Recognized at{' '}
            <span style={{ color: '#f9f871' }}>National Level</span>
          </h2>
          <p className="text-base sm:text-lg max-w-2xl mx-auto"
            style={{ color: '#e7fefe', opacity: 0.7 }}>
            Team NowSquad secured the 2nd Prize at SNU HackNow India 2025, competing against 263+ teams from across the country
          </p>
        </motion.div>

        {/* Main Content - Photo + Stats */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* Photo - Takes 3 columns */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative group">
              {/* Glow effect behind the image */}
              <div
                className="absolute -inset-1 rounded-2xl opacity-40 blur-xl group-hover:opacity-60 transition-opacity duration-500"
                style={{ background: 'linear-gradient(135deg, #f9f871 0%, #030455 50%, #e7fefe 100%)' }}
              />

              {/* Image container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
                <img
                  src="/teamImgs/Team Photo.JPG"
                  alt="Team NowSquad receiving the 2nd Prize at SNU HackNow India 2025"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
                {/* Overlay gradient at bottom */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
                  style={{ background: 'linear-gradient(to top, rgba(3,4,85,0.8) 0%, transparent 100%)' }}
                />
                {/* Caption overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#f9f871' }} />
                    <p className="text-sm sm:text-base font-medium" style={{ color: '#fefefe' }}>
                      Award Ceremony — SNU HackNow India 2025
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats Grid - Takes 2 columns */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="group relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                >
                  <div
                    className="relative rounded-2xl p-5 sm:p-6 text-center border transition-all duration-300 hover:scale-105"
                    style={{
                      borderColor: 'rgba(231, 254, 254, 0.1)',
                      backgroundColor: 'rgba(231, 254, 254, 0.05)',
                    }}
                  >
                    <div className="mb-3" style={{ color: '#f9f871' }}>
                      {stat.icon}
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold mb-1" style={{ color: '#fefefe' }}>
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm font-medium" style={{ color: '#e7fefe', opacity: 0.6 }}>
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quote */}
            <motion.div
              className="mt-6 p-5 rounded-2xl border"
              style={{
                borderColor: 'rgba(249, 248, 113, 0.2)',
                backgroundColor: 'rgba(249, 248, 113, 0.05)',
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <p className="text-sm sm:text-base italic leading-relaxed" style={{ color: '#e7fefe', opacity: 0.8 }}>
                "ResQLink stood out for its innovative approach combining ServiceNow's enterprise platform with offline P2P communication to bridge the critical gap during emergencies."
              </p>
              <p className="text-xs mt-3 font-semibold" style={{ color: '#f9f871' }}>
                — Hackathon Jury Panel
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Achievement;
