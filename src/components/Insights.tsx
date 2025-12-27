import React from 'react';

function Insights() {
  return (
    <section className="py-20 bg-white">
      <h2 className="text-4xl font-bold text-center mb-12">Latest Insights</h2>
      <div className="grid md:grid-cols-3 gap-8 px-4">
        <div className="p-6 shadow-lg rounded-lg">
          <h3 className="text-2xl font-bold mb-2">Blog 1</h3>
          <p>Discover tips and tricks for better privacy.</p>
        </div>
        <div className="p-6 shadow-lg rounded-lg">
          <h3 className="text-2xl font-bold mb-2">Blog 2</h3>
          <p>Learn about the latest security updates.</p>
        </div>
        <div className="p-6 shadow-lg rounded-lg">
          <h3 className="text-2xl font-bold mb-2">Blog 3</h3>
          <p>Stay informed with our technology insights.</p>
        </div>
      </div>
    </section>
  );
}

export default Insights;
