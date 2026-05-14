import { motion } from "framer-motion";
import { FileText, Calendar, ShieldCheck, Sparkles, ExternalLink } from "lucide-react";
import { certifications } from "../data/certifications";

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative bg-background">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4">
            <Sparkles size={14} className="text-primary" />
            <span className="text-[10px] font-bold tracking-[0.2em] text-white/60 uppercase">Professional Credentials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-4">
            AI <span className="text-primary">Certifications</span>
          </h2>
          <p className="text-white/40 max-w-2xl mx-auto text-base">
            Official certifications from Google and Coursera, validating expertise in Artificial Intelligence and Generative AI workflows.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="group h-full"
            >
              <div className="glass-card h-full flex flex-col overflow-hidden border-white/5 hover:border-white/10 transition-all duration-300 bg-white/[0.02] shadow-2xl relative">
                
                {/* Minimal Google Accent Bar */}
                <div className="absolute top-0 left-0 right-0 h-[2px] flex opacity-60 group-hover:opacity-100 transition-opacity">
                  <div className="flex-1 bg-[#4285F4]" />
                  <div className="flex-1 bg-[#EA4335]" />
                  <div className="flex-1 bg-[#FBBC05]" />
                  <div className="flex-1 bg-[#34A853]" />
                </div>

                {/* Card Top Section - Clean & Professional */}
                <div className="pt-10 px-8 pb-6 bg-gradient-to-b from-white/[0.03] to-transparent">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex flex-col">
                       <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.2em] mb-1">Issuer</span>
                       <span className="text-xs font-bold text-white/80">Google | Coursera</span>
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-primary/60 group-hover:text-primary transition-colors">
                       <FileText size={20} />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white leading-tight group-hover:text-primary transition-colors min-h-[3rem]">
                    {cert.title}
                  </h3>
                </div>

                {/* Card Body */}
                <div className="px-8 pb-8 pt-2 flex flex-col flex-grow">
                  {/* Metadata Row */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center gap-1.5 text-white/30 text-[10px] font-bold uppercase tracking-wider">
                      <Calendar size={12} />
                      {cert.date}
                    </div>
                    <div className="h-1 w-1 rounded-full bg-white/10" />
                    <div className="flex items-center gap-1.5 text-white/30 text-[10px] font-bold uppercase tracking-wider">
                      <ShieldCheck size={12} />
                      ID: {cert.credentialId}
                    </div>
                  </div>

                  {/* Skills Section */}
                  <div className="mb-8">
                     <p className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em] mb-3">Key Competencies</p>
                     <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, i) => (
                          <span key={i} className="px-2.5 py-1 bg-white/5 rounded-md text-[10px] font-medium text-white/50 border border-white/5 group-hover:border-primary/20 transition-colors">
                            {skill}
                          </span>
                        ))}
                     </div>
                  </div>

                  {/* Action - View Certificate */}
                  <div className="mt-auto">
                    <a 
                      href={cert.pdf} 
                      target="_blank" 
                      rel="noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-white/5 hover:bg-primary text-white text-xs font-bold transition-all duration-300 border border-white/10 hover:border-primary hover:shadow-[0_10px_20px_-10px_rgba(59,130,246,0.5)] group/btn"
                    >
                      View Certificate
                      <ExternalLink size={14} className="opacity-40 group-hover/btn:opacity-100 group-hover/btn:translate-x-0.5 transition-all" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
