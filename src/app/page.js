import Hero from '@/components/Hero'
import Product from '@/components/Product'
import SliderNav from '@/components/SliderNav'
import React from 'react'

const page = () => {
  return (
    <main>
      <section>
        <div className='containers flex items-center gap-5'>
          <SliderNav />
          <Hero />
        </div>
      </section>
      <section>
        <div className='containers'>
          <Product />
        </div>
      </section>
    </main>
  )
}

export default page