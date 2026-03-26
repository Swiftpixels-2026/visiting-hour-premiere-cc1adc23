import { motion } from "framer-motion";

const SectionDivider = () => (
  <div className="relative py-6 bg-background">
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="divider-gold w-32 mx-auto"
    />
  </div>
);

export default SectionDivider;
