import { motion, AnimatePresence } from "framer-motion";
import { Send, Mail, Linkedin, MapPin, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState("");

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setErrorMessage("Please fill in all fields.");
      setStatus("error");
      return;
    }

    if (!validateEmail(formData.email)) {
      setErrorMessage("Please enter a valid email address.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      console.log("Attempting to send message...", formData);
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log("Response status:", response.status);
      
      // Try to parse JSON, fallback to text if it's not JSON
      let result;
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.indexOf("application/json") !== -1) {
        result = await response.json();
      } else {
        result = { error: await response.text() };
      }

      if (response.ok) {
        console.log("Message sent successfully!");
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        console.error("Server error:", result);
        setErrorMessage(result.error || `Error ${response.status}: Something went wrong.`);
        setStatus("error");
      }
    } catch (error) {
      console.error("Network or parsing error:", error);
      setErrorMessage("Failed to connect to the server. Please check your internet or try again later.");
      setStatus("error");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (status === "error") setStatus("idle");
  };

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
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-white/60 font-medium">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    disabled={status === "loading" || status === "success"}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-white/60 font-medium">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    disabled={status === "loading" || status === "success"}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm text-white/60 font-medium">Subject</label>
                <input 
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  disabled={status === "loading" || status === "success"}
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-white/60 font-medium">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell me about your project..." 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                  disabled={status === "loading" || status === "success"}
                  required
                ></textarea>
              </div>

              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-3 text-emerald-400"
                  >
                    <CheckCircle2 size={20} />
                    <p className="text-sm font-medium">Message sent successfully! I'll get back to you soon.</p>
                  </motion.div>
                ) : status === "error" ? (
                  <motion.div
                    key="error"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center gap-3 text-red-400"
                  >
                    <AlertCircle size={20} />
                    <p className="text-sm font-medium">{errorMessage}</p>
                  </motion.div>
                ) : null}
              </AnimatePresence>

              <button 
                type="submit"
                disabled={status === "loading" || status === "success"}
                className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 ${
                  status === "loading" 
                    ? "bg-white/10 text-white/40 cursor-not-allowed" 
                    : status === "success"
                    ? "bg-emerald-500 text-white"
                    : "bg-gradient-to-r from-primary to-accent text-white hover:opacity-90 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                }`}
              >
                {status === "loading" ? (
                  <>Sending... <Loader2 size={18} className="animate-spin" /></>
                ) : status === "success" ? (
                  <>Sent! <CheckCircle2 size={18} /></>
                ) : (
                  <>Send Message <Send size={18} /></>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
