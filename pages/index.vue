
<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
const query: QueryBuilderParams = { path: '/articles', where: [{ layout: 'article' }], limit: 5, sort: [{ date: -1 }] }
</script>



<template>

    <!-- <div>
        <h2>About</h2>
        <p>
            Emmanuel is an Analytical Tech entrepreneur with 10+ years of experience and a passion for developing innovative
            and value-added products/services based on disruptive web and mobile technologies. He currently sits as a
            Founder & CEO of a fast-growing Business Intelligence platform called "StartupList Africa" which provides
            valuable knowledge & insight into the African Startup Ecosystem.
        </p>

    </div> -->


        <div class="mb-8">
            <h2 class="mb-4">Hi!</h2>
            <p class="my-5 [blockquote_&amp;]:my-2">
                Welcome to my little corner on the web.
                I'm deeply passionate about the web and technology, with my experience stretching across various sectors within this field. At present, I find myself particularly intrigued by the spheres of Product innovation, SaaS solutions, Startups, and cutting-edge technologies — these subjects are bound to surface occasionally in my writings. I invite you to join me as I delve into these interests and reflect on my discoveries.
            </p>
        </div>


    <div>
        <h2>Writing</h2>
        <ContentList path="/blog" v-slot="{ list }">
            <ul v-for="article in list" :key="article._path">
                <li>
                    <NuxtLink :to="article._path">{{ article.title }}</NuxtLink>
                </li>
            </ul>
        </ContentList>
    </div>

        <!-- Projects section -->
        <h2 class="mb-4">Projects</h2>
        <p class="text-gray-700 mb-8">From time to time, I buld and launch new projects, sometimes solo and other times alongside friends. Below are my top two favorites. For a comprehensive list, please click <NuxtLink to="/projects">here</NuxtLink>.</p>

                <!-- Project cards -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="bg-gray-700 p-4 rounded-lg">
                    <!-- <img src="path-to-pdfpintar-image.jpg" alt="pdfpintar" class="mb-4"> -->
                    <h3 class="text-xl font-semibold mb-2 text-white">StartupList Africa</h3>
                    <p class="text-gray-300">Discover, Learn and engage with African Startups.</p>
                </div>

                <!-- <div class="bg-gray-700 p-4 rounded-lg">
                    <img src="path-to-readclip-image.jpg" alt="ReadClip" class="mb-4">
                    <h3 class="text-xl font-semibold mb-2">ReadClip</h3>
                    <p>A bookmark manager with focusing on reading experience.</p>
                </div> -->
            </div>

            <!-- Get in touch -->
            <h2 class="mb-4">Get in touch</h2>

    <!-- <div class="abstract">
        <h2>Abstract</h2>
        <p>...</p>
    </div> -->
</template>
  
