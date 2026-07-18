import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TechStackShowcase from "./TechStackDisplay";
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const h3Ref = useRef(null);
  const sectionRef = useRef(null);
  const spiralRef = useRef(null);
  
  // Animation for text elements
  useEffect(() => {
    if (!h3Ref.current) return;
    
    const splitText = new SplitType(h3Ref.current, { types: "words" });
  
    gsap.timeline({
      scrollTrigger: {
        trigger: h3Ref.current,
        start: "top 90%",
        end: "+=100%",
        scrub: 1,
      },
    })
    .fromTo(
      splitText.words,
      { color: "#ffcc66", opacity: 0.1 },
      { color: "#ff9966", opacity: 1, stagger: 0.1, duration: 1 }
    );
    
    // Cleanup
    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);
  
  // Spiral background animation
  useEffect(() => {
    if (!spiralRef.current) return;
    
    gsap.to(spiralRef.current, {
      rotation: 360,
      duration: 60,
      repeat: -1,
      ease: "linear"
    });
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="flex flex-col justify-center items-center text-center bg-black overflow-hidden"
      style={{
        background: "radial-gradient(circle at center, #0f1523 0%, #000000 100%)",
        minHeight: "100vh",
        position: "relative"
      }}
    >
      {/* Grid background */}
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
      
      {/* Ambient glow effects */}
      <div className="fixed top-1/3 left-1/4 w-64 h-64 rounded-full bg-purple-500 opacity-10 blur-3xl"></div>
      <div className="fixed bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-orange-500 opacity-10 blur-3xl"></div>
      
      {/* Spiral effect in background */}
      <div 
        ref={spiralRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 opacity-10 pointer-events-none"
        style={{
          background: `conic-gradient(
            from 0deg,
            rgba(255, 153, 102, 0),
            rgba(255, 153, 102, 0.3),
            rgba(255, 153, 102, 0.5),
            rgba(255, 153, 102, 0.3),
            rgba(255, 153, 102, 0)
          )`,
          borderRadius: '50%',
          filter: 'blur(8px)'
        }}
      ></div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col justify-center items-center w-full"
      >
        {/* Header section */}
        <div 
          className="z-20 w-full flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-4 md:px-8" 
          style={{marginTop: "20vh", marginBottom: "20vh"}}
        >
          <div className="flex-1 text-center md:text-left relative flex flex-col items-center md:items-start">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 pb-4 leading-tight"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                textShadow: "0 0 15px rgba(255, 153, 102, 0.7), 0 0 30px rgba(255, 153, 102, 0.5)"
              }}
            >
              Hey, I&apos;m JATIN! <br /> 
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-3xl md:text-5xl mt-2 block"
              >
                Welcome to my corner <br /> of the internet!
              </motion.span>
            </motion.h1>
            
            {/* Animated glitch line */}
            <motion.div 
              className="h-px bg-amber-400 mt-6"
              animate={{ 
                opacity: [0.3, 0.7, 0.3],
                width: ["40%", "70%", "40%"]
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut"
              }}
            />
          </div>
          
          <motion.div 
            className="flex-1 flex justify-center md:justify-end mt-16 md:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative w-64 h-64 md:w-[350px] md:h-[400px] rounded-2xl overflow-hidden border-2 border-amber-500/50 shadow-[0_0_40px_rgba(255,153,102,0.4)]">
              <img 
                src="/portfolio-app/profile%20pic/photo.jpeg" 
                alt="Jatin Bhosale" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/portfolio-app/VD.png"; // Fallback to an existing image
                }}
              />
              {/* Shine effect over image */}
              <motion.div 
                className="absolute inset-0 z-10 pointer-events-none"
                style={{
                  background: "linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.2) 50%, transparent 60%)",
                }}
                animate={{
                  left: ["-100%", "200%"],
                  top: ["-100%", "200%"]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "easeInOut"
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
          </motion.div>
        </div>
        
        {/* Tech stack section */}
        <div className="relative z-10 w-full flex justify-center h-auto mb-20">
          <TechStackShowcase />
        </div>
        
        {/* About me section */}
        <div className="relative z-10 mt-10text-center min-h-[70vh]">
          <h3 
            ref={h3Ref} 
            className="text-xl mb-20 md:text-2xl font-bold text-white tracking-wide px-4 md:px-0"
            style={{
              textShadow: "0 0 5px rgba(255, 153, 102, 0.3)"
            }}
          >
            I'm Jatin, a tech enthusiast with a strong foundation in AI and web designing. <br />
            I enjoy creating innovative, user-friendly interactive web designing<br />
            I currently specialize in frontend development and have recently started <br /> exploring backend technologies. <br />
          </h3>
          
          {/* CTA button */}
          <motion.div 
            className=" text-center"
            style={{marginTop: "30vh"}}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.h4 
              className="text-amber-400 text-xl mb-4"
              animate={{
                textShadow: [
                  "0 0 5px rgba(255, 153, 102, 0.5)",
                  "0 0 15px rgba(255, 153, 102, 0.8)",
                  "0 0 5px rgba(255, 153, 102, 0.5)"
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              Check out my About section!
            </motion.h4>
            
            <motion.a
              href="#/about/"
              className="inline-block bg-transparent text-amber-400 px-6 py-3 rounded-lg font-bold shadow-lg border border-amber-400 transition-all duration-300"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 0 15px rgba(255, 153, 102, 0.5)",
                backgroundColor: "rgba(255, 153, 102, 0.1)"
              }}
              style={{
                textShadow: "0 0 5px rgba(255, 153, 102, 0.7)"
              }}
            >
              Go to About
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Scanline effect */}
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
    </section>
  );
};

export default Home;