import { FileCheck, Send, CheckCircle2, Rocket } from "lucide-react";

const steps = [
  {
    icon: FileCheck,
    title: "Choose Your Business Type",
    description: "Select LLC, Corporation, or Nonprofit and pick the package that's right for you.",
    step: "01",
  },
  {
    icon: Send,
    title: "Complete Simple Form",
    description: "Answer a few questions about your business. Takes just 5-10 minutes to complete.",
    step: "02",
  },
  {
    icon: CheckCircle2,
    title: "We File Your Paperwork",
    description: "Our experts review and file all necessary documents with the state on your behalf.",
    step: "03",
  },
  {
    icon: Rocket,
    title: "Start Your Business",
    description: "Get your approved documents and official formation certificate. You're ready to go!",
    step: "04",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-gray-50 to-primary-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Starting your business is simple. Follow these four easy steps and you'll be officially formed in no time.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  <div className="card text-center h-full">
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                      {step.step}
                    </div>
                    <div className="mb-6 flex justify-center">
                      <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center">
                        <Icon className="text-primary-600" size={36} />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">
                      {step.description}
                    </p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary-300 transform -translate-y-1/2" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="btn-primary text-lg">
            Get Started Now
          </button>
          <p className="mt-4 text-gray-600">
            Most formations completed within 1-3 business days
          </p>
        </div>
      </div>
    </section>
  );
}
