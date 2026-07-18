import { FaGithub, FaLinkedin, FaTwitter, FaYoutube, FaFileDownload, FaInstagram } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks, SiCodechef } from "react-icons/si";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

const ContactMe = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, 
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
        form.current, {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      })
      .then(
        () => {
          setStatus("success");
          form.current.reset();
          setTimeout(() => setStatus(""), 5000);
        },
        (error) => {
          setStatus("error");
          console.log('FAILED...', error.text);
          setTimeout(() => setStatus(""), 5000);
        }
      );
  };
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center overflow-hidden relative"
      style={{
        background: "radial-gradient(circle at center, #0f1523 0%, #000000 100%)",
        position: "relative",
      }}
    >
      {/* Grid background - matched from Home.jsx */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Horizontal lines */}
        {[...Array(20)].map((_, i) => (
          <div 
            key={`h-${i}`}
            className="absolute w-full h-px" 
            style={{
              top: `${i * 5}%`,
              background: 'linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.2), transparent)',
              opacity: '0.3'
            }}
          />
        ))}
        
        {/* Vertical lines */}
        {[...Array(20)].map((_, i) => (
          <div 
            key={`v-${i}`}
            className="absolute h-full w-px" 
            style={{
              left: `${i * 5}%`,
              background: 'linear-gradient(0deg, transparent, rgba(0, 255, 255, 0.2), transparent)',
              opacity: '0.3'
            }}
          />
        ))}
      </div>
      
      {/* Ambient glow effects - matches Home.jsx */}
      <div className="fixed top-1/3 left-1/4 w-64 h-64 rounded-full bg-purple-500 opacity-10 blur-3xl"></div>
      <div className="fixed bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-orange-500 opacity-10 blur-3xl"></div>
      
      {/* Scanline effect - matches Home.jsx */}
      <motion.div 
        className="fixed inset-0 pointer-events-none z-50 opacity-10"
        style={{
          background: "linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.5) 50%)",
          backgroundSize: "100% 4px"
        }}
        animate={{
          backgroundPosition: ["0px 0px", "0px 100px"]
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "linear"
        }}
      />
      
      {/* Main content container */}
      <div className="relative z-10 w-full max-w-4xl mx-auto bg-black/60 backdrop-blur-md rounded-lg p-8 border border-amber-900/50">
        {/* Title with animated glow - matches Home.jsx and About.jsx */}
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 mb-6 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            textShadow: "0 0 15px rgba(255, 153, 102, 0.7), 0 0 30px rgba(255, 153, 102, 0.5)"
          }}
        >
          Contact Me
        </motion.h1>
        
        {/* Email with animation */}
        <motion.p
          className="text-xl text-gray-300 mb-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Email: <span className="text-amber-400">jatinbhosale428@gmail.com</span>
        </motion.p>
        
        {/* Animated border corners */}
        <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-amber-400"></div>
        <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-amber-400"></div>
        <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-amber-400"></div>
        <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-amber-400"></div>
        
        {/* Social links with enhanced animations */}
        <motion.div 
          className="flex flex-wrap justify-center gap-6 md:gap-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <SocialLink href="https://github.com/JatinBhoslae" aria-label="GitHub">
            <FaGithub className="text-3xl md:text-4xl" />
          </SocialLink>
          
          <SocialLink href="https://www.linkedin.com/in/jatin-bhosale-846397301/" aria-label="LinkedIn">
            <FaLinkedin className="text-3xl md:text-4xl" />
          </SocialLink>
          
          <SocialLink href="https://x.com/jatinbhosale007?t=QX-ZIBtPqheFDfg5yJqhBg&s=09" aria-label="Twitter">
            <FaTwitter className="text-3xl md:text-4xl" />
          </SocialLink>
          
          <SocialLink href="https://youtube.com/@jatinbhosale181?si=21kv6JsyH2A1kmQz" aria-label="YouTube">
            <FaYoutube className="text-3xl md:text-4xl" />
          </SocialLink>
          
          <SocialLink href="https://www.instagram.com/jatin_bhosale_96k?igsh=MWJjM25weDN5OHhkaA==" aria-label="Instagram">
            <FaInstagram className="text-3xl md:text-4xl" />
          </SocialLink>
        </motion.div>
        
        {/* Contact form */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <p className="text-gray-300 mb-6 text-center">
            Feel free to reach out for collaborations, opportunities, or just to say hello!
          </p>
          
          <form 
            ref={form}
            onSubmit={sendEmail} 
            className="flex flex-col gap-4 max-w-lg mx-auto"
          >
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="text-gray-400 text-sm">Your Name</label>
              <input 
                type="text" 
                id="name" 
                name="user_name" 
                required 
                className="bg-black/50 border border-amber-900/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                placeholder="John Doe"
              />
            </div>
            
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-gray-400 text-sm">Your Email</label>
              <input 
                type="email" 
                id="email" 
                name="user_email" 
                required 
                className="bg-black/50 border border-amber-900/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                placeholder="john@example.com"
              />
            </div>
            
            <div className="flex flex-col gap-1">
              <label htmlFor="message" className="text-gray-400 text-sm">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="4" 
                required 
                className="bg-black/50 border border-amber-900/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors resize-none"
                placeholder="Hello, I'd like to work with you on..."
              ></textarea>
            </div>
            
            <div className="flex justify-center mt-4 flex-col items-center gap-3">
              <motion.button
                type="submit"
                disabled={status === "sending"}
                className={`bg-transparent text-amber-400 px-8 py-3 rounded-lg font-bold shadow-lg border border-amber-400 transition-all duration-300 w-full sm:w-auto ${status === 'sending' ? 'opacity-50 cursor-not-allowed' : ''}`}
                whileHover={status !== 'sending' ? { 
                  scale: 1.05, 
                  boxShadow: "0 0 15px rgba(255, 153, 102, 0.5)",
                  backgroundColor: "rgba(255, 153, 102, 0.1)"
                } : {}}
                style={{
                  textShadow: "0 0 5px rgba(255, 153, 102, 0.7)"
                }}
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </motion.button>
              
              {status === "success" && (
                <p className="text-green-400 text-sm">Message sent successfully!</p>
              )}
              {status === "error" && (
                <p className="text-red-400 text-sm">Failed to send message. Please try again.</p>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

const SocialLink = ({ href, children, ariaLabel }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="text-gray-300 hover:text-amber-400 transition-colors duration-300 relative group"
      whileHover={{ scale: 1.2 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {children}
      <motion.div
        className="absolute -inset-2 bg-amber-500/20 rounded-full -z-10 opacity-0 group-hover:opacity-100"
        initial={{ scale: 0.6 }}
        whileHover={{ 
          scale: 1, 
          boxShadow: "0 0 15px rgba(255, 153, 102, 0.5)" 
        }}
      />
    </motion.a>
  );
};

export default ContactMe;
