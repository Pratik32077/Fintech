import EMICalculator from '../components/EMICalculator';
import { Calculator, Info, TrendingUp, PieChart, Calendar, Sparkles, CheckCircle } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const EMICalculatorPage = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: stepsRef, isVisible: stepsVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: benefitsRef, isVisible: benefitsVisible } = useScrollAnimation({ threshold: 0.1 });

  const benefits = [
    { icon: TrendingUp, title: 'Financial Planning', desc: 'Plan your monthly budget by knowing your exact EMI amount in advance.' },
    { icon: PieChart, title: 'Compare Options', desc: 'Compare different loan amounts and tenures to find the best option.' },
    { icon: Calendar, title: 'Save Time', desc: 'Get instant results without waiting for bank quotations.' },
    { icon: Info, title: 'Total Cost Visibility', desc: 'See the total interest payable and overall loan cost upfront.' },
  ];

  const loanTypes = [
    { name: 'Home Loan', rate: '8.5% - 12%', tenure: '5-30 years' },
    { name: 'Personal Loan', rate: '10% - 24%', tenure: '1-5 years' },
    { name: 'Car Loan', rate: '8% - 14%', tenure: '1-7 years' },
    { name: 'Business Loan', rate: '12% - 24%', tenure: '1-5 years' },
  ];

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
              <Calculator className="w-4 h-4" />
              Free Financial Tool
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              EMI Calculator
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Plan your finances better with our easy-to-use EMI calculator. 
              Get instant estimates for your monthly payments, total interest, 
              and overall loan cost.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="bg-[#F7F9FC] relative -mt-10 z-20">
        <div className="container-custom pb-20">
          <div className="max-w-5xl mx-auto">
            <EMICalculator isCompact={false} />
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section className="bg-white relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#25477B]/5 to-transparent rounded-full blur-3xl" />
        
        <div className="container-custom section-padding relative z-10">
          <div 
            ref={stepsRef}
            className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${stepsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#25477B]/10 rounded-full text-sm font-semibold text-[#25477B] mb-6">
              <CheckCircle className="w-4 h-4" />
              How It Works
            </span>
            <h2 className="section-title mb-6">
              How to Use the{' '}
              <span className="gradient-text">EMI Calculator</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Follow these simple steps to calculate your Equated Monthly Installment (EMI)
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: '1', title: 'Enter Loan Amount', desc: 'Input the principal loan amount you wish to borrow. You can use the slider or type directly in the field.' },
              { step: '2', title: 'Set Interest Rate', desc: 'Enter the annual interest rate offered by your lender. This will be converted to monthly rate automatically.' },
              { step: '3', title: 'Choose Tenure', desc: 'Select your preferred loan duration in years or months. Longer tenure means lower EMI but higher total interest.' },
            ].map((item, index) => (
              <div 
                key={index}
                className={`text-center transition-all duration-700 ${stepsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#25477B] to-[#2C78B7] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#25477B]/20">
                  <span className="text-3xl font-bold text-white">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-[#1F2937] mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-[#F7F9FC] relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#2C78B7]/5 to-transparent rounded-full blur-3xl" />
        
        <div className="container-custom section-padding relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Formula */}
            <div ref={heroRef}>
              <div className={`transition-all duration-700 ${heroVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm font-semibold text-[#25477B] shadow-sm mb-6">
                  <Info className="w-4 h-4" />
                  The Formula
                </span>
                <h2 className="section-title mb-6">
                  Understanding the{' '}
                  <span className="gradient-text">EMI Formula</span>
                </h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  EMI (Equated Monthly Installment) is calculated using a standard mathematical 
                  formula that takes into account the principal amount, interest rate, and loan tenure.
                </p>
              </div>

              <div className={`bg-white rounded-2xl p-8 card-shadow transition-all duration-700 delay-200 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="bg-gradient-to-r from-[#25477B]/5 to-[#2C78B7]/5 rounded-xl p-6 font-mono text-lg text-[#1F2937] mb-6 text-center">
                  EMI = [P × R × (1+R)^N] / [(1+R)^N – 1]
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 bg-[#25477B]/10 rounded-lg flex items-center justify-center font-bold text-[#25477B]">P</span>
                    <span className="text-gray-600">Principal Loan Amount</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 bg-[#25477B]/10 rounded-lg flex items-center justify-center font-bold text-[#25477B]">R</span>
                    <span className="text-gray-600">Monthly Interest Rate (Annual Rate ÷ 12 ÷ 100)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 bg-[#25477B]/10 rounded-lg flex items-center justify-center font-bold text-[#25477B]">N</span>
                    <span className="text-gray-600">Loan Tenure in Months</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Benefits */}
            <div ref={benefitsRef}>
              <div className={`mb-8 transition-all duration-700 ${benefitsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <h3 className="text-2xl font-bold text-[#1F2937] mb-2">
                  Benefits of Using Our EMI Calculator
                </h3>
                <p className="text-gray-600">
                  Discover why thousands of users trust our calculator
                </p>
              </div>

              <div className="space-y-5">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className={`flex gap-5 p-5 bg-white rounded-2xl card-shadow hover:shadow-lg transition-all duration-500 ${
                      benefitsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                    }`}
                    style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-[#25477B]/10 to-[#2C78B7]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-7 h-7 text-[#25477B]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1F2937] text-lg mb-1">
                        {benefit.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {benefit.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Loan Types Section */}
      <section className="bg-white relative overflow-hidden">
        <div className="container-custom section-padding">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#25477B]/10 rounded-full text-sm font-semibold text-[#25477B] mb-6">
              <Sparkles className="w-4 h-4" />
              Loan Types
            </span>
            <h2 className="section-title mb-6">
              Calculate EMI for{' '}
              <span className="gradient-text">Different Loans</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Our EMI calculator works for all types of loans. Here are some common examples:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {loanTypes.map((loan, idx) => (
              <div 
                key={idx} 
                className="bg-gradient-to-br from-[#F7F9FC] to-white rounded-2xl p-6 text-center card-shadow hover:card-shadow-hover transition-all duration-500 border border-gray-100"
              >
                <h3 className="font-bold text-[#1F2937] text-lg mb-3">{loan.name}</h3>
                <div className="space-y-2">
                  <p className="text-sm text-gray-500">
                    <span className="font-semibold text-[#25477B]">{loan.rate}</span> p.a.
                  </p>
                  <p className="text-xs text-gray-400">Tenure: {loan.tenure}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EMICalculatorPage;
