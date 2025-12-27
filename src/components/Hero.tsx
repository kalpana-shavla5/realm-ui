import heroImg from '../assets/images/hero.png';

function Hero() {
  return (
    <section className="bg-yellow-400 min-h-screen flex items-center justify-center px-4">
      <div className="max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-black">
            Your Mobile Privacy
          </h1>
          <p className="text-lg md:text-xl mb-6 text-black">
            Protect your data and stay secure with our trusted solution.
          </p>
          <button className="bg-black text-white px-6 md:px-8 py-3 rounded-lg text-lg hover:bg-gray-800">
            Get Started
          </button>
        </div>

        <img
          src={heroImg}
          alt="Hero"
          className="w-full max-w-md mx-auto rounded-lg shadow-lg"
        />

      </div>
    </section>
  );
}

export default Hero;
