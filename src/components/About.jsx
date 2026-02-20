import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="bg-black text-white px-6 py-40 relative"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-24">

        {/* LEFT — PROFILE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-light tracking-tight mb-10">
            About
          </h2>

          <p className="text-gray-300 leading-relaxed">
            Senior Backend Engineer with 5 years of commercial experience
            in production-grade distributed systems. 
            Strong focus on Python (FastAPI, asynchronous programming),
            microservices architecture, and PostgreSQL performance optimization.
          </p>

          <p className="mt-6 text-gray-400 leading-relaxed">
            Worked in Shanghai from 2021 to January 2026 in high-load
            backend environments. Involved in service decomposition,
            event-driven systems using RabbitMQ and Kafka,
            and database performance engineering.
          </p>

          <p className="mt-6 text-gray-500 leading-relaxed">
            Recently relocated to St. Petersburg and open to remote
            or hybrid backend roles.
          </p>
        </motion.div>

        {/* RIGHT — STRUCTURED EXPERIENCE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="border-l border-gray-800 pl-8">
            <h3 className="text-blue-400 text-sm tracking-widest uppercase mb-3">
              Backend Focus
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              High-load REST API development, asynchronous Python,
              and microservice-based system design.
            </p>
          </div>

          <div className="border-l border-gray-800 pl-8">
            <h3 className="text-blue-400 text-sm tracking-widest uppercase mb-3">
              Data & Performance
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              PostgreSQL execution plan analysis, indexing strategy,
              raw SQL optimization, and Redis caching.
            </p>
          </div>

          <div className="border-l border-gray-800 pl-8">
            <h3 className="text-blue-400 text-sm tracking-widest uppercase mb-3">
              Production Experience
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              CI/CD pipelines, Docker deployments,
              incident investigation, and reliability improvements.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}