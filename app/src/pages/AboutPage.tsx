import { Target, Eye, Heart, Award, CheckCircle, Shield, Users, TrendingUp } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const coreValues = [
  {
    icon: Heart,
    title: 'Trust & Transparency',
    description: 'We believe in building lasting relationships through honest communication and transparent processes.',
    color: 'from-rose-400 to-rose-600',
    bgColor: 'bg-rose-50',
    iconColor: 'text-rose-600',
  },
  {
    icon: Target,
    title: 'Customer Commitment',
    description: 'Your success is our priority. We go above and beyond to ensure your financial goals are met.',
    color: 'from-blue-400 to-blue-600',
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600',
  },
  {
    icon: Award,
    title: 'Fast Processing',
    description: 'Time is money. Our streamlined processes ensure quick approvals and fast disbursals.',
    color: 'from-green-400 to-green-600',
    bgColor: 'bg-green-50',
    iconColor: 'text-green-600',
  },
  {
    icon: CheckCircle,
    title: 'Professional Guidance',
    description: 'Our expert team provides personalized advice to help you make informed financial decisions.',
    color: 'from-violet-400 to-violet-600',
    bgColor: 'bg-violet-50',
    iconColor: 'text-violet-600',
  },
];

const teamMembers = [
  {
    name: 'Salman Khan',
    role: 'CFO',
    description: '9+ Years Experience – HDFC Bank & Axis Bank – Business Loan Specialist',
    image: 'Salman.jpg',
    social: {
      facebook: "https://facebook.com/",
      linkedin: "https://www.linkedin.com/in/salman-khan-2113443b3/",
    }
  },
  {
    name: 'Amit Tiwari',
    role: 'FOUNDER & CEO',
    description: '8+ Years Experience HDFC Bank, ICICI Bank & Axis Finance – Business Loan & Secured Lending',
    image: 'Amit.jpeg',
    social: {
      facebook: "https://facebook.com/",
      linkedin: "https://www.linkedin.com/in/fin4-capital-solution-87115a3b3/",
    }
  },
  {
    name: 'Shriniwas Maitri',
    role: 'MD',
    description: '10+ Years Experience Formerly – HDFC Bank (Business Loan Division)',
    image: 'Shriniwas Maitri.jpg',
    social: {
      facebook: "https://facebook.com/",
      linkedin: "https://www.linkedin.com/in/fin4-capital-solution-87115a3b3/",
    }
  },
];

