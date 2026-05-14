import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "AI Certifications", href: "#certifications" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 ${
        scrolled ? "bg-background/80 backdrop-blur-lg border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="text-2xl font-bold font-outfit tracking-tighter text-white group">
          <span className="text-gradient">MyPortfolio</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </a>
          ))}
          <div className="flex items-center gap-4 ml-4 border-l border-white/10 pl-8">
            <a href="https://linkedin.com/in/hitesh-hariyar-393b3a217" target="_blank" rel="noreferrer" className="text-white/70 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:Hitesh.yar00@gmail.com" className="text-white/70 hover:text-white transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "100vh" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden fixed inset-0 top-[72px] bg-background/95 backdrop-blur-xl border-t border-white/10 overflow-hidden z-40"
        >
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            className="flex flex-col gap-6 px-8 py-12 h-full"
          >
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 }
                }}
                onClick={() => setMobileMenuOpen(false)}
                className="text-3xl font-bold text-white/70 hover:text-white hover:pl-4 transition-all duration-300 border-b border-white/5 pb-4"
              >
                {link.name}
              </motion.a>
            ))}
            
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="mt-auto flex items-center gap-6 pb-20"
            >
              <a href="https://linkedin.com/in/hitesh-hariyar-393b3a217" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-white/70 hover:text-white hover:scale-110 transition-all">
                <Linkedin size={24} />
              </a>
              <a href="mailto:Hitesh.yar00@gmail.com" className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-white/70 hover:text-white hover:scale-110 transition-all">
                <Mail size={24} />
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </motion.nav>
  );
}
