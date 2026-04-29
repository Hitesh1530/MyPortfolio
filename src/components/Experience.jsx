import { motion } from "framer-motion";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";

const experiences = [
  {
    company: "Quess Corp Pvt Ltd",
    role: "Software Developer",
    period: "Jan 2024 – Present",
    achievements: [
      "Engineered microservices architecture for high-availability systems.",
      "Optimized existing REST APIs, reducing response times by 30%.",
      "Developed automation jobs for data synchronization across enterprise platforms."
    ]
  },
  {
    company: "Rigved Technology Pvt Ltd",
    role: "Backend Developer",
    period: "Jan 2022 – Dec 2023",
    achievements: [
      "Designed and implemented secure database schemas in MySQL/MongoDB.",
      "Integrated third-party payment gateways and services securely.",
      "Contributed to CI/CD pipelines to streamline deployment processes."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-4">Professional <span className="text-primary">Journey</span></h2>
          <p className="text-white/60">A timeline of my career in software development.</p>
        </motion.div>

        <div className="relative md:border-l md:border-white/10 md:ml-0 md:pl-0">
          {/* Mobile-only center line */}
          <div className="absolute left-[23px] top-0 bottom-0 w-px bg-white/10 md:hidden" />

          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="mb-12 relative md:pl-12 pl-14"
            >
              {/* Desktop dot */}
              <div className="hidden md:block absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-8 neon-glow border-2 border-background" />
              {/* Mobile dot */}
              <div className="md:hidden absolute w-4 h-4 bg-primary rounded-full left-[16px] top-8 neon-glow border-2 border-background z-10" />

              <div className="glass-card p-6 md:p-8 group hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-primary transition-colors">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-white/60 mt-2">
                      <Briefcase size={16} className="text-accent" />
                      <span className="font-medium text-sm md:text-base">{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white/5 rounded-full border border-white/10 w-fit">
                    <Calendar size={14} className="text-primary" />
                    <span className="text-[10px] md:text-xs font-bold text-white/80">{exp.period}</span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/70">
                      <ChevronRight size={18} className="text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
