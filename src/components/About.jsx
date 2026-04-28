import { motion } from "framer-motion";
import { Server, Zap, Cpu, Code2 } from "lucide-react";

const stats = [
  { label: "Years Experience", value: "4+", icon: <Zap className="text-yellow-400" /> },
  { label: "Systems Built", value: "10+", icon: <Server className="text-blue-400" /> },
  { label: "API Optimization", value: "40%", icon: <Cpu className="text-purple-400" /> },
  { label: "Code Quality", value: "A+", icon: <Code2 className="text-green-400" /> },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-8">
              Architecting Scalable <span className="text-primary">Backend Solutions</span>
            </h2>
            <p className="text-lg text-white/60 mb-6 leading-relaxed">
              I am a results-driven Software Developer specializing in backend architecture and API design. 
              With over 4 years of experience, I focus on building high-performance, automated systems 
              that solve complex enterprise challenges.
            </p>
            <p className="text-lg text-white/60 mb-10 leading-relaxed">
              My expertise lies in Node.js ecosystems, microservices orchestration, and database optimization. 
              I believe in clean code, robust security, and engineering systems that scale effortlessly.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="glass-card p-6 flex flex-col gap-2">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-2">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-white/40">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square glass-card overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-64 h-64 border-2 border-white/5 rounded-full animate-[spin_10s_linear_infinite]" />
                 <div className="absolute w-48 h-48 border-2 border-primary/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                 <Server size={80} className="text-primary animate-pulse" />
              </div>
              
              {/* Floating tech tags */}
              <div className="absolute top-10 left-10 p-3 glass-card text-xs font-mono text-primary animate-float">GET /api/v1/user</div>
              <div className="absolute bottom-20 right-10 p-3 glass-card text-xs font-mono text-accent animate-float" style={{ animationDelay: '1s' }}>200 OK</div>
              <div className="absolute top-1/2 right-5 p-3 glass-card text-xs font-mono text-green-400 animate-float" style={{ animationDelay: '2s' }}>cluster.fork()</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
