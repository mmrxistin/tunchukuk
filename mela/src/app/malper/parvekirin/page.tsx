// Bismillahirrahmanirrahim
// Elhamdulillahirabbulalemin
// Ve salatu ve selamu ala resulina Muhammedin 
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
// Estağfirullah El-Azim



import React from 'react'
import PostEditor from '@/components/posts/editor/PostEditor'
import ForYouFeed from '@/app/(main)/ForYouFeed'

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