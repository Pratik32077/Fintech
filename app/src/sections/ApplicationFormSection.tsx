import { useState } from 'react';
import { Send, CheckCircle, User, Mail, Phone, Briefcase, Sparkles, Clock, Shield, TrendingUp } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { sendFormData } from '../lib/utils';

const services = [
  'Business Loan',
  'Personal Loan',
  'Home Loan',
  'Education Loan',
  'Car Loan',
  'Project Funding',
  'Mortgage Loan',
  'Other',
];

const benefits = [
  { icon: Clock, title: 'Quick Approval', desc: 'Get approved within 24 hours' },
  { icon: TrendingUp, title: 'Competitive Rates', desc: 'Starting from just 7.40% p.a.' },
  { icon: Shield, title: '100% Transparent', desc: 'No hidden charges or fees' },
];

const ApplicationFormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation({ threshold: 0.2 });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // send the data to Formspree
    const success = await sendFormData('https://formspree.io/f/xvzbyooz', formData);
    if (!success) {
      // you might want to show a toast or error state here
      return;
    }

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

  return (
    <section className="bg-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#25477B]/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#2C78B7]/5 to-transparent rounded-full blur-3xl" />

      <div className="container-custom section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Content */}
          <div ref={leftRef}>
            <div className={`transition-all duration-700 ${leftVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#25477B]/10 rounded-full text-sm font-semibold text-[#25477B] mb-6">
                <Sparkles className="w-4 h-4" />
                Get Started
              </span>
              <h2 className="section-title mb-6">
                Apply for a Loan{' '}
                <span className="gradient-text">Today</span>
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-10">
                Get started with your loan application in just a few minutes.
                Our team will review your application and get back to you within 24 hours
                with the best loan options tailored to your needs.
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-5">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-5 p-5 bg-[#F7F9FC] rounded-xl hover:bg-white hover:shadow-lg transition-all duration-500 border border-transparent hover:border-gray-100 ${leftVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                    }`}
                  style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-[#25477B] to-[#2C78B7] rounded-xl flex items-center justify-center shadow-lg shadow-[#25477B]/20">
                    <benefit.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1F2937] text-lg">{benefit.title}</h4>
                    <p className="text-gray-600 text-sm">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Form */}
          <div ref={rightRef}>
            <div className={`bg-gradient-to-br from-[#F7F9FC] to-white rounded-3xl p-8 lg:p-10 shadow-xl shadow-[#25477B]/5 border border-gray-100 transition-all duration-700 ${rightVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {isSubmitted ? (
                <div className="text-center py-16">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/30">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1F2937] mb-3">
                    Application Submitted!
                  </h3>
                  <p className="text-gray-600">
                    Thank you for applying. We&apos;ll contact you within 24 hours.
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-[#1F2937] mb-2">
                      Quick Application
                    </h3>
                    <p className="text-gray-500 text-sm">
                      Fill in your details and we&apos;ll get back to you shortly.
                    </p>
                  </div>

                  <form
                    action="https://formspree.io/f/xvzbyooz"
                    method="POST"
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <div>
                      <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                        <User className="w-4 h-4 text-[#25477B]" />
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#25477B] focus:border-transparent outline-none transition-all bg-white text-base"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                          <Mail className="w-4 h-4 text-[#25477B]" />
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#25477B] focus:border-transparent outline-none transition-all bg-white text-base"
                          placeholder="Enter your email"
                        />
                      </div>
                      <div>
                        <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                          <Phone className="w-4 h-4 text-[#25477B]" />
                          Phone *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#25477B] focus:border-transparent outline-none transition-all bg-white text-base"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                        <Briefcase className="w-4 h-4 text-[#25477B]" />
                        Loan Type *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#25477B] focus:border-transparent outline-none transition-all bg-white text-base appearance-none cursor-pointer"
                      >
                        <option value="">Select loan type</option>
                        {services.map((service, idx) => (
                          <option key={idx} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message (Optional)
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={3}
                        className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#25477B] focus:border-transparent outline-none transition-all bg-white resize-none text-base"
                        placeholder="Tell us about your requirements..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-primary w-full flex items-center justify-center gap-3 text-base"
                    >
                      Submit Application
                      <Send className="w-5 h-5" />
                    </button>

                    <p className="text-xs text-gray-500 text-center">
                      By submitting, you agree to our Privacy Policy and Terms of Service.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationFormSection;
