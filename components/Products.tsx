'use client'

import { useState } from 'react'
import Image from 'next/image'

const products = [
  {
    id: 1,
    name: 'Banana Powder',
    description: 'Premium quality banana powder, rich in nutrients and natural flavor',
    weight: '500gm / 1kg',
    rating: 4.8,
    category: 'Powders',
    image: 'https://images.unsplash.com/photo-1603052875302-d376b7c0638a?w=600&h=600&fit=crop&q=80',
  },
  {
    id: 2,
    name: 'Coconut Oil',
    description: 'Pure, cold-pressed coconut oil, 100% natural and unrefined',
    weight: '500ml / 1L',
    rating: 4.9,
    category: 'Oils',
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=718&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    name: 'Drumstick Powder',
    description: 'Nutritious drumstick powder packed with vitamins and minerals',
    weight: '250gm / 500gm',
    rating: 4.7,
    category: 'Powders',
    image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=600&h=600&fit=crop&q=80',
  },
  {
    id: 4,
    name: 'Jackfruit Puttupodi',
    description: 'Authentic jackfruit puttupodi, traditional and flavorful',
    weight: '200gm / 500gm',
    rating: 4.8,
    category: 'Traditional',
    image: 'https://images.unsplash.com/photo-1603048297172-c925447465c0?w=600&h=600&fit=crop&q=80',
  },
  {
    id: 5,
    name: 'Nannari Syrup',
    description: 'Refreshing nannari syrup, perfect for beverages and desserts',
    weight: '500ml / 1L',
    rating: 4.6,
    category: 'Beverages',
    image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=600&h=600&fit=crop&q=80',
  },
  {
    id: 6,
    name: 'Ragi Powder',
    description: 'Nutritious ragi powder, high in calcium and fiber',
    weight: '500gm / 1kg',
    rating: 4.9,
    category: 'Powders',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&h=600&fit=crop&q=80',
  },
]

const categories = ['All', 'Powders', 'Oils', 'Traditional', 'Beverages']

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(p => p.category === selectedCategory)

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Explore our wide range of premium stationary items. All products are carefully 
            sourced and quality-assured for your peace of mind.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="card">
              <div className="relative aspect-square overflow-hidden bg-gray-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {product.category}
                  </span>
                  <div className="flex items-center space-x-1">
                    <svg className="w-4 h-4 text-accent fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                    <span className="text-sm font-semibold">{product.rating}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Available in</p>
                    <p className="font-semibold text-primary">{product.weight}</p>
                  </div>
                  <button className="bg-secondary hover:bg-secondary-dark text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contact" className="btn-primary inline-block">
            View All Products & Get Quote
          </a>
        </div>
      </div>
    </section>
  )
}

