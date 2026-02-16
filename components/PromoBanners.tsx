import Image from 'next/image'
import premiumImage from '../assets/premium.png'
import bestPricesImage from '../assets/best_prices.png'

export default function PromoBanners() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Banner */}
          <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="relative z-10">
                {/* <p className="text-secondary font-semibold mb-2">Premium Quality</p> */}
                <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  Fresh & Authentic Products
                </h3>
                <p className="text-gray-600 mb-6">
                  Every product is carefully sourced and quality-tested to ensure you receive 
                  only the best. Experience the difference that quality makes.
                </p>
                <a href="#products" className="btn-primary inline-block">
                  Explore Products
                </a>
              </div>
              <div className="relative aspect-square rounded-xl overflow-hidden">
                <Image
                  src={premiumImage}
                  alt="Fresh authentic products"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl"></div>
          </div>

          {/* Right Banner */}
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="relative z-10">
                {/* <p className="text-primary font-semibold mb-2">Wholesale & Retail</p> */}
                <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  Best Prices for Everyone
                </h3>
                <p className="text-gray-600 mb-6">
                  Whether you're a business looking for bulk orders or an individual seeking 
                  quality products, we have competitive pricing for all.
                </p>
                <a href="#contact" className="btn-secondary inline-block">
                  Get Quote
                </a>
              </div>
              <div className="relative aspect-square rounded-xl overflow-hidden">
                <Image
                  src={bestPricesImage}
                  alt="Best prices for wholesale and retail"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
          </div>
        </div>

        {/* Additional Promo */}
        {/* <div className="mt-8 bg-gradient-to-r from-primary-dark to-primary text-white rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-accent font-semibold mb-2">Special Offer</p>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Exclusive Brands 30% Off
              </h3>
              <p className="text-gray-100 mb-6">
                Limited time offer on selected premium products. Don't miss out on these 
                amazing deals for wholesale customers.
              </p>
              <a href="#contact" className="bg-white text-primary hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors inline-block">
                Shop Now
              </a>
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1604719312566-8912e3169978?w=600&h=600&fit=crop&q=80"
                alt="Special offer products"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl"></div>
        </div> */}
      </div>
    </section>
  )
}

