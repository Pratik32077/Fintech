import { Link } from 'react-router-dom';
import EMICalculator from '../components/EMICalculator';
import { ArrowRight } from 'lucide-react';

const EMICalculatorSection = () => {
  return (
    <section className="bg-[#F7F9FC]">
      <div className="container-custom section-padding">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1F2937] mb-4">
            Calculate Your EMI
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Plan your finances better with our easy-to-use EMI calculator. 
            Get instant estimates for your monthly payments and total interest.
          </p>
        </div>

        {/* EMI Calculator */}
        <div className="max-w-4xl mx-auto mb-8">
          <EMICalculator isCompact={true} />
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/emi-calculator"
            className="inline-flex items-center gap-2 text-[#25477B] font-medium hover:text-[#2C78B7] transition-colors"
          >
            Try Advanced Calculator
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EMICalculatorSection;
