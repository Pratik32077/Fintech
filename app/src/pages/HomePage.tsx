import HeroSection from '../sections/HeroSection';
import TrustStatsSection from '../sections/TrustStatsSection';
import LoanSolutionsSection from '../sections/LoanSolutionsSection';
import WhyChooseUsSection from '../sections/WhyChooseUsSection';
import HowItWorksSection from '../sections/HowItWorksSection';
import EMICalculatorSection from '../sections/EMICalculatorSection';
import TestimonialsSection from '../sections/TestimonialsSection';
import ApplicationFormSection from '../sections/ApplicationFormSection';
import PartnersSection from '../sections/PartnersSection';

const HomePage = () => {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <TrustStatsSection />
      <LoanSolutionsSection />
      <WhyChooseUsSection />
      <HowItWorksSection />
      <EMICalculatorSection />
      <TestimonialsSection />
      <ApplicationFormSection />
      <PartnersSection />
    </div>
  );
};

export default HomePage;
