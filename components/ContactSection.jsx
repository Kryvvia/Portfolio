import { useState } from 'react';
import { toast } from 'react-toastify';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactSection({ isStandalone = false }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || 'YOUR_ACCESS_KEY_HERE',
          name: formData.name,
          email: formData.email,
          message: formData.message,
        })
      });

      const result = await response.json();
      if (result.success) {
        toast.success('Your message has been sent successfully! We will get back to you shortly.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast.error('Failed to send message. Please try again later.');
        console.error(result);
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.');
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={`px-6 relative z-10 bg-black ${isStandalone ? 'pt-4 pb-24' : 'pt-8 pb-10'}`}>
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Title */}
        <div className="max-w-2xl mx-auto text-center space-y-3">
          <h2 className="text-sm font-semibold tracking-[0.2em] text-gray-400 uppercase">Get in Touch</h2>
          <h3 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Do You Have Any Projects? <br /><span className="text-gradient">Plz Say Hello.</span>
          </h3>
          <p className="text-gray-400 text-base font-light">
            Whether you want to build a website, deploy scaling backend microservices, or integrate AI — we are here to build it.
          </p>
        </div>

        {/* Content Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left Column - Contact Coordinates */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-neutral-950 border border-white/5 rounded-3xl p-8 backdrop-blur-md">
            <div className="space-y-8">
              <h4 className="text-white text-xl font-bold tracking-tight">Agency Contacts</h4>
              
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="p-3 rounded-xl bg-white/5 text-white shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h5 className="text-white text-sm font-semibold">Location</h5>
                    <p className="text-sm text-gray-400 mt-1">Hyderabad, Telangana, India</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="p-3 rounded-xl bg-white/5 text-white shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h5 className="text-white text-sm font-semibold">Email Us</h5>
                    <p className="text-sm text-gray-400 mt-1">
                      <a href="mailto:kryvvia@gmail.com" className="hover:text-white transition">kryvvia@gmail.com</a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="p-3 rounded-xl bg-white/5 text-white shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h5 className="text-white text-sm font-semibold">Call Details</h5>
                    <p className="text-sm text-gray-400 mt-1">
                      <a href="tel:+919067442486" className="hover:text-white transition">+91 90674 42486</a>
                    </p>
                    <p className="text-sm text-gray-400 mt-1">
                      <a href="tel:+91 29965 27686" className="hover:text-white transition">+91 29965 27686</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/5 mt-8 text-xs text-gray-500 font-mono">
              Response time: Under 12 hours.
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-7 bg-neutral-950 border border-white/5 rounded-3xl p-8 backdrop-blur-md">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name-input" className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Your Full Name</label>
                  <input
                    type="text"
                    id="name-input"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Sarah Jenkins"
                    className="w-full bg-neutral-900 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email-input" className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Email Address</label>
                  <input
                    type="email"
                    id="email-input"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@email.com"
                    className="w-full bg-neutral-900 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-white transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message-input" className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Write Message</label>
                <textarea
                  id="message-input"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Tell us about your project or product ideas..."
                  className="w-full bg-neutral-900 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-white transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto bg-white hover:bg-neutral-200 disabled:opacity-50 text-black font-semibold px-8 py-3.5 rounded-xl transition shadow-lg flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
