import { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  CheckCircle,
  MessageSquare,
  ArrowRight
} from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 82681 01093'],
      href: 'tel:+918268101093',
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@fin4capitalsolution.com', 'salman.khan@fin4capitalsolution.com'],
      href: 'mailto:info@fin4capitalsolution.com',
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['Sai Paradise Bldg Office No.304, 3rd Floor', 'Gupte Road, Vishnu Nagar', 'Dombivli West – 421202'],
      href: '#',
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Monday - Saturday: 9:00 AM - 6:00 PM', 'Sunday: Closed'],
      href: '#',
    },
  ];

  const services = [
    'Business Loan',
    'Personal Loan',
    'Home Loan',
    'Education Loan',
    'Car Loan',
    'Project Funding',
    'Other',
  ];

  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <div className="overflow-x-hidden">
      {/* Hero Banner */}
      <section className="relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/abstract-bg.png" 
            alt="" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#25477B]/95 to-[#2C78B7]/95" />
        </div>
        
        <div className="container-custom py-20 lg:py-28 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold text-white mb-6 border border-white/20">
              <MessageSquare className="w-4 h-4" />
              Get in Touch
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              Contact Us
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Have questions about our services? We&apos;re here to help. 
              Reach out to us and our team will get back to you within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="bg-[#F7F9FC] relative -mt-10 z-20">
        <div className="container-custom pb-16">
          <div 
            ref={cardsRef}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.href}
                className={`group bg-white rounded-2xl p-6 card-shadow hover:card-shadow-hover transition-all duration-500 border border-gray-100 ${
                  cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#25477B]/10 to-[#2C78B7]/10 rounded-xl flex items-center justify-center mb-5 group-hover:from-[#25477B] group-hover:to-[#2C78B7] transition-all duration-500">
                  <info.icon className="w-7 h-7 text-[#25477B] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-[#1F2937] text-lg mb-3">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-sm text-gray-600 leading-relaxed">
                    {detail}
                  </p>
                ))}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-white relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#25477B]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#2C78B7]/5 to-transparent rounded-full blur-3xl" />
        
        <div className="container-custom section-padding relative z-10">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Form */}
            <div 
              ref={formRef}
              className={`lg:col-span-2 transition-all duration-700 ${formVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <div className="bg-gradient-to-br from-[#F7F9FC] to-white rounded-3xl p-8 lg:p-10 shadow-xl shadow-[#25477B]/5 border border-gray-100">
                <h2 className="text-2xl lg:text-3xl font-bold text-[#1F2937] mb-2">
                  Send Us a Message
                </h2>
                <p className="text-gray-500 mb-8">
                  Fill out the form below and we&apos;ll get back to you as soon as possible.
                </p>

                {isSubmitted ? (
                  <div className="text-center py-16">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/30">
                      <CheckCircle className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#1F2937] mb-3">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-gray-600">
                      Thank you for contacting us. We&apos;ll get back to you soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#25477B] focus:border-transparent outline-none transition-all bg-white"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#25477B] focus:border-transparent outline-none transition-all bg-white"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#25477B] focus:border-transparent outline-none transition-all bg-white"
                          placeholder="Enter your phone number"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Service Interested In
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#25477B] focus:border-transparent outline-none transition-all bg-white appearance-none cursor-pointer"
                        >
                          <option value="">Select a service</option>
                          {services.map((service, idx) => (
                            <option key={idx} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#25477B] focus:border-transparent outline-none transition-all bg-white resize-none"
                        placeholder="Tell us about your requirements..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-primary w-full sm:w-auto flex items-center justify-center gap-3"
                    >
                      Send Message
                      <Send className="w-5 h-5" />
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Connect */}
              <div className="bg-gradient-to-br from-[#25477B] to-[#2C78B7] rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-4">Quick Connect</h3>
                <p className="text-white/80 text-sm mb-6">
                  Prefer to talk? Call us directly for immediate assistance.
                </p>
                <a
                  href="tel:+918268101093"
                  className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-white/70 text-sm">Call us at</p>
                    <p className="font-bold text-lg">+91 82681 01093</p>
                  </div>
                </a>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-2xl p-6 card-shadow border border-gray-100">
                <h3 className="font-bold text-lg mb-4 text-[#1F2937]">Follow Us</h3>
                <p className="text-gray-500 text-sm mb-6">
                  Stay updated with our latest offers and financial tips.
                </p>
                <div className="flex gap-3">
                  {[
                    { icon: Facebook, href: 'https://www.facebook.com/?sk=welcome', label: 'Facebook' },
                    { icon: Twitter, href: 'https://x.com/salmankhanfin4?s=11', label: 'Twitter' },
                    { icon: Linkedin, href: '#', label: 'LinkedIn' },
                    { icon: Instagram, href: 'https://www.instagram.com/fin4capitalsolution', label: 'Instagram' },
                  ].map((social, idx) => (
                    <a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-[#F7F9FC] rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-[#25477B] hover:to-[#2C78B7] transition-all duration-300 group"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5 text-[#25477B] group-hover:text-white transition-colors" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Working Hours */}
              <div className="bg-[#F7F9FC] rounded-2xl p-6 border border-gray-100">
                <h3 className="font-bold text-lg mb-4 text-[#1F2937]">Working Hours</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Monday - Saturday</span>
                    <span className="font-semibold text-[#1F2937]">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-semibold text-red-500">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-[#F7F9FC]">
        <div className="container-custom section-padding">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#1F2937] mb-4">
              Visit Our Office
            </h2>
            <p className="text-gray-600">
              We&apos;d love to meet you in person. Drop by our office during working hours.
            </p>
          </div>

          <div className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-[#25477B]/5 h-80 lg:h-96 flex items-center justify-center border border-gray-100">
            <div className="text-center p-8">
              <div className="w-20 h-20 bg-gradient-to-br from-[#25477B]/10 to-[#2C78B7]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-10 h-10 text-[#25477B]" />
              </div>
              <h3 className="text-xl font-bold text-[#1F2937] mb-3">Fin4 Capital Solution</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Sai Paradise Bldg Office No.304, 3rd Floor<br />
                Gupte Road, Vishnu Nagar<br />
                Dombivli West – 421202
              </p>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#25477B] font-semibold hover:text-[#2C78B7] transition-colors"
              >
                Get Directions
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
