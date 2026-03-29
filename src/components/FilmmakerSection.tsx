import { motion } from "framer-motion";
import filmmakerPortrait from "@/assets/filmmaker-portrait.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15 },
  }),
};

const FilmmakerSection = () => {
  return (
    <section className="py-32 px-6 bg-card">
      <div className="max-w-3xl mx-auto">
        <motion.div
          variants={fadeUp}
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4">
            The Vision Behind the Film
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-cream mb-4">
            About the Filmmaker
          </h2>
          <div className="divider-gold w-24 mx-auto mt-6" />
        </motion.div>

        <motion.div
          variants={fadeUp}
          custom={0.5}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-primary/30 shadow-[0_0_30px_rgba(212,175,55,0.15)]">
            <img
              src={filmmakerPortrait}
              alt="'Gbovo Eriamiantoe - Filmmaker"
              loading="lazy"
              width={640}
              height={800}
              className="w-full h-full object-cover object-top"
            />
          </div>
        </motion.div>

        <div className="space-y-6 text-center">
          <motion.p
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-body text-sm md:text-base text-muted-foreground leading-relaxed"
          >
            <span className="text-cream font-medium">'Gbovo Eriamiantoe</span> is a
            Nigerian filmmaker whose work focuses on intimate human stories that
            explore memory, grief, and emotional resilience. Through his production
            company,{" "}
            <span className="text-cream">BushLamp Studios</span>, he develops
            character-driven films that combine African storytelling with universal
            themes about love, loss, and the human condition.
          </motion.p>

          <motion.p
            variants={fadeUp}
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-body text-sm md:text-base text-muted-foreground leading-relaxed"
          >
            His films often engage with psychological and social themes, using cinema
            as a platform to spark meaningful conversations. His short film{" "}
            <span className="italic text-cream">HOOKED</span>, which examines
            addiction and vulnerability, was screened at the{" "}
            <span className="text-cream">
              American Public Health Association Film Festival
            </span>
            .
          </motion.p>

          <motion.p
            variants={fadeUp}
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-body text-sm md:text-base text-muted-foreground leading-relaxed"
          >
            With{" "}
            <span className="italic text-cream">Visiting Hour</span>,{" "}
            'Gbovo continues his exploration of deeply personal stories, crafting a
            reflective film about grief, memory, and the enduring bonds between
            people — even after death.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default FilmmakerSection;
