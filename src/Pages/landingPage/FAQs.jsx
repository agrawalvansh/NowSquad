import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiSearch, FiInstagram } from 'react-icons/fi';
import { FaTrophy } from 'react-icons/fa';
import { RiTeamFill } from 'react-icons/ri';
import { MdOutlineSchool } from 'react-icons/md';
import { FaRegQuestionCircle, FaRegListAlt } from 'react-icons/fa';

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredFaqs, setFilteredFaqs] = useState([]);

  const faqs = [
    {
    icon: <FaRegQuestionCircle className="text-[#030455] text-xl" />,
    question: "What problem does this disaster management platform solve?",
    answer:
    "Our solution systematically addresses fragmented disaster response and inefficient civic management by providing a unified, automated platform on ServiceNow. It enables real-time information sharing, rapid task assignment, coordinated resource management, and transparent progress tracking."
    },
    {
    icon: <RiTeamFill className="text-[#030455] text-xl" />,
    question: "How does the platform provide early warnings for disasters?",
    answer:
    "The platform continuously ingests real-time weather and seismic data from official APIs like IMD, NOAA, and USGS. It uses NLP/ML engines to predict disaster risks and generates alerts automatically when thresholds are exceeded. These alerts are reviewed and approved by government admins before broadcasting."
    },
    {
    icon: <FaRegListAlt className="text-[#030455] text-xl" />,
    question: "How are alerts communicated to citizens and authorities?",
    answer:
    "Approved alerts trigger automated mass notifications via SMS, email, and Now Mobile push notifications. Real-time alert banners also appear on the Service Portal, tailored by user role such as citizens, volunteers, and government authorities."
    },
    {
    icon: <MdOutlineSchool className="text-[#030455] text-xl" />,
    question: "How does the platform handle citizen requests during disasters?",
    answer:
    "Citizens can submit detailed help requests during active disasters. The platform auto-assigns tickets to volunteers or government teams based on location and expertise, allowing real-time tracking of aid and resource distribution through a centralized system."
    },
    {
    icon: <FiInstagram className="text-[#030455] text-xl" />,
    question: "Can the platform be used for day-to-day civic issues as well?",
    answer:
    "Yes, the platform streamlines everyday civic issues by enabling citizens to report problems like power outages or road repairs. Tickets are automatically routed to responsible departments with SLA tracking and transparent progress monitoring through dashboards."
    },
    {
    icon: <FaTrophy className="text-[#030455] text-xl" />,
    question: "What technologies are used to build this platform?",
    answer:
    "The solution leverages ServiceNow core modules like Service Portal, Flow Designer, and Performance Analytics, integrated with real-time data APIs via ServiceNow IntegrationHub. Automation scripts handle ticket assignment and workflows, while Now Mobile ensures cross-platform offline capabilities."
    },
    {
    icon: <FaRegQuestionCircle className="text-[#030455] text-xl" />,
    question: "How is this platform innovative compared to traditional systems?",
    answer:
    "Unlike traditional manual and fragmented systems, our platform uses end-to-end automation with predictive analytics, role-based response, integrated mobile access, and unified management of disaster and everyday civic tasks—all within one ServiceNow instance."
    },
    {
    icon: <RiTeamFill className="text-[#030455] text-xl" />,
    question: "What user roles does the platform support?",
    answer:
    "The platform supports multiple user roles including citizens, volunteers, government authorities, and administrators. Each role receives tailored notifications, access permissions, and workflow assignments to optimize coordination and transparency."
    },
    {
    icon: <FaRegListAlt className="text-[#030455] text-xl" />,
    question: "How does mobile access enhance the platform?",
    answer:
    "The Now Mobile app allows users and volunteers to interact with the system even offline using store-and-forward functionality, ensuring uninterrupted service and rapid response regardless of network connectivity."
    },
    {
    icon: <MdOutlineSchool className="text-[#030455] text-xl" />,
    question: "How does the platform ensure transparency and accountability?",
    answer:
    "Role-based access controls allow users to see only relevant information, while ServiceNow dashboards provide real-time KPIs, SLA tracking, and heatmaps. Admins can monitor progress and intervene as needed to maintain service efficiency."
    }
    ];
  useEffect(() => {
    const filtered = faqs.filter(faq => 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredFaqs(filtered);
  }, [searchTerm]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 10 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4
      }
    }
  };

  const formatAnswer = (answer) => {
    if (answer.includes('<a href')) {
      return <div dangerouslySetInnerHTML={{ __html: answer }} />;
    }
    
    return answer.split('\n').map((line, i) => (
      <React.Fragment key={i}>
        {line}
        {i < answer.split('\n').length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <motion.section 
      className="bg-[#fefefe] pb-10 px-4 md:px-8 relative overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header with Page Heading */}
        <motion.header 
          className="mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-full flex items-center justify-center my-8 md:my-12">
            <div className="relative flex items-center w-full max-w-4xl px-4">
              {/* Left Line */}
              <div className="flex-grow h-[2px] bg-gradient-to-r from-transparent to-[#030455]"></div>
              {/* Heading Text */}
              <h1 className="mx-8 text-4xl font-bold text-[#030455]">
                FAQs
              </h1>
              {/* Right Line */}
              <div className="flex-grow h-[2px] bg-gradient-to-r from-[#030455] to-transparent"></div>
            </div>
          </div>                   
        </motion.header>

        {/* FAQ Items */}
        <div className="space-y-4">
          {(searchTerm ? filteredFaqs : faqs).length > 0 ? (
            (searchTerm ? filteredFaqs : faqs).map((faq, index) => (
              <motion.div
                key={index}
                className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                variants={itemVariants}
              >
                <motion.button
                  className={`w-full p-6 text-left bg-white bg-opacity-70 backdrop-blur-sm rounded-2xl flex items-center justify-between ${
                    openIndex === index ? 'rounded-b-none border-b border-[#030455] border-opacity-10' : ''
                  }`}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.85)" }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center">
                    <div className="mr-4 bg-[#abc4ff] p-2 rounded-full">
                      {faq.icon}
                    </div>
                    <span className="text-[#030455] font-semibold text-lg">{faq.question}</span>
                  </div>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-[#abc4ff] p-2 rounded-full flex-shrink-0 ml-2"
                  >
                    <FiChevronDown className="text-[#030455] text-lg" />
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="bg-[#030455] overflow-hidden"
                    >
                      <div className="p-6 text-[#fefefe] leading-relaxed">
                        {formatAnswer(faq.answer)}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))
          ) : (
            <motion.div 
              className="text-center py-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-[#030455] text-lg">No FAQs match your search. Try different keywords.</p>
              <button 
                onClick={() => setSearchTerm('')}
                className="mt-4 px-6 py-2 bg-[#030455] text-white rounded-full hover:bg-[#07534c] transition-colors duration-300"
              >
                Show all FAQs
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default FAQs;