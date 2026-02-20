import { motion } from "framer-motion";

export default function Engineering() {
  return (
    <section
      id="engineering"
      className="min-h-screen bg-black px-6 py-32 flex items-center"
    >
      <div className="max-w-6xl mx-auto w-full">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight">
            Engineering Philosophy
          </h2>

          <div className="mt-6 h-[1px] w-28 bg-blue-500" />

          <p className="mt-8 text-gray-400 max-w-2xl leading-relaxed">
            Backend systems should be predictable, scalable, and resilient.
            My engineering decisions prioritize long-term maintainability,
            performance stability, and architectural clarity.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-20">

          {/* LEFT COLUMN */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="space-y-16"
          >
            <div>
              <h3 className="text-white text-xl mb-4">Architecture</h3>
              <p className="text-gray-400 leading-relaxed">
                Designed and maintained microservices architecture handling
                production traffic. Focused on service boundary definition,
                backward compatibility, and fault isolation.
              </p>
            </div>

            <div>
              <h3 className="text-white text-xl mb-4">Performance Engineering</h3>
              <p className="text-gray-400 leading-relaxed">
                Optimized PostgreSQL execution plans, redesigned indexing strategies,
                and reduced query latency in high-load environments.
                Implemented Redis caching layers to minimize database pressure.
              </p>
            </div>
          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-16"
          >
            <div>
              <h3 className="text-white text-xl mb-4">Distributed Systems</h3>
              <p className="text-gray-400 leading-relaxed">
                Built event-driven communication flows using RabbitMQ and Kafka.
                Designed asynchronous pipelines for reliability and scalability.
              </p>
            </div>

            <div>
              <h3 className="text-white text-xl mb-4">Production Ownership</h3>
              <p className="text-gray-400 leading-relaxed">
                Investigated production incidents, performed root-cause analysis,
                and implemented long-term reliability improvements.
                Engineering does not end at deployment.
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}