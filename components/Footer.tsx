import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">LS</span>
              </div>
              <span className="text-2xl font-bold text-white">LegalStart</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              Empowering entrepreneurs to start and grow their businesses with confidence. Professional business formation services since 2008.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-primary-400 transition-colors">LLC Formation</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Corporation Formation</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Nonprofit Formation</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Registered Agent</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Compliance Services</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Business Banking</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-primary-400 transition-colors">Business Guide</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">State Requirements</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Reviews</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-primary-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Partners</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Affiliates</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Press</a></li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start space-x-3">
              <Phone className="text-primary-400 mt-1" size={20} />
              <div>
                <div className="text-white font-semibold mb-1">Call Us</div>
                <div className="text-gray-400">1-800-123-4567</div>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Mail className="text-primary-400 mt-1" size={20} />
              <div>
                <div className="text-white font-semibold mb-1">Email Us</div>
                <div className="text-gray-400">support@legalstart.com</div>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <MapPin className="text-primary-400 mt-1" size={20} />
              <div>
                <div className="text-white font-semibold mb-1">Visit Us</div>
                <div className="text-gray-400">123 Business Ave, Suite 100<br />Austin, TX 78701</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 LegalStart. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Cookie Policy</a>
            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
