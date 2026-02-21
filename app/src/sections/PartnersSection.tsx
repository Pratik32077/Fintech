import { Building2 } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const partners = [
  { name: 'HDFC Bank', logo: '/HDFC.png' },
  { name: 'ICICI Bank', logo: '/icici.png' },
  { name: 'SBI', logo: '/sbi.png' },
  { name: 'Axis Bank', logo: '/axis-bank-logo.webp' },
  { name: 'Kotak Bank', logo: '/Kotak.png' },
  { name: 'Yes Bank', logo: '/Yes.png' },
  { name: 'IndusInd Bank', logo: '/0128254f4655e5936c8726883f71a212.jpg' },
  { name: 'Federal Bank', logo: '/images.png' },
  { name: 'IDFC First', logo: '/IDFC_First_Bank_logo.jpg' },
  { name: 'Bandhan Bank', logo: '/Bandhan-Bank-Logo.png' },
];

const PartnersSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation({ threshold: 0.2 });
  // Duplicate partners for seamless loop
  const allPartners = [...partners, ...partners];

  return (
    <section className="bg-white relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F7F9FC]/50 to-white" />

      <div className="container-custom pt-20 pb-8 relative z-10">
        {/* Section Header */}
        <div
          ref={titleRef}
          className={`text-center max-w-3xl mx-auto mb-12 transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#25477B]/10 rounded-full text-sm font-semibold text-[#25477B] mb-6">
            <Building2 className="w-4 h-4" />
            Our Network
          </span>
          <h2 className="section-title mb-6">
            Our Banking{' '}
            <span className="gradient-text">Partners</span>
          </h2>
          <p className="section-subtitle mx-auto">
            We collaborate with leading banks and financial institutions to bring you
            the best loan options and competitive interest rates.
          </p>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="relative pb-20 overflow-hidden">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 lg:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 lg:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Scrolling Track */}
        <div className="flex animate-scroll-loop">
          {allPartners.map((partner, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-4"
            >
              <div className="w-44 h-28 bg-white rounded-2xl card-shadow hover:card-shadow-hover transition-all duration-500 flex items-center justify-center border border-gray-100 group cursor-pointer">
                <div className="text-center">
                  <div className="w-14 h-14 mx-auto mb-2 bg-gradient-to-br from-[#25477B]/10 to-[#2C78B7]/10 rounded-xl flex items-center justify-center group-hover:from-[#25477B] group-hover:to-[#2C78B7] transition-all duration-500">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-h-10 object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <p className="text-xs font-semibold text-gray-600 group-hover:text-[#25477B] transition-colors">
                    {partner.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
