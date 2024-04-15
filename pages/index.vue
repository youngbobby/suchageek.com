<script setup lang="ts">
import type { QueryBuilderParams } from "@nuxt/content/dist/runtime/types";
const query: QueryBuilderParams = {
  path: "/articles",
  where: [{ layout: "article" }],
  limit: 5,
  sort: [{ createdAt: -1 }],
};
</script>

<template>
  <div class="md:px-8 max-w-2xl">
    <!-- Welcome section-->
    <div class="mb-8">
      <h2 class="mb-4">About</h2>
      <p class="my-5 [blockquote_&amp;]:my-2">
        Welcome to my personal blog where I share insights on coding,
        technology, and my journey through the fascinating world of software
        development. Occasionally, I'll also offer glimpses into my life and the
        lessons I've learned along the way.
      </p>
    </div>

    <!-- Articles section-->
    <div>
      <h2>Articles</h2>
      <ContentList path="/blog" v-slot="{ list }">
        <ul v-for="article in list" :key="article._path">
          <li>
            <NuxtLink :to="article._path">{{ article.title }}</NuxtLink>
          </li>
        </ul>
      </ContentList>
    </div>

    <!-- Projects section -->
    <div>
      <h2 class="mb-4">Projects</h2>
      <p class="text-gray-700 mb-8">
        From time to time, I buld and launch new projects, sometimes solo and
        other times alongside friends. Below are my top two favorites. For a
        comprehensive list, please click
        <NuxtLink to="/projects">here</NuxtLink>.
      </p>

      <!-- <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-gray-700 p-4 rounded-lg">
          <h3 class="text-xl font-semibold mb-2 text-white">
            StartupList Africa
          </h3>
          <p class="text-gray-300">
            Discover, Learn and engage with African Startups.
          </p>
        </div>
      </div> -->
    </div>

    <!-- Contact Section -->
    <div>
      <h2 class="mb-4">Contact</h2>
      <p class="text-gray-700 mb-8">
        I'm always open to new opportunities and collaborations. If you'd like
        to reach out, please feel free to send me an email at
        <a href="#" onclick="window.location.href='mailto:' + 'emmaibe101' + '@' + 'gmail' + '.' + 'com';return false;">
        emmaibe101 [at] gmail [dot] com
        </a>.
        
        <!-- <a href="mailto:">emmaibe101@gmail.com</a>. -->
      </p>
    </div>
  </div>
</template>
