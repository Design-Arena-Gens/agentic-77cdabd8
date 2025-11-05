import { Shield, Clock, Users, HeadphonesIcon, Award, Lock } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "100% Satisfaction Guarantee",
    description: "If you're not completely satisfied, we'll refund your service fees within 60 days.",
  },
  {
    icon: Clock,
    title: "Fast Processing",
    description: "Same-day processing available. Most filings completed within 1-3 business days.",
  },
  {
    icon: Users,
    title: "Expert Support",
    description: "Dedicated support team with business formation experts available to help you.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Customer Service",
    description: "Get help whenever you need it with our round-the-clock customer support.",
  },
  {
    icon: Award,
    title: "15+ Years Experience",
    description: "Over 500,000 businesses formed with our proven, reliable service.",
  },
  {
    icon: Lock,
    title: "Secure & Confidential",
    description: "Bank-level encryption protects your sensitive business information.",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose LegalStart?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join hundreds of thousands of entrepreneurs who trust us to help them start and grow their businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 rounded-xl hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Icon className="text-primary-600" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
