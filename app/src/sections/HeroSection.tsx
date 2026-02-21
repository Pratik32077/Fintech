import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Shield, Clock, Sparkles } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const HeroSection = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="relative bg-gradient-to-br from-[#F7F9FC] via-white to-[#F0F7FF] overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-[#25477B]/8 to-transparent rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/2 -left-40 w-[500px] h-[500px] bg-gradient-to-tr from-[#2C78B7]/8 to-transparent rounded-full blur-3xl" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-1/4 w-[300px] h-[300px] bg-gradient-to-br from-[#25477B]/5 to-transparent rounded-full blur-2xl" style={{ animationDelay: '1s' }} />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(#25477B 1px, transparent 1px), linear-gradient(90deg, #25477B 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />

        {/* Floating Shapes */}
        <div className="absolute top-32 left-[15%] w-4 h-4 bg-[#25477B]/20 rounded-full animate-float" />
        <div className="absolute top-48 right-[20%] w-3 h-3 bg-[#2C78B7]/30 rounded-full animate-float" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-40 left-[25%] w-2 h-2 bg-[#25477B]/25 rounded-full animate-float" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="container-custom relative z-10" ref={heroRef}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center py-20 lg:py-28">
          {/* Left Content */}
          <div className={`text-center lg:text-left transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white rounded-full mb-8 shadow-lg shadow-[#25477B]/10 border border-[#25477B]/10">
              <Sparkles className="w-4 h-4 text-[#25477B]" />
              <span className="text-sm font-semibold text-[#25477B]">
                Trusted by 1000+ Customers
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#1F2937] leading-[1.1] mb-6 tracking-tight">
              Empower Your{' '}
              <span className="gradient-text">Dreams</span>
            </h1>

            <p className="text-xl text-gray-600 mb-4 font-medium">
              Turn Your Dreams into Reality with Fin4 Capital Solution
            </p>

            <p className="text-lg text-gray-500 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Your trusted partner in loan solutions. We provide fast, transparent,
              and reliable financial services tailored to your needs.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Link to="/contact" className="btn-primary group text-base">
                Apply Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/services" className="btn-secondary text-base">
                Explore Services
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
              {[
                { icon: Shield, text: 'Secure Process' },
                { icon: Clock, text: '24-Hour Approval' },
                { icon: TrendingUp, text: 'Lowest Interest Rates' },
              ].map((badge, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 px-4 py-2.5 bg-white rounded-lg shadow-sm border border-gray-100"
                >
                  <div className="w-8 h-8 bg-[#25477B]/10 rounded-lg flex items-center justify-center">
                    <badge.icon className="w-4 h-4 text-[#25477B]" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Illustration */}
          <div className={`relative transition-all duration-1000 delay-200 ${heroVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {/* Main Image Container */}
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#25477B]/20 to-[#2C78B7]/20 rounded-3xl blur-2xl transform scale-95" />

              {/* Main Image */}
              <div className="relative bg-white rounded-3xl shadow-2xl shadow-[#25477B]/10 overflow-hidden border border-gray-100">
                <img
                  src="/hero-illustration.png"
                  alt="Financial Growth"
                  className="w-full h-auto"
                />
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl shadow-[#25477B]/10 p-5 border border-gray-100 animate-float">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#25477B] to-[#2C78B7] rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#1F2937]">₹500Cr+</p>
                    <p className="text-sm text-gray-500">Loans Disbursed</p>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg shadow-[#25477B]/10 p-4 border border-gray-100 animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">ISO 9001:2015</p>
                    <p className="text-sm font-bold text-[#1F2937]">CIBIL Partner</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
