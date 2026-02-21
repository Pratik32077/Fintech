import { Check, Percent, Clock, Shield, Headphones, Award, Star } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const features = [
  {
    icon: Percent,
    title: 'Lowest Interest Rates',
    description: 'Interest rates starting from 7.40% p.a., subject to applicant profile and lender approval.',
  },
  {
    icon: Clock,
    title: '24-Hour Approval',
    description: 'Fast approval and disbursal process with minimal paperwork to meet your urgent needs.',
  },
  {
    icon: Shield,
    title: '100% Transparency',
    description: 'No hidden charges or fees. We believe in complete transparency in all our dealings.',
  },
  {
    icon: Headphones,
    title: 'Dedicated Support',
    description: 'Financial experts guide you at every step of your loan journey.',
  },
];

const WhyChooseUsSection = () => {
  const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="bg-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-gradient-to-r from-[#25477B]/5 to-transparent rounded-full blur-3xl -translate-y-1/2" />

      <div className="container-custom section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left - Image Card */}
          <div
            ref={leftRef}
            className={`relative transition-all duration-1000 ${leftVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
          >
            <div className="relative">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#25477B] to-[#2C78B7] rounded-3xl blur-2xl opacity-20 transform translate-y-4" />

              {/* Main Card */}
              <div className="relative bg-gradient-to-br from-[#25477B] to-[#2C78B7] rounded-3xl p-8 lg:p-12 overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

                {/* Content */}
                <div className="relative z-10 text-white mb-10">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-6">
                    <Award className="w-4 h-4" />
                    Why Choose Us
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                    Expertly Managing Your Finances!
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    At Fin4 Capital Solution, we're committed to empowering your financial journey.
                    With over a decade of expertise, we've delivered tailored loan solutions.
                  </p>
                </div>

                {/* Interest Rate Card */}
                <div className="relative bg-white rounded-2xl p-6 shadow-2xl">
                  <div className="flex items-center gap-5">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#25477B] to-[#2C78B7] rounded-xl flex items-center justify-center shadow-lg">
                      <Percent className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <p className="text-4xl font-bold gradient-text">7.40%</p>
                      <p className="text-xs text-gray-400 mt-1">
                        Starting rates for Home Loans (T&C apply)
                      </p>
                      <p className="text-xs text-gray-400 mt-2">
                        *Rates may vary based on credit profile and lender terms.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Features */}
          <div ref={rightRef}>
            <div className={`mb-10 transition-all duration-700 ${rightVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#25477B]/10 rounded-full text-sm font-semibold text-[#25477B] mb-6">
                <Star className="w-4 h-4" />
                Our Advantages
              </span>
              <h2 className="section-title mb-6">
                Why Choose{' '}
                <span className="gradient-text">Fin4 Capital?</span>
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                We combine industry expertise with customer-centric service to deliver
                financial solutions that truly work for you.
              </p>
            </div>

            <div className="space-y-5">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`group flex gap-5 p-5 rounded-xl hover:bg-[#F7F9FC] transition-all duration-500 border border-transparent hover:border-gray-100 ${rightVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                    }`}
                  style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-[#25477B]/10 to-[#2C78B7]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:from-[#25477B] group-hover:to-[#2C78B7] transition-all duration-500">
                    <feature.icon className="w-7 h-7 text-[#25477B] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1F2937] text-lg mb-2 group-hover:text-[#25477B] transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust Indicators */}
            <div className={`mt-10 pt-8 border-t border-gray-100 transition-all duration-700 delay-500 ${rightVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="flex flex-wrap gap-4">
                {['CIBIL Partner', 'ISO Certified', '24/7 Support'].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 px-4 py-2 bg-[#F7F9FC] rounded-lg">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-sm font-medium text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
