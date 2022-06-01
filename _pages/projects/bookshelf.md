---
title: 'Bookshelf'
excerpt: 'My personal collection of books on my bookshelf and my kindle.'
link: 'https://bookshelf.stevenbister.com/'
github: 'https://github.com/stevenbister/bookshelf'
---

This is a small project I built for myself. I like reading -- fantasy novels mostly -- and I've started to build up quite the collection, both physically and on my Kindle.

I wanted somewhere to keep a track of everything I own, I'm reading or have read and thought this a good opportunity to have a play around some more with [Next.js](https://nextjs.org/) and [Sanity.io](https://www.sanity.io/), so that's what I did!

I set up an instance of Sanity for hosting my content and created my schemas (then spent ages finding decent images to use).

Once that was done and the content all in Sanity I setup the GraphQL endpoint and got to work pulling that into Next and generating the pages. It's a static site so I was able to offload a bunch of filtering, mapping and sorting the data into the `getStaticProps()` function Next provides, keeping as much of the fetching and filtering work off the client.

If you fancy a gander around in the code you can checkout [the GitHub repo](https://github.com/stevenbister/bookshelf) above, or if you wanna have a look around the site you can do that at [https://bookshelf.stevenbister.com/](https://bookshelf.stevenbister.com/)
