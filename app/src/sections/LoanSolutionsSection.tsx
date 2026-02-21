import { Link } from 'react-router-dom';
import { 
  Briefcase, 
  GraduationCap, 
  Home, 
  Car,
  ArrowRight,
  TrendingUp
} from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const loanCategories = [
  {
    icon: Briefcase,
    title: 'Business Loans',
    description: 'Custom repayment plans for startups and SMEs to fuel your business growth.',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600',
  },
  {
    icon: Home,
    title: 'Home Loans',
    description: 'Make your dream home a reality with competitive interest rates.',
    color: 'from-emerald-500 to-emerald-600',
    bgColor: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
  },
  {
    icon: GraduationCap,
    title: 'Education Loans',
    description: 'Invest in your future with education loans covering all expenses.',
    color: 'from-violet-500 to-violet-600',
    bgColor: 'bg-violet-50',
    iconColor: 'text-violet-600',
  },
  {
    icon: Car,
    title: 'Vehicle Loans',
    description: 'Drive your dream car home with quick and hassle-free vehicle loans.',
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50',
    iconColor: 'text-orange-600',
  },
];

const LoanSolutionsSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="bg-[#F7F9FC] relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#25477B]/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#2C78B7]/5 to-transparent rounded-full blur-3xl" />

      <div className="container-custom section-padding relative z-10">
        {/* Section Header */}
        <div 
          ref={titleRef}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm font-semibold text-[#25477B] shadow-sm mb-6">
            <TrendingUp className="w-4 h-4" />
            Our Financial Solutions
          </span>
          <h2 className="section-title mb-6">
            Loan Solutions for{' '}
            <span className="gradient-text">Every Need</span>
          </h2>
          <p className="section-subtitle mx-auto">
            We offer a comprehensive range of financial products designed to meet 
            your personal and business requirements with ease and transparency.
          </p>
        </div>

        {/* Loan Categories Grid */}
        <div 
          ref={cardsRef}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12"
        >
          {loanCategories.map((category, index) => (
            <div
              key={index}
              className={`group bg-white rounded-2xl p-7 card-shadow hover:card-shadow-hover transition-all duration-500 border border-gray-100/50 relative overflow-hidden ${
                cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Top Gradient Line */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${category.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
              
              {/* Icon */}
              <div className={`w-16 h-16 ${category.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                <category.icon className={`w-8 h-8 ${category.iconColor}`} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#1F2937] mb-3 group-hover:text-[#25477B] transition-colors">
                {category.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {category.description}
              </p>

              {/* CTA */}
              <Link
                to="/services"
                className="inline-flex items-center text-sm font-semibold text-[#25477B] group-hover:text-[#2C78B7] transition-colors"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>

              {/* Hover Glow */}
              <div className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-opacity duration-500`} />
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className={`text-center transition-all duration-700 delay-500 ${cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Link
            to="/services"
            className="btn-primary inline-flex items-center gap-3"
          >
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LoanSolutionsSection;
