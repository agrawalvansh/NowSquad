import React from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiUser, FiBriefcase } from 'react-icons/fi';

const TeamCard = ({ contact }) => {
  return (
    <motion.div
      className="h-full w-full min-w-0"
      whileHover={{
        scale: 1.05,
        boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.15)",
        transition: { duration: 0.3, ease: "easeOut" }
      }}
    >
      <div className="bg-[#030455] rounded-xl overflow-hidden shadow-md h-full cursor-pointer flex flex-col">
        <div className="relative overflow-hidden">
          <div className="aspect-square bg-[#030455]">
            <img
              src={contact.image || "/imgs/placeholder.svg"}
              alt={contact.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <div className="p-2 sm:p-3 md:p-4 flex-grow">
          <div className="flex items-start gap-1 sm:gap-2 mb-1">
            <FiUser className="text-[#fefefe] w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0 mt-1" />
            <h3 className="text-[#fefefe] font-semibold text-xs sm:text-sm md:text-base break-words">{contact.name}</h3>
          </div>
          <div className="flex items-start gap-1 sm:gap-2">
            <FiBriefcase className="text-[#fefefe] w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0 mt-1" />
            <p className="text-[#fefefe] text-xs sm:text-sm break-words">{contact.position}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const SectionHeading = ({ title }) => (
  <div className="w-full flex items-center justify-center my-4 sm:my-6 md:my-8">
    <div className="relative flex items-center w-full max-w-5xl px-4">
      <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent to-[#030455]"></div>
      <h2 className="mx-3 sm:mx-4 md:mx-6 text-lg sm:text-xl md:text-3xl font-bold text-[#030455]">
        {title}
      </h2>
      <div className="flex-grow h-[1px] bg-gradient-to-r from-[#030455] to-transparent"></div>
    </div>
  </div>
);

const TeamSection = ({ title, contacts, cardsPerRow, noHeading }) => {
  return (
    <motion.div
      className="w-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.05,
            delayChildren: 0.1
          }
        }
      }}
    >
      {!noHeading && <SectionHeading title={title} />}
      <div 
        className="grid gap-3 mx-auto" 
        style={{ 
          gridTemplateColumns: `repeat(${cardsPerRow}, minmax(0, 1fr))`,
          maxWidth: `calc(${cardsPerRow} * 240px)`
        }}
      >
        {contacts.map((contact, index) => (
          <motion.div
            key={index}
            className="min-w-0"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.5 }
              }
            }}
          >
            <TeamCard contact={contact} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const OurTeam = () => {
  const team = [
    {
      image: "/teamImgs/1.jpg",
      name: "Vansh Agrawal",
      position: "Team Lead"
    },
    {
      image: "/teamImgs/2.jpg",
      name: "Bandi Gayathri",
      position: "ServiceNow Developer"
    },
    {
      image: "/teamImgs/3.jpg",
      name: "Munagapati Bhavana",
      position: "ServiceNow Developer"
    },
    {
      image: "/teamImgs/4.jpg",
      name: "Kaditham Gowtham",
      position: "UI/UX Designer"
    },
    {
      image: "/teamImgs/5.jpg",
      name: "Rudraksha Ravinder",
      position: "Documentation"
    },
    {
      image: "/teamImgs/6.jpg",
      name: "Vivek Kumar Pradhan",
      position: "Tester"
    }
  ];
  
  
  return (
    <motion.section 
      className="py-8 sm:py-12 md:py-10 relative overflow-hidden bg-[#fefefe]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
          }
        }
      }}
    >
      <div className="container mx-auto px-2 space-y-8 sm:space-y-12 md:space-y-16">
        <TeamSection title="TEAM" contacts={team} cardsPerRow={3} />
      </div>
    </motion.section>
  );
};

export default OurTeam;