import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12 },
  }),
};

const panelists = [
  "Mental health professionals",
  "Grief counselors",
  "Religious and spiritual leaders",
  "Creative practitioners",
  "Individuals with lived experiences of profound loss",
];

const topics = [
  "How individuals process grief and loss",
  "The role of memory in sustaining connections with the departed",
  "Why society often avoids conversations about grief",
  "The emotional complexity of \"continuing bonds\" with loved ones",
];

const storytellingPower = [
  "Confronting difficult emotions",
  "Normalizing grief",
  "Creating safe, compassionate spaces for dialogue",
];

const PanelSection = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.p
          variants={fadeUp}
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center font-body text-xs tracking-[0.4em] uppercase text-primary mb-4"
        >
          Panel Discussion
        </motion.p>

        <motion.h2
          variants={fadeUp}
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center font-display text-4xl md:text-5xl font-light text-cream mb-4"
        >
          Beyond the Screen
        </motion.h2>

        <motion.p
          variants={fadeUp}
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center font-display text-xl italic text-muted-foreground mb-12"
        >
          Conversations on Grief, Memory & Healing
        </motion.p>

        <motion.div
          variants={fadeUp}
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="divider-gold w-24 mx-auto mb-12"
        />

        <motion.p
          variants={fadeUp}
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-body text-sm text-secondary-foreground leading-relaxed mb-10"
        >
          Immediately following the private screening, guests will be invited to remain for a
          thoughtful and engaging panel discussion. This session will explore the emotional and
          psychological themes raised in the film, creating a bridge between cinematic storytelling
          and real-life experiences.
        </motion.p>

        {/* Panelists */}
        <motion.div
          variants={fadeUp}
          custom={4}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-10"
        >
          <h3 className="font-display text-2xl text-cream mb-4">Voices at the Table</h3>
          <ul className="space-y-2">
            {panelists.map((p, i) => (
              <li key={i} className="flex items-center gap-3 font-body text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                {p}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Topics */}
        <motion.div
          variants={fadeUp}
          custom={5}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-10"
        >
          <h3 className="font-display text-2xl text-cream mb-4">The Conversation Will Examine</h3>
          <ul className="space-y-2">
            {topics.map((t, i) => (
              <li key={i} className="flex items-center gap-3 font-body text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                {t}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Storytelling power */}
        <motion.div
          variants={fadeUp}
          custom={6}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-10"
        >
          <h3 className="font-display text-2xl text-cream mb-4">
            The Power of Storytelling & Cinema
          </h3>
          <ul className="space-y-2">
            {storytellingPower.map((s, i) => (
              <li key={i} className="flex items-center gap-3 font-body text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                {s}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Guest opportunities */}
        <motion.div
          variants={fadeUp}
          custom={7}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="p-8 rounded border border-primary/40 bg-primary text-center"
        >
          <h3 className="font-display text-2xl text-primary-foreground mb-4">Guests Will Have the Opportunity To</h3>
          <div className="space-y-2 font-body text-sm text-primary-foreground/80">
            <p>Listen to expert insights</p>
            <p>Reflect on the film's themes</p>
            <p>Participate in a brief audience Q&A</p>
          </div>
        </motion.div>

        <motion.p
          variants={fadeUp}
          custom={8}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-display text-lg italic font-semibold text-muted-foreground mt-12 text-center"
        >
          This conversation is designed to extend the experience of Visiting Hour beyond the screen —
          encouraging deeper reflection on love, loss, and the enduring connections that remain even
          after goodbye.
        </motion.p>
      </div>
    </section>
  );
};

export default PanelSection;
