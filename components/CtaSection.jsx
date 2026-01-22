import Link from 'next/link';

export default function CtaSection() {
  return (
    <section className="py-20 md:py-28 bg-white text-center">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
          Ready to Polish Your Threads?
        </h2>
        <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
          Experience the power of AI-driven content refinement. Get started with our early MVP today and transform your social media presence.
        </p>
        <Link href="/mvp" className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 transition duration-300 ease-in-out sm:px-10 sm:py-5 sm:text-lg">
          Get Started
        </Link>
      </div>
    </section>
  );
}
