import { Building2, Shield, FileText, Users, Briefcase, Scale, Calculator, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "LLC Formation",
    description: "Start a Limited Liability Company and protect your personal assets while enjoying tax flexibility.",
    price: "from $0 + state fees",
  },
  {
    icon: Briefcase,
    title: "Corporation Formation",
    description: "Form a C-Corp or S-Corp to raise capital, offer stock options, and scale your business.",
    price: "from $0 + state fees",
  },
  {
    icon: Users,
    title: "Nonprofit Formation",
    description: "Establish a 501(c)(3) nonprofit organization and apply for tax-exempt status.",
    price: "from $99 + state fees",
  },
  {
    icon: Shield,
    title: "Registered Agent",
    description: "Professional registered agent service in all 50 states to receive important legal documents.",
    price: "from $125/year",
  },
  {
    icon: FileText,
    title: "Operating Agreement",
    description: "Customized operating agreements and bylaws tailored to your business needs.",
    price: "from $99",
  },
  {
    icon: Scale,
    title: "Compliance Services",
    description: "Annual report filing, state compliance, and ongoing business maintenance services.",
    price: "from $99/year",
  },
  {
    icon: Calculator,
    title: "EIN Application",
    description: "Get your Employer Identification Number (EIN) from the IRS quickly and easily.",
    price: "from $49",
  },
  {
    icon: TrendingUp,
    title: "Business Banking",
    description: "Open a business bank account and separate your personal and business finances.",
    price: "Partners available",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Everything You Need to Start & Run Your Business
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From formation to compliance, we provide comprehensive business services to help you succeed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="card hover:border-primary-300 transition-all duration-300 group"
              >
                <div className="mb-4">
                  <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-600 transition-colors duration-300">
                    <Icon className="text-primary-600 group-hover:text-white transition-colors duration-300" size={28} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  {service.description}
                </p>
                <div className="text-primary-600 font-semibold text-sm">
                  {service.price}
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button className="btn-primary text-lg">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
}
