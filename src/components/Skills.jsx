import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "TypeScript", "Microservices", "REST APIs", "Socket.io"],
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "group-hover:border-blue-500/50"
  },
  {
    title: "Databases",
    skills: ["MongoDB", "MySQL", "PostgreSQL", "MSSQL", "Redis", "Elasticsearch"],
    color: "from-green-500/20 to-emerald-500/20",
    borderColor: "group-hover:border-green-500/50"
  },
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "Tailwind CSS", "Redux", "HTML5/CSS3", "JavaScript (ES6+)"],
    color: "from-purple-500/20 to-pink-500/20",
    borderColor: "group-hover:border-purple-500/50"
  },
  {
    title: "DevOps & Tools",
    skills: ["Azure DevOps", "Docker", "Kubernetes", "CI/CD Pipelines", "Git/GitHub", "Postman"],
    color: "from-orange-500/20 to-red-500/20",
    borderColor: "group-hover:border-orange-500/50"
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-4">Technical <span className="text-primary">Arsenal</span></h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            A comprehensive set of tools and technologies I use to build robust enterprise-grade applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`glass-card p-8 group relative overflow-hidden transition-all duration-500 ${category.borderColor}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-6 font-outfit text-white group-hover:text-primary transition-colors">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/70 hover:text-white hover:border-white/30 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
