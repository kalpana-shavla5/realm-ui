function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-12">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">
        <div>
          <h3 className="font-bold text-xl mb-2">Company</h3>
          <p>Providing secure mobile privacy solutions worldwide.</p>
        </div>
        <div>
          <h3 className="font-bold text-xl mb-2">Links</h3>
          <ul className="space-y-1">
            <li>Home</li>
            <li>Features</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-xl mb-2">Contact</h3>
          <p>Email: support@example.com</p>
          <p>Phone: +91 1234567890</p>
        </div>
      </div>
      <p className="text-center mt-8 text-gray-400">© 2025 Your Company. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
