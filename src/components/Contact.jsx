import { motion } from "framer-motion";
import { Send, Mail, Linkedin, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute -bottom-1/2 -right-1/4 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold font-outfit mb-6">Let's build something <span className="text-gradient">amazing</span></h2>
            <p className="text-white/60 text-lg mb-10 max-w-md">
              Whether you have a project in mind, need backend architecture consultation, or just want to say hi, I'm always open to discussing new opportunities.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-white/80">
                <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-primary">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-white/40">Email</p>
                  <a href="mailto:Hitesh.yar00@gmail.com" className="font-medium hover:text-primary transition-colors">Hitesh.yar00@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center gap-4 text-white/80">
                <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-accent">
                  <Linkedin size={20} />
                </div>
                <div>
                  <p className="text-sm text-white/40">LinkedIn</p>
                  <a href="https://www.linkedin.com/in/hitesh-hariyar-393b3a217" target="_blank" rel="noreferrer" className="font-medium hover:text-accent transition-colors">Hitesh Hariyar</a>
                </div>
              </div>
              <div className="flex items-center gap-4 text-white/80">
                <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-emerald-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-white/40">Location</p>
                  <p className="font-medium">Mumbai, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-10"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-white/60 font-medium">Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-white/60 font-medium">Email</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm text-white/60 font-medium">Subject</label>
                <input 
                  type="text" 
                  placeholder="Project Inquiry" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-white/60 font-medium">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell me about your project..." 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                ></textarea>
              </div>
              <button 
                type="button"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
