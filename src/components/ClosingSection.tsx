import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15 },
  }),
};

const ClosingSection = () => {
  return (
    <section className="py-32 px-6 bg-deep">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          variants={fadeUp}
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="divider-gold w-24 mx-auto mb-12"
        />

        {/* Attendance */}
        <motion.div
          variants={fadeUp}
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="font-display text-2xl text-cream mb-3">Attendance</h3>
          <p className="font-body text-sm text-muted-foreground">
            This is a strictly private and curated VIP event.
            <br />
            Admission is by invitation only.
          </p>
        </motion.div>

        {/* Dress code */}
        <motion.div
          variants={fadeUp}
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="font-display text-2xl text-cream mb-3">Dress Code</h3>
          <p className="font-body text-sm tracking-widest uppercase text-primary">
            Smart / Elegant
          </p>
        </motion.div>

        {/* Closing */}
        <motion.div
          variants={fadeUp}
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="divider-gold w-16 mx-auto mb-10" />
          <p className="font-display text-2xl md:text-3xl font-light text-cream leading-relaxed">
            We look forward to welcoming you to an unforgettable evening of{" "}
            <span className="gold-gradient-text">cinema, conversation, and connection.</span>
          </p>
        </motion.div>

        {/* Footer */}
        <motion.div
          variants={fadeUp}
          custom={4}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20"
        >
          <p className="font-body text-[10px] tracking-[0.5em] uppercase text-muted-foreground">
            Bushlamp Studios
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ClosingSection;
