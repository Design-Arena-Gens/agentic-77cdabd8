import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "0",
    description: "Perfect for getting started quickly",
    features: [
      "Business name search",
      "Preparation & filing of Articles",
      "Unlimited business name searches",
      "Registered Agent (1st year free)",
      "Basic operating agreement template",
      "Email support",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    price: "149",
    description: "Most popular for serious entrepreneurs",
    features: [
      "Everything in Starter, plus:",
      "EIN/Tax ID number",
      "Custom operating agreement",
      "Banking resolution",
      "Registered Agent (1st year free)",
      "Expedited filing",
      "Phone & email support",
      "Compliance calendar",
    ],
    cta: "Start Pro",
    popular: true,
  },
  {
    name: "Premium",
    price: "349",
    description: "Complete business protection & support",
    features: [
      "Everything in Pro, plus:",
      "Express filing service",
      "Business website domain",
      "Business contract templates",
      "Priority customer support",
      "Business tax consultation",
      "Registered Agent (1st year free)",
      "Lifetime company alerts",
      "Business credit & financing assistance",
    ],
    cta: "Start Premium",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the package that best fits your needs. All plans include state filing fees.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`card relative ${
                plan.popular
                  ? "border-2 border-primary-600 shadow-2xl scale-105"
                  : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star size={14} className="fill-white" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold text-gray-900">
                    ${plan.price}
                  </span>
                  <span className="text-gray-600 ml-2">+ state fees</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <Check
                      className="text-green-600 flex-shrink-0 mt-0.5"
                      size={20}
                    />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 ${
                  plan.popular
                    ? "bg-primary-600 text-white hover:bg-primary-700 shadow-lg"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Need help choosing? <a href="#" className="text-primary-600 font-semibold hover:underline">Compare all packages</a>
          </p>
          <p className="text-sm text-gray-500">
            State filing fees vary by state and entity type ($50-$500). Processing times vary by state.
          </p>
        </div>
      </div>
    </section>
  );
}
