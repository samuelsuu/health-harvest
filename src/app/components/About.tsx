import Image from 'next/image';
import { Leaf, Users, HeartPulse, ShieldCheck } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 sm:gap-12">
          
          {/* Text Content */}
          <div className="md:w-1/2 w-full">
            <h2 className="text-3xl sm:text-4xl font-bold text-green-700 mb-4 sm:mb-6">
              About Health Harvest
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
              <strong>Health Harvest</strong> is a trusted advocate of natural wellness. We specialize in herbal treatments, organic food supplements, and clean nutrition to promote long-term health.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8">
              Our mission is to serve all individuals — especially seniors and those seeking holistic healing — with nature-powered solutions that restore balance and vitality.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[{
                icon: <Leaf className="text-green-600 w-6 h-6" />,
                title: '100% Natural',
                desc: 'Herbal & plant-based formulas'
              },
              {
                icon: <Users className="text-green-600 w-6 h-6" />,
                title: '5,000+ Served',
                desc: 'Happy customers and counting'
              },
              {
                icon: <HeartPulse className="text-green-600 w-6 h-6" />,
                title: 'Wellness Focused',
                desc: 'Tailored for total body health'
              },
              {
                icon: <ShieldCheck className="text-green-600 w-6 h-6" />,
                title: 'Trusted & Safe',
                desc: 'Backed by nature and science'
              }].map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="md:w-1/2 w-full">
            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/herb2.jpg"
                alt="Herbal wellness display"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
