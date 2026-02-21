import { Star, Quote, MessageCircle } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const testimonials = [
  {
    name: 'Rahul Sharma',
    location: 'Mumbai, Maharashtra',
    image: '/testimonial-2.png',
    rating: 5,
    review: 'Fin4 Capital made my dream of owning a home come true. The process was incredibly smooth, and their team guided me at every step. Got my home loan approved within 24 hours! Highly recommended for anyone looking for hassle-free loans.',
  },
  {
    name: 'Priya Patel',
    location: 'Ahmedabad, Gujarat',
    image: '/testimonial-1.png',
    rating: 5,
    review: 'I needed urgent funds for my daughter\'s education, and Fin4 Capital delivered exactly what they promised. The interest rates were competitive, and there were no hidden charges. Their transparency and professionalism are commendable.',
  },
  {
    name: 'Amit Kumar',
    location: 'Delhi NCR',
    image: '/testimonial-3.png',
    rating: 5,
    review: 'As a small business owner, getting a business loan was always challenging until I found Fin4 Capital. They understood my requirements and provided a customized solution that helped me expand my business. Truly a partner in growth!',
  },
];

const TestimonialsSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="bg-[#F7F9FC] relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-b from-[#25477B]/5 to-transparent rounded-full blur-3xl" />
      
      <div className="container-custom section-padding relative z-10">
        {/* Section Header */}
        <div 
          ref={titleRef}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm font-semibold text-[#25477B] shadow-sm mb-6">
            <MessageCircle className="w-4 h-4" />
            Testimonials
          </span>
          <h2 className="section-title mb-6">
            What Our{' '}
            <span className="gradient-text">Customers Say</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Real stories from real people who achieved their financial goals with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div 
          ref={cardsRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`group bg-white rounded-2xl p-8 card-shadow hover:card-shadow-hover transition-all duration-500 flex flex-col h-full border border-gray-100/50 relative overflow-hidden ${
                cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#25477B]/10 to-[#2C78B7]/10 rounded-full flex items-center justify-center">
                  <Quote className="w-5 h-5 text-[#25477B]" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="text-gray-600 leading-relaxed mb-8 flex-grow text-[15px]">
                &ldquo;{testimonial.review}&rdquo;
              </p>

              {/* Customer Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-[#25477B]/10"
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-[#1F2937]">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {testimonial.location}
                  </p>
                </div>
              </div>

              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#25477B]/5 to-[#2C78B7]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
