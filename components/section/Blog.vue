<template>
  <section>
    <main-heading
      main-heading="Insights"
      sub-heading="My Articles"
      last-symbol="."
    />
    <div class="flex flex-col gap-y-7 items-center px-5 lg:px-10">
      <blog-card
        title="How To Get Started In Web Development"
        image="blog-3.jpg"
        published-at="03 October 2023"
      >
        Are you interested in the exciting world of web development but don't
        know where to begin? You're not alone. Many aspiring developers
      </blog-card>

      <blog-card
        title="Why Your Business Should Have A Website"
        image="blog-2.avif"
        published-at="18 September 2023"
      >
        In today's digital age, having a strong online presence is not just an
        option; it's a necessity for businesses of all sizes. In this blog post
      </blog-card>

      <blog-card
        title="My Experience In Software Engineering"
        image="blog-1.png"
        published-at="13 September 2023"
      >
        As a first-year software engineering student at JIAT (Java Institute For
        Advanced Technology), I embarked on this
      </blog-card>
    </div>
    <div class="w-full flex justify-center mt-5">
      <primary-button text="Visit My Blog" />
    </div>
  </section>
</template>
