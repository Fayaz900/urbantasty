import Products from "./Products";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">About Urban Tasty</h2>
        </div>

        {/* Introduction Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h3 className="text-3xl font-bold text-primary mb-6 text-center">Introduction</h3>
            <p className="text-gray-700 leading-relaxed text-lg text-center">
              Urban Tasty is a value-added food products company established in 2022. The company focuses on 
              producing completely natural food items without the use of chemicals or preservatives. All products 
              are made using traditional methods and natural ingredients, ensuring both quality and health benefits 
              for consumers.
            </p>
          </div>
        </div>

        <Products/>

        {/* Vision and Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl shadow-lg p-8 md:p-10 text-white">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold">Vision</h3>
            </div>
            <p className="text-lg leading-relaxed text-white/95">
              To become a trusted brand in natural and chemical-free food products.
            </p>
          </div>

          <div className="bg-gradient-to-br from-secondary to-secondary-dark rounded-2xl shadow-lg p-8 md:p-10 text-white">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold">Mission</h3>
            </div>
            <p className="text-lg leading-relaxed text-white/95">
              To produce and deliver high-quality, preservative-free value-added food products that promote 
              a healthy lifestyle among consumers.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-primary mb-6">Why Choose Us</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              At Urban Tasty, we are committed to providing you with the finest natural food products. 
              Our traditional methods and natural ingredients ensure that every product maintains its 
              nutritional value and authentic taste.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              We understand the importance of chemical-free, preservative-free food in maintaining a 
              healthy lifestyle. That's why we go the extra mile to ensure all our products meet the 
              highest standards of quality and purity.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-semibold">100% Natural</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-semibold">No Preservatives</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-semibold">Traditional Methods</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {/* <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div> */}
            {/* <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <div className="text-gray-600">Products</div>
            </div> */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-primary mb-2">2022</div>
              <div className="text-gray-600">Established</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-gray-600">Natural Products</div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">100% Natural</h3>
            <p className="text-gray-600">
              All our products are made using completely natural ingredients without any chemicals or preservatives.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Traditional Methods</h3>
            <p className="text-gray-600">
              We use time-tested traditional methods to preserve the authentic taste and nutritional value of our products.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Health Benefits</h3>
            <p className="text-gray-600">
              Our products promote a healthy lifestyle with their natural composition and nutritional benefits.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
