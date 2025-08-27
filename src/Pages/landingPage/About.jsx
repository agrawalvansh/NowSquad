import React, { useState, useEffect } from 'react';
import { 
  FaSearch, 
  FaHandsHelping, 
  FaChartLine, 
  FaUsers, 
  FaMobileAlt, 
  FaCogs, 
  FaUserTie,
  FaBell,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaSync,
  FaRocket,
  FaHeart,
  FaGlobe,
  FaLightbulb
} from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const AboutSection = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Refs for scroll animations
  const missionRef = useRef();
  const howItWorksRef = useRef();
  const featuresRef = useRef();
  
  const isMissionInView = useInView(missionRef, { once: true, threshold: 0.1 });
  const isHowItWorksInView = useInView(howItWorksRef, { once: true, threshold: 0.1 });
  const isFeaturesInView = useInView(featuresRef, { once: true, threshold: 0.1 });

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#fefefe' }}>
      {/* Mission Statement Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-14">
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full" style={{ backgroundColor: '#030455' }}></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full" style={{ backgroundColor: '#030455' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mission Label */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isMissionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-12"
            ref={missionRef}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full border-2 shadow-sm" 
                 style={{ borderColor: '#030455', backgroundColor: '#fefefe' }}>
              <div className="w-2 h-2 rounded-full mr-2 animate-pulse" 
                   style={{ backgroundColor: '#030455' }}></div>
              <span className="text-sm font-semibold tracking-wider uppercase" 
                    style={{ color: '#030455' }}>Our Mission</span>
            </div>
          </motion.div>

          {/* Hero Text */}
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={isMissionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-8"
              style={{ color: '#030455' }}
            >
              Unifying Disaster Response Through 
              <span className="block mt-4 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Intelligent Connectivity
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={isMissionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xl sm:text-2xl leading-relaxed mb-16" 
               style={{ color: '#030455', opacity: 0.8 }}
            >
              ResQLink transforms disaster response by unifying citizens, volunteers, and authorities on one intelligent platform. 
              We eliminate coordination gaps, accelerate aid delivery, and save lives through real-time connectivity and 
              automated resource management.
            </motion.p>

            {/* Stats Row */}
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              animate={isMissionInView ? "visible" : ""}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto"
            >
              <motion.div variants={fadeIn} className="text-center p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow" style={{ backgroundColor: '#f8f9ff' }}>
                <div className="text-4xl font-bold mb-2" style={{ color: '#030455' }}>500+</div>
                <div className="text-sm uppercase tracking-wider opacity-60" style={{ color: '#030455' }}>Lives Impacted</div>
              </motion.div>
              <motion.div variants={fadeIn} className="text-center p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow" style={{ backgroundColor: '#f8f9ff' }}>
                <div className="text-4xl font-bold mb-2" style={{ color: '#030455' }}>100+</div>
                <div className="text-sm uppercase tracking-wider opacity-60" style={{ color: '#030455' }}>Cities Connected</div>
              </motion.div>
              <motion.div variants={fadeIn} className="text-center p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow" style={{ backgroundColor: '#f8f9ff' }}>
                <div className="text-4xl font-bold mb-2" style={{ color: '#030455' }}>24/7</div>
                <div className="text-sm uppercase tracking-wider opacity-60" style={{ color: '#030455' }}>Real-time Monitoring</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 lg:py-14 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isHowItWorksInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
            ref={howItWorksRef}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: '#030455' }}>
              How Our Solution Works
            </h2>
            <p className="text-lg opacity-70 max-w-2xl mx-auto" style={{ color: '#030455' }}>
              A comprehensive 3-step process that ensures rapid response and efficient resource allocation during disasters
            </p>
          </motion.div>

          {/* 3-Step Process */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate={isHowItWorksInView ? "visible" : ""}
            className="grid md:grid-cols-3 gap-8 relative"
          >
            {/* Connection Lines for Desktop */}
            <div className="hidden md:block absolute top-24 left-1/4 right-1/4 h-0.5" 
                 style={{ backgroundColor: '#030455', opacity: 0.2 }}></div>

            {/* Step 1 */}
            <motion.div variants={fadeIn} className="relative group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-100 h-full flex flex-col">
                {/* Step Number */}
                <div className="absolute -top-4 left-8 px-4 py-1 rounded-full text-sm font-bold shadow-md"
                     style={{ backgroundColor: '#030455', color: '#fefefe' }}>
                  STEP 01
                </div>

                {/* Icon Container */}
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                     style={{ backgroundColor: '#e3f2fd' }}>
                  <FaSearch className="text-2xl" style={{ color: '#030455' }} />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#030455' }}>
                  PREDICT & ALERT
                </h3>
                
                <p className="leading-relaxed mb-6 flex-grow" style={{ color: '#030455', opacity: 0.8 }}>
                  Real-time monitoring of weather, seismic, and flood data from IMD, NOAA, USGS APIs with 
                  automated risk assessment and instant mass notifications.
                </p>

                {/* Features List */}
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0 rounded-full flex items-center justify-center" style={{ backgroundColor: '#030455' }}>
                      <FaBell className="text-xs text-white" />
                    </div>
                    <span className="text-sm" style={{ color: '#030455', opacity: 0.7 }}>24/7 Monitoring & Alerts</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0 rounded-full flex items-center justify-center" style={{ backgroundColor: '#030455' }}>
                      <FaLightbulb className="text-xs text-white" />
                    </div>
                    <span className="text-sm" style={{ color: '#030455', opacity: 0.7 }}>AI Risk Assessment</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0 rounded-full flex items-center justify-center" style={{ backgroundColor: '#030455' }}>
                      <FaGlobe className="text-xs text-white" />
                    </div>
                    <span className="text-sm" style={{ color: '#030455', opacity: 0.7 }}>Multi-channel Notification System</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div variants={fadeIn} className="relative group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-100 h-full flex flex-col">
                {/* Step Number */}
                <div className="absolute -top-4 left-8 px-4 py-1 rounded-full text-sm font-bold shadow-md"
                     style={{ backgroundColor: '#030455', color: '#fefefe' }}>
                  STEP 02
                </div>

                {/* Icon Container */}
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                     style={{ backgroundColor: '#fff3e0' }}>
                  <FaHandsHelping className="text-2xl" style={{ color: '#030455' }} />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#030455' }}>
                  CONNECT & COORDINATE
                </h3>
                
                <p className="leading-relaxed mb-6 flex-grow" style={{ color: '#030455', opacity: 0.8 }}>
                  Citizens request help, volunteers get matched by location/skills, departments receive 
                  auto-routed tasks - all with live tracking and updates.
                </p>

                {/* Features List */}
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0 rounded-full flex items-center justify-center" style={{ backgroundColor: '#030455' }}>
                      <FaUsers className="text-xs text-white" />
                    </div>
                    <span className="text-sm" style={{ color: '#030455', opacity: 0.7 }}>Smart Volunteer Matching</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0 rounded-full flex items-center justify-center" style={{ backgroundColor: '#030455' }}>
                      <FaMapMarkerAlt className="text-xs text-white" />
                    </div>
                    <span className="text-sm" style={{ color: '#030455', opacity: 0.7 }}>Real-time GPS Tracking</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0 rounded-full flex items-center justify-center" style={{ backgroundColor: '#030455' }}>
                      <FaSync className="text-xs text-white" />
                    </div>
                    <span className="text-sm" style={{ color: '#030455', opacity: 0.7 }}>Automated Task Routing</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div variants={fadeIn} className="relative group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-100 h-full flex flex-col">
                {/* Step Number */}
                <div className="absolute -top-4 left-8 px-4 py-1 rounded-full text-sm font-bold shadow-md"
                     style={{ backgroundColor: '#030455', color: '#fefefe' }}>
                  STEP 03
                </div>

                {/* Icon Container */}
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                     style={{ backgroundColor: '#f3e5f5' }}>
                  <FaChartLine className="text-2xl" style={{ color: '#030455' }} />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#030455' }}>
                  MONITOR & OPTIMIZE
                </h3>
                
                <p className="leading-relaxed mb-6 flex-grow" style={{ color: '#030455', opacity: 0.8 }}>
                  Centralized dashboards provide complete visibility, SLA tracking, and performance 
                  analytics for faster, more efficient response.
                </p>

                {/* Features List */}
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0 rounded-full flex items-center justify-center" style={{ backgroundColor: '#030455' }}>
                      <FaRocket className="text-xs text-white" />
                    </div>
                    <span className="text-sm" style={{ color: '#030455', opacity: 0.7 }}>Live Analytics Dashboard</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0 rounded-full flex items-center justify-center" style={{ backgroundColor: '#030455' }}>
                      <FaShieldAlt className="text-xs text-white" />
                    </div>
                    <span className="text-sm" style={{ color: '#030455', opacity: 0.7 }}>Performance Metrics</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0 rounded-full flex items-center justify-center" style={{ backgroundColor: '#030455' }}>
                      <FaHeart className="text-xs text-white" />
                    </div>
                    <span className="text-sm" style={{ color: '#030455', opacity: 0.7 }}>Resource Optimization</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section - User Roles */}
      <section className="py-20 lg:py-14 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
            ref={featuresRef}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full border-2 mb-6 shadow-sm" 
                 style={{ borderColor: '#030455', backgroundColor: '#fefefe' }}>
              <div className="w-2 h-2 rounded-full mr-2 animate-pulse" 
                   style={{ backgroundColor: '#030455' }}></div>
              <span className="text-sm font-semibold tracking-wider uppercase" 
                    style={{ color: '#030455' }}>Built for Everyone</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: '#030455' }}>
              One Platform, Multiple Perspectives
            </h2>
            <p className="text-lg opacity-70 max-w-3xl mx-auto" style={{ color: '#030455' }}>
              ResQLink empowers every stakeholder in the disaster response ecosystem with tailored tools and real-time capabilities
            </p>
          </motion.div>

          {/* User Role Cards Grid */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate={isFeaturesInView ? "visible" : ""}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {/* Citizens Card */}
            <motion.div variants={fadeIn} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-gray-100 group-hover:border-blue-200 flex flex-col">
                {/* Icon */}
                <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                     style={{ backgroundColor: '#e3f2fd' }}>
                  <FaMobileAlt className="text-3xl" style={{ color: '#030455' }} />
                </div>
                
                {/* User Type Badge */}
                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold mb-4"
                     style={{ backgroundColor: '#e3f2fd', color: '#1565c0' }}>
                  FOR CITIZENS
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3" style={{ color: '#030455' }}>
                  Request & Track Help
                </h3>
                
                <p className="leading-relaxed mb-6 flex-grow" style={{ color: '#030455', opacity: 0.7 }}>
                  Submit disaster requests, report civic issues, receive real-time alerts, and track 
                  resolution progress - all in one app.
                </p>

                {/* Key Features */}
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <div className="w-1.5 h-1.5 rounded-full mr-2" style={{ backgroundColor: '#030455' }}></div>
                    <span style={{ color: '#030455', opacity: 0.6 }}>Emergency SOS Button</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="w-1.5 h-1.5 rounded-full mr-2" style={{ backgroundColor: '#030455' }}></div>
                    <span style={{ color: '#030455', opacity: 0.6 }}>Live Status Updates</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="w-1.5 h-1.5 rounded-full mr-2" style={{ backgroundColor: '#030455' }}></div>
                    <span style={{ color: '#030455', opacity: 0.6 }}>Location-based Alerts</span>
                  </li>
                </ul>

                {/* Hover Action */}
                <div className="mt-auto pt-6 border-t border-gray-100">
                  <a href="#" className="inline-flex items-center text-sm font-semibold group-hover:underline"
                     style={{ color: '#030455' }}>
                    Learn More
                    <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Volunteers Card */}
            <motion.div variants={fadeIn} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-gray-100 group-hover:border-green-200 flex flex-col">
                {/* Icon */}
                <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                     style={{ backgroundColor: '#e8f5e9' }}>
                  <FaHandsHelping className="text-3xl" style={{ color: '#030455' }} />
                </div>
                
                {/* User Type Badge */}
                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold mb-4"
                     style={{ backgroundColor: '#e8f5e9', color: '#2e7d32' }}>
                  FOR VOLUNTEERS
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3" style={{ color: '#030455' }}>
                  Accept & Complete Tasks
                </h3>
                
                <p className="leading-relaxed mb-6 flex-grow" style={{ color: '#030455', opacity: 0.7 }}>
                  Get location-based assignments, update task progress, coordinate with teams, and make 
                  real impact in your community.
                </p>

                {/* Key Features */}
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <div className="w-1.5 h-1.5 rounded-full mr-2" style={{ backgroundColor: '#030455' }}></div>
                    <span style={{ color: '#030455', opacity: 0.6 }}>Smart Task Matching</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="w-1.5 h-1.5 rounded-full mr-2" style={{ backgroundColor: '#030455' }}></div>
                    <span style={{ color: '#030455', opacity: 0.6 }}>Team Collaboration</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="w-1.5 h-1.5 rounded-full mr-2" style={{ backgroundColor: '#030455' }}></div>
                    <span style={{ color: '#030455', opacity: 0.6 }}>Impact Dashboard</span>
                  </li>
                </ul>

                {/* Hover Action */}
                <div className="mt-auto pt-6 border-t border-gray-100">
                  <a href="#" className="inline-flex items-center text-sm font-semibold group-hover:underline"
                     style={{ color: '#030455' }}>
                    Learn More
                    <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Departments Card */}
            <motion.div variants={fadeIn} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-gray-100 group-hover:border-orange-200 flex flex-col">
                {/* Icon */}
                <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                     style={{ backgroundColor: '#fff3e0' }}>
                  <FaCogs className="text-3xl" style={{ color: '#030455' }} />
                </div>
                
                {/* User Type Badge */}
                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold mb-4"
                     style={{ backgroundColor: '#fff3e0', color: '#e65100' }}>
                  FOR DEPARTMENTS
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3" style={{ color: '#030455' }}>
                  Manage & Resolve Issues
                </h3>
                
                <p className="leading-relaxed mb-6 flex-grow" style={{ color: '#030455', opacity: 0.7 }}>
                  Auto-receive relevant tickets, update status, track SLAs, and collaborate seamlessly 
                  across departments.
                </p>

                {/* Key Features */}
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <div className="w-1.5 h-1.5 rounded-full mr-2" style={{ backgroundColor: '#030455' }}></div>
                    <span style={{ color: '#030455', opacity: 0.6 }}>Auto Ticket Assignment</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="w-1.5 h-1.5 rounded-full mr-2" style={{ backgroundColor: '#030455' }}></div>
                    <span style={{ color: '#030455', opacity: 0.6 }}>SLA Monitoring</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="w-1.5 h-1.5 rounded-full mr-2" style={{ backgroundColor: '#030455' }}></div>
                    <span style={{ color: '#030455', opacity: 0.6 }}>Cross-dept Workflow</span>
                  </li>
                </ul>

                {/* Hover Action */}
                <div className="mt-auto pt-6 border-t border-gray-100">
                  <a href="#" className="inline-flex items-center text-sm font-semibold group-hover:underline"
                     style={{ color: '#030455' }}>
                    Learn More
                    <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Authorities Card */}
            <motion.div variants={fadeIn} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-gray-100 group-hover:border-purple-200 flex flex-col">
                {/* Icon */}
                <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                     style={{ backgroundColor: '#f3e5f5' }}>
                  <FaUserTie className="text-3xl" style={{ color: '#030455' }} />
                </div>
                
                {/* User Type Badge */}
                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold mb-4"
                     style={{ backgroundColor: '#f3e5f5', color: '#6a1b9a' }}>
                  FOR AUTHORITIES
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3" style={{ color: '#030455' }}>
                  Monitor & Escalate
                </h3>
                
                <p className="leading-relaxed mb-6 flex-grow" style={{ color: '#030455', opacity: 0.7 }}>
                  Approve alerts, oversee all operations, analyze performance metrics, and ensure rapid 
                  response coordination.
                </p>

                {/* Key Features */}
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <div className="w-1.5 h-1.5 rounded-full mr-2" style={{ backgroundColor: '#030455' }}></div>
                    <span style={{ color: '#030455', opacity: 0.6 }}>Command Center View</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="w-1.5 h-1.5 rounded-full mr-2" style={{ backgroundColor: '#030455' }}></div>
                    <span style={{ color: '#030455', opacity: 0.6 }}>Alert Authorization</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="w-1.5 h-1.5 rounded-full mr-2" style={{ backgroundColor: '#030455' }}></div>
                    <span style={{ color: '#030455', opacity: 0.6 }}>Analytics & Reports</span>
                  </li>
                </ul>

                {/* Hover Action */}
                <div className="mt-auto pt-6 border-t border-gray-100">
                  <a href="#" className="inline-flex items-center text-sm font-semibold group-hover:underline"
                     style={{ color: '#030455' }}>
                    Learn More
                    <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;