function Features() {
  return (
    <section className="bg-gray-50 py-24">

      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Why Choose Us
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        {/* Cards */}
        <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:scale-105 transition transform">
          <h3 className="text-xl font-bold mb-3 text-indigo-600">🔐 Secure</h3>
          <p className="text-gray-600">Your data is encrypted and fully protected.</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:scale-105 transition transform">
          <h3 className="text-xl font-bold mb-3 text-purple-600">⚡ Fast</h3>
          <p className="text-gray-600">Optimized performance across all devices.</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:scale-105 transition transform">
          <h3 className="text-xl font-bold mb-3 text-pink-600">✅ Reliable</h3>
          <p className="text-gray-600">Trusted by thousands of users worldwide.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;

