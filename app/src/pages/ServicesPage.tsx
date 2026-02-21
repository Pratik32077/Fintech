import {
  Briefcase,
  Building,
  GraduationCap,
  User,
  Home,
  Landmark,
  Factory,
  Car,
  HardHat,
  Wallet,
  Receipt,
  School,
  ArrowRight,
  Sparkles,
  Calculator
} from 'lucide-react';
import { Link } from 'react-router-dom';
import useScrollAnimation from '../hooks/useScrollAnimation';

const services = [
  {
    icon: Briefcase,
    title: 'Business Loan',
    description: 'Flexible financing solutions for SMEs and enterprises to fuel growth, expansion, and working capital needs.',
    features: ['Up to ₹50 Crores', 'Flexible Repayment', 'Quick Approval'],
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600',
  },
  {
    icon: User,
    title: 'Personal Loan',
    description: 'Meet your personal financial needs with unsecured loans for travel, medical, or any purpose.',
    features: ['No Collateral', 'Same Day Disbursal', 'Minimal Documentation'],
    color: 'from-emerald-500 to-emerald-600',
    bgColor: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
  },
  {
    icon: Home,
    title: 'Home Loan',
    description: 'Make your dream home a reality with competitive interest rates and easy repayment options.',
    features: ['Up to 90% Funding', 'Tax Benefits', 'Balance Transfer'],
    color: 'from-teal-500 to-teal-600',
    bgColor: 'bg-teal-50',
    iconColor: 'text-teal-600',
  },
  {
    icon: GraduationCap,
    title: 'Education Loan',
    description: 'Invest in your future with education loans covering tuition, living expenses, and study materials.',
    features: ['Low Interest Rates', 'Moratorium Period', 'Tax Benefits'],
    color: 'from-violet-500 to-violet-600',
    bgColor: 'bg-violet-50',
    iconColor: 'text-violet-600',
  },
  {
    icon: Building,
    title: 'Project Funding',
    description: 'Comprehensive funding for real estate, infrastructure, and industrial projects with structured repayment.',
    features: ['Long Tenure', 'Structured EMIs', 'Expert Guidance'],
    color: 'from-indigo-500 to-indigo-600',
    bgColor: 'bg-indigo-50',
    iconColor: 'text-indigo-600',
  },
  {
    icon: Landmark,
    title: 'Mortgage Loan',
    description: 'Unlock the value of your property with mortgage loans for business or personal needs.',
    features: ['High Loan Amount', 'Low Interest', 'Long Tenure'],
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50',
    iconColor: 'text-orange-600',
  },
  {
    icon: Factory,
    title: 'Machinery Loan',
    description: 'Finance your equipment and machinery purchases to upgrade your business operations.',
    features: ['Asset Financing', 'Flexible Terms', 'Quick Processing'],
    color: 'from-cyan-500 to-cyan-600',
    bgColor: 'bg-cyan-50',
    iconColor: 'text-cyan-600',
  },
  {
    icon: Car,
    title: 'Car Loan',
    description: 'Drive your dream vehicle home with our hassle-free car and two-wheeler loan options.',
    features: ['Up to 100% Funding', 'Low EMI', 'Fast Approval'],
    color: 'from-rose-500 to-rose-600',
    bgColor: 'bg-rose-50',
    iconColor: 'text-rose-600',
  },
  {
    icon: HardHat,
    title: 'Construction Funding',
    description: 'Specialized funding for construction projects with milestone-based disbursement.',
    features: ['Project Based', 'Milestone Payments', 'Expert Support'],
    color: 'from-amber-500 to-amber-600',
    bgColor: 'bg-amber-50',
    iconColor: 'text-amber-600',
  },
  {
    icon: Wallet,
    title: 'Overdraft & CC Facility',
    description: 'Working capital solutions with overdraft and cash credit facilities for businesses.',
    features: ['Revolving Credit', 'Pay Interest Only', 'Flexible Usage'],
    color: 'from-emerald-500 to-emerald-600',
    bgColor: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
  },
  {
    icon: Receipt,
    title: 'Sales & Purchase Discounting',
    description: 'Improve cash flow with invoice discounting and bill purchase facilities.',
    features: ['Quick Liquidity', 'Low Cost', 'No Collateral'],
    color: 'from-violet-500 to-violet-600',
    bgColor: 'bg-violet-50',
    iconColor: 'text-violet-600',
  },
  {
    icon: School,
    title: 'Loan Against Property',
    description: 'Secure loans against schools, colleges, hospitals, and resorts for expansion needs.',
    features: ['High Value Loans', 'Commercial Properties', 'Customized Terms'],
    color: 'from-pink-500 to-pink-600',
    bgColor: 'bg-pink-50',
    iconColor: 'text-pink-600',
  },
];

const ServicesPage = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.1 });

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
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold text-white mb-6 border border-white/20">
              <Sparkles className="w-4 h-4" />
              Our Offerings
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              Our Financial Services
            </h1>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              Discover our comprehensive range of loan and funding solutions designed
              to meet your personal and business financial needs. From dream homes to
              business expansion, we&apos;ve got you covered.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-white text-[#25477B] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              Apply Now
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-[#F7F9FC] relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#25477B]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#2C78B7]/5 to-transparent rounded-full blur-3xl" />

        <div className="container-custom section-padding relative z-10">
          {/* Section Header */}
          <div
            ref={titleRef}
            className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            <h2 className="section-title mb-6">
              Our{' '}
              <span className="gradient-text">Services</span>
            </h2>
            <p className="section-subtitle mx-auto">
              We offer reliable financial solutions to suit your needs with ease and transparency.
            </p>
          </div>

          {/* Grid */}
          <div
            ref={gridRef}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {services.map((service, index) => (
              <div
                key={index}
                className={`group bg-white rounded-2xl p-7 card-shadow hover:card-shadow-hover transition-all duration-500 border border-gray-100/50 relative overflow-hidden ${gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                style={{ transitionDelay: `${(index % 6) * 50}ms` }}
              >
                {/* Top Gradient Line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />

                {/* Icon */}
                <div className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500`}>
                  <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#1F2937] mb-3 group-hover:text-[#25477B] transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-[#F7F9FC] text-gray-600 text-xs rounded-lg font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  to="/contact"
                  className="inline-flex items-center text-sm font-semibold text-[#25477B] hover:text-[#2C78B7] transition-colors group/link"
                >
                  Apply Now
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-2 transition-transform duration-300" />
                </Link>

                {/* Hover Glow */}
                <div className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-opacity duration-500`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#25477B]/5 to-[#2C78B7]/5" />

        <div className="container-custom section-padding relative z-10">
          <div className="bg-gradient-to-r from-[#25477B] to-[#2C78B7] rounded-3xl p-10 lg:p-16 text-center text-white relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              <h2 className="text-2xl lg:text-4xl font-bold mb-4">
                Need Help Choosing the Right Loan?
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto mb-10 text-lg">
                Our financial experts are here to guide you through the process and
                help you find the perfect loan solution for your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-3 bg-white text-[#25477B] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
                >
                  Contact Us
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/emi-calculator"
                  className="inline-flex items-center justify-center gap-3 border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  <Calculator className="w-5 h-5" />
                  Calculate EMI
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
