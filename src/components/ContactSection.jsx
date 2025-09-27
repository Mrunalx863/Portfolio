import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
  Twitter,
  Copy,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Get form data
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
      e.target.reset(); // Reset form after submission
    }, 1500);
  };

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text).then(() => {
      toast({
        title: "Copied!",
        description: `${type} copied to clipboard.`,
      });
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "mrunalmehar863@gmail.com",
      href: "mailto:mrunalmehar863@gmail.com",
      copyable: true,
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9730267598",
      href: "tel:+919730267598",
      copyable: true,
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bhandara, Maharashtra",
      href: null,
      copyable: false,
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/mrunalx863",
      label: "LinkedIn",
    },
    {
      icon: Github,
      href: "https://github.com/Mrunalx863",
      label: "GitHub",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/im_yum.yumm",
      label: "Instagram",
    },
    {
      icon: Twitter,
      href: "https://x.com/mrunalmehar863",
      label: "Twitter",
    },
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 lg:py-24 px-3 sm:px-4 relative bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
              GET IN TOUCH
            </span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-justify text-sm sm:text-base leading-relaxed mt-4">
            Have a project in mind or want to collaborate? Feel free to reach out.
            I'm always open to discussing new opportunities and ideas.
          </p>
        </div>
        

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Left Side - Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4 sm:mb-6 md:mb-8 text-center lg:text-left">
                Let's Connect
              </h3>
              
              {/* Contact Information Cards */}
              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className="group bg-card/70 backdrop-blur-sm p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl bg-primary/10 group-hover:bg-primary/15 transition-colors duration-300 mt-0.5 sm:mt-1 flex-shrink-0">
                        <item.icon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2 text-left">{item.label}</h4>
                        <div className="flex items-center gap-2">
                          {item.href ? (
                            <a
                              href={item.href}
                              className="text-muted-foreground hover:text-primary transition-colors duration-300 flex-1 text-left text-sm sm:text-base break-all sm:break-normal"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-muted-foreground flex-1 text-left text-sm sm:text-base">{item.value}</p>
                          )}
                          {item.copyable && (
                            <button
                              onClick={() => copyToClipboard(item.value, item.label)}
                              className="p-1.5 sm:p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-all duration-300 hover:scale-105 flex-shrink-0"
                              title={`Copy ${item.label}`}
                            >
                              <Copy className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-6 sm:pt-8">
                <h4 className="font-semibold text-lg sm:text-xl mb-4 sm:mb-6 text-foreground text-center lg:text-left">
                  Follow Me On Social Media
                </h4>
                <div className="flex gap-3 sm:gap-4 justify-center lg:justify-start flex-wrap">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-primary/10 hover:bg-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:scale-110"
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary group-hover:text-primary/80 transition-colors duration-300" />
                    </a>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-card/70 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-foreground text-center lg:text-left">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2 text-foreground"
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2 text-foreground"
                    >
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                      placeholder="john.doe@gmail.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2 text-foreground"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                    placeholder="Project Collaboration"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2 text-foreground"
                  >
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none text-sm sm:text-base"
                    placeholder="Hello! I'd love to discuss a project with you..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "cosmic-button w-full flex items-center justify-center gap-2 py-3 sm:py-4 text-sm sm:text-base",
                    isSubmitting && "opacity-70 cursor-not-allowed"
                  )}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-3 w-3 sm:h-4 sm:w-4 border-2 border-current border-t-transparent"></div>
                      <span className="text-sm sm:text-base">Sending...</span>
                    </>
                  ) : (
                    <>
                      <span className="text-sm sm:text-base">Send Message</span>
                      <Send className="h-3 w-3 sm:h-4 sm:w-4" />
                    </>
                  )}
                </button>
              </form>

              {/* Additional Info */}
              <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-border/30">
                <p className="text-xs sm:text-sm text-muted-foreground text-center leading-relaxed">
                  I typically respond within 24 hours. For urgent matters, 
                  feel free to call me directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};