import { Calendar, Users, Banknote, Building2 } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const stats = [
  {
    icon: Calendar,
    value: '15+',
    label: 'Years of Experience',
    description: 'In financial services',
  },
  {
    icon: Users,
    value: '1000+',
    label: 'Happy Customers',
    description: 'Across India',
  },
  {
    icon: Banknote,
    value: '₹500Cr+',
    label: 'Loans Disbursed',
    description: 'And growing',
  },
  {
    icon: Building2,
    value: '50+',
    label: 'Banking Partners',
    description: 'Nationwide network',
  },
];

const TrustStatsSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="bg-white relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F7F9FC] to-white opacity-50" />

      <div className="container-custom section-padding relative z-10" ref={ref}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`group bg-white rounded-2xl p-6 lg:p-8 card-shadow hover:card-shadow-hover transition-all duration-500 border border-gray-100 relative overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#25477B]/5 to-[#2C78B7]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-xl bg-gradient-to-br from-[#25477B]/10 to-[#2C78B7]/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500">
                  <stat.icon className="w-7 h-7 lg:w-8 lg:h-8 text-[#25477B]" />
                </div>

                {/* Value */}
                <h3 className="text-3xl lg:text-4xl font-bold text-[#1F2937] mb-2 group-hover:gradient-text transition-all duration-300">
                  {stat.value}
                </h3>

                {/* Label */}
                <p className="font-semibold text-[#25477B] text-sm lg:text-base mb-1">
                  {stat.label}
                </p>

                {/* Description */}
                <p className="text-gray-500 text-xs lg:text-sm">
                  {stat.description}
                </p>
              </div>

              {/* Decorative Corner */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-[#25477B]/5 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStatsSection;
