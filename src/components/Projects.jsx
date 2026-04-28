import { motion } from "framer-motion";
import { ExternalLink, Github, Layers, Code } from "lucide-react";

const projects = [
  {
    title: "SAM’S",
    subtitle: "Seat Allocation System",
    description: "An enterprise-level system designed to manage and optimize office seat allocations in real-time.",
    tech: ["Node.js", "Express", "MSSQL", "React"],
    impact: "Streamlined seat management for 500+ employees, reducing manual overhead by 60%.",
    color: "from-blue-600/20 to-indigo-600/20"
  },
  {
    title: "CRBS",
    subtitle: "Conference Room Booking System",
    description: "A robust booking platform with calendar integration and real-time availability tracking.",
    tech: ["Node.js", "MongoDB", "Socket.io", "React"],
    impact: "Eliminated double-bookings and improved room utilization efficiency by 40%.",
    color: "from-purple-600/20 to-pink-600/20"
  },
  {
    title: "RBAS",
    subtitle: "Role Based Access System",
    description: "A secure authentication and authorization middleware/system for complex permission management.",
    tech: ["TypeScript", "Node.js", "JWT", "Redis"],
    impact: "Enhanced security across 3 enterprise applications with centralized identity management.",
    color: "from-emerald-600/20 to-teal-600/20"
  },
  {
    title: "Rworld",
    subtitle: "Social Media Platform",
    description: "A feature-rich social networking site with real-time chat, post sharing, and user interactions.",
    tech: ["React", "Firebase", "Node.js", "Tailwind"],
    impact: "Supported 1000+ active users with sub-200ms response times for feed updates.",
    color: "from-orange-600/20 to-red-600/20"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-4">Featured <span className="text-primary">Projects</span></h2>
            <p className="text-white/60 max-w-xl">
              A selection of enterprise systems and applications I've architected and developed.
            </p>
          </div>
          <div className="flex gap-4">
             <div className="text-right">
                <span className="block text-2xl font-bold text-white">15+</span>
                <span className="text-xs text-white/40 uppercase tracking-widest">Total Projects</span>
             </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group glass-card overflow-hidden flex flex-col h-full"
            >
              <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden flex items-center justify-center`}>
                 <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
                 <h3 className="text-4xl md:text-6xl font-black text-white/10 select-none group-hover:scale-110 transition-transform duration-700">{project.title}</h3>
                 <motion.div 
                   className="absolute bottom-4 left-6 right-6 flex flex-wrap gap-2"
                   initial="hidden"
                   whileInView="visible"
                   viewport={{ once: true }}
                   variants={{
                     visible: { transition: { staggerChildren: 0.1 } }
                   }}
                 >
                    {project.tech.map((t, i) => (
                       <motion.span 
                         key={i} 
                         variants={{
                           hidden: { opacity: 0, y: 10 },
                           visible: { opacity: 1, y: 0 }
                         }}
                         className="px-2 py-1 bg-black/30 backdrop-blur-md rounded text-[10px] text-white/80 border border-white/5"
                       >
                         {t}
                       </motion.span>
                    ))}
                 </motion.div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="mb-6">
                  <h4 className="text-2xl font-bold text-white mb-1 group-hover:text-primary transition-colors">{project.title}</h4>
                  <p className="text-primary/80 text-sm font-medium mb-4">{project.subtitle}</p>
                  <p className="text-white/60 text-sm leading-relaxed mb-4">{project.description}</p>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 border-l-primary border-l-4">
                     <p className="text-xs italic text-white/80">"{project.impact}"</p>
                  </div>
                </div>
                
                <div className="mt-auto pt-6 flex items-center justify-between border-t border-white/5">
                   <div className="flex gap-4">
                      <button className="text-white/40 hover:text-white transition-colors"><Github size={18} /></button>
                      <button className="text-white/40 hover:text-white transition-colors"><ExternalLink size={18} /></button>
                   </div>
                   <button className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-2 group/btn">
                      Case Study <ArrowIcon />
                   </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover/btn:translate-x-1 transition-transform">
      <path d="M1 6H11M11 6L6 1M11 6L6 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
