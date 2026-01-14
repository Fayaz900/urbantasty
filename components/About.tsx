export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">About Urban Tasty</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Your trusted partner for premium quality stationary items. We specialize in authentic, 
            natural products sourced with care and delivered with excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-primary mb-6">Our Story</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Urban Tasty was founded with a vision to provide high-quality stationary items 
              to businesses and individuals who value authenticity and purity. We understand 
              that quality matters, whether you're buying in bulk for your business or looking 
              for the best products for personal use.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Our commitment to excellence drives us to source only the finest ingredients 
              and maintain strict quality standards throughout our supply chain. From banana 
              powder to coconut oil, every product in our catalog is carefully selected and 
              tested to meet our high standards.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-semibold">Premium Quality</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-semibold">Authentic Products</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-semibold">Trusted Source</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-gray-600">Products</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-gray-600">Quality Assured</div>
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
            <h3 className="text-xl font-bold mb-3">Quality First</h3>
            <p className="text-gray-600">
              We never compromise on quality. Every product undergoes rigorous testing to ensure it meets our standards.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Competitive Pricing</h3>
            <p className="text-gray-600">
              Best prices for both wholesale and retail customers. Volume discounts available for bulk orders.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Fast Delivery</h3>
            <p className="text-gray-600">
              Quick and reliable delivery service. We ensure your orders reach you on time, every time.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
