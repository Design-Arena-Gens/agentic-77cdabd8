import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    business: "Founder, TechStart Solutions",
    content: "LegalStart made forming my LLC incredibly easy. The whole process took less than 10 minutes, and I had my documents within days. Highly recommend!",
    rating: 5,
    image: "SJ",
  },
  {
    name: "Michael Chen",
    business: "CEO, GreenLeaf Consulting",
    content: "The Pro package was perfect for my needs. The custom operating agreement and EIN service saved me so much time. Professional and efficient service.",
    rating: 5,
    image: "MC",
  },
  {
    name: "Emily Rodriguez",
    business: "Owner, Artisan Bakery",
    content: "As a first-time business owner, I had many questions. The support team was incredibly helpful and patient. They made the entire process stress-free.",
    rating: 5,
    image: "ER",
  },
  {
    name: "David Thompson",
    business: "Founder, FitLife Gym",
    content: "I've used LegalStart for three different businesses now. Their registered agent service is reliable, and compliance reminders are invaluable. Excellent value!",
    rating: 5,
    image: "DT",
  },
  {
    name: "Jessica Martinez",
    business: "Director, Hope Foundation",
    content: "Forming our nonprofit was seamless with LegalStart. They handled all the paperwork and helped us get our 501(c)(3) status. Couldn't be happier!",
    rating: 5,
    image: "JM",
  },
  {
    name: "Robert Kim",
    business: "Partner, Summit Ventures",
    content: "The Premium package is worth every penny. The business contract templates and tax consultation have been incredibly useful for our growing company.",
    rating: 5,
    image: "RK",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Trusted by Thousands of Entrepreneurs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what our customers have to say about their experience with LegalStart.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="text-yellow-400 fill-yellow-400"
                    size={18}
                  />
                ))}
              </div>

              <Quote className="text-primary-200 mb-3" size={32} />

              <p className="text-gray-700 mb-6 italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center space-x-3 mt-auto pt-4 border-t border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.image}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.business}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-primary-50 px-6 py-3 rounded-full">
            <Star className="text-yellow-400 fill-yellow-400" size={20} />
            <span className="font-semibold text-gray-900">4.8 out of 5 stars</span>
            <span className="text-gray-600">from 50,000+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}
