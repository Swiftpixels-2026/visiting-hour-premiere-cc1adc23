import { motion } from "framer-motion";

const SectionDivider = () => (
  <div className="relative py-16 bg-background flex flex-col items-center justify-center gap-2">
    <div className="flex items-center justify-center w-full max-w-3xl px-4">
      {/* Left decorative dots */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="w-1.5 h-1.5 rounded-full bg-primary/40 mr-2"
      />

      {/* Left line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-primary/60 to-primary origin-right"
      />

      {/* Left small diamond */}
      <motion.div
        initial={{ scale: 0, rotate: 0 }}
        whileInView={{ scale: 1, rotate: 45 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="mx-2 w-2 h-2 border border-primary/50 bg-transparent"
      />

      {/* Center diamond */}
      <motion.div
        initial={{ scale: 0, rotate: 0 }}
        whileInView={{ scale: 1, rotate: 45 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        className="mx-1 w-4 h-4 border-2 border-primary bg-primary/20 shadow-[0_0_20px_hsl(40_80%_50%/0.4)]"
      />

      {/* Right small diamond */}
      <motion.div
        initial={{ scale: 0, rotate: 0 }}
        whileInView={{ scale: 1, rotate: 45 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="mx-2 w-2 h-2 border border-primary/50 bg-transparent"
      />

      {/* Right line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-primary/60 to-primary origin-left"
      />

      {/* Right decorative dot */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="w-1.5 h-1.5 rounded-full bg-primary/40 ml-2"
      />
    </div>
  </div>
);

export default SectionDivider;
