import { motion } from "framer-motion";

export default function AgentCard({ title, subtitle, comingSoon = false }) {
  return (
    <motion.div
      className={`glow-border p-6 rounded-2xl ${comingSoon ? "opacity-80" : ""}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      <h3 className="text-xl font-semibold text-white">{title}</h3>

      {subtitle ? (
        <p className="text-white/70 mt-2 min-h-[56px]">{subtitle}</p>
      ) : null}

      {comingSoon ? (
        <div className="mt-4">
          <span className="inline-flex items-center rounded-md bg-white/10 text-white px-3 py-1 text-xs">
            Coming soon
          </span>
        </div>
      ) : null}
    </motion.div>
  );
}
