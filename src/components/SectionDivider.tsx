import { motion } from "framer-motion";

const SectionDivider = () => (
  <div className="relative py-10 bg-background flex items-center justify-center">
    {/* Left line */}
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="divider-gold flex-1 max-w-[120px] origin-right"
    />

    {/* Ornamental diamond */}
    <motion.div
      initial={{ scale: 0, rotate: 0 }}
      whileInView={{ scale: 1, rotate: 45 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
      className="mx-4 w-3 h-3 border border-primary/60 bg-primary/20 shadow-[0_0_12px_hsl(40_80%_50%/0.3)]"
    />

    {/* Right line */}
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="divider-gold flex-1 max-w-[120px] origin-left"
    />
  </div>
);

export default SectionDivider;
