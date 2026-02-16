import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Products from '@/components/Products'
import PromoBanners from '@/components/PromoBanners'
import Newsletter from '@/components/Newsletter'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Products />
      <About />
      <PromoBanners />
      <Newsletter />
      <Footer />
    </main>
  )
}
