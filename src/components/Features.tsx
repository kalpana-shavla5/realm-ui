function Features() {
  return (
    <section className="py-20 bg-white">
      <h2 className="text-4xl font-bold text-center mb-12">
        Why Choose Us
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        <div className="p-6 border rounded-lg text-center shadow-sm">
          <h3 className="text-2xl font-bold mb-3">Secure</h3>
          <p>Your data is encrypted and protected.</p>
        </div>

        <div className="p-6 border rounded-lg text-center shadow-sm">
          <h3 className="text-2xl font-bold mb-3">Fast</h3>
          <p>Optimized performance across all devices.</p>
        </div>

        <div className="p-6 border rounded-lg text-center shadow-sm">
          <h3 className="text-2xl font-bold mb-3">Reliable</h3>
          <p>Trusted by thousands of users worldwide.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;

