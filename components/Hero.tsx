import Image from 'next/image'
import heroImage from '../assets/hero.png'

export default function Hero() {
  return (
    <section id="home" className="bg-gradient-to-r from-primary-dark to-primary text-white py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="text-sm font-medium">Premium Stationary Items</span>
            </div> */}

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Quality Products for a{' '}
              <span className="text-accent">Healthy Lifestyle</span>
              {/* <span className="text-accent">Wholesale & Retail</span> */}
            </h1>

            <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed">
              To produce and deliver high-quality, preservative-free value-added food products that promote a healthy lifestyle among consumers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href="#contact" className="btn-secondary text-center">
                Contact Us
              </a>
              <a href="#products" className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 text-center border-2 border-white/30">
                View Products
              </a>
            </div>

            {/* Trust Indicators */}
            {/* <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-white/20 border-2 border-white flex items-center justify-center">
                    <span className="text-sm font-bold">✓</span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/20 border-2 border-white flex items-center justify-center">
                    <span className="text-sm font-bold">✓</span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/20 border-2 border-white flex items-center justify-center">
                    <span className="text-sm font-bold">✓</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold">Trusted Partners</p>
                  <p className="text-xs text-gray-200">500+ Happy Clients</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex text-accent">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <div>
                  <p className="text-sm font-semibold">4.8/5</p>
                  <p className="text-xs text-gray-200">(2.5k Reviews)</p>
                </div>
              </div>
            </div> */}
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 shadow-2xl overflow-hidden">
              <div className="aspect-square relative rounded-xl overflow-hidden">
                <Image
                  src={heroImage}
                  alt="Premium stationary products basket"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
