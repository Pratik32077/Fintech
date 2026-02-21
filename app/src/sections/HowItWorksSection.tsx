import { FileText, ClipboardCheck, CheckCircle, Banknote, ArrowRight } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const steps = [
  {
    number: '01',
    icon: FileText,
    title: 'Apply Online',
    description: 'Fill out our simple online application form with your basic details and loan requirements. It takes less than 5 minutes.',
    color: 'from-blue-400 to-blue-600',
  },
  {
    number: '02',
    icon: ClipboardCheck,
    title: 'Document Verification',
    description: 'Upload your documents securely. Our team verifies your KYC, income proof, and other required documents quickly.',
    color: 'from-indigo-400 to-indigo-600',
  },
  {
    number: '03',
    icon: CheckCircle,
    title: 'Loan Approval',
    description: 'Once verified, get your loan approved within 24 hours. We evaluate based on your profile and creditworthiness.',
    color: 'from-violet-400 to-violet-600',
  },
  {
    number: '04',
    icon: Banknote,
    title: 'Disbursement',
    description: 'Receive the loan amount directly in your bank account. Start using the funds for your needs immediately.',
    color: 'from-emerald-400 to-emerald-600',
  },
];

const HowItWorksSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: stepsRef, isVisible: stepsVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
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

      <div className="container-custom section-padding relative z-10">
        {/* Section Header */}
        <div 
          ref={titleRef}
          className={`text-center max-w-3xl mx-auto mb-16 lg:mb-20 transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold text-white mb-6 border border-white/20">
            <CheckCircle className="w-4 h-4" />
            Simple Process
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
            How It Works
          </h2>
          <p className="text-white/80 leading-relaxed text-lg">
            Getting a loan with Fin4 Capital is simple and straightforward. 
            Follow these four easy steps to get your loan approved.
          </p>
        </div>

        {/* Steps Grid */}
        <div 
          ref={stepsRef}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {steps.map((step, index) => (
            <div
              key={index}
              className={`group relative bg-white/10 backdrop-blur-md rounded-2xl p-7 lg:p-8 hover:bg-white/20 transition-all duration-500 border border-white/20 ${
                stepsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Step Number Badge */}
              <div className="absolute -top-4 left-6">
                <span className={`bg-gradient-to-r ${step.color} text-white text-sm font-bold px-4 py-1.5 rounded-full shadow-lg`}>
                  Step {step.number}
                </span>
              </div>

              {/* Icon */}
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 mt-4 group-hover:scale-110 group-hover:bg-white/30 transition-all duration-500">
                <step.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {step.description}
              </p>

              {/* Connector Line (Desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8">
                  <div className="h-0.5 bg-white/30 relative">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full" />
                  </div>
                </div>
              )}

              {/* Hover Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-14 transition-all duration-700 delay-500 ${stepsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-white/70 mb-6 text-lg">
            Ready to get started? Apply now and get your loan approved within 24 hours!
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 bg-white text-[#25477B] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            Apply Now
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
