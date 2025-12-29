function Insights() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12">
        Latest Insights
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        {["Blog 1", "Blog 2", "Blog 3"].map((blog, i) => (
          <div key={i} className="border rounded-lg p-6 hover:shadow-lg transition">
            <h3 className="font-semibold text-lg mb-2">{blog}</h3>
            <p className="text-gray-600">
              Discover tips and updates for better privacy.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Insights;

