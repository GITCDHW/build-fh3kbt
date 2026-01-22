import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="py-20 md:py-32 bg-white text-center">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
          Thread Polish AI
        </h1>
        <p className="text-xl sm:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto">
          Transform your raw thoughts into engaging, ready-to-post social media threads, effortlessly.
        </p>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          Designed for content creators and social media managers, Thread Polish AI refines your ideas, saving you time and boosting your online presence.
        </p>
        <Link href="/mvp" className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 transition duration-300 ease-in-out sm:px-10 sm:py-5 sm:text-lg">
          Try the MVP Now
        </Link>
      </div>
    </section>
  );
}
