import aboutImg from '../assets/images/about.png';

function About() {
  return (
    <section className="bg-gradient-to-r from-pink-100 to-indigo-100 py-24">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">

        {/* Text */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800">
            About Our Solution
          </h2>

          <p className="text-gray-700 text-lg md:text-xl">
            We provide secure, reliable, and user-friendly mobile privacy solutions.
            Our team ensures that your data remains protected at all times.
          </p>

          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li className="font-semibold">Fast and reliable service</li>
            <li className="font-semibold">Data protection & privacy</li>
            <li className="font-semibold">Modern and intuitive design</li>
          </ul>

          <button className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition shadow-lg">
            Learn More
          </button>
        </div>

        {/* Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src={aboutImg}
            alt="About illustration"
            className="w-full max-w-md rounded-xl shadow-2xl hover:scale-95 transition-transform"
          />
        </div>

      </div>
    </section>
  );
}

export default About;
