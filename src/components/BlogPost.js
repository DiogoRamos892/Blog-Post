import React from 'react';

const BlogPost = () => {
  return (
    <div className="max-w-5xl mx-auto p-8 bg-gray-100 font-serif" style={{ fontFamily: 'Georgia, Times New Roman, serif' }}>
      <header className="mb-8 border-b-4 border-black pb-4">
        <h1 className="text-6xl font-bold mb-2 text-black leading-tight text-center">
          The Harlem Herald
        </h1>
        <p className="text-center text-gray-600">Echoing the Voices of the Renaissance</p>
      </header>

      <div className="flex flex-col md:flex-row gap-8">
        <main className="md:w-3/4">
          <article>
            <h2 className="text-5xl font-bold mb-4 text-black leading-tight">
              "I, Too": A Powerful Voice of Resilience
            </h2>
            
            <p className="text-xl italic mb-6 text-gray-700">
              "In just 18 lines, Langston Hughes captures a century of struggle and hope."
            </p>

            <p className="text-sm mb-4">
              By Diogo Ramos | July 23, 2024 | ON, Toronto
            </p>

            <p className="mb-4 text-lg text-black leading-relaxed text-justify">
              When I first read Langston Hughes' poem "I, Too," I was struck by its blunt force and relevance. It's a voice from history reaching out to us today, questioning identity, community, and our fight for a better future.
            </p>
            <p className="mb-4 text-lg text-black leading-relaxed text-justify">
              I felt the authenticity of the black experience that he wrote about, pursuing happiness and greatness despite obstruction. The opening, "I, too, sing America," struck me. Hughes claimed his spot in the nation, defining what it means to be American.
            </p>
            <figure className="mb-4">
              <img src="/langston_hughes_ap_img.jpg" alt="Langston Hughes" className="w-full h-auto object-cover mb-2"/>
              <figcaption className="text-sm italic text-gray-600 text-center">Langston Hughes, the author of "I, Too"</figcaption>
            </figure>
            <p className="mb-4 text-lg text-black leading-relaxed text-justify">
              The poem insists that African Americans be SEEN and acknowledged. Hughes, sent to eat in the kitchen, proclaims confidently that "Tomorrow, / I'll be at the table / When company comes." This poem captures both harsh realities and optimistic dreams.
            </p>

            <section className="mt-8 border-t-2 border-gray-300 pt-4">
              <h3 className="text-2xl font-bold mb-4 text-black">Historical Context: The Voice of the Harlem Renaissance</h3>
              <p className="mb-4 text-lg text-black leading-relaxed text-justify">
                To appreciate "I, Too," we must understand the Harlem Renaissance. The 1920s cultural progression spawned a Black cultural revolution, with Hughes as a prominent voice. Writing during strict racial segregation, Hughes boldly declared the pride and humanity of Black Americans.
              </p>
              <figure className="mb-4">
                <img src="/topic-harlem-renaissance-gettyimages-517322608.jpg" alt="A scene from the Harlem Renaissance" className="w-full h-auto object-cover mb-2"/>
                <figcaption className="text-sm italic text-gray-600 text-center">A scene from the Harlem Renaissance</figcaption>
              </figure>
              <p className="mb-4 text-lg text-black leading-relaxed text-justify">
                The poem's kitchen setting illustrates segregation. Yet, Hughes shows resilience: "But I laugh, / And eat well, / And grow strong." This is not just survival, but thriving despite oppression.
              </p>
            </section>

            <section className="mt-8 border-t-2 border-gray-300 pt-4">
              <h3 className="text-2xl font-bold mb-4 text-black">Poetic Structure: Simplicity with Impact</h3>
              <p className="mb-4 text-lg text-black leading-relaxed text-justify">
                Hughes writes in free verse, using line breaks to emphasize meaning. This adds a musical quality, giving the poem a natural rhythm.
              </p>
              <p className="mb-4 text-lg text-black leading-relaxed text-justify">
                For instance: "I am the darker brother." Hughes says it all in five words, with each subsequent read revealing new layers of meaning.
              </p>
              <figure className="mb-4">
                <img src="/john-lewis-selma-1965.jpg" alt="A powerful image of segregation" className="w-full h-auto object-cover mb-2"/>
                <figcaption className="text-sm italic text-gray-600 text-center">A powerful image of segregation | Police brutality during Selma march</figcaption>
              </figure>
            </section>

            <section className="mt-8 border-t-2 border-gray-300 pt-4">
              <h3 className="text-2xl font-bold mb-4 text-black">Symbolism and Themes: From Kitchen to Table</h3>
              <p className="mb-4 text-lg text-black leading-relaxed text-justify">
                The poem is rich with symbolism. The kitchen represents segregation and marginalization, while the table symbolizes equality and inclusion. Hughes writes, "Tomorrow, / I'll be at the table / When company comes." This is a metaphor for full participation in American society.
              </p>
              <p className="mb-4 text-lg text-black leading-relaxed text-justify">
                What struck me most was Hughes' certainty. There's no "if" or "maybe" – it's "Tomorrow," a definite future. This confidence in the face of oppression is deeply inspiring.
              </p>
              <figure className="mb-4">
                <img src="/Leslies.1-1280px.jpg" alt="The table: a symbol of equality" className="w-full h-auto object-cover mb-2"/>
                <figcaption className="text-sm italic text-gray-600 text-center">The table: a symbol of equality</figcaption>
              </figure>
            </section>

            <section className="mt-8 border-t-2 border-gray-300 pt-4">
              <h3 className="text-2xl font-bold mb-4 text-black">Voice and Tone: Confidence in the Face of Adversity</h3>
              <p className="mb-4 text-lg text-black leading-relaxed text-justify">
                The voice in Hughes' poem is strong and unapologetic. There is no begging or whining. Instead, Hughes refuses to let others define him. This tone is incredibly empowering.
              </p>
              <p className="mb-4 text-lg text-black leading-relaxed text-justify">
                I admired Hughes' ability to envision a better future despite difficulties. It's a reminder that how we perceive ourselves can help overcome adversity.
              </p>
              <figure className="mb-4">
                <img src="/gettyimages-74296266_wide-f250b7a1ac48acf6e18a527663d69171ff1101b0.jpg" alt="Confidence in the face of adversity" className='w-full h-auto object-cover mb-2'/>
                <figcaption className="text-sm italic text-gray-600 text-center">Confidence in the face of adversity | Woman dancing & singing</figcaption>
              </figure>
            </section>

            <section className="mt-8 border-t-2 border-gray-300 pt-4">
              <h3 className="text-2xl font-bold mb-4 text-black">Contemporary Relevance: Echoes in Modern America</h3>
              <p className="mb-4 text-lg text-black leading-relaxed text-justify">
                Despite being written almost a century ago, "I, Too" remains strikingly relevant. As we continue to grapple with issues of racial justice, Hughes' words ring true. The poem's themes of identity and belonging echo in movements like Black Lives Matter.
              </p>
              <p className="mb-4 text-lg text-black leading-relaxed text-justify">
                Reading this poem today, I'm struck by how far we've come – and how far we still have to go. Hughes' vision of a future where no one would "dare" to discriminate is still a work in progress.
              </p>
              <figure className="mb-4">
                <img src="/two-african-american-kids-looking-through-window.jpg" alt="Two African American children looking through a window, symbolizing hope for the future" className="w-full h-auto object-cover mb-2"/>
                <figcaption className="text-sm italic text-gray-600 text-center">Two children looking out the window</figcaption>
              </figure>
            </section>

            <section className="mt-8 border-t-2 border-gray-300 pt-4">
              <h3 className="text-2xl font-bold mb-4 text-black">Personal Reflection: Finding Strength in Hughes' Words</h3>
              <p className="mb-4 text-lg text-black leading-relaxed text-justify">
                As I reflect on "I, Too," I'm struck by its message of hope and determination. While I may not have faced the exact challenges Hughes describes, I've had moments where I felt like an outsider.
              </p>
              <p className="mb-4 text-lg text-black leading-relaxed text-justify">
                Hughes' words remind me that resilience and self-belief are powerful tools. This poem has become a source of strength when facing adversity.
              </p>
              <figure className="mb-4">
                <img src="/black-pride-anthems-gettyimages-517322986.jpg" alt="Finding personal strength in Hughes' words" className="w-full h-auto object-cover mb-2"/>
                <figcaption className="text-sm italic text-gray-600 text-center">Martin Luther King Jr. & Raplh David Abernathy march from Selma to Montgomery in March of 1065</figcaption>
              </figure>
            </section>

            <section className="mt-8 border-t-2 border-gray-300 pt-4">
              <h3 className="text-2xl font-bold mb-4 text-black">Conclusion: A Timeless Call for Equality</h3>
              <p className="mb-4 text-lg text-black leading-relaxed text-justify">
                "I, Too" stands as a testament to the enduring power of words in the fight for equality. Hughes crafts a message that is deeply personal and universally resonant, inspiring us to confront inequality and imagine a more just future.
              </p>
              <figure className="mb-4">
                <img src="/7243255-AFIJSZEC-7.jpg" alt="A sunrise image symbolizing hope and a new dawn for equality" className="w-full h-auto object-cover mb-2"/>
                <figcaption className="text-sm italic text-gray-600 text-center">A new dawn for equality</figcaption>
              </figure>
              <p className="text-xl italic text-gray-700 font-serif">
                How can we continue to embody the resilience and hope expressed in Hughes' poem in our struggle for a more just society? As we face our challenges, may we carry the strength and determination echoed in those powerful words: "I, too, am America."
              </p>
            </section>
          </article>
        </main>
        
        <aside className="md:w-1/4">
          <div className="bg-gray-200 p-4 mb-6">
            <h4 className="text-xl font-bold mb-2">About Langston Hughes</h4>
            <p className="text-sm mb-2">Langston Hughes (1901-1967) was a central figure in the Harlem Renaissance. Known for his insightful, colorful portrayals of black life in America, Hughes wrote novels, short stories, plays, and poetry.</p>
          </div>

          <div className="bg-gray-200 p-4 mb-6">
            <h4 className="text-xl font-bold mb-2">Key Themes in "I, Too"</h4>
            <ul className="list-disc list-inside text-sm">
              <li>American identity</li>
              <li>Racial equality</li>
              <li>Resilience and hope</li>
              <li>Future vision</li>
            </ul>
          </div>
        </aside>
      </div>

      <footer className="mt-8 border-t-2 border-gray-300 pt-4 text-center text-gray-600">
        <p>© 2024 The Harlem Herald. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default BlogPost;
