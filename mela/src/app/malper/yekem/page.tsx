// Bismillahirrahmanirrahim
// Elhamdulillahirabbulalemin
// Ve salatu ve selamu ala resulina Muhammedin 
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
// Estağfirullah El-Azim



"use client"

import React from 'react'
import dynamic from 'next/dynamic'

const CategoryFeed = dynamic(() => import('../components/CategoryFeed'), {
  ssr: false,
})

export default function page() {
  return (
    <main className="container mx-auto py-8">
      <h1 className="text-2xl font-semibold mb-4">Paylaşımlar</h1>

     

      {/* Feed (single category) */}
      <section>
        {/* Change the category string below to show only that category's posts (e.g. NEWS, TECHNOLOGY) */}
        <CategoryFeed category={"NEWS"} />
      </section>
    </main>
  )
}