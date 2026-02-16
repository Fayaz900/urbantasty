'use client'

import { useState } from 'react'
import Image from 'next/image'
import jackfruitImg from '../assets/Jackfruit.jpg'
import drumstickImg from '../assets/drumstick.jpg'
import ragiImg from '../assets/ragi.jpg'
import bananaImg from '../assets/banana.jpg'
import milletImg from '../assets/millet.jpg'
import drumstickLeafPowderImg from '../assets/drumstickleafpowder.jpg'
import changalamparandaImg from '../assets/Changalamparanda_Chatni.jpg'
import bananaStemImg from '../assets/Banana_Stem_Kondattam.jpg'
import coconutOilImg from '../assets/Coconut_Oil.jpg'
import naruneendiImg from '../assets/Naruneendi.jpg'

const products = [
  {
    id: 1,
    name: 'Jackfruit Puttu Podi',
    description: 'Jackfruit flour mixed with rice flour is a nutritious, low-glycaemic and gluten-free, fibre-rich alternative to traditional flour, ideal for managing blood sugar and weight.',
    weight: '500gm / 1kg',
    rating: 4.8,
    category: 'Powders',
    image: jackfruitImg,
  },
  {
    id: 2,
    name: 'Drumstick Leaf Puttu Powder',
    description: 'Drumstick leaf Puttu powder (Muringa) mixed with rice flour is a highly nutritious, nutrient-dense, and versatile ingredient, often used in South Indian cuisine to fortify daily meals. It combines the earthy, slightly bitter, and spinach-like flavor of moringa with the neutral, binding properties of rice flour. This mixture is rich in vitamins A, C, and E, as well as minerals like iron and calcium. ',
    weight: '500ml / 1L',
    rating: 4.9,
    category: 'Powders',
    image: drumstickImg,
  },
  {
    id: 3,
    name: 'Sprouted Ragi',
    description: 'Sprouted ragi flour is a nutrient-dense, gluten-free, and vegan powder made by soaking, sprouting, drying, and grinding finger millet grains. This process significantly increases the bioavailability of iron, calcium, and protein while reducing anti-nutrients like phytates for better digestion. It is highly prized as a, iron-rich, high-fibre, and easily digestible superfood, ideal for baby food, porridge, rotis, and healthy baking. ',
    weight: '250gm / 500gm',
    rating: 4.7,
    category: 'Powders',
    image: ragiImg,
  },
  {
    id: 4,
    name: 'Banana Flour',
    description: 'Banana flour is a gluten-free, nutrient-dense powder made from dried, unripe green bananas, widely used as a healthy, grain-free alternative to wheat flour. It is highly prized for its high resistant starch content, which aids gut health, and its mild, earthy flavour that works well in both sweet and Savory baking, thickening soups, and smoothies. ',
    weight: '200gm / 500gm',
    rating: 4.8,
    category: 'Powders',
    image: bananaImg,
  },
  {
    id: 5,
    name: 'Millet Porridge Mix',
    description: 'Barnyard millet (Echinochloa frumentacea), or Sanwa/Kudiraivali, is a highly nutritious, gluten-free, and hardy minor millet, ideal as a fast-cooking, low-GI alternative to rice. It is rich in protein, dietary fibre, iron, and calcium, supporting cardiovascular health and diabetes management.',
    weight: '500ml / 1L',
    rating: 4.6,
    category: 'Powders',
    image: milletImg,
  },
  {
    id: 6,
    name: 'Drumstick Leaf Powder',
    description: 'Drumstick Leaf Powder (Moringa powder) is a nutrient-dense, green, herbaceous powder made from dried Moringa oleifera leaves. It is a powerhouse of iron, calcium, potassium, and vitamins A, C, and E. It acts as a superfood, boosting immunity, strengthening bones, reducing inflammation, and aiding in digestion, making it ideal for daily supplementation in smoothies, soups, or as a nutritional additive to rotis. ',
    weight: '500gm / 1kg',
    rating: 4.9,
    category: 'Powders',
    image: drumstickLeafPowderImg,
  },
  {
    id: 7,
    name: 'Changalamparanda Chatni',
    description: 'Changalamparanda (Cissus quadrangularis) is a well-known perennial medicinal climber from the Vitaceae family, widely used in Ayurveda to treat bone fractures, joint pain, and digestive issues. Known as "adamant creeper" or "bone setter," this succulent, fast-growing vine features four-angled, green, winged stems. ',
    weight: '500gm / 1kg',
    rating: 4.9,
    category: 'Traditional',
    image: changalamparandaImg,
  },
  {
    id: 8,
    name: 'Banana Stem Kondattam',
    description: 'Sliced ​​banana stem, kneaded in a mixture of rice flour, sesame seeds, and cumin seeds, dried, and then fried in coconut oil.',
    weight: '500ml / 1L',
    rating: 4.6,
    category: 'Traditional',
    image: bananaStemImg,
  },
  {
    id: 9,
    name: 'Coconut Oil',
    description: 'Coconut Oil is a solid white fat derived from coconut meat, rich in saturated fats, especially lauric acid, giving it a distinct aroma, solid texture at room temperature and resistance to rancidity, used in cooking, cosmetics and soaps for its flavour, high smoke point and emollient properties, with virgin oil retaining more natural antioxidants.',
    weight: '500ml / 1L',
    rating: 4.6,
    category: 'Oils',
    image: coconutOilImg,
  },
  {
    id: 10,
    name: 'Naruneendi (Nannari) Sarbath',
    description: 'Naruneendi/Indian Sarsaparilla has been used in traditional medicine throughout the Indian subcontinent due to the diverse biological activities attributed to its different parts, especially the roots',
    weight: '500ml / 1L',
    rating: 4.6,
    category: 'Beverages',
    image: naruneendiImg,
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
              className={`px-6 py-2 rounded-full font-medium transition-colors ${selectedCategory === category
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
              <div className="flex justify-center items-center aspect-square overflow-hidden bg-gray-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={200}
                  className="object-cover transition-transform duration-300 hover:scale-110 rounded-lg"
                />

              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {product.category}
                  </span>
                  {/* <div className="flex items-center space-x-1">
                    <svg className="w-4 h-4 text-accent fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                    <span className="text-sm font-semibold">{product.rating}</span>
                  </div> */}
                </div>
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  {/* <div>
                    <p className="text-sm text-gray-500">Available in</p>
                    <p className="font-semibold text-primary">{product.weight}</p>
                  </div> */}
                  {/* <button className="bg-secondary hover:bg-secondary-dark text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <a href="#contact" className="btn-primary inline-block">
            View All Products & Get Quote
          </a>
        </div> */}
        
      </div>
    </section>
  )
}

