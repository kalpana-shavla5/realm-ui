import aboutImg from '../assets/images/about.png';

function About() {
  return (
    <section className="py-20 bg-gray-100 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <img
        src={aboutImg}
        alt="About"
        className="rounded-lg shadow-lg mx-auto"
      />

        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About Us
          </h2>
          <p className="text-lg">
            We focus on privacy-first solutions that protect your digital life
            and build trust through technology.
          </p>
        </div>

      </div>
    </section>
  );
}

export default About;
