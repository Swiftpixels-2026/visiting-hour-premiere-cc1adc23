import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Visiting Hour - cinematic reunion scene"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground mb-8"
        >
          Bush Lamp Films presents
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p className="font-body text-xs tracking-[0.5em] uppercase text-primary mb-4">
            VIP Premiere
          </p>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-light tracking-wide gold-gradient-text leading-none">
            Visiting
            <br />
            Hour
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="font-display text-lg md:text-xl italic text-cream mt-8 max-w-2xl mx-auto leading-relaxed font-light"
        >
          An intimate cinematic experience exploring grief, memory, and the
          enduring bonds we share with those we have lost.
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="divider-gold w-48 mx-auto mt-10 mb-10"
        />

        {/* Event details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="space-y-2 font-body text-sm tracking-widest uppercase text-muted-foreground"
        >
          <p>Sunday, 25th April 2026 &nbsp;•&nbsp; 4:00 PM</p>
          <p className="text-cream">Victor Uwaifo Creative Hub</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="mt-10 flex items-center justify-center gap-6 font-body text-[10px] tracking-[0.5em] uppercase text-primary"
        >
          <span>Strictly VIP</span>
          <span className="w-1 h-1 rounded-full bg-primary" />
          <span>Private</span>
          <span className="w-1 h-1 rounded-full bg-primary" />
          <span>Curated</span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-12 bg-gradient-to-b from-primary/60 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
