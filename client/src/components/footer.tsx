import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";
import logoImage from "@assets/Untitled_design__1_-removebg-preview_1755947894247.png";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { name: "Home", id: "home" },
    { name: "About Us", id: "about" },
    { name: "Services", id: "services" },
    { name: "Our Clients", id: "clients" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Contact", id: "contact" },
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, color: "bg-blue-500 hover:bg-blue-600", href: "#" },
    { icon: <Twitter className="w-5 h-5" />, color: "bg-blue-400 hover:bg-blue-500", href: "#" },
    { icon: <Linkedin className="w-5 h-5" />, color: "bg-blue-600 hover:bg-blue-700", href: "#" },
    { icon: <Instagram className="w-5 h-5" />, color: "bg-pink-500 hover:bg-pink-600", href: "#" },
  ];

  const contactInfo = [
    {
      icon: <Mail className="w-4 h-4 text-blue-400" />,
      text: "contact@adinspire.com",
    },
    {
      icon: <Phone className="w-4 h-4 text-blue-400" />,
      text: "+1 (555) 123-4567",
    },
    {
      icon: <MapPin className="w-4 h-4 text-blue-400" />,
      text: "123 Marketing Street\nDigital City, DC 12345",
    },
  ];

  return (
    <footer className="py-16 border-t border-gray-300" style={{backgroundColor: '#333333'}} data-testid="footer">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4" data-testid="footer-logo">
              <img 
                src={logoImage} 
                alt="ADINSPIRE Logo" 
                className="w-12 h-12"
              />
              <span className="text-3xl font-bold">
                <span className="text-blue-900">AD</span><span className="text-yellow-500">INSPIRE</span>
              </span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Igniting brands and inspiring growth through innovative digital
              marketing strategies. We transform businesses and help them reach
              their full potential in the digital landscape.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`w-10 h-10 ${social.color} rounded-full flex items-center justify-center transition-colors`}
                  data-testid={`social-link-${index}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-white transition-colors text-left"
                    data-testid={`footer-link-${link.id}`}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact Info</h3>
            <ul className="space-y-3">
              {contactInfo.map((contact, index) => (
                <li key={index} className="flex items-start space-x-3" data-testid={`contact-info-footer-${index}`}>
                  {contact.icon}
                  <span className="text-gray-300 whitespace-pre-line">
                    {contact.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8 text-center">
          <p className="text-gray-300" data-testid="copyright">
            © 2024 ADINSPIRE. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
}
