"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Calendar } from "lucide-react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [formStatus, setFormStatus] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple Client-side validation
    if (!name || !email || !subject || !message) {
      setFormStatus({ type: "error", text: "Please fill out all fields." });
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setFormStatus({ type: "error", text: "Please enter a valid email address." });
      return;
    }

    setIsLoading(true);
    setFormStatus(null);

    // Simulate API submission
    setTimeout(() => {
      setIsLoading(false);
      setFormStatus({
        type: "success",
        text: "Thank you! Your message has been sent successfully. I will get back to you shortly.",
      });
      // Clear form
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }, 1500);
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-20">
      {/* Title */}
      <div className="text-center mb-12 sm:mb-16">
        <h1 className="font-sans text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
          Let&apos;s Build Something
        </h1>
        <p className="mx-auto mt-4 max-w-2xl font-sans text-base text-text-secondary">
          Have an interesting project, job opportunity, or just want to say hi? Drop me a message below.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
        {/* Contact Info Sidebar */}
        <div className="md:col-span-2 flex flex-col gap-6">
          <Card className="bg-surface border border-border">
            <h3 className="font-sans text-lg font-bold text-text-primary mb-6">
              Contact Information
            </h3>
            
            <div className="flex flex-col gap-5 font-sans text-sm text-text-secondary">
              <div className="flex items-start gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-600 dark:bg-[#8b5cf6]/10 dark:text-primary-300 border border-primary-500/10 dark:border-[#8b5cf6]/20">
                  <Mail className="h-4 w-4" />
                </span>
                <div>
                  <span className="font-bold text-text-primary block">Email</span>
                  <a href="mailto:raishilmy0@gmail.com" className="hover:text-primary-500 transition-colors">
                    raishilmy0@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-600 dark:bg-[#8b5cf6]/10 dark:text-primary-300 border border-primary-500/10 dark:border-[#8b5cf6]/20">
                  <Phone className="h-4 w-4" />
                </span>
                <div>
                  <span className="font-bold text-text-primary block">Call / Telegram</span>
                  <span>+62 821-3529-2904</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-600 dark:bg-[#8b5cf6]/10 dark:text-primary-300 border border-primary-500/10 dark:border-[#8b5cf6]/20">
                  <MapPin className="h-4 w-4" />
                </span>
                <div>
                  <span className="font-bold text-text-primary block">Location</span>
                  <span>Semarang, Central Java, Indonesia</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Calendar Widget Card */}
          <Card className="bg-surface border border-border">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-50 text-primary-600 dark:bg-[#8b5cf6]/10 dark:text-primary-300 border border-primary-500/10 dark:border-[#8b5cf6]/20">
                <Calendar className="h-4 w-4" />
              </span>
              <h3 className="font-sans text-base font-bold text-text-primary">
                Schedule a Call
              </h3>
            </div>
            <p className="font-sans text-xs text-text-secondary leading-relaxed mb-5">
              Want to skip the form and discuss directly? Book a 15-minute quick chat session on my calendar.
            </p>
            <a
              href="https://cal.com/gibran-dev/15min"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="flex items-center justify-center gap-1.5 w-full rounded-lg border border-primary-500/30 py-2.5 text-center text-xs font-bold text-primary-700 bg-primary-50 hover:bg-primary-100 dark:bg-[#8b5cf6]/10 dark:text-primary-300 dark:border-[#8b5cf6]/20 dark:hover:bg-[#8b5cf6]/20 transition-all duration-200 cursor-pointer">
                <span>Book a Slot on Cal.com</span>
              </span>
            </a>
          </Card>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-3">
          <Card className="bg-surface border border-border">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Form Info Status */}
              {formStatus && (
                <div
                  className={`flex items-start gap-3 rounded-lg p-4 border text-sm ${
                    formStatus.type === "success"
                      ? "bg-success/10 border-success/20 text-success"
                      : "bg-danger/10 border-danger/20 text-danger"
                  }`}
                >
                  {formStatus.type === "success" ? (
                    <CheckCircle className="h-5 w-5 shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
                  )}
                  <span className="font-sans leading-relaxed">{formStatus.text}</span>
                </div>
              )}

              {/* Name */}
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-sans text-xs font-semibold text-text-secondary">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  className="rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-text-primary placeholder-text-tertiary focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-sans text-xs font-semibold text-text-secondary">
                  Your Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@example.com"
                  className="rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-text-primary placeholder-text-tertiary focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all"
                />
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="font-sans text-xs font-semibold text-text-secondary">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Freelance Project / Job Opportunity"
                  className="rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-text-primary placeholder-text-tertiary focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-sans text-xs font-semibold text-text-secondary">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Brief details about your request..."
                  className="rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-text-primary placeholder-text-tertiary focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all resize-none"
                />
              </div>

              {/* Submit */}
              <Button type="submit" variant="primary" size="md" isLoading={isLoading} className="mt-2 w-full sm:w-auto self-end">
                <Send className="h-4 w-4" />
                <span>Send Message</span>
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}