const AboutPage = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: storyRef, isVisible: storyVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: teamRef, isVisible: teamVisible } = useScrollAnimation({ threshold: 0.1 });

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
              <Users className="w-4 h-4" />
              About Us
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              About Fin4 Capital Solution
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Your trusted financial partner committed to helping individuals and
              businesses achieve their dreams through innovative loan solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="bg-white relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-[#25477B]/5 to-transparent rounded-full blur-3xl" />

        <div className="container-custom section-padding relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Left - Story Content */}
            <div ref={storyRef}>
              <div className={`transition-all duration-700 ${storyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#25477B]/10 rounded-full text-sm font-semibold text-[#25477B] mb-6">
                  <TrendingUp className="w-4 h-4" />
                  Our Story
                </span>
                <h2 className="section-title mb-8">
                  Developing A Business With{' '}
                  <span className="gradient-text">Authentic Integrity</span>
                </h2>
              </div>

              <div className={`space-y-5 text-gray-600 leading-relaxed transition-all duration-700 delay-200 ${storyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <p>
                  At <strong className="text-[#1F2937]">Fin4 Capital Solution</strong>, we believe financial freedom should be accessible to everyone. Founded in 2024, we’ve grown into a trusted partner for individuals and businesses across India, offering tailored loan solutions that bridge aspirations with opportunities.
                </p>

                <p>
                  With a customer-first approach, cutting-edge technology, and a team of seasoned financial experts, we simplify borrowing so you can focus on what truly matters—achieving your goals.
                </p>

                <p>
                  We are committed to delivering transparency, speed, and personalized support at every step, ensuring your financial journey is smooth, secure, and successful.
                </p>
              </div>

              {/* Stats */}
              <div className={`grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-gray-100 transition-all duration-700 delay-300 ${storyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div>
                  <p className="text-4xl font-bold gradient-text mb-1">15+</p>
                  <p className="text-sm text-gray-500">Years Experience</p>
                </div>
                <div>
                  <p className="text-4xl font-bold gradient-text mb-1">1000+</p>
                  <p className="text-sm text-gray-500">Happy Customers</p>
                </div>
                <div>
                  <p className="text-4xl font-bold gradient-text mb-1">50+</p>
                  <p className="text-sm text-gray-500">Banking Partners</p>
                </div>
              </div>
            </div>

            {/* Right - Mission & Vision */}
            <div ref={heroRef} className="space-y-6">
              {/* Mission Card */}
              <div className={`bg-gradient-to-br from-[#25477B] to-[#2C78B7] rounded-3xl p-8 lg:p-10 text-white relative overflow-hidden transition-all duration-700 ${heroVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                    <Target className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold">Our Mission</h3>
                </div>
                <p className="text-white/80 leading-relaxed">
                  Our mission is to break down barriers to financial access by delivering fast,
                  transparent, and flexible loan solutions. We strive to democratize credit,
                  innovate constantly, and build trust through ethical practices.
                </p>
              </div>

              {/* Vision Card */}
              <div className={`bg-[#F7F9FC] rounded-3xl p-8 lg:p-10 border border-gray-100 transition-all duration-700 delay-200 ${heroVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#25477B]/10 to-[#2C78B7]/10 rounded-xl flex items-center justify-center">
                    <Eye className="w-7 h-7 text-[#25477B]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1F2937]">Our Vision</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  To become India&apos;s most trusted financial partner, known for innovation,
                  integrity, and exceptional customer service, while contributing to the
                  financial inclusion of millions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-[#F7F9FC] relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#25477B]/5 to-transparent rounded-full blur-3xl" />

        <div className="container-custom section-padding relative z-10">
          {/* Section Header */}
          <div
            ref={valuesRef}
            className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${valuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm font-semibold text-[#25477B] shadow-sm mb-6">
              <Award className="w-4 h-4" />
              Our Principles
            </span>
            <h2 className="section-title mb-6">
              Our Core{' '}
              <span className="gradient-text">Values</span>
            </h2>
            <p className="section-subtitle mx-auto">
              These principles guide everything we do, from how we interact with
              customers to how we make business decisions.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className={`group bg-white rounded-2xl p-7 card-shadow hover:card-shadow-hover transition-all duration-500 text-center border border-gray-100/50 ${valuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 ${value.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-500`}>
                  <value.icon className={`w-8 h-8 ${value.iconColor}`} />
                </div>
                <h3 className="text-lg font-bold text-[#1F2937] mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-t from-[#25477B]/5 to-transparent rounded-full blur-3xl" />

        <div className="container-custom section-padding relative z-10">
          {/* Section Header */}
          <div
            ref={teamRef}
            className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${teamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#25477B]/10 rounded-full text-sm font-semibold text-[#25477B] mb-6">
              <Users className="w-4 h-4" />
              Our Team
            </span>
            <h2 className="section-title mb-6">
              Meet Our{' '}
              <span className="gradient-text">Leadership</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Our experienced team of professionals is dedicated to providing
              you with the best financial solutions and service.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`group bg-white rounded-2xl p-8 card-shadow hover:card-shadow-hover transition-all duration-500 text-center border border-gray-100/50 ${teamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Avatar */}
                <div className="w-28 h-28 mx-auto mb-6 rounded-full p-[3px] bg-gradient-to-br from-[#25477B] to-[#2C78B7] shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Info */}
                <h3 className="text-xl font-bold text-[#1F2937] mb-1">
                  {member.name}
                </h3>
                <p className="text-[#25477B] font-semibold text-sm mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.description}
                </p>

                {/* Social Icons */}
                <div className="flex justify-center gap-3 mt-6">
                  {['facebook', 'twitter', 'linkedin'].map((social, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="w-10 h-10 bg-[#F7F9FC] rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-[#25477B] hover:to-[#2C78B7] transition-all duration-300 group/icon"
                      aria-label={social}
                    >
                      <svg className="w-4 h-4 text-gray-500 group-hover/icon:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                        {social === 'facebook' && <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />}
                        {social === 'linkedin' && <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />}
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-[#F7F9FC] relative overflow-hidden">
        <div className="container-custom section-padding">
          <div className="bg-white rounded-3xl p-10 lg:p-14 card-shadow max-w-4xl mx-auto">

            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-[#1F2937] mb-4">
                Certifications & Registrations
              </h2>
              <p className="text-gray-600">
                We are a fully registered and compliant financial institution.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 justify-center place-items-center">
              {[
                { icon: CheckCircle, title: 'ISO 9001:2015', desc: 'Quality Certified' },
                { icon: Shield, title: 'CIBIL Partner', desc: 'Credit Bureau' },
              ].map((cert, idx) => (
                <div key={idx} className="text-center p-4 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#25477B]/10 to-[#2C78B7]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:from-[#25477B] group-hover:to-[#2C78B7] transition-all duration-500">
                    <cert.icon className="w-8 h-8 text-[#25477B] group-hover:text-white transition-colors duration-500" />
                  </div>
                  <p className="font-bold text-[#1F2937]">{cert.title}</p>
                  <p className="text-sm text-gray-500">{cert.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
