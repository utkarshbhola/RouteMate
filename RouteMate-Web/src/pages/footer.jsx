import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-20 mt-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Section 1: Links */}
        <div>
          <h3 className="font-bold text-lg mb-4">RouteMate</h3>
          <ul className="space-y-2">
            <li><a href="/who-we-are" className="hover:underline">Who we are</a></li>
            <li><a href="/blog" className="hover:underline">Blog</a></li>
            <li><a href="/report-fraud" className="hover:underline">Report Fraud</a></li>
            <li><a href="/contact" className="hover:underline">Contact Us</a></li>
            <li><a href="/partner" className="hover:underline">Partner with us</a></li>
          </ul>
        </div>

        {/* Section 2: Legal */}
        <div>
          <h3 className="font-bold text-lg mb-4">Legal</h3>
          <ul className="space-y-2">
            <li><a href="/privacy" className="hover:underline">Privacy</a></li>
            <li><a href="/security" className="hover:underline">Security</a></li>
            <li><a href="/terms" className="hover:underline">Terms</a></li>
          </ul>
        </div>

        {/* Section 3: Social */}
        <div>
          <h3 className="font-bold text-lg mb-4">Follow us</h3>
          <div className="flex gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400"><FaFacebook size={24} /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400"><FaTwitter size={24} /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400"><FaInstagram size={24} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400"><FaLinkedin size={24} /></a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} RouteMate. All rights reserved.
      </div>
    </footer>
  );
}
