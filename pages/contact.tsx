import { Button } from '@geist-ui/core';

import { MdOutlineMail } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";

export default function Contact() {
  return (
    <div className="relative top-0 h-screen w-screen">
      <div className='about'>
        <div className="about_container">
          <h1 className='about-top'>Contact Us</h1>
          <div className="contact">
            {/* <div className="absolute h-full inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none" /> */}
            <div className="contact_left">
                <h1>Get in Touch</h1>
                <p>Have questions about the Phantom airdrop? We're here to help. Fill out the form and our team will get back to you as soon as possible.</p>
                <div className="email">
                    <MdOutlineMail className='email_con' />
                    <span>
                        <h2>Email Us</h2>
                        <p>support@phantomairdrop.com</p>
                    </span>
                </div>
                <div className="email">
                    <FiMessageSquare className='email_con' />
                    <span>
                        <h2>Live Chat</h2>
                        <p>Available 24/7 on our website</p>
                    </span>
                </div>
                <div className="email">
                    <FaTelegramPlane className='email_con' />
                    <span>
                        <h2>Telegram Support</h2>
                        <p>+1 (888) JECKS</p>
                    </span>
                </div>
            </div>
            <form action={""} className="contact_right">
                <h1>Send us a message</h1>
                <p>Fill out the form below and we'll get back to you soon.</p>
                <div className="form_content">
                    <label htmlFor="">Name</label>
                    <input type="text" placeholder='Your name' />
                </div>
                <div className="form_content">
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder='Your email address' />
                </div>
                <div className="form_content">
                    <label htmlFor="">Subject</label>
                    <input type="text" placeholder='How can we help you?' />
                </div>
                <div className="form_content">
                    <label htmlFor="">Message</label>
                    <textarea name="" placeholder='Tell us about your issues or question...' id=""></textarea>
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}