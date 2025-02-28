import { whyChooseUsData } from "@/data/whyChooseUsData";

const WhyChooseUs = () => {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-400">
          Why Choose Mo Creatives?
        </h2>
        <p className="text-gray-300 mt-2">
          We bring strategic solutions to help your business thrive.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mt-12 max-w-5xl mx-auto">
        {whyChooseUsData.map((feature, index) => (
          <div
            key={index}
            className="flex items-start space-x-4 p-4 border border-gray-700 rounded-lg shadow-sm shadow-red-600"
          >
            <feature.icon className={`w-10 h-10 ${feature.color}`} />
            <div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
