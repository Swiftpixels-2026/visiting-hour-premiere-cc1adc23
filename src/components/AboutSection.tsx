import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.15 },
  }),
};

const AboutSection = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.p
          variants={fadeUp}
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4"
        >
          About the Film
        </motion.p>

        <motion.h2
          variants={fadeUp}
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-display text-5xl md:text-6xl font-light gold-gradient-text mb-6"
        >
          Visiting Hour
        </motion.h2>

        <motion.p
          variants={fadeUp}
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-display text-xl md:text-2xl italic text-cream font-light mb-12"
        >
          What would you give for one last moment with someone you love?
        </motion.p>

        <motion.div
          variants={fadeUp}
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="divider-gold w-24 mx-auto mb-12"
        />

        <motion.div
          variants={fadeUp}
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          <p className="font-body text-sm md:text-base leading-relaxed text-secondary-foreground">
            <span className="text-primary font-medium">Synopsis</span> — Given one hour to reunite
            with his late wife, Novena, in the afterlife — at the cost of one year of his life on
            earth — a grieving man is forced to confront love, memory, and the cruel erosion of time.
          </p>
          <p className="font-body text-sm md:text-base leading-relaxed text-secondary-foreground">
            As their reunion unfolds, an even deeper truth emerges: while he has never let go, she
            discovers that many of those she once cherished have long forgotten her.
          </p>
          <p className="font-display text-lg italic font-semibold text-muted-foreground mt-8">
            Visiting Hour is a deeply emotional exploration of grief, remembrance, and the fragile
            permanence of human connection.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
