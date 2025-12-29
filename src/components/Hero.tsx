import heroImg from '../assets/images/hero.png';

function Hero() {
  return (
    <section className="bg-gradient-to-r from-indigo-600 via-yellow-600 to-pink-600 text-white py-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center px-6 gap-12">

        {/* Text */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
            Your Mobile Privacy
          </h1>
          <p className="text-lg md:text-xl text-gray-100 opacity-90">
            Protect your data and stay secure with our trusted solution. Experience fast, reliable, and safe mobile privacy.
          </p>
          <div className="flex gap-4">
            <button className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 transition transform hover:scale-105 shadow-lg">
              Get Started
            </button>
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition transform hover:scale-105 shadow-lg">
              Learn More
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src={heroImg}
            alt="Privacy illustration"
            className="w-full max-w-md rounded-2xl shadow-2xl border border-white/20"
          />

        </div>

      </div>
    </section>
  );
}

export default Hero;
