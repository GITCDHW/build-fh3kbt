const features = [
  {
    title: "Instant Thread Generation",
    description: "Convert unorganized text into structured, coherent social media threads with a single click. Say goodbye to manual formatting.",
    icon: "✨"
  },
  {
    title: "Professional Polish",
    description: "Elevate your raw ideas into clear, concise, and engaging content. Ensure every post looks professional and captivating.",
    icon: "✍️"
  },
  {
    title: "Time-Saving Automation",
    description: "Automate the tedious task of writing and formatting threads. Free up your valuable time to focus on creative strategy and audience engagement.",
    icon: "⏱️"
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-12">
          How Thread Polish AI Helps You
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="text-5xl mb-6 flex justify-center items-center h-16 w-16 mx-auto rounded-full bg-gray-100">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
