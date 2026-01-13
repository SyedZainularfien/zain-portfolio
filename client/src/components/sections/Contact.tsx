import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Section, SectionTitle } from "../Section";
import { useState } from "react";
import toast from "react-hot-toast";

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error('All fields are required to establish connection!');
      return;
    }

    if (!formData.email.includes('@')) {
      toast.error('Invalid email format detected!');
      return;
    }

    setIsSubmitting(true);

    // Show loading toast
    const loadingToast = toast.loading('Transmitting message...');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Dismiss loading toast
      toast.dismiss(loadingToast);

      // Show success toast
      toast.success('Message transmitted successfully! I\'ll respond soon.');

      // Reset form
      setFormData({ name: '', email: '', message: '' });

    } catch (error) {
      toast.dismiss(loadingToast);
      toast.error('Transmission failed! Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <Section id="contact" className="bg-gradient-to-t from-black to-transparent">
      <SectionTitle subtitle="ESTABLISH_UPLINK">CONTACT_ME</SectionTitle>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 bg-card/30 p-8 rounded-2xl border border-white/5 backdrop-blur-sm">
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-white">Get in Touch</h3>
          <p className="text-gray-400">
            Currently available for freelance projects and open to full-time opportunities.
            If you have a project that needs some creative touch, let's talk.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4 text-gray-300">
              <div className="w-10 h-10 rounded bg-primary/20 flex items-center justify-center text-primary">
                <Mail size={20} />
              </div>
              <span>contact@syedzain.dev</span>
            </div>
            <div className="flex items-center gap-4 text-gray-300">
              <div className="w-10 h-10 rounded bg-primary/20 flex items-center justify-center text-primary">
                <MapPin size={20} />
              </div>
              <span>Digital Nomad / Earth</span>
            </div>
            <div className="flex items-center gap-4 text-gray-300">
              <div className="w-10 h-10 rounded bg-primary/20 flex items-center justify-center text-primary">
                <Phone size={20} />
              </div>
              <span>+1 (555) 000-0000</span>
            </div>
          </div>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm text-gray-400">Name</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                disabled={isSubmitting}
                className="w-full bg-black/40 border border-white/10 rounded p-3 text-white focus:border-primary focus:outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-400">Email</label>
              <input
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                disabled={isSubmitting}
                className="w-full bg-black/40 border border-white/10 rounded p-3 text-white focus:border-primary focus:outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="john@example.com"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm text-gray-400">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              disabled={isSubmitting}
              className="w-full bg-black/40 border border-white/10 rounded p-3 text-white h-32 focus:border-primary focus:outline-none transition-colors resize-none disabled:opacity-50 disabled:cursor-not-allowed"
              placeholder="Your message..."
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 bg-primary text-white font-bold font-display tracking-widest hover:bg-primary/80 transition-colors clip-tech flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-primary"
          >
            <Send className={`w-4 h-4 transition-transform ${isSubmitting ? 'animate-pulse' : 'group-hover:translate-x-1'}`} />
            {isSubmitting ? 'TRANSMITTING...' : 'TRANSMIT_MESSAGE'}
          </button>
        </form>
      </div>

      <footer className="mt-20 text-center text-gray-600 text-sm">
        <p>© 2024 Syed Zainularfien. All systems operational.</p>
      </footer>
    </Section>
  );
}
