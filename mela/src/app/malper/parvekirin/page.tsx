// Bismillahirrahmanirrahim
// Elhamdulillahirabbulalemin
// Ve salatu ve selamu ala resulina Muhammedin 
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
// Estağfirullah El-Azim



"use client"

import React from 'react'
import dynamic from 'next/dynamic'

const PostEditor = dynamic(() => import('@/components/posts/editor/PostEditor'), {
  ssr: false,
})

const ForYouFeed = dynamic(() => import('@/app/(main)/ForYouFeed'), {
  ssr: false,
})

export default function page() {
  return (
    <main className="container mx-auto py-8">
      <h1 className="text-2xl font-semibold mb-4">Paylaşımlar</h1>

      {/* Post editor (client) */}
      <section className="mb-6">
        <PostEditor />
      </section>

      {/* Feed */}
      <section>
        <ForYouFeed />
      </section>
    </main>
  )
}