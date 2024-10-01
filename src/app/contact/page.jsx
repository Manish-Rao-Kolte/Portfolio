'use client';

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { about } from "@/constants";
import { useState } from "react";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: about.info[1].fieldName,
    description: about.info[1].fieldValue,
  },
  {
    icon: <FaEnvelope />,
    title: about.info[4].fieldName,
    description: about.info[4].fieldValue,
  },
  {
    icon: <FaMapMarkerAlt />,
    title: 'Address',
    description: 'India',
  },
]

const initialState = {
  firstname: '',
  lastname: '',
  email: '',
  phone: '',
  service: '',
  message: '',
}

const ContactPage = () => {
  const [contactForm, setContactForm] = useState(initialState);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted successfully');
    setContactForm(initialState);
  }

  return (
    <motion.section 
    initial={{opacity: 0}}
    animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: 'easeIn'}}}
    className='py-6'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-[30px]'>
          {/* form section */}
          <div className='xl:h-[54%] w-full order-2 xl:order-none'>
            <form action="" className='flex flex-col gap-6 p-10 bg-[#27271c] rounded-xl' onSubmit={handleFormSubmit}>
              <h3 className='text-4xl text-accent'>Let&apos;s work together</h3>
              <p className='text-white/60'>
                I would love to hear from you. Whether you have a question about a project or just want to say hi, feel free to get in touch. For project inquiries, please provide some details about your project, such as scope, budget, and timeline.
              </p>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <Input type='text' placeholder='Firstname' value={contactForm.firstname} onChange={(e) => setContactForm({...contactForm, firstname: e.target.value})}/>
                <Input type='text' placeholder='Lastname' value={contactForm.lastname} onChange={(e) => setContactForm({...contactForm, lastname: e.target.value})}/>
                <Input type='email' placeholder='Email address' value={contactForm.email} onChange={(e) => setContactForm({...contactForm, email: e.target.value})}/>
                <Input type='tel' placeholder='Phone number' value={contactForm.phone} onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}/>
              </div>
              <Select onValueChange={(txt) => setContactForm({...contactForm, service: txt})}>
                <SelectTrigger className='w-full'>
                  <SelectValue placeholder="Select a service"></SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup label='Services'>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="web">Web Development</SelectItem>
                    <SelectItem value="mobile">Mobile Development</SelectItem>
                    <SelectItem value="front">Front-End Development</SelectItem>
                    <SelectItem value="back">Back-End Development</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea placeholder='Type your message here.' className='h-[200px]' value={contactForm.message} onChange={(e) => setContactForm({...contactForm, message: e.target.value})} />
              <Button type="submit" size='md' className ='max-w-40'>Send message</Button>
            </form>
          </div>
          
          {/* personal info */}
          <div className='flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0'>
            <ul className='flex flex-col gap-10'>
              {info.map((item, index) => (
                <li key={index} className='flex gap-6 items-center text-white/60'>
                  <div className='w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center '>
                  <span className='text-accent text-[28px]'>{item.icon}</span>
                  </div>
                  <div className='flex-1'>
                    <p className='text-white/60'>{item.title}</p>
                    <h3 className='text-xl'>{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactPage;
