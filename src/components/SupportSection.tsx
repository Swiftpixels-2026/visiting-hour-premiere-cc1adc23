import { motion } from "framer-motion";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15 },
  }),
};

const tiers = [
  { label: "Platinum Supporter", amount: "₦5,000,000" },
  { label: "Gold Supporter", amount: "₦2,000,000" },
  { label: "Silver Supporter", amount: "₦1,000,000" },
];

const SupportForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    amount: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.amount.trim()) {
      toast({ title: "Please fill in all required fields", variant: "destructive" });
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      toast({ title: "Thank you!", description: "We've received your support inquiry and will be in touch soon." });
      setFormData({ name: "", email: "", amount: "", message: "" });
      setSubmitting(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-5">
      <div>
        <label className="font-body text-[10px] tracking-[0.3em] uppercase text-primary mb-2 block">
          Full Name *
        </label>
        <Input
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Your full name"
          maxLength={100}
          className="bg-background/50 border-primary/20 text-cream placeholder:text-muted-foreground/50 focus:border-primary"
        />
      </div>
      <div>
        <label className="font-body text-[10px] tracking-[0.3em] uppercase text-primary mb-2 block">
          Email Address *
        </label>
        <Input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="your@email.com"
          maxLength={255}
          className="bg-background/50 border-primary/20 text-cream placeholder:text-muted-foreground/50 focus:border-primary"
        />
      </div>
      <div>
        <label className="font-body text-[10px] tracking-[0.3em] uppercase text-primary mb-2 block">
          Support Amount (₦) *
        </label>
        <Input
          value={formData.amount}
          onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
          placeholder="e.g. 1,000,000"
          maxLength={50}
          className="bg-background/50 border-primary/20 text-cream placeholder:text-muted-foreground/50 focus:border-primary"
        />
      </div>
      <div>
        <label className="font-body text-[10px] tracking-[0.3em] uppercase text-primary mb-2 block">
          Message (Optional)
        </label>
        <Textarea
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Any additional message..."
          maxLength={1000}
          rows={4}
          className="bg-background/50 border-primary/20 text-cream placeholder:text-muted-foreground/50 resize-none"
        />
      </div>
      <Button
        type="submit"
        disabled={submitting}
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-body text-xs tracking-[0.3em] uppercase py-3 rounded transition-colors duration-300"
      >
        {submitting ? "Submitting..." : "Submit Support Inquiry"}
      </Button>
    </form>
  );
};

const SupportSection = () => {
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
            Be Part of Something Meaningful
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-cream mb-4">
            Support the Movement
          </h2>
          <div className="divider-gold w-24 mx-auto mt-6" />
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
            <span className="italic text-cream">Visiting Hour</span> was created
            to open up an honest conversation about grief — an experience many
            people carry silently. Loss is universal, yet discussions around grief
            are often avoided or pushed aside. Through this film and the
            conversations it inspires, we aim to create a safe and compassionate
            space where people can reflect, share, and heal.
          </motion.p>

          <motion.p
            variants={fadeUp}
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-body text-sm md:text-base text-muted-foreground leading-relaxed"
          >
            Our goal is to take{" "}
            <span className="italic text-cream">Visiting Hour</span> beyond a
            single screening. We plan to host film screenings and guided panel
            discussions on grief in selected cities across Nigeria and other
            African countries, bringing together mental health professionals,
            storytellers, and communities to talk openly about loss, memory, and
            healing.
          </motion.p>

          <motion.p
            variants={fadeUp}
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-body text-sm md:text-base text-muted-foreground leading-relaxed"
          >
            To make this movement possible, we are seeking partners and supporters
            who believe in the importance of mental health conversations and the
            power of storytelling to create change.
          </motion.p>
        </div>

        {/* Sponsorship Tiers */}
        <motion.div
          variants={fadeUp}
          custom={4}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="font-display text-2xl text-cream text-center mb-10">
            Sponsorship Support
          </h3>
          <div className="grid gap-4 md:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.label}
                className="border border-primary/20 rounded-lg p-6 text-center hover:border-primary/50 transition-colors duration-300"
              >
                <p className="font-body text-[10px] tracking-[0.4em] uppercase text-primary mb-2">
                  {tier.label}
                </p>
                <p className="font-display text-2xl font-light gold-gradient-text">
                  {tier.amount}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Recognition & closing */}
        <div className="mt-16 space-y-6 text-center">
          <motion.p
            variants={fadeUp}
            custom={5}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-body text-sm md:text-base text-muted-foreground leading-relaxed"
          >
            Supporters and partners will receive recognition through brand
            placement on event banners, promotional materials, and other official
            communications related to the screenings and discussions.
          </motion.p>

          <motion.p
            variants={fadeUp}
            custom={6}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-body text-sm md:text-base text-muted-foreground leading-relaxed italic"
          >
            Contributions of any amount are also deeply appreciated and will help
            bring this important initiative to more communities.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={6.5}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-8"
          >
            <div className="border border-primary/30 rounded-lg p-6 text-center max-w-sm mx-auto bg-background/30">
              <p className="font-body text-[10px] tracking-[0.4em] uppercase text-primary mb-3">
                Bank Details
              </p>
              <p className="font-display text-lg text-cream">Wema Bank</p>
              <p className="font-display text-2xl font-light gold-gradient-text mt-1 tracking-wider">
                0127512202
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            custom={7}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="pt-8"
          >
            <div className="divider-gold w-16 mx-auto mb-8" />
            <p className="font-display text-xl md:text-2xl font-light text-cream leading-relaxed">
              Together, we can use film and conversation to help people understand
              that{" "}
              <span className="gold-gradient-text">
                grief deserves space, compassion, and dialogue.
              </span>
            </p>
            <p className="font-body text-sm tracking-widest uppercase text-primary mt-6">
              Join us in supporting this movement.
            </p>
          </motion.div>
        </div>

        {/* Contact / Support Form */}
        <motion.div
          variants={fadeUp}
          custom={8}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20"
        >
          <Collapsible>
            <div className="divider-gold w-24 mx-auto mb-8" />
            <CollapsibleTrigger className="w-full group cursor-pointer">
              <div className="flex items-center justify-center gap-3">
                <h3 className="font-display text-2xl text-cream">
                  Get In Touch
                </h3>
                <ChevronDown className="w-5 h-5 text-primary transition-transform duration-300 group-data-[state=open]:rotate-180" />
              </div>
              <p className="font-body text-sm text-muted-foreground text-center mt-4 max-w-lg mx-auto">
                Interested in supporting or partnering with us? Tap to fill out the form.
              </p>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-10">
              <SupportForm />
            </CollapsibleContent>
          </Collapsible>
        </motion.div>
      </div>
    </section>
  );
};

export default SupportSection;
