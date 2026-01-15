import React from "react";
import { Phone, Mail, MapPin, ChevronUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Us */}
          <div>
            <h4 className="text-black border-b-2 border-teal-600 w-max pb-2 font-semibold text-sm mb-6">
              About Us
            </h4>
            <p className="text-text text-sm leading-relaxed">
              We're Tilia, a team of photographers & videographers. Sed ut
              perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium. Est sale definitiones id. Ut
              quo quem harum munere, eu labore voluptatum mei.
            </p>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-black border-b-2 border-teal-600 w-max pb-2 font-semibold text-sm mb-6">
              Contact Us
            </h4>
            <div className="space-y-3">
              <a
                href="#"
                className="text-teal-600 flex items-center gap-2 transition"
              >
                <MapPin size={18} className="flex-shrink-0" />
                <span className="text-text text-sm">
                  40 Park Ave, Brooklyn, New York
                </span>
              </a>
              <a
                href="tel:18001112222"
                className="text-teal-600 flex items-center gap-2 transition"
              >
                <Phone size={18} className="flex-shrink-0" />
                <span className="text-text text-sm">1-800-111-2222</span>
              </a>
              <a
                href="tel:18001113333"
                className="text-teal-600 flex items-center gap-2 transition"
              >
                <Phone size={18} className="flex-shrink-0" />
                <span className="text-text text-sm">1-800-111-3333</span>
              </a>
              <a
                href="mailto:contact@example.com"
                className="text-teal-600 flex items-center gap-2 transition"
              >
                <Mail size={18} className="flex-shrink-0" />
                <span className="text-text text-sm">contact@example.com</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-black border-b-2 border-teal-600 w-max pb-2 font-semibold text-sm mb-6">
              Quick Links
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="#home"
                className="text-teal-600 hover:text-teal-400 text-sm transition"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-teal-600 hover:text-teal-400 text-sm transition"
              >
                About
              </a>
              <a
                href="#benifits"
                className="text-teal-600 hover:text-teal-400 text-sm transition"
              >
                Benefits
              </a>
              <a
                href="#gallery"
                className="text-teal-600 hover:text-teal-400 text-sm transition"
              >
                Gallery
              </a>
              <a
                href="#contact"
                className="text-teal-600 hover:text-teal-400 text-sm transition"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Follow */}
          <div>
            <h4 className="text-black border-b-2 border-teal-600 w-max pb-2 font-semibold text-sm mb-6">
              Follow
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="#facebook"
                className="text-teal-600 hover:text-teal-400 text-sm transition"
              >
                Facebook
              </a>
              <a
                href="#twitter"
                className="text-teal-600 hover:text-teal-400 text-sm transition"
              >
                Twitter
              </a>
              <a
                href="#instagram"
                className="text-teal-600 hover:text-teal-400 text-sm transition"
              >
                Instagram
              </a>
              <a
                href="#youtube"
                className="text-teal-600 hover:text-teal-400 text-sm transition"
              >
                Youtube
              </a>
              <a
                href="#vimeo"
                className="text-teal-600 hover:text-teal-400 text-sm transition"
              >
                Vimeo
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            &copy; 2024 Tilia Photography. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-gray-400 hover:text-teal-600 text-sm transition"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-teal-600 text-sm transition"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
