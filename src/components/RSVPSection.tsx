import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { Check } from "lucide-react";

const rsvpSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().min(1, "Phone number is required").max(30),
  guests: z.string().optional(),
  message: z.string().trim().max(500).optional(),
});

type RSVPFormValues = z.infer<typeof rsvpSchema>;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15 },
  }),
};

const RSVPSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<RSVPFormValues>({
    resolver: zodResolver(rsvpSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      guests: "",
      message: "",
    },
  });

  const onSubmit = (data: RSVPFormValues) => {
    console.log("RSVP submitted:", { name: data.name, guests: data.guests });
    setSubmitted(true);
    toast({
      title: "RSVP Confirmed",
      description: "Thank you. We look forward to welcoming you.",
    });
  };

  return (
    <section id="rsvp" className="py-32 px-6 bg-background">
      <div className="max-w-xl mx-auto">
        <motion.div
          variants={fadeUp}
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4">
            By Invitation Only
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-cream mb-4">
            Confirm Your Attendance
          </h2>
          <div className="divider-gold w-24 mx-auto mt-6 mb-6" />
          <p className="font-body text-sm text-muted-foreground max-w-md mx-auto">
            Kindly confirm your attendance for the private VIP premiere of{" "}
            <span className="text-cream italic">Visiting Hour</span>.
          </p>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center py-16"
          >
            <div className="w-16 h-16 rounded-full border border-primary/40 flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-display text-2xl text-cream mb-3">
              Your Presence is Confirmed
            </h3>
            <p className="font-body text-sm text-muted-foreground">
              We look forward to welcoming you on{" "}
              <span className="text-cream">Sunday, 25th April 2026</span>.
            </p>
          </motion.div>
        ) : (
          <motion.div
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-body text-xs tracking-widest uppercase text-muted-foreground">
                        Full Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your full name"
                          className="bg-card border-border text-foreground placeholder:text-muted-foreground/50 font-body"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-body text-xs tracking-widest uppercase text-muted-foreground">
                        Email Address
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="your@email.com"
                          className="bg-card border-border text-foreground placeholder:text-muted-foreground/50 font-body"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-body text-xs tracking-widest uppercase text-muted-foreground">
                        Phone Number
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          placeholder="+234 000 000 0000"
                          className="bg-card border-border text-foreground placeholder:text-muted-foreground/50 font-body"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="guests"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-body text-xs tracking-widest uppercase text-muted-foreground">
                        Number of Additional Guests{" "}
                        <span className="normal-case tracking-normal text-muted-foreground/60">(optional)</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          min="0"
                          max="5"
                          placeholder="0"
                          className="bg-card border-border text-foreground placeholder:text-muted-foreground/50 font-body"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-body text-xs tracking-widest uppercase text-muted-foreground">
                        Message{" "}
                        <span className="normal-case tracking-normal text-muted-foreground/60">(optional)</span>
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Any dietary requirements or special requests..."
                          rows={3}
                          className="bg-card border-border text-foreground placeholder:text-muted-foreground/50 font-body resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="pt-4">
                  <Button
                    type="submit"
                    className="w-full font-body text-xs tracking-[0.3em] uppercase h-12 bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    Confirm Attendance
                  </Button>
                </div>
              </form>
            </Form>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default RSVPSection;
