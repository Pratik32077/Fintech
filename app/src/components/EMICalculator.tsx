import { useState, useEffect, useCallback } from 'react';
import { Calculator, IndianRupee, Percent, Calendar, Info, TrendingUp } from 'lucide-react';

interface EMICalculatorProps {
  isCompact?: boolean;
}

const EMICalculator = ({ isCompact = false }: EMICalculatorProps) => {
  const [loanAmount, setLoanAmount] = useState<number>(500000);
  const [interestRate, setInterestRate] = useState<number>(10);
  const [loanTenure, setLoanTenure] = useState<number>(5);
  const [tenureType, setTenureType] = useState<'years' | 'months'>('years');
  const [emi, setEmi] = useState<number>(0);
  const [totalInterest, setTotalInterest] = useState<number>(0);
  const [totalAmount, setTotalAmount] = useState<number>(0);

  const calculateEMI = useCallback(() => {
    const P = loanAmount;
    const r = interestRate / 12 / 100;
    const n = tenureType === 'years' ? loanTenure * 12 : loanTenure;

    if (P > 0 && r > 0 && n > 0) {
      const emiValue = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      const totalAmountValue = emiValue * n;
      const totalInterestValue = totalAmountValue - P;

      setEmi(Math.round(emiValue));
      setTotalAmount(Math.round(totalAmountValue));
      setTotalInterest(Math.round(totalInterestValue));
    }
  }, [loanAmount, interestRate, loanTenure, tenureType]);

  useEffect(() => {
    calculateEMI();
  }, [calculateEMI]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const handleLoanAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0;
    setLoanAmount(Math.min(Math.max(value, 0), 100000000));
  };

  const handleInterestRateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value) || 0;
    setInterestRate(Math.min(Math.max(value, 0), 50));
  };

  const handleTenureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0;
    const maxValue = tenureType === 'years' ? 30 : 360;
    setLoanTenure(Math.min(Math.max(value, 0), maxValue));
  };

  return (
    <div className={`bg-white rounded-3xl card-shadow overflow-hidden ${isCompact ? '' : 'lg:flex'}`}>
      {/* Input Section */}
      <div className={`p-8 lg:p-10 ${isCompact ? '' : 'lg:w-3/5'}`}>
        <div className="flex items-center gap-4 mb-8">
          <div className="w-14 h-14 bg-gradient-to-br from-[#25477B]/10 to-[#2C78B7]/10 rounded-2xl flex items-center justify-center">
            <Calculator className="w-7 h-7 text-[#25477B]" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#1F2937]">EMI Calculator</h3>
            <p className="text-gray-500 text-sm">Calculate your monthly EMI instantly</p>
          </div>
        </div>

        <div className="space-y-8">
          {/* Loan Amount */}
          <div>
            <label className="flex items-center justify-between text-sm font-semibold text-gray-700 mb-4">
              <span className="flex items-center gap-2">
                <IndianRupee className="w-4 h-4 text-[#25477B]" />
                Loan Amount
              </span>
              <span className="text-[#25477B] font-bold">{formatCurrency(loanAmount)}</span>
            </label>
            <input
              type="number"
              value={loanAmount}
              onChange={handleLoanAmountChange}
              className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#25477B] focus:border-transparent outline-none transition-all text-lg font-semibold mb-4"
              placeholder="Enter loan amount"
              min="0"
              max="100000000"
            />
            <input
              type="range"
              min="10000"
              max="10000000"
              step="10000"
              value={loanAmount}
              onChange={(e) => setLoanAmount(parseInt(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-2">
              <span>₹10,000</span>
              <span>₹1 Crore</span>
            </div>
          </div>

          {/* Interest Rate */}
          <div>
            <label className="flex items-center justify-between text-sm font-semibold text-gray-700 mb-4">
              <span className="flex items-center gap-2">
                <Percent className="w-4 h-4 text-[#25477B]" />
                Interest Rate (per annum)
              </span>
              <span className="text-[#25477B] font-bold">{interestRate}%</span>
            </label>
            <input
              type="number"
              value={interestRate}
              onChange={handleInterestRateChange}
              className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#25477B] focus:border-transparent outline-none transition-all text-lg font-semibold mb-4"
              placeholder="Enter interest rate"
              min="0"
              max="50"
              step="0.1"
            />
            <input
              type="range"
              min="1"
              max="30"
              step="0.1"
              value={interestRate}
              onChange={(e) => setInterestRate(parseFloat(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-2">
              <span>1%</span>
              <span>30%</span>
            </div>
          </div>

          {/* Loan Tenure */}
          <div>
            <label className="flex items-center justify-between text-sm font-semibold text-gray-700 mb-4">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#25477B]" />
                Loan Tenure
              </span>
              <span className="text-[#25477B] font-bold">
                {loanTenure} {tenureType === 'years' ? 'Years' : 'Months'}
              </span>
            </label>
            <div className="flex gap-4 items-center mb-4">
              <input
                type="number"
                value={loanTenure}
                onChange={handleTenureChange}
                className="flex-1 px-5 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#25477B] focus:border-transparent outline-none transition-all text-lg font-semibold"
                placeholder="Enter tenure"
                min="1"
                max={tenureType === 'years' ? 30 : 360}
              />
              <div className="flex bg-gray-100 rounded-xl p-1.5">
                <button
                  onClick={() => {
                    setTenureType('years');
                    setLoanTenure(Math.min(loanTenure, 30));
                  }}
                  className={`px-5 py-3 rounded-lg text-sm font-semibold transition-all ${
                    tenureType === 'years'
                      ? 'bg-white text-[#25477B] shadow-md'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  Years
                </button>
                <button
                  onClick={() => {
                    setTenureType('months');
                    setLoanTenure(Math.min(loanTenure * 12, 360));
                  }}
                  className={`px-5 py-3 rounded-lg text-sm font-semibold transition-all ${
                    tenureType === 'months'
                      ? 'bg-white text-[#25477B] shadow-md'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  Months
                </button>
              </div>
            </div>
            <input
              type="range"
              min="1"
              max={tenureType === 'years' ? 30 : 360}
              value={loanTenure}
              onChange={(e) => setLoanTenure(parseInt(e.target.value))}
              className="w-full"
            />
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className={`bg-gradient-to-br from-[#25477B] to-[#2C78B7] p-8 lg:p-10 text-white ${isCompact ? '' : 'lg:w-2/5'} relative overflow-hidden`}>
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
        
        <div className="relative z-10">
          <h4 className="text-lg font-semibold mb-8 flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-5 h-5" />
            </div>
            EMI Breakdown
          </h4>

          <div className="space-y-6">
            {/* Monthly EMI */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <p className="text-white/70 text-sm mb-2">Monthly EMI</p>
              <p className="text-4xl lg:text-5xl font-bold">
                {formatCurrency(emi)}
              </p>
            </div>

            {/* Total Interest */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <p className="text-white/70 text-sm mb-2">Total Interest Payable</p>
              <p className="text-2xl lg:text-3xl font-bold">
                {formatCurrency(totalInterest)}
              </p>
            </div>

            {/* Total Amount */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <p className="text-white/70 text-sm mb-2">Total Amount Payable</p>
              <p className="text-2xl lg:text-3xl font-bold">
                {formatCurrency(totalAmount)}
              </p>
            </div>
          </div>

          {/* Formula Note */}
          <div className="mt-8 pt-6 border-t border-white/20">
            <p className="text-xs text-white/60 flex items-center gap-2">
              <Info className="w-4 h-4" />
              <span>Formula: EMI = [P × R × (1+R)^N] / [(1+R)^N – 1]</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EMICalculator;
