import { motion } from "framer-motion";
import { Database, Network, ServerCog, Workflow } from "lucide-react";

const expertise = [
  {
    title: "REST API Design",
    description: "Building robust, scalable, and secure RESTful APIs following industry best practices and standards.",
    icon: <Network className="w-8 h-8" />,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
  },
  {
    title: "Microservices",
    description: "Architecting distributed systems for high availability, fault tolerance, and independent scalability.",
    icon: <ServerCog className="w-8 h-8" />,
    color: "text-purple-400",
    bg: "bg-purple-400/10",
  },
  {
    title: "Database Optimization",
    description: "Designing efficient schemas, indexing strategies, and query optimizations for SQL/NoSQL databases.",
    icon: <Database className="w-8 h-8" />,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
  },
  {
    title: "Backend Automation",
    description: "Developing cron jobs, background workers, and automated pipelines for routine data operations.",
    icon: <Workflow className="w-8 h-8" />,
    color: "text-orange-400",
    bg: "bg-orange-400/10",
  }
];

export default function TechExpertise() {
  return (
    <section className="py-24 bg-black/40 relative">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzNHYtNGgtMnY0aC00djJoNHY0aDJ2LTRoNHYtMmgtNHptMC0zMFYwaC0ydjRoLTR2Mmg0djRoMnYtNGg0VjJoLTR6bS0yMCAwaC00djJoNHY0aDJWMmgtMnYtMnptMjAgMTRoLTR2Mmg0djRoMnYtNGg0di0yaC00em0tMjAgMTRoLTR2Mmg0djRoMnYtNGg0di0yaC00eiIgZmlsbD0iIzlmOWY5ZiIgZmlsbC1vcGFjaXR5PSIwLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-4">Core <span className="text-accent">Expertise</span></h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Deep technical knowledge in building the foundation of modern web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {expertise.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-8 flex items-start gap-6 group hover:bg-white/[0.02] transition-colors"
            >
              <div className={`p-4 rounded-2xl ${item.bg} ${item.color} group-hover:scale-110 transition-transform`}>
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
