import { motion } from "framer-motion";
import { Film, MessageCircle, Users, Star } from "lucide-react";

const highlights = [
  { icon: Film, text: "Special private screening of Visiting Hour" },
  { icon: MessageCircle, text: "Insightful panel discussion on grief and memory" },
  { icon: Users, text: "Post-screening conversations and networking" },
  { icon: Star, text: "A carefully selected audience of distinguished guests" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12 },
  }),
};

const ExperienceSection = () => {
  return (
    <section className="py-32 px-6 bg-secondary">
      <div className="max-w-4xl mx-auto">
        <motion.p
          variants={fadeUp}
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center font-body text-xs tracking-[0.4em] uppercase text-primary mb-4"
        >
          Event Experience
        </motion.p>

        <motion.h2
          variants={fadeUp}
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center font-display text-4xl md:text-5xl font-light text-cream mb-4"
        >
          An Evening of Reflection,
          <br />
          <span className="gold-gradient-text">Storytelling & Connection</span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center font-body text-sm md:text-base text-muted-foreground max-w-2xl mx-auto mb-16"
        >
          This exclusive premiere has been thoughtfully curated to offer more than just a film
          screening — it is an experience.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i + 3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex items-start gap-4 p-6 rounded border border-gold bg-card"
            >
              <item.icon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <p className="font-body text-sm text-secondary-foreground">{item.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          variants={fadeUp}
          custom={7}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center font-display text-lg italic text-muted-foreground mt-16 max-w-2xl mx-auto"
        >
          Your presence adds meaning to an evening dedicated to reflection, emotional honesty, and
          shared human experience.
        </motion.p>
      </div>
    </section>
  );
};

export default ExperienceSection;
