import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Business?
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-primary-100">
            Join over 500,000 entrepreneurs who have successfully launched their businesses with LegalStart. Get started in minutes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-200 shadow-xl hover:shadow-2xl flex items-center space-x-2">
              <span>Start Your Business Today</span>
              <ArrowRight size={20} />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-200">
              Talk to an Expert
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-primary-100">
            <div className="flex items-center space-x-2">
              <CheckCircle2 size={20} />
              <span>Free registered agent</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 size={20} />
              <span>100% satisfaction guarantee</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 size={20} />
              <span>Expert support included</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
