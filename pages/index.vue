
<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
const query: QueryBuilderParams = { path: '/articles', where: [{ layout: 'article' }], limit: 5, sort: [{ date: -1 }] }
</script>


<template>
    <div>
        <h2>About</h2>
        <p>
            Emmanuel is an Analytical Tech entrepreneur with 10+ years of experience and a passion for developing innovative
            and value-added products/services based on disruptive web and mobile technologies. He currently sits as a
            Founder & CEO of a fast-growing Business Intelligence platform called "StartupList Africa" which provides
            valuable knowledge & insight into the African Startup Ecosystem.
        </p>

    </div>


    <!-- <div>
        <h2>Popular articles</h2>
        <ul>
            <li><a href="#">Cooking For Founders</a> – Jan 10, 2021</li>
            <li><a href="#">Cooking For Founders</a> – Jan 10, 2021</li>
        </ul>
    </div> -->


    <div>
        <h2>Recent articles</h2>
        <ContentList path="/articles" v-slot="{ list }">
            <ul v-for="article in list" :key="article._path">
                <li>
                    <NuxtLink :to="article._path">{{ article.title }}</NuxtLink>
                </li>
                <!-- <li>{{ article.title }}</li> -->
            </ul>
        </ContentList>
    </div>

    <!-- <div class="abstract">
        <h2>Abstract</h2>
        <p>...</p>
    </div> -->
</template>
  
